import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/businessData";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: DOMAIN,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/#services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/#reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
