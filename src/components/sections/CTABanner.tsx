import Button from "@/components/ui/Button";

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
    <section className="bg-ink-900 text-ink-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-ink-200">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={primaryAction.href} size="lg">
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button
              href={secondaryAction.href}
              variant="outline"
              size="lg"
              className="border-gold-300 text-gold-200 hover:bg-gold-300/10"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
