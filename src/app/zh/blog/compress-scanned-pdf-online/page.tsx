import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "如何在线压缩扫描PDF，别把页面压糊了",
  description: "扫描PDF太大时，按这个流程在线压缩。保留原件，选择合适压缩强度，检查签名、印章、小字和二维码。",
  keywords: "压缩扫描PDF,在线压缩PDF,扫描PDF太大,PDF压缩不模糊,扫描件压缩",
};

export default function ZhCompressScannedPdfOnlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12"><article className="prose prose-slate max-w-none">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/zh/blog" className="hover:text-blue-600">博客</Link><span className="mx-2">/</span><span>压缩扫描PDF</span><span className="ml-4"><Link href="/blog/compress-scanned-pdf-online" className="text-blue-500 text-xs">🇺🇸 English</Link></span></nav>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">如何在线压缩扫描PDF，别把页面压糊了</h1>
      <p className="text-lg text-slate-600 mb-6">扫描PDF最容易变大。手机扫10页，文件可能直接80MB，因为每一页本质上都是一张照片。压得太狠，上传是成功了，但签名、印章、小票金额、二维码全糊了。这个不划算。 [💬]</p>
      <p className="text-lg text-slate-600 mb-8">正确做法不是追求文件越小越好，而是在可读的前提下把体积降下来。</p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg"><p className="text-blue-800 font-semibold mb-2">推荐顺序</p><p className="text-blue-700">先保留原件，再用中等压缩。压完后重点检查签名、印章、小字、二维码，确认没糊再发送。</p></div>
      <h2>为什么扫描PDF特别大？</h2><p>普通PDF通常保存文字、字体和排版信息。扫描PDF保存的是页面图片。如果每页都是300DPI彩色照片，哪怕文件看起来只是黑白表格，体积也会很大。</p><p>压缩的本质是处理图片：降低图片质量、缩小分辨率、转灰度、删除隐藏扫描数据、重建PDF结构。这些操作没有绝对好坏，要看这份文件后面用来干什么。</p><p><strong>一句话：</strong>有签名、印章、条码、发票、证件、合同的扫描PDF，先保清晰，再谈变小。</p>
      <h2>按文件类型选压缩强度</h2><div className="overflow-x-auto mb-8"><table className="min-w-full border-collapse border border-slate-300"><thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-3 text-left">文件类型</th><th className="border border-slate-300 px-4 py-3 text-left">建议设置</th><th className="border border-slate-300 px-4 py-3 text-left">重点检查</th></tr></thead><tbody><tr><td className="border border-slate-300 px-4 py-3">发票、小票</td><td className="border border-slate-300 px-4 py-3">中等压缩，可转灰度</td><td className="border border-slate-300 px-4 py-3">税号、金额、二维码</td></tr><tr><td className="border border-slate-300 px-4 py-3">签署合同</td><td className="border border-slate-300 px-4 py-3">轻度到中等压缩</td><td className="border border-slate-300 px-4 py-3">签名、日期、印章</td></tr><tr><td className="border border-slate-300 px-4 py-3">课堂笔记</td><td className="border border-slate-300 px-4 py-3">中等或强压缩</td><td className="border border-slate-300 px-4 py-3">手写小字和图表</td></tr><tr><td className="border border-slate-300 px-4 py-3">图片类扫描</td><td className="border border-slate-300 px-4 py-3">缩小图片，别极限降质</td><td className="border border-slate-300 px-4 py-3">人脸、标签、细线</td></tr></tbody></table></div>
      <h2>操作步骤</h2><div className="space-y-6 mb-8">{[["复制原文件", "不要直接压唯一原件。先复制一份，压坏了还能回头。"], ["先选中等压缩", "别一上来选最小文件。中等压缩通常能让扫描PDF小40%-70%，清晰度还比较稳。"], ["不需要彩色就转灰度", "合同、表格、发票大多不需要彩色。转灰度能明显减小体积。"], ["超大文件先拆分", "一个120MB扫描件里如果有5个独立部分，先拆开压，再按需要合并。"], ["用100%缩放检查", "别只看第一页。重点看小字、签名、二维码、印章、淡色手写。"], ["保存清楚的文件名", "比如 application-scan-compressed-readable.pdf，避免和原始扫描件混在一起。"]].map(([title, body], index) => (<div className="flex gap-4" key={title}><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div><div><h3 className="font-semibold text-slate-900">{title}</h3><p className="text-slate-600">{body}</p></div></div>))}</div>
      <h2>常见错误</h2><ul><li><strong>每次都选最小文件。</strong>文件小了，但文字糊了，等于没用。</li><li><strong>覆盖原始扫描件。</strong>原件要留到对方确认文件可用为止。</li><li><strong>只检查第一页。</strong>扫描质量经常中途变化。</li><li><strong>没看上传限制。</strong>平台限制10MB，最好压到8-9MB，别卡边界。</li><li><strong>能上传就直接发。</strong>能上传不代表对方能看清。</li></ul>
      <h2>常见问题</h2><details className="border border-slate-200 rounded-lg p-4 mb-4" open><summary className="font-semibold cursor-pointer">扫描PDF能无损压缩吗？</summary><p className="mt-3">可以做到肉眼看不出明显损失，但图片型PDF总有极限。小字开始糊，就要降低压缩强度。</p></details><details className="border border-slate-200 rounded-lg p-4 mb-4"><summary className="font-semibold cursor-pointer">OCR应该在压缩前还是压缩后？</summary><p className="mt-3">如果需要搜索文字，尽量先OCR，再做最终压缩。压完后检查文字层是否还对得上页面。</p></details><details className="border border-slate-200 rounded-lg p-4"><summary className="font-semibold cursor-pointer">为什么压完还是很大？</summary><p className="mt-3">可能页数太多、图片分辨率太高、保留了彩色层或隐藏缩略图。能拆分就先拆分，能转灰度就转灰度。</p></details>
    </article></div>
  );
}
