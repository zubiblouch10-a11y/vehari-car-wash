import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS_NAME, COVERAGE_AREAS, SERVICES } from "@/lib/businessData";
import { todayInBahrain } from "@/lib/booking";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a Doorstep Car Wash",
  description: `Book a doorstep car wash or mobile detailing in Bahrain with ${BUSINESS_NAME}. Choose your service, area, date and time — we come to you, 7 days a week.`,
  alternates: { canonical: "/booking" },
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; area?: string }>;
}) {
  const { service, area } = await searchParams;
  const defaultService = SERVICES.find((s) => s.id === service)?.name;
  const defaultArea = COVERAGE_AREAS.find((a) => a === area);

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

          <BookingForm defaultService={defaultService} defaultArea={defaultArea} minDate={todayInBahrain()} />
        </div>
      </main>
      <Footer />
    </>
  );
}
