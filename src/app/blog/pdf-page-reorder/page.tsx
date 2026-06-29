import { Metadata } from 'next';
import Link from 'next/link';
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: 'How to Reorder Pages in a PDF File (Free Online 2026)',
  description: 'Learn how to reorder pages in a PDF file online for free. Rearrange pages safely before you share, print, sign, or merge the final document.',
  keywords: ['reorder PDF pages online free', 'rearrange PDF pages', 'organize PDF page order', 'move pages in PDF online', 'sort PDF pages free'],
  openGraph: {
    title: 'How to Reorder Pages in a PDF File (Free Online 2026)',
    description: 'A practical guide to rearranging PDF pages online without breaking page order, numbering, or review flow.',
    type: 'article',
  },
};

const commonMistakes = [
  ['Dragging pages too fast', 'A page lands in the wrong section and the whole packet reads out of order.', 'Move in small groups and review thumbnails after each change.'],
  ['Ignoring page numbers', 'The visual order changes, but the logical references inside the document no longer match.', 'Check section dividers, tables of contents, and cross references before export.'],
  ['Reordering a signed copy', 'The final file can become invalid for approval or compliance review.', 'Reorder the unsigned working copy, then sign the finished version.'],
  ['Mixing source documents blindly', 'Portrait pages, landscape pages, and appendices feel random to the reader.', 'Plan the reading flow first, then merge and reorder with intent.'],
];

const workflowSteps = [
  'Collect the pages you want in one working file.',
  'Use page thumbnails to drag each page into the correct position.',
  'Review page numbers, section titles, and rotated pages before exporting.',
  'Compress or split the finished file only after the page order is final.',
];

