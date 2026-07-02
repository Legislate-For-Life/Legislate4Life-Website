import type { Metadata } from "next";
import Link from "next/link";
import ChapterApplicationForm from "@/components/chapters/ChapterApplicationForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Start a Chapter",
  description:
    "Apply to start a county-based chapter of The Legislative for Life Foundation. Select your state and tell us about the community you want to serve.",
  path: "/chapters/start-a-chapter",
});

export default function StartAChapterPage() {
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
            County Chapter Application
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Start a Chapter</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            Chapters are organized by county. Select your state on the map,
            share the county where you want to lead, and tell us why this work
            matters in your community.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChapterApplicationForm />
        </div>
      </section>
    </>
  );
}
