"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

export default function PdfDecryptPage() {
  // State management
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Decryption options
  const [password, setPassword] = useState("");

  // File selection handling
  const handleFileSelect = useCallback((selectedFile: File) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setStatus("idle");
      setProgress(0);
      setMessage("");
    } else {
      setStatus("error");
      setMessage("Please select a valid PDF file");
    }
  }, []);

  // Drag-and-drop handling
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) handleFileSelect(droppedFile);
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Core decryption logic
  const handleDecrypt = useCallback(async () => {
    if (!file) return;

    if (!password) {
      setStatus("error");
      setMessage("Please enter the password");
      return;
    }

    setStatus("processing");
    setProgress(0);
    setMessage("Decrypting PDF...");
    setEstimatedTime("Calculating...");

    try {
      // Dynamically import pdf-lib
      const { PDFDocument } = await import("@cantoo/pdf-lib");

      setProgress(10);
      setMessage("Loading encrypted PDF...");

      // Read file
      const arrayBuffer = await file.arrayBuffer();

      setProgress(30);
      setMessage("Removing encryption...");

      // Load encrypted PDF with password
      const pdfDoc = await PDFDocument.load(arrayBuffer, {
        password: password,
        ignoreEncryption: false,
      });

      setProgress(50);
      setMessage("Creating unprotected PDF...");

      // Save password-free PDF
      const pdfBytes = await pdfDoc.save();

      setProgress(80);
      setMessage("Preparing download...");

      // Create Blob and download
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const fileName = file.name.replace(".pdf", "-decrypted.pdf");
      saveAs(blob, fileName);

      setProgress(100);
      setStatus("complete");
      setMessage("PDF decrypted successfully!");
      setEstimatedTime("");
    } catch (err) {
      setStatus("error");
      if (err instanceof Error && err.message.includes("password")) {
        setMessage("Incorrect password. Please try again.");
      } else {
        setMessage(`Decryption failed: ${err instanceof Error ? err.message : "Unknown error"}`);
      }
      setEstimatedTime("");
    }
  }, [file, password]);

  // Reset state
  const handleReset = useCallback(() => {
    setFile(null);
    setProgress(0);
    setStatus("idle");
    setMessage("");
    setEstimatedTime("");
    setPassword("");
  }, []);

  // File size formatting
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title area */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
            <span className="text-3xl">🔓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF Decrypt</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Remove password protection from PDF files. Enter the correct password to unlock and download an unprotected version.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Upload area */}
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                isDragging
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-300 hover:border-emerald-400 hover:bg-gray-50"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFileSelect(f);
                }}
                className="hidden"
              />
              <div className="text-4xl mb-3">📄</div>
              <p className="text-gray-700 font-medium">
                Click or drag encrypted PDF file here
              </p>
              <p className="text-gray-400 text-sm mt-1">Supports .pdf format, max 50MB</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* File information */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📄</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  ✕
                </button>
              </div>

              {/* Decryption options */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span>🔑</span> Enter Password
                </h3>

                {/* Password input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PDF Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the PDF password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && file && password) {
                        handleDecrypt();
                      }
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter the password that was used to protect this PDF
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              {status !== "idle" && (
                <div className="mt-6">
                  <ProgressBar
                    progress={progress}
                    status={status}
                    message={message}
                    estimatedTime={estimatedTime}
                  />
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleDecrypt}
                  disabled={status === "processing"}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold text-white transition-all ${
                    status === "processing"
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
                  }`}
                >
                  {status === "processing" ? "Decrypting..." : "🔓 Decrypt PDF"}
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-6 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Decrypt PDF</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Upload your password-protected PDF file</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Enter the password used to protect the PDF</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Click "Decrypt PDF" to remove the protection</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>Download the unprotected PDF file</span>
            </li>
          </ol>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                Can I decrypt a PDF without knowing the password?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                No, you must know the correct password to decrypt a PDF. This tool removes the password 
                protection but cannot bypass or crack the encryption. If you've forgotten your password, 
                you'll need to try to recover it through other means.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                What's the difference between user and owner password?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                If the PDF was encrypted with both passwords, you typically need the <strong>owner password</strong> 
                to remove all restrictions. The <strong>user password</strong> (open password) only allows viewing. 
                Try both if you're not sure which one was used.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                Is my PDF file safe during decryption?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                Yes! All processing happens entirely in your browser using JavaScript. 
                Your PDF file and password are never sent to any server. This ensures maximum security and privacy.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                Will the decrypted PDF have the same quality?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                Yes, the decrypted PDF will have exactly the same content, formatting, and quality as the original. 
                Only the password protection is removed.
              </p>
            </details>
          </div>
        </div>

        {/* Related tools */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/pdf-encrypt/"
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="text-2xl mb-2">🔒</div>
              <div className="font-medium text-gray-900">PDF Encrypt</div>
            </a>
            <a
              href="/merge-pdf/"
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="text-2xl mb-2">🔗</div>
              <div className="font-medium text-gray-900">Merge PDF</div>
            </a>
            <a
              href="/compress-pdf/"
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="text-2xl mb-2">🗜️</div>
              <div className="font-medium text-gray-900">Compress PDF</div>
            </a>
            <a
              href="/split-pdf/"
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="text-2xl mb-2">✂️</div>
              <div className="font-medium text-gray-900">Split PDF</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
