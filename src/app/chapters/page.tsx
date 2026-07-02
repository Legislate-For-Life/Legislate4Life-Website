import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { CHAPTER_PAGES } from "@/data/chapters";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chapters",
  description:
    "Start a county-based chapter of The Legislative for Life Foundation or access resources for chapter leaders.",
  path: "/chapters",
});

export default function ChaptersPage() {
  return (
    <>
      <section className="bg-ink-900 text-ink-100 pt-10 pb-14 sm:pt-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            County-Based Leadership
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Chapters</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto leading-relaxed">
            Our chapter program helps students and community leaders bring
            policy education and civic engagement to their counties. Each
            chapter is organized around the county where it serves.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Chapter Program"
            subtitle="Apply to start a chapter in your county or explore resources for current chapter leaders."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {CHAPTER_PAGES.map((page) => (
              <Link key={page.slug} href={page.href} className="group block">
                <Card className="h-full p-8 group-hover:border-gold-400">
                  <h2 className="text-xl font-bold text-foreground group-hover:text-gold-600 transition-colors mb-3">
                    {page.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-gold-600 group-hover:text-gold-700 transition-colors">
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4"
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
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
