"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How does the styling process work?",
    a: "After you sign up, you complete a detailed style quiz covering your body shape, size, lifestyle, favorite brands, and budget. We match you with a dedicated stylist who reviews your profile, then handpicks 5–10+ items for your first box. You try everything at home for 5 days and keep what you love.",
  },
  {
    q: "What does the styling fee cover?",
    a: "The styling fee covers your stylist's time — research, curation, and personalizing each box. The fee is fully credited toward any purchase you make. If you keep 5 or more items, the styling fee is automatically waived.",
  },
  {
    q: "Can I request specific items or brands?",
    a: "Absolutely. You can leave notes for your stylist before each box, request specific occasions (job interview, vacation, etc.), pin pieces you've loved, or block brands you don't like. Your stylist reads every note.",
  },
  {
    q: "How do returns work?",
    a: "Your box comes with a prepaid return label and bag. Simply place any unwanted items back, seal the bag, and drop it off at any UPS location — or schedule a pickup. Returns must be initiated within 5 days of delivery.",
  },
  {
    q: "Can I pause or cancel my subscription?",
    a: "Yes, anytime. You can pause your subscription for up to 3 months or cancel completely from your dashboard with no penalty. We never lock you into contracts.",
  },
  {
    q: "Do you style men, women, and non-binary clients?",
    a: "Yes — Boutique styles everyone. We have stylists with expertise across menswear, womenswear, and gender-inclusive fashion. You specify your preferences during onboarding and we match accordingly.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-surface-3 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-ink group-hover:text-brand-700 transition-colors duration-150">
          {item.q}
        </span>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-surface-3 bg-surface-1 transition-all duration-200",
            open && "bg-brand-50 border-brand-200 rotate-45"
          )}
        >
          <Plus className={cn("h-4 w-4 transition-colors duration-200", open ? "text-brand-600" : "text-ink-muted")} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-ink-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative bg-surface-1 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-4">
            FAQ
          </span>
          <h2 className="text-display-md sm:text-display-lg font-bold text-ink text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-ink-muted">
            Can&apos;t find your answer?{" "}
            <a href="#" className="font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2">
              Chat with us.
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-surface-3 bg-white p-6 sm:p-8 shadow-soft-md"
        >
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
