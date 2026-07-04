import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO, ORG_NAME } from "@/lib/constants";
import { DEPARTMENT_INFO, getInternRoles, roles } from "@/data/roles";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM_ADDRESS = `${ORG_NAME} <applications@legislateforlife.org>`;
const TO_ADDRESS = CONTACT_INFO.email;

const internRoleSlugs = new Set(getInternRoles().map((role) => role.slug));

interface ApplicationPayload {
  applicationType?: "intern" | "leadership";
  name?: string;
  email?: string;
  phone?: string;
  resume?: string;
  experience?: string;
  why?: string;
  role?: string;
  roleChoices?: string[];
  // Honeypot.
  company?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /^https?:\/\/[^\s]+$/i;

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

function formatRoleChoice(slug: string, rank: number) {
  const role = roles.find((entry) => entry.slug === slug);
  if (!role) {
    return `${rank}. Unspecified role (${slug})`;
  }

  return `${rank}. ${role.title} (${role.slug}) - ${DEPARTMENT_INFO[role.department].title}`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Application form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Application service is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return NextResponse.json(
      { error: "Unsupported content type." },
      { status: 415 },
    );
  }

  let body: ApplicationPayload;
  try {
    body = (await request.json()) as ApplicationPayload;
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
  const phone = (body.phone ?? "").trim();
  const resume = (body.resume ?? "").trim();
  const experience = (body.experience ?? "").trim();
  const why = (body.why ?? "").trim();
  const roleSlug = (body.role ?? "").trim();
  const roleChoices = (body.roleChoices ?? []).map((choice) => choice.trim());
  const applicationType =
    body.applicationType ??
    (roleChoices.length > 0 ? "intern" : "leadership");

  if (!name || !email || !phone || !resume || !experience || !why) {
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

  if (!URL_PATTERN.test(resume)) {
    return NextResponse.json(
      { error: "Please enter a valid resume link starting with http:// or https://." },
      { status: 400 },
    );
  }

  if (
    name.length > 200 ||
    phone.length > 50 ||
    resume.length > 1_000 ||
    experience.length > 10_000 ||
    why.length > 10_000
  ) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  let roleTitle = "Unspecified role";
  let subjectRolePart = "General";
  let roleHtml = "";
  let roleText = "";

  if (applicationType === "intern") {
    if (roleChoices.length !== 3) {
      return NextResponse.json(
        { error: "Please select three role preferences." },
        { status: 400 },
      );
    }

    const uniqueChoices = new Set(roleChoices);
    if (uniqueChoices.size !== 3) {
      return NextResponse.json(
        { error: "Each role preference must be different." },
        { status: 400 },
      );
    }

    if (!roleChoices.every((choice) => internRoleSlugs.has(choice))) {
      return NextResponse.json(
        { error: "One or more selected roles are invalid." },
        { status: 400 },
      );
    }

    roleTitle = "Internship (ranked preferences)";
    subjectRolePart = "Internship";

    const choiceRows = roleChoices
      .map(
        (choice, index) =>
          `<tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; width:140px; vertical-align:top;">Choice ${index + 1}</td><td style="padding:8px 12px;">${escapeHtml(formatRoleChoice(choice, index + 1))}</td></tr>`,
      )
      .join("");

    roleHtml = `
      <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; width:140px; vertical-align:top;">Application type</td><td style="padding:8px 12px;">Internship (centralized)</td></tr>
      ${choiceRows}
    `;

    roleText = `Application type: Internship (centralized)

Ranked role preferences:
${roleChoices.map((choice, index) => formatRoleChoice(choice, index + 1)).join("\n")}`;
  } else {
    const matchingRole = roles.find((entry) => entry.slug === roleSlug);
    roleTitle = matchingRole?.title ?? "Unspecified role";
    subjectRolePart = matchingRole?.title ?? "General";

    roleHtml = `
      <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; width:140px; vertical-align:top;">Application type</td><td style="padding:8px 12px;">Leadership</td></tr>
      <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Role</td><td style="padding:8px 12px;">${escapeHtml(roleTitle)}${matchingRole ? ` <span style="color:#9ca3af; font-size: 12px;">(${escapeHtml(matchingRole.slug)})</span>` : ""}</td></tr>
    `;

    roleText = `Application type: Leadership
Role:    ${roleTitle}${matchingRole ? ` (${matchingRole.slug})` : ""}`;
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 680px; color:#111827;">
      <h2 style="font-size: 18px; margin: 0 0 4px; font-weight: 700;">New application: ${escapeHtml(roleTitle)}</h2>
      <p style="color:#6b7280; margin: 0 0 24px; font-size: 13px;">Submitted from legislateforlife.org/join-us.</p>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        ${roleHtml}
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Phone</td><td style="padding:8px 12px;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Resume</td><td style="padding:8px 12px;"><a href="${escapeHtml(resume)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resume)}</a></td></tr>
      </table>
      <h3 style="font-size: 14px; margin: 24px 0 8px; font-weight: 600;">Relevant experience</h3>
      <p style="white-space: pre-wrap; line-height: 1.55; font-size: 14px; margin: 0;">${escapeHtml(experience)}</p>
      <h3 style="font-size: 14px; margin: 24px 0 8px; font-weight: 600;">Why they want to join</h3>
      <p style="white-space: pre-wrap; line-height: 1.55; font-size: 14px; margin: 0;">${escapeHtml(why)}</p>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin: 28px 0 12px;">
      <p style="color:#9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
    </div>
  `.trim();

  const text = `New application: ${roleTitle}

${roleText}
Name:    ${name}
Email:   ${email}
Phone:   ${phone}
Resume:  ${resume}

Relevant experience:
${experience}

Why they want to join:
${why}

---
Reply directly to this email to respond to ${name}.`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: sanitizeHeaderValue(`[Application: ${subjectRolePart}] ${name}`),
      html,
      text,
    });

    if (error) {
      console.error("Application form Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't submit your application. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Application form unexpected error:", err);
    return NextResponse.json(
      { error: "We couldn't submit your application. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
