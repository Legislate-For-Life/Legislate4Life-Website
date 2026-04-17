import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";
import BlogPostCard from "@/components/sections/BlogPostCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog-posts";

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBar />

      {/* Mission preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Why This Matters"
              subtitle="Farmers feed our nation, but too many are struggling in silence. Mental health challenges in agricultural communities are a crisis that demands action."
            />
            <div className="grid gap-8 sm:grid-cols-3 text-left mt-8">
              <div className="p-6 rounded-xl bg-primary-50">
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Educate</h3>
                <p className="text-sm text-muted-foreground">
                  We raise awareness about the mental health challenges unique to
                  farming communities.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-primary-50">
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Legislate
                </h3>
                <p className="text-sm text-muted-foreground">
                  We push for policies that fund rural mental health services and
                  expand access to care.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-primary-50">
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">
                  We connect farmers and their families with resources and a
                  community that cares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured blog posts */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest News"
            subtitle="Stay informed about mental health advocacy for farming communities."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Together, We Can Make a Difference"
        description="Join us in advocating for mental health resources and legislation that supports farming communities."
        primaryAction={{ label: "Get Involved", href: "/get-involved" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
