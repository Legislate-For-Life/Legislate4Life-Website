import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-ink-900 text-ink-100 overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-field.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      {/* Dark + gold overlays for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/60"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Plant Awareness, Harvest Fairness
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Raising awareness, advancing{" "}
            <span className="text-gold-300">mental health</span> through policy
            reform and advocacy.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-200 leading-relaxed max-w-2xl">
            Farming communities face unique mental health challenges. We
            research, advocate, and organize so farmers get the legislative
            action and support they deserve.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/get-involved" size="lg">
              Get Involved
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-gold-300 text-gold-200 hover:bg-gold-300/10"
            >
              Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
