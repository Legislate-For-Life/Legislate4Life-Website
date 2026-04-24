import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import CrisisSupport from "@/components/sections/CrisisSupport";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Legislate for Life. We respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Say Hello
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto">
            Questions, ideas, opportunities — we&apos;d love to hear from you.
            We respond within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-cream-50 rounded-xl p-8 sticky top-24 border border-ink-100">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-100 flex-shrink-0 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gold-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-sm text-gold-600 hover:text-gold-700 transition-colors break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        {CONTACT_INFO.responseTime}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-ink-200" />

                <h3 className="font-medium text-foreground mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 hover:bg-gold-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 hover:bg-gold-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9a8.16 8.16 0 004.77 1.52V7.2a4.85 4.85 0 01-1.84-.51z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 hover:bg-gold-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <div className="mt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-700 mb-2">
                    Need Help Now?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you or someone you know is in crisis, call or text{" "}
                    <strong className="text-foreground">988</strong>, or call{" "}
                    <strong className="text-foreground">
                      1-800-FARM-AID
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CrisisSupport />
    </>
  );
}
