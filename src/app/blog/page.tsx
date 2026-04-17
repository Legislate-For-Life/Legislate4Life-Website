import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogPostCard from "@/components/sections/BlogPostCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, insights, and updates on farmers' mental health advocacy from Legislate4Life.",
};

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            News, insights, and stories from our advocacy work for farmers&apos;
            mental health.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Posts"
            subtitle="Stay informed about the issues that matter to farming communities."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
