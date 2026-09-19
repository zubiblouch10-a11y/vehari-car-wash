import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/pages/ServicePageTemplate";
import LocationPageTemplate from "@/components/pages/LocationPageTemplate";
import { SERVICE_PAGES, getServicePage, pageMetadata } from "@/lib/servicePages";
import { LOCATION_PAGES, getLocationPage } from "@/lib/locationPages";

// Only the slugs listed here exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...SERVICE_PAGES, ...LOCATION_PAGES].map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug) ?? getLocationPage(slug);
  return page ? pageMetadata(page) : {};
}

export default async function SlugPage({ params }: Params) {
  const { slug } = await params;

  const service = getServicePage(slug);
  if (service) return <ServicePageTemplate page={service} />;

  const location = getLocationPage(slug);
  if (location) return <LocationPageTemplate page={location} />;

  notFound();
}
