"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-mesh pt-16"
    >
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-200/30 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-brand-300/20 blur-[100px]"
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_30%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-brand-700 shadow-soft-xs backdrop-blur-sm mb-8"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-100">
            <Star className="h-2.5 w-2.5 fill-brand-500 text-brand-500" />
          </span>
          Trusted by 2,000+ style-conscious clients
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-balance text-display-lg sm:text-display-xl lg:text-display-2xl font-bold tracking-tight text-ink"
        >
          Your wardrobe,{" "}
          <span className="gradient-text">reimagined</span>{" "}
          by experts.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-ink-muted text-pretty leading-relaxed"
        >
          Boutique pairs you with a dedicated personal stylist who curates looks
          tailored to your body, lifestyle, and taste — delivered monthly to your
          door.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-3.5 text-base font-semibold text-white shadow-soft-lg hover:bg-ink/90 hover:shadow-soft-xl transition-all duration-200"
          >
            Start your style journey
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-surface-3 bg-white/80 px-7 py-3.5 text-base font-semibold text-ink hover:bg-white transition-colors duration-150 shadow-soft-xs backdrop-blur-sm"
          >
            See how it works
          </a>
        </motion.div>

        {/* Social proof avatars */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div className="flex -space-x-3">
            {["E", "M", "J", "S", "K"].map((initial, i) => (
              <div
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white shadow-soft-sm"
                style={{
                  background: `hsl(${270 + i * 15}, 60%, ${50 + i * 4}%)`,
                }}
              >
                {initial}
              </div>
            ))}
          </div>
          <div className="text-sm text-ink-muted">
            <span className="font-semibold text-ink">4.9/5</span> from over 2,000 reviews
          </div>
        </motion.div>
      </div>

      {/* Hero image / mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-20 w-full max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-3xl border border-surface-3 bg-white/60 p-2 shadow-soft-xl backdrop-blur-md">
          <div className="rounded-2xl bg-gradient-to-br from-surface-1 to-white overflow-hidden">
            {/* Simulated dashboard UI */}
            <div className="flex items-center gap-2 border-b border-surface-3 px-4 py-3">
              {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                <div key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
              ))}
              <div className="mx-auto flex items-center gap-2 rounded-full border border-surface-3 bg-white px-4 py-1 text-xs text-ink-subtle">
                boutique.style/dashboard
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 sm:grid-cols-5 lg:grid-cols-7">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-xl bg-gradient-to-br from-surface-2 to-surface-3 animate-pulse-slow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Glow under dashboard */}
        <div
          aria-hidden
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-24 w-3/4 rounded-full bg-brand-400/20 blur-3xl"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-ink-subtle">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-6 w-4 rounded-full border-2 border-ink-subtle flex items-start justify-center pt-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-ink-subtle" />
        </motion.div>
      </motion.div>
    </section>
  );
}
