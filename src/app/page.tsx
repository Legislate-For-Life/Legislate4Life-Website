import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";
import CrisisSupport from "@/components/sections/CrisisSupport";
import ArticleCard from "@/components/sections/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";
import { ORG_DESCRIPTION, ORG_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${ORG_NAME} | Policy Research & Public Education`,
  description: ORG_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const featured = articles.slice(0, 3);

  return (
    <>
      <Hero />
      <CrisisSupport />
      <StatsBar />

      {/* Spotlight / Featured Update */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-ink-900 text-ink-100">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,var(--color-gold-400),transparent_60%)]"
            />
            <div className="relative grid md:grid-cols-5 gap-6 p-8 sm:p-12 items-center">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
                  Spotlight
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  We&apos;re hiring across multiple departments
                </h2>
                <p className="text-ink-200 leading-relaxed">
                  The foundation is actively expanding the Center for Public
                  Policy, the Civic Affairs Department, and Strategy &amp;
                  Expansion. If you want to do real work on real issues,
                  there&apos;s probably a role for you.
                </p>
              </div>
              <div className="md:col-span-2 flex md:justify-end">
                <Link
                  href="/join-us"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold-400 text-ink-900 font-semibold hover:bg-gold-300 transition-colors"
                >
                  See Open Roles
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Why This Matters"
              subtitle="Good policy starts with good information. We make that information clear, accessible, and useful to the people who shape decisions and the communities who live with them."
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-3 text-left mt-4 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-white border border-ink-100">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-ink-900 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Public Education</h3>
              <p className="text-sm text-muted-foreground">
                Plain-language explainers, articles, and resources that help
                people understand how policy actually works, and how it affects
                their lives.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-ink-100">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-ink-900 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Policy Research</h3>
              <p className="text-sm text-muted-foreground">
                Original research and analysis on the issues shaping public
                life. We turn data and lived experience into practical
                recommendations.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-ink-100">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-ink-900 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Engagement</h3>
              <p className="text-sm text-muted-foreground">
                Local projects, awareness campaigns, and outreach that bring
                research home and help communities engage with the issues that
                matter to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-2">
                Articles
              </p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Latest Articles
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
            >
              All articles →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Help us do this work."
        description="We&rsquo;re recruiting students, researchers, writers, and advocates who want to make a difference in their communities. There&rsquo;s a place for you on the team."
        primaryAction={{ label: "See Open Roles", href: "/join-us" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
