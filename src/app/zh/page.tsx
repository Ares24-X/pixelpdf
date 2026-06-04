import Link from "next/link";

const tools = [
  { href: "/zh/pdf-to-jpg", icon: "🖼️", name: "PDF转JPG", desc: "将PDF页面转换为高质量JPG图片，支持批量转换。" },
  { href: "/zh/image-to-pdf", icon: "📸", name: "图片转PDF", desc: "将多张图片合并为一个PDF文档，支持JPG/PNG格式。" },
  { href: "/zh/merge-pdf", icon: "🔗", name: "合并PDF", desc: "将多个PDF文件合并为一个文档，支持自定义排序。" },
  { href: "/zh/split-pdf", icon: "✂️", name: "拆分PDF", desc: "按页数或页码范围拆分PDF文件，灵活控制。" },
  { href: "/zh/compress-pdf", icon: "📦", name: "压缩PDF", desc: "减小PDF文件大小，保持最佳质量和体积平衡。" },
  { href: "/zh/rotate-pdf", icon: "🔄", name: "旋转PDF", desc: "旋转PDF页面方向，支持90°/180°/270°旋转。" },
  { href: "/zh/pdf-encrypt", icon: "🔒", name: "PDF加密", desc: "为PDF文件添加密码保护，防止未授权访问。" },
  { href: "/zh/pdf-decrypt", icon: "🔓", name: "PDF解密", desc: "移除PDF文件的密码保护，快速解除加密。" },
];

export default function ZhHomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-slate-900">
            免费在线<span className="text-blue-600">PDF工具</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            所有处理均在浏览器本地完成，你的文件不会上传到任何服务器。100%免费，无需注册。
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/zh/pdf-to-jpg" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              开始使用
            </Link>
            <Link href="/zh/blog" className="px-6 py-3 border border-slate-300 rounded-lg hover:border-blue-500 text-slate-700 font-medium">
              浏览教程
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-blue-600">🇺🇸 English</Link>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">八大PDF工具</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map(t => (
              <Link key={t.href} href={t.href} className="block p-6 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <span className="text-3xl">{t.icon}</span>
                <h3 className="text-lg font-semibold mt-3 text-slate-900">{t.name}</h3>
                <p className="text-slate-600 text-sm mt-2">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
