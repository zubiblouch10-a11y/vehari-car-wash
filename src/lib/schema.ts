// JSON-LD Schema generators — all data sourced from businessData.ts

import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  DOMAIN,
  COVERAGE_AREAS,
  HOURS_OPEN,
  HOURS_CLOSE,
  INSTAGRAM_URL,
  TIKTOK_URL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_PROFILE,
  FAQS,
  CONTENT_LAST_MODIFIED,
  type FAQ,
} from "./businessData";
import type { ServicePage } from "./servicePages";
import type { LocationPage } from "./locationPages";

export function generateLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoWash", "ServiceAreaBusiness"],
    "@id": `${DOMAIN}/#business`,
    name: BUSINESS_NAME,
    telephone: PHONE_DISPLAY,
    url: DOMAIN,
    image: `${DOMAIN}/images/logo.webp`,
    logo: `${DOMAIN}/images/logo.webp`,
    description:
      "Vehari Car Wash and Detailing Services provides professional doorstep car wash and mobile detailing across Bahrain — Manama, Seef, Riffa, Juffair, Amwaj Islands, Saar, Muharraq, Isa Town, and the Diplomatic Area. Available 7 days a week, 8 AM to 10 PM.",
    priceRange: "$$",
    currenciesAccepted: "BHD",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.94095,
      longitude: 50.5875762,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BH",
    },
    areaServed: COVERAGE_AREAS.map((area) => ({
      "@type": "Place",
      name: `${area}, Bahrain`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: HOURS_OPEN,
        closes: HOURS_CLOSE,
      },
    ],
    sameAs: [INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL, GOOGLE_BUSINESS_PROFILE],
    serviceType: [
      "Doorstep Car Wash",
      "Mobile Car Detailing",
      "Interior Deep Cleaning",
      "Engine Bay Cleaning",
      "Ceramic Coating",
      "Wax Protection",
      "Car Wash Subscription",
    ],
  };
}

export function generateFAQSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: DOMAIN,
    description:
      "Bahrain's premier doorstep mobile car wash and detailing service — Manama, Seef, Riffa, Juffair, Amwaj Islands, and more. Book via WhatsApp, 7 days a week.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: DOMAIN,
      logo: {
        "@type": "ImageObject",
        url: `${DOMAIN}/images/logo.webp`,
        width: 200,
        height: 200,
      },
      sameAs: [INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL, GOOGLE_BUSINESS_PROFILE],
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Service + area page schema ──────────────────────────────────────────────

const faqEntity = (pageUrl: string, faqs: FAQ[]) => ({
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

const breadcrumbEntity = (pageUrl: string, trail: Array<{ name: string; url: string }>) => ({
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: t.url,
  })),
});

export function generateServicePageSchema(page: ServicePage): Record<string, unknown> {
  const url = `${DOMAIN}/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: BUSINESS_NAME, url: DOMAIN },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: CONTENT_LAST_MODIFIED,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.name,
        serviceType: page.name,
        description: page.metaDescription,
        url,
        provider: { "@id": `${DOMAIN}/#business` },
        areaServed: COVERAGE_AREAS.map((area) => ({ "@type": "Place", name: `${area}, Bahrain` })),
      },
      breadcrumbEntity(url, [
        { name: "Home", url: DOMAIN },
        { name: "Services", url: `${DOMAIN}/services` },
        { name: page.name, url },
      ]),
      faqEntity(url, page.faqs),
    ],
  };
}

export function generateLocationPageSchema(page: LocationPage): Record<string, unknown> {
  const url = `${DOMAIN}/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: BUSINESS_NAME, url: DOMAIN },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: CONTENT_LAST_MODIFIED,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Mobile car wash and detailing in ${page.area}`,
        serviceType: "Mobile car wash and detailing",
        description: page.metaDescription,
        url,
        provider: { "@id": `${DOMAIN}/#business` },
        areaServed: {
          "@type": "City",
          name: page.area,
          containedInPlace: { "@type": "Country", name: "Bahrain" },
        },
      },
      breadcrumbEntity(url, [
        { name: "Home", url: DOMAIN },
        { name: "Areas", url: `${DOMAIN}/areas` },
        { name: `Car wash in ${page.area}`, url },
      ]),
      faqEntity(url, page.faqs),
    ],
  };
}

export function generateHubPageSchema(hub: {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  items: Array<{ name: string; href: string }>;
}): Record<string, unknown> {
  const url = `${DOMAIN}/${hub.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: hub.metaTitle,
        description: hub.metaDescription,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: BUSINESS_NAME, url: DOMAIN },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
        dateModified: CONTENT_LAST_MODIFIED,
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: hub.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          url: `${DOMAIN}${item.href}`,
        })),
      },
      breadcrumbEntity(url, [
        { name: "Home", url: DOMAIN },
        { name: hub.name, url },
      ]),
    ],
  };
}
