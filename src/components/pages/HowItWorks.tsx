const STEPS = [
  {
    title: "Book online",
    text: "Choose your service, area, date and time on the booking form. No payment is needed to book.",
  },
  {
    title: "We confirm on WhatsApp",
    text: "Send your booking on WhatsApp. We confirm your slot, agree the details and the price with you there.",
  },
  {
    title: "We come to you",
    text: "Our fully equipped team arrives at your car with its own water and power and gets to work.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-zinc-950 px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="how-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="how-heading" className="font-display text-2xl font-bold tracking-tight text-zinc-50">
          How it works
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3" role="list">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display font-bold text-zinc-50">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
