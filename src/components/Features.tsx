"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, ShoppingBag, Sparkles, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    ring: "ring-violet-200",
    label: "Style Profile",
    heading: "A stylist who actually knows you",
    description:
      "Complete a detailed style quiz and get matched with a dedicated stylist. They learn your preferences, body shape, and lifestyle — so every pick feels personal.",
    bullets: ["Body & fit analysis", "Color palette matching", "Lifestyle curation"],
  },
  {
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    ring: "ring-pink-200",
    label: "Curated Looks",
    heading: "Complete outfits, not just pieces",
    description:
      "We build full head-to-toe looks with mix-and-match potential, so your wardrobe multiplies without you doing the math.",
    bullets: ["Full outfit boards", "Mix & match logic", "Occasion-ready sets"],
  },
  {
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    label: "Seamless Delivery",
    heading: "Try before you buy, ship what you love",
    description:
      "Items arrive at your door. Keep what you love, return the rest in the prepaid bag — no stress, no commitment, no styling fee if you keep 5+.",
    bullets: ["Free delivery & returns", "5-day try-on window", "Styling fee waived"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-3xl border border-surface-3 bg-white p-8 shadow-soft-md hover:shadow-soft-xl transition-shadow duration-300"
    >
      {/* Top label */}
      <div className="flex items-center justify-between mb-6">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full ${feature.bg} ${feature.ring} ring-1 px-3 py-1 text-xs font-semibold text-ink`}
        >
          {feature.label}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-surface-3">
          <ArrowUpRight className="h-4 w-4 text-ink-muted" />
        </span>
      </div>

      {/* Icon */}
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-soft-md`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-ink mb-3 leading-snug">
        {feature.heading}
      </h3>
      <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-1">
        {feature.description}
      </p>

      {/* Bullets */}
      <ul className="space-y-2.5">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-sm text-ink-muted">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-2">
              <svg className="h-3 w-3 text-brand-500" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {b}
          </li>
        ))}
      </ul>

      {/* Hover gradient border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-brand-200 transition-all duration-300"
      />
    </motion.div>
  );
}

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
        >
          <span className="inline-block rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-4">
            Why Boutique
          </span>
          <h2 className="text-display-md sm:text-display-lg font-bold text-ink text-balance">
            Everything you need to dress with confidence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted text-pretty">
            From discovery to delivery, we&apos;ve built the most complete personal
            styling experience on the market.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.label} feature={feature} index={i} />
          ))}
        </div>
      </div>

      {/* Subtle bottom gradient transition */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-surface-1"
      />
    </section>
  );
}
