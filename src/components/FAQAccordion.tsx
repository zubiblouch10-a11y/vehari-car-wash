"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS, WHATSAPP_URL, type FAQ } from "@/lib/businessData";
import { MessageCircle } from "lucide-react";

export default function FAQAccordion({
  faqs = FAQS,
  id = "faq",
  heading = "Frequently Asked Questions",
}: {
  faqs?: FAQ[];
  id?: string;
  heading?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id={id}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-50 mb-4"
          >
            {heading}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Everything you need to know about our doorstep car wash and
            detailing service across Bahrain. Can&apos;t find an answer? Message
            us on WhatsApp.
          </p>
        </motion.div>

        {/* Accordion — text matches FAQPage schema verbatim */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-2"
          role="list"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const itemId = `faq-item-${i}`;
            const answerId = `faq-answer-${i}`;

            return (
              <div
                key={i}
                role="listitem"
                className={`bg-zinc-900/80 backdrop-blur-xl border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-accent/40" : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {/* Question button */}
                <button
                  id={itemId}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-2xl"
                >
                  <span className="font-semibold text-zinc-100 text-base leading-snug pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-colors duration-200 ${
                      isOpen
                        ? "border-accent/50 bg-accent/10 text-accent"
                        : "border-zinc-700 text-zinc-400"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {/* Answer — AnimatePresence for smooth open/close */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={itemId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/60 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-zinc-400 mb-4 text-sm">
            Have a different question? We usually reply within minutes.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-whatsapp/40 text-whatsapp text-sm font-semibold hover:bg-whatsapp hover:text-white hover:border-whatsapp transition-all duration-200"
            aria-label="Ask a question via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Ask Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
