export interface NavLink {
  label: string;
  href: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PolicyRecommendation {
  title: string;
  summary: string;
}

export interface PolicyBrief {
  slug: string;
  stateSlug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  /** PDF filename under /public/policy-briefs/ (e.g. "virginia-farm-wellness-resilience.pdf"). */
  pdfFile?: string;
}

export type StateStatus = "active" | "developing";

export interface StatePolicyPage {
  slug: string;
  name: string;
  abbreviation: string;
  status: StateStatus;
  summary: string;
  focusAreas: string[];
  research: string[];
  recommendations: PolicyRecommendation[];
}

export type RoleCategory =
  | "leadership"
  | "research-writing"
  | "civic-affairs";

export type RoleType = "leadership" | "volunteer" | "internship";

export interface Role {
  slug: string;
  title: string;
  category: RoleCategory;
  type: RoleType;
  timeCommitment: string;
  location: "Remote" | "In-person" | "Hybrid";
  openings: number | "multiple";
  requiresOnboardingAgreement: boolean;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}
