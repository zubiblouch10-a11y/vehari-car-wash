import crypto from "crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "admin_session";
export const MAX_AGE_SECONDS = 60 * 60 * 8;

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function createSessionToken(): string {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `admin.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [scope, expiresStr, signature] = token.split(".");
  if (scope !== "admin" || !expiresStr || !signature) return false;

  const expected = sign(`${scope}.${expiresStr}`);
  const signatureBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (signatureBuf.length !== expectedBuf.length) return false;
  if (!crypto.timingSafeEqual(signatureBuf, expectedBuf)) return false;

  return Date.now() < Number(expiresStr);
}

export async function requireAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    throw new Error("Unauthorized");
  }
}
