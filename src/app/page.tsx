import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";
import CrisisSupport from "@/components/sections/CrisisSupport";
import ArticleCard from "@/components/sections/ArticleCard";
import WhyThisMatters from "@/components/sections/WhyThisMatters";
import Button from "@/components/ui/Button";
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

      {/* Spotlight — open editorial layout, no containing box */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="h-px mb-10"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(193,155,62,0.5) 30%, rgba(193,155,62,0.5) 70%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600 mb-4">
                Spotlight
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
                We&apos;re hiring across multiple departments
              </h2>
              <p className="text-ink-500 leading-relaxed max-w-xl">
                The foundation is actively expanding the Center for Public
                Policy, the Civic Affairs Department, and Strategy &amp;
                Expansion. If you want to do real work on real issues,
                there&apos;s probably a role for you.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Button href="/join-us" size="lg">
                See Open Roles
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhyThisMatters />

      {/* Featured articles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600 mb-2">
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
              All articles &rarr;
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
