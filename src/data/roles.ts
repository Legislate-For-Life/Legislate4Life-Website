import type { Role } from "@/lib/types";

// All open roles at The Legislative for Life Foundation. Responsibilities and
// qualifications are starting points and may be refined as full role descriptions
// are finalized.
export const roles: Role[] = [
  // ───── Leadership / Administrative ─────
  {
    slug: "deputy-director-of-human-resources",
    title: "Deputy Director of Human Resources",
    category: "leadership",
    type: "leadership",
    timeCommitment: "6 to 10 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Support the Director of Human Resources in running people operations across the foundation.",
    responsibilities: [
      "Partner with the Director of HR on day-to-day operations",
      "Support onboarding, role coordination, and recordkeeping",
      "Help maintain internal documentation and member resources",
    ],
    qualifications: [
      "Reliable, detail-oriented, and good at follow-through",
      "Interested in people operations and organizational growth",
    ],
  },
  {
    slug: "operations-director",
    title: "Operations Director",
    category: "leadership",
    type: "leadership",
    timeCommitment: "8 to 12 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Run the day-to-day operations that keep the foundation moving: cross-team coordination, internal tooling, and process.",
    responsibilities: [
      "Coordinate work and communication across departments",
      "Own internal tooling, documentation systems, and meeting rhythms",
      "Identify and remove operational bottlenecks as the team grows",
    ],
    qualifications: [
      "Strong project management instincts",
      "Comfort with documentation and process design",
      "Ability to operate independently and prioritize ruthlessly",
    ],
  },
  {
    slug: "deputy-director-of-civic-affairs",
    title: "Deputy Director of Civic Affairs",
    category: "leadership",
    type: "leadership",
    timeCommitment: "8 to 12 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Support the Director of Civic Affairs in running the division and its community-facing initiatives.",
    responsibilities: [
      "Help coordinate Civic Affairs initiatives and team members",
      "Support partnerships with community organizations",
      "Step in to lead specific projects under the Director's direction",
    ],
    qualifications: [
      "Reliable, organized, and good at coordinating with multiple stakeholders",
      "Interest in community engagement and civic education",
    ],
  },

  // ───── Research & Writing ─────
  {
    slug: "policy-research-intern",
    title: "Policy Research Intern",
    category: "research-writing",
    type: "internship",
    timeCommitment: "5 to 8 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: true,
    summary:
      "Contribute to the Center for Public Policy's state-by-state research and public education work. A great fit for students interested in policy, public affairs, or related fields.",
    responsibilities: [
      "Research assigned policy topics, including data, primary sources, and existing literature",
      "Draft research notes, summaries, and short briefs",
      "Contribute to public-facing explainers and educational content",
      "Coordinate with the Center for Public Policy leadership on deliverables",
    ],
    qualifications: [
      "Currently enrolled student or recent graduate is ideal but not required",
      "Strong research and writing skills",
      "Curious, careful, and comfortable working independently",
    ],
  },
  {
    slug: "journalism-intern",
    title: "Journalism Intern",
    category: "research-writing",
    type: "internship",
    timeCommitment: "1 to 2 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Report and write short pieces, explainers, and articles for the foundation's public education work. A great fit for student journalists and aspiring writers who want real bylines on real research.",
    responsibilities: [
      "Pitch and draft short articles, explainers, and reported pieces on the foundation's research areas",
      "Work with editors and researchers to turn complex topics into clear, accurate writing",
      "Contribute to the foundation's voice and editorial standards",
    ],
    qualifications: [
      "Strong, clean writing in plain English",
      "Comfort taking feedback and revising",
      "Interest in journalism, policy, civic education, or public affairs",
    ],
  },

  // ───── Strategy & Communication ─────
  {
    slug: "social-media-team-member",
    title: "Social Media Team Member",
    category: "communications",
    type: "volunteer",
    timeCommitment: "3 to 5 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Help grow the foundation's public education reach through social content that explains our research, programs, and civic engagement work in clear, engaging formats.",
    responsibilities: [
      "Create and publish 1 to 2 pieces of social content per week (posts, short videos, carousels, or similar)",
      "Turn foundation articles, policy briefs, and program updates into platform-ready content",
      "Collaborate with the Strategy & Communication Department on messaging and editorial standards",
      "Track basic engagement and share what is resonating with the team",
    ],
    qualifications: [
      "Comfort creating content for at least one major social platform",
      "Willing to appear on camera when the content calls for it (talking-head clips, event coverage, or similar)",
      "Reliable with weekly deadlines and open to feedback",
      "Interest in public education, civic engagement, or nonprofit communications",
    ],
  },

  // ───── Civic Affairs / Community ─────
  {
    slug: "civic-affairs-team-member",
    title: "Civic Affairs Team Member",
    category: "civic-affairs",
    type: "volunteer",
    timeCommitment: "3 to 6 hours / week",
    location: "Hybrid",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Join the Civic Affairs Division and help carry our research and education work into communities through projects, events, and outreach.",
    responsibilities: [
      "Support community projects, events, and outreach initiatives",
      "Help coordinate with partner organizations and local volunteers",
      "Contribute to engagement and awareness campaigns",
    ],
    qualifications: [
      "Reliable, communicative, and comfortable working with others",
      "Interest in community engagement and civic education",
    ],
  },
  {
    slug: "community-engagement-intern",
    title: "Community Engagement Intern",
    category: "civic-affairs",
    type: "internship",
    timeCommitment: "3 to 6 hours / week",
    location: "Hybrid",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Join the Civic Affairs Division on community projects that aim to educate the public. A hands-on role for people who want to help carry the foundation's research and recommendations into the places they actually matter.",
    responsibilities: [
      "Help plan and run community projects designed to educate the public on the issues we research",
      "Support events, workshops, and outreach initiatives in our focus areas",
      "Coordinate with partner organizations and local volunteers on shared projects",
      "Bring back what you're hearing on the ground so the foundation's work stays grounded",
    ],
    qualifications: [
      "Reliable, communicative, and comfortable working with others",
      "Interest in civic education, community engagement, or public affairs",
      "No formal experience required",
    ],
  },
];

export function getRolesByCategory(category: Role["category"]) {
  return roles.filter((r) => r.category === category);
}

export const ROLE_CATEGORY_INFO: Record<
  Role["category"],
  { title: string; description: string }
> = {
  leadership: {
    title: "Leadership & Administrative",
    description:
      "Senior roles that lead departments and run the operations of the foundation.",
  },
  "research-writing": {
    title: "Research & Writing",
    description:
      "Research and writing roles that power the Center for Public Policy and our public education work.",
  },
  communications: {
    title: "Strategy & Communication",
    description:
      "Content and communications roles that help more people find and understand the foundation's work.",
  },
  "civic-affairs": {
    title: "Civic Affairs & Community",
    description:
      "Community-facing roles that carry the foundation's work into the places it serves. These positions often have multiple openings.",
  },
};
