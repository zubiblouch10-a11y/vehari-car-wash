import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: { absolute: "Book a Doorstep Car Wash in Bahrain | Vehari Car Wash" },
  description: `Book a doorstep car wash or mobile detailing in Bahrain. Choose your service, area, date and time — we come to you 7 days a week and confirm on WhatsApp.`,
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Book on WhatsApp
            </p>
            <h1 className="mb-3 font-display text-3xl font-extrabold text-zinc-50 sm:text-4xl">
              Book Your <span className="text-accent">Doorstep Wash</span>
            </h1>
            <p className="text-zinc-400">
              Pick a service, date and time — we&apos;ll come to you anywhere across Bahrain and
              confirm on WhatsApp.
            </p>
          </div>

          <Suspense fallback={<div className="min-h-[1100px] rounded-3xl border border-zinc-800 bg-zinc-900/50" aria-hidden="true" />}>
            <BookingForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
