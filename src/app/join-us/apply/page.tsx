import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Card from "@/components/ui/Card";
import InternApplicationForm from "@/components/sections/InternApplicationForm";
import JsonLd from "@/components/seo/JsonLd";
import { getInternRoles } from "@/data/roles";
import {
  breadcrumbSchema,
  createPageMetadata,
  internshipApplicationPageSchema,
  jobPostingSchema,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "High School Internships & Student Applications",
  description:
    "Apply for high school internships and remote student internships at The Legislative for Life Foundation. One application covers every open internship role across farm policy research, journalism, civic affairs, and more.",
  path: "/join-us/apply",
  keywords: [
    "high school internships",
    "remote internships for high school students",
    "policy internship high school",
    "nonprofit internship",
    "farm policy internship",
    "student volunteer opportunities",
    "remote internship",
    "civic affairs internship",
  ],
});

export default function InternApplyPage() {
  const internRoles = getInternRoles();

  return (
    <>
      <JsonLd
        data={[
          internshipApplicationPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Join Us", path: "/join-us" },
            { name: "Intern Application", path: "/join-us/apply" },
          ]),
          ...internRoles.map((role) => jobPostingSchema(role)),
        ]}
      />
      <section className="bg-ink-900 text-ink-100 pt-10 pb-14 sm:pt-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/join-us"
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
            All Open Roles
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Internship Application
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Apply for an internship
          </h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            Submit one application for any open internship. Rank your top three
            preferences and we&apos;ll place you in the best fit across our
            departments.
          </p>
          <p className="mt-3 text-sm text-ink-300 max-w-2xl leading-relaxed">
            High school students, college students, and recent graduates are
            welcome. Most roles are remote with flexible weekly hours.
          </p>
        </div>
      </section>

      <section className="py-14 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 sm:p-8">
            <Suspense fallback={null}>
              <InternApplicationForm />
            </Suspense>
          </Card>
        </div>
      </section>
    </>
  );
}
