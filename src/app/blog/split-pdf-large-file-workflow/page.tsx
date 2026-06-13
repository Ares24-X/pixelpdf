import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Split Large PDF Files Online Without Losing Pages",
  description: "Learn a clean workflow to split large PDFs into smaller files for email, upload portals, and review, while keeping page order and privacy intact.",
  keywords: "split large PDF, split PDF online free, PDF too large, extract PDF pages, reduce PDF upload size, PDF workflow",
};

export default function SplitPDFLargeFileWorkflow() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-slate max-w-none">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span>Large PDF split workflow</span>
          <span className="ml-4">
            <Link href="/zh/blog/split-pdf-large-file-workflow" className="text-blue-500 text-xs">🇨🇳 中文</Link>
          </span>
        </nav>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Split Large PDF Files Online Without Losing Pages
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          [💬] A 96-page PDF usually becomes a problem at the worst moment: the upload portal says 20 MB max, Gmail refuses the attachment, or a reviewer only needs pages 14 to 29. Splitting the file is faster than rebuilding it, but only if you keep the page order, bookmarks, and naming clean.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <p className="text-blue-800 font-semibold mb-2">Quick answer</p>
          <p className="text-blue-700">
            Split by purpose, not by random size. Make one file for each recipient, section, or upload requirement. Then check page counts before you delete the original.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">When Splitting Beats Compressing</h2>
        <p className="text-slate-700 mb-4">
          Compression is useful when the whole document must stay together. Splitting is better when only part of the file is needed, when the document has independent sections, or when a portal rejects large uploads even after compression.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-3 text-left">Situation</th>
                <th className="border border-slate-300 px-4 py-3 text-left">Better move</th>
                <th className="border border-slate-300 px-4 py-3 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-3">Email limit blocks a 35 MB file</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">Split or compress</td>
                <td className="border border-slate-300 px-4 py-3">Use splitting if the receiver needs only one section.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3">Client needs one invoice from a packet</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">Split</td>
                <td className="border border-slate-300 px-4 py-3">No reason to share extra pages.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3">Scanned contract must stay complete</td>
                <td className="border border-slate-300 px-4 py-3 text-yellow-600">Compress</td>
                <td className="border border-slate-300 px-4 py-3">Breaking a signed packet can create confusion.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">A 6-Step Workflow That Avoids Page Mistakes</h2>
        <div className="space-y-6 mb-8">
          {[
            ["Duplicate the original", "Keep the source file untouched until every exported part has been checked."],
            ["Write down page ranges", "Use simple ranges like 1-8, 9-16, 17-24. Avoid deciding from memory while the tool is open."],
            ["Name files before sharing", "Use names such as vendor-contract-pages-01-08.pdf instead of split-1.pdf."],
            ["Open each output", "Check the first page, last page, and total page count for every exported file."],
            ["Compress only if needed", "If a split section is still too large, compress that section instead of the whole original."],
            ["Archive the source", "Store the untouched original for audit, rework, or a later merge."],
          ].map(([title, body], index) => (
            <div className="flex gap-4" key={title}>
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-slate-600">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Page Range Examples</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
          <li><strong>Single section:</strong> extract pages 14-29 for a reviewer who only needs the appendix.</li>
          <li><strong>Equal chunks:</strong> split a 120-page handbook into 1-30, 31-60, 61-90, and 91-120.</li>
          <li><strong>Remove extras:</strong> export pages 1-12 and 15-22 when blank scans landed in the middle.</li>
          <li><strong>Private sharing:</strong> send only the signed pages instead of a full application packet.</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-900 mb-3">[💬] One small trap</h2>
          <p className="text-amber-800">
            Some PDFs show printed page numbers that do not match the file page number. A report may say “Page 1” after a cover, table of contents, and blank divider. Always count by the PDF viewer page number when entering ranges.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Use PixelPDF for the Browser-Based Part</h2>
        <p className="text-slate-700 mb-4">
          PixelPDF works well when you need quick PDF cleanup without installing desktop software. Start with <Link href="/split-pdf" className="text-blue-600 underline">Split PDF</Link> to extract the right ranges. If the output remains too large, run the smaller file through <Link href="/compress-pdf" className="text-blue-600 underline">Compress PDF</Link>.
        </p>
        <p className="text-slate-700 mb-8">
          For messy scanned pages, rotate them first with <Link href="/rotate-pdf" className="text-blue-600 underline">Rotate PDF</Link>. For image-heavy packets, consider converting only the pages you need into images with <Link href="/pdf-to-jpg" className="text-blue-600 underline">PDF to JPG</Link>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Final Check Before Uploading</h2>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Every output file opens without a password prompt unless you intended one.</li>
            <li>The first and last pages match your written range.</li>
            <li>The file name explains what is inside.</li>
            <li>No unrelated personal pages were included.</li>
            <li>The final size is below the email or portal limit.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Split a Large PDF Now</h2>
          <p className="mb-6 text-blue-100">Extract page ranges, reduce upload stress, and keep your original file safe.</p>
          <Link href="/split-pdf" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Open Split PDF
          </Link>
        </div>
      </article>
    </div>
  );
}
