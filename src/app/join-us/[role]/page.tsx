import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/Card";
import JoinUsForm from "@/components/sections/JoinUsForm";
import JsonLd from "@/components/seo/JsonLd";
import { roles, DEPARTMENT_INFO, TEAM_INFO } from "@/data/roles";
import type { Role } from "@/lib/types";
import {
  breadcrumbSchema,
  createPageMetadata,
  jobPostingSchema,
} from "@/lib/seo";

interface RolePageProps {
  params: Promise<{ role: string }>;
}

export async function generateStaticParams() {
  return roles.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({
  params,
}: RolePageProps): Promise<Metadata> {
  const { role } = await params;
  const data = roles.find((r) => r.slug === role);
  if (!data) return { title: "Role Not Found" };
  return createPageMetadata({
    title: data.title,
    description: data.summary,
    path: `/join-us/${data.slug}`,
  });
}

const typeStyles: Record<Role["type"], string> = {
  leadership: "bg-gold-200 text-gold-900",
  internship: "bg-cream-100 text-ink-700",
};

const typeLabels: Record<Role["type"], string> = {
  leadership: "Leadership",
  internship: "Internship",
};

function openingsLabel(openings: Role["openings"]) {
  if (openings === "multiple") return "Multiple openings";
  if (openings === 1) return "1 opening";
  return `${openings} openings`;
}

export default async function RolePage({ params }: RolePageProps) {
  const { role } = await params;
  const data = roles.find((r) => r.slug === role);
  if (!data) notFound();

  const related = roles
    .filter(
      (r) => r.department === data.department && r.slug !== data.slug,
    )
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          jobPostingSchema(data),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Join Us", path: "/join-us" },
            { name: data.title, path: `/join-us/${data.slug}` },
          ]),
        ]}
      />
      {/* Header */}
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
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              {DEPARTMENT_INFO[data.department].title}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-300">
              {TEAM_INFO[data.team]}
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded ${typeStyles[data.type]}`}
            >
              {typeLabels[data.type]}
            </span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">{data.title}</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {/* Role facts */}
      <section className="bg-cream-50 border-b border-ink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid gap-6 sm:grid-cols-4 text-sm">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-gold-700 mb-1">
                Time Commitment
              </dt>
              <dd className="text-foreground">{data.timeCommitment}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-gold-700 mb-1">
                Location
              </dt>
              <dd className="text-foreground">{data.location}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-gold-700 mb-1">
                Openings
              </dt>
              <dd className="text-foreground">{openingsLabel(data.openings)}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-gold-700 mb-1">
                Onboarding
              </dt>
              <dd className="text-foreground">
                {data.requiresOnboardingAgreement
                  ? "Signed agreement required"
                  : "Standard onboarding"}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Responsibilities & qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-3">
              {data.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-ink-700 leading-relaxed"
                >
                  <svg
                    className="w-4 h-4 mt-1 text-gold-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Qualifications &amp; Preferences
            </h2>
            <ul className="space-y-3">
              {data.qualifications.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-ink-700 leading-relaxed"
                >
                  <svg
                    className="w-4 h-4 mt-1 text-gold-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {data.requiresOnboardingAgreement && (
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed p-4 bg-cream-50 rounded-lg border border-ink-100">
                <strong className="text-foreground">Note:</strong> This role
                requires a signed onboarding agreement before starting. We&apos;ll
                walk you through the details once your application is reviewed.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-16 bg-cream-50 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Apply for this role
          </h2>
          <p className="text-muted-foreground mb-8">
            Fill out the short application below. We respond within 1 to 2
            business days.
          </p>
          <Card className="p-6 sm:p-8">
            <JoinUsForm roleTitle={data.title} roleSlug={data.slug} />
          </Card>
        </div>
      </section>

      {/* Related roles */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Other open roles in {DEPARTMENT_INFO[data.department].title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/join-us/${r.slug}`}
                  className="group block"
                >
                  <Card className="h-full p-5 group-hover:border-gold-400">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-gold-600 transition-colors mb-2">
                      {r.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {r.summary}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
