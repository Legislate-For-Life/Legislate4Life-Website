import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { TeamMember } from "@/lib/types";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Legislate for Life's mission, vision, story, and the team working to improve farmers' mental health.",
};

const teamMembers: TeamMember[] = [
  {
    name: "Geetika Boppana",
    role: "Co-Founder",
    bio: "Helps lead Legislate for Life's advocacy, bringing together policy work and community engagement.",
  },
  {
    name: "Aryan Patel",
    role: "Co-Founder",
    bio: "Focuses on team management, working with our members to get things done.",
  },
  {
    name: "Vishnu Donadula",
    role: "Web Developer & Designer",
    bio: "Works on digital technology and operations, building the tools and systems that let our team make an impact.",
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
          <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg text-ink-200 max-w-2xl mx-auto">
            We believe every farmer deserves access to mental health support.
          </p>
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
                Raising awareness and advancing mental health through policy
                reform and advocacy.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We work at the intersection of agriculture and mental health
                advocacy, translating the realities of farming life into the
                policy, funding, and awareness that can change them. The people
                who feed our nation deserve systems that recognize the
                pressures they face — financial, environmental, and social.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 mb-3">
                Vision
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-4 leading-snug">
                A future where every farmer has real mental health support.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We envision agricultural communities backed by strong
                legislation, funded programs, and a culture that treats mental
                health with the same seriousness as physical health. Through
                education, advocacy, and community building, we&apos;re working
                to make that vision a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Story"
            subtitle="How a personal mission became a national movement."
          />
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/farming-hands.jpg"
              alt="Hands cradling soil, representing the people at the heart of our work."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
            <p>
              Legislate for Life was founded by people who know firsthand the
              toll that farming can take on mental health. Growing up in
              agricultural communities, our founders watched neighbors struggle
              in silence with depression, anxiety, and burnout — often without
              any professional support within reach.
            </p>
            <p>
              When the data confirmed what they already knew — that farmers
              face some of the highest rates of stress, depression, and suicide
              of any occupation — they decided that awareness alone wasn&apos;t
              enough. Real change requires legislative action, sustained
              funding, and community-level support.
            </p>
            <p>
              Today, Legislate for Life works with policymakers, mental health
              professionals, and agricultural organizations to push for
              legislation that funds rural mental health services, expands
              access, and builds resilience in farming communities across the
              country.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the people behind the mission."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-xl bg-cream-50 border border-ink-100"
              >
                <div className="w-24 h-24 rounded-full bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-gold-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
