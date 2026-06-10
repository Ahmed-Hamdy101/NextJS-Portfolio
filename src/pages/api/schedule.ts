import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, date, time, duration, note, timezone } = req.body;

    if (!name || !email || !date || !time || !duration) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const requiredEnvs = [
        'GOOGLE_CLIENT_ID',
        'GOOGLE_CLIENT_SECRET',
        'GOOGLE_REDIRECT_URI',
        'GOOGLE_REFRESH_TOKEN',
        'GMAIL_EMAIL',
        'APP_PASSWORD',
    ];
    for (const key of requiredEnvs) {
        if (!process.env[key]) {
            return res.status(500).json({ error: `Missing env var: ${key}` });
        }
    }

    const targetTimezone = timezone || 'Africa/Cairo';

    const dateParts = date.split('-').map(Number);
    const timeParts = time.split(':').map(Number);
    if (dateParts.length !== 3 || timeParts.length !== 2 || isNaN(Number(duration))) {
        return res.status(400).json({ error: 'Invalid date, time, or duration format.' });
    }

    const startDt = new Date(`${date}T${time}:00`);
    const endDt = new Date(startDt.getTime() + Number(duration) * 60 * 1000);

    const pad = (n: number) => String(n).padStart(2, '0');
    const toLocalISO = (d: Date) =>
        `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

    // ── ICS helpers ────────────────────────────────────────────────────────────
    const toICSDate = (d: Date) =>
        `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;

    const uid = `meet-${Date.now()}@ahmedhamdy101.is-a.dev`;

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    try {
        // ── 1. Google Calendar event ───────────────────────────────────────────
        oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        const event = await calendar.events.insert({
            calendarId: 'primary',
            sendUpdates: 'all',          // Google sends native invite to all attendees
            requestBody: {
                summary: `Meeting with ${name}`,
                description: note
                    ? `Scheduled via portfolio.\n\nNote from ${name}:\n${note}`
                    : 'Scheduled via portfolio.',
                start: { dateTime: toLocalISO(startDt), timeZone: targetTimezone },
                end:   { dateTime: toLocalISO(endDt),   timeZone: targetTimezone },
                attendees: [
                    { email: process.env.GMAIL_EMAIL as string, displayName: 'Ahmed Hamdy', organizer: true },
                    { email, displayName: name },
                ],
                conferenceData: {
                    createRequest: {
                        requestId: uid,
                        conferenceSolutionKey: { type: 'hangoutsMeet' },
                    },
                },
                guestsCanSeeOtherGuests: false,
                reminders: {
                    useDefault: false,
                    overrides: [
                        { method: 'email', minutes: 60 },
                        { method: 'popup', minutes: 15 },
                    ],
                },
            },
            conferenceDataVersion: 1,
        });

        const meetLink =
            event.data.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video')?.uri ?? null;
        const calendarLink = event.data.htmlLink ?? null;

        // ── 2. Build .ics attachment (works in ALL calendar apps) ──────────────
        const icsLines = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Ahmed Hamdy Portfolio//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:REQUEST',
            'BEGIN:VEVENT',
            `UID:${uid}`,
            `DTSTAMP:${toICSDate(new Date())}Z`,
            `DTSTART;TZID=${targetTimezone}:${toICSDate(startDt)}`,
            `DTEND;TZID=${targetTimezone}:${toICSDate(endDt)}`,
            `SUMMARY:Meeting with Ahmed Hamdy`,
            `DESCRIPTION:${note ? `Note: ${note}\\nMeet: ${meetLink ?? 'TBD'}` : `Meet: ${meetLink ?? 'TBD'}`}`,
            `ORGANIZER;CN=Ahmed Hamdy:mailto:${process.env.GMAIL_EMAIL}`,
            `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Ahmed Hamdy:mailto:${process.env.GMAIL_EMAIL}`,
            `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=${name}:mailto:${email}`,
            meetLink ? `URL:${meetLink}` : '',
            'STATUS:CONFIRMED',
            'SEQUENCE:0',
            'BEGIN:VALARM',
            'TRIGGER:-PT60M',
            'ACTION:DISPLAY',
            'DESCRIPTION:Reminder',
            'END:VALARM',
            'END:VEVENT',
            'END:VCALENDAR',
        ].filter(Boolean).join('\r\n');

        // ── 3. Email labels ────────────────────────────────────────────────────
        const dateLabel = startDt.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            timeZone: targetTimezone,
        });
        const timeLabel = startDt.toLocaleTimeString('en-US', {
            hour: '2-digit', minute: '2-digit',
            timeZone: targetTimezone,
        });

        // ── 4. Transporter — no verify() (saves ~500ms round-trip) ─────────────
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL_EMAIL,
                pass: process.env.APP_PASSWORD,
            },
            connectionTimeout: 10_000,
            pool: true,   // reuse connection for both sends
        });

        // ── 5. Email HTML templates ────────────────────────────────────────────
        const guestHtml = `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#09090b;color:#e4e4e7;border-radius:16px;overflow:hidden;border:1px solid #27272a">
  <div style="background:linear-gradient(135deg,#ef4444,#7c3aed);padding:32px;text-align:center">
    <h1 style="margin:0;font-size:24px;font-weight:900;color:#fff">Meeting Confirmed ✓</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px">Ahmed Hamdy · Full Stack Engineer</p>
  </div>
  <div style="padding:32px">
    <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px">Hi <strong style="color:#e4e4e7">${name}</strong>, your meeting is confirmed. The <strong style="color:#e4e4e7">.ics</strong> file attached will add it to any calendar app automatically.</p>
    <div style="background:#18181b;border-radius:12px;padding:20px;margin-bottom:24px;border:1px solid #27272a">
      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:8px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Date</td>
          <td style="padding:8px 0;color:#e4e4e7;font-size:14px;text-align:right">${dateLabel}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Time</td>
          <td style="padding:8px 0;color:#e4e4e7;font-size:14px;text-align:right">${timeLabel} (${targetTimezone})</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Duration</td>
          <td style="padding:8px 0;color:#e4e4e7;font-size:14px;text-align:right">${duration} minutes</td>
        </tr>
        ${note ? `<tr><td style="padding:8px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Note</td><td style="padding:8px 0;color:#e4e4e7;font-size:14px;text-align:right">${note}</td></tr>` : ''}
      </table>
    </div>
    ${meetLink ? `<a href="${meetLink}" style="display:block;background:linear-gradient(135deg,#ef4444,#7c3aed);color:#fff;text-align:center;padding:14px 24px;border-radius:10px;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;margin-bottom:16px">Join Google Meet</a>` : ''}
    ${calendarLink ? `<a href="${calendarLink}" style="display:block;background:#18181b;color:#a1a1aa;text-align:center;padding:12px 24px;border-radius:10px;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;border:1px solid #27272a">View in Google Calendar</a>` : ''}
    <p style="margin:24px 0 0;color:#52525b;font-size:12px;text-align:center">Questions? Reply to this email — ahmedhamdy.mh95@gmail.com</p>
  </div>
