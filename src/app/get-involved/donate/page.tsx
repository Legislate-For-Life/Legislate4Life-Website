import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Legislate for Life's advocacy, research, and outreach for farmer mental health.",
};

const funding = [
  {
    label: "Policy Research",
    description:
      "Tracking legislation, gathering state-level data, and producing the research that shapes our work.",
  },
  {
    label: "Advocacy & Outreach",
    description:
      "Campaigns, events, and partnerships that put farmer mental health in front of the people who vote on it.",
  },
  {
    label: "Community Programs",
    description:
      "Connecting farmers and families with resources, support networks, and mental health education.",
  },
];

export default function DonatePage() {
  return (
    <>
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
            Fuel the Work
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Donate</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            Every dollar supports policy research, advocacy, and direct
            outreach to farming communities that need it most.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Where Your Support Goes
          </h2>
          <p className="text-muted-foreground mb-8">
            We&apos;re lean by design. Your contribution is split across three
            core areas:
          </p>
          <div className="space-y-4">
            {funding.map((f) => (
              <div
                key={f.label}
                className="p-5 rounded-lg bg-cream-50 border-l-4 border-gold-400"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {f.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Ready to Support Our Work?
          </h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re finalizing our donation platform. In the meantime, reach
            out directly and we&apos;ll walk you through contribution options.
          </p>
          <Link
            href={`mailto:${CONTACT_INFO.email}?subject=Donation%20Inquiry`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
          >
            Contact Us to Donate
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            {CONTACT_INFO.email}
          </p>
        </div>
      </section>
    </>
  );
}
