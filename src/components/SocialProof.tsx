"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "2,400+", label: "Happy clients" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "4.9★", label: "Average rating" },
  { value: "60k+", label: "Outfits curated" },
];

const testimonials = [
  {
    name: "Emma L.",
    role: "Creative Director, NYC",
    initials: "EL",
    hue: 270,
    rating: 5,
    quote:
      "I've tried three other styling services and none of them felt as personal as Boutique. My stylist remembered I hate synthetic fabrics and found me the most incredible linen pieces.",
  },
  {
    name: "Marcus T.",
    role: "Senior Engineer, SF",
    initials: "MT",
    hue: 200,
    rating: 5,
    quote:
      "As someone who genuinely doesn't enjoy shopping, this has been life-changing. I look more put-together at work and I didn't have to spend a Saturday in the mall.",
  },
  {
    name: "Sofia R.",
    role: "Brand Strategist, Miami",
    initials: "SR",
    hue: 340,
    rating: 5,
    quote:
      "The variety is incredible. I've discovered brands I never would've found on my own. It's like having a best friend with an insane wardrobe who knows exactly your size.",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-1 py-24 sm:py-32"
    >
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-brand-300/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats strip */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-20 sm:mb-24"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeSlide}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-surface-3 shadow-soft-xs"
            >
              <span className="text-3xl sm:text-4xl font-bold text-ink tracking-tight gradient-text">
                {s.value}
              </span>
              <span className="mt-1.5 text-sm text-ink-muted font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-display-md sm:text-display-lg font-bold text-ink text-balance">
            Clients who found their style
          </h2>
          <p className="mt-3 text-ink-muted">Real words from real people — no incentivized reviews.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeSlide}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative flex flex-col rounded-3xl bg-white border border-surface-3 p-8 shadow-soft-md"
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 h-8 w-8 text-brand-100 fill-brand-50"
                aria-hidden
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm leading-relaxed text-ink-muted flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-2">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white shadow-soft-xs"
                  style={{ background: `hsl(${t.hue}, 55%, 55%)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-subtle">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Press logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {["Vogue", "Forbes", "The Cut", "Refinery29", "Elle"].map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-xl font-bold text-surface-3 select-none"
                aria-label={brand}
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
