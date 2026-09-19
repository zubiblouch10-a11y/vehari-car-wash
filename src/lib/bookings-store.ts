import "server-only";

// One place that reads/writes bookings.
//
// - Supabase configured (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY)  -> Supabase `bookings` table.
// - Not configured, local development only                          -> data/bookings.json on this computer,
//   so the booking form and admin panel can be tried before Supabase is set up.
// - Not configured in production                                     -> throws (never silently write to disk).

import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getSupabaseAdmin, isSupabaseConfigured, type Booking } from "@/lib/supabase";

export type NewBooking = Omit<Booking, "id" | "status" | "created_at">;
export type BookingStatus = Booking["status"];

const localAllowed = process.env.NODE_ENV !== "production";

/** True when bookings are going to the local JSON file instead of Supabase. */
export const usingLocalStore = () => !isSupabaseConfigured() && localAllowed;

function assertUsable() {
  if (!isSupabaseConfigured() && !localAllowed) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.");
  }
}

// ─── Local JSON file (dev fallback) ──────────────────────────────────────────

const FILE = path.join(process.cwd(), "data", "bookings.json");
const g = globalThis as unknown as { __vehariLocalQueue?: Promise<unknown> };

function locked<T>(fn: () => Promise<T>): Promise<T> {
  const run = (g.__vehariLocalQueue ?? Promise.resolve()).then(fn);
  g.__vehariLocalQueue = run.catch(() => undefined);
  return run;
}

async function readLocal(): Promise<Booking[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as Booking[];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeLocal(rows: Booking[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(rows, null, 2), "utf8");
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function saveBooking(input: NewBooking): Promise<void> {
  assertUsable();

  if (usingLocalStore()) {
    await locked(async () => {
      const rows = await readLocal();
      rows.push({
        ...input,
        id: randomUUID(),
        status: "pending",
        created_at: new Date().toISOString(),
      });
      await writeLocal(rows);
    });
    return;
  }

  const { error } = await getSupabaseAdmin().from("bookings").insert(input);
  if (error) throw new Error(error.message);
}

/** All bookings, newest first. */
export async function listBookings(): Promise<Booking[]> {
  assertUsable();

  if (usingLocalStore()) {
    const rows = await locked(readLocal);
    return rows.sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  const { data, error } = await getSupabaseAdmin()
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false })
    .abortSignal(AbortSignal.timeout(8000)); // never hang the page if Supabase is unreachable
  if (error) throw new Error(error.message);
  return (data as Booking[]) ?? [];
}

export async function setBookingStatus(id: string, status: BookingStatus): Promise<void> {
  assertUsable();

  if (usingLocalStore()) {
    await locked(async () => {
      const rows = await readLocal();
      const row = rows.find((r) => r.id === id);
      if (row) {
        row.status = status;
        await writeLocal(rows);
      }
    });
    return;
  }

  const { error } = await getSupabaseAdmin().from("bookings").update({ status }).eq("id", id);
  if (error) throw new Error(error.message);
}

export async function removeBooking(id: string): Promise<void> {
  assertUsable();

  if (usingLocalStore()) {
    await locked(async () => {
      const rows = await readLocal();
      await writeLocal(rows.filter((r) => r.id !== id));
    });
    return;
  }

  const { error } = await getSupabaseAdmin().from("bookings").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
