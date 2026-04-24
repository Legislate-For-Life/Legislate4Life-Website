"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-sm text-gold-700 font-medium py-3">
        Thanks for subscribing! You&apos;ll hear from us with our next update.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col sm:flex-row gap-3"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
