"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

interface SplitResult {
  fileName: string;
  blob: Blob;
  pageCount: number;
}

function parsePageRanges(input: string, maxPage: number): number[][] {
  const ranges: number[][] = [];
  const parts = input.split(",").map((s) => s.trim()).filter(Boolean);

  for (const part of parts) {
    if (part.includes("-")) {
      const [startStr, endStr] = part.split("-").map((s) => s.trim());
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);

      if (isNaN(start) || isNaN(end) || start < 1 || end > maxPage || start > end) {
        throw new Error(`无效的页码范围: "${part}"。有效页码范围: 1-${maxPage}`);
      }

      const pages: number[] = [];
      for (let i = start; i <= end; i++) {
        pages.push(i - 1); // Convert to 0-indexed
      }
      ranges.push(pages);
    } else {
      const page = parseInt(part, 10);
      if (isNaN(page) || page < 1 || page > maxPage) {
        throw new Error(`无效的页码: "${part}"。有效页码范围: 1-${maxPage}`);
      }
      ranges.push([page - 1]); // Convert to 0-indexed
    }
  }

  return ranges;
}

export default function SplitPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pageRanges, setPageRanges] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [results, setResults] = useState<SplitResult[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    async (selectedFile: File) => {
      if (selectedFile && selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setResults([]);
        setStatus("idle");
        setProgress(0);
        setMessage("");

        try {
          const { PDFDocument } = await import("pdf-lib");
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
    },
    []
  );

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

  const handleSplit = useCallback(async () => {
    if (!file || !pageRanges.trim()) return;

    setStatus("processing");
    setProgress(0);
    setMessage("正在解析页码范围...");
    setResults([]);

    try {
      const { PDFDocument } = await import("pdf-lib");
      const arrayBuffer = await file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(arrayBuffer);

      const ranges = parsePageRanges(pageRanges, sourcePdf.getPageCount());

      const estimatedSeconds = Math.ceil(ranges.length * 0.5);
      setEstimatedTime(`预计需要 ${estimatedSeconds} 秒`);

      const splitResults: SplitResult[] = [];
      const baseName = file.name.replace(/\.pdf$/i, "");

      for (let i = 0; i < ranges.length; i++) {
        setMessage(
          `正在提取第 ${i + 1} 部分，共 ${ranges.length} 部分...`
        );
        setProgress(Math.round((i / ranges.length) * 100));

        const newPdf = await PDFDocument.create();
        const copiedPages = await newPdf.copyPages(sourcePdf, ranges[i]);

        for (const page of copiedPages) {
          newPdf.addPage(page);
        }

        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });

        const rangeStr = ranges[i]
          .map((p) => p + 1)
          .join("-");
        splitResults.push({
          fileName: `${baseName}_pages_${rangeStr}.pdf`,
          blob,
          pageCount: ranges[i].length,
        });

        const remainingSeconds = Math.ceil((ranges.length - i - 1) * 0.5);
        setEstimatedTime(`剩余约 ${remainingSeconds} 秒`);
      }

      setProgress(100);
      setMessage("正在下载拆分后的文件...");
      setStatus("complete");
      setResults(splitResults);

      for (const result of splitResults) {
        saveAs(result.blob, result.fileName);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      setMessage(`拆分完成！共生成 ${splitResults.length} 个文件`);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(
        `拆分失败: ${err instanceof Error ? err.message : "未知错误"}`
      );
    }
  }, [file, pageRanges]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">拆分 PDF</h1>
          <p className="text-gray-600">按页码范围拆分 PDF 文件</p>
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
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300 hover:border-orange-400 hover:bg-gray-50"
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
            <div className="text-4xl mb-3">✂️</div>
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
                  <p className="text-sm font-medium text-gray-700">
                    {file.name}
                  </p>
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
                    setResults([]);
                  }}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  移除
                </button>
              </div>
            </div>
          )}

          {/* 页码范围输入 */}
          {file && totalPages > 0 && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                页码范围
              </label>
              <input
                type="text"
                value={pageRanges}
                onChange={(e) => setPageRanges(e.target.value)}
                placeholder="例如: 1-3, 5, 7-10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                使用逗号分隔多个范围，例如 &quot;1-3, 5, 7-10&quot; 将生成 3 个文件
              </p>
              <p className="text-xs text-gray-400 mt-1">
                当前 PDF 共 {totalPages} 页，有效页码范围: 1-{totalPages}
              </p>
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

          {/* 拆分按钮 */}
          <button
            onClick={handleSplit}
            disabled={!file || !pageRanges.trim() || status === "processing"}
            className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
              !file || !pageRanges.trim() || status === "processing"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 active:bg-orange-800"
            }`}
          >
            {status === "processing" ? "正在拆分..." : "开始拆分"}
          </button>

          {/* 结果信息 */}
          {status === "complete" && results.length > 0 && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 text-sm font-medium mb-2">
                拆分完成！共生成 {results.length} 个文件：
              </p>
              <ul className="text-green-600 text-xs space-y-1">
                {results.map((r, i) => (
                  <li key={i}>
                    {r.fileName} ({r.pageCount} 页, {formatFileSize(r.blob.size)})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
