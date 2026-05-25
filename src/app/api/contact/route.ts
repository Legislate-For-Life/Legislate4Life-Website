import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO, ORG_NAME } from "@/lib/constants";

// Resend SDK uses Node APIs, so this route runs on the Node runtime.
// `force-dynamic` keeps it from being prerendered.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Domain `legislateforlife.org` is verified in Resend, so any local part
// works. Using a dedicated `contact@` address makes Gmail filtering easy.
const FROM_ADDRESS = `${ORG_NAME} <contact@legislateforlife.org>`;
const TO_ADDRESS = CONTACT_INFO.email;

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // Honeypot. Real humans never fill this; bots usually do.
  company?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 200 || subject.length > 200 || message.length > 10_000) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; color:#111827;">
      <h2 style="font-size: 18px; margin: 0 0 4px; font-weight: 700;">New contact form submission</h2>
      <p style="color:#6b7280; margin: 0 0 24px; font-size: 13px;">From the contact page on legislateforlife.org.</p>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; width:130px; vertical-align:top;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Subject</td><td style="padding:8px 12px;">${escapeHtml(subject)}</td></tr>
      </table>
      <h3 style="font-size: 14px; margin: 24px 0 8px; font-weight: 600;">Message</h3>
      <p style="white-space: pre-wrap; line-height: 1.55; font-size: 14px; margin: 0;">${escapeHtml(message)}</p>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin: 28px 0 12px;">
      <p style="color:#9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
    </div>
  `.trim();

  const text = `New contact form submission

Name:    ${name}
Email:   ${email}
Subject: ${subject}

Message:
${message}

---
Reply directly to this email to respond to ${name}.`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html,
      text,
    });

    if (error) {
      console.error("Contact form Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form unexpected error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
