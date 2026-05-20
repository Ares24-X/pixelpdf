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
        img.onerror = () => reject(new Error(`无法加载图片: ${file.name}`));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error(`无法读取文件: ${file.name}`));
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = useCallback(async (files: FileList | File[]) => {
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    const validFiles = Array.from(files).filter((f) => validTypes.includes(f.type));

    if (validFiles.length === 0) {
      setStatus("error");
      setMessage("请选择 JPG、PNG 或 WebP 格式的图片");
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
      setMessage(err instanceof Error ? err.message : "加载图片失败");
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
    setMessage("正在初始化...");

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
      setEstimatedTime(`预计需要 ${estimatedSeconds} 秒`);

      for (let i = 0; i < images.length; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        setMessage(`正在处理第 ${i + 1} 张图片，共 ${images.length} 张...`);
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
        setEstimatedTime(`剩余约 ${remainingSeconds} 秒`);
      }

      setProgress(100);
      setMessage("正在生成 PDF 文件...");
      setStatus("complete");

      const pdfBlob = pdf.output("blob");
      saveAs(pdfBlob, "images.pdf");

      setMessage(`PDF 生成完成！包含 ${images.length} 张图片`);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(`转换失败: ${err instanceof Error ? err.message : "未知错误"}`);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">图片转 PDF</h1>
          <p className="text-gray-600">将多张图片合并为一个 PDF 文件，支持 JPG、PNG、WebP 格式</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 上传区域 */}
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
              点击或拖拽图片到此处
            </p>
            <p className="text-gray-400 text-sm mt-1">
              支持 JPG、PNG、WebP 格式，可多选
            </p>
          </div>

          {/* 图片列表 */}
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
                    移除
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* 进度条 */}
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

          {/* 转换按钮 */}
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
              ? "正在转换..."
              : `生成 PDF（${images.length} 张图片）`}
          </button>

          {/* 结果信息 */}
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
