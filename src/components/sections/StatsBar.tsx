import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { value: "3", label: "Operating divisions driving our work" },
  { value: "2", label: "States actively researched (VA, TX)" },
  { value: "10+", label: "Open roles for students, researchers, and writers" },
  { value: "100%", label: "Volunteer-led, mission-driven, nonpartisan" },
];

export default function StatsBar() {
  return (
    <section className="bg-cream-50 py-12 border-y border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gold-600">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
