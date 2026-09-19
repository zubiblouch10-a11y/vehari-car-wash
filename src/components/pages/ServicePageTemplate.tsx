import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import PageHero from "@/components/pages/PageHero";
import HowItWorks from "@/components/pages/HowItWorks";
import LinkSection from "@/components/pages/LinkSection";
import JsonLd from "@/components/pages/JsonLd";
import { generateServicePageSchema } from "@/lib/schema";
import { SERVICE_PAGES, type ServicePage } from "@/lib/servicePages";
import { LOCATION_PAGES } from "@/lib/locationPages";

export default function ServicePageTemplate({ page }: { page: ServicePage }) {
  const otherServices = SERVICE_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    label: p.name,
    href: `/${p.slug}`,
  }));
  const areas = LOCATION_PAGES.map((l) => ({ label: l.area, href: `/${l.slug}` }));

  return (
    <>
      <JsonLd data={generateServicePageSchema(page)} />
      <Navbar />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: page.name }]}
          eyebrow="Doorstep service · Bahrain"
          h1={page.h1}
          intro={page.intro}
          highlights={page.highlights}
          bookHref={`/booking?service=${page.serviceId}`}
          facts={[
            { label: "How long it takes", value: page.duration },
            { label: "Best for", value: page.bestFor },
          ]}
        />
        <HowItWorks />
        <FAQAccordion
          faqs={page.faqs}
          id="service-faq"
          heading={`${page.name} — FAQ`}
        />
        <LinkSection heading="Areas we serve" intro={`We bring ${page.name.toLowerCase()} to all of these areas of Bahrain.`} links={areas} />
        <LinkSection heading="Other services" links={otherServices} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  );
}
