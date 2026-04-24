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

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ActionCard {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

export interface Legislation {
  title: string;
  billNumber?: string;
  status: "Introduced" | "In Committee" | "Passed" | "Enacted" | "Proposed";
  summary: string;
}

export interface StatePolicyPage {
  slug: string;
  name: string;
  abbreviation: string;
  summary: string;
  research: string[];
  legislation: Legislation[];
}
