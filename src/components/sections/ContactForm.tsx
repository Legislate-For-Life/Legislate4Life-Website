"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface SubmitState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/contact", {
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
            "We couldn't send your message. Please try again in a moment.",
        });
        return;
      }

      form.reset();
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
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          Your message has been received. We typically respond within 1 to 2
          business days.
        </p>
        <button
          onClick={() => setState({ status: "idle" })}
          className="mt-4 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field for basic bot defense. Hidden from users. */}
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
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Name
        </label>
        <input
          id="name"
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
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
          placeholder="What is this regarding?"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y disabled:opacity-60"
          placeholder="Tell us how we can help..."
        />
      </div>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {state.message}
        </p>
      )}

      <p className="text-xs text-muted-foreground">
        By sending us a message, you agree to our{" "}
        <Link
          href="/privacy"
          className="text-gold-700 hover:text-gold-800 underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <Button type="submit" className="w-full sm:w-auto">
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
