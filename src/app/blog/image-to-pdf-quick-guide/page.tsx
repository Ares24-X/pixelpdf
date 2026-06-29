// Image to PDF Quick Guide - 短文/FAQ (500-800字)
// 路径: /src/app/blog/image-to-pdf-quick-guide/page.tsx
// 日期: 2026-05-21

import { Metadata } from 'next';
import Link from 'next/link';
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: 'Convert Image to PDF Free Online — JPG, PNG, WebP',
  description: 'Convert image to PDF free online from JPG, PNG, or WebP. Use PixelPDF for private browser-based conversion with no signup.',
  keywords: ['image to PDF', 'JPG to PDF', 'PNG to PDF', 'convert image to PDF', 'picture to PDF'],
  openGraph: {
    title: 'Convert Image to PDF Free Online — JPG, PNG, WebP',
    description: 'Convert image to PDF free online from JPG, PNG, or WebP. Use PixelPDF for private browser-based conversion with no signup.',
    type: 'article',
  },
};

export default function ImageToPdfGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Image to PDF Guide</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        How to Convert Image to PDF Online for Free
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>May 21, 2026</span>
        <span className="mx-2">•</span>
        <span>4 min read</span>
        <span className="mx-2">•</span>
        <span>687 words</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Need to turn your photos or images into a PDF document? Whether you're creating a photo album, scanning receipts, or preparing documents for submission, converting images to PDF is easier than you think. In this quick guide, we'll show you exactly how to do it in under a minute.
        </p>
      </section>

      {/* Quick Steps */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Convert Image to PDF in 3 Steps</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">Upload Your Images</h3>
              <p className="text-gray-700 mt-1">Go to PixelPDF's Image to PDF tool and drag & drop your images, or click to select files from your device.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">Reorder if Needed</h3>
              <p className="text-gray-700 mt-1">Drag and drop to rearrange images in your preferred order. Each image becomes a separate page.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">Download Your PDF</h3>
              <p className="text-gray-700 mt-1">Click "Convert to PDF" and your document downloads instantly. That's it!</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Try Image to PDF Free
          </Link>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Image Formats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">JPG / JPEG</div>
            <div className="text-sm text-gray-500">Most common format</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎨</div>
            <div className="font-medium">PNG</div>
            <div className="text-sm text-gray-500">Transparent backgrounds</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📸</div>
            <div className="font-medium">WebP</div>
            <div className="text-sm text-gray-500">Modern format</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">GIF</div>
            <div className="text-sm text-gray-500">Animated images</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Is it free to convert image to PDF?</summary>
            <p className="mt-3 text-gray-700">Yes! PixelPDF's Image to PDF tool is completely free to use. No registration, no limits, no watermarks.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">How many images can I convert at once?</summary>
            <p className="mt-3 text-gray-700">You can upload up to 20 images per conversion. Each image becomes one page in the resulting PDF.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Is my data secure?</summary>
            <p className="mt-3 text-gray-700">Absolutely. All processing happens in your browser. Your images never leave your device, ensuring complete privacy.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Can I change the page size?</summary>
            <p className="mt-3 text-gray-700">Yes! PixelPDF automatically fits each image to the page. You can choose from A4, Letter, Legal, or auto-fit options.</p>
          </details>
        </div>
      </section>

      {/* Related Tools */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/pdf-to-jpg" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>📄</span> PDF to JPG
          </Link>
          <Link href="/merge-pdf" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🔗</span> Merge PDF
          </Link>
          <Link href="/compress-pdf" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🗜️</span> Compress PDF
          </Link>
        </div>
      </section>
    
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Related Articles</h2>
          <p className="text-sm text-slate-500 mb-4">
            Start with the cluster guide: <Link href="/blog/pdf-to-jpg-guide" className="text-blue-600 underline">Convert PDF to JPG Free Online — No Signup Required</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/pdf-to-jpg-guide" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Convert PDF to JPG Free Online — No Signup Required</h4>
              <p className="text-sm text-slate-600">Convert PDF to JPG free online with PixelPDF. Follow quick steps, keep files private in your browser, and…</p>
            </Link>
            <Link href="/blog/convert-pdf-to-image" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">PDF to Image: How to Convert PDF to JPG/PNG in Seconds (2026)</h4>
              <p className="text-sm text-slate-600">Learn how to convert PDF pages to JPG or PNG images in seconds. Quick 3-step guide, format comparison, an…</p>
            </Link>
            <Link href="/blog/convert-pdf-to-word-free" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Convert PDF to Word Free Online Without Losing Format</h4>
              <p className="text-sm text-slate-600">Convert PDF to Word free online without losing formatting. Compare safe methods, avoid signup, and start…</p>
            </Link>
            <Link href="/blog/convert-pdf-to-excel-free" className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Convert PDF to Excel Free Online Without Losing Data</h4>
              <p className="text-sm text-slate-600">Convert PDF to Excel free online and preserve tables. Learn the best methods for clean spreadsheet export…</p>
            </Link>
          </div>
        </section>
      <PdfInternalLinks slug="image-to-pdf-quick-guide" />
    </article>
  );
}
