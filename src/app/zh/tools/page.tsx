import Link from "next/link";

const tools = [
  { href: "/zh/pdf-to-jpg", name: "PDF转JPG", desc: "将PDF页面转换为高质量JPG图片。" },
  { href: "/zh/image-to-pdf", name: "图片转PDF", desc: "将多张图片合并为PDF文档。" },
  { href: "/zh/merge-pdf", name: "合并PDF", desc: "将多个PDF文件合并为一个文档。" },
  { href: "/zh/split-pdf", name: "拆分PDF", desc: "按页数或页码拆分PDF文件。" },
  { href: "/zh/compress-pdf", name: "压缩PDF", desc: "减小PDF文件大小，保持质量。" },
  { href: "/zh/rotate-pdf", name: "旋转PDF", desc: "旋转PDF页面方向。" },
  { href: "/zh/pdf-encrypt", name: "PDF加密", desc: "为PDF文件添加密码保护。" },
  { href: "/zh/pdf-decrypt", name: "PDF解密", desc: "移除PDF文件的密码保护。" },
];

export default function ZhToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-slate-900 mb-4">PDF在线工具</h1>
      <p className="text-center text-slate-600 mb-4">全部免费，浏览器本地运行</p>
      <p className="text-center mb-12"><Link href="/tools" className="text-blue-500 text-sm">🇺🇸 English</Link></p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map(t => (
          <Link key={t.href} href={t.href} className="block p-6 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg">
            <h2 className="text-xl font-bold text-slate-900">{t.name}</h2>
            <p className="text-slate-600 mt-2">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
