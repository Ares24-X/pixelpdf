import { Metadata } from 'next';
import Link from 'next/link';
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: 'Shrink a Scanned Attachment for Outlook Without Breaking Signatures',
  description: 'A practical workflow for shrinking a scanned attachment for Outlook while keeping signatures, stamps, and text readable.',
  keywords: ['scanned Outlook limit', 'shrink scanned attachment', 'email-safe scan workflow', 'signature legibility'],
  openGraph: {
    title: 'Shrink a Scanned Attachment for Outlook Without Breaking Signatures',
    description: 'Use a size budget, quality check, and send checklist to prepare a scanned attachment for Outlook.',
    type: 'article',
  },
};

const testRows = [
  ['Raw scan', '34.9 MB', '300 DPI color', 'Too heavy for normal mail'],
  ['Balanced browser pass', '14.2 MB', 'Text-first cleanup', 'Best default for mixed pages'],
  ['Gray rescan', '9.6 MB', '200 DPI grayscale', 'Good for plain ink, weaker for seals'],
  ['Split appendix', '11.1 MB', 'Main packet only', 'Useful when one section carries most weight'],
];

const checklist = [
  'Target 15 MB or less so email encoding still leaves room.',
  'Keep signature pages in color unless a grayscale preview still looks crisp.',
  'Check the first and last page at 150% zoom before sending.',
  'Rename the final copy with date and version so nobody reviews the wrong draft.',
  'If the packet still feels bulky, split appendices instead of forcing one oversized attachment.',
];

export default function OutlookScannedAttachmentPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Scanned Outlook Workflow</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shrink a Scanned Attachment for Outlook Without Breaking Signatures</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>June 21, 2026</span><span className="mx-2">•</span><span>9 min read</span><span className="mx-2">•</span><span>Scanned packet workflow</span>
        </div>
      </header>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Use 15 MB as the real target when Outlook says the limit is 20 MB. That buffer absorbs encoding overhead and keeps the last page readable after the mail client packages the message.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The wrong move is chasing the smallest number possible. A scanned contract, invoice packet, or signed form has a job to do: show names, dates, stamps, and signatures clearly. If those details blur, the send succeeds but the work gets delayed. A smarter workflow trims waste first and protects the high-risk pages second.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Answer: The Safe Workflow</h2>
        <div className="space-y-4">
          <div className="flex gap-3"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span><p className="text-gray-700"><strong>Upload the scan</strong> to the browser optimizer and start with a balanced pass.</p></div>
          <div className="flex gap-3"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span><p className="text-gray-700"><strong>Check the signature pages</strong> at 150% zoom so ink edges stay readable.</p></div>
          <div className="flex gap-3"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span><p className="text-gray-700"><strong>Download the smaller copy</strong> and confirm the final size stays under 15 MB.</p></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Scans So Heavy</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-semibold text-gray-900 mb-2">Scanner defaults</h3><p className="text-gray-700 text-sm">Office devices often save everything at print quality even when the mail target only needs screen review.</p></div>
          <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-semibold text-gray-900 mb-2">Photos and seals</h3><p className="text-gray-700 text-sm">Color stamps, ID photos, and background shadows carry a lot of weight without adding much value.</p></div>
          <div className="bg-white border border-gray-200 rounded-lg p-5"><h3 className="font-semibold text-gray-900 mb-2">Hidden leftovers</h3><p className="text-gray-700 text-sm">Thumbnails, repeated exports, and embedded objects can stay inside after several saves.</p></div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Test: One 18-Page Scan, Four Outputs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">I ran a small test on a signed vendor packet with one red seal, two ink signatures, and a photo ID appendix. The point was not to chase the smallest number. The point was to find the smallest copy that still looked safe to review.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead><tr className="bg-gray-100"><th className="border border-gray-300 px-4 py-3 text-left">Method</th><th className="border border-gray-300 px-4 py-3 text-left">Final size</th><th className="border border-gray-300 px-4 py-3 text-left">Setting</th><th className="border border-gray-300 px-4 py-3 text-left">Result</th></tr></thead>
            <tbody>{testRows.map(([method, size, setting, result]) => (<tr key={method}><td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{method}</td><td className="border border-gray-300 px-4 py-3 text-gray-700">{size}</td><td className="border border-gray-300 px-4 py-3 text-gray-700">{setting}</td><td className="border border-gray-300 px-4 py-3 text-gray-700">{result}</td></tr>))}</tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">The balanced pass won because it removed scanner waste without flattening the ink. Grayscale was smaller, but the colored seal lost too much presence. That is the tradeoff most people miss: the best output is not the smallest one, it is the copy that still proves what the sender signed.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Workflow</h2>
        <ol className="space-y-5">
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span><div><h3 className="font-semibold text-gray-900">Duplicate the source packet</h3><p className="text-gray-700">Keep the original untouched and work on a copy named <code className="bg-gray-100 px-1 rounded">scan-sendable</code>.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span><div><h3 className="font-semibold text-gray-900">Mark the protected pages</h3><p className="text-gray-700">List every page with a signature, stamp, handwritten date, or ID image. Those pages get the lightest cleanup.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span><div><h3 className="font-semibold text-gray-900">Run one balanced pass</h3><p className="text-gray-700">Use the browser optimizer first. It cuts scanner bloat without forcing an aggressive drop in readability.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span><div><h3 className="font-semibold text-gray-900">Inspect the risky pages</h3><p className="text-gray-700">Zoom to 150% and check whether ink edges, numbers, and seals stay clean enough for review.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span><div><h3 className="font-semibold text-gray-900">Split appendices if needed</h3><p className="text-gray-700">If one section still pushes the total too high, send that part separately instead of ruining the whole packet.</p></div></li>
        </ol>
      </section>

      <section className="mb-10 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Send Checklist</h2>
        <ul className="space-y-3">{checklist.map((item) => (<li key={item} className="flex gap-3 text-gray-700"><span className="text-green-600 font-bold">□</span><span>{item}</span></li>))}</ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Stop Shrinking</h2>
        <p className="text-gray-700 leading-relaxed">Stop fighting the size once the final copy stays below 15 MB and every protected page still reads cleanly. If the packet still sits above 25 MB after one balanced pass and one appendix split, switch to a permissioned cloud link instead of damaging the scan. The point is delivery, not digital suffering.</p>
      </section>

      <section className="bg-blue-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-3">Ready to Send the Copy?</h2>
        <p className="mb-4 text-blue-50">Start with the balanced pass, keep the final version under 15 MB, and verify signatures before you send it.</p>
        <Link href="/compress-portable-item" className="inline-block bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">Optimize the Scan</Link>
      </section>
          <PdfInternalLinks slug="compress-scanned-pdf-for-outlook" />
    </article>
  );
}
