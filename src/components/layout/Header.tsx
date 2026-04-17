import Link from "next/link";
import { ORG_NAME } from "@/lib/constants";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-primary-700 hover:text-primary-600 transition-colors"
          >
            <svg
              className="w-8 h-8 text-primary-500"
              viewBox="0 0 32 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 2c2.8 0 5.38.96 7.42 2.58L16 14.16l-2-2-6 6V12a10 10 0 0 1 8-10zm10 10v6.42A11.94 11.94 0 0 1 16 28C9.376 28 4 22.624 4 16c0-1.1.15-2.17.42-3.18L10 18.4l6-6 2 2 7.42-7.42A11.9 11.9 0 0 1 28 14z" />
            </svg>
            {ORG_NAME}
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
