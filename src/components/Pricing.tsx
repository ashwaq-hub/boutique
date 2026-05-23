"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essential",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "Perfect for building a capsule wardrobe from scratch.",
    cta: "Start Essential",
    featured: false,
    features: [
      "5 items per box",
      "1 stylist session / month",
      "Free shipping & returns",
      "Style profile quiz",
      "Keep what you love",
    ],
    missing: ["Priority stylist access", "Unlimited swaps", "Trend reports"],
  },
  {
    name: "Style",
    monthlyPrice: 59,
    annualPrice: 47,
    description: "Our most popular plan for the style-conscious professional.",
    cta: "Start Style",
    featured: true,
    badge: "Most popular",
    features: [
      "10 items per box",
      "Unlimited stylist sessions",
      "Free shipping & returns",
      "Style profile quiz",
      "Keep what you love",
      "Priority stylist access",
      "Unlimited swaps",
    ],
    missing: ["Trend reports"],
  },
  {
    name: "Atelier",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "White-glove service with exclusive access and trend insights.",
    cta: "Start Atelier",
    featured: false,
    features: [
      "Unlimited items per box",
      "Unlimited stylist sessions",
      "Free shipping & returns",
      "Style profile quiz",
      "Keep what you love",
      "Priority stylist access",
      "Unlimited swaps",
      "Trend reports",
    ],
    missing: [],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="relative bg-white py-24 sm:py-32">
      {/* Top border accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <span className="inline-block rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-4">
            Pricing
          </span>
          <h2 className="text-display-md sm:text-display-lg font-bold text-ink text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted">
            No hidden fees. Cancel anytime. Styling fee waived when you keep 5+ items.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={cn("text-sm font-medium", !annual ? "text-ink" : "text-ink-subtle")}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={cn(
              "relative h-6 w-11 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
              annual ? "bg-brand-500" : "bg-surface-3"
            )}
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className="absolute top-0.5 left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-soft-sm"
              style={{ x: annual ? 20 : 0 }}
            />
          </button>
          <span className={cn("text-sm font-medium flex items-center gap-2", annual ? "text-ink" : "text-ink-subtle")}>
            Annual
            <span className="rounded-full bg-brand-50 border border-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: plan.featured ? -2 : -4, transition: { duration: 0.2 } }}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 transition-shadow duration-300",
                plan.featured
                  ? "bg-ink text-white shadow-glow-brand-lg ring-1 ring-white/10 md:-mt-4"
                  : "bg-white border border-surface-3 shadow-soft-md hover:shadow-soft-xl"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-white shadow-glow-brand">
                    <Zap className="h-3 w-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={cn("text-sm font-semibold mb-1", plan.featured ? "text-brand-300" : "text-brand-600")}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-5xl font-bold tracking-tight"
                    >
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span className={cn("mb-2 text-sm", plan.featured ? "text-white/60" : "text-ink-subtle")}>
                    /mo
                  </span>
                </div>
                <p className={cn("mt-2 text-sm leading-relaxed", plan.featured ? "text-white/70" : "text-ink-muted")}>
                  {plan.description}
                </p>
              </div>

              <a
                href="#"
                className={cn(
                  "mb-8 flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-150",
                  plan.featured
                    ? "bg-white text-ink hover:bg-white/90 shadow-soft-sm"
                    : "bg-ink text-white hover:bg-ink/90 shadow-soft-sm"
                )}
              >
                {plan.cta}
              </a>

              <div className="space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        plan.featured ? "bg-brand-400/20" : "bg-brand-50"
                      )}
                    >
                      <Check
                        className={cn(
                          "h-3 w-3",
                          plan.featured ? "text-brand-300" : "text-brand-500"
                        )}
                      />
                    </span>
                    <span className={cn("text-sm", plan.featured ? "text-white/85" : "text-ink-muted")}>
                      {f}
                    </span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-30">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-2">
                      <svg className="h-3 w-3 text-ink-subtle" viewBox="0 0 12 12" fill="none">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-ink-subtle">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-sm text-ink-subtle"
        >
          All plans include a{" "}
          <span className="font-medium text-ink-muted">30-day money-back guarantee</span>.
          No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
