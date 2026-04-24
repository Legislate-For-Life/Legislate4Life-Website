import Link from "next/link";
import Image from "next/image";
import { ORG_NAME } from "@/lib/constants";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink-900/95 backdrop-blur-sm border-b border-gold-600/40">
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
              width={56}
              height={56}
              priority
              className="rounded-sm"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-semibold tracking-widest uppercase text-gold-300 group-hover:text-gold-200 transition-colors">
                {ORG_NAME}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-400/80">
                Plant Awareness, Harvest Fairness
              </span>
            </span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
