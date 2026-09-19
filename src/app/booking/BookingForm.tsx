"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { COVERAGE_AREAS, PHONE_RAW, SERVICES } from "@/lib/businessData";
import { TIME_SLOTS, VEHICLE_TYPES } from "@/lib/booking";
import { createBooking, type BookingState } from "./actions";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-50 outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-accent/60";

function Field({
  id,
  label,
  optional,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-zinc-400">
        {label}
        {optional && <span className="text-zinc-600"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

function whatsappUrl(v: Record<string, string>) {
  const lines = [
    "Hello Vehari Car Wash, I just made a booking on your website.",
    `Name: ${v.name}`,
    `Service: ${v.service}`,
    `Vehicle: ${v.vehicle}`,
    `When: ${v.date}, ${v.time}`,
    `Area: ${v.area}`,
    `Address: ${v.address}`,
  ];
  if (v.message) lines.push(`Notes: ${v.message}`);
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function BookingForm({
  defaultService,
  defaultArea,
  minDate,
}: {
  defaultService?: string;
  defaultArea?: string;
  minDate: string;
}) {
  const [state, setState] = useState<BookingState>();
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSubmitted(
      Object.fromEntries(Array.from(data.entries()).map(([k, v]) => [k, String(v).trim()]))
    );
    startTransition(async () => {
      setState(await createBooking(undefined, data));
    });
  };

  if (state?.success) {
    return (
      <div className="rounded-3xl border border-accent/30 bg-zinc-900/60 p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-whatsapp" aria-hidden="true" />
        <h2 className="font-display text-2xl font-bold text-zinc-50">
          Booking <span className="text-accent">Received!</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
          Thank you for booking with Vehari Car Wash. Send us your booking on WhatsApp and
          we&rsquo;ll confirm your slot there — pricing and payment are settled after
          confirmation.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl(submitted)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-whatsapp/90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Confirm on WhatsApp
          </a>
          <Link
            href="/"
            className="w-full rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-accent/50 hover:text-accent sm:w-auto"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Full Name">
            <input id="name" name="name" required maxLength={80} autoComplete="name" placeholder="Your name" className={inputClass} />
          </Field>
          <Field id="phone" label="Phone / WhatsApp">
            <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+973 3XXX XXXX" className={inputClass} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="service" label="Service Needed">
            <select id="service" name="service" required defaultValue={defaultService ?? ""} className={inputClass}>
              <option value="" disabled>Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </Field>
          <Field id="vehicle" label="Vehicle Type">
            <select id="vehicle" name="vehicle" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select vehicle type</option>
              {VEHICLE_TYPES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="area" label="Area">
            <select id="area" name="area" required defaultValue={defaultArea ?? ""} className={inputClass}>
              <option value="" disabled>Select your area</option>
              {COVERAGE_AREAS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </Field>
          <Field id="address" label="Address / Parking Location">
            <input id="address" name="address" required maxLength={300} placeholder="Building, road, block, landmark…" className={inputClass} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="date" label="Preferred Date">
            <input id="date" name="date" type="date" required min={minDate} className={`${inputClass} [color-scheme:dark]`} />
          </Field>
          <Field id="time" label="Preferred Time">
            <select id="time" name="time" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select a time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field id="message" label="Message" optional>
          <textarea id="message" name="message" rows={3} maxLength={500} placeholder="Pet hair, stains, gate code, anything we should know…" className={`${inputClass} resize-none`} />
        </Field>

        {/* Honeypot — hidden from people, tempting to bots */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {state?.error && (
          <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold text-white transition hover:bg-whatsapp/90 disabled:opacity-60"
        >
          {pending ? (
            <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Booking…</>
          ) : (
            <><MessageCircle className="h-5 w-5" aria-hidden="true" /> Book on WhatsApp</>
          )}
        </button>
        <p className="text-center text-xs text-zinc-500">
          No payment now. We&rsquo;ll confirm your booking on WhatsApp.
        </p>
      </div>
    </form>
  );
}
