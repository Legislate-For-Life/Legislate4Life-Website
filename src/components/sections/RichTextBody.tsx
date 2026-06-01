interface RichTextBodyProps {
  content: string;
}

export default function RichTextBody({ content }: RichTextBodyProps) {
  const paragraphs = content.split("\n\n");

  return (
    <div className="prose prose-lg max-w-none">
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-foreground mt-10 mb-4"
            >
              {paragraph.replace("## ", "")}
            </h2>
          );
        }
        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
          return (
            <p
              key={index}
              className="font-semibold text-foreground leading-relaxed mb-4"
            >
              {paragraph.replace(/\*\*/g, "")}
            </p>
          );
        }
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p
            key={index}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            {parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={i} className="text-foreground">
                    {part.replace(/\*\*/g, "")}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}
