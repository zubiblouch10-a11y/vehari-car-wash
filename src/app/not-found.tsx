import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { LOCATION_PAGES } from "@/lib/locationPages";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Vehari Car Wash" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const links = [
    { label: "Book a car wash", href: "/booking" },
    { label: "All services", href: "/services" },
    { label: "All areas", href: "/areas" },
    ...SERVICE_PAGES.slice(0, 3).map((p) => ({ label: p.name, href: `/${p.slug}` })),
    ...LOCATION_PAGES.slice(0, 3).map((p) => ({ label: `Car wash in ${p.area}`, href: `/${p.slug}` })),
  ];

  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Error 404</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-zinc-50">We couldn&apos;t find that page</h1>
          <p className="mt-4 text-zinc-400">
            The page may have moved. Try one of these instead, or head back to the home page.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-whatsapp-strong px-6 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-strong/90"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
