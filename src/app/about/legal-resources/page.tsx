import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_INFO, ORG_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Legal & Resources",
  description:
    `Organizational documents, governance information, and member resources for ${ORG_NAME}.`,
  path: "/about/legal-resources",
});

interface DocItem {
  title: string;
  description: string;
  status: "available" | "members-only" | "coming-soon";
  href?: string;
}

// Placeholder content. Replace status / href as documents are finalized.
const orgDetails: { label: string; value: string }[] = [
  { label: "Legal Name", value: ORG_NAME },
  { label: "Organization Type", value: "Nonprofit foundation" },
  { label: "EIN", value: "Pending publication" },
  { label: "Primary Contact", value: CONTACT_INFO.email },
];

const documents: DocItem[] = [
  {
    title: "Employee & Volunteer Handbook",
    description:
      "Day-to-day expectations, code of conduct, and onboarding information for everyone working with the foundation.",
    status: "coming-soon",
  },
  {
    title: "Bylaws",
    description:
      "Foundation governance, board structure, and decision-making procedures.",
    status: "coming-soon",
  },
  {
    title: "Conflict of Interest Policy",
    description:
      "Our standards for declaring and managing potential conflicts of interest.",
    status: "coming-soon",
  },
  {
    title: "Onboarding Agreement Template",
    description:
      "Standard agreement signed by new leadership and certain role-based positions during onboarding.",
    status: "members-only",
  },
  {
    title: "Brand & Communications Guidelines",
    description:
      "Logo usage, voice, tone, and approved language for representing the foundation publicly.",
    status: "members-only",
  },
];

const statusStyles: Record<DocItem["status"], string> = {
  available: "bg-gold-200 text-gold-900",
  "members-only": "bg-cream-100 text-ink-700",
  "coming-soon": "bg-ink-100 text-ink-600",
};

const statusLabels: Record<DocItem["status"], string> = {
  available: "Available",
  "members-only": "Members Only",
  "coming-soon": "Coming Soon",
};

export default function LegalResourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink-900 text-ink-100 pt-10 pb-14 sm:pt-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
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
            About
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Transparency &amp; Operations
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Legal &amp; Resources</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            Organizational documents, governance information, and resources for
            members of {ORG_NAME}.
          </p>
        </div>
      </section>

      {/* Organization details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Organization Details
          </h2>
          <p className="text-muted-foreground mb-8">
            Basic foundation information. We&apos;ll publish additional details
            as they&apos;re finalized.
          </p>
          <dl className="rounded-xl border border-ink-100 divide-y divide-ink-100 overflow-hidden">
            {orgDetails.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-5 py-4 bg-white"
              >
                <dt className="text-sm font-semibold uppercase tracking-widest text-gold-700">
                  {row.label}
                </dt>
                <dd className="sm:col-span-2 text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Document library */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Documents &amp; Policies
          </h2>
          <p className="text-muted-foreground mb-8">
            These are the foundation&apos;s core organizational documents.
            Some are public, some are available to active members, and some
            are still being finalized.
          </p>
          <ul className="space-y-4">
            {documents.map((doc) => (
              <li
                key={doc.title}
                className="p-5 rounded-xl bg-white border border-ink-100"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="font-semibold text-foreground mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded ${statusStyles[doc.status]}`}
                  >
                    {statusLabels[doc.status]}
                  </span>
                </div>
                {doc.href && (
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm font-medium text-gold-700 hover:text-gold-800"
                  >
                    View document
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
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Member access note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Need access to a member-only document?
          </h2>
          <p className="text-muted-foreground mb-6">
            If you&apos;re an active member of the foundation and need a
            document that isn&apos;t public yet, reach out to us directly and
            we&apos;ll get it to you.
          </p>
          <Link
            href={`mailto:${CONTACT_INFO.email}?subject=Document%20Request`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
          >
            Email the Team
          </Link>
        </div>
      </section>
    </>
  );
}
