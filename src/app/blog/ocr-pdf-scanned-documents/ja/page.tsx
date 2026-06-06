import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'スキャンPDFをOCRで文字認識する方法【無料オンライン 2026】',
  description: 'スキャンPDFから編集可能なテキストを抽出するOCRのやり方を解説します。無料オンライン対応、複数言語に対応、登録不要です。',
  keywords: ['スキャン PDF OCR 無料', 'PDF 文字認識 オンライン', 'スキャンPDF テキスト抽出', 'OCR PDF 無料', '画像PDF 文字化'],
  openGraph: {
    title: 'スキャンPDFをOCRで文字認識する方法【無料オンライン 2026】',
    description: 'スキャンPDFを検索可能・コピー可能なテキストにするOCR手順をわかりやすく解説します。',
    type: 'article',
  },
};

export default function OcrPdfScannedDocumentsJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/ja">Home</Link> / <Link href="/blog">Blog</Link> / <span>スキャンPDF OCR</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        スキャンPDFをOCRで文字認識する方法【無料オンライン 2026】
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月6日</span>
        <span className="mx-2">•</span>
        <span>8分で読めます</span>
        <span className="mx-2">•</span>
        <span>約1,420語</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          スキャンしたPDFを開いたのに、文字を選択できない、検索できない、コピーできない。こういう状態なら、そのPDFは普通のデジタル文書ではなく、画像として保存されたページの集まりである可能性が高いです。ここで必要になるのがOCRです。OCRはOptical Character Recognitionの略で、画像の中にある文字を読み取り、機械が扱えるテキストに変換する技術です。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          OCRを使うと、紙で受け取った契約書、請求書、申請書、授業資料などを検索可能にできます。必要な文章だけコピーしたり、別の形式に変換して編集したりもしやすくなります。この記事では、スキャンPDFを無料オンラインでOCRする手順、精度を上げるコツ、うまくいかない時の対処まで、実務で使える形でまとめます。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">結論: スキャンPDFをOCRする最短手順</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>文字選択できるか確認</strong>します。選択できなければOCRが必要です。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>OCR前にPDFを整える</strong>のが重要です。傾きは <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link>、サイズが大きすぎる場合は <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> を使います。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>OCR後に目的の形式で保存</strong>します。検索したいだけなら検索可能PDF、編集したいならWordやテキスト書き出しが向いています。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">OCRをすると何が変わるのか</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スキャンPDFは、見た目は文書でも内部的には画像です。OCRはその画像を解析して、文字、数字、句読点、段落の並びを推定し、実際のテキストとして再構成します。ツールによっては、元の見た目を保ったまま裏側に文字レイヤーを追加します。別のツールでは、認識した内容をWordやテキストに書き出します。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          どちらが良いかは目的次第です。見た目を崩したくないなら検索可能PDF、内容を書き換えたいならWord変換が向いています。ページによって状態が悪い場合は、先に <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> で問題ページを切り分けてから処理すると効率が上がります。
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">OCRが役立つ場面</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>請求書、領収書、申請書の文字を抽出したい時</li>
            <li>古い契約書や紙資料を検索可能にしたい時</li>
            <li>授業プリントや研究資料から引用文をコピーしたい時</li>
            <li>画像PDFを翻訳や要約に使いたい時</li>
            <li>保管文書をアクセシブルにしたい時</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">無料オンラインでOCRする手順</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">本当にスキャンPDFか確認します</h3>
              <p className="text-gray-700 leading-relaxed">まず文字をドラッグして選択してみてください。単語ごとに選べず、ページ全体が画像のように扱われるなら、OCR対象です。ここを確認しておくと、不要な作業を避けられます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">OCR前に元データを整えます</h3>
              <p className="text-gray-700 leading-relaxed">精度は元の画像品質でかなり変わります。傾いたページは <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> で直し、極端に大きいファイルは <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> で軽くします。ページ単位で状態を見たいなら <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link> で画像化すると確認しやすいです。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">文書の言語を正しく選びます</h3>
              <p className="text-gray-700 leading-relaxed">OCRツールに言語設定があるなら、必ず文書の言語に合わせてください。英語、日本語、ドイツ語、フランス語のように文字体系が違う言語では、設定の違いで精度が大きく変わります。固有名詞や専門用語が多い文書ほど重要です。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">OCR結果を必ず見直します</h3>
              <p className="text-gray-700 leading-relaxed">OCRは便利ですが、100%ではありません。氏名、金額、日付、条文番号など、重要な箇所は原本と照合してください。印影、かすれ、手書き、低解像度は誤認識の原因になりやすいです。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">用途に合う形式で保存します</h3>
              <p className="text-gray-700 leading-relaxed">検索やコピーが目的なら検索可能PDFで十分です。文章修正まで必要ならWordやテキスト書き出しが向いています。複数文書をまとめたい場合は、最後に <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> で整理すると作業がきれいに終わります。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">OCR精度を上げるコツ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          OCRで一番大事なのは、派手な機能ではなく元データの見やすさです。まっすぐで、コントラストがあり、文字がつぶれていない画像は、それだけで結果が安定します。逆に、スマホで斜めに撮った紙、影が入った紙、薄い印字はミスが増えます。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">問題</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">起きやすいこと</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">対策</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">ページが横向き</td>
                <td className="border border-gray-300 px-4 py-3">段落認識が崩れる</td>
                <td className="border border-gray-300 px-4 py-3">先に回転補正する</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">文字が薄い</td>
                <td className="border border-gray-300 px-4 py-3">文字欠けや誤読が増える</td>
                <td className="border border-gray-300 px-4 py-3">より鮮明なスキャンを使う</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">影や傾きがある</td>
                <td className="border border-gray-300 px-4 py-3">別の文字として誤認識する</td>
                <td className="border border-gray-300 px-4 py-3">再撮影かトリミングを行う</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">文字が小さすぎる</td>
                <td className="border border-gray-300 px-4 py-3">細部が読めない</td>
                <td className="border border-gray-300 px-4 py-3">解像度を上げる</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          毎回同じ種類の紙文書を扱うなら、OCR前処理を習慣化するとかなり楽になります。回転補正、空白ページ削除、ページ分割を先にやるだけで、後の見直し時間が減ります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">OCRだけでは足りないケース</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          OCRは文字抽出には強いですが、すべてのレイアウトを完璧に再現するわけではありません。表、チェックボックス、印鑑、複雑な帳票、手書きメモが混ざると、後処理が必要になることがあります。そういう時は、OCRでテキストを取ってから、別のPDFツールで仕上げるのが現実的です。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> で問題ページだけ切り出す</li>
          <li><Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link> でページ画像にして確認する</li>
          <li><Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link> で修正済みページをPDFに戻す</li>
          <li><Link href="/blog/edit-scanned-pdf" className="text-blue-600 hover:underline font-medium">スキャンPDF編集ガイド</Link> を見て視覚的な修正を行う</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          要するに、OCRは文字問題を解決する道具です。文書全体の仕上げまで一発で全部やる道具ではありません。ここを分けて考えると、作業がかなりスムーズになります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある利用シーン</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">経理・事務</h3>
            <p className="text-gray-700 text-sm">請求書、領収書、契約書を検索可能にして保管しやすくできます。</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">学生・研究者</h3>
            <p className="text-gray-700 text-sm">紙資料や図書館スキャンから引用を取りやすくなります。</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">法務・総務</h3>
            <p className="text-gray-700 text-sm">古い紙契約の条項や日付を素早く探せます。</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">個人の書類整理</h3>
            <p className="text-gray-700 text-sm">保険、身分証控え、説明書などをあとで検索しやすくできます。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">スキャンPDFを無料でOCRできますか</summary>
            <p className="mt-3 text-gray-700">できます。一般的な文書なら無料オンラインOCRで十分対応できることが多いです。大事なのは、OCR前にページを見やすい状態に整えることです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">OCRすれば完全に編集できるようになりますか</summary>
            <p className="mt-3 text-gray-700">文字編集はしやすくなりますが、表や配置、印影などは崩れることがあります。検索可能PDFと完全編集可能文書は同じではありません。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">OCRに向いている解像度はどれくらいですか</summary>
            <p className="mt-3 text-gray-700">目安は300DPI前後です。サイズが大きいことより、文字がはっきり見えることの方が重要です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">手書き文字もOCRできますか</summary>
            <p className="mt-3 text-gray-700">場合によりますが、印刷文字より精度は下がりやすいです。崩れた手書き、筆記体、重なった文字は特に難しいです。</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">OCR前にPDFを整えたいですか</h2>
        <p className="mb-6 text-blue-100">回転補正、圧縮、分割、画像化を先にやると、OCR結果が安定しやすくなります。</p>
        <Link
          href="/pdf-to-jpg"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDFを画像化する
        </Link>
      </section>
    </article>
  );
}
