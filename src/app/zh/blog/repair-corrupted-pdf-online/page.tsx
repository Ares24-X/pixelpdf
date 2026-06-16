import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "如何在线修复损坏PDF，别急着重做文件",
  description: "PDF打不开、页面空白、上传失败时，先按这个流程修复损坏PDF。学会保留原件、提取可读页面、重建干净副本。",
  keywords: "修复损坏PDF,在线修复PDF,PDF打不开,PDF页面空白,恢复PDF页面",
};

export default function ZhRepairCorruptedPdfOnlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12"><article className="prose prose-slate max-w-none">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/zh/blog" className="hover:text-blue-600">博客</Link><span className="mx-2">/</span><span>修复损坏PDF</span><span className="ml-4"><Link href="/blog/repair-corrupted-pdf-online" className="text-blue-500 text-xs">🇺🇸 English</Link></span></nav>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">如何在线修复损坏PDF，别急着重做文件</h1>
      <p className="text-lg text-slate-600 mb-6">PDF损坏最烦人的地方是：文件还在，但页面不听话。可能打不开，可能第17页一打开就崩，可能上传系统提示文件无效。别一上来就重做，先按修复流程走一遍。很多时候，可读页面还在文件里面。 [💬]</p>
      <p className="text-lg text-slate-600 mb-8">修复PDF不是变魔术。它解决的是：判断结构哪里坏了，先救出还能读的页面，再重新生成一个干净副本。</p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg"><p className="text-blue-800 font-semibold mb-2">推荐顺序</p><p className="text-blue-700">先复制原文件，再换阅读器测试，然后提取可读页面。重建后检查页数，最后再压缩或加密。</p></div>
      <h2>PDF一般坏在哪里？</h2><p>PDF不只是几张页面。里面有文件头、页面目录、字体、图片、表单、批注、元数据和交叉引用表。某一部分指错位置，阅读器就可能直接报错，但页面内容未必全没了。</p><p>常见原因很简单：下载中断、邮件附件损坏、云盘同步失败、扫描仪导出异常、压缩太狠，或者多个PDF软件来回编辑。遇到这些，不要先慌。</p><p><strong>一句话：</strong>永远修复副本，不动唯一原件。修坏了还能回头。</p>
      <h2>按症状选修复方法</h2><div className="overflow-x-auto mb-8"><table className="min-w-full border-collapse border border-slate-300"><thead><tr className="bg-slate-100"><th className="border border-slate-300 px-4 py-3 text-left">症状</th><th className="border border-slate-300 px-4 py-3 text-left">可能原因</th><th className="border border-slate-300 px-4 py-3 text-left">先做什么</th></tr></thead><tbody><tr><td className="border border-slate-300 px-4 py-3">PDF打不开</td><td className="border border-slate-300 px-4 py-3">文件结构损坏或下载不完整</td><td className="border border-slate-300 px-4 py-3">重新下载，再修复副本</td></tr><tr><td className="border border-slate-300 px-4 py-3">部分页面空白</td><td className="border border-slate-300 px-4 py-3">图片、字体或扫描层丢失</td><td className="border border-slate-300 px-4 py-3">先提取正常页面</td></tr><tr><td className="border border-slate-300 px-4 py-3">上传系统不认</td><td className="border border-slate-300 px-4 py-3">元数据、表单或大小限制问题</td><td className="border border-slate-300 px-4 py-3">重建、扁平化、再压缩</td></tr><tr><td className="border border-slate-300 px-4 py-3">某一页打开崩溃</td><td className="border border-slate-300 px-4 py-3">该页图片太重或批注损坏</td><td className="border border-slate-300 px-4 py-3">围绕问题页拆分</td></tr></tbody></table></div>
      <h2>安全修复步骤</h2><div className="space-y-6 mb-8">{[["复制一份", "比如 invoice-damaged-copy.pdf。原文件不要覆盖，直到最终修复版确认没问题。"], ["换一个阅读器打开", "浏览器和桌面PDF软件都试一下。如果其中一个能打开，就从能打开的工具里导出新PDF。"], ["先救可读页面", "如果只是部分页面坏了，用拆分或提取页面先把正常页面保住。能救90%就别为了10%全丢。"], ["重新合并成新PDF", "把恢复出来的页面合并成一个新文件，通常比原来的坏结构更干净。"], ["需要时再扁平化和压缩", "表单、批注、签名要固定就先扁平化。确认内容没问题后再压缩。"], ["发送前重新打开", "检查页数、文件大小、问题页、签名和关键文字。能打开不代表内容完整。"]].map(([title, body], index) => (<div className="flex gap-4" key={title}><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div><div><h3 className="font-semibold text-slate-900">{title}</h3><p className="text-slate-600">{body}</p></div></div>))}</div>
      <h2>什么时候不值得修？</h2><p>如果源文件还在，比如Word、Excel、PPT、设计稿，直接重新导出PDF通常最快。修复适合没有源文件、带签名批注、或重做成本高的文件。</p><ul><li><strong>源文件还在：</strong>重新导出，别硬修。</li><li><strong>每页都是坏图：</strong>修复工具不能凭空生成丢失的像素。</li><li><strong>来源可疑：</strong>不要把可疑PDF上传到业务系统。</li><li><strong>法律文件内容变化：</strong>让对方重发原件更稳。</li></ul>
      <h2>常见错误</h2><ul><li><strong>覆盖原文件。</strong>这是最不划算的错误。</li><li><strong>没检查就压缩。</strong>压缩会让排查更麻烦。</li><li><strong>只相信一个阅读器。</strong>不同PDF阅读器报错方式不一样。</li><li><strong>能打开就发。</strong>还要看页数、页面顺序和关键内容。</li></ul>
      <h2>常见问题</h2><details className="border border-slate-200 rounded-lg p-4 mb-4" open><summary className="font-semibold cursor-pointer">所有损坏PDF都能修好吗？</summary><p className="mt-3">不能。如果页面数据本身没了，只能恢复文件里还存在的内容。</p></details><details className="border border-slate-200 rounded-lg p-4 mb-4"><summary className="font-semibold cursor-pointer">修复后的PDF能直接发送吗？</summary><p className="mt-3">先检查页数、内容、文件大小和敏感信息。确认没问题再发。</p></details><details className="border border-slate-200 rounded-lg p-4"><summary className="font-semibold cursor-pointer">应该修复还是让对方重发？</summary><p className="mt-3">对方能马上重发，就让对方重发。文件里有你的签名、批注、扫描件，再先修复。</p></details>
    </article></div>
  );
}
