"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface JoinUsFormProps {
  roleTitle?: string;
  roleSlug?: string;
}

interface SubmitState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

export default function JoinUsForm({
  roleTitle,
  roleSlug,
}: JoinUsFormProps = {}) {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      resume: String(data.get("resume") ?? ""),
      experience: String(data.get("experience") ?? ""),
      why: String(data.get("why") ?? ""),
      role: String(data.get("role") ?? roleSlug ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        setState({
          status: "error",
          message:
            json.error ??
            "We couldn't submit your application. Please try again in a moment.",
        });
        return;
      }

      setState({ status: "success" });
    } catch {
      setState({
        status: "error",
        message:
          "We couldn't reach the server. Check your connection and try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="text-center py-12 px-6 bg-cream-50 border border-gold-300 rounded-xl">
        <svg
          className="w-12 h-12 text-gold-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Application Received
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thanks for applying{roleTitle ? ` for ${roleTitle}` : ""}. We&apos;ll
          review your application and respond within{" "}
          <strong>1 to 2 business days</strong>.
        </p>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {roleSlug && <input type="hidden" name="role" value={roleSlug} />}

      {/* Honeypot field. Hidden from users; bots fill it in and get silently rejected. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="applicant-company">Company</label>
        <input
          id="applicant-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="applicant-name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Full Name
          </label>
          <input
            id="applicant-name"
            name="name"
            type="text"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="applicant-email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email
          </label>
          <input
            id="applicant-email"
            name="email"
            type="email"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="applicant-phone"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Phone Number
          </label>
          <input
            id="applicant-phone"
            name="phone"
            type="tel"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="applicant-resume"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Resume Link
          </label>
          <input
            id="applicant-resume"
            name="resume"
            type="url"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="Google Drive, Dropbox, LinkedIn"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="applicant-experience"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Relevant Experience
        </label>
        <textarea
          id="applicant-experience"
          name="experience"
          rows={4}
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y disabled:opacity-60"
          placeholder="Briefly describe the experience, coursework, projects, or skills that are relevant to this role."
        />
      </div>

      <div>
        <label
          htmlFor="applicant-why"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Why do you want to join The Legislative for Life Foundation?
        </label>
        <textarea
          id="applicant-why"
          name="why"
          rows={4}
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y disabled:opacity-60"
          placeholder="Tell us what draws you to our work and what you hope to contribute."
        />
      </div>

      <p className="text-xs text-muted-foreground">
        We respond within 1 to 2 business days. Some leadership roles include a
        signed onboarding agreement as part of getting started. By submitting
        your application, you agree to our{" "}
        <Link
          href="/privacy"
          className="text-gold-700 hover:text-gold-800 underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {state.message}
        </p>
      )}

      <Button type="submit">
        {submitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
