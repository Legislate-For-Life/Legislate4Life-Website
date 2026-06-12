import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { roles } from "@/data/roles";
import { states } from "@/data/states";
import { articles } from "@/data/articles";
import { policyBriefMeta } from "@/data/policy-brief-meta";

// Keep the sitemap fully static at build time (no new Date() or other dynamic APIs).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about/legal-resources`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/policy`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/join-us`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/writing`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const rolePaths: MetadataRoute.Sitemap = roles.map((role) => ({
    url: `${SITE_URL}/join-us/${role.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const statePaths: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${SITE_URL}/policy/${state.slug}`,
    changeFrequency: "monthly" as const,
    priority: state.status === "active" ? 0.8 : 0.5,
  }));

  const articlePaths: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/writing/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const policyBriefPaths: MetadataRoute.Sitemap = policyBriefMeta.map(
    (brief) => ({
      url: `${SITE_URL}/policy/${brief.stateSlug}/${brief.slug}`,
      lastModified: new Date(brief.date),
      changeFrequency: "yearly" as const,
      priority: 0.75,
    }),
  );

  return [
    ...staticPaths,
    ...rolePaths,
    ...statePaths,
    ...articlePaths,
    ...policyBriefPaths,
  ];
}
