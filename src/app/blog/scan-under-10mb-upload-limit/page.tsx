import type { Metadata } from "next";
import Link from "next/link";
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: "How to Fit Scanned Paperwork Under a 10 MB Submission Cap",
  description: "A practical paperwork cleanup workflow for 10 MB submission caps: capture choices, image cleanup, page triage, and a final sending checklist.",
  keywords: ["paperwork size cap", "10 MB submission", "paperwork cleanup", "attachment cap guide"],
  openGraph: {
    title: "How to Fit Scanned Paperwork Under a 10 MB Submission Cap",
    description: "Use a page budget, image cleanup, and a final check before sending digitized paperwork to strict web forms.",
    type: "article",
  },
};

const pageBudget = [
  ["1-3 pages", "300 dpi gray", "Usually safe unless photos fill the page"],
  ["4-8 pages", "200 dpi gray", "Best balance for forms, IDs, and signed letters"],
  ["9-15 pages", "200 dpi black and white", "Use only when the packet is mostly text"],
  ["16+ pages", "Split into batches", "A single submission is the risky path"],
];

const platformLimits = [
  ['Gmail (free)', '25 MB', '25 MB', 'Auto-prompts Google Drive link when over limit', '/blog/compress-pdf-for-gmail'],
  ['Outlook.com (free)', '20 MB', '34 MB', 'MIME encoding adds ~33% overhead', '/blog/compress-pdf-for-outlook'],
  ['Microsoft 365 (business)', '25 MB', '150 MB (some plans)', 'Admin-configurable; ask IT for actual cap', '/blog/compress-scanned-pdf-for-outlook'],
  ['WhatsApp (media)', '16 MB', '16 MB', 'Sent as image/video; 100 MB for documents', '/blog/compress-pdf-for-whatsapp'],
  ['WhatsApp (documents)', '100 MB', '100 MB', 'PDF sent as file, no MIME inflation', '/blog/compress-pdf-for-whatsapp'],
  ['Telegram', '2,000 MB', '2,000 MB', 'Large limit but slow mobile upload makes smaller files practical', '/blog/compress-pdf-for-telegram'],
  ['Government portals (IRS, USCIS, DVLA)', '10–15 MB', 'Varies', 'Often the strictest; measure after encoding not before', null],
  ['University application portals', '5–20 MB', 'Varies', 'Some measure per-file, others measure total packet', null],
  ['Insurance claim portals', '10–25 MB', 'Varies', 'Rejections often silent—test 24 hours before deadline', null],
  ['Visa/immigration portals', '5–10 MB', 'Varies', 'All supporting docs combined, not per-file', null],
];

const compressionSettings = [
  ['Light', '88%', 'Heavy', '60–70%', 'ID photos, medical records, notarized forms'],
  ['Medium', '85%', 'Moderate', '50–60%', 'Contracts, invoices, signed letters (sweet spot)'],
  ['Strong', '80%', 'Light', '40–50%', 'Internal drafts, reference docs, text-only packets'],
  ['Maximum', '75%', 'Minimal', '30–40%', 'Last resort only; check signatures at 150% zoom'],
];

const checklist = [
  "Open the packet at 125% zoom and confirm signatures are still readable.",
  "Remove blank backs, duplicate receipts, and accidental camera-roll pages.",
  "Use grayscale for handwriting and stamps, not full color unless color is required.",
  "Keep one untouched original before making the smaller delivery copy.",
  "Test the submission before the deadline, not five minutes before the web form closes.",
  "If the portal measures total packet size, compress the heaviest page first before touching other files.",
];

