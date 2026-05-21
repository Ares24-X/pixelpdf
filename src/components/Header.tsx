"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 min-h-[44px]">
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
          <button
            ref={buttonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg active:bg-slate-100 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu with smooth slide-down animation */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 py-4 border-t border-slate-200">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 active:bg-slate-100 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                {tool.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
