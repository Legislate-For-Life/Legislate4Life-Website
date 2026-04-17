import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grain" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Advocating for Change
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Standing Up for{" "}
            <span className="text-accent">Farmers&apos; Mental Health</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl">
            Farming communities face unique mental health challenges. We
            advocate for legislative action, raise awareness, and connect
            farmers with the support they deserve.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/get-involved" size="lg">
              Get Involved
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
