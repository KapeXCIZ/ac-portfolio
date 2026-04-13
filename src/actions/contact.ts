'use server'

import * as z from "zod";
import { Resend } from 'resend';
import { escape } from "html-escaper";

const formSchema = z.object({
    name: z
        .string()
        .max(20)
        .min(2),
    email: z
        .email(),
    content: z
        .string()
        .min(10)
        .max(300)
});

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendContact(data: { name: string, email: string, content: string }) {
    try {
        const safeData = formSchema.parse(data);
        await resend.emails.send({
            from: 'hello@alessiocapecchi.com',
            to: 'hello@alessiocapecchi.com',
            replyTo: safeData.email,
            subject: `Nuovo messaggio da ${safeData.name}`,
            html: `
    <!DOCTYPE html>
    <html>
        <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111;">
            <h2 style="border-bottom: 2px solid #111; padding-bottom: 8px;">
                Nuovo messaggio dal portfolio
            </h2>
            <table style="width: 100%; margin: 20px 0;">
                <tr>
                    <td style="padding: 8px 0; color: #666; width: 80px;">Nome</td>
                    <td style="padding: 8px 0; font-weight: bold;">${escape(safeData.name)}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #666;">Email</td>
                    <td style="padding: 8px 0;">
                        <a href="mailto:${escape(safeData.email)}">${escape(safeData.email)}</a>
                    </td>
                </tr>
            </table>
            <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin-top: 8px;">
                <p style="margin: 0; line-height: 1.6;">${escape(safeData.content)}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #999;">
                Inviato tramite il form di contatto su alessiocapecchi.com
            </p>
        </body>
    </html>
`
        });
        await resend.emails.send({
            from: 'noreply@alessiocapecchi.com',
            to: safeData.email,
            subject: `Ho ricevuto il tuo messaggio`,
            html: `
        <!DOCTYPE html>
        <html>
            <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111;">
                <h2>Ciao ${escape(safeData.name)}!</h2>
                <p>Ho ricevuto il tuo messaggio e ti risponderò il prima possibile.</p>
                <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin: 20px 0;">
                    <p style="margin: 0; color: #666; font-size: 14px;">Il tuo messaggio:</p>
                    <p style="margin: 8px 0 0; line-height: 1.6;">${escape(safeData.content)}</p>
                </div>
                <p>A presto,<br><strong>Alessio</strong></p>
            </body>
        </html>
    `
        });

        return { success: true };
    } catch (e) {
        console.error(e);
        return { success: false, error: "Errore durante l'invio" }
    }
}