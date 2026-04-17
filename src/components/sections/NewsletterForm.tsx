"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-sm text-primary-600 font-medium py-3">
        Thanks for subscribing! We&apos;ll keep you updated.
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
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
