interface PolicyBriefPdfViewerProps {
  pdfUrl: string;
  title: string;
  downloadFileName: string;
}

export default function PolicyBriefPdfViewer({
  pdfUrl,
  title,
  downloadFileName,
}: PolicyBriefPdfViewerProps) {
  return (
    <section aria-label="Policy brief PDF" className="py-10 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <p className="text-sm text-muted-foreground">
            View the full policy brief below or download a copy.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={pdfUrl}
              download={downloadFileName}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gold-500 text-ink-900 text-sm font-semibold hover:bg-gold-400 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-ink-900 text-ink-900 text-sm font-semibold hover:bg-ink-900 hover:text-gold-200 transition-colors"
            >
              Open in new tab
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-ink-200 bg-white shadow-sm overflow-hidden">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            title={`PDF: ${title}`}
            className="w-full min-h-[75vh] sm:min-h-[80vh] bg-ink-100"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          If the viewer does not load on your device, use Download PDF or Open
          in new tab.
        </p>
      </div>
    </section>
  );
}
