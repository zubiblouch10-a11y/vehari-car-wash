"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Award,
  Wrench,
  Shield,
  Calendar,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/businessData";
import { SERVICE_PAGES } from "@/lib/servicePages";

const ICON_MAP: Record<string, LucideIcon> = {
  Droplets,
  Sparkles,
  Award,
  Wrench,
  Shield,
  Calendar,
};

const TIER_STYLES: Record<string, string> = {
  Starter: "bg-zinc-800 text-zinc-300 border-zinc-700",
  Premium: "bg-accent-dim text-accent border-accent/30",
  Signature: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  "Starter–Signature": "bg-zinc-800 text-zinc-300 border-zinc-700",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-50 mb-5"
          >
            Professional Detailing,{" "}
            <span className="text-accent">Delivered to Your Door</span>
          </h2>
          {/* AEO capsule for services section */}
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Vehari Car Wash and Detailing Services offers a full range of mobile
            car wash and detailing packages across Bahrain — from a quick
            exterior foam wash to a complete Signature detail with ceramic
            protection. All services are performed at your location, fully
            equipped.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName] ?? Droplets;
            const tierStyle = TIER_STYLES[service.tier] ?? TIER_STYLES.Starter;

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative flex flex-col bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 overflow-hidden hover:border-accent/40 transition-colors duration-300"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, #00f0ff08 0%, transparent 70%)",
                  }}
                />

                {/* Icon + tier */}
                <div className="flex items-start justify-between mb-5 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 group-hover:border-accent/40 transition-colors">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${tierStyle}`}
                  >
                    {service.tier}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-zinc-50 mb-2 relative">
                  {service.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 relative">
                  {service.tagline}
                </p>

                {/* AEO capsule — plain text, crawlable by AI engines */}
                <p className="text-zinc-500 text-xs leading-relaxed mb-6 relative">
                  {service.aeoCapsule}
                </p>

                {/* CTA */}
                <div className="mt-auto relative flex flex-col gap-2">
                  {SERVICE_PAGES.find((p) => p.serviceId === service.id) && (
                    <Link
                      href={`/${SERVICE_PAGES.find((p) => p.serviceId === service.id)!.slug}`}
                      className="text-center text-sm font-medium text-zinc-400 hover:text-accent transition-colors"
                      aria-label={`Learn more about ${service.name}`}
                    >
                      Learn more →
                    </Link>
                  )}
                  <Link
                    href={`/booking?service=${service.id}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-whatsapp/10 border border-whatsapp/30 text-whatsapp text-sm font-semibold hover:bg-whatsapp hover:text-white hover:border-whatsapp transition-all duration-200"
                    aria-label={`Book ${service.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    {service.ctaLabel}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-zinc-400 mb-5">
            Not sure which package suits your car? Ask us — we&apos;ll guide
            you.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp text-white font-semibold hover:bg-whatsapp/90 active:scale-95 transition-all duration-200 shadow-lg shadow-whatsapp/20"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Book on WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
