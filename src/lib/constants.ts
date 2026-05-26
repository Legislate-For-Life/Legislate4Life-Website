// Official displayed organization name. The conversational shorthand
// "Legislative for Life" may still appear inside body copy, but anywhere
// the foundation is identified, this constant is used.
export const ORG_NAME = "The Legislative for Life Foundation";
export const ORG_SHORT_NAME = "Legislative for Life";
export const ORG_TAGLINE = "Educating Policymakers. Empowering Communities.";
export const ORG_DESCRIPTION =
  "The Legislative for Life Foundation is a nonprofit dedicated to public policy research, education, and civic engagement. We translate research and lived experience into practical recommendations that help policymakers and communities address the issues shaping life across America and beyond.";

// Production site URL. Used for canonical links, sitemaps, and structured data.
export const SITE_URL = "https://legislateforlife.org";

// Default social preview image (relative to SITE_URL via metadataBase).
export const DEFAULT_OG_IMAGE = "/images/logo.png";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Policy", href: "/policy" },
  { label: "Join Us", href: "/join-us" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS_COL_1 = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Policy", href: "/policy" },
] as const;

export const FOOTER_LINKS_COL_2 = [
  { label: "Join Us", href: "/join-us" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_INFO = {
  email: "legislateforlife@gmail.com",
  responseTime: "We typically respond within 1 to 2 business days.",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/legislate4life",
  tiktok: "https://www.tiktok.com/@legislate4life",
  linkedin: "https://linkedin.com/company/legislateforlife",
} as const;

// Placeholder. Replace with the actual fundraising platform URL once it's ready.
export const DONATE_URL = "#donate-platform-tbd";

export const CRISIS_RESOURCES = {
  lifeline: {
    name: "988 Suicide & Crisis Lifeline",
    contact: "Call or text 988",
  },
  farmAid: {
    name: "Farm Aid Hotline",
    contact: "1-800-FARM-AID (1-800-327-6243)",
  },
} as const;
