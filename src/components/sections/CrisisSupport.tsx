import { CRISIS_RESOURCES } from "@/lib/constants";

interface CrisisSupportProps {
  variant?: "banner" | "card";
}

export default function CrisisSupport({ variant = "banner" }: CrisisSupportProps) {
  if (variant === "card") {
    return (
      <div className="p-5 bg-gold-50 border border-gold-300 rounded-lg">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-700 mb-2">
          Need Help Now?
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          If you or someone you know is in crisis, call or text{" "}
          <strong className="text-ink-900">988</strong> for the Suicide &amp;
          Crisis Lifeline, or call the Farm Aid Hotline at{" "}
          <strong className="text-ink-900">1-800-FARM-AID</strong>.
        </p>
      </div>
    );
  }

  return (
    <section
      aria-label="Crisis support resources"
      className="bg-ink-900 text-ink-100 border-t border-gold-600/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 flex-shrink-0">
            <svg
              className="w-6 h-6 text-gold-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Crisis Support
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ink-200">
            If you or someone you know is in crisis, help is available right
            now.{" "}
            <a
              href="tel:988"
              className="font-semibold text-gold-200 hover:text-gold-100 underline underline-offset-4"
            >
              {CRISIS_RESOURCES.lifeline.name}
            </a>{" "}
            — {CRISIS_RESOURCES.lifeline.contact}.{" "}
            <a
              href="tel:18003276243"
              className="font-semibold text-gold-200 hover:text-gold-100 underline underline-offset-4"
            >
              {CRISIS_RESOURCES.farmAid.name}
            </a>{" "}
            — {CRISIS_RESOURCES.farmAid.contact}.
          </p>
        </div>
      </div>
    </section>
  );
}
