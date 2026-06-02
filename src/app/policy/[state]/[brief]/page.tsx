import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import RichTextBody from "@/components/sections/RichTextBody";
import PolicyBriefPdfViewer from "@/components/sections/PolicyBriefPdfViewer";
import JsonLd from "@/components/seo/JsonLd";
import { getPolicyBrief, policyBriefs } from "@/data/policy-briefs";
import { states } from "@/data/states";
import {
  articleSchema,
  breadcrumbSchema,
  createPageMetadata,
} from "@/lib/seo";

interface PolicyBriefPageProps {
  params: Promise<{ state: string; brief: string }>;
}

export async function generateStaticParams() {
  return policyBriefs.map((brief) => ({
    state: brief.stateSlug,
    brief: brief.slug,
  }));
}

export async function generateMetadata({
  params,
}: PolicyBriefPageProps): Promise<Metadata> {
  const { state, brief } = await params;
  const data = getPolicyBrief(state, brief);
  if (!data) return { title: "Policy Brief Not Found" };

  return createPageMetadata({
    title: data.title,
    description: data.excerpt,
    path: `/policy/${data.stateSlug}/${data.slug}`,
    openGraphType: "article",
    publishedTime: data.date,
    authors: [data.author],
  });
}

export default async function PolicyBriefPage({ params }: PolicyBriefPageProps) {
  const { state, brief } = await params;
  const stateData = states.find((s) => s.slug === state);
  const briefData = getPolicyBrief(state, brief);

  if (!stateData || !briefData) {
    notFound();
  }

  const formattedDate = new Date(briefData.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const pdfUrl = briefData.pdfFile
    ? `/policy-briefs/${briefData.pdfFile}`
    : null;

  return (
    <>
      <JsonLd
        data={[
          articleSchema(
            {
              slug: briefData.slug,
              title: briefData.title,
              excerpt: briefData.excerpt,
              date: briefData.date,
              author: briefData.author,
              content: briefData.content,
            },
            { path: `/policy/${briefData.stateSlug}/${briefData.slug}` },
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Policy", path: "/policy" },
            { name: stateData.name, path: `/policy/${stateData.slug}` },
            {
              name: "Policy Brief",
              path: `/policy/${stateData.slug}/${briefData.slug}`,
            },
          ]),
        ]}
      />
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/policy/${stateData.slug}`}
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
            {stateData.name} Policy Research
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Policy Brief
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl leading-tight">
            {briefData.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-ink-300 flex-wrap">
            <time dateTime={briefData.date}>{formattedDate}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{briefData.author}</span>
          </div>
        </div>
      </section>

      {pdfUrl && (
        <PolicyBriefPdfViewer
          pdfUrl={pdfUrl}
          title={briefData.title}
          downloadFileName={briefData.pdfFile!}
        />
      )}

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {pdfUrl && (
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Read on this page
            </h2>
          )}
          <RichTextBody content={briefData.content} />

          <div className="mt-12 flex justify-center">
            <Link
              href={`/policy/${stateData.slug}`}
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
              Back to {stateData.name} policy research
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
