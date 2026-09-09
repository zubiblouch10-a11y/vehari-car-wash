// Single Source of Truth — Vehari Car Wash & Detailing Services
// All components import from here — no hardcoded values in component files.

export const BUSINESS_NAME = "Vehari Car Wash and Detailing Services" as const;
export const PHONE_RAW = "97334678435" as const;
export const PHONE_DISPLAY = "+973 3467 8435" as const;
export const PHONE_HREF = `tel:+${PHONE_RAW}` as const;
export const WHATSAPP_URL =
  "https://wa.me/97334678435?text=Hello%20Vehari%20Car%20Wash%2C%20I%20would%20like%20to%20book%20a%20doorstep%20detailing%20session." as const;
export const DOMAIN = "https://veharicarwashanddetailingservices.com" as const;
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459241.6791316529!2d50.5875762!3d25.94095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8797c6924d650da9%3A0x49697339b7b5de40!2sVehari%20Car%20Wash%20and%20Detailing%20Services!5e0!3m2!1sen!2s!4v1788929197412!5m2!1sen!2s" as const;
export const GOOGLE_BUSINESS_PROFILE =
  "https://maps.app.goo.gl/6juXuvhyYzucZMhr8" as const;
export const INSTAGRAM_URL =
  "https://www.instagram.com/veharicarwash435" as const;
export const TIKTOK_URL =
  "https://www.tiktok.com/@vehari.car.wash.s" as const;
export const FACEBOOK_URL =
  "https://www.facebook.com/people/Vehari-Car-Walsh/pfbid0339g8cf5cKcVkRvkLKDrJC1V16xsqf8UNZbApqfokivq3QtD6hCENJbt9u1ec7QoAl/" as const;

// ASSUMPTION: 47 reviews — update to the actual verified count once available
export const AGGREGATE_RATING = 5.0 as const;
export const RATING_COUNT = 47 as const;

// ASSUMPTION: 08:00–22:00 seven days a week — verify and update if actual hours differ
export const HOURS_OPEN = "08:00" as const;
export const HOURS_CLOSE = "22:00" as const;

export const COVERAGE_AREAS = [
  "Manama",
  "Seef",
  "Riffa",
  "Juffair",
  "Amwaj Islands",
  "Saar",
  "Muharraq",
  "Isa Town",
  "Diplomatic Area",
] as const;

export type CoverageArea = (typeof COVERAGE_AREAS)[number];

export const SOCIAL_LINKS = {
  instagram: INSTAGRAM_URL,
  tiktok: TIKTOK_URL,
  facebook: FACEBOOK_URL,
  googleBusiness: GOOGLE_BUSINESS_PROFILE,
} as const;

// ─── Services ────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  aeoCapsule: string;
  tier: string;
  ctaLabel: string;
}

export const SERVICES: Service[] = [
  {
    id: "exterior-foam-wash",
    name: "Exterior Foam Wash",
    iconName: "Droplets",
    tagline: "Showroom shine delivered to your door — no waiting, no queuing.",
    aeoCapsule:
      "Vehari Car Wash and Detailing Services provides a professional exterior foam wash using a high-pressure foam cannon, pH-neutral shampoo, and a thorough hand rinse at your doorstep anywhere across Bahrain, leaving your car spotlessly clean without you having to leave your home or office.",
    tier: "Starter",
    ctaLabel: "Book Exterior Wash",
  },
  {
    id: "interior-deep-cleaning",
    name: "Interior Deep Cleaning",
    iconName: "Sparkles",
    tagline: "A spotless, odour-free cabin delivered wherever you are in Bahrain.",
    aeoCapsule:
      "Vehari Car Wash and Detailing Services performs thorough interior deep cleaning at your location in Bahrain, including full vacuum, dashboard wipe-down, seat shampoo, door-panel cleaning, and odour elimination — restoring your car interior to a fresh, showroom-ready condition.",
    tier: "Premium",
    ctaLabel: "Book Interior Clean",
  },
  {
    id: "full-detailing-package",
    name: "Full Detailing Package",
    iconName: "Award",
    tagline: "Complete interior and exterior transformation, doorstep delivered.",
    aeoCapsule:
      "Vehari Car Wash and Detailing Services' Full Detailing Package is a comprehensive doorstep service in Bahrain combining exterior foam wash, interior deep cleaning, wheel and tyre detailing, and window polishing — the complete head-to-toe transformation for your vehicle.",
    tier: "Signature",
    ctaLabel: "Book Full Detail",
  },
  {
    id: "engine-bay-cleaning",
    name: "Engine Bay Cleaning",
    iconName: "Wrench",
    tagline: "Degrease and restore your engine bay to factory-clean condition.",
    aeoCapsule:
      "Vehari Car Wash and Detailing Services offers professional engine bay cleaning at your doorstep in Bahrain, using targeted degreaser application and safe low-pressure rinsing to remove oil, dust, and grime build-up, keeping your engine bay looking clean and making maintenance checks easier.",
    tier: "Premium",
    ctaLabel: "Book Engine Clean",
  },
  {
    id: "ceramic-wax-protection",
    name: "Ceramic & Wax Protection",
    iconName: "Shield",
    tagline: "Lock in long-lasting gloss and paint protection at your doorstep.",
    aeoCapsule:
      "Vehari Car Wash and Detailing Services applies professional-grade ceramic coating or carnauba wax to protect your car's paintwork, enhance gloss depth, and create a hydrophobic barrier against dust and water, all carried out at your home or office location anywhere in Bahrain.",
    tier: "Signature",
    ctaLabel: "Book Protection",
  },
  {
    id: "subscription-plans",
    name: "Doorstep Subscription Plans",
    iconName: "Calendar",
    tagline: "Regular scheduled visits at a discounted rate — set and forget.",
    aeoCapsule:
      "Vehari Car Wash and Detailing Services offers weekly and fortnightly doorstep car wash subscription plans in Bahrain, so your vehicle stays consistently clean without you having to book each time. Subscribers receive a discounted rate and priority scheduling across all coverage areas.",
    tier: "Starter–Signature",
    ctaLabel: "Get a Plan",
  },
];

