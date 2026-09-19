import { BUSINESS_NAME } from "@/lib/businessData";
import { SERVICE_PAGES, getServicePage } from "@/lib/servicePages";
import { LOCATION_PAGES, getLocationPage } from "@/lib/locationPages";
import { pageOgImage } from "@/lib/ogImage";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return [...SERVICE_PAGES, ...LOCATION_PAGES].map((p) => ({ slug: p.slug }));
}

// A social-preview image per service / area page, so every shared link looks specific.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  const location = getLocationPage(slug);
  return pageOgImage({
    kicker: service ? "DOORSTEP SERVICE · BAHRAIN" : `SERVING ${(location?.area ?? "BAHRAIN").toUpperCase()}`,
    title: service?.h1 ?? location?.h1 ?? BUSINESS_NAME,
  });
}
