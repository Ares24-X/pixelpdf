import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFから画像を抽出する方法（無料オンラインガイド 2026）',
  description: 'PDF文書から画像を抽出して保存する方法を解説します。無料オンラインのPDF画像抽出ワークフローで、写真・図・ロゴをきれいに取り出せます。',
  keywords: ['PDFから画像を抽出', 'PDF 画像 保存', 'PDF 画像 抜き出し', 'PDF 画像 抽出 オンライン', 'PDF JPG 取り出し'],
  openGraph: {
    title: 'PDFから画像を抽出する方法（無料オンラインガイド 2026）',
    description: 'PDF文書から画像を抽出して保存する方法を、ブラウザだけでできる流れで解説します。',
    type: 'article',
  },
};

export default function ExtractImagesFromPdfJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>PDFから画像を抽出</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFから画像を抽出する方法（無料オンラインガイド 2026）
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月21日</span>
        <span className="mx-2">•</span>
        <span>8分で読めます</span>
        <span className="mx-2">•</span>
        <span>約1,480語</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          PDFから画像を抽出したい場面はかなり多いです。商品カタログの写真を取り出したい、会社案内のロゴを再利用したい、授業資料の図だけ保存したい、スキャン済みパンフレットから写真部分を抜き出したい。こういう時にスクリーンショットで済ませる人が多いですが、それだと画質が落ちやすく、後で使いにくくなります。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          実際には、PDFの中に元画像が埋め込まれているのか、それともページ全体が1枚のスキャン画像なのかで、やるべき方法が変わります。この記事では、PDFから画像を無料オンラインで抽出する流れ、画質を落とさない考え方、スキャンPDFの場合の回避策、そして次の作業につなげるPixelPDFツールの使い分けまでまとめて説明します。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">クイック回答：PDFから画像を抽出する3ステップ</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>PDFの種類を確認します。</strong> 元画像が埋め込まれているPDFなら直接抽出できます。スキャンPDFならページ変換の発想が必要です。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>抽出または変換を行います。</strong> 必要な画像数、ページ範囲、画質を確認しながら進めます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>用途に合わせて整えます。</strong> その後は <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link>、<Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link>、<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> を使い分けます。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">最初に知っておくべき2つのパターン</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「PDFから画像を抽出する」と言っても、実は2つの作業が混ざりやすいです。1つは、本当にPDF内部の画像データを取り出す作業。もう1つは、PDFページ全体をJPGやPNGに変換して、その中から必要な部分を使う作業です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          この違いを分けて考えないと、画質や手間の期待値がズレます。デザインソフトから作られたPDFなら、元画像を比較的きれいに取り出せることがあります。ですが紙をスキャンしたPDFは、1ページ全体が1枚絵のようになっていることが多く、その場合は「抽出」より「ページ画像化して切り出す」が現実的です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">状況</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">向いている方法</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">期待できる結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">写真やロゴが挿入されたデジタルPDF</td>
                <td className="border border-gray-300 px-4 py-3">直接抽出</td>
                <td className="border border-gray-300 px-4 py-3">元画像に近い品質で保存しやすいです</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">紙資料をスキャンしたPDF</td>
                <td className="border border-gray-300 px-4 py-3">ページを画像化してから切り出し</td>
                <td className="border border-gray-300 px-4 py-3">ページ単位の画像になります</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">図表・アイコン・写真が混在するPDF</td>
                <td className="border border-gray-300 px-4 py-3">両方を見ながら判断</td>
                <td className="border border-gray-300 px-4 py-3">一部は抽出、一部は変換になることがあります</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          迷ったら、まずPDFを拡大して見てください。ページ全体が1枚の写真のように見えるなら、スキャンPDFの可能性が高いです。そこを見誤らなければ、無駄な遠回りをかなり減らせます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">無料オンラインで画像を取り出す流れ</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">必要なページだけに絞ります</h3>
              <p className="text-gray-700 leading-relaxed">PDFが長い場合は、先に <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> で必要ページだけに切り分けると作業が軽くなります。画像があるページだけに絞るだけで、処理時間も確認作業もかなり楽になります。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">直接抽出か、ページ変換かを決めます</h3>
              <p className="text-gray-700 leading-relaxed">元画像が埋め込まれているPDFなら直接抽出が有利です。スキャンPDFなら <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link> でページを画像化して、必要な写真や図だけ後で切り出す方が自然です。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">保存形式と画質を確認します</h3>
              <p className="text-gray-700 leading-relaxed">取り出した画像がJPGなのかPNGなのか、拡大して見ても使えるかを確認します。共有用に軽くしたい時でも、元PDFは別で残しておく方が安全です。先に強く圧縮してしまうと、後から画像を再利用しにくくなります。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">ファイル名を整理します</h3>
              <p className="text-gray-700 leading-relaxed">画像が複数ある場合は、ページ番号や内容で名前を付けておくと後が楽です。営業資料に再利用する時、授業スライドに貼る時、クライアントに送る時、ここを雑にすると必ず後で探し直すことになります。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">必要ならPDFとして組み直します</h3>
              <p className="text-gray-700 leading-relaxed">画像だけをまとめ直したいなら <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link> が使えます。逆に、画像単体で使うならPDFへ戻さず、そのまま保管する方が扱いやすいことも多いです。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある実務パターン別の考え方</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          何のために画像を抜き出すのかで、最適なやり方は変わります。ここを先に決めると迷いません。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">商品カタログの写真</h3>
            <p className="text-gray-700 text-sm">まず直接抽出を試すべきです。埋め込み画像ならスクショよりきれいに取れる可能性が高いです。</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">スキャン済みの配布資料</h3>
            <p className="text-gray-700 text-sm">ページ画像化して必要部分を切り出す方が素直です。無理に抽出を狙うより早いです。</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">プレゼン用の図表</h3>
            <p className="text-gray-700 text-sm">図表がページに焼き付いているならページ変換、独立画像なら抽出、と分けて考えるのがコツです。</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">ロゴ・署名・印影</h3>
            <p className="text-gray-700 text-sm">この用途は画質が命です。元PDFを残したまま、拡大して確認しながら使うべきです。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">画質を落とさないためのコツ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一番やってはいけないのは、元画像が取れるPDFなのにスクリーンショットで済ませることです。画面解像度に縛られるので、後で使うと粗さが目立ちやすいです。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>元PDFをそのまま1部残しておく</li>
          <li>画像再利用が目的なら、圧縮より先に抽出を試す</li>
          <li>書き出した画像は100%表示で確認する</li>
          <li>スキャン元がぼやけている場合、抽出しても急に高画質にはならない</li>
          <li>印刷用途なら、必要に応じて元資料を再スキャンする</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          作業順も大事です。先に軽量化しすぎると、写真や細かい図がつぶれることがあります。画像を使い回す予定があるなら、抽出を先、共有用の軽量化を後に回す方が安全です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">先に別のツールを使うべきケース</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          画像抽出の前に、別の問題を片付けた方が早いPDFもあります。壊れている、重すぎる、不要ページが多い、文字も同時に取りたい。そういう時は順番を間違えない方がいいです。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>開けないPDFなら <Link href="/blog/repair-corrupted-pdf-online" className="text-blue-600 hover:underline font-medium">修復ガイド</Link> を先に確認します</li>
          <li>不要ページが多いなら <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> で必要部分だけ残します</li>
          <li>スキャンPDFが重すぎるなら <Link href="/blog/compress-scanned-pdf-online" className="text-blue-600 hover:underline font-medium">圧縮ガイド</Link> を使います</li>
          <li>文字も取りたいなら <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">OCRガイド</Link> も一緒に見た方が早いです</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          順番さえ整えば、作業はかなり楽になります。壊れたまま、重いまま、全部入りのままで無理に進めない。ここが実務では大事です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFから画像を無料で抽出できますか？</summary>
            <p className="mt-3 text-gray-700">できます。特にデジタルPDFなら、ブラウザベースの流れでも十分対応しやすいです。大事なのはPDFの種類を見分けることです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">抽出した画像は元の画質を保てますか？</summary>
            <p className="mt-3 text-gray-700">埋め込み画像なら保ちやすいです。スキャンPDFは元スキャンの品質が上限になるので、過度な期待は禁物です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">抽出と変換の違いは何ですか？</summary>
            <p className="mt-3 text-gray-700">抽出はPDF内部の画像データを取り出すこと、変換はページ全体を画像化することです。元画像があるなら抽出の方が有利です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">1枚だけ取り出すこともできますか？</summary>
            <p className="mt-3 text-gray-700">できます。うまく選択できない時は、先にページを分割してから処理するか、ページ変換後に必要部分だけ切り出す方が早いです。</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">ページ全体を画像にしたいですか？</h2>
        <p className="mb-6 text-blue-100">埋め込み画像が取れないPDFなら、まずページをJPG化して必要部分を切り出す方が早いです。</p>
        <Link
          href="/pdf-to-jpg"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDF to JPGを使う
        </Link>
      </section>
    </article>
  );
}
