import type { MetadataRoute } from "next";
import { CONTENT_LAST_MODIFIED, DOMAIN } from "@/lib/businessData";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { LOCATION_PAGES } from "@/lib/locationPages";

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed date (bumped in businessData.ts when content changes) — not "now" — so <lastmod> is honest.
  const lastModified = new Date(CONTENT_LAST_MODIFIED);

  return [
    { url: DOMAIN, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${DOMAIN}/services`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${DOMAIN}/areas`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    ...SERVICE_PAGES.map((p) => ({
      url: `${DOMAIN}/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...LOCATION_PAGES.map((p) => ({
      url: `${DOMAIN}/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${DOMAIN}/booking`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
