import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "BTE Fund newsletters — download past issues to stay informed about program news, upcoming events, and fund updates.",
};

// Placeholder newsletter archive — replace with real PDF paths in /public/newsletters/
const newsletters = [
  { title: "Winter 2024 Newsletter", date: "December 2024", filename: "newsletter-winter-2024.pdf" },
  { title: "Summer 2024 Newsletter", date: "June 2024", filename: "newsletter-summer-2024.pdf" },
  { title: "Winter 2023 Newsletter", date: "December 2023", filename: "newsletter-winter-2023.pdf" },
  { title: "Summer 2023 Newsletter", date: "June 2023", filename: "newsletter-summer-2023.pdf" },
  { title: "Winter 2022 Newsletter", date: "December 2022", filename: "newsletter-winter-2022.pdf" },
];

export default function NewsletterPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Newsletter</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Stay informed with the latest BTE Fund news, program updates, and upcoming events.
            Download past issues below.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-10 text-sm text-amber-800">
          <strong>Placeholder archive.</strong> Upload real PDF files to{" "}
          <code className="bg-amber-100 px-1 rounded">/public/newsletters/</code> and update the
          filename entries in this page. The download links will work automatically once the files are in place.
        </div>

        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {newsletters.map((issue) => (
            <div
              key={issue.filename}
              className="flex items-center justify-between px-6 py-5 bg-white hover:bg-offwhite transition-colors"
            >
              <div>
                <p className="font-semibold text-navy text-base">{issue.title}</p>
                <p className="text-charcoal text-sm mt-0.5">{issue.date}</p>
              </div>
              <a
                href={`/newsletters/${issue.filename}`}
                download
                className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2 rounded hover:bg-navy-dark transition-colors flex-shrink-0 ml-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-charcoal text-sm leading-relaxed">
          Looking for an older issue? Contact our office and we can provide a copy.
        </p>
      </div>
    </>
  );
}
