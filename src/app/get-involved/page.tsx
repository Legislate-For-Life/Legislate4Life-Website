import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import NewsletterForm from "@/components/sections/NewsletterForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Find out how you can support Legislate for Life — advocate, volunteer, donate, or spread the word.",
};

const pathways = [
  {
    title: "Advocate",
    href: "/get-involved/advocate",
    description:
      "Join our team or contact your representatives. We'll walk you through how to turn your voice into policy action.",
    cta: "Start Advocating",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Volunteer",
    href: "/get-involved/volunteer",
    description:
      "Join a global network of advocates working on digital campaigns, policy research, and awareness initiatives supporting farmer mental health.",
    cta: "Join the Network",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Donate",
    href: "/get-involved/donate",
    description:
      "Your financial support funds our advocacy work, policy research, and outreach to farming communities that need it most.",
    cta: "Support Our Work",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Spread the Word",
    href: "/get-involved/spread-the-word",
    description:
      "Share articles, engage on social media, and help awareness campaigns reach the people who need them.",
    cta: "Amplify Our Message",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Do Something Today
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Get Involved</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto">
            Pick the path that fits your time, skills, and interests — every
            action moves this work forward.
          </p>
        </div>
      </section>

      {/* Pathway cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Four Ways to Help"
            subtitle="Whether you have five minutes or five hours, there's a way to contribute."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {pathways.map((p) => (
              <Link key={p.title} href={p.href} className="group block">
                <Card className="h-full p-8 group-hover:border-gold-400">
                  <div className="text-gold-600 mb-4">{p.icon}</div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold-600 transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-gold-600 group-hover:text-gold-700 transition-colors">
                    {p.cta}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Stay in the Loop"
            subtitle="Sign up for our newsletter: a short monthly update with our latest writing, policy progress, and concrete ways to help."
          />
          <NewsletterForm />
          <p className="mt-3 text-xs text-muted-foreground">
            We send roughly one email per month. No spam — unsubscribe at any
            time.
          </p>
        </div>
      </section>
    </>
  );
}
