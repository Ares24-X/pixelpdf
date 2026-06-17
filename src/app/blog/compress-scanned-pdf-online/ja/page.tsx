import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'スキャンしたPDFをオンラインで圧縮する方法｜文字をぼかさないコツ',
  description:
    'スキャンしたPDFをオンラインで圧縮しながら、小さな文字、署名、印影、QRコードを読みやすく保つ方法を解説します。',
  keywords: [
    'スキャン PDF 圧縮 オンライン 無料',
    'スキャン PDF 容量を減らす',
    'PDF 圧縮 文字がぼやけない',
    'スキャンした PDF 軽くする',
    'PDF メール送信 容量オーバー',
  ],
  openGraph: {
    title: 'スキャンしたPDFをオンラインで圧縮する方法｜文字をぼかさないコツ',
    description:
      'スキャンしたPDFをオンラインで圧縮しながら、小さな文字、署名、印影、QRコードを読みやすく保つ方法を解説します。',
    type: 'article',
  },
};

export default function CompressScannedPdfOnlineJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>スキャンPDF圧縮</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        スキャンしたPDFをオンラインで圧縮する方法｜文字をぼかさないコツ
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月17日</span>
        <span className="mx-2">•</span>
        <span>8分で読めます</span>
        <span className="mx-2">•</span>
        <span>約1,450語</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          スキャンしたPDFは紙の見た目をそのまま残せるので便利ですが、容量が大きくなりやすいという欠点があります。20ページほどの契約書でも、
          スキャン設定が重いだけで30MBや40MBを超えることは珍しくありません。メールに添付できない、アップロード制限に引っかかる、クラウド保存の管理が面倒になる、
          こうした悩みはほとんどが容量の問題です。
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          ただし、単純に圧縮すればよいわけではありません。強く圧縮しすぎると、小さな文字、署名、印影、バーコード、QRコードが読みにくくなることがあります。
          このページでは、スキャンPDFをオンラインで無料圧縮する流れ、どの圧縮レベルから試すべきか、圧縮より分割のほうが向いている場面まで、実務目線で整理して説明します。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">結論だけ先に：スキャンPDF圧縮の基本手順</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>まずはアップロード</strong>。PixelPDFの <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> にスキャンPDFを入れます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>最初は中程度の圧縮</strong> を選びます。文字の可読性と容量削減のバランスが取りやすいです。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>重要箇所を拡大確認</strong> してから共有します。署名、印影、小さな数字は必ず見てください。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">なぜスキャンPDFは重くなりやすいのか</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          普通のPDFは文字情報や図形データを持っていることが多く、比較的軽く保てます。一方でスキャンPDFは、ページ全体を画像として保存していることが多いため、
          同じページ数でも容量が一気に大きくなります。特にカラー、解像度が高い、ページ数が多い、この3つが重なるとかなり大きなファイルになります。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>本当は白黒で足りる書類をカラーで取り込んでいる</li>
          <li>一般的な書類なのに高すぎるDPIで保存している</li>
          <li>空白ページや重複ページもそのまま残している</li>
          <li>大量のページを一つのPDFにまとめてから後で困っている</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          つまり、重い理由の多くは「情報量が多い」というより「画像としての無駄が多い」ことにあります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">文字をぼかさず圧縮する進め方</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. そのPDFの用途を先に決める</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          メール送信だけなのか、印刷するのか、長期保管するのかで適切な圧縮度は変わります。たとえば確認用の資料なら少し強めでも問題ないことがありますが、
          契約書や申請書のように原本に近い見え方が必要なものは慎重に扱うべきです。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. いきなり最強圧縮にしない</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          一番失敗が少ないのは、中程度の圧縮から始めることです。多くのスキャン書類はこれで十分軽くなります。まだ大きい場合だけ、
          もう一段強い圧縮を試すほうが安全です。最初から強くかけると、あとで読みにくくなったことに気づいて作り直しになることがあります。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. 表紙ではなく重要ページを確認する</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          圧縮後に確認するべきなのは、表紙よりも中身です。署名欄、住所、小さな注記、請求金額、管理番号、QRコードなど、失われると困る部分を拡大して見てください。
          そこが問題なければ、その圧縮結果は実用的と考えてよいです。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. ページ数が原因なら分割を優先する</h3>
        <p className="text-gray-700 leading-relaxed">
          100ページを超えるようなスキャン束は、画質よりページ数の多さが原因で重くなっていることがあります。その場合は無理に画質を落とすより、
          <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> で分割したほうが、見やすさも運用もしやすくなります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">書類別のおすすめ方針</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">書類の種類</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">おすすめ</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">領収書・請求書</td>
                <td className="border border-gray-300 px-4 py-3">中程度圧縮</td>
                <td className="border border-gray-300 px-4 py-3">日付、金額、社名を読みやすく保ちやすいです</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">署名入り契約書</td>
                <td className="border border-gray-300 px-4 py-3">中程度圧縮＋目視確認</td>
                <td className="border border-gray-300 px-4 py-3">署名や細かい条文を守るためです</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">写真多めの報告書</td>
                <td className="border border-gray-300 px-4 py-3">共有用途なら強め圧縮も可</td>
                <td className="border border-gray-300 px-4 py-3">容量削減の効果が出やすいです</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">保管用の控え</td>
                <td className="border border-gray-300 px-4 py-3">弱め〜中程度圧縮</td>
                <td className="border border-gray-300 px-4 py-3">後日見返す前提なので原本に近いほうが安心です</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">QRコード付き申請書</td>
                <td className="border border-gray-300 px-4 py-3">まずは弱め圧縮</td>
                <td className="border border-gray-300 px-4 py-3">機械読取部分は劣化に弱いからです</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">圧縮だけでは足りないときの対処</h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">必要なページだけ抜き出す</h3>
            <p>
              相手が必要なのは全100ページではなく、5ページだけかもしれません。必要ページだけにすると、それだけでかなり軽くなります。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">不要ページを整理してから再圧縮する</h3>
            <p>
              空白ページ、重複ページ、向きがおかしいページが混ざっていると無駄が増えます。必要に応じて <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> や <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> も使うと整理しやすいです。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">まとまりごとに分割する</h3>
            <p>
              月別、案件別、章別に分けられるなら、<Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> で分割したほうが実務では扱いやすいです。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある失敗</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>最初から最大圧縮にしてしまう</li>
          <li>1ページ目だけ見て問題なしと判断する</li>
          <li>QRコードやバーコードを確認しない</li>
          <li>空白ページや重複ページを残したまま送る</li>
          <li>本来は分割すべき巨大ファイルを無理に1本で送ろうとする</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">スキャンPDFは無料で圧縮できますか？</h3>
            <p className="text-gray-700 leading-relaxed">はい、できます。PixelPDFの <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> を使えば、ソフト不要でオンライン圧縮できます。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">圧縮すると文字はぼやけますか？</h3>
            <p className="text-gray-700 leading-relaxed">強すぎる圧縮ではぼやけることがあります。中程度から試して、重要箇所を拡大確認するのが安全です。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">メール用ならどうするのが一番いいですか？</h3>
            <p className="text-gray-700 leading-relaxed">先に圧縮し、それでも大きいなら分割です。無理に画質を落とすより実用的です。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">なぜスキャンPDFは普通のPDFより大きいのですか？</h3>
            <p className="text-gray-700 leading-relaxed">文字データではなく、ページ全体を画像として持っていることが多いからです。</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">まとめ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スキャンPDFを軽くするときに大事なのは、容量だけを見ることではありません。共有後に読めるか、使えるかまで含めて判断することです。
          まずは中程度圧縮、次に重要箇所の確認、それでも重ければ分割。この順番で進めると失敗しにくいです。
        </p>
        <p className="text-gray-700 leading-relaxed">
          すぐ始めるなら、<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> で圧縮し、必要に応じて <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> や <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> を組み合わせるのが一番実務的です。
        </p>
      </section>
    </article>
  );
}
