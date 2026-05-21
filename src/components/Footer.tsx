import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center"><span className="text-white font-bold text-sm">P</span></div>
              <span className="text-xl font-bold text-slate-900">PixelPDF</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm">Free online PDF tools. All processing happens in your browser.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pdf-to-jpg/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">PDF to JPG</Link></li>
              <li><Link href="/merge-pdf/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">Merge PDF</Link></li>
              <li><Link href="/split-pdf/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">Split PDF</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">About</Link></li>
              <li><Link href="/privacy/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">Privacy</Link></li>
              <li><Link href="/cookie-policy/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">Cookie Policy</Link></li>
              <li><Link href="/terms/" className="text-slate-600 hover:text-blue-600 py-1 inline-block">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">© {currentYear} PixelPDF. All rights reserved.</div>
      </div>
    </footer>
  );
}
