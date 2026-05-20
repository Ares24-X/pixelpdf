"use client";

import { useState, useCallback, useRef } from "react";
import ProgressBar from "@/components/ProgressBar";

interface SplitResult {
  fileName: string;
  blob: Blob;
  pageCount: number;
  url: string;
}

function parsePageRanges(input: string, maxPage: number): number[][] {
  const ranges: number[][] = [];
  
  // Normalize input: replace Chinese comma, full-width comma, and multiple spaces
  const normalizedInput = input
    .replace(/，/g, ",") // Chinese comma
    .replace(/、/g, ",") // Chinese enumeration comma
    .replace(/\s+/g, " "); // Multiple spaces to single space
  
  const parts = normalizedInput.split(",").map((s) => s.trim()).filter(Boolean);

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
        pages.push(i - 1);
      }
      ranges.push(pages);
    } else {
      const page = parseInt(part, 10);
      if (isNaN(page) || page < 1 || page > maxPage) {
        throw new Error(`无效的页码: "${part}"。有效页码范围: 1-${maxPage}`);
      }
      ranges.push([page - 1]);
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
  const [parsedRanges, setParsedRanges] = useState<number[][]>([]);
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
      setParsedRanges(ranges);

      if (ranges.length === 0) {
        throw new Error("没有有效的页码范围");
      }

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
        const url = URL.createObjectURL(blob);

        const rangeStr = ranges[i]
          .map((p) => p + 1)
          .join("-");
        splitResults.push({
          fileName: `${baseName}_pages_${rangeStr}.pdf`,
          blob,
          pageCount: ranges[i].length,
          url,
        });

        const remainingSeconds = Math.ceil((ranges.length - i - 1) * 0.5);
        setEstimatedTime(`剩余约 ${remainingSeconds} 秒`);
      }

      setProgress(100);
      setMessage("拆分完成！");
      setStatus("complete");
      setResults(splitResults);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(
        `拆分失败: ${err instanceof Error ? err.message : "未知错误"}`
      );
    }
  }, [file, pageRanges]);

  const handleDownload = useCallback((result: SplitResult) => {
    const link = document.createElement("a");
    link.href = result.url;
    link.download = result.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDownloadAll = useCallback(() => {
    results.forEach((result, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = result.url;
        link.download = result.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });
  }, [results]);

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
                    setParsedRanges([]);
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
                onChange={(e) => {
                  const value = e.target.value;
                  setPageRanges(value);
                  // Real-time preview
                  if (value.trim()) {
                    try {
                      const ranges = parsePageRanges(value, totalPages);
                      setParsedRanges(ranges);
                    } catch {
                      setParsedRanges([]);
                    }
                  } else {
                    setParsedRanges([]);
                  }
                }}
                placeholder="例如: 1-3, 5, 7-10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                使用逗号分隔多个范围，例如 &quot;1-3, 5, 7-10&quot; 将生成 3 个文件
              </p>
              <p className="text-xs text-gray-400 mt-1">
                当前 PDF 共 {totalPages} 页，有效页码范围: 1-{totalPages}
              </p>
              
              {/* 快速预设按钮 */}
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setPageRanges(`1-${Math.ceil(totalPages/2)}`)}
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                >
                  前半部分 (1-{Math.ceil(totalPages/2)})
                </button>
                <button
                  onClick={() => setPageRanges(`${Math.ceil(totalPages/2)+1}-${totalPages}`)}
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                >
                  后半部分 ({Math.ceil(totalPages/2)+1}-{totalPages})
                </button>
                <button
                  onClick={() => {
                    const ranges = [];
                    for (let i = 1; i <= totalPages; i++) {
                      ranges.push(i);
                    }
                    setPageRanges(ranges.join(","));
                  }}
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                >
                  每页单独 (共{totalPages}个文件)
                </button>
              </div>
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

          {/* 解析预览 - 实时显示 */}
          {parsedRanges.length > 0 && status === "idle" && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 font-medium">
                ✓ 将生成 {parsedRanges.length} 个文件
              </p>
              <ul className="text-xs text-blue-600 mt-2 space-y-1">
                {parsedRanges.map((range, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-xs">
                      文件 {i+1}
                    </span>
                    <span>第 {range.map(p => p+1).join("-")} 页 ({range.length}页)</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 结果列表 - 文件卡片展示 */}
          {status === "complete" && results.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  拆分结果 ({results.length} 个文件)
                </h3>
                <button
                  onClick={handleDownloadAll}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  下载全部
                </button>
              </div>
              
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {result.fileName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {result.pageCount} 页 · {formatFileSize(result.blob.size)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownload(result)}
                      className="ml-4 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors flex-shrink-0"
                    >
                      下载
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
