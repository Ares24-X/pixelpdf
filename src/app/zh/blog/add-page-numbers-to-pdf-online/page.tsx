import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "如何在线给PDF添加页码，不破坏原始排版",
  description: "在线给PDF添加页码，避免遮挡签名、页脚和扫描边缘。适合合同、报告、会议材料和附件包。",
  keywords: "PDF添加页码,在线PDF页码,PDF页脚页码,PDF分页编号,合同PDF页码",
};

export default function ZhAddPageNumbersToPdfOnlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12"><article className="prose prose-slate max-w-none">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/zh/blog" className="hover:text-blue-600">博客</Link><span className="mx-2">/</span><span>PDF添加页码</span><span className="ml-4"><Link href="/blog/add-page-numbers-to-pdf-online" className="text-blue-500 text-xs">🇺🇸 English</Link></span></nav>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">如何在线给PDF添加页码，不破坏原始排版</h1>
      <p className="text-lg text-slate-600 mb-8">PDF没有页码时，沟通会变得很别扭。别人说“看第17页”，你只能从头数。合同附件、会议材料、扫描报告、课程讲义尤其容易这样。在线给PDF加页码并不难，难的是别把页码压在签名、脚注、印章或二维码上。 [💬] 页码是小东西，但它决定一份文件好不好协作。</p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg"><p className="text-blue-800 font-semibold mb-2">推荐顺序</p><p className="text-blue-700">先合并和整理PDF，确认页面顺序，再添加页码。最后如果文件太大，再压缩最终版。</p></div>
      <h2>什么时候需要给PDF加页码？</h2><p>单页发票不需要。三页说明书也未必需要。但只要这份PDF会被多人审阅、打印、引用、拆分或归档，页码就很有价值。比如投标文件、律师材料、董事会资料包、客户方案、学校讲义、扫描档案。</p><p>如果你刚用 <Link href="/zh/merge-pdf">合并PDF</Link> 把多个文件拼在一起，原来的页码可能重复、跳号，甚至每个附件都从1开始。此时重新加一套统一页码，比保留混乱编号更稳妥。</p>
      <h2>先选对页码样式</h2><div className="overflow-x-auto mb-8"><table className="min-w-full border-collapse border border-slate-300"><thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-3 text-left">样式</th><th className="border border-slate-300 px-4 py-3 text-left">适合场景</th><th className="border border-slate-300 px-4 py-3 text-left">注意点</th></tr></thead><tbody><tr><td className="border border-slate-300 px-4 py-3">1, 2, 3</td><td className="border border-slate-300 px-4 py-3">普通报告、讲义</td><td className="border border-slate-300 px-4 py-3">避免和原页码重叠</td></tr><tr><td className="border border-slate-300 px-4 py-3">第1页 / 共24页</td><td className="border border-slate-300 px-4 py-3">容易被打印或拆开的文件</td><td className="border border-slate-300 px-4 py-3">页脚要留足空间</td></tr><tr><td className="border border-slate-300 px-4 py-3">A-1, A-2</td><td className="border border-slate-300 px-4 py-3">附件、证据、附录</td><td className="border border-slate-300 px-4 py-3">前缀要和目录一致</td></tr></tbody></table></div>
      <h2>操作步骤</h2><div className="space-y-6 mb-8">{[["先检查页面边缘", "重点看首页、末页、签名页、横向表格页。底部有没有印章、脚注、二维码、审批文字。"], ["选择安全位置", "大多数文件用底部居中最稳。页脚已有内容时，可以放右上角或左上角。"], ["设置起始页码", "封面通常不显示页码，正文第一页才标1。附件可以用A-1、B-1这种编号。"], ["预览每个异常页面", "别只看第一页。扫描件可能歪斜，横向页面也可能把页码放到奇怪的位置。"], ["下载并保留原文件", "不要覆盖原始PDF。保存为带-numbered或-页码的副本，后续修改更安全。"]].map(([title, body], index) => (<div className="flex gap-4" key={title}><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div><div><h3 className="font-semibold text-slate-900">{title}</h3><p className="text-slate-600">{body}</p></div></div>))}</div>
      <h2>容易出错的地方</h2><ul><li><strong>封面也被编号。</strong>正式报告通常从正文开始算第一页。</li><li><strong>页码压住签名。</strong>合同和审批表的签名区经常在页面底部。</li><li><strong>横向页面没检查。</strong>竖版设置不一定适合横向表格。</li><li><strong>先压缩再加页码。</strong>建议先加页码，再用 <Link href="/zh/compress-pdf">压缩PDF</Link> 处理最终版。</li></ul>
      <h2>常见问题</h2><details className="border border-slate-200 rounded-lg p-4 mb-4" open><summary className="font-semibold cursor-pointer">合并PDF后还能重新加页码吗？</summary><p className="mt-3">可以，而且更推荐这样做。先合并，确认顺序，再给最终文件加统一页码。</p></details><details className="border border-slate-200 rounded-lg p-4 mb-4"><summary className="font-semibold cursor-pointer">添加页码会改动正文内容吗？</summary><p className="mt-3">不会。页码只是添加在页面上的可见标记，不会重新排版正文。</p></details><details className="border border-slate-200 rounded-lg p-4"><summary className="font-semibold cursor-pointer">扫描PDF可以加页码吗？</summary><p className="mt-3">可以。只是扫描页可能有倾斜或裁边，添加前更要预览边缘。</p></details>
    </article></div>
  );
}
