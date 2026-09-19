import type { Metadata } from "next";
import HubTemplate from "@/components/pages/HubTemplate";
import { LOCATION_PAGES } from "@/lib/locationPages";
import { pageMetadata } from "@/lib/servicePages";

const META = {
  slug: "areas" as const,
  metaTitle: "Mobile Car Wash Areas in Bahrain | Vehari Car Wash",
  metaDescription:
    "Doorstep car wash and mobile detailing in Manama, Seef, Riffa, Juffair, Amwaj Islands, Saar, Muharraq, Isa Town and the Diplomatic Area. Find your area.",
};

export const metadata: Metadata = pageMetadata(META);

const firstSentence = (text: string) => text.split(". ")[0].replace(/\.$/, "") + ".";

export default function AreasHubPage() {
  const items = LOCATION_PAGES.map((p) => ({
    name: p.area,
    text: firstSentence(p.aboutArea),
    href: `/${p.slug}`,
  }));

  return (
    <HubTemplate
      {...META}
      crumbLabel="Areas"
      eyebrow="Where we work"
      h1="Mobile Car Wash Areas We Cover in Bahrain"
      intro="Vehari Car Wash and Detailing Services provides doorstep car wash and mobile detailing across nine areas of Bahrain: Manama, Seef, Riffa, Juffair, Amwaj Islands, Saar, Muharraq, Isa Town and the Diplomatic Area. If you are unsure whether we cover your location, message us on WhatsApp and we will confirm the same day."
      highlights={[
        "We come to apartment car parks, office car parks, villas and compounds",
        "Open seven days a week, 08:00 to 22:00, evenings and weekends included",
        "Same service quality in every area — the same fully equipped team",
        "Not sure about your location? Ask on WhatsApp and we confirm same day",
      ]}
      items={items}
      itemsHeading="Pick your area"
    />
  );
}
