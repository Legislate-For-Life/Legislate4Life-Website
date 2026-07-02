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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-3xl">
          <p className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            The Legislative for Life Foundation
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Educating policymakers. Empowering{" "}
            <span className="text-gold-300">communities.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-200 leading-relaxed max-w-2xl">
            We translate research and lived experience into clear,
            practical understanding of the issues shaping life across America
            and beyond. Through policy analysis, public education, and
            community engagement, we help leaders and neighbors make better
            decisions together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/join-us" size="lg">
              Join Us
            </Button>
            <Button href="/about" variant="outline-gold" size="lg">
              About the Foundation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
