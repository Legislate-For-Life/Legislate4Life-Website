import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { states } from "@/data/states";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "State-by-state policy research and proposed legislation on farmer mental health from Legislate for Life.",
};

export default function PolicyPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Research & Legislation
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Policy</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto">
            We translate the reality of farmer mental health into concrete
            policy — tracked and written state by state.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="States We're Working In"
            subtitle="Every state has its own agricultural profile and political landscape. Our work adapts to both."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/policy/${state.slug}`}
                className="group block"
              >
                <Card className="h-full p-6 group-hover:border-gold-400">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-gold-600 transition-colors">
                      {state.name}
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 border border-gold-300 px-2 py-1 rounded">
                      {state.abbreviation}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {state.summary}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground gap-4">
                    <span>
                      <strong className="text-foreground">
                        {state.legislation.length}
                      </strong>{" "}
                      active {state.legislation.length === 1 ? "bill" : "bills"}
                    </span>
                    <span>
                      <strong className="text-foreground">
                        {state.research.length}
                      </strong>{" "}
                      research {state.research.length === 1 ? "point" : "points"}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Working in a state we don&apos;t cover yet?
          </h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re expanding. If you have policy insight, research, or
            legislative contacts in another state, we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
