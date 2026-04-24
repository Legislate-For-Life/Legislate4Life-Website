import Link from "next/link";
import Image from "next/image";
import {
  ORG_NAME,
  FOOTER_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100 border-t border-gold-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & tagline */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt=""
                width={48}
                height={48}
                className="rounded-sm"
              />
              <span className="text-base font-semibold tracking-widest uppercase text-gold-300">
                {ORG_NAME}
              </span>
            </Link>
            <p className="text-sm text-ink-200 leading-relaxed">
              Advocating for mental health awareness, resources, and policy
              reform for farming communities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-gold-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-200 hover:text-gold-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-gold-300">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-ink-200">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-gold-200 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-300 hover:text-ink-900 hover:bg-gold-300 hover:border-gold-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-300 hover:text-ink-900 hover:bg-gold-300 hover:border-gold-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9a8.16 8.16 0 004.77 1.52V7.2a4.85 4.85 0 01-1.84-.51z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-300 hover:text-ink-900 hover:bg-gold-300 hover:border-gold-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-700 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-300">
          <p>
            &copy; {new Date().getFullYear()} {ORG_NAME}. All rights reserved.
          </p>
          <p className="tracking-widest uppercase">Plant Awareness, Harvest Fairness</p>
        </div>
      </div>
    </footer>
  );
}
