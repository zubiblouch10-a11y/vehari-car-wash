"use client";

// Visible on mobile only (< md). Sits at the bottom of the viewport, safe-area aware.
// Desktop users see the navbar CTAs and FloatingWhatsApp instead.

import { PhoneCall, MessageCircle } from "lucide-react";
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/businessData";

export default function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Call */}
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-zinc-900 border-t border-zinc-800 text-zinc-200 font-semibold text-sm active:bg-zinc-800 transition-colors"
        aria-label={`Call us at ${PHONE_DISPLAY}`}
      >
        <PhoneCall className="w-5 h-5 text-accent" aria-hidden="true" />
        <span>Call Now</span>
      </a>

      {/* Divider */}
      <div className="w-px bg-zinc-800 shrink-0" aria-hidden="true" />

      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-whatsapp text-white font-semibold text-sm active:bg-whatsapp/90 transition-colors"
        aria-label="Book a doorstep car wash via WhatsApp"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
