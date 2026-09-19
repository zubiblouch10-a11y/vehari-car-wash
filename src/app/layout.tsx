import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
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
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(DOMAIN),
  applicationName: BUSINESS_NAME,

  title: {
    default: "Vehari Car Wash & Detailing | Doorstep Mobile Car Wash Bahrain",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Bahrain's #1 doorstep mobile car wash and detailing service. We come to you — Manama, Seef, Riffa, Juffair, Amwaj Islands & more. Book via WhatsApp in seconds. Open 7 days, 8 AM–10 PM.",

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
    "car wash subscription Bahrain",
    "ceramic coating Bahrain",
  ],

  // ── Canonical + hreflang ─────────────────────────────────────────────────
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },

  // ── Google Search Console verification ───────────────────────────────────
  verification: {
    google: "F4U80it7b6mNl8gmtGlb7fFQyWHHFV-MlSAfgDMOgQ0",
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_BH",
    url: DOMAIN,
    siteName: BUSINESS_NAME,
    title: "Vehari Car Wash & Detailing | Doorstep Mobile Car Wash Bahrain",
    description:
      "Professional mobile car wash and detailing delivered to your door across 9 areas in Bahrain — 7 days a week, fully equipped. Book via WhatsApp.",
    images: [
      {
        url: "/images/vehari-car-wash-bahrain-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vehari Car Wash and Detailing Services — Professional Doorstep Mobile Car Wash across Bahrain",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Vehari Car Wash & Detailing | Doorstep Mobile Car Wash Bahrain",
    description:
      "Mobile car wash and detailing at your doorstep across Bahrain. Book via WhatsApp — 7 days a week, 8 AM–10 PM.",
    images: ["/images/vehari-car-wash-bahrain-og.jpg"],
  },

  // ── Favicons / icons (supplement auto-detected favicon.ico + apple-icon.png) ──
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },

  // ── Crawl directives ─────────────────────────────────────────────────────
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

  // ── Browser/UX signals ───────────────────────────────────────────────────
  // Prevents iOS from auto-linking phone numbers and addresses (we control markup)
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  category: "automotive",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <head>
        {/* ── Structured data (JSON-LD) ──────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />

        {/* ── Resource hints for critical origins ───────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        {/* ── iOS PWA meta ──────────────────────────────────────────────── */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vehari Car Wash" />

        {/* ── Theme color for browser chrome (matches dark design) ──────── */}
        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
