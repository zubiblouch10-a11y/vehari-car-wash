import type { Metadata } from "next";
import HubTemplate from "@/components/pages/HubTemplate";
import { SERVICES } from "@/lib/businessData";
import { SERVICE_PAGES, pageMetadata } from "@/lib/servicePages";

const META = {
  slug: "services" as const,
  metaTitle: "Car Wash & Detailing Services in Bahrain | Vehari Car Wash",
  metaDescription:
    "All doorstep car wash and mobile detailing services in Bahrain: foam wash, interior deep clean, full detail, engine bay, ceramic and wax, subscriptions.",
};

export const metadata: Metadata = pageMetadata(META);

export default function ServicesHubPage() {
  const items = SERVICE_PAGES.map((p) => ({
    name: p.name,
    text: SERVICES.find((s) => s.id === p.serviceId)?.tagline ?? p.metaDescription,
    href: `/${p.slug}`,
  }));

  return (
    <HubTemplate
      {...META}
      crumbLabel="Services"
      eyebrow="Our services"
      h1="Doorstep Car Wash & Detailing Services in Bahrain"
      intro="Vehari Car Wash and Detailing Services offers six doorstep services across Bahrain, from a quick exterior foam wash to a full Signature detail with ceramic protection. Every service is carried out at your home, office or car park by a fully equipped team, seven days a week."
      highlights={[
        "Starter, Premium and Signature service tiers",
        "Fully equipped team — no water or power needed from you",
        "Book online, confirm on WhatsApp, pay after confirmation",
        "Weekly and fortnightly subscription plans available",
      ]}
      items={items}
      itemsHeading="Choose a service"
    />
  );
}
