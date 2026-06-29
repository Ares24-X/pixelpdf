// How to Combine Multiple Images into One PDF - 短文 (500-800字)
// 路径: /src/app/blog/combine-images-into-pdf/page.tsx
// 日期: 2026-05-25

import { Metadata } from 'next';
import Link from 'next/link';
import PdfInternalLinks from "@/components/PdfInternalLinks";

export const metadata: Metadata = {
  title: 'How to Combine Multiple Images into One PDF (2026)',
  description: 'Quick guide on combining multiple images into a single PDF file. Free online tool, no registration required, 100% secure.',
  keywords: ['combine images to PDF', 'merge images to PDF', 'multiple images to PDF', 'photo collage PDF', 'image to PDF'],
  openGraph: {
    title: 'How to Combine Multiple Images into One PDF (2026)',
    description: 'Quick guide on combining multiple images into a single PDF. Free, fast, and secure.',
    type: 'article',
  },
};

export default function CombineImagesIntoPDF() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Combine Images to PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        How to Combine Multiple Images into One PDF
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>May 25, 2026</span>
        <span className="mx-2">•</span>
        <span>4 min read</span>
        <span className="mx-2">•</span>
        <span>612 words</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Need to combine multiple photos or images into a single PDF document? Whether you're creating a photo collage, organizing scanned documents, or preparing a presentation, merging images into one PDF makes sharing and archiving much easier. Here's how to do it quickly and for free.
        </p>
      </section>

      {/* Quick 3-Step Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Combine Images into PDF in 3 Steps</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">Upload All Your Images</h3>
              <p className="text-gray-700 mt-1">Go to PixelPDF's <Link href="/image-to-pdf" className="text-blue-600 hover:underline">Image to PDF</Link> tool and drag all your images at once. You can select multiple files using Ctrl/Cmd + Click.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">Reorder Your Images</h3>
              <p className="text-gray-700 mt-1">Drag and drop to arrange images in your desired order. Each image will become a separate page in the final PDF.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">Download Your Combined PDF</h3>
              <p className="text-gray-700 mt-1">Click "Convert to PDF" and your multi-page PDF downloads instantly. All processing happens in your browser—your images never leave your device.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Combine Images Now
          </Link>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Image Formats</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">JPG / JPEG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">PNG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">WebP</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">GIF</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">BMP</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-3">You can mix different formats in a single conversion—PixelPDF handles them all automatically.</p>
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Photo collages:</strong> Combine vacation photos, family pictures, or event images into a shareable PDF album.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Scanned documents:</strong> Merge multiple scanned pages into one organized document for easy emailing.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Presentations:</strong> Create visual presentations by combining charts, diagrams, and screenshots.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Receipts and invoices:</strong> Keep all your expense documents together in one PDF file.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">How many images can I combine at once?</summary>
            <p className="mt-3 text-gray-700">You can combine up to 20 images in a single conversion. Each image becomes one page in the resulting PDF.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Is this service really free?</summary>
            <p className="mt-3 text-gray-700">Yes! PixelPDF is completely free with no registration, no watermarks, and no file limits beyond the 20 images per conversion.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Are my images uploaded to a server?</summary>
            <p className="mt-3 text-gray-700">No. All processing happens locally in your browser. Your images never leave your device, ensuring complete privacy.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Can I change the page order after creating the PDF?</summary>
            <p className="mt-3 text-gray-700">If you need to reorder pages after creating the PDF, you can use our <Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link> tool to separate pages and then merge them in the desired order.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Start Combining Your Images</h2>
        <p className="mb-6 text-blue-100">Create a multi-page PDF from your images in seconds—free and secure</p>
        <Link 
          href="/image-to-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Try Image to PDF Free
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF to JPG</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">Merge PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">Compress PDF</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">Rotate PDF</div>
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
      <PdfInternalLinks slug="combine-images-into-pdf" />
    </article>
  );
}
