import type { Role, RoleDepartment, RoleTeam } from "@/lib/types";

// All open roles at The Legislative for Life Foundation. Responsibilities and
// qualifications are starting points and may be refined as full role descriptions
// are finalized.
export const roles: Role[] = [
  // ───── Center for Public Policy ─────
  {
    slug: "policy-research-intern",
    title: "Policy Research Intern",
    department: "public-policy",
    team: "internship",
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
    department: "public-policy",
    team: "internship",
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

  // ───── Civic Affairs Department ─────
  {
    slug: "deputy-director-of-civic-affairs",
    title: "Deputy Director of Civic Affairs",
    department: "civic-affairs",
    team: "leadership",
    type: "leadership",
    timeCommitment: "8 to 12 hours / week",
    location: "Remote",
    openings: 1,
    requiresOnboardingAgreement: true,
    summary:
      "Support the Director of Civic Affairs in running the department and its community-facing initiatives.",
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
  {
    slug: "community-engagement-intern",
    title: "Community Engagement Intern",
    department: "civic-affairs",
    team: "internship",
    type: "internship",
    timeCommitment: "3 to 6 hours / week",
    location: "Hybrid",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Join the Civic Affairs Department on community projects that aim to educate the public. A hands-on role for people who want to help carry the foundation's research and recommendations into the places they actually matter.",
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
  {
    slug: "civic-affairs-intern",
    title: "Civic Affairs Intern",
    department: "civic-affairs",
    team: "internship",
    type: "internship",
    timeCommitment: "3 to 6 hours / week",
    location: "Hybrid",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Support the Civic Affairs Department's projects, events, and outreach that carry our research and education work into communities.",
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

  // ───── Strategy & Expansion Department ─────
  {
    slug: "deputy-director-of-human-resources",
    title: "Deputy Director of Human Resources",
    department: "strategy-expansion",
    team: "leadership",
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
    slug: "finance-intern",
    title: "Finance Intern",
    department: "strategy-expansion",
    team: "internship",
    type: "internship",
    timeCommitment: "4 to 6 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: true,
    summary:
      "Support the Strategy & Expansion Department's finance team with budgeting, recordkeeping, and the day-to-day work that keeps the foundation transparent and organized.",
    responsibilities: [
      "Help maintain financial records and supporting documentation",
      "Assist with budget tracking and simple reporting workflows",
      "Support the finance leadership team with research and data organization",
    ],
    qualifications: [
      "Detail-oriented and trustworthy with sensitive information",
      "Comfort with spreadsheets or willingness to learn quickly",
      "Interest in nonprofit finance, accounting, or operations",
    ],
  },
  {
    slug: "social-media-intern",
    title: "Social Media Intern",
    department: "strategy-expansion",
    team: "internship",
    type: "internship",
    timeCommitment: "3 to 5 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Help grow the foundation's public education reach through social content that explains our research, programs, and civic engagement work in clear, engaging formats.",
    responsibilities: [
      "Create and publish 1 to 2 pieces of social content per week (posts, short videos, carousels, or similar)",
      "Turn foundation articles, policy briefs, and program updates into platform-ready content",
      "Collaborate with the Strategy & Expansion Department on messaging and editorial standards",
      "Track basic engagement and share what is resonating with the team",
    ],
    qualifications: [
      "Comfort creating content for at least one major social platform",
      "Willing to appear on camera when the content calls for it (talking-head clips, event coverage, or similar)",
      "Reliable with weekly deadlines and open to feedback",
      "Interest in public education, civic engagement, or nonprofit communications",
    ],
  },
  {
    slug: "outreach-intern",
    title: "Outreach Intern",
    department: "strategy-expansion",
    team: "internship",
    type: "internship",
    timeCommitment: "3 to 5 hours / week",
    location: "Remote",
    openings: "multiple",
    requiresOnboardingAgreement: false,
    summary:
      "Help the Strategy & Expansion Department connect the foundation's work with new audiences through partnerships, events, and public-facing outreach.",
    responsibilities: [
      "Research and help coordinate outreach to schools, organizations, and community groups",
      "Support event promotion and follow-up for foundation programs",
      "Draft outreach emails, one-pagers, and simple partnership materials",
      "Track outreach efforts and share what is working with the team",
    ],
    qualifications: [
      "Clear written communication and comfortable reaching out to new contacts",
      "Organized, reliable, and good at follow-through",
      "Interest in public education, civic engagement, or nonprofit growth",
    ],
  },
];

export const DEPARTMENT_ORDER: RoleDepartment[] = [
  "public-policy",
  "civic-affairs",
  "strategy-expansion",
];

export const TEAM_ORDER: RoleTeam[] = ["leadership", "internship"];

export const DEPARTMENT_INFO: Record<
  RoleDepartment,
  { title: string; description: string }
> = {
  "public-policy": {
    title: "Center for Public Policy",
    description:
      "Research and writing roles that power our state-by-state policy work and public education.",
  },
  "civic-affairs": {
    title: "Civic Affairs Department",
    description:
      "Community-facing roles that carry the foundation's work into the places it serves.",
  },
  "strategy-expansion": {
    title: "Strategy & Expansion Department",
    description:
      "Roles that help the foundation grow, stay coordinated, and reach more people.",
  },
};

export const TEAM_INFO: Record<RoleTeam, string> = {
  leadership: "Leadership Team",
  internship: "Internship Team",
};

export function getRolesByDepartment(department: RoleDepartment) {
  return roles.filter((r) => r.department === department);
}

export function getRolesByDepartmentAndTeam(
  department: RoleDepartment,
  team: RoleTeam,
) {
  return roles.filter((r) => r.department === department && r.team === team);
}
