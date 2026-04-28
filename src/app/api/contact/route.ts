import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_TO = process.env.EMAIL_TO ?? "rajatraj9470@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM ?? `no-reply@${process.env.VERCEL_URL ?? "example.com"}`;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

let cachedTransporter: any = null;
let cachedTestAccount: any = null;

function validateEmail(email: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

async function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const smtpConfigured =
    !!process.env.SMTP_HOST &&
    !!process.env.SMTP_PORT &&
    !!process.env.SMTP_USER &&
    !!process.env.SMTP_PASS;

    if (smtpConfigured) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      pool: true,
      maxConnections: 1,
      keepAlive: true,
    } as any);
    return cachedTransporter;
  }

  // Development fallback (Ethereal) — create once and cache
  if (!cachedTestAccount) {
    cachedTestAccount = await nodemailer.createTestAccount();
  }

  cachedTransporter = nodemailer.createTransport({
    host: cachedTestAccount.smtp.host,
    port: cachedTestAccount.smtp.port,
    secure: cachedTestAccount.smtp.secure,
    auth: {
      user: cachedTestAccount.user,
      pass: cachedTestAccount.pass,
    },
  } as any);

  return cachedTransporter;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string | null)?.trim();
    const email = (formData.get("email") as string | null)?.trim();
    const phone = (formData.get("phone") as string | null)?.trim();
    const company = (formData.get("company") as string | null)?.trim();
    const message = (formData.get("message") as string | null)?.trim();
    const file = formData.get("file") as File | null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (file && file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Attachment exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit.` },
        { status: 413 }
      );
    }

    const transporter = await getTransporter();

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone ?? "-"}</p>
      <p><strong>Company:</strong> ${company ?? "-"}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const textBody = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\nCompany: ${company ?? "-"}\nMessage: ${message}`;

    const mailOptions: any = {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `[Contact] ${name} sent a message`,
      text: textBody,
      html: htmlBody,
    };

    if (file && file.size > 0) {
      // convert to buffer only when attachment is small (we already enforced limit)
      const buffer = Buffer.from(await file.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);

    const responsePayload: any = {
      success: true,
      message: "Email sent successfully.",
    };

    // If using Ethereal test account, provide preview URL for debugging
    if (cachedTestAccount) {
      responsePayload.previewUrl = nodemailer.getTestMessageUrl(info) || null;
      responsePayload.debug = "Ethereal test account used (development mode).";
    }

    return NextResponse.json(responsePayload);
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
