import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS_NAME, DOMAIN } from "@/lib/businessData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: `${BUSINESS_NAME} | Doorstep Car Wash Bahrain`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Bahrain's premier doorstep mobile car wash and detailing service. Professional car cleaning delivered to your home across Manama, Seef, Riffa, Juffair, Amwaj Islands, and 4 more areas — 7 days a week. Book via WhatsApp.",
  keywords: [
    "doorstep car wash Bahrain",
    "mobile car detailing Bahrain",
    "car wash at home Manama",
    "deep interior detailing Riffa",
    "mobile detailing Seef",
    "car wash Juffair",
    "car wash Amwaj Islands",
    "mobile car wash Muharraq",
    "auto detailing Bahrain",
    "doorstep car cleaning Bahrain",
    "car wash near me Bahrain",
    "mobile car wash Saar",
    "car detailing Isa Town",
    "professional car wash Diplomatic Area",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  openGraph: {
    title: `${BUSINESS_NAME} | Doorstep Car Wash Bahrain`,
    description:
      "Bahrain's premier doorstep mobile car wash and detailing service. Professional car cleaning delivered to your home across 9 areas in Bahrain — 7 days a week.",
    url: DOMAIN,
    siteName: BUSINESS_NAME,
    locale: "en_BH",
    type: "website",
    images: [
      {
        url: `${DOMAIN}/images/vehari-car-wash-bahrain-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Vehari Car Wash and Detailing Services — Professional Doorstep Mobile Car Wash across Bahrain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | Doorstep Car Wash Bahrain`,
    description:
      "Professional mobile car wash and detailing at your doorstep across Bahrain. Book via WhatsApp — 7 days a week, 8 AM – 10 PM.",
    images: [`${DOMAIN}/images/vehari-car-wash-bahrain-og.jpg`],
  },
  icons: {
    // favicon.ico and apple-icon.png in src/app/ are auto-detected by Next.js.
    // These extra entries cover the 16×16 and 32×32 PNG variants in /public.
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
