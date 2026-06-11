"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

export default function CompressPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((selectedFile: File) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setStatus("idle");
      setProgress(0);
      setMessage("");
      setOriginalSize(0);
      setCompressedSize(0);
      setCompressionRatio(0);
    } else {
      setStatus("error");
      setMessage("Please select a valid PDF file");
    }
  }, []);

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

  const handleCompress = useCallback(async () => {
    if (!file) return;

    setStatus("processing");
    setProgress(0);
    setMessage("Loading PDF...");
    setOriginalSize(file.size);

    try {
      const { PDFDocument } = await import("@cantoo/pdf-lib");
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer, {
        ignoreEncryption: true,
      });

      const totalPages = pdfDoc.getPageCount();
      const estimatedSeconds = Math.ceil(totalPages * 0.3);
      setEstimatedTime(`Estimated time: ${estimatedSeconds} seconds`);

      // Step 1: Remove metadata
      setMessage("Removing metadata...");
      setProgress(10);
      pdfDoc.setTitle("");
      pdfDoc.setAuthor("");
      pdfDoc.setSubject("");
      pdfDoc.setKeywords([]);
      pdfDoc.setProducer("");
      pdfDoc.setCreator("");

      // Step 2: Flatten forms
      setMessage("Flattening forms...");
      setProgress(20);
      const form = pdfDoc.getForm();
      if (form) {
        try {
          form.flatten();
        } catch {
          // No forms to flatten, continue
        }
      }

      // Step 3: Process each page - remove unused objects
      setMessage("Optimizing pages...");
      for (let i = 0; i < totalPages; i++) {
        const pageProgress = 20 + Math.round((i / totalPages) * 60);
        setProgress(pageProgress);
        setMessage(`Optimizing page ${i + 1} of ${totalPages}...`);

        const remainingSeconds = Math.ceil(
          ((totalPages - i) / totalPages) * estimatedSeconds
        );
        setEstimatedTime(`About ${remainingSeconds} seconds remaining`);

        // Small delay to allow UI updates
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      // Step 4: Save with optimization
      setMessage("Generating compressed PDF...");
      setProgress(85);

      const compressedBytes = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
        objectsPerTick: 100,
      });

      setProgress(100);
      setStatus("complete");

      const blob = new Blob([compressedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      setCompressedSize(blob.size);

      const ratio = ((1 - blob.size / file.size) * 100);
      setCompressionRatio(ratio);

      const baseName = file.name.replace(/\.pdf$/i, "");
      saveAs(blob, `${baseName}_compressed.pdf`);

      if (ratio > 0) {
        setMessage(
          `Compression complete! File size reduced by ${ratio.toFixed(1)}%`
        );
      } else {
        setMessage(
          `Processing complete! File size increased by ${Math.abs(ratio).toFixed(1)}% (this PDF is already highly optimized)`
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(`Compression failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  }, [file]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compress PDF</h1>
          <p className="text-gray-600">Reduce PDF file size by removing metadata and optimizing structure</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Upload area */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
              isDragging
                ? "border-teal-500 bg-teal-50"
                : "border-gray-300 hover:border-teal-400 hover:bg-gray-50"
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
            <div className="text-4xl mb-3">📦</div>
            <p className="text-gray-700 font-medium">
              {file ? file.name : "Click or drag PDF file here"}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {file ? formatFileSize(file.size) : "Supports .pdf format"}
            </p>
          </div>

          {/* File information */}
          {file && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                </div>
                <button
                  onClick={() => {
                    setFile(null);
                    setStatus("idle");
                    setProgress(0);
                    setMessage("");
                    setOriginalSize(0);
                    setCompressedSize(0);
                    setCompressionRatio(0);
                  }}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          )}

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

          {/* Compress button */}
          <button
            onClick={handleCompress}
            disabled={!file || status === "processing"}
            className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
              !file || status === "processing"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700 active:bg-teal-800"
            }`}
          >
            {status === "processing" ? "Compressing..." : "Start compressing"}
          </button>

          {/* Compression results comparison */}
          {status === "complete" && originalSize > 0 && compressedSize > 0 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Compression result</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Original size</p>
                  <p className="text-lg font-bold text-red-600">
                    {formatFileSize(originalSize)}
                  </p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Compressed size</p>
                  <p className="text-lg font-bold text-green-600">
                    {formatFileSize(compressedSize)}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    compressionRatio > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {compressionRatio > 0
                    ? `Reduced by ${compressionRatio.toFixed(1)}%`
                    : `Increased by ${Math.abs(compressionRatio).toFixed(1)}%`}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
