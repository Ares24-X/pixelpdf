"use client";

import { useState, useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "@/components/ProgressBar";

export default function PdfEncryptPage() {
  // 状态管理
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "complete" | "error">("idle");
  const [message, setMessage] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 加密选项
  const [userPassword, setUserPassword] = useState("");
  const [ownerPassword, setOwnerPassword] = useState("");
  const [allowPrinting, setAllowPrinting] = useState(true);
  const [allowCopying, setAllowCopying] = useState(false);
  const [allowModifying, setAllowModifying] = useState(false);

  // 文件选择处理
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

  // 拖拽处理
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

  // 核心加密逻辑
  const handleEncrypt = useCallback(async () => {
    if (!file) return;

    if (!userPassword && !ownerPassword) {
      setStatus("error");
      setMessage("Please enter at least one password");
      return;
    }

    setStatus("processing");
    setProgress(0);
    setMessage("Encrypting PDF...");
    setEstimatedTime("Calculating...");

    try {
      // 动态导入 pdf-lib
      const { PDFDocument } = await import("@cantoo/pdf-lib");

      setProgress(10);
      setMessage("Loading PDF file...");

      // 读取文件
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      setProgress(30);
      setMessage("Applying encryption...");

      // 加密选项
      const permissions = {
        printing: allowPrinting ? "lowResolution" : "none",
        copying: allowCopying,
        modifying: allowModifying,
        annotating: false,
        fillingForms: false,
        contentAccessibility: true,
        extractingContent: allowCopying,
        assembling: allowModifying,
        printingHighRes: allowPrinting ? "highResolution" : "none",
      };

      setProgress(50);
      setMessage("Saving encrypted PDF...");

      // 保存加密后的 PDF
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const saveOptions: any = {
        userPassword: userPassword || undefined,
        ownerPassword: ownerPassword || userPassword || undefined,
        permissions: permissions,
      };
      const pdfBytes = await pdfDoc.save(saveOptions);

      setProgress(80);
      setMessage("Preparing download...");

      // 创建 Blob 并下载
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const fileName = file.name.replace(".pdf", "-encrypted.pdf");
      saveAs(blob, fileName);

      setProgress(100);
      setStatus("complete");
      setMessage("PDF encrypted successfully!");
      setEstimatedTime("");
    } catch (err) {
      setStatus("error");
      setMessage(`Encryption failed: ${err instanceof Error ? err.message : "Unknown error"}`);
      setEstimatedTime("");
    }
  }, [file, userPassword, ownerPassword, allowPrinting, allowCopying, allowModifying]);

  // 重置状态
  const handleReset = useCallback(() => {
    setFile(null);
    setProgress(0);
    setStatus("idle");
    setMessage("");
    setEstimatedTime("");
    setUserPassword("");
    setOwnerPassword("");
    setAllowPrinting(true);
    setAllowCopying(false);
    setAllowModifying(false);
  }, []);

  // 文件大小格式化
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
            <span className="text-3xl">🔒</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF Encrypt</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Protect your PDF files with password encryption. All processing happens in your browser - your files never leave your device.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 上传区域 */}
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                isDragging
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 hover:border-red-400 hover:bg-gray-50"
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
                Click or drag PDF file here
              </p>
              <p className="text-gray-400 text-sm mt-1">Supports .pdf format, max 50MB</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* 文件信息 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
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

              {/* 加密选项 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span>🔐</span> Encryption Settings
                </h3>

                {/* 用户密码 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Open Password (User Password)
                  </label>
                  <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Password to open the PDF"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Users need this password to open and view the PDF
                  </p>
                </div>

                {/* 所有者密码 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner Password (Optional)
                  </label>
                  <input
                    type="password"
                    value={ownerPassword}
                    onChange={(e) => setOwnerPassword(e.target.value)}
                    placeholder="Password for full access"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Required to change permissions and restrictions
                  </p>
                </div>

                {/* 权限设置 */}
                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Permissions
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={allowPrinting}
                        onChange={(e) => setAllowPrinting(e.target.checked)}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-gray-700">Allow Printing</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={allowCopying}
                        onChange={(e) => setAllowCopying(e.target.checked)}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-gray-700">Allow Copying Text & Images</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={allowModifying}
                        onChange={(e) => setAllowModifying(e.target.checked)}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-gray-700">Allow Modifying Document</span>
                    </label>
                  </div>
                </div>
              </div>

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

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button
                  onClick={handleEncrypt}
                  disabled={status === "processing"}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold text-white transition-all ${
                    status === "processing"
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 active:bg-red-800"
                  }`}
                >
                  {status === "processing" ? "Encrypting..." : "🔒 Encrypt PDF"}
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

        {/* 使用说明 */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Encrypt PDF</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Upload your PDF file by clicking or dragging</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Set an open password (required to view the PDF)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Optionally set an owner password for full control</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>Choose permissions (printing, copying, modifying)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span>Click "Encrypt PDF" and download the protected file</span>
            </li>
          </ol>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                What is the difference between user and owner password?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                The <strong>user password</strong> (open password) is required to open and view the PDF. 
                The <strong>owner password</strong> is required to change permissions, remove restrictions, 
                or modify the document. If you only set a user password, anyone with that password can view 
                but not modify the PDF.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                Is my PDF file safe during encryption?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                Yes! All processing happens entirely in your browser using JavaScript. 
                Your PDF file is never uploaded to any server. This ensures maximum security and privacy.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                What encryption algorithm is used?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                PDF encryption uses AES (Advanced Encryption Standard) with 128-bit or 256-bit keys, 
                which is the industry standard for secure document protection.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-gray-900 font-medium">
                Can I remove the password later?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="pt-2 text-gray-600">
                Yes, you can use our <a href="/pdf-decrypt/" className="text-red-600 hover:underline">PDF Decrypt</a> tool 
                to remove passwords from protected PDFs, provided you have the correct password.
              </p>
            </details>
          </div>
        </div>

        {/* 相关工具 */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/pdf-decrypt/"
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="text-2xl mb-2">🔓</div>
              <div className="font-medium text-gray-900">PDF Decrypt</div>
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
