import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/sections/ArticleCard";
import { articles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Articles",
  description:
    "Articles, essays, and analysis from The Legislative for Life Foundation on the policy issues we research and the public education work we do.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Research, Analysis, Public Education
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Articles</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto leading-relaxed">
            Articles, explainers, and analysis from the foundation&apos;s
            researchers and writers on the issues shaping public life.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Articles"
            subtitle="The latest from the Center for Public Policy and our writing team."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
