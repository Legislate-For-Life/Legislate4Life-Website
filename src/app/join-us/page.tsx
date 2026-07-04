import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import NewsletterForm from "@/components/sections/NewsletterForm";
import {
  roles,
  DEPARTMENT_INFO,
  DEPARTMENT_ORDER,
  TEAM_INFO,
  TEAM_ORDER,
  getRolesByDepartmentAndTeam,
} from "@/data/roles";
import type { Role } from "@/lib/types";
import { DONATE_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Join Us | High School Internships & Open Roles",
  description:
    "Apply for high school internships, remote student internships, and leadership roles at The Legislative for Life Foundation. Farm policy research, journalism, civic affairs, and nonprofit operations.",
  path: "/join-us",
  keywords: [
    "high school internships",
    "remote internships for high school students",
    "nonprofit internships",
    "farm policy internship",
    "policy research internship",
    "student volunteer opportunities",
  ],
});

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

function RoleCard({ role }: { role: Role }) {
  return (
    <Link href={`/join-us/${role.slug}`} className="group block">
      <Card className="h-full p-6 group-hover:border-gold-400">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="text-lg font-semibold text-foreground group-hover:text-gold-600 transition-colors leading-snug">
            {role.title}
          </h4>
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded whitespace-nowrap ${typeStyles[role.type]}`}
          >
            {typeLabels[role.type]}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {role.summary}
        </p>
        <dl className="grid grid-cols-3 gap-2 text-xs text-ink-700 mb-4">
          <div>
            <dt className="font-semibold uppercase tracking-widest text-[10px] text-gold-700">
              Time
            </dt>
            <dd>{role.timeCommitment}</dd>
          </div>
          <div>
            <dt className="font-semibold uppercase tracking-widest text-[10px] text-gold-700">
              Location
            </dt>
            <dd>{role.location}</dd>
          </div>
          <div>
            <dt className="font-semibold uppercase tracking-widest text-[10px] text-gold-700">
              Openings
            </dt>
            <dd>{openingsLabel(role.openings)}</dd>
          </div>
        </dl>
        <span className="inline-flex items-center text-sm font-medium text-gold-600 group-hover:text-gold-700 transition-colors">
          {role.type === "internship" ? "Read role details" : "Read more & apply"}
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
  );
}

const otherWaysToHelp = [
  {
    title: "Share Our Resources",
    description:
      "Pass our articles, explainers, and research along to people who would benefit from them. Awareness travels best person to person.",
  },
  {
    title: "Attend or Host an Event",
    description:
      "Join our community events, or work with the Civic Affairs Department to organize one in your area.",
  },
  {
    title: "Promote Awareness",
    description:
      "Follow us on social media and amplify the issues we cover so they reach the people most affected by them.",
  },
  {
    title: "Community Outreach",
    description:
      "Help us connect with local organizations, schools, and community groups doing aligned work.",
  },
];

export default function JoinUsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 pt-10 pb-14 sm:pt-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Open Positions
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Join Us</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building a foundation that takes leadership, impact, and
            real involvement seriously. If you want to do meaningful work on
            policy research, public education, or community engagement,
            there&apos;s a place for you on the team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold-400 text-ink-900 font-semibold hover:bg-gold-300 transition-colors"
            >
              Browse Open Roles
            </a>
            <a
              href={DONATE_URL}
              target={DONATE_URL.startsWith("http") ? "_blank" : undefined}
              rel={DONATE_URL.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gold-300 text-gold-200 font-semibold hover:bg-gold-300/10 transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Application paths */}
      <section className="py-14 bg-cream-50 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 sm:p-7 h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-2">
                Internships
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Apply for an internship
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Apply once for any internship role, including high school
                internships. Rank your top three positions and we&apos;ll assign
                you to the best fit across departments.
              </p>
              <Link
                href="/join-us/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold-400 text-ink-900 font-semibold hover:bg-gold-300 transition-colors"
              >
                Apply for an internship
              </Link>
            </Card>
            <Card className="p-6 sm:p-7 h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-2">
                Leadership
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Role-specific applications
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Leadership openings use a dedicated application on each role
                page. Browse the directory below and apply directly for the
                position you want.
              </p>
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-ink-900 text-ink-900 font-semibold hover:bg-ink-900 hover:text-gold-200 transition-colors"
              >
                Browse leadership roles
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Open roles directory */}
      <section id="open-roles" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Open Roles"
            subtitle={`We're currently filling ${roles.length} positions across our three departments.`}
          />

          <div className="space-y-16">
            {DEPARTMENT_ORDER.map((department) => {
              const hasRoles = TEAM_ORDER.some(
                (team) =>
                  getRolesByDepartmentAndTeam(department, team).length > 0,
              );
              if (!hasRoles) return null;

              return (
                <div key={department}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground">
                      {DEPARTMENT_INFO[department].title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
                      {DEPARTMENT_INFO[department].description}
                    </p>
                  </div>

                  <div className="space-y-10 pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-ink-100">
                    {TEAM_ORDER.map((team) => {
                      const list = getRolesByDepartmentAndTeam(
                        department,
                        team,
                      );
                      if (list.length === 0) return null;

                      return (
                        <div key={team} className="sm:pl-6">
                          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-700 mb-4">
                            {TEAM_INFO[team]}
                          </h4>
                          <div className="grid gap-4 lg:grid-cols-2">
                            {list.map((role) => (
                              <RoleCard key={role.slug} role={role} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Other Ways to Help"
            subtitle="Not every contribution is a role. There are real ways to support the foundation without a formal position."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherWaysToHelp.map((item) => (
              <Card key={item.title} className="p-6 h-full">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-7 rounded-xl bg-white border border-ink-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Support the work financially
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every contribution funds research, public education, and
                community engagement.
              </p>
            </div>
            <a
              href={DONATE_URL}
              target={DONATE_URL.startsWith("http") ? "_blank" : undefined}
              rel={DONATE_URL.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors whitespace-nowrap"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Stay in the Loop"
            subtitle="Monthly updates on our research, writing, and the policy conversations we're tracking. One email a month. No spam."
          />
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
