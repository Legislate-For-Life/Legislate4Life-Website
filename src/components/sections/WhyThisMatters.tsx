import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Public Education",
    description: "Plain-language resources that help people understand how policy works.",
    href: "/articles",
    cta: "Browse articles",
  },
  {
    num: "02",
    title: "Policy Research",
    description: "Original analysis turning data and lived experience into practical recommendations.",
    href: "/policy",
    cta: "Explore research",
  },
  {
    num: "03",
    title: "Community Engagement",
    description: "Local chapters and outreach that bring research home.",
    href: "/chapters",
    cta: "Find a chapter",
  },
];

export default function WhyThisMatters() {
  return (
    <section className="py-16 sm:py-20 bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Intro column */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400 mb-3">
              Why This Matters
            </p>
            <h2 className="text-3xl font-bold text-ink-50 sm:text-4xl leading-tight text-balance">
              Information that reaches the people who need it
            </h2>
            <p className="mt-4 text-ink-400 leading-relaxed">
              Good policy starts with good information. We make that information
              clear, accessible, and useful to the people who shape decisions
              and the communities who live with them.
            </p>
          </div>

          {/* Pillars — open list, no container box */}
          <div className="lg:col-span-8">
            {pillars.map((pillar, i) => (
              <Link
                key={pillar.num}
                href={pillar.href}
                className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 py-8 border-t border-ink-700/50 first:border-t-0 hover:border-gold-600/30 transition-colors"
              >
                <span
                  aria-hidden="true"
                  className="text-sm font-semibold tabular-nums text-gold-500/50 shrink-0 pt-0.5 group-hover:text-gold-400/70 transition-colors"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-ink-100 group-hover:text-gold-300 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-500/70 group-hover:text-gold-300 shrink-0 transition-colors sm:pt-0.5">
                  {pillar.cta}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
