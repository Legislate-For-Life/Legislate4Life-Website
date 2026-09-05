import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO, ORG_NAME } from "@/lib/constants";
import { DEPARTMENT_INFO, getInternRoles, roles } from "@/data/roles";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM_ADDRESS = `${ORG_NAME} <applications@legislateforlife.org>`;
const TO_ADDRESS = CONTACT_INFO.email;

const internRoleSlugs = new Set(getInternRoles().map((role) => role.slug));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /^https?:\/\/[^\s]+$/i;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

interface NormalizedApplication {
  applicationType: "intern" | "leadership";
  name: string;
  email: string;
  phone: string;
  experience: string;
  why: string;
  availability: string;
  roleSlug: string;
  roleChoices: string[];
  resumeLink: string | null;
  resumeFile: File | null;
}

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

function parseRoleChoices(raw: FormDataEntryValue | null): string[] {
  if (typeof raw !== "string" || !raw.trim()) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.map((choice) => String(choice).trim()).filter(Boolean);
  } catch {
    return raw
      .split(",")
      .map((choice) => choice.trim())
      .filter(Boolean);
  }
}

async function normalizeRequest(
  request: Request,
): Promise<
  | { ok: true; data: NormalizedApplication }
  | { ok: false; response: NextResponse }
> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.toLowerCase().includes("multipart/form-data")) {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Invalid request body." },
          { status: 400 },
        ),
      };
    }

    const company = String(formData.get("company") ?? "").trim();
    if (company) {
      return {
        ok: false,
        response: NextResponse.json({ ok: true }),
      };
    }

    const roleChoices = parseRoleChoices(formData.get("roleChoices"));
    const applicationTypeRaw = String(
      formData.get("applicationType") ?? "",
    ).trim();
    const applicationType: "intern" | "leadership" =
      applicationTypeRaw === "intern" || roleChoices.length > 0
        ? "intern"
        : "leadership";

    const resumeEntry = formData.get("resume");
    const resumeFile =
      resumeEntry instanceof File && resumeEntry.size > 0 ? resumeEntry : null;
    const resumeLink =
      typeof resumeEntry === "string" ? resumeEntry.trim() : null;

    return {
      ok: true,
      data: {
        applicationType,
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        experience: String(formData.get("experience") ?? "").trim(),
        why: String(formData.get("why") ?? "").trim(),
        availability: String(formData.get("availability") ?? "").trim(),
        roleSlug: String(formData.get("role") ?? "").trim(),
        roleChoices,
        resumeLink,
        resumeFile,
      },
    };
  }

  if (contentType.toLowerCase().startsWith("application/json")) {
    let body: {
      applicationType?: "intern" | "leadership";
      name?: string;
      email?: string;
      phone?: string;
      resume?: string;
      experience?: string;
      why?: string;
      availability?: string;
      role?: string;
      roleChoices?: string[];
      company?: string;
    };

    try {
      body = (await request.json()) as typeof body;
    } catch {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Invalid request body." },
          { status: 400 },
        ),
      };
    }

    if (body.company && body.company.trim() !== "") {
      return {
        ok: false,
        response: NextResponse.json({ ok: true }),
      };
    }

    const roleChoices = (body.roleChoices ?? []).map((choice) =>
      String(choice).trim(),
    );
    const applicationType =
      body.applicationType ??
      (roleChoices.length > 0 ? "intern" : "leadership");

    return {
      ok: true,
      data: {
        applicationType,
        name: (body.name ?? "").trim(),
        email: (body.email ?? "").trim(),
        phone: (body.phone ?? "").trim(),
        experience: (body.experience ?? "").trim(),
        why: (body.why ?? "").trim(),
        availability: (body.availability ?? "").trim(),
        roleSlug: (body.role ?? "").trim(),
        roleChoices,
        resumeLink: (body.resume ?? "").trim() || null,
        resumeFile: null,
      },
    };
  }

  return {
    ok: false,
    response: NextResponse.json(
      { error: "Unsupported content type." },
      { status: 415 },
    ),
  };
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Application form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Application service is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  const normalized = await normalizeRequest(request);
  if (!normalized.ok) {
    return normalized.response;
  }

  const {
    applicationType,
    name,
    email,
    phone,
    experience,
    why,
    availability,
    roleSlug,
    roleChoices,
    resumeLink,
    resumeFile,
  } = normalized.data;

  if (!name || !email || !phone || !experience || !why) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (
    roleSlug === "national-leadership-team-director" &&
    applicationType === "leadership" &&
    !availability
  ) {
    return NextResponse.json(
      { error: "Please share your weekly time commitment." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (resumeFile) {
    if (resumeFile.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume must be 5 MB or smaller." },
        { status: 400 },
      );
    }
    if (!ALLOWED_RESUME_TYPES.has(resumeFile.type)) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document." },
        { status: 400 },
      );
    }
  } else if (resumeLink) {
    if (!URL_PATTERN.test(resumeLink)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid resume link starting with http:// or https://.",
        },
        { status: 400 },
      );
    }
  } else {
    return NextResponse.json(
      { error: "Please provide your resume." },
      { status: 400 },
    );
  }

  if (
    name.length > 200 ||
    phone.length > 50 ||
    (resumeLink?.length ?? 0) > 1_000 ||
    experience.length > 10_000 ||
    why.length > 10_000 ||
    availability.length > 500
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

  const resumeHtml = resumeFile
    ? `<tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Resume</td><td style="padding:8px 12px;">Attached (${escapeHtml(resumeFile.name || "resume")})</td></tr>`
    : `<tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Resume</td><td style="padding:8px 12px;"><a href="${escapeHtml(resumeLink!)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resumeLink!)}</a></td></tr>`;

  const resumeText = resumeFile
    ? `Resume:  Attached (${resumeFile.name || "resume"})`
    : `Resume:  ${resumeLink}`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 680px; color:#111827;">
      <h2 style="font-size: 18px; margin: 0 0 4px; font-weight: 700;">New application: ${escapeHtml(roleTitle)}</h2>
      <p style="color:#6b7280; margin: 0 0 24px; font-size: 13px;">Submitted from legislateforlife.org/join-us.</p>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        ${roleHtml}
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Phone</td><td style="padding:8px 12px;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        ${resumeHtml}
        ${
          availability
            ? `<tr><td style="padding:8px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Time commitment</td><td style="padding:8px 12px;">${escapeHtml(availability)}</td></tr>`
            : ""
        }
      </table>
      <h3 style="font-size: 14px; margin: 24px 0 8px; font-weight: 600;">Relevant experience</h3>
      <p style="white-space: pre-wrap; line-height: 1.55; font-size: 14px; margin: 0;">${escapeHtml(experience)}</p>
      <h3 style="font-size: 14px; margin: 24px 0 8px; font-weight: 600;">Why they want to join</h3>
      <p style="white-space: pre-wrap; line-height: 1.55; font-size: 14px; margin: 0;">${escapeHtml(why)}</p>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin: 28px 0 12px;">
      <p style="color:#9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${escapeHtml(name)}.${resumeFile ? " Resume attached." : ""}</p>
    </div>
  `.trim();

  const text = `New application: ${roleTitle}

${roleText}
Name:    ${name}
Email:   ${email}
Phone:   ${phone}
${resumeText}
${availability ? `Time commitment: ${availability}\n` : ""}
Relevant experience:
${experience}

Why they want to join:
${why}

---
Reply directly to this email to respond to ${name}.${resumeFile ? " Resume attached." : ""}`;

  const attachments = resumeFile
    ? [
        {
          filename: resumeFile.name || "resume.pdf",
          content: Buffer.from(await resumeFile.arrayBuffer()),
        },
      ]
    : undefined;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: sanitizeHeaderValue(`[Application: ${subjectRolePart}] ${name}`),
      html,
      text,
      attachments,
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
