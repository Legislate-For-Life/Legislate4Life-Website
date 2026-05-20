"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface NewsletterFormProps {
  variant?: "light" | "dark";
}

export default function NewsletterForm({
  variant = "light",
}: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p
        className={`text-sm font-medium py-3 ${
          variant === "dark" ? "text-gold-300" : "text-gold-700"
        }`}
      >
        Thanks for subscribing. You&apos;ll hear from us with our next update.
      </p>
    );
  }

  const inputClass =
    variant === "dark"
      ? "flex-1 px-4 py-2.5 rounded-lg bg-ink-800 border border-ink-700 text-ink-100 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm"
      : "flex-1 px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col sm:flex-row gap-2"
    >
      <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-email-${variant}`}
        type="email"
        required
        placeholder="Enter your email"
        className={inputClass}
      />
      <Button type="submit" size={variant === "dark" ? "sm" : "md"}>
        Subscribe
      </Button>
    </form>
  );
}
