"use client";

import { useState, useRef } from "react";

export default function MergePdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Merge PDF</h1>
        <p className="text-slate-600 mb-8">Combine multiple PDF files into one.</p>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center hover:border-blue-400 transition-colors cursor-pointer" onClick={() => inputRef.current?.click()}>
            <input ref={inputRef} type="file" accept="application/pdf" multiple className="hidden" onChange={(e) => setFiles(Array.from(e.target.files || []))} />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Upload PDFs</h3>
            <p className="text-sm text-slate-500">Click to select files</p>
          </div>
          {files.length > 0 && (
            <div className="mt-6">
              <p className="font-medium text-slate-900">{files.length} files selected</p>
              <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Merge PDFs</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
