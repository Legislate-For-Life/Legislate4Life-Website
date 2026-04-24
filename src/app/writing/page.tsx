import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/sections/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles, essays, and analysis on farmer mental health and policy from Legislate for Life.",
};

export default function WritingPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Words, Research, Advocacy
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Writing</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto">
            Articles and analysis on farmer mental health, rural policy, and the
            work ahead.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Articles"
            subtitle="Stay informed about the issues that matter to farming communities."
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
