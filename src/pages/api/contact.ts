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

    // 1. Validate that env variables are actually loaded
    if (!process.env.GMAIL_EMAIL || !process.env.APP_PASSWORD) {
        return res.status(500).json({ 
            error: 'Missing environment variables. Check your .env file layout.' 
        });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.GMAIL_SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.GMAIL_SMTP_PORT || '587'),
        secure: false, 
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
        // Force a brief timeout instead of hanging infinitely if network fails
        connectionTimeout: 10000, 
    });

    try {
        // 2. Verify connection configuration before sending
        await transporter.verify();

        // 3. Attempt mail transmission
        await transporter.sendMail({
            from: `"${name}" <${process.env.GMAIL_EMAIL}>`,
            to: process.env.GMAIL_EMAIL,
            replyTo: email,
            subject: subject || `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Message from Portfolio</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error: any) {
        // This will print the detailed system error in your terminal console
        console.error("CRITICAL SMTP ERROR:", error);

        // Exposes the exact error message string back to your web UI status bar
        return res.status(500).json({ 
            error: error.message || 'SMTP server connection failure.' 
        });
    }
}