import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";
import CrisisSupport from "@/components/sections/CrisisSupport";
import ArticleCard from "@/components/sections/ArticleCard";
import WhyThisMatters from "@/components/sections/WhyThisMatters";
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
      <section className="pt-10 pb-12 bg-white">
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

      <WhyThisMatters />

      {/* Featured articles */}
      <section className="pt-10 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
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
