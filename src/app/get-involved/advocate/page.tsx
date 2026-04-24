import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import JoinUsForm from "@/components/sections/JoinUsForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Advocate",
  description:
    "Two ways to advocate with Legislate for Life: join our team, or contact your representatives.",
};

const contactStepGuidance = [
  "Identify your representatives at both the state and federal level. Most state websites include a 'find your legislator' tool.",
  "Keep your message short: who you are, why farmer mental health matters to you, and one specific ask (a bill, a funding line, an event).",
  "Reach out by email or phone — staff read and log every message. Constituent calls carry serious weight.",
  "Follow up after 1–2 weeks if you don't hear back. Persistence beats polish.",
];

export default function AdvocatePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/get-involved"
            className="inline-flex items-center text-sm text-gold-300 hover:text-gold-200 transition-colors mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Get Involved
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Turn Voice into Policy
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Advocate</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl">
            There are two clear ways to advocate with us. Pick the one that
            fits your capacity.
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <a
              href="#join-us"
              className="block p-6 rounded-lg bg-cream-50 border-2 border-transparent hover:border-gold-400 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-2">
                Path 1
              </p>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Join Us
              </h2>
              <p className="text-muted-foreground">
                Apply to join Legislate for Life as an advocate. We&apos;ll
                respond within 1–2 business days.
              </p>
            </a>
            <a
              href="#contact-reps"
              className="block p-6 rounded-lg bg-cream-50 border-2 border-transparent hover:border-gold-400 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-2">
                Path 2
              </p>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Contact Your Representatives
              </h2>
              <p className="text-muted-foreground">
                Use our guidance to reach out to the people making the
                decisions in your state and in Washington.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join-us" className="py-16 bg-cream-50 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">Join Us</h2>
          <p className="text-muted-foreground mb-8">
            Fill out a short application and we&apos;ll follow up within 1–2
            business days. Prefer email? Reach us directly at{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-gold-600 hover:text-gold-700 font-medium"
            >
              {CONTACT_INFO.email}
            </a>
            .
          </p>
          <Card className="p-6 sm:p-8">
            <JoinUsForm />
          </Card>
        </div>
      </section>

      {/* Contact Representatives */}
      <section
        id="contact-reps"
        className="py-16 bg-white scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Contact Your Representatives
          </h2>
          <p className="text-muted-foreground mb-8">
            You don&apos;t need a political background to make an impact. Here
            is general guidance for reaching out effectively.
          </p>
          <ol className="space-y-4">
            {contactStepGuidance.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 rounded-lg bg-cream-50 border-l-4 border-gold-400"
              >
                <span className="text-gold-600 font-bold text-lg leading-none mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 p-6 rounded-lg bg-ink-900 text-ink-100">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-2">
              Coming Soon
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Legislator Database
            </h3>
            <p className="text-ink-200 text-sm leading-relaxed">
              We&apos;re building a searchable directory of state and federal
              representatives with their stance on mental health policy,
              committee assignments, and contact information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
