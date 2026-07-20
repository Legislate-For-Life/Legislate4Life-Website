"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav aria-label="Main navigation">
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-0.5">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors group inline-block ${
                  active ? "text-gold-300" : "text-ink-200 hover:text-gold-200"
                }`}
              >
                {link.label}
                {/* Gold underline indicator */}
                <span
                  className={`absolute inset-x-3 bottom-0 h-[1.5px] rounded-full transition-all duration-200 ${
                    active
                      ? "bg-gold-400 opacity-100"
                      : "bg-gold-400 opacity-0 group-hover:opacity-60"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-lg text-gold-200 hover:bg-gold-500/10 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.path
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <motion.path
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </AnimatePresence>
        </svg>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-ink-900/98 backdrop-blur-md border-t border-gold-600/30 shadow-2xl md:hidden"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3.5 text-sm font-medium transition-colors border-b border-ink-800/60 ${
                      active
                        ? "text-gold-300 bg-gold-500/8"
                        : "text-ink-100 hover:text-gold-200 hover:bg-gold-500/6"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
