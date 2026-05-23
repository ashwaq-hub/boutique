"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, X, Globe, Share2 } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "How it works", "Style quiz"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help center", "Contact", "Privacy", "Terms"],
};

const socials = [
  { Icon: X, label: "X (Twitter)", href: "#" },
  { Icon: Globe, label: "Website", href: "#" },
  { Icon: Share2, label: "Share", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      {/* Top gradient line */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
      />

      {/* Orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-brand-700/20 blur-[80px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 sm:py-20 text-center border-b border-white/10"
        >
          <h2 className="text-display-md sm:text-display-lg font-bold text-balance mb-4">
            Ready to love what you wear?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Join 2,400+ clients who finally look forward to getting dressed. Start your style journey today.
          </p>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-base font-semibold text-ink hover:bg-white/90 transition-all duration-150 shadow-soft-lg"
          >
            Get started — it&apos;s free to try
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Links grid */}
        <div className="py-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand shadow-glow-brand">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg font-semibold">Boutique</span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              Premium personal styling delivered to your door, monthly.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 hover:border-white/20 hover:text-white/80 transition-colors duration-150"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Boutique, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
