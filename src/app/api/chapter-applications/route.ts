import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO, ORG_NAME } from "@/lib/constants";
import { findUsState, GRADE_LEVELS } from "@/data/us-states";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM_ADDRESS = `${ORG_NAME} <applications@legislateforlife.org>`;
const TO_ADDRESS = CONTACT_INFO.email;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeaderValue(value: string): string {
  return value
    .replace(/[\r\n\t\v\f\0]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);
}

function isValidDateOfBirth(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime())) return false;
  const now = new Date();
  return date <= now;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Chapter application form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        error:
          "Application service is not configured. Please email us directly.",
      },
      { status: 500 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const company = String(formData.get("company") ?? "").trim();
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const dateOfBirth = String(formData.get("dateOfBirth") ?? "").trim();
  const gradeLevel = String(formData.get("gradeLevel") ?? "").trim();
  const stateName = String(formData.get("state") ?? "").trim();
  const county = String(formData.get("county") ?? "").trim();
  const why = String(formData.get("why") ?? "").trim();
  const resumeEntry = formData.get("resume");

  if (
    !name ||
    !email ||
    !dateOfBirth ||
    !gradeLevel ||
    !stateName ||
    !county ||
    !why
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!(resumeEntry instanceof File) || resumeEntry.size === 0) {
    return NextResponse.json(
      { error: "Please upload your resume." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!isValidDateOfBirth(dateOfBirth)) {
    return NextResponse.json(
      { error: "Please enter a valid date of birth." },
      { status: 400 },
    );
  }

  if (!GRADE_LEVELS.includes(gradeLevel as (typeof GRADE_LEVELS)[number])) {
    return NextResponse.json(
      { error: "Please select a valid grade level." },
      { status: 400 },
    );
  }

  const matchedState = findUsState(stateName);
  if (!matchedState) {
    return NextResponse.json(
      { error: "Please select a valid U.S. state." },
      { status: 400 },
    );
  }

  if (
    name.length > 200 ||
    county.length > 120 ||
    why.length > 10_000 ||
    resumeEntry.size > MAX_RESUME_BYTES
  ) {
    return NextResponse.json(
      { error: "One of the fields is too long or the resume is too large." },
      { status: 400 },
    );
  }

  if (!ALLOWED_RESUME_TYPES.has(resumeEntry.type)) {
    return NextResponse.json(
      { error: "Resume must be a PDF or Word document." },
      { status: 400 },
    );
  }

  const resumeBuffer = Buffer.from(await resumeEntry.arrayBuffer());
  const chapterLocation = `${county}, ${matchedState.name}`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 680px; color:#111827;">
      <h2 style="font-size: 18px; margin: 0 0 4px; font-weight: 700;">New county chapter application</h2>
      <p style="color:#6b7280; margin: 0 0 24px; font-size: 13px;">Submitted from legislateforlife.org/chapters/start-a-chapter.</p>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; width:160px; vertical-align:top;">County chapter</td><td style="padding:8px 12px;">${escapeHtml(chapterLocation)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Date of birth</td><td style="padding:8px 12px;">${escapeHtml(dateOfBirth)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Grade level</td><td style="padding:8px 12px;">${escapeHtml(gradeLevel)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">State</td><td style="padding:8px 12px;">${escapeHtml(matchedState.name)} (${escapeHtml(matchedState.abbreviation)})</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">County</td><td style="padding:8px 12px;">${escapeHtml(county)}</td></tr>
      </table>
      <h3 style="font-size: 14px; margin: 24px 0 8px; font-weight: 600;">Why they want to start a chapter</h3>
      <p style="white-space: pre-wrap; line-height: 1.55; font-size: 14px; margin: 0;">${escapeHtml(why)}</p>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin: 28px 0 12px;">
      <p style="color:#9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${escapeHtml(name)}. Resume attached.</p>
    </div>
  `.trim();

  const text = `New county chapter application

County chapter: ${chapterLocation}
Name:           ${name}
Email:          ${email}
Date of birth:  ${dateOfBirth}
Grade level:    ${gradeLevel}
State:          ${matchedState.name} (${matchedState.abbreviation})
County:         ${county}

Why they want to start a chapter:
${why}

---
Reply directly to this email to respond to ${name}. Resume attached.`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: sanitizeHeaderValue(
        `[Chapter Application: ${county}, ${matchedState.abbreviation}] ${name}`,
      ),
      html,
      text,
      attachments: [
        {
          filename: resumeEntry.name || "resume.pdf",
          content: resumeBuffer,
        },
      ],
    });

    if (error) {
      console.error("Chapter application Resend error:", error);
      return NextResponse.json(
        {
          error:
            "We couldn't submit your application. Please try again or email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Chapter application unexpected error:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't submit your application. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
