import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "如何免费在线给PDF打码脱敏，避免隐私泄露",
  description: "教你安全遮盖PDF里的姓名、账号、合同信息和截图内容。重点讲清楚真正脱敏和黑框遮盖的区别。",
  keywords: "PDF打码, PDF脱敏, 在线PDF编辑, PDF隐私, 删除PDF敏感信息",
};

export default function ZhRedactPDFOnlineFreeGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-slate max-w-none">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
          <span className="mx-2">/</span>
          <span>PDF脱敏指南</span>
          <span className="ml-4">
            <Link href="/blog/redact-pdf-online-free" className="text-blue-500 text-xs">🇺🇸 English</Link>
          </span>
        </nav>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          如何免费在线给PDF打码脱敏，避免隐私泄露
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          真正安全的PDF脱敏，不是画一个黑框盖住文字，而是把原来的文字或图片信息删掉，再把文件扁平化。只盖黑框很危险，别人有时还能复制下面的文字，或者从PDF图层里恢复出来。
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <p className="text-red-800 font-semibold mb-2">先记住一句话</p>
          <p className="text-red-700">
            PDF里有身份证、银行卡、客户合同、学生资料、病历信息时，发出去之前必须验证。打开最终文件，搜索被遮掉的词，再试着复制黑框区域。搜得到、复制得到，就说明没脱敏干净。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">脱敏和遮盖不是一回事</h2>
        <p className="text-slate-700 mb-4">
          脱敏是把敏感内容真正删除。遮盖只是视觉上看不见，底层内容可能还在。你发合同、发账单、交学校表格时，差别就在这里。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-3 text-left">做法</th>
                <th className="border border-slate-300 px-4 py-3 text-left">肉眼看不见？</th>
                <th className="border border-slate-300 px-4 py-3 text-left">底层删掉了？</th>
                <th className="border border-slate-300 px-4 py-3 text-left">适合场景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-3">画黑色矩形</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">是</td>
                <td className="border border-slate-300 px-4 py-3 text-red-600">通常没有</td>
                <td className="border border-slate-300 px-4 py-3">内部草稿</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3">导出成图片后再生成PDF</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">是</td>
                <td className="border border-slate-300 px-4 py-3 text-yellow-600">多数情况下可以</td>
                <td className="border border-slate-300 px-4 py-3">普通表格、截图</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3">真正脱敏流程</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">是</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">是</td>
                <td className="border border-slate-300 px-4 py-3">合同、证件、财务文件</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5步安全处理PDF脱敏</h2>
        <div className="space-y-6 mb-8">
          {[
            ["先复制一份", "原文件别动。复制一份出来操作，遮错了还能退回去。"],
            ["列出要删的信息", "姓名、电话、地址、签名、二维码、订单号、账号、条形码，都可能泄露信息。"],
            ["逐页检查", "同一个名字可能出现在页眉、页脚、批注和附件页。漏一个位置，整份文件就不安全。"],
            ["导出或扁平化", "最终PDF不要保留可编辑文字层和批注层。"],
            ["发送前验证", "搜索被删的词，复制黑框区域，检查文档属性。还能搜到，就重新处理。"],
          ].map(([title, body], index) => (
            <div className="flex gap-4" key={title}>
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-slate-600">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">最容易漏掉的地方</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
          <li><strong>元数据：</strong>PDF属性里可能有作者、软件名、创建时间。</li>
          <li><strong>OCR文字层：</strong>OCR就是把扫描图片识别成文字。肉眼看到的是图片，背后可能有可复制文字。</li>
          <li><strong>书签：</strong>书签标题里也可能有客户名、项目名。</li>
          <li><strong>文件名：</strong>文件内容脱敏了，但文件名叫“某某客户诉讼材料.pdf”，一样泄露。</li>
          <li><strong>二维码和条形码：</strong>里面可能藏着订单号、付款信息、链接。</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">PixelPDF能帮你做什么</h2>
        <p className="text-slate-700 mb-4">
          PixelPDF适合做浏览器里的PDF处理，不用装软件。涉及隐私文件时，优先选本地浏览器处理的工具，文件留在你自己的电脑上，不传到陌生服务器。
        </p>
        <p className="text-slate-700 mb-8">
          文件太大时，可以先用 <Link href="/zh/compress-pdf" className="text-blue-600 underline">PixelPDF压缩PDF</Link> 减小体积，或者用 <Link href="/zh/split-pdf" className="text-blue-600 underline">拆分PDF</Link> 只处理关键页面。
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">准备处理PDF？</h2>
          <p className="mb-6 text-blue-100">压缩、拆分、旋转、转换PDF，都可以直接在浏览器里完成。</p>
          <Link href="/zh" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            打开免费PDF工具
          </Link>
        </div>
      </article>
    </div>
  );
}
