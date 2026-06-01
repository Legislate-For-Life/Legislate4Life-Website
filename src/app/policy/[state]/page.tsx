import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { states } from "@/data/states";
import { getBriefsForState } from "@/data/policy-briefs";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  createPageMetadata,
  policyStateSchema,
} from "@/lib/seo";

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
  return createPageMetadata({
    title: `${data.name} Policy Research`,
    description: data.summary,
    path: `/policy/${data.slug}`,
  });
}

const statusStyles: Record<string, string> = {
  active: "bg-gold-200 text-gold-900",
  developing: "bg-cream-100 text-ink-700",
};

const statusLabels: Record<string, string> = {
  active: "Current Focus",
  developing: "Developing",
};

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const data = states.find((s) => s.slug === state);
  if (!data) notFound();

  const briefs = getBriefsForState(data.slug);

  return (
    <>
      <JsonLd
        data={[
          policyStateSchema(data),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Policy", path: "/policy" },
            { name: data.name, path: `/policy/${data.slug}` },
          ]),
        ]}
      />
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
            All Research Areas
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-900 bg-gold-300 px-3 py-1 rounded">
              {data.abbreviation}
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded ${statusStyles[data.status]}`}
            >
              {statusLabels[data.status]}
            </span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">{data.name}</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {briefs.length > 0 && (
        <section className="py-16 bg-cream-50 border-b border-ink-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Policy Briefs
            </h2>
            <p className="text-muted-foreground mb-8">
              Full policy briefs from the Center for Public Policy on issues
              affecting {data.name}.
            </p>
            <ul className="space-y-4">
              {briefs.map((brief) => {
                const formattedDate = new Date(brief.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                );

                return (
                  <li key={brief.slug}>
                    <Link
                      href={`/policy/${data.slug}/${brief.slug}`}
                      className="group block p-6 rounded-xl bg-white border border-ink-100 hover:border-gold-400 hover:shadow-sm transition-all"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 mb-2">
                        Policy Brief
                      </p>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-700 transition-colors leading-snug">
                        {brief.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {brief.excerpt}
                      </p>
                      <p className="mt-3 text-xs text-muted-foreground uppercase tracking-widest">
                        {formattedDate} &middot; {brief.author}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Focus areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Research Focus
          </h2>
          <p className="text-muted-foreground mb-8">
            The areas the Center for Public Policy is studying in {data.name}.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.focusAreas.map((area) => (
              <li
                key={area}
                className="p-4 rounded-lg bg-cream-50 border border-ink-100 flex gap-3 text-sm text-ink-700"
              >
                <svg
                  className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research findings */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Research Findings
          </h2>
          <p className="text-muted-foreground mb-8">
            Key findings informing our work in {data.name}.
          </p>
          <ul className="space-y-4">
            {data.research.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 rounded-lg bg-white border-l-4 border-gold-400"
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

      {/* Policy recommendations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Policy Recommendations
          </h2>
          <p className="text-muted-foreground mb-8">
            How the Center for Public Policy translates this research into
            practical recommendations for policymakers and communities in{" "}
            {data.name}.
          </p>
          {data.recommendations.length === 0 ? (
            <p className="text-muted-foreground italic">
              Recommendations for {data.name} are still in development. Check
              back as the research progresses.
            </p>
          ) : (
            <ul className="space-y-6">
              {data.recommendations.map((rec, i) => (
                <li
                  key={i}
                  className="p-6 rounded-lg bg-cream-50 border border-ink-100"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {rec.summary}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-6">
            Want to help with research and public education in {data.name}?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
            >
              See Open Roles
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
