"use client";

import React from "react";

interface ProgressBarProps {
  progress: number;
  status: "idle" | "processing" | "complete" | "error";
  message?: string;
  estimatedTime?: string;
}

export default function ProgressBar({
  progress,
  status,
  message,
  estimatedTime,
}: ProgressBarProps) {
  if (status === "idle") return null;

  const clampedProgress = Math.min(100, Math.max(0, progress));

  const barColor =
    status === "complete"
      ? "bg-emerald-500"
      : status === "error"
        ? "bg-red-500"
        : "bg-blue-500";

  const containerBorder =
    status === "complete"
      ? "border-emerald-200"
      : status === "error"
        ? "border-red-200"
        : "border-blue-200";

  const bgColor =
    status === "complete"
      ? "bg-emerald-50"
      : status === "error"
        ? "bg-red-50"
        : "bg-blue-50";

  const textColor =
    status === "complete"
      ? "text-emerald-700"
      : status === "error"
        ? "text-red-700"
        : "text-blue-700";

  const icon =
    status === "complete" ? (
      <svg
        className="w-4 h-4 text-emerald-500 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ) : status === "error" ? (
      <svg
        className="w-4 h-4 text-red-500 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : null;

  return (
    <div
      className={`w-full rounded-lg border ${containerBorder} ${bgColor} p-4 transition-all duration-300`}
    >
      {/* Status row */}
      <div className="flex items-center justify-between mb-2">
        <div className={`flex items-center gap-2 text-sm font-medium ${textColor}`}>
          {icon}
          <span>
            {status === "processing" && `Processing... ${Math.round(clampedProgress)}%`}
            {status === "complete" && "Complete!"}
            {status === "error" && (message || "An error occurred")}
          </span>
        </div>

        {status === "processing" && estimatedTime && (
          <span className="text-xs text-gray-500 tabular-nums">
            {estimatedTime} remaining
          </span>
        )}
      </div>

      {/* Progress track */}
      <div className="w-full h-2 bg-white/70 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out ${barColor} ${
            status === "processing" ? "animate-pulse" : ""
          }`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>

      {/* Error detail message (shown below bar when status is error and a message is provided) */}
      {status === "error" && message && (
        <p className="mt-2 text-xs text-red-600">{message}</p>
      )}
    </div>
  );
}
