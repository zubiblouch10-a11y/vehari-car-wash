// Small booking helpers shared by the /booking form, its server action and /admin.
// Safe to import from client and server code.

export const VEHICLE_TYPES = [
  "Sedan / Hatchback",
  "SUV / Crossover",
  "4x4 / Pickup",
  "Van / Minibus",
] as const;

// Hourly slots inside opening hours (08:00 – 22:00).
export const TIME_SLOTS = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
] as const;

/** Today's date (YYYY-MM-DD) in Bahrain, whatever timezone the server/browser is in. */
export function todayInBahrain(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bahrain",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** Digits only; 8-digit Bahrain numbers get the 973 country code. null = not a valid number. */
export function normalizePhone(input: string): string | null {
  const digits = input.replace(/\D/g, "").replace(/^00/, "");
  if (digits.length === 8) return `973${digits}`;
  if (digits.length >= 9 && digits.length <= 15) return digits;
  return null;
}
