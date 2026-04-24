import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { states } from "@/data/states";

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const data = states.find((s) => s.slug === state);
  if (!data) return { title: "State Not Found" };
  return {
    title: `${data.name} Policy`,
    description: data.summary,
  };
}

const statusStyles: Record<string, string> = {
  Proposed: "bg-gold-100 text-gold-800",
  Introduced: "bg-gold-100 text-gold-800",
  "In Committee": "bg-cream-100 text-ink-700",
  Passed: "bg-gold-200 text-gold-900",
  Enacted: "bg-ink-900 text-gold-200",
};

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const data = states.find((s) => s.slug === state);
  if (!data) notFound();

  return (
    <>
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/policy"
            className="inline-flex items-center text-sm text-gold-300 hover:text-gold-200 transition-colors mb-6"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All States
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-900 bg-gold-300 px-3 py-1 rounded">
              {data.abbreviation}
            </span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">{data.name}</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Policy Research
          </h2>
          <p className="text-muted-foreground mb-8">
            Key findings that inform our work in {data.name}.
          </p>
          <ul className="space-y-4">
            {data.research.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 rounded-lg bg-cream-50 border-l-4 border-gold-400"
              >
                <span className="text-gold-600 font-bold text-lg leading-none mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legislation */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Proposed Legislation
          </h2>
          <p className="text-muted-foreground mb-8">
            Bills we&apos;re tracking, supporting, or shaping in {data.name}.
          </p>
          {data.legislation.length === 0 ? (
            <p className="text-muted-foreground italic">
              No legislation tracked yet. Check back soon.
            </p>
          ) : (
            <ul className="space-y-6">
              {data.legislation.map((bill, i) => (
                <li
                  key={i}
                  className="p-6 rounded-lg bg-white border border-ink-200"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {bill.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded ${
                        statusStyles[bill.status] ?? "bg-ink-100 text-ink-700"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </div>
                  {bill.billNumber && (
                    <p className="text-xs text-muted-foreground mb-3">
                      {bill.billNumber}
                    </p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {bill.summary}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-6">
            Want to help move this work forward in {data.name}?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved/advocate"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
            >
              Take Action
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-ink-900 text-ink-900 font-semibold hover:bg-ink-900 hover:text-gold-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
