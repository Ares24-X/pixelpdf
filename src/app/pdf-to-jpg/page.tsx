"use client";

import { useState, useCallback, useRef } from "react";
import ProgressBar from "@/components/ProgressBar";

interface ConvertedImage {
  fileName: string;
  url: string;
  pageNumber: number;
}

export default function PdfToJpgPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState<ConvertedImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((selectedFile: File) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setStatus("idle");
      setProgress(0);
      setMessage("");
      setEstimatedTime("");
      setImages([]);
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
    setMessage("正在加载 PDF 库...");
    setImages([]);

    try {
      // Import pdfjs-dist
      const pdfjs = await import("pdfjs-dist");
      
      // Use worker from public directory
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

      setMessage("正在读取 PDF 文件...");
      const arrayBuffer = await file.arrayBuffer();
      
      setMessage("正在解析 PDF...");
      const pdf = await pdfjs.getDocument({ 
        data: arrayBuffer,
        useSystemFonts: true,
      }).promise;
      
      const totalPages = pdf.numPages;

      const estimatedSeconds = Math.ceil(totalPages * 2);
      setEstimatedTime(`预计需要 ${estimatedSeconds} 秒`);

      const convertedImages: ConvertedImage[] = [];
      const baseName = file.name.replace(/\.pdf$/i, "");

      for (let i = 1; i <= totalPages; i++) {
        setMessage(`正在转换第 ${i} 页，共 ${totalPages} 页...`);
        setProgress(Math.round(((i - 1) / totalPages) * 100));

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        
        // Fill white background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        await page.render({
          canvasContext: ctx,
          viewport: viewport,
          canvas: canvas,
        } as any).promise;
        
        const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
        convertedImages.push({
          fileName: `${baseName}_page_${i}.jpg`,
          url: dataUrl,
          pageNumber: i,
        });

        const remainingSeconds = Math.ceil((totalPages - i) * 2);
        setEstimatedTime(`剩余约 ${remainingSeconds} 秒`);
      }

      setProgress(100);
      setMessage(`转换完成！共 ${totalPages} 页`);
      setStatus("complete");
      setImages(convertedImages);
    } catch (err) {
      console.error("PDF conversion error:", err);
      setStatus("error");
      setMessage(`转换失败: ${err instanceof Error ? err.message : "未知错误"}`);
    }
  }, [file]);

  const handleDownload = useCallback((image: ConvertedImage) => {
    const link = document.createElement("a");
    link.href = image.url;
    link.download = image.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDownloadAll = useCallback(() => {
    images.forEach((image, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = image.url;
        link.download = image.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });
  }, [images]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
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
              {file ? `${formatFileSize(file.size)}` : "支持 .pdf 格式"}
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
                    setImages([]);
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

          {/* 结果列表 - 图片卡片展示 */}
          {status === "complete" && images.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  转换结果 ({images.length} 张图片)
                </h3>
                <button
                  onClick={handleDownloadAll}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  下载全部
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="aspect-[3/4] bg-gray-100 relative">
                      <img
                        src={image.url}
                        alt={`Page ${image.pageNumber}`}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        第 {image.pageNumber} 页
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-gray-600 truncate mb-2">
                        {image.fileName}
                      </p>
                      <button
                        onClick={() => handleDownload(image)}
                        className="w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        下载
                      </button>
                    </div>
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
