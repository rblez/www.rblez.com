import { posts } from "#site/content";
import { projects } from "#site/content";
import { MetadataRoute } from "next";

const SITE_URL = "https://rblez.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/stack`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/legal/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogRoutes = posts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug.replace("blog/", "")}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // Projects
  const projectRoutes = projects
    .filter((project) => project.published)
    .map((project) => ({
      url: `${SITE_URL}/projects/${project.slug.replace("projects/", "")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate daily
