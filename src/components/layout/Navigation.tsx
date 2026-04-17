"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation">
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-500 text-white"
                    : "text-foreground hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
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
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-foreground hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
