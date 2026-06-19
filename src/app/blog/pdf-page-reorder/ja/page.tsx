import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFのページ順を並べ替える方法【無料オンライン 2026】',
  description: 'PDFのページ順を無料でオンライン並べ替える方法です。共有、印刷、署名の前に、読みやすい順番へ安全に整理できます。',
  keywords: ['PDF ページ 並べ替え 無料', 'PDF ページ 順番 変更', 'PDF ページ 整理 オンライン', 'PDF サムネイル 並び替え', 'PDF ページ 移動'],
  openGraph: {
    title: 'PDFのページ順を並べ替える方法【無料オンライン 2026】',
    description: 'PDFのページ順を整えて、共有前に読みやすい流れへ仕上げる実践ガイドです。',
    type: 'article',
  },
};

const mistakes = [
  ['勢いでドラッグする', '意図した場所から1ページずれて、全体の流れが崩れます。', '小さなまとまりで移動し、毎回サムネイルを確認します。'],
  ['ページ番号を見ない', '見た目の順番は直っても、本文の参照番号が合わなくなります。', '目次、章見出し、ページ番号を最後に見直します。'],
  ['署名済みPDFを並べ替える', '承認済みの構成が変わり、確認フローで問題になることがあります。', '作業用コピーを並べ替えてから最終版へ署名します。'],
  ['別資料を無計画に混ぜる', '縦向き、横向き、付録が入り乱れて読みにくくなります。', '読む順番を決めてから結合と並べ替えを行います。'],
];

