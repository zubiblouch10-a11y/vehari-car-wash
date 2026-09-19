import Link from "next/link";

export type LinkItem = { label: string; href: string };

/** A titled block of internal links (related services, other areas…). Plain server component. */
export default function LinkSection({
  heading,
  intro,
  links,
}: {
  heading: string;
  intro?: string;
  links: LinkItem[];
}) {
  return (
    <section className="bg-zinc-950 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-50">{heading}</h2>
        {intro && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{intro}</p>}
        <ul className="mt-5 flex flex-wrap gap-3" role="list">
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
      </div>
    </section>
  );
}
