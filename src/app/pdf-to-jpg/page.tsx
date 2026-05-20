"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

export default function PdfToJpgPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((selectedFile: File) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setStatus("idle");
      setProgress(0);
      setMessage("");
      setEstimatedTime("");
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

  const handleConvert = useCallback(async () => {
    if (!file) return;

    setStatus("processing");
    setProgress(0);
    setMessage("正在加载 PDF...");

    try {
      const pdfjsLib = await import("pdfjs-dist");
      // Disable worker for static export - use fake worker
      pdfjsLib.GlobalWorkerOptions.workerSrc = "data:text/javascript;base64,";

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;
      setPageCount(totalPages);

      const estimatedSeconds = Math.ceil(totalPages * 0.5);
      setEstimatedTime(`预计需要 ${estimatedSeconds} 秒`);

      const imageUrls: string[] = [];

      for (let i = 1; i <= totalPages; i++) {
        setMessage(`正在渲染第 ${i} 页，共 ${totalPages} 页...`);
        setProgress(Math.round(((i - 1) / totalPages) * 100));

        const page = await pdf.getPage(i);
        const scale = 2;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;

        await page.render({
          canvasContext: ctx,
          viewport: viewport,
          canvas: canvas,
        } as any).promise;

        const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
        imageUrls.push(dataUrl);

        const remainingSeconds = Math.ceil((totalPages - i) * 0.5);
        setEstimatedTime(`剩余约 ${remainingSeconds} 秒`);
      }

      setProgress(100);
      setMessage(`转换完成！共 ${totalPages} 页，正在下载...`);
      setStatus("complete");

      const baseName = file.name.replace(/\.pdf$/i, "");

      for (let i = 0; i < imageUrls.length; i++) {
        const response = await fetch(imageUrls[i]);
        const blob = await response.blob();
        saveAs(blob, `${baseName}_page_${i + 1}.jpg`);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      setMessage(`全部 ${totalPages} 页已下载完成`);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(`转换失败: ${err instanceof Error ? err.message : "未知错误"}`);
    }
  }, [file]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF 转 JPG</h1>
          <p className="text-gray-600">将 PDF 文件的每一页转换为高质量的 JPG 图片</p>
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
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
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
              {file ? file.name : "点击或拖拽 PDF 文件到此处"}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {file ? formatFileSize(file.size) : "支持 .pdf 格式"}
            </p>
          </div>

          {/* 文件信息 */}
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
                    setPageCount(0);
                  }}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  移除
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

          {/* 转换按钮 */}
          <button
            onClick={handleConvert}
            disabled={!file || status === "processing"}
            className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
              !file || status === "processing"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            }`}
          >
            {status === "processing" ? "正在转换..." : "开始转换"}
          </button>

          {/* 结果信息 */}
          {status === "complete" && pageCount > 0 && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 text-sm">
                成功转换 {pageCount} 页，所有 JPG 图片已开始下载。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
