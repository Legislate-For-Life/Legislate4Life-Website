import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import type { TeamMember } from "@/lib/types";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Legislate4Life's mission, story, and the team working to improve farmers' mental health.",
};

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    role: "Executive Director",
    bio: "A third-generation farmer turned advocate, Sarah founded Legislate4Life after witnessing the mental health toll on her own community.",
  },
  {
    name: "James Okafor",
    role: "Policy Director",
    bio: "With a decade of experience in agricultural policy, James leads our legislative advocacy efforts at the state and federal level.",
  },
  {
    name: "Maria Chen",
    role: "Community Outreach Manager",
    bio: "Maria builds relationships with farming communities across the country, connecting them with resources and support networks.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            We believe every farmer deserves access to mental health support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Legislate4Life exists to advocate for comprehensive mental health
                resources and legislative protections for farming communities
                across America. We work at the intersection of agriculture
                policy and mental health advocacy to create lasting, systemic
                change.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe that the people who feed our nation deserve support
                systems that recognize and address the unique pressures they
                face — from financial uncertainty to social isolation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every farmer and agricultural worker
                has access to affordable, stigma-free mental health care. Where
                rural communities are supported by strong legislation, funded
                programs, and a culture that treats mental health with the same
                seriousness as physical health.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Through education, advocacy, and community building, we&apos;re
                working to make that vision a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Story"
            subtitle="How a personal mission became a national movement."
          />
          <div className="prose prose-lg text-muted-foreground mx-auto space-y-4">
            <p>
              Legislate4Life was founded by people who know firsthand the toll
              that farming can take on mental health. Growing up in agricultural
              communities, our founders watched neighbors struggle in silence
              with depression, anxiety, and burnout — often without any
              professional support within reach.
            </p>
            <p>
              When the data confirmed what they already knew — that farmers face
              some of the highest rates of stress, depression, and suicide of
              any occupation — they decided that awareness alone wasn&apos;t
              enough. Real change requires legislative action, sustained funding,
              and community-level support.
            </p>
            <p>
              Today, Legislate4Life works with policymakers, mental health
              professionals, and agricultural organizations to push for
              legislation that funds rural mental health services, expands
              telehealth access, and builds resilience in farming communities
              across the country.
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
                className="text-center p-6 rounded-xl bg-muted"
              >
                <div className="w-24 h-24 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium mb-2">
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
