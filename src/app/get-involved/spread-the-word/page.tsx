import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ArticleCard from "@/components/sections/ArticleCard";
import { articles } from "@/data/articles";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Spread the Word",
  description:
    "Share our writing, engage on social media, and help awareness campaigns reach farming communities.",
};

const ways = [
  {
    title: "Social Media Engagement",
    description:
      "Follow us, like, share, and comment. Algorithms reward active conversation — your engagement helps our message travel further.",
  },
  {
    title: "Share Articles",
    description:
      "Our writing is free to share. Post links, quote passages, and send articles to people who need to read them.",
  },
  {
    title: "Awareness Campaigns",
    description:
      "Join our seasonal campaigns — from Mental Health Awareness Month to harvest season check-ins — and amplify each wave.",
  },
];

export default function SpreadTheWordPage() {
  const featured = articles.slice(0, 3);

  return (
    <>
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/get-involved"
            className="inline-flex items-center text-sm text-gold-300 hover:text-gold-200 transition-colors mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Get Involved
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Amplify the Message
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Spread the Word</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            Awareness is the first step toward change. Here&apos;s how to help
            our message reach further.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {ways.map((w) => (
              <Card key={w.title} className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  {w.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {w.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Start With These Articles
              </h2>
              <p className="text-muted-foreground mt-1">
                Good entry points for sharing our work.
              </p>
            </div>
            <Link
              href="/writing"
              className="text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
            >
              All writing →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Follow &amp; Share
          </h2>
          <p className="text-muted-foreground mb-6">
            Find us where you already are online.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-ink-900 text-ink-900 font-medium hover:bg-ink-900 hover:text-gold-200 transition-colors"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-ink-900 text-ink-900 font-medium hover:bg-ink-900 hover:text-gold-200 transition-colors"
            >
              TikTok
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-ink-900 text-ink-900 font-medium hover:bg-ink-900 hover:text-gold-200 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
