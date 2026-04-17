import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import NewsletterForm from "@/components/sections/NewsletterForm";
import type { ActionCard } from "@/lib/types";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Find out how you can support Legislate4Life's mission to improve mental health for farming communities.",
};

const actions: ActionCard[] = [
  {
    title: "Advocate",
    description:
      "Contact your representatives and urge them to support mental health legislation for rural communities. We provide templates and talking points to make it easy.",
    href: "/contact",
    linkText: "Start Advocating",
  },
  {
    title: "Volunteer",
    description:
      "Join our network of volunteers who help organize events, run campaigns, and support farmers in their local communities.",
    href: "/contact",
    linkText: "Sign Up to Volunteer",
  },
  {
    title: "Donate",
    description:
      "Your financial support helps fund our advocacy work, community programs, and outreach to farming families in need.",
    href: "/contact",
    linkText: "Make a Donation",
  },
  {
    title: "Spread the Word",
    description:
      "Share our mission with your network. Follow us on social media, share our blog posts, and help raise awareness about farmers' mental health.",
    href: "/blog",
    linkText: "Read & Share",
  },
];

const actionIcons = [
  // Megaphone
  <svg key="advocate" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>,
  // Heart/hand
  <svg key="volunteer" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Currency
  <svg key="donate" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Share
  <svg key="share" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>,
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Get Involved
          </h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            There are many ways to support farmers&apos; mental health. Find the
            one that&apos;s right for you.
          </p>
        </div>
      </section>

      {/* Action cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ways to Help"
            subtitle="Every action makes a difference — whether it's raising your voice, giving your time, or sharing our message."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {actions.map((action, index) => (
              <Card key={action.title} className="p-8">
                <div className="text-primary-500 mb-4">{actionIcons[index]}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {action.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {action.description}
                </p>
                <Button href={action.href} variant="outline" size="sm">
                  {action.linkText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter placeholder */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Stay Updated"
            subtitle="Sign up for our newsletter to receive updates on our advocacy work and ways you can help."
          />
          <NewsletterForm />
          <p className="mt-3 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <CTABanner
        title="Questions? We'd Love to Hear From You"
        description="Reach out to our team to learn more about how you can support our mission."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
