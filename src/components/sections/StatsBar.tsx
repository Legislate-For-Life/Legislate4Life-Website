import type { StatItem } from "@/lib/types";
import Reveal from "@/components/effects/Reveal";

const stats: StatItem[] = [
  { value: "3", label: "Operating divisions driving our work" },
  { value: "2", label: "States actively researched (VA, TX)" },
  { value: "8+", label: "Open roles for students, researchers, and writers" },
  { value: "100%", label: "Volunteer-led, mission-driven, nonpartisan" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-ink-900 py-14 overflow-hidden">
      {/* Subtle gold rule top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(193,155,62,0.45) 30%, rgba(193,155,62,0.45) 70%, transparent 100%)",
        }}
      />
      {/* Ambient bloom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(193,155,62,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} direction="up">
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-gold-300 tabular-nums tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-ink-300 leading-relaxed uppercase tracking-[0.12em]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Subtle gold rule bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(193,155,62,0.2) 40%, rgba(193,155,62,0.2) 60%, transparent 100%)",
        }}
      />
    </section>
  );
}
