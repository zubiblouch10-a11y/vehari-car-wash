"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  ExternalLink,
  Droplets,
} from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE_HREF,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_PROFILE,
  HOURS_OPEN,
  HOURS_CLOSE,
  GOOGLE_MAPS_EMBED,
} from "@/lib/businessData";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { LOCATION_PAGES } from "@/lib/locationPages";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-zinc-900/60 border-t border-zinc-800"
      aria-label="Site footer — Vehari Car Wash contact and information"
    >
      {/* Map embed */}
      <div className="w-full h-48 sm:h-64 overflow-hidden">
        <iframe
          src={GOOGLE_MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vehari Car Wash and Detailing Services location on Google Maps"
          aria-label="Google Maps showing Vehari Car Wash service area in Bahrain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Column 1 — Brand + NAP */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 group-hover:border-accent/60 transition-colors">
                <Droplets className="w-4 h-4 text-accent" aria-hidden="true" />
              </span>
              <span className="text-sm font-display font-bold text-zinc-50">
                <span className="text-accent">Vehari</span> Car Wash
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Bahrain&apos;s premier mobile car wash and detailing service —
              delivered to your door, fully equipped, 7 days a week.
            </p>

            {/* NAP block — crawlable for local SEO */}
            <address className="not-italic flex flex-col gap-2 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-zinc-300 hover:text-accent transition-colors"
                aria-label={`Phone: ${PHONE_DISPLAY}`}
              >
                <PhoneCall className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-whatsapp transition-colors"
                aria-label="WhatsApp Us — Vehari Car Wash"
              >
                <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" aria-hidden="true" />
                WhatsApp Us
              </a>
              <span className="flex items-start gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                Doorstep service · Bahrain
              </span>
              <span className="flex items-center gap-2 text-zinc-400">
                <Clock className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                {HOURS_OPEN} – {HOURS_CLOSE}, 7 days
              </span>
            </address>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-display font-semibold text-zinc-50 text-sm mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Coverage Areas */}
          <div>
            <h3 className="font-display font-semibold text-zinc-50 text-sm mb-4 uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {LOCATION_PAGES.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    className="text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                  >
                    {l.area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Links + Social */}
          <div>
            <h3 className="font-display font-semibold text-zinc-50 text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 mb-8" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={GOOGLE_BUSINESS_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                  aria-label="Vehari Car Wash on Google Business Profile"
                >
                  Google Business
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <h3 className="font-display font-semibold text-zinc-50 text-sm mb-3 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex gap-3" role="list" aria-label="Social media links">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-700 text-zinc-400 hover:border-accent/50 hover:text-accent transition-all"
                aria-label="Vehari Car Wash on Instagram"
                role="listitem"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-700 text-zinc-400 hover:border-accent/50 hover:text-accent transition-all"
                aria-label="Vehari Car Wash on Facebook"
                role="listitem"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-700 text-zinc-400 hover:border-accent/50 hover:text-accent transition-all"
                aria-label="Vehari Car Wash on TikTok"
                role="listitem"
              >
                {/* TikTok icon (lucide-react doesn't include TikTok; use text fallback) */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-xs">
          <p>
            &copy; {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p>
            Doorstep car wash &amp; mobile detailing · Bahrain ·{" "}
            <a
              href={`tel:+97334678435`}
              className="hover:text-zinc-300 transition-colors"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>

      {/* Mobile bottom padding to avoid overlap with MobileStickyBar */}
      <div className="md:hidden h-16" aria-hidden="true" />
    </footer>
  );
}
