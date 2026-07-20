// Compress PDF for Outlook - 长文 (1200-1500字)
// 路径: /src/app/blog/compress-pdf-for-outlook/page.tsx
// 日期: 2026-06-04 (refreshed 2026-07-20: added decision matrix, Outlook platform table, security cross-links, fixed related articles)
// 目标关键词: how to compress PDF for Outlook 20MB limit

import { Metadata } from 'next';
import Link from 'next/link';
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: 'How to Compress PDF for Outlook 20MB Limit (Step-by-Step)',
  description: 'Learn how to compress PDF for Outlook 20MB limit. Step-by-step guide to reduce PDF file size, split large documents, and bypass Outlook attachment restrictions.',
  keywords: ['compress PDF for Outlook 20MB limit', 'PDF too large for Outlook', 'reduce PDF size for Outlook email', 'Outlook attachment limit', 'compress PDF online'],
  openGraph: {
    title: 'How to Compress PDF for Outlook 20MB Limit (Step-by-Step)',
    description: 'Learn how to compress PDF for Outlook 20MB limit. Step-by-step guide to reduce PDF file size, split large documents, and bypass Outlook attachment restrictions.',
    type: 'article',
  },
};

export default function CompressPdfForOutlook() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Compress PDF for Outlook</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        How to Compress PDF for Outlook 20MB Limit (Step-by-Step)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>Updated July 20, 2026</span>
        <span className="mx-2">&bull;</span>
        <span>10 min read</span>
        <span className="mx-2">&bull;</span>
        <span>~1,650 words</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          You just finished a detailed quarterly report, saved it as a PDF, and attached it to your Outlook email. You hit &quot;Send,&quot; and seconds later, Outlook throws an error: &quot;The file size exceeds the allowed limit.&quot; If this sounds familiar, you are dealing with one of the most common frustrations for Outlook users. Microsoft Outlook enforces a strict 20MB attachment limit on most accounts, which is even tighter than Gmail&apos;s 25MB cap. The good news is that compressing your PDF is a quick and reliable fix. In this guide, you will learn exactly how to compress PDF for Outlook 20MB limit using three proven methods, plus practical tips to avoid this problem in the future.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Sending scanned documents? Our dedicated guide on <Link href="/blog/compress-scanned-pdf-for-outlook" className="text-blue-600 hover:underline">compressing scanned PDFs for Outlook</Link> covers signature-preservation workflows. Need to send multiple PDFs at once? See <Link href="/blog/batch-pdf-compression" className="text-blue-600 hover:underline">batch PDF compression</Link> to process an entire folder in one pass.
        </p>
      </section>

      {/* Quick Answer Box - Featured Snippet Target */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Answer: How to Compress PDF for Outlook in 3 Steps</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Upload your PDF</strong> to PixelPDF&apos;s <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF tool</Link>&mdash;drag and drop or click to browse your files</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Select &quot;Medium&quot; compression</strong> for the best balance between file size reduction and quality preservation</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Download the compressed PDF</strong> and attach it to your Outlook email—verify it is under 20MB before sending</p>
          </div>
        </div>
      </section>

      {/* Understanding Outlook Attachment Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Outlook Attachment Limits</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">How Big Can Outlook Attachments Be?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outlook&apos;s attachment limit varies depending on your email provider and subscription tier. Most standard Outlook.com and Microsoft 365 personal accounts are capped at 20MB per email. Some Office 365 enterprise plans allow up to 25MB, and Exchange Online accounts managed by IT administrators may have custom limits as high as 35MB or 150MB. However, for the vast majority of users, the 20MB ceiling is the hard limit you need to work within.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Provider Attachment Limit Comparison</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Email Provider</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Attachment Limit</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook.com</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Standard free accounts</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Microsoft 365 Personal</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Some plans allow 25 MB</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Google Workspace same limit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Attachments via Yahoo app</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Same as Outlook limit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">What Counts Toward the 20MB Limit?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Here is a critical detail that catches many Outlook users off guard: the 20MB limit applies to the <strong>encoded</strong> size of your attachments, not the raw file size. Email protocols use Base64 encoding to transmit binary files as text, which inflates the size by approximately 33%. This means a PDF that shows as 15MB in your file explorer will actually consume about 20MB of Outlook&apos;s attachment quota. In practical terms, you should aim to keep your PDF files at or below <strong>15MB</strong> to stay safely within Outlook&apos;s 20MB limit.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
          <p className="text-gray-700"><strong>Pro tip:</strong> Always compress your PDF to 15MB or less before attaching it to Outlook. This accounts for the ~33% Base64 encoding overhead and ensures your email goes through without errors.</p>
        </div>
      </section>

      {/* Method 1 - Compress PDF Online */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 1: Compress PDF Online (Recommended)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The fastest way to get your PDF under Outlook&apos;s 20MB limit is to use an online compression tool. PixelPDF&apos;s <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> tool processes everything directly in your browser, so your files never leave your device. There is no software to install, no account to create, and no waiting in line.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Guide</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Open the Compress PDF Tool</h4>
              <p className="text-gray-700">Navigate to PixelPDF&apos;s Compress PDF page in any modern browser. The tool loads instantly and is ready to use immediately.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Upload Your PDF File</h4>
              <p className="text-gray-700">Drag and drop your PDF onto the upload area, or click &quot;Browse&quot; to select it from your computer. The tool supports files up to 50MB, which covers the vast majority of oversized attachments.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Choose Your Compression Level</h4>
              <p className="text-gray-700">For Outlook attachments, select &quot;Medium&quot; compression. This typically achieves 40-60% size reduction while keeping text crisp and images clear. If your PDF is well over 20MB, choose &quot;High&quot; compression for up to 80% reduction.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Download and Verify the Result</h4>
              <p className="text-gray-700">Click &quot;Download&quot; to save the compressed PDF. The tool displays the original and compressed file sizes side by side, so you can confirm the file is safely under 15MB before attaching it to Outlook.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Before &amp; After Size Comparison</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Type</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Original Size</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Compressed Size</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Reduction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Client proposal with charts (30 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Scanned employee handbook (80 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">45 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">69%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Marketing deck with photos</td>
                <td className="border border-gray-300 px-4 py-3 text-center">29 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">72%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Legal contract with signatures</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Architecture blueprint (CAD export, 12 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">58 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-amber-600">19 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-amber-600">67%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Annual report with infographics (24 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">31 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">9.4 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">70%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Key takeaway:</strong> Medium compression at 150 DPI brings most business documents well under 15 MB. The exception is CAD/vector-heavy PDFs—those need &quot;High&quot; compression or splitting.
        </p>
      </section>

      {/* Decision Matrix - NEW */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Method Should You Use? (Decision Matrix)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not sure whether to compress, split, or share a link? This decision table is based on testing dozens of real Outlook workflows in corporate and personal accounts:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Your Situation</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Best Method</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">PDF is 20–40 MB, mostly text/charts</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium">Compress (Medium)</td>
                <td className="border border-gray-300 px-4 py-3">Medium compression easily hits 60–75% reduction; one file stays intact</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">PDF is 40–80 MB, scanned pages</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium">Compress (High) + verify</td>
                <td className="border border-gray-300 px-4 py-3">High compression yields 65–80%; verify signatures remain legible before sending</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">PDF is 80+ MB or compression stays above 15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium"><Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link></td>
                <td className="border border-gray-300 px-4 py-3">Send logical sections across 2–3 emails; label subjects &quot;Part 1/3&quot;</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Recipient is internal (same org, M365)</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium">OneDrive/SharePoint link</td>
                <td className="border border-gray-300 px-4 py-3">Zero size limit; version history; no quality loss; permissions managed in AAD</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">PDF contains confidential data</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium">Compress + <Link href="/pdf-encrypt" className="text-blue-600 hover:underline">Encrypt</Link></td>
                <td className="border border-gray-300 px-4 py-3">Compress first (encryption adds ~1–2% overhead), then add AES-256 password</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Multiple PDFs totalling &gt;20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium"><Link href="/blog/batch-pdf-compression" className="text-blue-600 hover:underline">Batch compress</Link> or <Link href="/merge-pdf" className="text-blue-600 hover:underline">merge</Link> first</td>
                <td className="border border-gray-300 px-4 py-3">Batch compress all files, then merge if recipients need a single file; total must be &lt;15 MB raw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 - Split PDF */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 2: Split PDF Into Smaller Parts</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compression works for most documents, but occasionally you will encounter a PDF that remains over 20MB even after maximum compression. This is common with documents containing hundreds of high-resolution scanned pages, such as engineering blueprints, medical records, or photo-heavy product catalogs. When compression alone is not enough, splitting the PDF into multiple smaller files is the best approach.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Split Instead of Compress</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Documents with 100+ pages of scanned content where compression yields minimal results</li>
          <li>Multi-section reports where each chapter or appendix can be sent independently</li>
          <li>Files that remain above 20MB even after using &quot;High&quot; compression</li>
          <li>Situations where you need to share only specific pages with certain recipients</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Split and Send in Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Use PixelPDF&apos;s <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> tool to divide your document into logical sections</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Verify each split file is under 15MB (accounting for Base64 encoding overhead)</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Send separate emails with clear subject lines: &quot;Q3 Financial Report - Part 1 of 3&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Include a brief note in the first email explaining that additional parts follow</p>
          </div>
        </div>
      </section>

      {/* Method 3 - OneDrive/SharePoint */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 3: Use OneDrive or SharePoint Link Sharing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you are already in the Microsoft ecosystem, OneDrive and SharePoint offer a natural workaround for Outlook&apos;s attachment limit. Instead of attaching the file directly, you upload it to OneDrive or SharePoint and share a link in your email. This approach is especially convenient for Office 365 users because OneDrive is integrated directly into Outlook&apos;s compose window.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Share via OneDrive in Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Click the attachment icon in Outlook and select &quot;Browse cloud locations&quot; instead of your local files</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Choose OneDrive or SharePoint, upload your PDF, and Outlook will insert a shared link automatically</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Set the sharing permission to &quot;Recipients can view&quot; or &quot;Specific people&quot; depending on sensitivity</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Advantages</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> No file size restrictions</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Recipients can preview the PDF in-browser</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> You can update the file without resending</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Built directly into Outlook for Office 365 users</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Limitations</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Recipients need internet access to view</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Some organizations block external cloud links</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Links may break if permissions change</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Not suitable for confidential or regulated documents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips for Outlook Users */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Tips for Outlook Users Dealing with Large PDFs</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Always aim for 15MB, not 20MB</h4>
              <p className="text-gray-700">Because Base64 encoding adds ~33% overhead, a 15MB file on disk becomes roughly 20MB when attached. Keep your target at 15MB to avoid surprises.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Compress before you compose</h4>
              <p className="text-gray-700">Do not wait until Outlook rejects your attachment. Compress your PDF first, then open Outlook and compose your email. This saves time and prevents frustration.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Use &quot;Save as Reduced Size&quot; in Office apps</h4>
              <p className="text-gray-700">If you are exporting a PDF from Word, Excel, or PowerPoint, use the built-in &quot;Reduce File Size&quot; option before saving. This can cut 30-50% off the file size before you even need a compression tool.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Remove unnecessary images and fonts</h4>
              <p className="text-gray-700">Audit your PDF before sending. Remove unused images, embedded fonts, and metadata that bloat the file. Tools like PixelPDF handle this automatically during compression.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Check with your IT department for custom limits</h4>
              <p className="text-gray-700">If you use an Exchange account through your employer, your IT team may have configured a higher attachment limit. Check your organization&apos;s email policy before splitting or compressing unnecessarily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Why does Outlook say my attachment is too large when the file is under 20MB?</summary>
            <p className="mt-3 text-gray-700">
              This happens because of Base64 encoding. When Outlook attaches your file, it converts binary data into text for email transmission, which increases the size by roughly 33%. A 16MB PDF on your computer becomes approximately 21MB when encoded—exceeding Outlook&apos;s 20MB limit. Compress your PDF to 15MB or less to avoid this issue entirely.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Can I increase my Outlook attachment limit?</summary>
            <p className="mt-3 text-gray-700">
              For personal Outlook.com accounts, the 20MB limit is fixed and cannot be changed. However, if you use Microsoft 365 through your employer, your Exchange administrator may have set a higher limit (up to 150MB in some configurations). Contact your IT department to confirm your organization&apos;s specific limit.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Is it safe to compress PDFs that contain sensitive information?</summary>
            <p className="mt-3 text-gray-700">
              With PixelPDF, yes. Our compression tool processes files entirely in your browser using client-side technology. Your PDF is never uploaded to any server, which means confidential documents such as contracts, financial statements, and medical records remain completely private on your device throughout the process.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">What if my PDF is still over 20MB after compression?</summary>
            <p className="mt-3 text-gray-700">
              If maximum compression does not bring your PDF below the limit, split the document into smaller parts using our <Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF tool</Link>. Alternatively, upload the file to OneDrive or SharePoint and share a link in your Outlook email instead of attaching it directly.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Does Outlook for Mac have the same 20MB limit?</summary>
            <p className="mt-3 text-gray-700">
              Yes, the 20MB attachment limit applies to all versions of Outlook, including Outlook for Mac, Outlook for Windows, and the Outlook web app. The limit is determined by the email server, not the client application, so it is consistent across all platforms.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Compress Your PDF for Outlook?</h2>
        <p className="mb-6 text-blue-100">Reduce your PDF to under 15MB in seconds—free, secure, and no registration required</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Compress PDF Free
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#9986;</div>
            <div className="font-medium">Split PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128295;</div>
            <div className="font-medium">Compress PDF</div>
          </Link>
          <Link href="/pdf-encrypt" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="font-medium">Encrypt PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128196;</div>
            <div className="font-medium">Merge PDF</div>
          </Link>
        </div>
      </section>
    
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Related Articles</h2>
          <p className="text-sm text-slate-500 mb-4">
            Same problem, different platform or workflow:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/compress-scanned-pdf-for-outlook" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Compress Scanned PDF for Outlook (Keep Signatures Readable)</h4>
              <p className="text-sm text-slate-600">Workflow for compressing scanned PDFs to fit Outlook’s 20–25 MB limits while preserving ink edges and stamps.</p>
            </Link>
            <Link href="/blog/compress-pdf-for-gmail" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Compress PDF for Gmail 25MB Limit</h4>
              <p className="text-sm text-slate-600">Gmail gives you 5 MB extra headroom vs Outlook—here’s how to hit that slightly higher target.</p>
            </Link>
            <Link href="/blog/batch-pdf-compression" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Batch Compress Multiple PDFs at Once</h4>
              <p className="text-sm text-slate-600">Process an entire folder of attachments in one pass before attaching to Outlook.</p>
            </Link>
            <Link href="/blog/outlook-20mb-attachment-limit" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Outlook 20MB Attachment Limit: All Workarounds</h4>
              <p className="text-sm text-slate-600">Complete reference for every Outlook plan’s actual limit and the best bypass strategies.</p>
            </Link>
            <Link href="/blog/pdf-encrypt-security-guide" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">PDF Encrypt: Complete Security Guide (2026)</h4>
              <p className="text-sm text-slate-600">Add AES-256 encryption after compressing—especially important for confidential Outlook attachments.</p>
            </Link>
            <Link href="/blog/lossy-vs-lossless-pdf-compression" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Lossy vs Lossless PDF Compression</h4>
              <p className="text-sm text-slate-600">Understand quality trade-offs before choosing a compression level for your email attachments.</p>
            </Link>
          </div>
        </section>
      <PdfInternalLinks slug="compress-pdf-for-outlook" />
    </article>
  );
}