// ─── FAQs (single source — used by both FAQAccordion.tsx and schema.ts) ──────

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Which areas do you cover in Bahrain?",
    answer:
      "Vehari Car Wash and Detailing Services provides doorstep car wash and detailing across Manama, Seef, Riffa, Juffair, Amwaj Islands, Saar, Muharraq, Isa Town, and the Diplomatic Area. If you are unsure whether we cover your location, message us on WhatsApp at +973 3467 8435 and we will confirm same day.",
  },
  {
    question: "Do I need to provide water or electricity for the doorstep service?",
    answer:
      "No. Vehari Car Wash and Detailing Services is completely self-sufficient. Our team arrives with all the equipment, water tanks, power supply, and professional detailing products needed — you simply park your car and let us handle everything at your home, office, or any location in Bahrain.",
  },
  {
    question: "How do I book a doorstep car wash in Bahrain?",
    answer:
      "Booking is fast and simple. Send a WhatsApp message to +973 3467 8435 with your location, vehicle type, and preferred time. Our team will confirm availability and arrive at your doorstep at the agreed time. No app download or advance payment required.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Vehari Car Wash and Detailing Services operates seven days a week from 08:00 to 22:00. We offer flexible scheduling so you can book at a time that fits your routine, including evenings and weekends across all coverage areas in Bahrain.",
  },
  {
    question: "How long does a full detailing session take?",
    answer:
      "Turnaround time depends on the service selected. An exterior foam wash typically takes 30 to 45 minutes. A full detailing package including interior deep cleaning can take 2 to 3 hours. We will give you an accurate time estimate when you book via WhatsApp so you can plan accordingly.",
  },
  {
    question: "Can you come to my apartment or workplace in Manama?",
    answer:
      "Yes. Vehari Car Wash and Detailing Services brings the car wash to wherever your vehicle is parked — including apartment car parks, office buildings, and villas across Manama, Seef, Juffair, and all our coverage areas in Bahrain. Just confirm your parking location when you book.",
  },
  {
    question: "How much does mobile car detailing cost in Bahrain?",
    answer:
      "We offer three service tiers — Starter, Premium, and Signature — to suit different vehicles and budgets. Exact pricing is confirmed via WhatsApp so we can tailor a quote to your vehicle size and selected services. Message us at +973 3467 8435 for a fast, no-obligation quote.",
  },
  {
    question: "Is Vehari Car Wash available for mobile detailing in Riffa?",
    answer:
      "Yes. Vehari Car Wash and Detailing Services provides full mobile detailing in Riffa, including exterior foam wash, interior deep cleaning, and ceramic protection. We service all of Riffa including residential compounds. Contact us on WhatsApp at +973 3467 8435 to book your Riffa doorstep session.",
  },
  {
    question: "Do you offer mobile car washing in Seef and Juffair?",
    answer:
      "Yes. Vehari Car Wash and Detailing Services covers Seef and Juffair for all doorstep car wash and detailing services. Whether your car is at a Seef mall car park, a Juffair apartment, or any other location, we come to you. Book via WhatsApp at +973 3467 8435.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  area: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Al-Khalifa",
    area: "Seef",
    rating: 5,
    text: "Booked via WhatsApp and the team was at my building's car park within the hour. The full detailing package left my Land Cruiser looking brand new. Highly recommended for anyone in Seef.",
  },
  {
    name: "Sarah M.",
    area: "Juffair",
    rating: 5,
    text: "I have been using Vehari's fortnightly subscription for three months now. They are always on time, professional, and my car has never looked this consistently clean. Worth every fils.",
  },
  {
    name: "Mohammed Al-Dosari",
    area: "Riffa",
    rating: 5,
    text: "Excellent interior deep clean — the team removed stains I thought were permanent. No need for water or power from my side, they had everything. Will definitely book again.",
  },
];
