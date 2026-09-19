// SEO service pages — one per service in SERVICES (businessData.ts).
// Every claim here is taken from the site's existing service descriptions and FAQs.
// Prices are deliberately not listed (they are agreed on WhatsApp).

import type { Metadata } from "next";
import { BUSINESS_NAME, DOMAIN, type FAQ } from "@/lib/businessData";

export type ServicePage = {
  slug: string;
  serviceId: string; // matches SERVICES[].id (used to pre-select the service on /booking)
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // direct-answer capsule shown under the H1
  highlights: string[];
  bestFor: string;
  duration: string;
  faqs: FAQ[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "exterior-foam-wash-bahrain",
    serviceId: "exterior-foam-wash",
    name: "Exterior Foam Wash",
    metaTitle: "Doorstep Exterior Foam Wash in Bahrain | Vehari Car Wash",
    metaDescription:
      "Mobile exterior foam car wash at your home or office in Bahrain. Foam cannon, pH-neutral shampoo and hand rinse. Fully equipped, open 7 days a week.",
    h1: "Doorstep Exterior Foam Wash in Bahrain",
    intro:
      "Vehari Car Wash and Detailing Services brings a professional exterior foam wash to your car wherever it is parked in Bahrain. Our team uses a high-pressure foam cannon, pH-neutral shampoo and a careful hand rinse, and arrives with its own water and power — so you never have to queue at a car wash.",
    highlights: [
      "High-pressure foam cannon to lift dust and road film safely",
      "pH-neutral shampoo that is gentle on paint, wax and coatings",
      "Thorough hand rinse done at your home, office or car park",
      "Self-sufficient team — no water or power needed from you",
    ],
    bestFor:
      "Regular maintenance between full details, especially with the fine dust that settles on cars across Bahrain.",
    duration: "Typically 30 to 45 minutes",
    faqs: [
      {
        question: "How long does a doorstep exterior foam wash take?",
        answer:
          "An exterior foam wash typically takes 30 to 45 minutes. We confirm an accurate time with you when we confirm your booking so you can plan around it.",
      },
      {
        question: "Do I need to provide water or electricity for the wash?",
        answer:
          "No. Our team arrives with all the equipment, water tanks, power supply and products needed. You simply park your car and we take care of the rest at your home, office or any location in Bahrain.",
      },
      {
        question: "How often should I book an exterior wash in Bahrain?",
        answer:
          "A wash every one to two weeks keeps dust and road film from bonding to the paint. If you would rather not book every time, our weekly and fortnightly subscription plans give you a discounted rate and priority scheduling.",
      },
    ],
  },
  {
    slug: "interior-deep-cleaning-bahrain",
    serviceId: "interior-deep-cleaning",
    name: "Interior Deep Cleaning",
    metaTitle: "Doorstep Interior Deep Cleaning in Bahrain | Vehari Car Wash",
    metaDescription:
      "Interior car deep cleaning at your location in Bahrain: full vacuum, seat shampoo, dashboard and door-panel cleaning and odour removal. Book online.",
    h1: "Doorstep Interior Deep Cleaning in Bahrain",
    intro:
      "Vehari Car Wash and Detailing Services performs thorough interior deep cleaning at your location in Bahrain. That means a full vacuum, dashboard wipe-down, seat shampoo, door-panel cleaning and odour elimination — restoring your cabin to a fresh, showroom-ready condition without you leaving home or the office.",
    highlights: [
      "Full interior vacuum and dashboard wipe-down",
      "Seat shampoo to lift stains and everyday grime",
      "Door-panel cleaning and odour elimination",
      "Done where your car is parked — no dropping it off for the day",
    ],
    bestFor:
      "Family cars, ride-share vehicles and any car that has picked up spills, pet hair, food smells or heavy daily use.",
    duration:
      "Depends on the condition of the cabin — we give you an estimate when we confirm your booking",
    faqs: [
      {
        question: "Can you remove stains from car seats?",
        answer:
          "Seat shampooing lifts most everyday stains such as spills and marks. Very old or set-in stains are assessed on the day, and we will tell you honestly how much can be improved.",
      },
      {
        question: "Does the interior clean get rid of bad smells?",
        answer:
          "Yes. Odour elimination is part of our interior deep cleaning, alongside the full vacuum, seat shampoo and door-panel cleaning. Let us know about any specific smell when you book so we can plan for it.",
      },
      {
        question: "Do I need to be with the car during the interior clean?",
        answer:
          "Tell us where the car is parked and how we can access it when you book, and we will confirm the arrangement with you on WhatsApp. We come to your home, office or apartment car park.",
      },
    ],
  },
  {
    slug: "full-car-detailing-bahrain",
    serviceId: "full-detailing-package",
    name: "Full Detailing Package",
    metaTitle: "Full Car Detailing Package in Bahrain | Vehari Car Wash",
    metaDescription:
      "Complete interior and exterior mobile car detailing in Bahrain: foam wash, interior deep clean, wheel and tyre detailing and window polish at your door.",
    h1: "Full Car Detailing at Your Doorstep in Bahrain",
    intro:
      "Vehari Car Wash and Detailing Services' Full Detailing Package is a comprehensive doorstep service in Bahrain that combines an exterior foam wash, interior deep cleaning, wheel and tyre detailing and window polishing. It is the complete head-to-toe transformation for your vehicle, done in a single visit at your location.",
    highlights: [
      "Exterior foam wash and interior deep clean in one visit",
      "Wheel and tyre detailing for a properly finished look",
      "Window polishing for clear glass inside and out",
      "Our Signature-tier service, delivered fully equipped to your door",
    ],
    bestFor:
      "A first-time reset, preparing a car for sale, or a seasonal deep clean when a normal wash is no longer enough.",
    duration: "A full detailing package including interior deep cleaning can take 2 to 3 hours",
    faqs: [
      {
        question: "How long does a full detailing session take?",
        answer:
          "A full detailing package that includes interior deep cleaning can take 2 to 3 hours. We give you an accurate estimate when we confirm your booking so you can plan your day.",
      },
      {
        question: "What is the difference between a full detail and a normal wash?",
        answer:
          "A wash cleans the outside. The Full Detailing Package covers the whole car: exterior foam wash, interior deep cleaning, wheel and tyre detailing and window polishing, all in one visit.",
      },
      {
        question: "Can I add ceramic coating or wax to a full detail?",
        answer:
          "Ceramic and wax protection is a separate service. Message us on WhatsApp when you book and we will tell you whether it can be done in the same visit.",
      },
    ],
  },
  {
    slug: "engine-bay-cleaning-bahrain",
    serviceId: "engine-bay-cleaning",
    name: "Engine Bay Cleaning",
    metaTitle: "Engine Bay Cleaning in Bahrain | Vehari Car Wash",
    metaDescription:
      "Professional engine bay cleaning in Bahrain. Targeted degreaser and safe low-pressure rinsing remove oil, dust and grime at your home or office.",
    h1: "Doorstep Engine Bay Cleaning in Bahrain",
    intro:
      "Vehari Car Wash and Detailing Services offers professional engine bay cleaning at your doorstep in Bahrain. We apply a targeted degreaser and rinse with safe low pressure to remove oil, dust and grime, so your engine bay looks clean and maintenance checks are easier to carry out.",
    highlights: [
      "Targeted degreaser applied to oil, dust and grime build-up",
      "Safe low-pressure rinsing, not a blast of high pressure",
      "A cleaner engine bay makes maintenance checks easier",
      "Carried out at your home, office or car park",
    ],
    bestFor:
      "Before a service visit, before selling a car, or whenever you notice oil and dust build-up under the bonnet.",
    duration: "Confirmed when we confirm your booking",
    faqs: [
      {
        question: "Is engine bay cleaning safe for my engine?",
        answer:
          "We use targeted degreaser application and low-pressure rinsing, which is the careful way to clean an engine bay. Tell us about any modifications or known electrical faults when you book so we can take extra care.",
      },
      {
        question: "How often should an engine bay be cleaned?",
        answer:
          "There is no fixed rule. Good times are before a service visit, before selling the car, or when you notice oil and dust building up. Many owners simply add it to a full detail.",
      },
      {
        question: "Can I book an engine clean together with a car wash?",
        answer:
          "Yes, you can ask for it alongside another service when you book. Mention it in the booking form or on WhatsApp and we will confirm the plan and the time needed.",
      },
    ],
  },
  {
    slug: "ceramic-coating-wax-protection-bahrain",
    serviceId: "ceramic-wax-protection",
    name: "Ceramic & Wax Protection",
    metaTitle: "Ceramic Coating & Wax in Bahrain | Vehari Car Wash",
    metaDescription:
      "Ceramic coating or carnauba wax applied at your home or office in Bahrain. Lock in gloss and a hydrophobic barrier against dust and water.",
    h1: "Ceramic Coating & Wax Protection in Bahrain",
    intro:
      "Vehari Car Wash and Detailing Services applies professional-grade ceramic coating or carnauba wax to protect your car's paintwork, deepen its gloss and create a hydrophobic barrier against dust and water. It is all carried out at your home or office location anywhere in Bahrain.",
    highlights: [
      "Professional-grade ceramic coating or carnauba wax",
      "Hydrophobic barrier against dust and water",
      "Enhanced gloss and depth in the paintwork",
      "Applied at your location — Signature-tier protection at your door",
    ],
    bestFor:
      "New cars, cars you plan to keep, and owners who want the paint easier to keep clean in Bahrain's dust and heat.",
    duration: "Confirmed when we confirm your booking, as it depends on the vehicle and product",
    faqs: [
      {
        question: "What is the difference between ceramic coating and wax?",
        answer:
          "Ceramic coating forms a longer-lasting hydrophobic layer on the paint. Carnauba wax gives a warm, deep gloss and is quicker to apply, but needs re-applying more often. We can help you choose based on your car and budget.",
      },
      {
        question: "How much does ceramic coating cost in Bahrain?",
        answer:
          "Pricing depends on your vehicle size and the product you choose, so we confirm it on WhatsApp after you send your booking. There is no payment needed when you book online.",
      },
      {
        question: "Does the paint need to be prepared before protection?",
        answer:
          "Paint has to be properly clean before any protection is applied, so ask us about combining it with an exterior wash or a full detail. We will confirm the best plan for your car when we confirm your booking.",
      },
    ],
  },
  {
    slug: "car-wash-subscription-bahrain",
    serviceId: "subscription-plans",
    name: "Doorstep Subscription Plans",
    metaTitle: "Car Wash Subscription Plans in Bahrain | Vehari Car Wash",
    metaDescription:
      "Weekly or fortnightly doorstep car wash subscription in Bahrain. Discounted rate and priority scheduling across all areas. Set it up on WhatsApp.",
    h1: "Car Wash Subscription Plans in Bahrain",
    intro:
      "Vehari Car Wash and Detailing Services offers weekly and fortnightly doorstep car wash subscription plans in Bahrain, so your vehicle stays consistently clean without you having to book each time. Subscribers receive a discounted rate and priority scheduling across all our coverage areas.",
    highlights: [
      "Weekly or fortnightly visits to your home, office or car park",
      "Discounted rate compared with booking one-off washes",
      "Priority scheduling across all coverage areas",
      "Set it up once — no need to book every visit",
    ],
    bestFor:
      "Daily drivers, families and business owners who want a consistently clean car without having to think about it.",
    duration: "Each visit is scheduled to suit your routine",
    faqs: [
      {
        question: "How does a car wash subscription work?",
        answer:
          "We agree a weekly or fortnightly schedule with you, then our team visits your car at the agreed place and time so you do not have to book each wash. Subscribers get a discounted rate and priority scheduling.",
      },
      {
        question: "Should I choose a weekly or fortnightly plan?",
        answer:
          "Weekly suits daily drivers and cars that are parked outside. Fortnightly is a good fit for cars that are mostly parked in covered parking. We can help you choose when you get in touch.",
      },
      {
        question: "How do I start a subscription?",
        answer:
          "Choose the subscription service on the booking form, or message us on WhatsApp. We will set up the plan with you, including your vehicle, location and preferred visit day.",
      },
    ],
  },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((p) => p.slug === slug);

/** Shared <head> metadata for a service or location page. */
export function pageMetadata(page: {
  slug: string;
  metaTitle: string;
  metaDescription: string;
}): Metadata {
  const url = `/${page.slug}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_BH",
      url: `${DOMAIN}${url}`,
      siteName: BUSINESS_NAME,
      title: page.metaTitle,
      description: page.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}