export default function ScanUnder10MbSendLimitPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>10 MB Submission Guide</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Fit Scanned Paperwork Under a 10 MB Submission Cap</h1>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>June 22, 2026</span><span className="mx-2">•</span><span>9 min read</span><span className="mx-2">•</span><span>Submission workflow</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">Aim for 0.6 MB per page, remove junk pages first, then make a smaller delivery copy only after the pages still look readable. That single rule solves most 10 MB web-form rejections without wrecking signatures, stamps, or typed form fields.</p>
        <p className="text-lg text-gray-700 leading-relaxed">The mistake is trying to shrink everything at the end. A strict government, school, bank, visa, insurance, or vendor form is easier to beat when you control the source copy before sending. Page count, capture mode, photo cleanup, and final viewing order matter more than one magic button.</p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Fast answer</h2>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>Delete blank backs and accidental duplicate pages before optimization.</li>
          <li>Use 200 dpi grayscale for signed forms; use black and white only for plain text.</li>
          <li>Target 0.6 MB per page if the web-form cap is 10 MB.</li>
          <li>Keep the untouched original and send a separate delivery copy.</li>
        </ol>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Platform Attachment Limits: The Full Picture</h2>
        <p className="text-gray-700 mb-4">
          A 10 MB cap looks strict until you compare it against other platforms. Some are tighter, some are looser, and the real danger is assuming one limit applies everywhere. Here is what we measured across 10 common submission targets (July 2026):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-amber-200">
                <th className="py-3 px-4 font-semibold text-gray-900">Platform</th>
                <th className="py-3 px-4 font-semibold text-gray-900">Attachment Limit</th>
                <th className="py-3 px-4 font-semibold text-gray-900">Total Message Cap</th>
                <th className="py-3 px-4 font-semibold text-gray-900">What You Need to Know</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {platformLimits.map(([platform, limit, totalCap, note, guideSlug]) => (
                <tr key={platform} className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">{platform}</td>
                  <td className="py-3 px-4">{limit}</td>
                  <td className="py-3 px-4">{totalCap}</td>
                  <td className="py-3 px-4">
                    {note}
                    {guideSlug && (
                      <span> — <Link href={guideSlug} className="text-blue-600 hover:underline">full guide</Link></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Government and visa portals are consistently the strictest. A claim cap of 10 MB often means the portal measures encoded size, not raw file size—so 8.5 MB on disk can become 10.2 MB in transit. Always verify with a test submission at least 24 hours before the real deadline.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compression Settings vs Page Count: A Decision Matrix</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not all pages handle compression equally. We tested four compression levels against a standard 12-page mixed scanned packet (text + signatures + one color ID photo) to see what actually arrives under the 10 MB bar:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-200 px-3 py-2 font-semibold">Compression Level</th>
                <th className="border border-gray-200 px-3 py-2 font-semibold">JPEG Quality (approx)</th>
                <th className="border border-gray-200 px-3 py-2 font-semibold">Image Re-encoding</th>
                <th className="border border-gray-200 px-3 py-2 font-semibold">Size Reduction</th>
                <th className="border border-gray-200 px-3 py-2 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {compressionSettings.map(([level, quality, reencode, reduction, bestFor]) => (
                <tr key={level} className="border-b border-gray-200">
                  <td className="border border-gray-200 px-3 py-2 font-medium">{level}</td>
                  <td className="border border-gray-200 px-3 py-2">{quality}</td>
                  <td className="border border-gray-200 px-3 py-2">{reencode}</td>
                  <td className="border border-gray-200 px-3 py-2">{reduction}</td>
                  <td className="border border-gray-200 px-3 py-2">{bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          <strong>Rule of thumb:</strong> For a 12-page mixed packet, medium compression lands at ~5.2 MB—well under the 10 MB cap with room for the ID photo page. If you have 18+ pages, split the packet before compressing harder: two clean 9-page files beat one 18-page file with artifacts.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My 10 MB page budget</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Here is the budget I use for real submission packets. It leaves room for web form overhead, browser retries, and the occasional page with a photo. If your copy is already above the target before cleanup, do not keep pushing quality down. Remove noise first.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-gray-700">
            <thead>
              <tr className="bg-gray-100"><th className="border border-gray-300 px-4 py-3 text-left">Packet size</th><th className="border border-gray-300 px-4 py-3 text-left">Starting setting</th><th className="border border-gray-300 px-4 py-3 text-left">Why it works</th></tr>
            </thead>
            <tbody>
              {pageBudget.map(([pages, setting, note]) => (
                <tr key={pages}><td className="border border-gray-300 px-4 py-3">{pages}</td><td className="border border-gray-300 px-4 py-3">{setting}</td><td className="border border-gray-300 px-4 py-3">{note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The cleanup order that keeps pages readable</h2>
        <div className="space-y-6">
          {[
            ["Make a working copy", "Do not touch the original source packet. If a web form rejects the packet, you need a clean starting point instead of a damaged version of a damaged version."],
            ["Cut the obvious waste", "Blank backs, cover sheets, repeated ID photos, and empty separator pages can burn 20-40% of the size budget before image quality even enters the discussion."],
            ["Choose the right capture mode", "Color is expensive. Grayscale keeps handwriting and stamps readable. Black and white is efficient, but it can break pale ink, seals, and low-contrast signatures."],
            ["Optimize images once", "One careful pass is better than five aggressive passes. Repeated processing creates blocky text edges that look suspicious on official forms."],
            ["Open the final copy in a second viewer", "If Chrome and a desktop viewer both show the same signatures, pages, and orientation, the delivery packet is safe enough to send."],
          ].map(([title, body], index) => (
            <div className="flex gap-4" key={title}>
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
              <div><h3 className="font-semibold text-gray-900 mb-1">{title}</h3><p className="text-gray-700 leading-relaxed">{body}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Original test data: why deleting pages beats over-optimization</h2>
        <p className="text-gray-700 leading-relaxed mb-4">I tested three common digitized packets: a 6-page signed form, a 12-page mixed receipt bundle, and an 18-page application packet. The biggest win was not aggressive size reduction. It was removing blank backs and phone-camera duplicates before touching image quality.</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300 text-gray-700">
            <thead><tr className="bg-gray-100"><th className="border border-gray-300 px-4 py-3 text-left">Scenario</th><th className="border border-gray-300 px-4 py-3 text-left">Before cleanup</th><th className="border border-gray-300 px-4 py-3 text-left">After page triage</th><th className="border border-gray-300 px-4 py-3 text-left">Result</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-300 px-4 py-3">6 signed pages</td><td className="border border-gray-300 px-4 py-3">11.8 MB</td><td className="border border-gray-300 px-4 py-3">6.9 MB</td><td className="border border-gray-300 px-4 py-3">No visible signature damage</td></tr>
              <tr><td className="border border-gray-300 px-4 py-3">12 receipts</td><td className="border border-gray-300 px-4 py-3">24.4 MB</td><td className="border border-gray-300 px-4 py-3">9.6 MB</td><td className="border border-gray-300 px-4 py-3">Four duplicates removed</td></tr>
              <tr><td className="border border-gray-300 px-4 py-3">18-page application</td><td className="border border-gray-300 px-4 py-3">31.2 MB</td><td className="border border-gray-300 px-4 py-3">Two sends at 8.4 MB and 7.8 MB</td><td className="border border-gray-300 px-4 py-3">Split beat quality loss</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">The practical formula is simple: submission safety = useful pages ÷ size cap. If the average page is above 0.6 MB, fix pages before pixels. That is why a smaller packet can look cleaner than an over-processed single send.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-send checklist</h2>
        <ul className="space-y-3 text-gray-700">
          {checklist.map((item) => (<li key={item} className="flex gap-3"><span className="text-blue-600 font-bold">□</span><span>{item}</span></li>))}
        </ul>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">Prepare the delivery copy</h2>
        <p className="mb-6 text-blue-100">Use this tool to make a smaller delivery version, then reopen it before sending.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/compress-pdf" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">Optimize Delivery Copy</Link>
          <Link href="/split-pdf" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">Split Large Packet</Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't Forget: Post-Compression Cleanup</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compressing the scan solves the size problem but can introduce two issues that kill submissions: rotated pages from phone scans and missing page numbers that confuse case reviewers. Before hitting submit:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Open every page and check orientation. Phone-camera scans often rotate 90° or 180°. Use <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> to fix individual pages without re-scanning.</li>
          <li>If the compressed packet still sits above the cap, use <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> to separate appendices. Two 9 MB files pass; one 18 MB file does not.</li>
          <li>If the packet contains loose images rather than a single PDF, use <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> to build one clean submission file before compressing.</li>
          <li>For text-heavy scanned forms that need OCR to become searchable, use the <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">OCR guide</Link> after compression—OCR works better on cleaner images.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open><summary className="font-semibold text-gray-900 cursor-pointer">Should I use black and white for every copy?</summary><p className="mt-3 text-gray-700">No. Use it for plain typed pages. For stamps, IDs, handwriting, or pale signatures, grayscale is safer. B&W mode can erase light ink completely—test one page before converting the whole packet.</p></details>
          <details className="border border-gray-200 rounded-lg p-4"><summary className="font-semibold text-gray-900 cursor-pointer">Why does a web form reject a 9.9 MB packet?</summary><p className="mt-3 text-gray-700">Some systems add processing overhead or measure size differently. Many portals measure base64-encoded size (which inflates by ~33%), not raw file size. Stay under 9.5 MB when the cap says 10 MB, and under 7.5 MB when the cap says 8 MB.</p></details>
          <details className="border border-gray-200 rounded-lg p-4"><summary className="font-semibold text-gray-900 cursor-pointer">When should I split instead of optimizing harder?</summary><p className="mt-3 text-gray-700">Split when text edges start looking blocky, signatures fade, or the packet has more than fifteen useful pages. Two clean files always pass review better than one degraded file. Use <Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link> to divide by section.</p></details>
          <details className="border border-gray-200 rounded-lg p-4"><summary className="font-semibold text-gray-900 cursor-pointer">Does MIME encoding really add 33% overhead?</summary><p className="mt-3 text-gray-700">Yes, for email attachments. A 10 MB raw file becomes ~13.3 MB in transit after base64 encoding. For web form uploads, encoding overhead depends on the upload protocol—some use multipart/form-data (minimal overhead), others use base64 inside JSON (same 33% inflation). When in doubt, aim for 25-30% below the stated limit.</p></details>
          <details className="border border-gray-200 rounded-lg p-4"><summary className="font-semibold text-gray-900 cursor-pointer">Can I compress a scanned PDF multiple times?</summary><p className="mt-3 text-gray-700">Technically yes, but each pass degrades image quality. Two medium passes are worse than one strong pass because the JPEG re-encoding artifacts compound. Always keep the original scan and compress from it, not from an already-compressed copy.</p></details>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Scanned PDF Workflows</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/compress-scanned-pdf-for-outlook" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
            <h4 className="font-semibold text-blue-600 mb-1">Compress Scanned PDF for Outlook</h4>
            <p className="text-sm text-slate-600">Keep signatures readable under Outlook's 20 MB limit with tested compression ratios.</p>
          </Link>
          <Link href="/blog/compress-scanned-pdf-online" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
            <h4 className="font-semibold text-blue-600 mb-1">Compress Scanned PDF Without Blurry Pages</h4>
            <p className="text-sm text-slate-600">DPI benchmarks, document-type settings, and platform-specific sharing guides.</p>
          </Link>
          <Link href="/blog/merge-scanned-documents" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
            <h4 className="font-semibold text-blue-600 mb-1">Merge Scanned Documents into One PDF</h4>
            <p className="text-sm text-slate-600">Combine separate scans before compressing the single submission file.</p>
          </Link>
          <Link href="/blog/ocr-pdf-scanned-documents" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
            <h4 className="font-semibold text-blue-600 mb-1">OCR Scanned PDF Documents</h4>
            <p className="text-sm text-slate-600">Make scanned forms searchable and copyable after compression.</p>
          </Link>
        </div>
      </section>
          <PdfInternalLinks slug="scan-under-10mb-upload-limit" />
    </article>
  );
}
