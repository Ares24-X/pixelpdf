import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "大PDF怎么拆分成小文件，页码不乱不丢页",
  description: "教你把大PDF按页码、章节或上传限制拆成小文件，适合邮件发送、系统上传和只分享部分页面。",
  keywords: "拆分PDF, 大PDF拆分, 在线拆PDF, PDF太大, 提取PDF页面, PDF页码",
};

export default function ZhSplitPDFLargeFileWorkflow() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-slate max-w-none">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
          <span className="mx-2">/</span>
          <span>大PDF拆分流程</span>
          <span className="ml-4">
            <Link href="/blog/split-pdf-large-file-workflow" className="text-blue-500 text-xs">🇺🇸 English</Link>
          </span>
        </nav>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          大PDF怎么拆分成小文件，页码不乱不丢页
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          [💬] 96页PDF最容易在关键时刻出问题：上传系统限制20MB，邮箱拒收附件，或者对方只要第14到29页。重新做一份太慢，直接拆分最快。但拆分前要先想清楚页码、命名和检查方式，否则很容易漏页、错页、发多余资料。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <p className="text-blue-800 font-semibold mb-2">先说结论</p>
          <p className="text-blue-700">
            不要按感觉随便拆。最好按用途拆：一个收件人一份、一个章节一份、一个上传限制一份。拆完先检查页数，再处理原文件。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">什么时候该拆分，而不是压缩？</h2>
        <p className="text-slate-700 mb-4">
          如果整份文件必须保持在一起，就先压缩。如果别人只需要其中几页，或者文件本来就是多个独立章节，拆分通常更干净，也更保护隐私。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-3 text-left">场景</th>
                <th className="border border-slate-300 px-4 py-3 text-left">建议</th>
                <th className="border border-slate-300 px-4 py-3 text-left">原因</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-3">35MB文件邮件发不出去</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">拆分或压缩</td>
                <td className="border border-slate-300 px-4 py-3">如果只需要一部分，拆分更合适。</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3">客户只要一张发票</td>
                <td className="border border-slate-300 px-4 py-3 text-green-600">拆分</td>
                <td className="border border-slate-300 px-4 py-3">没必要把整包材料都发出去。</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3">签署合同必须保持完整</td>
                <td className="border border-slate-300 px-4 py-3 text-yellow-600">压缩</td>
                <td className="border border-slate-300 px-4 py-3">拆开后可能影响审核和归档。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6步拆分流程，减少页码错误</h2>
        <div className="space-y-6 mb-8">
          {[
            ["先复制原文件", "原PDF不要动。拆错页时，还能回到原始版本。"],
            ["先写页码范围", "例如1-8、9-16、17-24。不要打开工具后临时凭记忆选。"],
            ["先想好文件名", "用 contract-pages-01-08.pdf 这类名字，不要用 split-1.pdf。"],
            ["逐个打开检查", "每个输出文件都看首页、末页和总页数。"],
            ["必要时再压缩", "拆出来的小文件还是太大，再压缩这一份，不要反复压缩原文件。"],
            ["保留原始PDF", "原文件留作审计、重新拆分或后续合并。"],
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

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">常见页码写法</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
          <li><strong>只取一段：</strong>只导出第14-29页，发给只看附录的同事。</li>
          <li><strong>平均拆分：</strong>120页手册拆成1-30、31-60、61-90、91-120。</li>
          <li><strong>跳过空白页：</strong>导出1-12和15-22，避开中间误扫进去的空白页。</li>
          <li><strong>保护隐私：</strong>只发签字页，不发完整申请材料包。</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-900 mb-3">[💬] 很容易踩的坑</h2>
          <p className="text-amber-800">
            文件里的印刷页码，可能和PDF阅读器显示的页码不一样。封面、目录、空白隔页都会占页。输入范围时，以PDF阅读器里的页码为准。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">PixelPDF能怎么用</h2>
        <p className="text-slate-700 mb-4">
          需要快速处理时，可以先用 <Link href="/zh/split-pdf" className="text-blue-600 underline">拆分PDF</Link> 提取页面范围。拆出来仍然太大，再用 <Link href="/zh/compress-pdf" className="text-blue-600 underline">压缩PDF</Link> 处理小文件。
        </p>
        <p className="text-slate-700 mb-8">
          如果扫描页方向不对，先用 <Link href="/zh/rotate-pdf" className="text-blue-600 underline">旋转PDF</Link> 调整。图片很多的材料，也可以只把必要页面用 <Link href="/zh/pdf-to-jpg" className="text-blue-600 underline">PDF转JPG</Link> 导出。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">上传或发送前检查</h2>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>每个输出文件都能正常打开。</li>
            <li>首页和末页符合你写下的范围。</li>
            <li>文件名能说明里面是什么。</li>
            <li>没有带上无关的个人信息页面。</li>
            <li>文件大小低于邮箱或上传系统限制。</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">现在拆分大PDF</h2>
          <p className="mb-6 text-blue-100">按页码提取文件，减少上传麻烦，也避免发出多余页面。</p>
          <Link href="/zh/split-pdf" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            打开拆分PDF
          </Link>
        </div>
      </article>
    </div>
  );
}
