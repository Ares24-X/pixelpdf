import { Metadata } from 'next';
import Link from 'next/link';
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: 'Shrink a Scanned Contract for Email Without Losing Signatures',
  description: 'A field-tested workflow for sending scanned contracts through strict email limits while keeping signatures and stamps readable.',
  keywords: ['scanned contract email size', 'large attachment workflow', 'signature legibility', 'email size limit'],
  openGraph: {
    title: 'Shrink a Scanned Contract for Email Without Losing Signatures',
    description: 'Use a page-risk score, scan settings, and a final checklist to prepare scanned contracts for email.',
    type: 'article',
  },
};

const testRows = [
  ['Office scanner default', '31.2 MB', '300 DPI color', 'Blocked by most mail clients'],
  ['Balanced browser pass', '13.7 MB', 'Images optimized', 'Best default for mixed text and stamps'],
  ['Grayscale rescan', '9.4 MB', '200 DPI gray', 'Great for black ink, weaker for colored seals'],
  ['Phone scan cleanup', '16.1 MB', 'Auto crop + deskew', 'Acceptable when the original paper is unavailable'],
];

const checklist = [
  'Target 15 MB when the sender says the limit is 20 MB, because transport encoding adds weight.',
  'Zoom every signature page to 150% before sending; unreadable initials cause more delays than a large attachment.',
  'Keep colored seals in color unless the recipient only needs plain text review.',
  'Rename the final copy with date, party name, and version so legal teams do not review the wrong packet.',
  'Send one attachment per email if the thread already has long disclaimers or embedded logos.',
];

const scoreRows = [
  ['Ink signatures', '5', 'Must survive zoom and print checks'],
  ['Colored company stamp', '4', 'Color loss can change perceived authenticity'],
  ['Photo ID appendix', '3', 'Needs face and numbers readable, not photo quality'],
  ['Plain typed terms', '1', 'Can tolerate stronger image cleanup'],
];

export default function ReduceScannedContractEmailSizePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/blog" className="hover:text-blue-600">Blog</Link> / <span>Scanned Contract Email Size</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shrink a Scanned Contract for Email Without Losing Signatures</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>June 20, 2026</span><span className="mx-2">•</span><span>9 min read</span><span className="mx-2">•</span><span>Legal attachment workflow</span>
        </div>
      </header>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Aim for a 15 MB scanned contract package when a mailbox advertises a 20 MB ceiling. That target leaves room for email encoding, signatures, legal footers, and recipient-side filters while keeping the pages readable enough for review.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The mistake is chasing the smallest possible output. Contracts are not vacation photos. If initials, stamps, dates, or ID numbers become fuzzy, the message technically sends but the deal still stalls. The better workflow is to protect high-risk pages first, then strip weight from low-risk pages.
        </p>
      </section>

      <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">The Signature-First Rule</h2>
        <p className="text-gray-700 leading-relaxed">
          Treat every signed page as protected. You can be aggressive with blank backs, typed clauses, and appendix dividers, but signatures and stamps need a gentler pass. In my test, the smallest output was not the best output. The best one preserved ink edges at 150% zoom and still stayed below normal corporate mail limits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Test: 18-Page Vendor Contract</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I used an 18-page vendor agreement with black text, two blue signatures, one red company stamp, and a scanned ID appendix. The source came from a common office scanner, not a designer workstation. That matters because this is the exact kind of messy packet people actually try to send at 5:45 PM.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Method</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Output size</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Setting</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Review result</th>
              </tr>
            </thead>
            <tbody>
              {testRows.map(([method, size, setting, result]) => (
                <tr key={method}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{method}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{size}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{setting}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          The balanced browser pass won because it removed scanner waste without damaging ink edges. Grayscale was smaller, but the red stamp looked weak enough that I would not use it for a signed commercial agreement. Use grayscale for invoices, internal memos, or plain paperwork. Keep color for anything where authenticity is part of the review.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page-Risk Score</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before optimizing, score the pages. This prevents the common mistake of treating every page the same. A typed terms page and a signature page have different jobs.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Page type</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Risk score</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {scoreRows.map(([type, score, note]) => (
                <tr key={type}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{type}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{score}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Workflow</h2>
        <ol className="space-y-5">
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span><div><h3 className="font-semibold text-gray-900">Duplicate the source packet</h3><p className="text-gray-700">Name the copy <code className="bg-gray-100 px-1 rounded">vendor-contract-email-copy</code>. Never work on the only original, especially when signatures are involved.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span><div><h3 className="font-semibold text-gray-900">Mark protected pages</h3><p className="text-gray-700">Write down the page numbers with signatures, stamps, ID cards, notarization marks, or handwritten dates. These get the gentlest treatment.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span><div><h3 className="font-semibold text-gray-900">Run one balanced pass</h3><p className="text-gray-700">Use <Link href="/compress-pdf" className="text-blue-600 hover:underline">the browser optimizer</Link> with a balanced setting. Do not start with the strongest option unless the item is plain typed text.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span><div><h3 className="font-semibold text-gray-900">Check protected pages at 150%</h3><p className="text-gray-700">If ink edges look broken, step back. A contract that sends but cannot be verified creates a slower problem.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span><div><h3 className="font-semibold text-gray-900">Split appendices only when needed</h3><p className="text-gray-700">If the main agreement is ready but the ID appendix is heavy, send the appendix as a second message instead of damaging the whole packet.</p></div></li>
        </ol>
      </section>

      <section className="mb-10 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Send Checklist</h2>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3 text-gray-700"><span className="text-green-600 font-bold">□</span><span>{item}</span></li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Stop Shrinking and Use a Link</h2>
        <p className="text-gray-700 leading-relaxed">
          Stop when the attachment is still above 25 MB after a balanced pass and one appendix split. At that point, a permissioned cloud link is safer than destroying scan quality. Use an attachment when the recipient is outside your organization, needs offline archiving, or works in a procurement portal that rejects shared links.
        </p>
      </section>

      <section className="bg-blue-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-3">Prepare the Contract Copy</h2>
        <p className="mb-4 text-blue-50">Protect signatures first, target 15 MB, then send a test message to yourself before the client receives it.</p>
        <Link href="/compress-portable-item" className="inline-block bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">Optimize the Attachment</Link>
      </section>
          <PdfInternalLinks slug="reduce-scanned-contract-email-size" />
    </article>
  );
}
