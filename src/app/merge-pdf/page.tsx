"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

export default function MergePdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((selectedFiles: FileList | File[]) => {
    const pdfFiles = Array.from(selectedFiles).filter(
      (f) => f.type === "application/pdf"
    );

    if (pdfFiles.length === 0) {
      setStatus("error");
      setMessage("Please select a valid PDF file");
      return;
    }

    setFiles((prev) => [...prev, ...pdfFiles]);
    setStatus("idle");
    setProgress(0);
    setMessage("");
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files);
      }
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

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const moveFile = useCallback((fromIndex: number, toIndex: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      const [moved] = newFiles.splice(fromIndex, 1);
      newFiles.splice(toIndex, 0, moved);
      return newFiles;
    });
  }, []);

  const handleMerge = useCallback(async () => {
    if (files.length < 2) return;

    setStatus("processing");
    setProgress(0);
    setMessage("Initializing merge...");

    try {
      const { PDFDocument } = await import("@cantoo/pdf-lib");
      const mergedPdf = await PDFDocument.create();

      const estimatedSeconds = Math.ceil(files.length * 0.5);
      setEstimatedTime(`Estimated time: ${estimatedSeconds} seconds`);

      for (let i = 0; i < files.length; i++) {
        setMessage(`Merging file ${i + 1} of ${files.length}...`);
        setProgress(Math.round((i / files.length) * 100));

        const arrayBuffer = await files[i].arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        for (const page of copiedPages) {
          mergedPdf.addPage(page);
        }

        const remainingSeconds = Math.ceil((files.length - i - 1) * 0.5);
        setEstimatedTime(`About ${remainingSeconds} seconds remaining`);
      }

      setProgress(100);
      setMessage("Generating merged PDF...");
      setStatus("complete");

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      saveAs(blob, "merged.pdf");

      setMessage(`Merge complete! ${files.length} files merged`);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(`Merge failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  }, [files]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Merge PDF</h1>
          <p className="text-gray-600">Combine multiple PDF files into one. Drag to reorder.</p>
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
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300 hover:border-purple-400 hover:bg-gray-50"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              multiple
              onChange={(e) => {
                if (e.target.files) handleFileSelect(e.target.files);
              }}
              className="hidden"
            />
            <div className="text-4xl mb-3">📎</div>
            <p className="text-gray-700 font-medium">
              Click or drag PDF file here
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Supports multiple selections and repeated uploads
            </p>
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex flex-col gap-1 shrink-0">
                    <button
                      onClick={() => moveFile(index, index - 1)}
                      disabled={index === 0}
                      className="text-gray-400 hover:text-gray-700 disabled:opacity-30 text-xs"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => moveFile(index, index + 1)}
                      disabled={index === files.length - 1}
                      className="text-gray-400 hover:text-gray-700 disabled:opacity-30 text-xs"
                    >
                      ▼
                    </button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {index + 1}. {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700 text-sm shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
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

          {/* Merge button */}
          <button
            onClick={handleMerge}
            disabled={files.length < 2 || status === "processing"}
            className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
              files.length < 2 || status === "processing"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 active:bg-purple-800"
            }`}
          >
            {status === "processing"
              ? "Merging..."
              : `Merge ${files.length} files`}
          </button>

          {/* Tip */}
          {files.length === 1 && (
            <p className="text-center text-sm text-amber-600 mt-2">
              Please add at least 2 PDF files
            </p>
          )}

          {/* Result information */}
          {status === "complete" && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 text-sm">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
