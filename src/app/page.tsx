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
  title: `${BUSINESS_NAME} | Doorstep Car Wash & Detailing Bahrain`,
  description: `Professional doorstep car wash and mobile detailing service across ${COVERAGE_AREAS.join(", ")} in Bahrain. Book via WhatsApp — 7 days a week, 8 AM – 10 PM.`,
  alternates: {
    canonical: DOMAIN,
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
