import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/session";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The matcher is case-insensitive but the routes are not: /Admin would 404 once logged in.
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url);
  }

  const authenticated = isValidSessionToken(request.cookies.get(COOKIE_NAME)?.value);

  if (pathname === "/admin/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  if (!authenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
