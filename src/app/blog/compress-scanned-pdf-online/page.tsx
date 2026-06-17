import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Compress Scanned PDF Files Online Without Blurry Pages",
  description: "Compress scanned PDF files online without making receipts, forms, or contracts unreadable. Learn image DPI, grayscale, OCR, and review checks before sharing.",
  keywords: ["compress scanned PDF online", "reduce scanned PDF size", "scanned PDF too large", "compress PDF without blurry pages", "scan PDF compression guide"],
  openGraph: {
    title: "How to Compress Scanned PDF Files Online Without Blurry Pages",
    description: "A practical workflow for shrinking scan-heavy PDFs while keeping text, stamps, and signatures readable.",
    type: "article",
  },
};

export default function CompressScannedPdfOnlinePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Compress Scanned PDF</span>
        <span className="ml-4"><Link href="/zh/blog/compress-scanned-pdf-online" className="text-blue-500 text-xs">🇨🇳 中文</Link></span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Compress Scanned PDF Files Online Without Blurry Pages</h1>
      <div className="flex items-center text-sm text-gray-500 mb-8"><span>June 17, 2026</span><span className="mx-2">•</span><span>8 min read</span><span className="mx-2">•</span><span>PDF compression</span></div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">Scanned PDFs get huge fast. Ten pages from a phone scanner can become 80 MB because every page is basically a photo. Compress too hard and the file uploads nicely, but the stamp, signature, or tiny receipt line turns into soup. That is a bad trade. [💬]</p>
        <p className="text-lg text-gray-700 leading-relaxed">The goal is simple: reduce the image weight, keep the text readable, and check the exact pages that matter before you send the file.</p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Answer</h2>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>Keep a copy of the original scanned PDF.</li>
          <li>Try medium compression first, not the smallest-file setting.</li>
          <li>Review signatures, stamps, small print, and QR codes before sending.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why scanned PDFs are so large</h2>
        <p className="text-gray-700 leading-relaxed mb-4">A normal PDF made from Word or Google Docs stores text, fonts, and layout instructions. A scanned PDF stores page images. If each page is a 300 DPI color photo, the file size jumps even when the document looks plain.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Compression works by resizing images, lowering image quality, converting color pages to grayscale, removing hidden scanner data, and rebuilding the PDF structure. None of those steps is automatically good or bad. The right setting depends on what people must read later.</p>
        <div className="bg-gray-50 p-5 rounded-lg text-gray-700"><strong>Plain-English rule:</strong> if the PDF contains signatures, stamps, barcodes, invoices, ID documents, or legal forms, optimize for readable details first and smaller size second.</div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose compression settings by document type</h2>
        <div className="overflow-x-auto mb-6"><table className="min-w-full border-collapse border border-gray-300 text-gray-700"><thead><tr className="bg-gray-100"><th className="border border-gray-300 px-4 py-3 text-left">Document</th><th className="border border-gray-300 px-4 py-3 text-left">Best setting</th><th className="border border-gray-300 px-4 py-3 text-left">Check before sending</th></tr></thead><tbody><tr><td className="border border-gray-300 px-4 py-3">Receipts and invoices</td><td className="border border-gray-300 px-4 py-3">Medium compression, grayscale if possible</td><td className="border border-gray-300 px-4 py-3">Tax numbers, totals, QR codes</td></tr><tr><td className="border border-gray-300 px-4 py-3">Signed contracts</td><td className="border border-gray-300 px-4 py-3">Light to medium compression</td><td className="border border-gray-300 px-4 py-3">Signatures, initials, dates, stamps</td></tr><tr><td className="border border-gray-300 px-4 py-3">Class notes</td><td className="border border-gray-300 px-4 py-3">Medium or strong compression</td><td className="border border-gray-300 px-4 py-3">Small handwriting and diagrams</td></tr><tr><td className="border border-gray-300 px-4 py-3">Photo-heavy scans</td><td className="border border-gray-300 px-4 py-3">Resize images, avoid extreme quality loss</td><td className="border border-gray-300 px-4 py-3">Faces, product labels, fine lines</td></tr></tbody></table></div>
      </section>

      <section className="mb-10"><h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-step workflow</h2><div className="space-y-6">{[["Duplicate the original", "Rename the copy before compressing. If the compressed file looks bad, you can go back without asking someone to rescan everything."], ["Start with medium compression", "Do not jump straight to maximum compression. Medium settings usually cut scan-heavy PDFs by 40-70% while keeping details readable."], ["Use grayscale when color is not needed", "Black-and-white contracts, forms, and receipts often shrink a lot when converted from color to grayscale."], ["Split oversized packets first", "If one 120 MB scan contains five unrelated sections, split it first, compress each part, then merge the final files if needed."], ["Open the result at 100% zoom", "Check the smallest text, not just the first page. Look at signatures, QR codes, stamps, tables, and faint handwriting."], ["Save a clearly named final copy", "Use a name like application-scan-compressed-readable.pdf so the smaller file is not confused with the untouched original."]].map(([title, body], index) => (<div className="flex gap-4" key={title}><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div><div><h3 className="font-semibold text-gray-900 mb-1">{title}</h3><p className="text-gray-700 leading-relaxed">{body}</p></div></div>))}</div></section>

      <section className="mb-10"><h2 className="text-2xl font-bold text-gray-900 mb-4">Common mistakes</h2><ul className="list-disc pl-6 space-y-3 text-gray-700"><li><strong>Using the smallest-file option every time.</strong> Tiny files can make scanned text unreadable.</li><li><strong>Compressing the only copy.</strong> Always keep the original scan until the recipient accepts the file.</li><li><strong>Checking only page one.</strong> Scanner quality often changes halfway through a packet.</li><li><strong>Ignoring upload limits.</strong> If the portal allows 10 MB, aim for 8-9 MB so metadata changes do not push it over.</li><li><strong>Sending before opening.</strong> A file that uploads is not automatically usable.</li></ul></section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center mb-10"><h2 className="text-2xl font-bold mb-4">Shrink scanned PDFs without guessing</h2><p className="mb-6 text-blue-100">Use PixelPDF to compress, split, merge, and review browser-side PDF files before sharing.</p><Link href="/compress-pdf" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Try Compress PDF</Link></section>

      <section className="mb-10"><h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2><div className="space-y-4"><details className="border border-gray-200 rounded-lg p-4" open><summary className="font-semibold text-gray-900 cursor-pointer">Can I compress a scanned PDF without losing quality?</summary><p className="mt-3 text-gray-700">You can reduce size without obvious quality loss, but every image-based PDF has a limit. If tiny text starts to blur, use a lighter compression setting.</p></details><details className="border border-gray-200 rounded-lg p-4"><summary className="font-semibold text-gray-900 cursor-pointer">Should I OCR before or after compression?</summary><p className="mt-3 text-gray-700">If you need searchable text, OCR before final compression when possible. Then check that the text layer still matches the page image.</p></details><details className="border border-gray-200 rounded-lg p-4"><summary className="font-semibold text-gray-900 cursor-pointer">Why is my scanned PDF still large?</summary><p className="mt-3 text-gray-700">It may contain high-resolution color images, duplicate page layers, embedded thumbnails, or many pages. Split the file or use grayscale if the content allows it.</p></details></div></section>
    </article>
  );
}
