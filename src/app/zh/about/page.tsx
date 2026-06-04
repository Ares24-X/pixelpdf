import Link from "next/link";

export default function ZhAboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate prose-lg">
      <h1>关于 PixelPDF</h1>
      <p><Link href="/about" className="text-blue-500 text-sm">🇺🇸 English</Link></p>
      <p>PixelPDF 是一组免费的浏览器端PDF工具，专为需要快速处理PDF文件的人设计。</p>
      <p><strong>隐私优先：</strong>所有处理均在你的浏览器中完成。文件不会上传到任何服务器，确保你的数据安全。</p>
      <h2>我们的工具</h2>
      <ul>
        <li>PDF转JPG / 图片转PDF</li>
        <li>合并PDF / 拆分PDF</li>
        <li>压缩PDF / 旋转PDF</li>
        <li>PDF加密 / PDF解密</li>
      </ul>
      <h2>技术栈</h2>
      <p>使用 Next.js 构建，Cloudflare Pages 全球部署，腾讯云国内镜像同步。</p>
    </div>
  );
}