</div>`;

        const ownerHtml = `
<div style="font-family:sans-serif;max-width:480px">
  <h2 style="color:#ef4444">📅 New Meeting Scheduled</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Date:</strong> ${dateLabel}</p>
  <p><strong>Time:</strong> ${timeLabel} (${targetTimezone})</p>
  <p><strong>Duration:</strong> ${duration} min</p>
  ${note ? `<p><strong>Note:</strong> ${note}</p>` : ''}
  ${meetLink ? `<p><a href="${meetLink}">Google Meet Link</a></p>` : ''}
  ${calendarLink ? `<p><a href="${calendarLink}">Calendar Event</a></p>` : ''}
</div>`;

        // ── 6. Send both emails in parallel ────────────────────────────────────
        await Promise.all([
            // Guest: confirmation + .ics attachment (works without Google account)
            transporter.sendMail({
                from: `"Ahmed Hamdy" <${process.env.GMAIL_EMAIL}>`,
                to: email,
                replyTo: process.env.GMAIL_EMAIL,
                subject: `✓ Meeting Confirmed — ${dateLabel} at ${timeLabel}`,
                html: guestHtml,
                attachments: [
                    {
                        filename: 'meeting.ics',
                        content: icsLines,
                        contentType: 'text/calendar; method=REQUEST; charset=UTF-8',
                    },
                ],
            }),
            // Owner: notification copy (no ics needed)
            transporter.sendMail({
                from: `"Portfolio Scheduler" <${process.env.GMAIL_EMAIL}>`,
                to: process.env.GMAIL_EMAIL,
                subject: `📅 New Meeting: ${name} — ${dateLabel} at ${timeLabel}`,
                html: ownerHtml,
            }),
        ]);

        transporter.close();

        return res.status(200).json({ success: true, meetLink, calendarLink });
    } catch (error: any) {
        if (error.response?.data) {
            console.error('GOOGLE API ERROR:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('SCHEDULE ERROR:', error);
        }
        return res.status(500).json({ error: error.message || 'Scheduling failed.' });
    }
}
