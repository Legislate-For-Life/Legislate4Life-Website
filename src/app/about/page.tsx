import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ORG_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about The Legislative for Life Foundation: our mission, how we operate, and the three divisions doing the work.",
  path: "/about",
});

interface Department {
  name: string;
  shortName: string;
  blurb: string;
  initiatives: string[];
  recruiting: boolean;
}

const departments: Department[] = [
  {
    name: "Center for Public Policy",
    shortName: "Public Policy",
    blurb:
      "Our research arm. CPP investigates the issues shaping life in America and beyond, and translates that work into accessible recommendations for policymakers and the public.",
    initiatives: [
      "State-by-state policy research",
      "Issue briefs and explainers",
      "Translating research into practical recommendations",
    ],
    recruiting: true,
  },
  {
    name: "Civic Affairs Division",
    shortName: "Civic Affairs",
    blurb:
      "Where research meets communities. The Civic Affairs Division runs the foundation's on-the-ground engagement, education, and outreach work.",
    initiatives: [
      "Community-based civic projects",
      "Engagement and education initiatives",
      "Local outreach in our research focus areas",
    ],
    recruiting: true,
  },
  {
    name: "Strategy & Communication Department",
    shortName: "Strategy & Communication",
    blurb:
      "The team that helps the foundation grow and stay coordinated. Strategy & Communication oversees recruitment, communications, partnerships, and the operations behind everything else.",
    initiatives: [
      "Organizational growth and recruitment",
      "Communications and public outreach",
      "Strengthening operations and visibility",
    ],
    recruiting: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-900 text-ink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">About the Foundation</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto">
            {ORG_NAME} is a nonprofit dedicated to public policy research,
            public education, and civic engagement.
          </p>
        </div>
      </section>

      {/* Recruitment banner */}
      <section className="bg-gold-400 text-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm font-medium leading-snug">
            <span className="font-bold uppercase tracking-widest text-xs mr-2">
              Now recruiting:
            </span>
            students, researchers, writers, and advocates who want to make a
            difference in their communities.
          </p>
          <Link
            href="/join-us"
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-ink-900 text-gold-200 text-sm font-semibold hover:bg-ink-800 transition-colors whitespace-nowrap"
          >
            See Open Roles
            <svg
              className="ml-2 w-4 h-4"
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
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-3">
                Mission
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-4 leading-snug">
                Educate policymakers and communities about the issues shaping
                life across America and beyond.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We focus on three things: rigorous policy research, plain-language
                public education, and on-the-ground civic engagement. Our work
                helps people understand the issues that affect them and gives
                policymakers practical recommendations grounded in evidence and
                lived experience.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-3">
                Vision
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-4 leading-snug">
                A more informed public and a better-informed policy
                conversation.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Better decisions come from better information. We want every
                person, whether they hold office or live miles from one, to have
                access to the research, context, and education they need to take
                part in the conversations that affect their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work / Our Departments */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Work"
            subtitle="The foundation operates through three divisions, each with its own focus and initiatives, all pulling in the same direction."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {departments.map((dept, i) => (
              <article
                key={dept.name}
                className="relative p-7 rounded-2xl bg-white border border-ink-100 shadow-sm flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Division {String(i + 1).padStart(2, "0")}
                  </span>
                  {dept.recruiting && (
                    <span className="text-[10px] font-semibold uppercase tracking-widest bg-gold-100 text-gold-800 px-2 py-1 rounded">
                      Recruiting
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                  {dept.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                  {dept.blurb}
                </p>
                <ul className="space-y-2 mb-2">
                  {dept.initiatives.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-ink-700"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Every division is actively expanding. Leadership, research, and
              community roles are open right now.
            </p>
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink-900 text-gold-200 font-semibold hover:bg-ink-800 transition-colors"
            >
              Browse Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Story"
            subtitle="How a small group of students became a national foundation for policy research and public education."
          />
          {/* TODO: replace with a stronger, mission-driven image once one is provided. */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/farming-hands.jpg"
              alt="People at the heart of the work the foundation does."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
            <p>
              The Legislative for Life Foundation started as a simple
              observation: the most important policy conversations rarely
              reach the people most affected by them. Research lives in
              journals, briefings happen behind closed doors, and the people
              who could benefit most from clear information get the least of
              it.
            </p>
            <p>
              We set out to change that. The foundation began with a small
              group of students and researchers who wanted to make public
              policy understandable and useful again, not just for the people
              writing it, but for the communities living with it.
            </p>
            <p>
              Today, our work is organized around three divisions: the Center
              for Public Policy, which produces our research; the Civic
              Affairs Division, which carries that research into communities;
              and the Strategy &amp; Communication Department, which keeps
              everything running and growing. We&apos;re still small, still
              volunteer-led, and still firmly nonpartisan. But the work is
              real, and the team behind it is growing every month.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-xl bg-cream-50 border border-ink-100">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-700 mb-2">
              Looking for our organizational documents?
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our EIN, employee handbook materials, and other foundation
              documents available to members live on our Legal &amp; Resources
              page.
            </p>
            <Link
              href="/about/legal-resources"
              className="inline-flex items-center text-sm font-medium text-gold-700 hover:text-gold-800"
            >
              Open Legal &amp; Resources
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
