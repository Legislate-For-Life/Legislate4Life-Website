import type { Role } from "@/lib/types";

// All open roles at The Legislative for Life Foundation. Responsibilities and
// qualifications are starting points and may be refined as full role descriptions
// are finalized.
export const roles: Role[] = [
  // ───── Leadership / Administrative ─────
  {
    slug: "director-of-human-resources",
    title: "Director of Human Resources",
    category: "leadership",
    type: "leadership",
    timeCommitment: "8 to 12 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Lead the foundation's people operations: onboarding, retention, internal culture, and the systems that keep our team running.",
    responsibilities: [
      "Own the foundation's onboarding process for new members",
      "Coordinate with department leads on hiring, role definitions, and team structure",
      "Steward internal culture, communication norms, and conflict resolution",
      "Maintain accurate records of members, roles, and agreements",
    ],
    qualifications: [
      "Prior experience leading people or operations work, in any setting",
      "Strong written communication and organization",
      "Comfort building processes from scratch as the foundation grows",
    ],
  },
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
    slug: "director-of-finance",
    title: "Director of Finance",
    category: "leadership",
    type: "leadership",
    timeCommitment: "6 to 10 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Lead the foundation's finances: budgeting, recordkeeping, and the financial transparency that good nonprofits depend on.",
    responsibilities: [
      "Maintain accurate financial records for the foundation",
      "Build and track the annual budget across divisions",
      "Coordinate with leadership on financial decisions and reporting",
    ],
    qualifications: [
      "Strong accounting fundamentals or willingness to learn quickly",
      "Comfort with spreadsheets and financial software",
      "Discretion and judgment with sensitive information",
    ],
  },
  {
    slug: "deputy-director-of-finance",
    title: "Deputy Director of Finance",
    category: "leadership",
    type: "leadership",
    timeCommitment: "5 to 8 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Support the Director of Finance with day-to-day financial operations, recordkeeping, and reporting.",
    responsibilities: [
      "Support budgeting, recordkeeping, and reporting workflows",
      "Help review and reconcile financial records",
      "Assist with financial documentation for leadership decisions",
    ],
    qualifications: [
      "Detail-oriented and trustworthy",
      "Interest in nonprofit finance, accounting, or operations",
    ],
  },
  {
    slug: "director-of-civic-affairs",
    title: "Director of Civic Affairs",
    category: "leadership",
    type: "leadership",
    timeCommitment: "10 to 14 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Lead the Civic Affairs Division: community projects, engagement initiatives, and the outreach work that takes our research home.",
    responsibilities: [
      "Set strategy for the Civic Affairs Division and its initiatives",
      "Lead recruitment and coordination of Civic Affairs team members",
      "Build and maintain partnerships with community organizations",
      "Coordinate closely with the Center for Public Policy on outreach",
    ],
    qualifications: [
      "Experience leading community-facing work or volunteer teams",
      "Strong communication and people skills",
      "A clear sense of how research and community engagement connect",
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
    slug: "writing-team-member",
    title: "Writing Team Member",
    category: "research-writing",
    type: "volunteer",
    timeCommitment: "3 to 6 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Help the foundation translate research into clear, accessible writing for the public, from short explainers to longer articles.",
    responsibilities: [
      "Draft and edit articles, explainers, and other public-facing content",
      "Work with researchers and editors to turn complex topics into clear writing",
      "Contribute to the foundation's voice and editorial standards",
    ],
    qualifications: [
      "Strong, clean, engaging writing in plain English",
      "Comfort taking feedback and revising",
      "Interest in policy, civic education, or public affairs",
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
    slug: "community-engagement-volunteer",
    title: "Community Engagement Volunteer",
    category: "civic-affairs",
    type: "volunteer",
    timeCommitment: "1 to 3 hours / week",
    location: "Hybrid",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "A flexible, lower-commitment way to get involved. Help with specific events, outreach pushes, and awareness campaigns when you have capacity.",
    responsibilities: [
      "Show up for events and outreach initiatives you can make time for",
      "Help share the foundation's work in your community and networks",
      "Provide feedback from the ground on what resonates and what doesn't",
    ],
    qualifications: [
      "An interest in civic engagement and a desire to help",
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
  "civic-affairs": {
    title: "Civic Affairs & Community",
    description:
      "Community-facing roles that carry the foundation's work into the places it serves. These positions often have multiple openings.",
  },
};
