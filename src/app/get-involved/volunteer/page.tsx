import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join a global network of advocates working on digital campaigns, policy research, and awareness initiatives supporting farmer mental health.",
};

const opportunities = [
  {
    title: "Digital Campaigns",
    description:
      "Help plan and run social media campaigns, awareness posts, and online events that reach farming communities and allies.",
  },
  {
    title: "Policy Research",
    description:
      "Contribute to our state-by-state policy tracker: bills, funding, and legislator stances. Remote, flexible, and high-impact.",
  },
  {
    title: "Writing & Storytelling",
    description:
      "Draft articles, interview farmers and advocates, and shape messaging that moves people to act.",
  },
  {
    title: "Awareness Initiatives",
    description:
      "Run local or virtual awareness events, coordinate with partner orgs, and help grow our network.",
  },
];

export default function VolunteerPage() {
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
            Global, Digital, Flexible
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Volunteer</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            Join a global network of advocates working on digital campaigns,
            policy research, and awareness initiatives supporting farmer mental
            health.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-3 text-center">
            Where You Fit In
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Our volunteer network is remote-friendly and time-flexible. Here
            are the main areas where we need help.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {opportunities.map((o) => (
              <Card key={o.title} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {o.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {o.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Ready to Volunteer?
          </h2>
          <p className="text-muted-foreground mb-6">
            Email us at{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Volunteer%20Interest`}
              className="text-gold-600 hover:text-gold-700 font-medium"
            >
              {CONTACT_INFO.email}
            </a>{" "}
            with a short note about where you&apos;d like to help. We respond
            within 1–2 business days.
          </p>
          <Link
            href={`mailto:${CONTACT_INFO.email}?subject=Volunteer%20Interest`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
          >
            Email the Team
          </Link>
        </div>
      </section>
    </>
  );
}
