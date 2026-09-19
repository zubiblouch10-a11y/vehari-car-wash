"use server";

import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  COOKIE_NAME,
  MAX_AGE_SECONDS,
  createSessionToken,
  requireAdminSession,
} from "@/lib/session";
import { removeBooking, setBookingStatus } from "@/lib/bookings-store";

export type LoginState = { error?: string; success?: boolean } | undefined;

// Hash both sides first so the comparison is constant-time and never leaks the password length.
const digest = (value: string) => crypto.createHash("sha256").update(value).digest();

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD ?? "";

  const valid =
    expected.length > 0 &&
    !!process.env.ADMIN_SESSION_SECRET &&
    crypto.timingSafeEqual(digest(password), digest(expected));

  if (!valid) {
    return { error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });

  // The form navigates to /admin itself once it sees `success` (see LoginForm).
  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin/login");
}

export async function updateBookingStatus(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["pending", "confirmed", "cancelled"].includes(status)) return;

  await setBookingStatus(id, status as "pending" | "confirmed" | "cancelled");
  revalidatePath("/admin");
}

export async function deleteBooking(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await removeBooking(id);
  revalidatePath("/admin");
}
