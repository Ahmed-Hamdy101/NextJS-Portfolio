"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Missing required fields." };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.GMAIL_SMTP_HOST,
        port: parseInt(process.env.GMAIL_SMTP_PORT || "587"),
        secure: false, // true for 465, false for 587
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.GMAIL_EMAIL}>`, // Gmail enforces sender alias to be your account
            to: process.env.GMAIL_EMAIL, // Sends to yourself
            replyTo: email, // Clicking reply hits the user's email directly
            subject: subject || `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Message from Portfolio</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("SMTP Email Error:", error);
        return { success: false, error: "Failed to send message. Try again later." };
    }
}