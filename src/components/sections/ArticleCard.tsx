import Link from "next/link";
import type { Article } from "@/lib/types";
import Card from "@/components/ui/Card";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="flex flex-col h-full">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-3">
          <time dateTime={article.date}>{formattedDate}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{article.author}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">
          <Link
            href={`/writing/${article.slug}`}
            className="hover:text-gold-600 transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-muted-foreground leading-relaxed flex-1">
          {article.excerpt}
        </p>
        <Link
          href={`/writing/${article.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
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
