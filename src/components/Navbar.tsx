"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, MessageCircle, Menu, X } from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE_HREF,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/businessData";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route hash change
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/70 shadow-lg shadow-zinc-950/60"
            : "bg-zinc-950/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label={`${BUSINESS_NAME} — home`}
            >
              <Image
                src="/images/logo.webp"
                alt="Vehari Car Wash and Detailing Services logo"
                width={40}
                height={40}
                className="rounded-full ring-1 ring-zinc-700 group-hover:ring-accent/50 transition-all duration-200"
                priority
              />
              <span className="text-sm sm:text-base font-display font-bold text-zinc-50 leading-tight">
                <span className="text-accent">Vehari</span> Car Wash
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:border-accent/50 hover:text-accent text-sm font-medium transition-all duration-200"
                aria-label={`Call us at ${PHONE_DISPLAY}`}
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-whatsapp text-white text-sm font-semibold hover:bg-whatsapp/90 transition-colors duration-200"
                aria-label="Book via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-700 text-zinc-300 hover:border-accent/50 hover:text-accent transition-all"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-3 rounded-lg text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800 text-base font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-2">
                <a
                  href={PHONE_HREF}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-700 text-zinc-200 font-medium text-sm hover:border-accent/50 transition-colors"
                  aria-label={`Call ${PHONE_DISPLAY}`}
                >
                  <PhoneCall className="w-4 h-4" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp/90 transition-colors"
                  aria-label="Book via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Book on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
