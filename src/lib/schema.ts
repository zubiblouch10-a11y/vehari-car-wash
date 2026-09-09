// JSON-LD Schema generators — all data sourced from businessData.ts

import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  DOMAIN,
  COVERAGE_AREAS,
  HOURS_OPEN,
  HOURS_CLOSE,
  AGGREGATE_RATING,
  RATING_COUNT,
  INSTAGRAM_URL,
  TIKTOK_URL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_PROFILE,
  FAQS,
} from "./businessData";

export function generateLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoWash", "ServiceAreaBusiness"],
    name: BUSINESS_NAME,
    telephone: PHONE_DISPLAY,
    url: DOMAIN,
    image: `${DOMAIN}/images/vehari-car-wash-bahrain.jpg`,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING,
      bestRating: 5,
      worstRating: 1,
      ratingCount: RATING_COUNT,
    },
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DOMAIN}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
