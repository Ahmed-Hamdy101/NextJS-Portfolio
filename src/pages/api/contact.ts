import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.GMAIL_SMTP_HOST,
        port: parseInt(process.env.GMAIL_SMTP_PORT || '587'),
        secure: false,
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.GMAIL_EMAIL}>`,
            to: process.env.GMAIL_EMAIL,
            replyTo: email,
            subject: subject || `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to send message.' });
    }
}