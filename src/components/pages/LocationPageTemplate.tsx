import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import PageHero from "@/components/pages/PageHero";
import HowItWorks from "@/components/pages/HowItWorks";
import LinkSection from "@/components/pages/LinkSection";
import JsonLd from "@/components/pages/JsonLd";
import { generateLocationPageSchema } from "@/lib/schema";
import { LOCATION_PAGES, type LocationPage } from "@/lib/locationPages";
import { SERVICE_PAGES } from "@/lib/servicePages";

export default function LocationPageTemplate({ page }: { page: LocationPage }) {
  const services = SERVICE_PAGES.map((s) => ({ label: s.name, href: `/${s.slug}` }));
  const otherAreas = LOCATION_PAGES.filter((l) => l.slug !== page.slug).map((l) => ({
    label: l.area,
    href: `/${l.slug}`,
  }));

  return (
    <>
      <JsonLd data={generateLocationPageSchema(page)} />
      <Navbar />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: "/" }, { label: "Areas", href: "/areas" }, { label: page.area }]}
          eyebrow={`Serving ${page.area}, Bahrain`}
          h1={page.h1}
          intro={page.intro}
          highlights={page.highlights}
          bookHref={`/booking?area=${encodeURIComponent(page.area)}`}
        />

        <section className="bg-zinc-950 px-4 py-6 sm:px-6 lg:px-8" aria-labelledby="about-area-heading">
          <div className="mx-auto max-w-4xl">
            <h2 id="about-area-heading" className="font-display text-2xl font-bold tracking-tight text-zinc-50">
              Car care in {page.area}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400">{page.aboutArea}</p>
          </div>
        </section>

        <LinkSection
          heading={`Services available in ${page.area}`}
          intro="Every service below is done at your location, fully equipped."
          links={services}
        />
        <HowItWorks />
        <FAQAccordion faqs={page.faqs} id="area-faq" heading={`Car wash in ${page.area} — FAQ`} />
        <LinkSection heading="Other areas we serve" links={otherAreas} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  );
}
