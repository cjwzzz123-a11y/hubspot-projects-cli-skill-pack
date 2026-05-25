import type { MetadataRoute } from "next";
import { guidePages, trustPages } from "@/data/guides";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "skill-pack", "gumroad", "download-kit", "glossary", "sources", "llms.txt"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}/${route}`.replace(/\/$/, ""),
      lastModified: now,
    })),
    ...guidePages.map((page) => ({
      url: `${siteConfig.url}/${page.slug}`,
      lastModified: now,
    })),
    ...trustPages.map((page) => ({
      url: `${siteConfig.url}/${page.slug}`,
      lastModified: now,
    })),
  ];
}
