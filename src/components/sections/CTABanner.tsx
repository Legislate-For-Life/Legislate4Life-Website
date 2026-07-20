import Button from "@/components/ui/Button";
import AmbientGlow from "@/components/effects/AmbientGlow";
import Reveal from "@/components/effects/Reveal";

interface CTABannerProps {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function CTABanner({
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTABannerProps) {
  return (
    <section className="relative bg-ink-900 text-ink-100 py-20 overflow-hidden">
      <AmbientGlow variant="section" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(193,155,62,0.3) 30%, rgba(193,155,62,0.3) 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="up">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-lg text-ink-300 leading-relaxed">{description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={primaryAction.href} size="lg">
              {primaryAction.label}
            </Button>
            {secondaryAction && (
              <Button href={secondaryAction.href} variant="outline-gold" size="lg">
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
