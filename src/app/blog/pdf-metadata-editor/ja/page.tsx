import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFメタデータを編集する方法【タイトル・作成者・属性を無料で変更】',
  description: 'PDFのタイトル、作成者、件名、キーワードなどのメタデータを確認して編集する方法を解説します。無料オンライン対応、インストール不要です。',
  keywords: ['PDF メタデータ 編集 無料', 'PDF タイトル 変更', 'PDF 作成者 変更', 'PDF 属性 編集', 'PDF プロパティ オンライン'],
  openGraph: {
    title: 'PDFメタデータを編集する方法【タイトル・作成者・属性を無料で変更】',
    description: 'PDFの隠れた属性情報を確認し、公開前にきれいに整える手順をわかりやすくまとめます。',
    type: 'article',
  },
};

export default function PdfMetadataEditorJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/ja">Home</Link> / <Link href="/blog">Blog</Link> / <span>PDFメタデータ編集</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFメタデータを編集する方法【タイトル・作成者・属性を無料で変更】
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月7日</span>
        <span className="mx-2">•</span>
        <span>8分で読めます</span>
        <span className="mx-2">•</span>
        <span>約1,470語</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          PDFは見えている本文だけでできていると思われがちですが、実際にはメタデータという隠れた情報も一緒に保存されています。ここにはタイトル、作成者、件名、キーワード、作成アプリ、作成日、更新日などが含まれることがあります。普段は意識しにくいですが、仕事の資料、応募書類、社外共有ファイル、Web公開用PDFではこの情報が意外と重要です。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          PDFメタデータを編集する理由は大きく3つあります。1つ目は整理しやすくなること、2つ目は公開文書として見栄えと検索性が良くなること、3つ目は古い作成者名や社内情報が残ってしまうのを防げることです。この記事では、PDFメタデータを無料オンラインで編集する流れ、どの項目を直すべきか、編集ではなく削除した方がいい場面まで実務目線で解説します。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">結論: PDFメタデータ編集の最短手順</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>現在のプロパティを確認</strong>して、タイトル、作成者、件名、キーワードがどう入っているか見ます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>古い情報や不正確な情報を差し替え</strong>て、公開しても問題ない形に整えます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>保存後に再確認</strong>して、変更が本当に反映されたかチェックします。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFメタデータには何が入っているのか</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFメタデータは、文書に付属する説明情報です。ファイルのプロパティ画面で見える項目もあれば、ソフトや検索システムだけが読む内部情報もあります。PDFを何で作ったかによって中身は多少変わりますが、よく出てくる項目はだいたい決まっています。
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">よくあるメタデータ項目</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Title:</strong> 文書名として表示される正式タイトル</li>
            <li><strong>Author:</strong> 作成者名、会社名、部署名など</li>
            <li><strong>Subject:</strong> 文書のテーマや概要</li>
            <li><strong>Keywords:</strong> 検索や分類のためのキーワード</li>
            <li><strong>Creator / Producer:</strong> 作成や出力に使ったアプリ情報</li>
            <li><strong>Created / Modified:</strong> 作成日と更新日</li>
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">
          ここを放置すると、見た目は完成していても中身が雑なPDFになります。たとえばタイトルが「Document1」のままだったり、作成者が退職した人の名前のままだったり、社内テンプレート名が残っていたりします。小さいことに見えて、共有先には案外しっかり見られる部分です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFメタデータを直すべき場面</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          メタデータ確認は、PDFが作業用から配布用に変わるタイミングでやるのが一番効率的です。クライアント提出、サイト掲載、採用応募、契約共有、資料配布など、外に出すPDFは一度見直した方が安全です。特にWord、Google Docs、デザインソフト、社内自動出力から作ったPDFは、ローカル設定がそのまま入ることが珍しくありません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">利用場面</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">問題になりやすい点</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">おすすめ対応</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">提案書・営業資料</td>
                <td className="border border-gray-300 px-4 py-3">社内名や仮タイトルが残る</td>
                <td className="border border-gray-300 px-4 py-3">タイトルと作成者を整える</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Web公開PDF</td>
                <td className="border border-gray-300 px-4 py-3">検索時に識別しづらい</td>
                <td className="border border-gray-300 px-4 py-3">タイトルとキーワードを入れる</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">法務・人事書類</td>
                <td className="border border-gray-300 px-4 py-3">作成者情報が漏れる</td>
                <td className="border border-gray-300 px-4 py-3">不要情報を削除または統一する</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">研究・技術文書</td>
                <td className="border border-gray-300 px-4 py-3">整理や引用に不向き</td>
                <td className="border border-gray-300 px-4 py-3">件名や日付も含めて整える</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          SEOの観点でも、メタデータだけで順位が激変するわけではありません。ただ、タイトルや件名がきちんとしているPDFは、検索結果や共有時の見え方が整いやすく、ユーザーにも内容が伝わりやすくなります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">無料オンラインでPDFメタデータを編集する手順</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">今入っている情報を先に確認します</h3>
              <p className="text-gray-700 leading-relaxed">いきなり書き換える前に、今の状態を見ます。タイトル、作成者、件名、キーワードがすでに入っている場合もありますが、テンプレート由来だったり、PCのユーザー名がそのまま入っていたりします。「Document1」や古い社員名が見えたら、直す価値は十分あります。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">タイトルはファイル名ではなく文書名にします</h3>
              <p className="text-gray-700 leading-relaxed">タイトル欄には、人が読んで意味が分かる文書名を入れるのが基本です。「final-v3-last.pdf」みたいなファイル名感の強い文字列より、「2026年Q2 パートナー向け導入ガイド」のような形の方がずっと実用的です。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">作成者、件名、キーワードを意図して入れます</h3>
              <p className="text-gray-700 leading-relaxed">作成者は、公開先に見えて問題ない人名、部署名、会社名にします。件名は文書内容を一文で言うイメージです。キーワードは検索や分類に役立つ単語だけに絞ります。数を増やすより、合っている言葉を入れる方が大事です。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">残すべきでない情報は削除も検討します</h3>
              <p className="text-gray-700 leading-relaxed">全部書き換える必要はありません。むしろ、社内管理コード、古い履歴、公開不要な識別情報があるなら削除した方がいい場合があります。プライバシー重視なら、<Link href="/blog/remove-pdf-metadata" className="text-blue-600 hover:underline font-medium">PDFメタデータ削除ガイド</Link>も合わせて見ると判断しやすいです。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">保存後にもう一度確認します</h3>
              <p className="text-gray-700 leading-relaxed">保存したら終わりではなく、プロパティを再度開いて反映結果を見ます。出力方法によっては、保存時に一部項目が上書きされることがあります。公開直前の10秒確認でかなり防げます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">きれいなメタデータにするコツ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          良いメタデータは難しくありません。大事なのは一貫性です。社内で複数人がPDFを出すなら、タイトルの付け方、作成者名の表記、件名の書き方、キーワードの入れ方を軽くルール化しておくとかなり整います。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">タイトルは分かる言葉で</h3>
            <p className="text-gray-700 text-sm">版数だらけのファイル名ではなく、文書そのものの名前にします。</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">作成者表記を統一</h3>
            <p className="text-gray-700 text-sm">会社名、部署名、担当者名のどれを使うか決めて揃えます。</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">キーワードは少数精鋭</h3>
            <p className="text-gray-700 text-sm">関連語を少し入れるだけで十分です。詰め込みすぎは逆効果です。</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">共有前の最終確認に入れる</h3>
            <p className="text-gray-700 text-sm">本文校正、圧縮、暗号化と同じく、メタデータ確認も最後の工程に入れます。</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          共有前にPDFを整えるなら、メタデータ編集だけで終わらないことも多いです。サイズ調整は <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>、複数文書の結合は <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>、保護が必要なら <Link href="/pdf-encrypt" className="text-blue-600 hover:underline font-medium">PDF Encrypt</Link> を組み合わせると作業がまとまります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">編集と削除、どちらを選ぶべきか</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここは目的で決めます。配布用、公開用、業務用として整えたいなら編集が向いています。内部情報の漏れを防ぎたいなら削除が向いています。両方必要な場合もあります。不要な履歴だけ消して、タイトルと作成者だけ残す形です。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>編集向き:</strong> 整理、ブランド統一、公開品質を上げたい時</li>
          <li><strong>削除向き:</strong> プライバシーや機密性を優先したい時</li>
          <li><strong>併用向き:</strong> 不要情報だけ消しつつ、必要な情報は残したい時</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          実務では、全部残すか全部消すかの二択ではありません。読む人に役立つ情報だけ残して、それ以外は減らす。この考え方が一番きれいです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFメタデータは無料で編集できますか</summary>
            <p className="mt-3 text-gray-700">できます。タイトル、作成者、件名、キーワードのような基本項目なら、オンラインでも十分対応しやすいです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">一番大事なメタデータ項目はどれですか</summary>
            <p className="mt-3 text-gray-700">多くの場合はタイトルです。文書の識別に直結し、共有時にも一番分かりやすいからです。次に作成者と件名が重要です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFメタデータはSEOに影響しますか</summary>
            <p className="mt-3 text-gray-700">主力の順位要因ではありませんが、文書のラベル付けや見え方を整える意味ではプラスです。特に公開PDFでは雑にしない方がいいです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">CreatorやProducerも消した方がいいですか</summary>
            <p className="mt-3 text-gray-700">公開不要なソフト情報や内部事情が見えるなら消す価値があります。問題がなければ、まずはタイトルと作成者の整理を優先すれば十分です。</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">共有前のPDFをまとめて整えますか？</h2>
        <p className="mb-6 text-blue-100">圧縮、結合、分割、保護まで PixelPDF の各ツールでそのまま続けられます。</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PixelPDF ツールを開く
        </Link>
      </section>
    </article>
  );
}
