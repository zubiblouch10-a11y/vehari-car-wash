"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, Star, MapPin, Clock } from "lucide-react";
import {
  PHONE_HREF,
  PHONE_DISPLAY,
  AGGREGATE_RATING,
  RATING_COUNT,
  COVERAGE_AREAS,
  HOURS_OPEN,
  HOURS_CLOSE,
} from "@/lib/businessData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
      aria-label="Hero — Vehari Car Wash and Detailing Services"
    >
      {/* Radial glow background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #00f0ff0d 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 80%, #10b9810a 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* AEO capsule — crawlable, direct-answer paragraph */}
        <motion.p
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs sm:text-sm font-medium mb-8"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          Doorstep service across {COVERAGE_AREAS.length} areas in Bahrain
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-zinc-50 leading-[1.05] tracking-tight mb-6"
        >
          Bahrain&apos;s Premier{" "}
          <span className="text-accent">Doorstep Car Wash</span>{" "}
          &amp; Detailing Service
        </motion.h1>

        {/* AEO answer capsule — 40–50 words, direct-answer for AI engines */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Vehari Car Wash and Detailing Services brings professional mobile car
          cleaning to your home, office, or any location across Manama, Seef,
          Riffa, Juffair, Amwaj Islands, and more — fully equipped, seven days
          a week.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/booking"
            className="flex items-center gap-3 px-7 py-4 rounded-xl bg-whatsapp text-white font-semibold text-base sm:text-lg hover:bg-whatsapp/90 active:scale-95 transition-all duration-200 shadow-lg shadow-whatsapp/20 w-full sm:w-auto justify-center"
            aria-label="Book a doorstep car wash on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Book on WhatsApp
          </Link>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 px-7 py-4 rounded-xl border border-accent/40 text-accent font-semibold text-base sm:text-lg hover:bg-accent/10 hover:border-accent active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
            aria-label={`Call us now at ${PHONE_DISPLAY}`}
          >
            <PhoneCall className="w-5 h-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm"
        >
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </span>
            <span>
              <strong className="text-zinc-50">{AGGREGATE_RATING}</strong> rating ·{" "}
              <strong className="text-zinc-50">{RATING_COUNT}</strong> reviews
            </span>
          </div>

          <span className="hidden sm:block w-px h-4 bg-zinc-700" aria-hidden="true" />

          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>
              <strong className="text-zinc-50">{COVERAGE_AREAS.length}</strong> areas
              covered across Bahrain
            </span>
          </div>

          <span className="hidden sm:block w-px h-4 bg-zinc-700" aria-hidden="true" />

          <div className="flex items-center gap-2 text-zinc-300">
            <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>
              7 days a week ·{" "}
              <strong className="text-zinc-50">
                {HOURS_OPEN} – {HOURS_CLOSE}
              </strong>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-0.5 h-6 rounded-full bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
