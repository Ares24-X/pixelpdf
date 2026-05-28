"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

type RotationAngle = 90 | 180 | 270;

export default function RotatePdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [angle, setAngle] = useState<RotationAngle>(90);
  const [pageMode, setPageMode] = useState<"all" | "specific">("all");
  const [specificPages, setSpecificPages] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(async (selectedFile: File) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setStatus("idle");
      setProgress(0);
      setMessage("");

      try {
        const { PDFDocument } = await import("@cantoo/pdf-lib");
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        setTotalPages(pdf.getPageCount());
      } catch {
        setStatus("error");
        setMessage("无法读取 PDF 文件");
      }
    } else {
      setStatus("error");
      setMessage("请选择有效的 PDF 文件");
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

  const parsePageNumbers = (input: string, maxPage: number): Set<number> => {
    const pages = new Set<number>();
    const parts = input.split(",").map((s) => s.trim()).filter(Boolean);

    for (const part of parts) {
      if (part.includes("-")) {
        const [startStr, endStr] = part.split("-").map((s) => s.trim());
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);

        if (isNaN(start) || isNaN(end) || start < 1 || end > maxPage || start > end) {
          throw new Error(`无效的页码范围: "${part}"。有效页码范围: 1-${maxPage}`);
        }

        for (let i = start; i <= end; i++) {
          pages.add(i - 1);
        }
      } else {
        const page = parseInt(part, 10);
        if (isNaN(page) || page < 1 || page > maxPage) {
          throw new Error(`无效的页码: "${part}"。有效页码范围: 1-${maxPage}`);
        }
        pages.add(page - 1);
      }
    }

    return pages;
  };

  const handleRotate = useCallback(async () => {
    if (!file) return;

    if (pageMode === "specific" && !specificPages.trim()) {
      setStatus("error");
      setMessage("请输入要旋转的页码");
      return;
    }

    setStatus("processing");
    setProgress(0);
    setMessage("正在加载 PDF...");

    try {
      const { PDFDocument, degrees } = await import("@cantoo/pdf-lib");
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const pages = pdfDoc.getPages();
      const totalPagesCount = pages.length;

      let targetPages: Set<number>;
      if (pageMode === "all") {
        targetPages = new Set(pages.map((_, i) => i));
      } else {
        targetPages = parsePageNumbers(specificPages, totalPagesCount);
      }

      const estimatedSeconds = Math.ceil(targetPages.size * 0.1);
      setEstimatedTime(`预计需要 ${estimatedSeconds} 秒`);

      let processedCount = 0;
      for (const pageIndex of targetPages) {
        processedCount++;
        setMessage(
          `正在旋转第 ${pageIndex + 1} 页（${processedCount}/${targetPages.size}）...`
        );
        setProgress(Math.round((processedCount / targetPages.size) * 90));

        const page = pages[pageIndex];
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + angle));

        const remainingSeconds = Math.ceil(
          ((targetPages.size - processedCount) / targetPages.size) * estimatedSeconds
        );
        setEstimatedTime(`剩余约 ${remainingSeconds} 秒`);
      }

      setMessage("正在生成旋转后的 PDF...");
      setProgress(95);

      const rotatedBytes = await pdfDoc.save();
      setProgress(100);
      setStatus("complete");

      const blob = new Blob([rotatedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const baseName = file.name.replace(/\.pdf$/i, "");
      saveAs(blob, `${baseName}_rotated_${angle}deg.pdf`);

      setMessage(
        `旋转完成！已旋转 ${targetPages.size} 页（${angle}°）`
      );
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(`旋转失败: ${err instanceof Error ? err.message : "未知错误"}`);
    }
  }, [file, angle, pageMode, specificPages]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const angles: RotationAngle[] = [90, 180, 270];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">旋转 PDF</h1>
          <p className="text-gray-600">旋转 PDF 页面，支持全部页面或指定页面</p>
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
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
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
            <div className="text-4xl mb-3">🔄</div>
            <p className="text-gray-700 font-medium">
              {file ? file.name : "点击或拖拽 PDF 文件到此处"}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {file
                ? `${formatFileSize(file.size)} · ${totalPages} 页`
                : "支持 .pdf 格式"}
            </p>
          </div>

          {/* 文件信息 */}
          {file && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)} · {totalPages} 页
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFile(null);
                    setTotalPages(0);
                    setStatus("idle");
                    setProgress(0);
                    setMessage("");
                  }}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  移除
                </button>
              </div>
            </div>
          )}

          {/* 旋转角度选择 */}
          {file && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                旋转角度
              </label>
              <div className="flex gap-3">
                {angles.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAngle(a)}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                      angle === a
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {a}°
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 页面范围选择 */}
          {file && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                旋转范围
              </label>
              <div className="flex gap-3 mb-3">
                <button
                  onClick={() => setPageMode("all")}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    pageMode === "all"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  全部页面
                </button>
                <button
                  onClick={() => setPageMode("specific")}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    pageMode === "specific"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  指定页面
                </button>
              </div>
              {pageMode === "specific" && (
                <div>
                  <input
                    type="text"
                    value={specificPages}
                    onChange={(e) => setSpecificPages(e.target.value)}
                    placeholder="例如: 1, 3, 5-7"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    有效页码范围: 1-{totalPages}
                  </p>
                </div>
              )}
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

          {/* 旋转按钮 */}
          <button
            onClick={handleRotate}
            disabled={!file || status === "processing"}
            className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
              !file || status === "processing"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
            }`}
          >
            {status === "processing" ? "正在旋转..." : "开始旋转"}
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
