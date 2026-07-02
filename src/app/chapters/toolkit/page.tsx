import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chapter Toolkit",
  description:
    "Resources, guides, and project materials for Legislative for Life chapter leaders. More resources coming soon.",
  path: "/chapters/toolkit",
});

export default function ChapterToolkitPage() {
  return (
    <>
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/chapters"
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
            All Chapters
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Chapter Resources
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Chapter Toolkit</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            A home for guides, project materials, and resources chapter leaders
            can use throughout the year.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-10 text-center border-dashed border-ink-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-700 mb-3">
              Coming Soon
            </p>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Toolkit resources are on the way
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              We&apos;re preparing guides, project templates, and materials for
              county chapter leaders. Each chapter will complete a few toolkit
              projects throughout the year, and this page will become your
              resource hub.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
