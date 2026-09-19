import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import PageHero from "@/components/pages/PageHero";
import HowItWorks from "@/components/pages/HowItWorks";
import JsonLd from "@/components/pages/JsonLd";
import { generateHubPageSchema } from "@/lib/schema";

export type HubItem = { name: string; text: string; href: string };

interface Props {
  slug: "services" | "areas";
  metaTitle: string;
  metaDescription: string;
  crumbLabel: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  items: HubItem[];
  itemsHeading: string;
}

/** Hub page (/services, /areas): lists every child page with a short blurb and a link. */
export default function HubTemplate(p: Props) {
  return (
    <>
      <JsonLd
        data={generateHubPageSchema({
          slug: p.slug,
          name: p.crumbLabel,
          metaTitle: p.metaTitle,
          metaDescription: p.metaDescription,
          items: p.items,
        })}
      />
      <Navbar />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: "/" }, { label: p.crumbLabel }]}
          eyebrow={p.eyebrow}
          h1={p.h1}
          intro={p.intro}
          highlights={p.highlights}
          bookHref="/booking"
        />

        <section className="bg-zinc-950 px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="hub-items-heading">
          <div className="mx-auto max-w-4xl">
            <h2 id="hub-items-heading" className="font-display text-2xl font-bold tracking-tight text-zinc-50">
              {p.itemsHeading}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2" role="list">
              {p.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-accent/50"
                  >
                    <span className="font-display text-lg font-bold text-zinc-50 transition-colors group-hover:text-accent">
                      {item.name}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{item.text}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HowItWorks />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  );
}
