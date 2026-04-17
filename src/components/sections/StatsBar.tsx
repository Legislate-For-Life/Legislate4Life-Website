import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { value: "1 in 4", label: "Farmers report high levels of stress daily" },
  { value: "2x", label: "Suicide rate in rural areas vs. urban" },
  { value: "60%", label: "Of rural counties lack a psychiatrist" },
  { value: "10M+", label: "Farming families we aim to support" },
];

export default function StatsBar() {
  return (
    <section className="bg-earth-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary-600">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-earth-600 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
