"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";
import {
  AGGREGATE_RATING,
  RATING_COUNT,
  TESTIMONIALS,
  GOOGLE_BUSINESS_PROFILE,
} from "@/lib/businessData";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <span className="flex" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-amber-400 text-amber-400" : "fill-zinc-700 text-zinc-700"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function ReviewSection() {
  return (
    <section
      id="reviews"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/40"
      aria-labelledby="reviews-heading"
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
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-50 mb-8"
          >
            What Our Customers Say
          </h2>

          {/* Aggregate rating display — tied to AggregateRating schema */}
          <div className="inline-flex flex-col items-center gap-3 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl px-8 py-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-6xl text-zinc-50">
                {AGGREGATE_RATING.toFixed(1)}
              </span>
              <span className="text-zinc-400 text-lg">/ 5</span>
            </div>
            <StarRow count={Math.round(AGGREGATE_RATING)} />
            <p className="text-zinc-400 text-sm">
              Based on{" "}
              <strong className="text-zinc-200">{RATING_COUNT} verified reviews</strong>
            </p>
            <a
              href={GOOGLE_BUSINESS_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent text-sm font-medium hover:underline"
              aria-label="Read all reviews on Google Business Profile"
            >
              Read all reviews on Google
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              className="relative flex flex-col bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-300"
            >
              <Quote
                className="w-8 h-8 text-accent/20 mb-4 shrink-0"
                aria-hidden="true"
              />
              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-zinc-50 font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-zinc-400 text-xs">{testimonial.area}, Bahrain</p>
                </div>
                <div className="ml-auto">
                  <StarRow count={testimonial.rating} />
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA to Google */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_BUSINESS_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
            aria-label="See all customer reviews on Google"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            See all {RATING_COUNT} reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
