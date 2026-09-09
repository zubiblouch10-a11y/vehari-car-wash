import type { Metadata } from "next";
import { BUSINESS_NAME, DOMAIN, COVERAGE_AREAS } from "@/lib/businessData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ReviewSection from "@/components/ReviewSection";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vehari Car Wash & Detailing | Doorstep Mobile Car Wash Bahrain",
  description: `Professional doorstep car wash and mobile detailing across ${COVERAGE_AREAS.join(", ")} in Bahrain. Fully equipped, no water or power needed from you. Book via WhatsApp — 7 days a week, 8 AM–10 PM.`,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <ReviewSection />
        <FAQAccordion />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  );
}
