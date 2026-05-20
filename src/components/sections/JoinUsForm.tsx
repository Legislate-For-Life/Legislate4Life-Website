"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface JoinUsFormProps {
  roleTitle?: string;
  roleSlug?: string;
}

export default function JoinUsForm({
  roleTitle,
  roleSlug,
}: JoinUsFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      {roleSlug && <input type="hidden" name="role" value={roleSlug} />}

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
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
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
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
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
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="applicant-resume"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Resume Link <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="applicant-resume"
            name="resume"
            type="url"
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
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
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y"
          placeholder="Briefly describe the experience, coursework, projects, or skills that are relevant to this role. If you'd rather upload a resume, paste a link above and just note that here."
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
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y"
          placeholder="Tell us what draws you to our work and what you hope to contribute."
        />
      </div>

      <p className="text-xs text-muted-foreground">
        We respond within 1 to 2 business days. Some leadership roles include a
        signed onboarding agreement as part of getting started.
      </p>
      <Button type="submit">Submit Application</Button>
    </form>
  );
}
