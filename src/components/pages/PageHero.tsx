import Link from "next/link";
import { CalendarCheck, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/businessData";

export type Crumb = { label: string; href?: string };

interface Props {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  bookHref: string;
  facts?: { label: string; value: string }[];
}

/** Server-rendered hero shared by service and area pages: breadcrumb, H1, answer capsule, CTAs, highlights. */
export default function PageHero({ crumbs, eyebrow, h1, intro, highlights, bookHref, facts }: Props) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, #00f0ff0d 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 70%, #10b9810a 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-400">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-zinc-300">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
          {h1}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{intro}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={bookHref}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp-strong px-7 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-strong/90 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Book on WhatsApp
          </Link>
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2.5 rounded-xl border border-accent/40 px-7 py-4 text-base font-semibold text-accent transition hover:border-accent hover:bg-accent/10 active:scale-95"
            aria-label={`Call us at ${PHONE_DISPLAY}`}
          >
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {facts && facts.length > 0 && (
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{f.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-zinc-200">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-10 grid gap-3 sm:grid-cols-2" role="list">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm leading-relaxed text-zinc-300"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Open 7 days a week, 08:00 – 22:00.{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-whatsapp hover:underline">
            Prefer to chat? WhatsApp us
          </a>
        </p>
      </div>
    </section>
  );
}
