// SEO area pages — one per entry in COVERAGE_AREAS (businessData.ts).
// Each page has its own copy so they are genuinely different, not swapped-name duplicates.

import { COVERAGE_AREAS, type CoverageArea, type FAQ } from "@/lib/businessData";

export type LocationPage = {
  slug: string;
  area: CoverageArea;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // direct-answer capsule shown under the H1
  aboutArea: string; // what car care looks like in this area
  highlights: string[];
  faqs: FAQ[];
};

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: "mobile-car-wash-manama",
    area: "Manama",
    metaTitle: "Mobile Car Wash & Detailing in Manama | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Manama, Bahrain. We come to your apartment, office or villa, fully equipped. Book online, open 7 days a week.",
    h1: "Mobile Car Wash & Detailing in Manama",
    intro:
      "Vehari Car Wash and Detailing Services provides doorstep car wash and mobile detailing across Manama. Our team comes to your apartment car park, office building or villa with its own water, power and professional products, so you can keep your car spotless without leaving your day behind.",
    aboutArea:
      "Manama is Bahrain's capital, packed with apartment towers, office buildings, hotels and busy roads, and cars here collect dust and city grime quickly. Because so many Manama residents park in basements, shared car parks or on the street outside their building, a wash that comes to the car is far more convenient than driving to a car wash and waiting your turn.",
    highlights: [
      "We wash cars in apartment car parks, office car parks and villa driveways",
      "Fully equipped team — no water or power needed from you",
      "Exterior wash, interior deep clean, full detailing and protection available",
      "Weekly and fortnightly plans for busy Manama drivers",
    ],
    faqs: [
      {
        question: "Do you offer mobile car wash across Manama?",
        answer:
          "Yes. We cover Manama for all our services, from an exterior foam wash to a full detailing package. Tell us where your car is parked when you book and we will confirm the details on WhatsApp.",
      },
      {
        question: "Can you wash my car in an apartment building car park in Manama?",
        answer:
          "Yes. We work in apartment car parks, office building car parks and villa driveways. Let us know the building and parking level or spot, and mention if we need gate or security clearance.",
      },
      {
        question: "What hours do you work in Manama?",
        answer:
          "We operate seven days a week from 08:00 to 22:00, including evenings and weekends. Choose a preferred date and time on the booking form and we will confirm it.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-seef",
    area: "Seef",
    metaTitle: "Mobile Car Wash & Detailing in Seef | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Seef, Bahrain. We wash your car at the mall car park, office tower or apartment. Book online in minutes.",
    h1: "Mobile Car Wash & Detailing in Seef",
    intro:
      "Vehari Car Wash and Detailing Services covers Seef for every doorstep car wash and detailing service. Whether your car is parked at a Seef mall car park, an office tower or your apartment building, our fully equipped team comes to you and gets it clean while you work, shop or relax.",
    aboutArea:
      "Seef is one of Bahrain's main commercial and shopping districts, with malls, hotels, office towers and residential buildings side by side. Many people spend hours in Seef every day while their car sits in a car park, which makes it ideal for a mobile wash: book a time, tell us where you parked, and your car is clean when you come back.",
    highlights: [
      "Wash and detail your car while you are at work or shopping in Seef",
      "Works in mall, office and apartment car parks — tell us where you parked",
      "Foam wash, interior deep clean, full detail and ceramic or wax protection",
      "Subscription plans for regular Seef commuters",
    ],
    faqs: [
      {
        question: "Do you offer mobile car washing in Seef?",
        answer:
          "Yes. We cover Seef for all our doorstep car wash and detailing services. Whether your car is at a Seef mall car park, an office building or a nearby apartment, we come to you. Book online or on WhatsApp.",
      },
      {
        question: "Can you wash my car at my office in Seef while I am working?",
        answer:
          "Yes. Book a time slot, tell us the building and where the car is parked, and confirm on WhatsApp how we get access to the vehicle. Our team brings water and power, so nothing is needed from the building.",
      },
      {
        question: "Which services are most popular for Seef drivers?",
        answer:
          "Many customers start with an exterior foam wash or an interior deep clean, and move to a weekly or fortnightly subscription so the car stays clean. Ask us on WhatsApp if you are unsure which suits your car.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-riffa",
    area: "Riffa",
    metaTitle: "Mobile Car Wash & Detailing in Riffa | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Riffa, Bahrain, including villas and residential compounds. Fully equipped, 7 days a week. Book online.",
    h1: "Mobile Car Wash & Detailing in Riffa",
    intro:
      "Vehari Car Wash and Detailing Services provides full mobile detailing in Riffa, including exterior foam wash, interior deep cleaning and ceramic protection. We service all of Riffa, including villas and residential compounds, bringing everything needed to your driveway.",
    aboutArea:
      "Riffa is one of Bahrain's largest residential areas, with many family villas, compounds and driveways where cars are parked outside in the sun and dust. Family cars here often need regular interior care as well as exterior washing, so a doorstep service that can do both on your own driveway saves a lot of time and trips.",
    highlights: [
      "We come to your villa driveway or compound — no water or power needed",
      "Interior deep cleaning for family cars, from school runs to weekend trips",
      "Ceramic or wax protection against sun and dust",
      "Fortnightly and weekly plans for Riffa households with more than one car",
    ],
    faqs: [
      {
        question: "Is Vehari Car Wash available for mobile detailing in Riffa?",
        answer:
          "Yes. We provide full mobile detailing in Riffa, including exterior foam wash, interior deep cleaning and ceramic protection. We service all of Riffa, including residential compounds. Book online or contact us on WhatsApp.",
      },
      {
        question: "Can you wash more than one car at my home in Riffa?",
        answer:
          "Ask us when you book. Tell us how many cars and which services you want, and we will confirm the time needed and the arrangement on WhatsApp.",
      },
      {
        question: "Do you come to gated compounds in Riffa?",
        answer:
          "Yes. If your compound needs gate clearance or visitor registration, tell us when you book and share any access instructions so our team can arrive without delays.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-juffair",
    area: "Juffair",
    metaTitle: "Mobile Car Wash & Detailing in Juffair | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Juffair, Bahrain. We come to your apartment tower car park, fully equipped. Book online, 7 days a week.",
    h1: "Mobile Car Wash & Detailing in Juffair",
    intro:
      "Vehari Car Wash and Detailing Services covers Juffair for all doorstep car wash and detailing services. If your car is parked at a Juffair apartment tower or any other location, our fully equipped team comes to you, so you can book a wash without leaving home.",
    aboutArea:
      "Juffair is a dense residential neighbourhood of high-rise apartment towers, where most cars live in tower car parks or on the street. Busy residents rarely have the time to queue at a car wash, and washing a car yourself in a shared car park is often not allowed, which is exactly where a self-sufficient mobile service helps.",
    highlights: [
      "We work in apartment tower car parks — no hose or power point needed",
      "Evening and weekend slots for residents who work long days",
      "Interior deep clean and full detail for cars used every day",
      "Subscription plans so your car stays clean all month",
    ],
    faqs: [
      {
        question: "Do you offer mobile car washing in Juffair?",
        answer:
          "Yes. We cover Juffair for all doorstep car wash and detailing services. Whether your car is at a Juffair apartment tower or another location, we come to you. Book online or on WhatsApp.",
      },
      {
        question: "I live in a Juffair apartment tower — can you wash my car in the car park?",
        answer:
          "Yes. Our team brings its own water, power and products, so you do not need a tap or socket. Tell us the tower name and where the car is parked, and share any building rules we should follow.",
      },
      {
        question: "Can I book an evening or weekend slot in Juffair?",
        answer:
          "Yes. We work seven days a week from 08:00 to 22:00, so evenings and weekends are available. Pick your preferred date and time on the booking form and we will confirm it.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-amwaj-islands",
    area: "Amwaj Islands",
    metaTitle: "Mobile Car Wash & Detailing on Amwaj Islands | Vehari",
    metaDescription:
      "Doorstep car wash and mobile detailing on Amwaj Islands, Bahrain. We come to your waterfront apartment or villa, fully equipped. Book online today.",
    h1: "Mobile Car Wash & Detailing on Amwaj Islands",
    intro:
      "Vehari Car Wash and Detailing Services brings doorstep car wash and mobile detailing to Amwaj Islands. Our team arrives at your waterfront apartment or villa with its own water, power and professional products, so your car is cared for without a trip off the islands.",
    aboutArea:
      "Amwaj Islands sits on the water, with waterfront apartments, villas and marina-side living. Coastal humidity and salt in the air can dull paintwork over time, so regular washing and a protective ceramic or wax layer are worth considering here. A mobile service also saves the drive off the islands just to visit a car wash.",
    highlights: [
      "We come to your apartment block or villa on Amwaj — no water or power needed",
      "Ceramic and wax protection to help paint cope with coastal conditions",
      "Exterior wash, interior clean and full detailing at your door",
      "Weekly or fortnightly plans to keep a coastal car looking its best",
    ],
    faqs: [
      {
        question: "Do you cover Amwaj Islands for mobile car wash?",
        answer:
          "Yes. Amwaj Islands is one of the areas we cover for every service, from an exterior foam wash to a full detailing package. Tell us your building or villa when you book and we will confirm the details on WhatsApp.",
      },
      {
        question: "Is protection worth it for a car parked near the sea?",
        answer:
          "Coastal humidity and salt in the air can dull paint, and a ceramic coating or carnauba wax adds a protective, water-repelling layer. Ask us on WhatsApp and we will suggest what suits your car.",
      },
      {
        question: "How do I book a car wash on Amwaj Islands?",
        answer:
          "Use the online booking form to choose your service, date and time, or message us on WhatsApp at +973 3467 8435. Our team then confirms your slot and arrives at your location.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-saar",
    area: "Saar",
    metaTitle: "Mobile Car Wash & Detailing in Saar | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Saar, Bahrain. We come to your villa or apartment, fully equipped, 7 days a week. Book your slot online.",
    h1: "Mobile Car Wash & Detailing in Saar",
    intro:
      "Vehari Car Wash and Detailing Services provides doorstep car wash and mobile detailing in Saar. Whether you live in a villa or an apartment block, our fully equipped team comes to you and handles everything from a quick exterior foam wash to a full detailing package.",
    aboutArea:
      "Saar is a residential neighbourhood of villas and apartment blocks on Bahrain's north-west side, where many families park at home and commute daily. That makes a doorstep service a natural fit: schedule a visit around your routine and come home to a clean car, without adding another errand to a busy week.",
    highlights: [
      "We wash and detail cars at Saar villas and apartment buildings",
      "Our team carries water, power and products — nothing needed from you",
      "Book around school runs and commutes, including evenings and weekends",
      "Fortnightly plans for households that want a regularly clean car",
    ],
    faqs: [
      {
        question: "Do you offer mobile car wash in Saar?",
        answer:
          "Yes. Saar is part of our coverage area for all doorstep car wash and detailing services. Book online or message us on WhatsApp with your location and preferred time.",
      },
      {
        question: "Can you clean my car interior at home in Saar?",
        answer:
          "Yes. Interior deep cleaning, including a full vacuum, seat shampoo, dashboard and door-panel cleaning and odour elimination, is done at your location. Tell us about any stains or smells when you book.",
      },
      {
        question: "How do I know when the team will arrive in Saar?",
        answer:
          "You choose a preferred date and time when you book. We confirm your slot on WhatsApp and share the arrival plan, so you know when to expect us.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-muharraq",
    area: "Muharraq",
    metaTitle: "Car Wash & Detailing in Muharraq | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Muharraq, Bahrain. We come to your home or workplace, fully equipped. Book online, open 7 days a week.",
    h1: "Mobile Car Wash & Detailing in Muharraq",
    intro:
      "Vehari Car Wash and Detailing Services provides doorstep car wash and mobile detailing across Muharraq. Our team comes to your home or workplace with everything needed, so you can get a professional wash or full detail without driving across Bahrain.",
    aboutArea:
      "Muharraq is home to Bahrain's international airport and some of the country's oldest neighbourhoods, alongside newer residential areas and busy workplaces. Parking can range from private driveways to narrower streets and shared lots, so we ask you to tell us exactly where the car is parked and confirm access before we arrive.",
    highlights: [
      "We come to your home, workplace or airport-area car park",
      "Tell us where the car is parked and we confirm access before arriving",
      "Exterior wash, interior clean, full detail and protection available",
      "Weekly or fortnightly subscription plans for regular drivers",
    ],
    faqs: [
      {
        question: "Do you cover Muharraq for mobile car washing?",
        answer:
          "Yes. Muharraq is one of the areas we cover for every doorstep service. Book online or contact us on WhatsApp with your location and we will confirm your slot.",
      },
      {
        question: "My car is parked on a narrow street in Muharraq — is that a problem?",
        answer:
          "Usually not, but please tell us exactly where the car is parked and how much space there is when you book. We confirm the arrangement with you on WhatsApp before the visit.",
      },
      {
        question: "Can you wash my car at my workplace in Muharraq?",
        answer:
          "Yes. We can wash your car while you are at work. Share the building, parking spot and any access requirements, and our fully equipped team handles the rest.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-isa-town",
    area: "Isa Town",
    metaTitle: "Car Wash & Detailing in Isa Town | Vehari Car Wash",
    metaDescription:
      "Doorstep car wash and mobile detailing in Isa Town, Bahrain. We come to your home, fully equipped, 7 days a week. Book your slot online today.",
    h1: "Mobile Car Wash & Detailing in Isa Town",
    intro:
      "Vehari Car Wash and Detailing Services provides car detailing across Isa Town. Our fully equipped team comes to your home and cleans your car on your own driveway or parking spot, so a professional wash never means a trip out or a wait in a queue.",
    aboutArea:
      "Isa Town is a well-established residential town in central Bahrain, with many family homes and driveways where the car is parked overnight and used for daily errands. A doorstep visit fits neatly into that routine: book a time that suits your household and the car is cleaned while you carry on with your day.",
    highlights: [
      "We wash and detail cars at your home in Isa Town",
      "No water or power needed — our team brings its own",
      "Interior deep cleaning for family cars used every day",
      "Subscription plans so your car is cleaned on a regular schedule",
    ],
    faqs: [
      {
        question: "Do you offer doorstep car detailing in Isa Town?",
        answer:
          "Yes. Isa Town is part of our coverage area for all our doorstep car wash and detailing services. Book online or message us on WhatsApp and we will confirm your slot.",
      },
      {
        question: "What services can you do at my home in Isa Town?",
        answer:
          "We can do an exterior foam wash, interior deep cleaning, a full detailing package, engine bay cleaning and ceramic or wax protection. Choose the service on the booking form and we confirm the plan.",
      },
      {
        question: "Do I need to be at home during the wash?",
        answer:
          "Tell us where the car is parked and how we can access it when you book, and we will confirm the arrangement on WhatsApp. Some customers stay at home, others are at work.",
      },
    ],
  },
  {
    slug: "mobile-car-wash-diplomatic-area",
    area: "Diplomatic Area",
    metaTitle: "Mobile Car Wash & Detailing in Diplomatic Area | Vehari",
    metaDescription:
      "Doorstep car wash and mobile detailing in the Diplomatic Area, Bahrain. We come to your hotel, office or apartment. Fully equipped. Book online today.",
    h1: "Mobile Car Wash & Detailing in the Diplomatic Area",
    intro:
      "Vehari Car Wash and Detailing Services provides doorstep car wash and mobile detailing in the Diplomatic Area. Our fully equipped team comes to your office, hotel or apartment car park, so your car stays clean and presentable for work without a trip to a car wash.",
    aboutArea:
      "The Diplomatic Area in Manama is a business and hotel district of office towers, embassies and serviced apartments, where a clean, presentable car matters. Access to buildings can involve security or gate approval, so we ask you to share any access requirements when you book and we confirm the arrangement before the visit.",
    highlights: [
      "We come to your office, hotel or apartment car park",
      "Tell us about security or gate approvals and we plan around them",
      "Exterior foam wash, interior deep clean and full detailing at your door",
      "Weekly and fortnightly plans for professionals who want a consistently clean car",
    ],
    faqs: [
      {
        question: "Do you cover the Diplomatic Area for mobile car washing?",
        answer:
          "Yes. The Diplomatic Area is one of the areas we cover for all our doorstep services. Book online or message us on WhatsApp with your building and parking details.",
      },
      {
        question: "My building has security at the gate — how does that work?",
        answer:
          "Tell us about any gate approval, visitor registration or ID requirements when you book. We confirm the arrangement with you on WhatsApp so our team can arrive and get straight to work.",
      },
      {
        question: "Can you wash my car while I am at work in the Diplomatic Area?",
        answer:
          "Yes. Book a slot, tell us the building and where the car is parked, and our fully equipped team handles the rest. No water or power is needed from the building.",
      },
    ],
  },
];

export const getLocationPage = (slug: string) => LOCATION_PAGES.find((p) => p.slug === slug);

// Guard: every area in businessData must have a page (and vice versa).
if (process.env.NODE_ENV !== "production") {
  const pageAreas = LOCATION_PAGES.map((p) => p.area).sort().join("|");
  const dataAreas = [...COVERAGE_AREAS].sort().join("|");
  if (pageAreas !== dataAreas) {
    console.warn("LOCATION_PAGES and COVERAGE_AREAS are out of sync.");
  }
}
