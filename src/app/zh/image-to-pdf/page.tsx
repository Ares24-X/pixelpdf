import Link from "next/link";

export default function ZhToolPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">图片转PDF - 在线图片合成PDF</h1>
      <p className="text-lg text-slate-600 mb-8">此工具的中文界面正在开发中。请先使用英文版：</p>
      <Link href="/image-to-pdf" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
        🇺🇸 使用英文版
      </Link>
    </div>
  );
}
