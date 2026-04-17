export interface NavLink {
  label: string;
  href: string;
}

export interface BlogPost {
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
