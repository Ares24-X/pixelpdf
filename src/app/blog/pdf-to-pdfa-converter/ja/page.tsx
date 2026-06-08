import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFをPDF/Aに変換して長期保存する方法【無料オンラインガイド】',
  description: '通常のPDFをPDF/A形式に変換して長期保存に対応させる方法を解説します。アーカイブ向け標準、変換前の準備、注意点までまとめました。',
  keywords: ['PDFをPDF/Aに変換 オンライン', 'PDF/A 変換 無料', 'PDF 長期保存', 'PDF/A アーカイブ', 'PDF ISO 保存形式'],
  openGraph: {
    title: 'PDFをPDF/Aに変換して長期保存する方法【無料オンラインガイド】',
    description: '通常のPDFをPDF/A形式に変換して長期保存に対応させる方法を解説します。',
    type: 'article',
  },
};

export default function PdfToPdfAConverterJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>PDFをPDF/Aに変換</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFをPDF/Aに変換して長期保存する方法【無料オンラインガイド】
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月8日</span>
        <span className="mx-2">•</span>
        <span>8分で読めます</span>
        <span className="mx-2">•</span>
        <span>約1,560語</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          契約書、請求書、研究資料、税務書類などを何年も保管する場合、普通のPDFのままでは不十分なことがあります。通常のPDFには、外部フォント、JavaScript、暗号化、埋め込みメディアなど、将来の表示や再利用に不安が残る要素が含まれることがあるためです。そこで使われるのがPDF/Aです。PDF/Aは長期保存のために設計されたISO標準で、将来も同じ見た目で読みやすい状態を維持しやすい形式です。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          この記事では、PDFをPDF/Aに変換する方法、PDF/Aで何が変わるのか、どのバージョンを選ぶべきか、変換前にやっておくべき準備までまとめて説明します。総務、法務、経理、教育、医療など、保存年限が重要な業務では知っておいて損しない内容です。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">クイック回答: PDFをPDF/Aに変換する流れ</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>元のPDFを整える</strong>ことが先です。ページ順、回転、無駄に大きい容量を <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF分割</Link>、<Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">PDF回転</Link>、<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link> で整えます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>PDF/A対応の変換処理を実行</strong>します。フォント埋め込みや非対応機能の整理が行われ、長期保存向けの形式に変わります。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>変換後の確認と保管を分ける</strong>ことが大事です。アーカイブ用のPDF/Aと、今後編集する作業用ファイルは別で管理するのがおすすめです。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF/Aとは何か</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDF/Aは、長期保存を目的にしたPDFの標準仕様です。考え方はとてもシンプルで、何年後に開いても同じ内容が同じように見えることを優先します。そのため、将来の表示環境に依存しやすい要素を減らし、ファイルの中に必要な情報をできるだけ閉じ込める設計になっています。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          代表的なのがフォント埋め込みです。通常のPDFでは、作成環境に入っているフォントに依存している場合がありますが、PDF/Aでは後から開く環境でも同じ表示を保てるよう、必要なフォントをファイル内に含めます。逆にJavaScript、音声、動画、特定の暗号化など、保存には向かない機能は制限されます。
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">PDF/Aが向いている資料</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>契約書、覚書、社内規程などの正式文書</li>
            <li>請求書、領収書、監査資料、税務書類</li>
            <li>論文、レポート、研究成果の保存版</li>
            <li>医療、教育、人事など保存義務がある文書</li>
            <li>数年から数十年単位で残す必要があるPDF</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">通常のPDFとPDF/Aの違い</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFをPDF/Aに変換するというのは、拡張子を変えるだけではありません。変換時には文書の構造を見直し、長期保存に向かない要素を整理し、必要な情報を埋め込んで再構成します。元ファイルによってはすぐ変換できることもありますし、先に修正が必要なこともあります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">通常のPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PDF/A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">フォント</td>
                <td className="border border-gray-300 px-4 py-3">外部環境に依存する場合がある</td>
                <td className="border border-gray-300 px-4 py-3">埋め込みが前提です</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">JavaScript</td>
                <td className="border border-gray-300 px-4 py-3">含められます</td>
                <td className="border border-gray-300 px-4 py-3">通常は使えません</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">暗号化</td>
                <td className="border border-gray-300 px-4 py-3">よく使われます</td>
                <td className="border border-gray-300 px-4 py-3">長期保存では不向きです</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">外部依存</td>
                <td className="border border-gray-300 px-4 py-3">残ることがあります</td>
                <td className="border border-gray-300 px-4 py-3">自己完結が求められます</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">保存向きか</td>
                <td className="border border-gray-300 px-4 py-3">用途次第です</td>
                <td className="border border-gray-300 px-4 py-3">保存向けに設計されています</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          つまり、PDF/Aは便利機能を増やす形式ではなく、将来も読めることを優先する形式です。そこを理解しておくと迷いません。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFをPDF/Aに変換する手順</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">変換前にPDFの状態を確認します</h3>
              <p className="text-gray-700 leading-relaxed">ページが逆さま、重複ページがある、開き方がおかしい、といった問題があるなら先に直した方が安全です。すでに挙動がおかしいPDFなら、<Link href="/blog/pdf-not-opening-fix" className="text-blue-600 hover:underline font-medium">PDFが開かないときの対処ガイド</Link>も参考になります。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">変換を邪魔する要素を先に減らします</h3>
              <p className="text-gray-700 leading-relaxed">画像だらけで容量が大きいPDFは <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link> で整えます。必要なページだけ保存したいなら <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF分割</Link> が便利です。画像から作った資料なら <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">画像からPDF</Link> で作り直した方がきれいになることもあります。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">PDF/A対応の変換を実行します</h3>
              <p className="text-gray-700 leading-relaxed">PDF/A出力を明示している変換ツールを使います。この時点で、フォント埋め込みや非対応要素の整理が行われます。特別な指定がないなら、今の運用ではPDF/A-2が無難な選択になることが多いです。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">変換後の見た目と内容を確認します</h3>
              <p className="text-gray-700 leading-relaxed">ページ順、文字化け、しおり、表の崩れなどをチェックします。保存用ファイルでは「なんとなく開ける」では足りません。必要なら検証ツールも使って、規格に合っているか確認した方が安心です。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">保存版と作業版を分けて管理します</h3>
              <p className="text-gray-700 leading-relaxed">PDF/Aは保存版として保管し、今後も修正する可能性がある文書は別ファイルで残します。この運用をしておくと、保存版を上書きしてしまう事故を減らせます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">どのPDF/Aバージョンを選べばいいか</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここで悩む人は多いですが、実務ではそこまで難しく考えなくて大丈夫です。大事なのは、相手先や保存ルールに指定があるかどうかです。
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-1</h3>
            <p className="text-gray-700">古めの厳格な基準です。提出先やシステムで明示されているならこれを選ぶ形です。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-2</h3>
            <p className="text-gray-700">今の運用では一番バランスが良いことが多いです。保存性を保ちつつ、やや新しいPDF機能も扱いやすいです。</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-3</h3>
            <p className="text-gray-700">添付ファイルを含められるので特殊な業務には便利ですが、運用は少し複雑になります。必要性が明確なときだけ選ぶのが安全です。</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          指定がないならPDF/A-2を基準に考えるのが現実的です。逆に提出先から指定があるなら、その指定に合わせるのが正解です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">変換でよくあるトラブル</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">フォントが埋め込まれていない</h3>
            <p className="text-gray-700 text-sm">元PDFの作りが悪いと、変換側で修正しきれないことがあります。元データの段階で整える方が早いこともあります。</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">暗号化PDFの扱い</h3>
            <p className="text-gray-700 text-sm">パスワード付きPDFはそのままだと変換しにくい場合があります。権限がある状態で解除してから保存版を作る流れが安全です。</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">スキャンPDFが重すぎる</h3>
            <p className="text-gray-700 text-sm">高解像度のスキャンは保存版でも重くなりがちです。可読性を落とさない範囲で圧縮してから変換すると扱いやすくなります。</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">フォームや動作機能が消える</h3>
            <p className="text-gray-700 text-sm">これは不具合ではなく仕様に近いです。PDF/Aは動的機能より保存性を優先するからです。</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          もしスキャン文書を検索できる形で残したいなら、<Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">スキャンPDFをOCRするガイド</Link>も一緒に読むと流れがつながります。OCRは文字を読めるようにする作業、PDF/Aは長く残せる形にする作業です。役割が違います。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">PDF/Aは普通のPDFと同じですか</summary>
            <p className="mt-3 text-gray-700">同じではありません。PDF/Aは長期保存向けに制限を加えたPDFの標準形式です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDF/Aにした後でも編集できますか</summary>
            <p className="mt-3 text-gray-700">編集できることはありますが、保存版を作業用として使わない方が安全です。編集用の元ファイルは別で残しておくのがおすすめです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDF/Aにすると容量は小さくなりますか</summary>
            <p className="mt-3 text-gray-700">必ずしも小さくなりません。フォント埋め込みなどで逆に大きくなることもあります。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">すべてのPDFをPDF/Aにするべきですか</summary>
            <p className="mt-3 text-gray-700">いいえ。長期保管、提出要件、法令対応が必要な文書に使うのが基本です。普段の共有用PDFまで全部変える必要はありません。</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">保存前にPDFを整えたいですか</h2>
        <p className="mb-6 text-blue-100">圧縮、分割、回転、画像からの再作成など、PixelPDFの基本ツールで先に整えるとPDF/A化がスムーズです。</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          まずはPDF圧縮を試す
        </Link>
      </section>
    </article>
  );
}
