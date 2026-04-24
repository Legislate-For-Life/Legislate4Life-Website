"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function JoinUsForm() {
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
          Thanks for wanting to join us. We&apos;ll review your information and
          respond within <strong>1–2 business days</strong>.
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="advocate-name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Full Name
          </label>
          <input
            id="advocate-name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="advocate-email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email
          </label>
          <input
            id="advocate-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="advocate-state"
          className="block text-sm font-medium text-foreground mb-1"
        >
          State (optional)
        </label>
        <input
          id="advocate-state"
          name="state"
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
          placeholder="Where are you based?"
        />
      </div>
      <div>
        <label
          htmlFor="advocate-why"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Why do you want to advocate with us?
        </label>
        <textarea
          id="advocate-why"
          name="why"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y"
          placeholder="Tell us a bit about your connection to farming, mental health, or policy work."
        />
      </div>
      <p className="text-xs text-muted-foreground">
        We respond within 1–2 business days.
      </p>
      <Button type="submit">Submit Application</Button>
    </form>
  );
}
