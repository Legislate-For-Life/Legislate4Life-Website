import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { states } from "@/data/states";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "Policy research, public education, and practical recommendations from the Center for Public Policy at The Legislative for Life Foundation.",
};

const statusStyles: Record<string, string> = {
  active: "bg-gold-200 text-gold-900",
  developing: "bg-cream-100 text-ink-700",
};

const statusLabels: Record<string, string> = {
  active: "Current Focus",
  developing: "Developing",
};

export default function PolicyPage() {
  const active = states.filter((s) => s.status === "active");
  const developing = states.filter((s) => s.status === "developing");

  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Research &amp; Public Education
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Policy</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto leading-relaxed">
            The Center for Public Policy turns research and lived experience
            into clear analysis, practical recommendations, and accessible
            public education on the issues shaping life in America.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="Four overlapping kinds of work, all aimed at making policy more useful for both policymakers and the communities they serve."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                title: "Policy Research",
                description:
                  "Original analysis on the issues we focus on, grounded in data, primary sources, and conversations with the people affected.",
              },
              {
                title: "Policy Analysis",
                description:
                  "Breaking down existing proposals and programs so policymakers and the public can see what they actually do.",
              },
              {
                title: "Public Education",
                description:
                  "Plain-language articles, explainers, and resources that make policy understandable without watering it down.",
              },
              {
                title: "Policy Recommendations",
                description:
                  "Translating what the research and the community tell us into practical, actionable ideas for policymakers.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-6 h-full">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current research focus areas */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Current Research Focus Areas"
            subtitle="The states where the Center for Public Policy is actively researching and publishing."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {active.map((state) => (
              <Link
                key={state.slug}
                href={`/policy/${state.slug}`}
                className="group block"
              >
                <Card className="h-full p-7 group-hover:border-gold-400">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-gold-600 transition-colors">
                      {state.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded ${statusStyles[state.status]}`}
                      >
                        {statusLabels[state.status]}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 border border-gold-300 px-2 py-1 rounded">
                        {state.abbreviation}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {state.summary}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {state.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="text-xs text-ink-700 flex gap-2"
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {area}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-medium text-gold-700 group-hover:text-gold-800">
                    Read research and recommendations →
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Developing focus areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Developing Areas of Policy Research"
            subtitle="States we're scoping for future research and public education. These are not yet confirmed."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developing.map((state) => (
              <Link
                key={state.slug}
                href={`/policy/${state.slug}`}
                className="group block"
              >
                <Card className="h-full p-6 group-hover:border-gold-400">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-gold-600 transition-colors">
                      {state.name}
                    </h2>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded ${statusStyles[state.status]}`}
                    >
                      {statusLabels[state.status]}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {state.summary}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement CTA */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Want to help with policy research?
          </h2>
          <p className="text-muted-foreground mb-6">
            The Center for Public Policy is actively recruiting research interns
            and writers. If you have research experience or insight in another
            state we don&apos;t cover yet, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
            >
              See Research Roles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-ink-900 text-ink-900 font-semibold hover:bg-ink-900 hover:text-gold-200 transition-colors"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
