"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ORG_NAME } from "@/lib/constants";
import Navigation from "./Navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(193,155,62,0.25),0_4px_24px_0_rgba(0,0,0,0.45)]"
          : "bg-ink-900/90 backdrop-blur-sm border-b border-gold-600/30"
      }`}
    >
      {/* Gold shimmer line at very top */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[1.5px] transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(193,155,62,0.6) 30%, rgba(193,155,62,0.6) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${ORG_NAME} home`}
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={52}
              height={52}
              priority
              className="rounded-sm transition-opacity group-hover:opacity-90"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-semibold tracking-widest uppercase text-gold-300 group-hover:text-gold-200 transition-colors">
                {ORG_NAME}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-400/70">
                Policy Research &amp; Public Education
              </span>
            </span>
            <span className="sm:hidden text-sm font-semibold tracking-wider uppercase text-gold-300">
              Legislative for Life
            </span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
