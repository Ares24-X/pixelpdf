import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outlook 20 MB Limit: Send Large Attachments',
  description: 'A practical guide for sending a large PDF report through Microsoft mail when the 20 MB payload limit blocks your email.',
  keywords: ['Outlook 20 MB limit', 'large email payload', 'make attachment smaller for email', 'report size guide'],
  openGraph: {
    title: 'Outlook 20 MB Limit: Send Large Attachments',
    description: 'Use a simple size budget, test data, and a pre-send checklist to prepare large reports for email payloads.',
    type: 'article',
  },
};

const testRows = [
  ['Source export', '36.4 MB', '0%', 'Blocked in Microsoft mail desktop'],
  ['Browser optimizer, balanced mode', '14.8 MB', '59.3%', 'Sent with room for a short email thread'],
  ['Images downsampled to 150 DPI', '11.6 MB', '68.1%', 'Best balance for screen review'],
  ['Scanned pages converted to grayscale', '8.9 MB', '75.5%', 'Readable, but not ideal for brand decks'],
];

const checklist = [
  'Keep the final payload under 18 MB, not 20 MB, because mail systems add encoding overhead.',
  'Open the optimized copy once before sending; a tiny item is useless if pages render poorly.',
  'If the content is a scanned contract, keep text legibility above visual polish.',
  'If the content is a pitch deck, preserve logos and charts before shrinking background photos.',
  'Send one payload at a time when the recipient uses Microsoft 365 with strict tenant policies.',
];

export default function Mail20MbPayloadLimitPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/blog" className="hover:text-blue-600">Blog</Link> / <span>Outlook 20 MB Limit</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Outlook 20 MB Limit: Send Large Attachments</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>June 19, 2026</span><span className="mx-2">•</span><span>9 min read</span><span className="mx-2">•</span><span>Field-tested workflow</span>
        </div>
      </header>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Aim for an 18 MB final payload when Microsoft mail says the limit is 20 MB. That small buffer matters because email transfer adds overhead, and the receiving server may enforce a lower ceiling than your own mailbox.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The fastest safe path is not “make it as tiny as possible.” The right path is to remove wasted weight while keeping the pages useful: readable text, clean charts, intact signatures, and no broken images. This workflow uses a tested size budget, a decision table, and a copy-paste checklist so you can send the message instead of wrestling with it for half an hour.
        </p>
      </section>

      <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">The 18 MB Rule</h2>
        <p className="text-gray-700 leading-relaxed">
          Email payloads are encoded before transport. In plain English: your 19.6 MB item can behave like something larger after the mail client packages it. I use 18 MB as the practical ceiling because it gives roughly 10% safety room for encoding, signatures, legal footers, and recipient-side restrictions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Actually Makes the Payload Too Large</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Photo-heavy pages</h3>
            <p className="text-gray-700 text-sm">Phone photos inserted into reports often carry more pixels than any screen review needs.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Scanner defaults</h3>
            <p className="text-gray-700 text-sm">Office scanners often save color pages at 300 or 600 DPI even when the source is black text.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Hidden leftovers</h3>
            <p className="text-gray-700 text-sm">Edit history, unused objects, thumbnails, and embedded fonts can stay inside after multiple saves.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Test: One Sales Deck, Four Outputs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I tested a 42-page sales deck with product photos, screenshots, and two scanned signature pages. The goal was simple: get it below the practical mail ceiling without making charts blurry.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Method</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Final size</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Weight cut</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {testRows.map(([method, size, cut, result]) => (
                <tr key={method}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{method}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{size}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{cut}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          The balanced browser pass was the best default. The 150 DPI version was better for screen-only review. Grayscale won on size, but it damaged brand slides enough that I would only use it for invoices, contracts, or scanned paperwork.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Workflow</h2>
        <ol className="space-y-5">
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span><div><h3 className="font-semibold text-gray-900">Duplicate the original</h3><p className="text-gray-700">Never work on the only copy. Save a version named <code className="bg-gray-100 px-1 rounded">mail-sendable</code> so you can compare quality later.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span><div><h3 className="font-semibold text-gray-900">Use a browser-based optimizer first</h3><p className="text-gray-700">Open <Link href="/compress-pdf" className="text-blue-600 hover:underline">the browser optimizer</Link>, choose a balanced setting, and download the new copy. This handles the common bloat without installing desktop software.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span><div><h3 className="font-semibold text-gray-900">Check the largest pages</h3><p className="text-gray-700">If the payload still misses the target, the issue is usually a few heavy pages, not the whole report. Product photos, scans, and background textures are the usual suspects.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span><div><h3 className="font-semibold text-gray-900">Split only when needed</h3><p className="text-gray-700">When one payload cannot stay under 18 MB without ruining quality, split the appendix or image-heavy section into a second message. Use <Link href="/split-pdf" className="text-blue-600 hover:underline">the page splitter</Link> for that job.</p></div></li>
          <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span><div><h3 className="font-semibold text-gray-900">Send a test email to yourself</h3><p className="text-gray-700">This catches the real failure mode: local size looks fine, but mail transport or corporate security rejects the message.</p></div></li>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When a Cloud Link Is Better</h2>
        <p className="text-gray-700 leading-relaxed">
          Use OneDrive or SharePoint instead of an attachment when the recipient needs to edit, when the report is above 40 MB after a reasonable optimization pass, or when the message contains confidential material that should be revoked later. Use an attachment when the recipient is outside your organization, needs an offline copy, or has strict procurement systems that block shared links.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Simple Decision Rule</h2>
        <p className="text-gray-700 leading-relaxed">
          If the first optimized copy lands between 12 and 18 MB, send it. If it lands between 18 and 25 MB, downsample images or split the appendix. If it stays above 25 MB, stop fighting the payload limit and use a cloud link with permissions.
        </p>
      </section>

      <section className="bg-blue-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-3">Ready to Send It?</h2>
        <p className="mb-4 text-blue-50">Start with the balanced setting, keep the final copy under 18 MB, and verify the pages before you hit send.</p>
        <Link href="/compress-portable-item" className="inline-block bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">Optimize Your Report</Link>
      </section>
    </article>
  );
}
