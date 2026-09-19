"use server";

import { saveBooking } from "@/lib/bookings-store";
import { COVERAGE_AREAS, SERVICES } from "@/lib/businessData";
import { TIME_SLOTS, VEHICLE_TYPES, normalizePhone, todayInBahrain } from "@/lib/booking";

export type BookingState = { error?: string; success?: boolean } | undefined;

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function createBooking(
  _prevState: BookingState,
  formData: FormData
): Promise<BookingState> {
  // Honeypot: real people never see or fill this field. Pretend it worked for bots.
  if (String(formData.get("website") ?? "").trim()) return { success: true };

  const name = String(formData.get("name") ?? "").trim().slice(0, 80);
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const vehicleType = String(formData.get("vehicle") ?? "").trim();
  const area = String(formData.get("area") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim().slice(0, 300);
  const preferredDate = String(formData.get("date") ?? "").trim();
  const preferredTime = String(formData.get("time") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim().slice(0, 500);

  if (!name || !phoneRaw || !service || !vehicleType || !area || !address || !preferredDate || !preferredTime) {
    return { error: "Please fill in all required fields." };
  }

  const phone = normalizePhone(phoneRaw);
  if (!phone) return { error: "Please enter a valid phone number." };

  if (!SERVICES.some((s) => s.name === service)) {
    return { error: "Please select a valid service." };
  }
  if (!(VEHICLE_TYPES as readonly string[]).includes(vehicleType)) {
    return { error: "Please select a valid vehicle type." };
  }
  if (!(COVERAGE_AREAS as readonly string[]).includes(area)) {
    return { error: "Please select a valid area." };
  }
  if (!(TIME_SLOTS as readonly string[]).includes(preferredTime)) {
    return { error: "Please select a valid time." };
  }
  if (!DATE_RE.test(preferredDate) || Number.isNaN(Date.parse(preferredDate))) {
    return { error: "Please select a valid date." };
  }
  if (preferredDate < todayInBahrain()) {
    return { error: "Please choose today or a future date." };
  }

  try {
    await saveBooking({
      name,
      phone,
      service,
      vehicle_type: vehicleType,
      area,
      address,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      message: message || null,
    });
  } catch (err) {
    console.error("createBooking error:", err);
    return {
      error: "Booking is temporarily unavailable. Please WhatsApp us directly.",
    };
  }

  return { success: true };
}
