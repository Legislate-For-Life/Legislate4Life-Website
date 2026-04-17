import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import Card from "@/components/ui/Card";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <time dateTime={post.date}>{formattedDate}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-primary-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          Read more
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
