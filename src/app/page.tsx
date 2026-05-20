import Link from "next/link";

const tools = [
  { href: "/pdf-to-jpg/", title: "PDF to JPG", description: "Convert PDF pages to high-quality JPG or PNG images.", icon: "🖼️", popular: true },
  { href: "/image-to-pdf/", title: "Image to PDF", description: "Convert JPG, PNG, WebP images to PDF.", icon: "📄", popular: true },
  { href: "/merge-pdf/", title: "Merge PDF", description: "Combine multiple PDF files into one.", icon: "🔗", popular: true },
  { href: "/split-pdf/", title: "Split PDF", description: "Extract specific pages or split PDF into multiple files.", icon: "✂️", popular: false },
  { href: "/compress-pdf/", title: "Compress PDF", description: "Reduce PDF file size while maintaining quality.", icon: "🗜️", popular: true },
  { href: "/rotate-pdf/", title: "Rotate PDF", description: "Rotate PDF pages clockwise or counterclockwise.", icon: "🔄", popular: false },
  { href: "/pdf-encrypt/", title: "PDF Encrypt", description: "Protect PDF files with password encryption.", icon: "🔒", popular: true },
  { href: "/pdf-decrypt/", title: "PDF Decrypt", description: "Remove password protection from PDF files.", icon: "🔓", popular: false },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">Free PDF Tools for Everyone</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">Convert, merge, split, and compress PDF files securely in your browser. No upload needed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pdf-to-jpg/" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg">Start Converting</Link>
            <Link href="#tools" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors">View All Tools</Link>
          </div>
        </div>
      </section>

      <section id="tools" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">All PDF Tools</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Simple, fast, and secure. Pick a tool and start processing your PDFs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tool.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">{tool.title}</h3>
                      {tool.popular && <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">Popular</span>}
                    </div>
                    <p className="text-sm text-slate-600">{tool.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