export default function PdfPageReorderPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/blog" className="hover:text-blue-600">Blog</Link> / <span>Reorder PDF Pages</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Reorder Pages in a PDF File (Free Online 2026)</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>June 19, 2026</span>
          <span className="mx-2">•</span>
          <span>10 min read</span>
          <span className="mx-2">•</span>
          <span>~1,560 words</span>
        </div>
      </header>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          If a PDF reads in the wrong order, the file feels broken even when every page is technically there. A contract appendix ends up before the signature page. A scanned packet starts with page 4 because the feeder pulled pages in the wrong sequence. A report mixes charts, notes, and attachments so the reader has to keep guessing what comes next. Reordering pages fixes all of that fast.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The safest way to reorder PDF pages online is to work on a clean copy, move pages visually with thumbnails, and do one review pass before you export. In this guide, you will learn how to reorder pages in a PDF for free, how to avoid messy page-number problems, and when to combine page reordering with tools like <Link href="/merge-pdf/" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>, <Link href="/split-pdf/" className="text-blue-600 hover:underline font-medium">Split PDF</Link>, and <Link href="/compress-pdf/" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Answer: How to Reorder PDF Pages Online</h2>
        <div className="space-y-4 text-gray-700">
          {workflowSteps.map((step, index) => (
            <div key={step} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When You Should Reorder Pages Instead of Rebuilding the File</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most people waste time recreating a document when the real problem is only page sequence. If the content is correct but the reading flow is wrong, page reordering is the cleanest fix. You keep the original formatting, images, signatures, and margins, but present them in a sequence that makes sense.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Common reorder situations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>Scanned pages fed into the scanner in the wrong order</li>
              <li>Appendices or exhibits that need to move to the back</li>
              <li>Reports where the summary should appear before detailed tables</li>
              <li>Application packets that must follow an exact submission checklist</li>
              <li>Teaching materials that need a better reading sequence</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">When reordering is not enough</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>The document contains wrong or outdated pages</li>
              <li>You need to remove confidential sections before sharing</li>
              <li>Page numbering printed inside the file no longer matches</li>
              <li>You must insert entirely new pages from another source</li>
              <li>The PDF is corrupted and will not open reliably</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          In those harder cases, start by fixing the structure. Use <Link href="/split-pdf/" className="text-blue-600 hover:underline font-medium">Split PDF</Link> to isolate sections, or read <Link href="/blog/repair-corrupted-pdf-online" className="text-blue-600 hover:underline font-medium">our corrupted PDF recovery guide</Link> if the file itself is unstable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step: Rearrange PDF Pages Without Losing Control</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Make a working copy first</h3>
              <p className="text-gray-700 leading-relaxed">Do not reorder the only copy you have, especially if it is a legal, financial, or signed document. Save a working version so you can compare the original sequence if something feels off later. This one habit prevents most avoidable mistakes.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Review the file in thumbnail view</h3>
              <p className="text-gray-700 leading-relaxed">Page thumbnails tell you more than page numbers alone. You can spot cover pages, signature pages, image-heavy appendices, and rotated scans at a glance. If a page looks upside down before you move it, fix that with <Link href="/rotate-pdf/" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> so you do not review a messy document twice.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Move pages in logical blocks</h3>
              <p className="text-gray-700 leading-relaxed">If you need to move three related pages, move the full block together instead of dragging one page at a time and hoping the sequence still makes sense. Think in units like “cover”, “summary”, “appendix”, or “signed forms”. That keeps the document readable for the next person, not just technically complete.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Check internal references before export</h3>
              <p className="text-gray-700 leading-relaxed">This is the part people skip. If the file says “see page 12” and your new page 12 is now a chart instead of the appendix, the PDF is still wrong. Review visible page numbers, table of contents pages, and cross references before you save the final version.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Only optimize file size after the order is final</h3>
              <p className="text-gray-700 leading-relaxed">Compression should happen after structure changes, not before. Once the final order looks right, reduce size with <Link href="/compress-pdf/" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> if you need to email the file or upload it to a portal. If the finished packet is too large, read <Link href="/blog/split-pdf-large-file-workflow" className="text-blue-600 hover:underline font-medium">our large-file splitting workflow</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Four Mistakes That Break Page Order</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mistake</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What goes wrong</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Better move</th>
              </tr>
            </thead>
            <tbody>
              {commonMistakes.map(([mistake, impact, fix], index) => (
                <tr key={mistake} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{mistake}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{impact}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          The core idea is simple: do not treat page reordering like shuffling photos. A PDF is usually meant to communicate something in a sequence. The better you understand that sequence, the cleaner your edits will be.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Workflows for Different PDF Types</h2>
        <div className="space-y-5">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Scanned paperwork</h3>
            <p className="text-gray-700">For scanner output, reorder pages first, rotate any sideways pages, then run OCR only after the packet is in the right sequence. That way your searchable text layer matches the final layout. If you need OCR help, read <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">our OCR scanned PDF guide</Link>.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Merged reports from different teams</h3>
            <p className="text-gray-700">Use <Link href="/merge-pdf/" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> to combine all source files, then reorder by business logic: summary first, data second, appendix last. This produces a file people actually read instead of one they only tolerate.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Submission packets</h3>
            <p className="text-gray-700">Visa applications, tax packages, bid documents, and school forms often require exact order. Reorder against the portal checklist, then export one clean version. If the portal also has file size limits, finish with a light compression pass.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Reordering Affects Page Numbers, Bookmarks, and Signatures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Moving pages changes more than visual sequence. It can affect printed page numbers, bookmarks, internal references, and signature placement. That does not mean reordering is risky. It means the review pass matters.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Printed page numbers on the page itself may no longer match the new sequence.</li>
          <li>Bookmarks can point to the wrong section after major rearrangement.</li>
          <li>Signed packets should usually be reordered before the final signature step.</li>
          <li>Linked tables of contents may need manual confirmation after export.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          If you must add fresh numbering after reordering, pair this workflow with <Link href="/blog/add-page-numbers-to-pdf-online" className="text-blue-600 hover:underline font-medium">our page numbering guide</Link>. If you are finalizing a client-ready file, also check <Link href="/blog/pdf-final-review-workflow-guide" className="text-blue-600 hover:underline font-medium">the final PDF review workflow</Link> before sharing.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Can I reorder PDF pages online for free?</summary>
            <p className="mt-3 text-gray-700">Yes. For most files, an online PDF page organizer is enough to drag pages into a new order and export the finished copy without installing software.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Will reordering change my PDF content?</summary>
            <p className="mt-3 text-gray-700">It changes sequence, not the actual text or images on each page. The main thing to review is whether page numbers, references, or bookmarks still make sense afterward.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Should I reorder pages before or after merging PDFs?</summary>
            <p className="mt-3 text-gray-700">Merge first when the final document will contain multiple source files. Once everything is in one working copy, reorder the pages into the final reading flow.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Can I reorder a scanned PDF?</summary>
            <p className="mt-3 text-gray-700">Yes. Thumbnail-based reordering works well for scanned pages. If you also need searchable text, run OCR after the order is final.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Need to Rearrange PDF Pages Right Now?</h2>
        <p className="mb-6 text-blue-100">Organize your file first, then split, merge, rotate, or compress the final copy with PixelPDF.</p>
        <Link
          href="/merge-pdf/"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Start Organizing Your PDF
        </Link>
      </section>
          <PdfInternalLinks slug="pdf-page-reorder" />
    </article>
  );
}
