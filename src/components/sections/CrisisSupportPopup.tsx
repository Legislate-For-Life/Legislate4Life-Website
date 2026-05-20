"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "lfl-crisis-popup-dismissed";

export default function CrisisSupportPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (dismissed !== "1") {
      const t = window.setTimeout(() => setVisible(true), 800);
      return () => window.clearTimeout(t);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Crisis support quick contact"
      className="fixed top-24 right-4 z-40 w-[280px] max-w-[calc(100vw-2rem)] rounded-xl border border-gold-400/60 bg-ink-900 text-ink-100 shadow-xl shadow-black/30"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss crisis support popup"
        className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-ink-300 hover:text-gold-200 hover:bg-ink-800 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="p-4 pr-9">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-gold-300" aria-hidden="true" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">
            Need Help Now?
          </p>
        </div>
        <p className="text-xs text-ink-200 leading-relaxed mb-3">
          If you or someone you know is in crisis, support is available 24/7.
        </p>
        <div className="flex flex-col gap-1.5">
          <a
            href="tel:988"
            className="text-sm font-semibold text-gold-200 hover:text-gold-100"
          >
            Call or text 988
          </a>
          <a
            href="tel:18003276243"
            className="text-xs text-ink-200 hover:text-gold-200"
          >
            Farm Aid: 1-800-FARM-AID
          </a>
        </div>
      </div>
    </div>
  );
}
