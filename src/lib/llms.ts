// Builds /llms.txt (concise index) and /llms-full.txt (all page content in one file) for AI search engines.
// Everything is generated from the same data files as the pages, so it can never drift out of date.
// Only facts that are already on the site are used — no prices, no unverified ratings.

import {
  BUSINESS_NAME,
  COVERAGE_AREAS,
  DOMAIN,
  FAQS,
  GOOGLE_BUSINESS_PROFILE,
  HOURS_CLOSE,
  HOURS_OPEN,
  CONTENT_LAST_MODIFIED,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  PHONE_DISPLAY,
  SERVICES,
} from "@/lib/businessData";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { LOCATION_PAGES } from "@/lib/locationPages";

const SUMMARY = `${BUSINESS_NAME} is a doorstep (mobile) car wash and car detailing service in Bahrain. A fully equipped team comes to your home, office or car park in ${COVERAGE_AREAS.join(", ")} — no water or power needed from the customer. Open 7 days a week, ${HOURS_OPEN}–${HOURS_CLOSE}.`;

const FACTS = `## Key facts

- Business: ${BUSINESS_NAME}
- Type: Mobile (doorstep) car wash and detailing — a service-area business that travels to the customer; there is no walk-in car wash to visit
- Country: Bahrain
- Service areas: ${COVERAGE_AREAS.join(", ")}
- Hours: 7 days a week, ${HOURS_OPEN}–${HOURS_CLOSE}, including evenings and weekends
- Phone / WhatsApp: ${PHONE_DISPLAY}
- Booking: ${DOMAIN}/booking, or message on WhatsApp — availability is confirmed on WhatsApp
- Pricing: three tiers (Starter, Premium, Signature); the exact price depends on vehicle size and services and is quoted on WhatsApp — no advance payment required
- Equipment: the team brings its own water, power and professional products
- Subscriptions: weekly and fortnightly plans with a discounted rate and priority scheduling
- Last updated: ${CONTENT_LAST_MODIFIED}`;

function faqBlock(faqs: { question: string; answer: string }[], level = "###"): string {
  return faqs.map((f) => `${level} ${f.question}\n\n${f.answer}`).join("\n\n");
}

export function buildLlmsTxt(): string {
  return `# ${BUSINESS_NAME}

> ${SUMMARY}

${FACTS}

## Services

${SERVICE_PAGES.map((p) => `- [${p.name}](${DOMAIN}/${p.slug}): ${p.metaDescription}`).join("\n")}

## Areas served

${LOCATION_PAGES.map((p) => `- [Mobile car wash in ${p.area}](${DOMAIN}/${p.slug}): ${p.metaDescription}`).join("\n")}

## Common questions

${FAQS.map((f) => `- **${f.question}** ${f.answer}`).join("\n")}

## Optional

- [All services](${DOMAIN}/services): overview of every doorstep service
- [All areas](${DOMAIN}/areas): overview of every area we cover
- [Book online](${DOMAIN}/booking): booking form, confirmed on WhatsApp
- [Full site content in one file](${DOMAIN}/llms-full.txt): every service and area page as plain text
- [Google Business Profile](${GOOGLE_BUSINESS_PROFILE})
- [Instagram](${INSTAGRAM_URL})
- [TikTok](${TIKTOK_URL})
- [Facebook](${FACEBOOK_URL})
`;
}

export function buildLlmsFullTxt(): string {
  const services = SERVICE_PAGES.map((p) => {
    const tier = SERVICES.find((s) => s.id === p.serviceId)?.tier;
    return `### ${p.h1}

URL: ${DOMAIN}/${p.slug}${tier ? `\nTier: ${tier}` : ""}
Duration: ${p.duration}

${p.intro}

What is included:

${p.highlights.map((h) => `- ${h}`).join("\n")}

Best for: ${p.bestFor}

${faqBlock(p.faqs, "####")}`;
  }).join("\n\n");

  const areas = LOCATION_PAGES.map(
    (p) => `### ${p.h1}

URL: ${DOMAIN}/${p.slug}

${p.intro}

${p.aboutArea}

What we offer in ${p.area}:

${p.highlights.map((h) => `- ${h}`).join("\n")}

${faqBlock(p.faqs, "####")}`,
  ).join("\n\n");

  return `# ${BUSINESS_NAME} — full site content

> ${SUMMARY}

${FACTS}

## Services

${services}

## Areas served

${areas}

## Frequently asked questions

${faqBlock(FAQS)}
`;
}
