import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MessageCircle, PhoneCall } from "lucide-react";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/session";
import { listBookings, usingLocalStore } from "@/lib/bookings-store";
import type { Booking } from "@/lib/supabase";
import { deleteBooking, logout, updateBookingStatus } from "./actions";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const STATUS_STYLES: Record<Booking["status"], string> = {
  pending: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  confirmed: "bg-green-500/15 text-green-400 border-green-500/30",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
};

async function getBookings(): Promise<{ bookings: Booking[]; error?: string }> {
  try {
    return { bookings: await listBookings() };
  } catch (err) {
    console.error("admin getBookings error:", err);
    const message = err instanceof Error ? err.message : "";
    return {
      bookings: [],
      error: message.includes("Missing SUPABASE")
        ? "Supabase is not configured yet. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
        : `Could not load bookings: ${message || "unknown error"}`,
    };
  }
}

function whatsappReply(b: Booking) {
  const text =
    b.status === "confirmed"
      ? `Hello ${b.name}, your Vehari Car Wash booking (${b.service}) is confirmed for ${b.preferred_date} at ${b.preferred_time}. See you then!`
      : `Hello ${b.name}, this is Vehari Car Wash regarding your booking (${b.service}) on ${b.preferred_date} at ${b.preferred_time}.`;
  return `https://wa.me/${b.phone}?text=${encodeURIComponent(text)}`;
}

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    redirect("/admin/login");
  }

  const { bookings, error } = await getBookings();
  const count = (s: Booking["status"]) => bookings.filter((b) => b.status === s).length;

  return (
    <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-display text-2xl font-bold text-zinc-50 sm:text-3xl">
            Booking <span className="text-accent">Requests</span>
          </h1>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-zinc-50"
            >
              Log Out
            </button>
          </form>
        </div>

        {usingLocalStore() && (
          <p className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-300">
            Test mode: Supabase isn&apos;t connected yet, so bookings are saved on this computer only
            (data/bookings.json). Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local to go live.
          </p>
        )}

        {!error && bookings.length > 0 && (
          <p className="mt-3 text-sm text-zinc-500">
            {bookings.length} total · {count("pending")} pending · {count("confirmed")} confirmed ·{" "}
            {count("cancelled")} cancelled
          </p>
        )}

        {error && (
          <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </p>
        )}

        {!error && bookings.length === 0 && (
          <p className="mt-10 text-center text-zinc-500">
            No bookings yet. New bookings will show up here.
          </p>
        )}

        <div className="mt-8 grid gap-4">
          {bookings.map((b) => (
            <div key={b.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-zinc-50">{b.name}</p>
                  <p className="text-sm text-zinc-400">+{b.phone}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href={`tel:+${b.phone}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300 transition hover:border-accent/50 hover:text-accent"
                    >
                      <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" /> Call
                    </a>
                    <a
                      href={whatsappReply(b)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-whatsapp/40 px-2.5 py-1 text-xs text-whatsapp transition hover:bg-whatsapp hover:text-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp
                    </a>
                  </div>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${STATUS_STYLES[b.status]}`}
                >
                  {b.status}
                </span>
              </div>

              <div className="mt-4 grid gap-1 text-sm text-zinc-400 sm:grid-cols-2">
                <p><span className="text-zinc-600">Service:</span> {b.service}</p>
                <p><span className="text-zinc-600">Vehicle:</span> {b.vehicle_type}</p>
                <p><span className="text-zinc-600">Date &amp; Time:</span> {b.preferred_date} at {b.preferred_time}</p>
                <p><span className="text-zinc-600">Area:</span> {b.area}</p>
                <p className="sm:col-span-2"><span className="text-zinc-600">Address:</span> {b.address}</p>
              </div>

              {b.message && (
                <p className="mt-3 rounded-xl bg-white/[0.03] p-3 text-sm text-zinc-400">{b.message}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {b.status !== "confirmed" && (
                  <form action={updateBookingStatus}>
                    <input type="hidden" name="id" value={b.id} />
                    <input type="hidden" name="status" value="confirmed" />
                    <button
                      type="submit"
                      className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold text-green-400 transition hover:brightness-125"
                    >
                      Confirm
                    </button>
                  </form>
                )}
                {b.status !== "cancelled" && (
                  <form action={updateBookingStatus}>
                    <input type="hidden" name="id" value={b.id} />
                    <input type="hidden" name="status" value="cancelled" />
                    <button
                      type="submit"
                      className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-400 transition hover:brightness-125"
                    >
                      Cancel
                    </button>
                  </form>
                )}
                <form action={deleteBooking}>
                  <input type="hidden" name="id" value={b.id} />
                  <button
                    type="submit"
                    className="rounded-full border border-zinc-700 px-4 py-1.5 text-xs font-semibold text-zinc-400 transition hover:text-zinc-50"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
