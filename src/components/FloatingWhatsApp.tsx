"use client";

// Visible on desktop (≥md) only — mobile users get MobileStickyBar instead.
// Decision: avoids visual collision between the floating button and the mobile sticky bar.

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/businessData";

export default function FloatingWhatsApp() {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp-strong shadow-xl shadow-whatsapp/30 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        {/* Pulsating glow rings */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-whatsapp"
          animate={{ scale: [1, 1.55, 1.55], opacity: [0.7, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-whatsapp"
          animate={{ scale: [1, 1.35, 1.35], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
        />

        {/* Icon */}
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7" aria-hidden="true" />
        </motion.span>
      </a>
    </div>
  );
}
