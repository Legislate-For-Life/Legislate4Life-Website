import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Public Education",
    description:
      "Plain-language explainers, articles, and resources that help people understand how policy works and how it affects their lives.",
    href: "/articles",
    cta: "Browse articles",
  },
  {
    num: "02",
    title: "Policy Research",
    description:
      "Original analysis on the issues shaping public life. We turn data and lived experience into practical recommendations.",
    href: "/policy",
    cta: "Explore research",
  },
  {
    num: "03",
    title: "Community Engagement",
    description:
      "Local chapters, awareness campaigns, and outreach that bring research home and help communities engage with the issues that matter to them.",
    href: "/chapters",
    cta: "Find a chapter",
  },
];

export default function WhyThisMatters() {
  return (
    <section className="pt-10 pb-14 bg-cream-50 border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Intro column */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-3">
              Why This Matters
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl leading-tight text-balance">
              Information that reaches the people who need it
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Good policy starts with good information. We make that information
              clear, accessible, and useful to the people who shape decisions
              and the communities who live with them.
            </p>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-8 border border-ink-200 bg-white rounded-xl overflow-hidden divide-y divide-ink-100">
            {pillars.map((pillar) => (
              <Link
                key={pillar.num}
                href={pillar.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 sm:p-7 hover:bg-cream-50 transition-colors"
              >
                <span
                  aria-hidden="true"
                  className="text-2xl font-bold text-gold-500 tabular-nums shrink-0"
                >
                  {pillar.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-gold-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:text-gold-700 shrink-0">
                  {pillar.cta}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
