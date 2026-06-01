import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import RichTextBody from "@/components/sections/RichTextBody";
import JsonLd from "@/components/seo/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  createPageMetadata,
} from "@/lib/seo";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = articles.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/writing/${post.slug}`,
    openGraphType: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const postIndex = articles.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = articles[postIndex];
  const prevPost = postIndex > 0 ? articles[postIndex - 1] : null;
  const nextPost =
    postIndex < articles.length - 1 ? articles[postIndex + 1] : null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
            { name: post.title, path: `/writing/${post.slug}` },
          ]),
        ]}
      />
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/writing"
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
            All Writing
          </Link>
          <h1 className="text-3xl font-bold sm:text-4xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-ink-300">
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RichTextBody content={post.content} />

          <hr className="my-12 border-ink-200" />

          {/* Prev / Next navigation */}
          <nav
            aria-label="Article navigation"
            className="grid gap-4 sm:grid-cols-2"
          >
            {prevPost ? (
              <Link
                href={`/writing/${prevPost.slug}`}
                className="group block p-5 rounded-lg border border-ink-200 hover:border-gold-400 transition-colors"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Previous
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-gold-600 transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/writing/${nextPost.slug}`}
                className="group block p-5 rounded-lg border border-ink-200 hover:border-gold-400 transition-colors text-right"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Next
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-gold-600 transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          <div className="mt-10 flex justify-center">
            <Link
              href="/writing"
              className="inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
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
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
