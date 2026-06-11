"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

interface ImageFile {
  file: File;
  preview: string;
  width: number;
  height: number;
}

export default function ImageToPdfPage() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadImageDimensions = (file: File): Promise<{ width: number; height: number; preview: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          resolve({
            width: img.width,
            height: img.height,
            preview: e.target?.result as string,
          });
        };
        img.onerror = () => reject(new Error(`Unable to load image: ${file.name}`));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error(`Unable to read file: ${file.name}`));
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = useCallback(async (files: FileList | File[]) => {
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    const validFiles = Array.from(files).filter((f) => validTypes.includes(f.type));

    if (validFiles.length === 0) {
      setStatus("error");
      setMessage("Please select JPG, PNG, or WebP images");
      return;
    }

    try {
      const loadedImages: ImageFile[] = [];
      for (const f of validFiles) {
        const dims = await loadImageDimensions(f);
        loadedImages.push({ file: f, ...dims });
      }
      setImages((prev) => [...prev, ...loadedImages]);
      setStatus("idle");
      setProgress(0);
      setMessage("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to load image");
    }
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

  const removeImage = useCallback((index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleConvert = useCallback(async () => {
    if (images.length === 0) return;

    setStatus("processing");
    setProgress(0);
    setMessage("Initializing...");

    try {
      const jsPDF = (await import("jspdf")).default;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const usableWidth = pageWidth - margin * 2;
      const usableHeight = pageHeight - margin * 2;

      const estimatedSeconds = Math.ceil(images.length * 0.3);
      setEstimatedTime(`Estimated time: ${estimatedSeconds} seconds`);

      for (let i = 0; i < images.length; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        setMessage(`Processing image ${i + 1} of ${images.length}...`);
        setProgress(Math.round((i / images.length) * 100));

        const img = images[i];
        const imgAspect = img.width / img.height;
        const pageAspect = usableWidth / usableHeight;

        let drawWidth: number;
        let drawHeight: number;
        let x: number;
        let y: number;

        if (imgAspect > pageAspect) {
          drawWidth = usableWidth;
          drawHeight = usableWidth / imgAspect;
          x = margin;
          y = margin + (usableHeight - drawHeight) / 2;
        } else {
          drawHeight = usableHeight;
          drawWidth = usableHeight * imgAspect;
          x = margin + (usableWidth - drawWidth) / 2;
          y = margin;
        }

        const format = img.file.type === "image/png" ? "PNG" : "JPEG";
        pdf.addImage(img.preview, format, x, y, drawWidth, drawHeight);

        const remainingSeconds = Math.ceil((images.length - i - 1) * 0.3);
        setEstimatedTime(`About ${remainingSeconds} seconds remaining`);
      }

      setProgress(100);
      setMessage("Generating PDF file...");
      setStatus("complete");

      const pdfBlob = pdf.output("blob");
      saveAs(pdfBlob, "images.pdf");

      setMessage(`PDF generated! ${images.length} images included`);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(`Conversion failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  }, [images]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Image to PDF</h1>
          <p className="text-gray-600">Combine multiple images into one PDF file. Supports JPG, PNG, and WebP.</p>
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
                ? "border-green-500 bg-green-50"
                : "border-gray-300 hover:border-green-400 hover:bg-gray-50"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={(e) => {
                if (e.target.files) handleFileSelect(e.target.files);
              }}
              className="hidden"
            />
            <div className="text-4xl mb-3">🖼️</div>
            <p className="text-gray-700 font-medium">
              Click or drag images here
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Supports JPG, PNG, and WebP. Multiple files allowed.
            </p>
          </div>

          {/* Image list */}
          {images.length > 0 && (
            <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <img
                    src={img.preview}
                    alt={img.file.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {img.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {img.width} x {img.height} · {formatFileSize(img.file.size)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeImage(index)}
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

          {/* Convert button */}
          <button
            onClick={handleConvert}
            disabled={images.length === 0 || status === "processing"}
            className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
              images.length === 0 || status === "processing"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 active:bg-green-800"
            }`}
          >
            {status === "processing"
              ? "Converting..."
              : `Generate PDF (${images.length} images)`}
          </button>

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
