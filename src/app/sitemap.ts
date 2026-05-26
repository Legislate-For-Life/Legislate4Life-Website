import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { roles } from "@/data/roles";
import { states } from "@/data/states";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about/legal-resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/policy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/join-us`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const rolePaths: MetadataRoute.Sitemap = roles.map((role) => ({
    url: `${SITE_URL}/join-us/${role.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const statePaths: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${SITE_URL}/policy/${state.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: state.status === "active" ? 0.8 : 0.5,
  }));

  const articlePaths: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/writing/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...rolePaths, ...statePaths, ...articlePaths];
}
