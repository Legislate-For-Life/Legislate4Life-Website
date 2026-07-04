import type { Metadata } from "next";
import type { Article } from "@/lib/types";
import type { Role } from "@/lib/types";
import type { StatePolicyPage } from "@/lib/types";
import {
  CONTACT_INFO,
  DEFAULT_OG_IMAGE,
  ORG_DESCRIPTION,
  ORG_NAME,
  ORG_SHORT_NAME,
  ORG_TAGLINE,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";

interface PageMetadataOptions {
  /** Page title. For most pages, the root layout template appends the org name. */
  title: string;
  description: string;
  /** Route path, e.g. "/about" or "/". */
  path: string;
  /** Set for the homepage so the title is not doubled with the layout template. */
  absoluteTitle?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
}

function canonicalUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function displayTitle(title: string, absolute: boolean): string {
  if (absolute) return title;
  return `${title} | ${ORG_NAME}`;
}

/** Shared metadata fields for static and dynamic pages. */
export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const url = canonicalUrl(options.path);
  const ogTitle = displayTitle(
    options.title,
    options.absoluteTitle ?? false,
  );

  return {
    ...(options.absoluteTitle
      ? { title: { absolute: options.title } }
      : { title: options.title }),
    description: options.description,
    ...(options.keywords ? { keywords: options.keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: options.description,
      url,
      siteName: ORG_NAME,
      locale: "en_US",
      type: options.openGraphType ?? "website",
      ...(options.publishedTime
        ? { publishedTime: options.publishedTime }
        : {}),
      ...(options.authors ? { authors: options.authors } : {}),
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: ORG_NAME,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description: options.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

/** Site-wide defaults set in the root layout. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${ORG_NAME} | Policy Research & Public Education`,
    template: `%s | ${ORG_NAME}`,
  },
  description: ORG_DESCRIPTION,
  applicationName: ORG_SHORT_NAME,
  authors: [{ name: ORG_NAME, url: SITE_URL }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: ORG_NAME,
    title: `${ORG_NAME} | Policy Research & Public Education`,
    description: ORG_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: ORG_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${ORG_NAME} | Policy Research & Public Education`,
    description: ORG_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: ORG_SHORT_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: ORG_DESCRIPTION,
    slogan: ORG_TAGLINE,
    email: CONTACT_INFO.email,
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.linkedin,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: ORG_NAME,
    url: SITE_URL,
    description: ORG_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function articleSchema(
  article: Article,
  options?: { path?: string },
) {
  const url = options?.path
    ? `${SITE_URL}${options.path.startsWith("/") ? options.path : `/${options.path}`}`
    : `${SITE_URL}/articles/${article.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-US",
  };
}

const ROLE_EMPLOYMENT_TYPE: Record<Role["type"], string> = {
  leadership: "PART_TIME",
  internship: "INTERN",
};

export function jobPostingSchema(role: Role) {
  const url =
    role.type === "internship"
      ? `${SITE_URL}/join-us/apply`
      : `${SITE_URL}/join-us/${role.slug}`;
  const isRemote = role.location === "Remote";

  const internshipDetails =
    role.type === "internship"
      ? {
          educationRequirements:
            "High school students, college students, and recent graduates are welcome to apply.",
          experienceRequirements: "No prior professional experience required.",
          skills: role.qualifications.join(" "),
        }
      : {};

  const description =
    role.type === "internship"
      ? `${role.summary} High school internships available. Time commitment: ${role.timeCommitment}. Location: ${role.location}.`
      : `${role.summary}\n\nTime commitment: ${role.timeCommitment}. Location: ${role.location}.`;

  const locationFields = isRemote
    ? {
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
          "@type": "Country",
          name: "United States",
        },
      }
    : {
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
        },
        ...(role.location === "Hybrid"
          ? { jobLocationType: "TELECOMMUTE" }
          : {}),
      };

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description,
    ...internshipDetails,
    identifier: {
      "@type": "PropertyValue",
      name: ORG_NAME,
      value: role.slug,
    },
    datePosted: "2026-01-01",
    validThrough: "2027-01-01",
    employmentType: ROLE_EMPLOYMENT_TYPE[role.type],
    hiringOrganization: {
      "@type": "Organization",
      name: ORG_NAME,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
    ...locationFields,
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        value: 0,
        unitText: "VOLUNTEER",
      },
    },
    directApply: true,
    url,
  };
}

/** Structured data for the centralized internship application page. */
export function internshipApplicationPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "High School Internships and Student Intern Applications",
    description:
      "Apply for high school internships, remote student internships, and volunteer policy research roles at The Legislative for Life Foundation.",
    url: `${SITE_URL}/join-us/apply`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "EducationalOccupationalProgram",
      name: "Student Internship Program",
      description:
        "Remote and hybrid internships for high school students, college students, and recent graduates interested in farm policy research, public education, journalism, civic affairs, and nonprofit operations.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      occupationalCategory: "Internship",
      educationalProgramMode: "online",
      timeToComplete: "P1Y",
    },
    inLanguage: "en-US",
  };
}

export function policyStateSchema(state: StatePolicyPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${state.name} Policy Research`,
    description: state.summary,
    url: `${SITE_URL}/policy/${state.slug}`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "AdministrativeArea",
      name: state.name,
      containedInPlace: {
        "@type": "Country",
        name: "United States",
      },
    },
    inLanguage: "en-US",
  };
}