export default function PdfPageReorderJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/ja" className="hover:text-blue-600">Home</Link> / <Link href="/ja/blog" className="hover:text-blue-600">Blog</Link> / <span>PDFページ並べ替え</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">PDFのページ順を並べ替える方法【無料オンライン 2026】</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>2026年6月19日</span>
          <span className="mx-2">•</span>
          <span>10分で読めます</span>
          <span className="mx-2">•</span>
          <span>約1,500語</span>
        </div>
      </header>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          PDFの内容自体は正しいのに、ページ順だけが乱れていることはよくあります。たとえば契約書の付録が署名ページより前に来てしまったり、スキャンした書類が4ページ目から始まってしまったり、報告書の要約より先に細かな表が並んでしまったりするケースです。こういうときは作り直す必要はありません。ページ順を正しく並べ替えれば十分です。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          いちばん安全なのは、作業用コピーを作り、サムネイルを見ながら順番を調整し、最後に1回だけ全体を確認する方法です。このガイドでは、PDFのページ順を無料でオンライン並べ替える手順、ページ番号のズレを防ぐコツ、そして <Link href="/ja/merge-pdf/" className="text-blue-600 hover:underline font-medium">PDF結合</Link>、<Link href="/ja/split-pdf/" className="text-blue-600 hover:underline font-medium">PDF分割</Link>、<Link href="/ja/compress-pdf/" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link> をいつ組み合わせるべきかまで説明します。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">結論：PDFページをオンラインで並べ替える流れ</h2>
        <div className="space-y-4 text-gray-700">
          {[
            'まず元ファイルのコピーを作ります。',
            'サムネイル表示でページ全体の流れを確認します。',
            '関連するページは1枚ずつではなく、まとまりで移動します。',
            '最後にページ番号、見出し、参照箇所を確認してから保存します。',
          ].map((step, index) => (
            <div key={step} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">作り直しではなく並べ替えで済むケース</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ページ順だけが問題なら、PDFを最初から作り直すのは時間の無駄です。並べ替えなら、書式、画像、余白、署名欄をそのまま保ちながら、読みやすい順番にできます。提出資料や社内報告書では、この差がかなり大きいです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">並べ替え向きの例</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>スキャナーに入れる順番を間違えた書類</li>
              <li>付録を最後に移したい提案書</li>
              <li>要約を先頭に出したい報告書</li>
              <li>提出チェックリストどおりに並べたい申請書類</li>
              <li>授業資料や配布資料の読み順調整</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">並べ替えだけでは足りない例</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>中身そのものが古い、または間違っている</li>
              <li>共有前に機密ページを外したい</li>
              <li>紙面内のページ番号を振り直す必要がある</li>
              <li>別ファイルから新しいページを差し込みたい</li>
              <li>PDF自体が壊れていて安定して開けない</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">手順：PDFページ順を安全に整理する方法</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. まず作業用コピーを作る</h3>
            <p>署名済みファイル、契約書、申請書のような大事なPDFは、元ファイルを直接触らないのが基本です。元の順番を見返せるようにしておくと、途中で迷っても戻れます。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. サムネイル表示で全体像を見る</h3>
            <p>ページ番号だけで判断するより、サムネイルを見る方が速いです。表紙、署名ページ、横向きページ、付録がすぐ見分けられます。傾いたページがあるなら、先に <Link href="/ja/rotate-pdf/" className="text-blue-600 hover:underline font-medium">PDF回転</Link> で直しておくと確認が楽です。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. 1ページずつではなく、まとまりで動かす</h3>
            <p>要約、本文、付録、署名欄のように意味のある単位で動かすと、読み手にとって自然な流れになります。見た目だけ整っていても、読みにくければ意味がありません。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. 参照番号と目次を最後に確認する</h3>
            <p>「12ページを参照」と書いてあるのに、新しい12ページが別内容になっていたら、そのPDFはまだ完成していません。ページ内番号、目次、章見出し、参照文を保存前に見直します。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">5. 圧縮や分割は最後に行う</h3>
            <p>ページ順を確定させてから <Link href="/ja/compress-pdf/" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link> でサイズを下げる方が効率的です。サイズ制限が厳しいときは、<Link href="/ja/blog/split-pdf-large-file-workflow" className="text-blue-600 hover:underline font-medium">大容量PDF分割ガイド</Link> も役立ちます。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある失敗4つ</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">失敗</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">起きること</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">対策</th>
              </tr>
            </thead>
            <tbody>
              {mistakes.map(([mistake, impact, fix], index) => (
                <tr key={mistake} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{mistake}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{impact}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFの種類ごとのおすすめ進め方</h2>
        <div className="space-y-5">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">スキャン書類</h3>
            <p className="text-gray-700">先にページ順を整えてからOCRをかけるのが基本です。そうすれば検索可能テキストも最終順に一致します。OCRが必要なら <Link href="/ja/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">スキャンPDF OCRガイド</Link> を見てください。</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">複数チームの報告書</h3>
            <p className="text-gray-700">まず <Link href="/ja/merge-pdf/" className="text-blue-600 hover:underline font-medium">PDF結合</Link> で1つにまとめ、その後に「要約→本文→付録」の順で整理すると読みやすい資料になります。</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">提出パケット</h3>
            <p className="text-gray-700">ビザ申請、税務資料、入札資料のように順番指定があるPDFは、提出先のチェックリスト順に並べ替えるのが最優先です。サイズ制限があるなら最後に軽く圧縮します。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ページ番号、しおり、署名への影響</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ページを動かすと、見た目の順番だけではなく、ページ番号、しおり、参照先、署名位置にも影響することがあります。だからこそ最終確認が大事です。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>紙面内に印刷されたページ番号が新しい順番とずれることがあります。</li>
          <li>しおりが別の章を指すようになることがあります。</li>
          <li>署名済みファイルは通常、並べ替え前に構成を確定させるべきです。</li>
          <li>目次リンク付きPDFは書き出し後に一度確認した方が安全です。</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          並べ替え後に番号を入れ直したい場合は、<Link href="/ja/blog/add-page-numbers-to-pdf-online" className="text-blue-600 hover:underline font-medium">ページ番号追加ガイド</Link> を使うと流れがきれいです。共有前の最終点検には <Link href="/ja/blog/pdf-final-review-workflow-guide" className="text-blue-600 hover:underline font-medium">PDF最終確認ワークフロー</Link> も役立ちます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFページは無料でオンライン並べ替えできますか？</summary>
            <p className="mt-3 text-gray-700">できます。多くのPDFでは、ブラウザ上のページ整理ツールだけで十分です。ソフトを入れなくても、新しい順番で保存できます。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">並べ替えると中身は変わりますか？</summary>
            <p className="mt-3 text-gray-700">ページ上の文字や画像自体は変わりません。変わるのは順番です。ただし、ページ番号や参照先が合っているかは確認が必要です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">結合と並べ替えはどちらが先ですか？</summary>
            <p className="mt-3 text-gray-700">複数ファイルを最終的に1つへまとめるなら、先に結合してから並べ替える方が分かりやすいです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">スキャンPDFでも並べ替えできますか？</summary>
            <p className="mt-3 text-gray-700">できます。サムネイルで順番を調整しやすいです。検索可能にしたい場合は、並べ替え完了後にOCRをかけるときれいです。</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">今すぐPDFページ順を整理したいですか？</h2>
        <p className="mb-6 text-blue-100">ページ順を整えたあとで、必要に応じて結合、分割、回転、圧縮までまとめて進められます。</p>
        <Link href="/ja/merge-pdf/" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          PDF整理を始める
        </Link>
      </section>
    </article>
  );
}
