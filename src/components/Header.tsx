"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  { href: "/pdf-to-jpg/", label: "PDF to JPG" },
  { href: "/image-to-pdf/", label: "Image to PDF" },
  { href: "/merge-pdf/", label: "Merge PDF" },
  { href: "/split-pdf/", label: "Split PDF" },
  { href: "/pdf-encrypt/", label: "PDF Encrypt" },
  { href: "/pdf-decrypt/", label: "PDF Decrypt" },
  { href: "/blog/", label: "Blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-slate-900">PixelPDF</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors">{tool.label}</Link>
            ))}
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-2">
              {tools.map((tool) => (
                <Link key={tool.href} href={tool.href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg">{tool.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
