// PDFファイルサイズを小さくする方法：10の実証済み手法（2026年）- 日本語翻訳
// Path: /src/app/blog/reduce-pdf-file-size/ja/page.tsx
// Date: 2026-05-27

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFファイルサイズを小さくする方法：10の実証済み手法（2026年）',
  description: 'PDFファイルサイズを小さくする10の実証済み手法を学びましょう。オンライン圧縮ツールから画像の最適化、PDFの分割まで、比較表とプロのヒントを含む完全ガイド。',
  keywords: ['PDFファイルサイズ縮小', 'PDF圧縮', 'PDFファイルが大きい', 'PDFサイズ削減', 'PDF最適化'],
  openGraph: {
    title: 'PDFファイルサイズを小さくする方法：10の実証済み手法（2026年）',
    description: 'PDFファイルサイズを小さくする10の実証済み手法。比較表、プロのヒント、FAQを含む完全ガイド。',
    type: 'article',
  },
};

export default function ReducePdfFileSize() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">ホーム</Link> / <Link href="/blog" className="hover:text-blue-600">ブログ</Link> / <span>PDFファイルサイズを小さくする</span>
      </nav>

      {/* H1タイトル */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFファイルサイズを小さくする方法：10の実証済み手法（2026年）
      </h1>

      {/* メタ情報 */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月27日</span>
        <span className="mx-2">•</span>
        <span>10分で読める</span>
        <span className="mx-2">•</span>
        <span>約1800文字</span>
      </div>

      {/* 序文 */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          PDFファイルは文書共有のユニバーサルスタンダードですが、高解像度の画像、埋め込みフォント、冗長なデータによって肥大化しやすくなります。1つのプレゼンテーションや写真満載のレポートが簡単に50MB以上に膨れ上がり、メール送信が不可能になったり、アップロードが遅くなったり、ストレージ容量を無駄に消費したりします。メール添付の制限に対応したい、ウェブサイトの表示速度を上げたい、ディスク容量を解放したいなど、PDFファイルサイズを小さくすることは誰もが知っておくべき実用的なスキルです。この包括的なガイドでは、手軽なオンラインツールから高度な最適化テクニックまで、PDFを縮小する10の実証済み手法を紹介します。自分のニーズに最適なアプローチを選べるようになります。
        </p>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">目次</h2>
        <ul className="space-y-2">
          <li><a href="#why-reduce" className="text-blue-600 hover:underline">なぜPDFファイルサイズを小さくするのか？</a></li>
          <li><a href="#10-methods" className="text-blue-600 hover:underline">PDFサイズを小さくする10の方法</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">比較表：オンライン vs デスクトップ vs 標準機能</a></li>
          <li><a href="#pro-tips" className="text-blue-600 hover:underline">プロのヒント</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">よくある質問</a></li>
        </ul>
      </section>

      {/* なぜPDFファイルサイズを小さくするのか？ */}
      <section id="why-reduce" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">なぜPDFファイルサイズを小さくするのか？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大きなPDFファイルは、文書のライフサイクルのあらゆる段階で支障をきたします。具体的な課題を理解することで、自分の状況に最も重要な最適化方法の優先順位をつけることができます。
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 p-5 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-2">メールの制限</h3>
            <p className="text-gray-700 text-sm">
              Gmail、Outlook、ほとんどのメールプロバイダーは1通あたりの添付ファイルを20〜25MBに制限しています。1つの高解像度PDFがこの制限を超えることがあり、クラウドリンクの使用や複数のメッセージへの分割を余儀なくされます。
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-2">ストレージコスト</h3>
            <p className="text-gray-700 text-sm">
              最適化されていないPDFは不要なディスク容量とクラウドストレージを消費します。長期的には、何百もの過大なファイルが追加のストレージサブスクリプション費用やバックアップ時間の増大につながります。
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">読み込み速度</h3>
            <p className="text-gray-700 text-sm">
              大きなPDFは開くのに時間がかかります。特にモバイルデバイスや遅い接続環境では顕著です。PDFをダウンロードする必要のあるウェブサイトの訪問者は、ファイルの読み込みに時間がかかるとページを離脱します。
            </p>
          </div>
        </div>
      </section>

      {/* PDFサイズを小さくする10の方法 */}
      <section id="10-methods" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">PDFサイズを小さくする10の方法</h2>
        <div className="space-y-8">
          {/* 方法1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">オンライン圧縮ツールを使う</h3>
              <p className="text-gray-700 leading-relaxed">
                PDFファイルサイズを小さくする最も速くて簡単な方法は、専用のオンライン圧縮ツールを使うことです。<Link href="/compress-pdf" className="text-blue-600 hover:underline">PixelPDFのPDF圧縮</Link>ツールはすべてブラウザ内でローカルに処理します。ファイルがデバイスから外部に送られることはありません。PDFをドラッグ＆ドロップして圧縮レベルを選び、最適化されたバージョンをダウンロードするだけです。この方法だけで、画像が多い文書のファイルサイズを60〜80%削減できます。登録不要、ソフトウェアのインストール不要、待ち時間なしで、ほとんどのユーザーにとって最適なソリューションです。
              </p>
            </div>
          </div>

          {/* 方法2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">不要な画像を削除する</h3>
              <p className="text-gray-700 leading-relaxed">
                画像は通常、PDFの最大の構成要素です。文書を監査し、価値を加えない画像を削除しましょう。装飾的なグラフィック、すべてのページに重複している低解像度のロゴ、もう関連性のないスクリーンショットなどです。数枚の大きな画像を削除するだけで、ファイルサイズを劇的に削減できます。画像を残す必要がある場合は、PDFに埋め込む前に圧縮版に置き換えることを検討してください。
              </p>
            </div>
          </div>

          {/* 方法3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">画像を追加する前に圧縮する</h3>
              <p className="text-gray-700 leading-relaxed">
                予防は治療に勝ります。PDFに画像を挿入する前に、TinyPNG、Squoosh、またはOSの標準画像エディターを使って圧縮しましょう。画面表示用には150DPI、印刷用には300DPIを目安にしてください。写真にはJPEG形式が最適で、透過性のあるグラフィックにはPNGが理想的です。画像を事前に圧縮すると、未圧縮の画像をそのまま挿入する場合に比べて、最終的なPDFサイズを40〜60%削減できます。
              </p>
            </div>
          </div>

          {/* 方法4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">&quot;保存&quot;の代わりに&quot;名前を付けて保存&quot;を使う</h3>
              <p className="text-gray-700 leading-relaxed">
                これは最も簡単でありながら最も見落とされがちなテクニックの1つです。Adobe AcrobatなどのエディターでPDFを編集し、「保存」をクリックすると、アプリケーションは既存のファイル構造に変更を追記し、未使用のオブジェクトを保持したまま肥大化を招きます。「名前を付けて保存」を使用すると、アプリケーションはファイル全体を一から書き直し、冗長なデータを破棄するため、ファイルサイズが20〜50%削減されることがよくあります。PDFを編集する際はこの習慣をつけましょう。
              </p>
            </div>
          </div>

          {/* 方法5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">画像のDPIを下げる</h3>
              <p className="text-gray-700 leading-relaxed">
                多くのPDFには不必要に高解像度で保存された画像が含まれています。画面上では150DPIで全く同じに見えるのに、600DPI以上で保存されていることがあります。高DPIの画像はデジタル表示で視覚的なメリットがないにもかかわらず、ファイルサイズを劇的に膨らませます。PDFエディターや圧縮ツールを使って、画面表示用に150DPI、印刷用に300DPIにダウンサンプリングしましょう。この1つの調整だけで、画像が多いPDFを50%以上削減しながら、完全に許容できる視覚品質を維持できます。
              </p>
            </div>
          </div>

          {/* 方法6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">埋め込みフォントを削除する</h3>
              <p className="text-gray-700 leading-relaxed">
                PDFはすべてのデバイスで一貫した表示を保証するために、フォントファイル全体を埋め込むことがよくあります。これにより文書がどこでも同じように表示されますが、フォントファイルによっては1つあたり1〜5MBの重量が加わります。PDFがArial、Times New Roman、Helveticaなどの標準フォントを使用している場合、これらのシステムフォントはほぼすべてのデバイスで利用可能なため、安全に埋め込みを解除できます。Adobe Acrobatでは、ファイル &gt; プロパティ &gt; フォントで埋め込みフォントを確認・管理できます。これにより、文書ごとに数メガバイト節約できます。
              </p>
            </div>
          </div>

          {/* 方法7 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">7</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">大きなPDFを分割する</h3>
              <p className="text-gray-700 leading-relaxed">
                最も効果的なアプローチは、大きな文書を小さく管理しやすい部分に分割することです。100ページのレポートを1つのファイルにする必要はありません。<Link href="/split-pdf" className="text-blue-600 hover:underline">PixelPDFのPDF分割</Link>ツールを使って、個別のセクションや章を抽出しましょう。これは大きな文書の一部だけを共有する場合に特に便利です。受信者が2MBの抜粋しか必要ないのに、50MBのファイルを送る意味はありません。分割により、文書のナビゲーションが容易になり、モバイルデバイスでの開く速度も向上します。
              </p>
            </div>
          </div>

          {/* 方法8 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">8</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">PDFをJPGに変換して戻す</h3>
              <p className="text-gray-700 leading-relaxed">
                スキャン文書、プレゼンテーション、画像が多いパンフレットなど、主に視覚的なPDFの場合、各ページを圧縮されたJPGに変換してから新しいPDFとして再構築すると、劇的なサイズ削減が可能です。<Link href="/pdf-to-jpg" className="text-blue-600 hover:underline">PixelPDFのPDF to JPG</Link>ツールでページを画像として抽出し、<Link href="/image-to-pdf" className="text-blue-600 hover:underline">Image to PDF</Link>ツールで文書を再構築します。このプロセスにより、視覚データ以外のすべて（フォント、メタデータ、フォームフィールド）が削除され、軽量な画像のみのPDFが残ります。この方法ではテキストが選択できなくなるため、テキストの検索性が不要な文書に最適です。
              </p>
            </div>
          </div>

          {/* 方法9 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">9</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">カラーの代わりにグレースケールを使う</h3>
              <p className="text-gray-700 leading-relaxed">
                カラー情報はPDF内のすべての画像に大幅なデータを追加します。テストが多いレポート、社内メモ、白黒のスキャン文書など、カラーを必要としない文書の場合、グレースケールに変換するとファイルサイズを20〜30%削減できます。これは、元がモノクロなのにデフォルトでカラーで保存されたスキャン文書で特に効果的です。ほとんどのPDFエディターやスキャナーソフトウェアは、保存やスキャン時にグレースケール変換オプションを提供しています。
              </p>
            </div>
          </div>

          {/* 方法10 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">10</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">メタデータを削除する</h3>
              <p className="text-gray-700 leading-relaxed">
                PDFファイルには作成者情報、作成日、変更履歴、使用ソフトウェア、サムネイルやブックマークなどの非表示のメタデータが保存されています。個々には小さくても、合計すると数百キロバイトになることがあります。メタデータの削除はプライバシー保護にも役立ちます。他の人が編集履歴や作成者の詳細を見るのを防げます。Adobe Acrobatでは、保護パネルの「非表示情報の削除」ツールを使用します。PixelPDFのようなオンラインツールは、圧縮中に自動的にこれを処理します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">比較表：オンライン vs デスクトップ vs 標準機能</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          すべてのPDF最適化方法が同じ品質というわけではありません。3つの主要なアプローチの比較を以下に示します。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">機能</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">オンラインツール（PixelPDF）</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">デスクトップソフト</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">標準機能（PDFとして印刷）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">使いやすさ</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">非常に簡単</td>
                <td className="border border-gray-300 px-4 py-3 text-yellow-600">普通</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">簡単</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">プライバシー</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">ブラウザ内処理（PixelPDF）</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">完全にローカル</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">完全にローカル</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">圧縮品質</td>
                <td className="border border-gray-300 px-4 py-3">良好〜優秀</td>
                <td className="border border-gray-300 px-4 py-3">優秀</td>
                <td className="border border-gray-300 px-4 py-3 text-yellow-600">基本</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">コスト</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">無料</td>
                <td className="border border-gray-300 px-4 py-3 text-yellow-600">有料（大部分）</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">無料</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">インストール不要</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">不要</td>
                <td className="border border-gray-300 px-4 py-3 text-red-600">必要</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">不要</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">一括処理</td>
                <td className="border border-gray-300 px-4 py-3 text-yellow-600">制限あり</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-red-600">非対応</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">詳細な制御</td>
                <td className="border border-gray-300 px-4 py-3 text-yellow-600">圧縮レベル</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">完全制御</td>
                <td className="border border-gray-300 px-4 py-3 text-red-600">最小限</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          * PixelPDFはすべてのファイルをブラウザ内でローカルに処理するため、デスクトップソフトのプライバシーとオンラインツールの利便性を兼ね備えています。
        </p>
      </section>

      {/* プロのヒント */}
      <section id="pro-tips" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">プロのヒント</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">🎯</span>
              <div><strong>元のファイルを必ず保管する：</strong>圧縮や最適化を適用する前に、元のPDFのコピーを保存してください。圧縮は非可逆的であることが多く、印刷やアーカイブ目的で高品質のバージョンが必要になる場合があります。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🎯</span>
              <div><strong>複数の方法を組み合わせて最大限の削減を：</strong>最大の節約はテクニックを重ねることで得られます。画像を挿入する前に圧縮し、編集後に「名前を付けて保存」を使用し、最終ファイルをオンライン圧縮ツールにかけましょう。この多層的なアプローチでファイルサイズを90%以上削減できます。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🎯</span>
              <div><strong>用途に合わせて品質を調整する：</strong>すべての文書が印刷品質である必要はありません。ウェブ共有、メール、社内利用では、積極的な圧縮が完全に許容されます。高品質設定は、プロの印刷や正式な提出用の文書にのみ残しましょう。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🎯</span>
              <div><strong>共有前に結果を確認する：</strong>圧縮したPDFを開いてすべてのページをスクロールして確認してください。ぼやけた画像、文字化け、欠落した要素がないか確認しましょう。30秒の確認で恥ずかしい思いを防げます。</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFファイルサイズを素早く小さくする最良の方法は？</summary>
            <p className="mt-3 text-gray-700">
              最速の方法は、<Link href="/compress-pdf" className="text-blue-600 hover:underline">PixelPDFのPDF圧縮</Link>のようなオンライン圧縮ツールを使うことです。ファイルをアップロードし、圧縮レベルを選択して、結果をダウンロードします。プロセス全体が数秒で完了し、ソフトウェアのインストールは不要です。ほとんどの文書では、この1ステップでメールのサイズ制限内に収まります。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFのファイルサイズを現実的にどれくらい削減できますか？</summary>
            <p className="mt-3 text-gray-700">
              削減率はコンテンツの種類によって異なります。画像が多いPDFは通常60〜80%圧縮できます。テキストが多い文書は通常20〜40%の削減です。カラーのスキャン文書はグレースケール変換と圧縮で70〜90%削減できます。複数の方法を組み合わせると、90%を超える削減を報告するユーザーもいます。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFサイズを小さくすると印刷品質に影響しますか？</summary>
            <p className="mt-3 text-gray-700">
              方法と圧縮レベルに依存します。適度な圧縮はオフィスや家庭用の印刷で通常問題ありません。ただし、積極的な圧縮や大幅なDPI削減は、プロの印刷で目に見える品質低下を招く可能性があります。印刷品質が必要な場合は、最小限の圧縮を使用するか、印刷用に元の非圧縮ファイルを保管してください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">オンラインのPDF圧縮ツールは安全ですか？</summary>
            <p className="mt-3 text-gray-700">
              ほとんどのオンラインツールは処理のためにファイルをリモートサーバーにアップロードするため、プライバシーの懸念があります。PixelPDFは異なります。すべての圧縮がブラウザ内でクライアントサイドのJavaScriptを使用して完全に行われます。ファイルがデバイスから外部に送られることはないため、デスクトップソフトを使用するのと同じ安全性があります。機密文書をアップロードする前に、ツールがファイルをローカルで処理するかどうかを確認してください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">パスワード保護されたPDFのサイズを小さくできますか？</summary>
            <p className="mt-3 text-gray-700">
              まずパスワード保護を解除する必要があります。PixelPDFの<Link href="/pdf-decrypt" className="text-blue-600 hover:underline">PDF復号</Link>ツールを使ってファイルのロックを解除し、その後お好みの圧縮方法を適用してください。圧縮後、必要に応じて<Link href="/pdf-encrypt" className="text-blue-600 hover:underline">PDF暗号化</Link>ツールで再度保護できます。
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">PDFを今すぐ圧縮しましょう</h2>
        <p className="mb-6 text-blue-100">数秒でPDFを圧縮—ブラウザ内で完全無料・プライバシー保護</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDFを無料で圧縮
        </Link>
      </section>

      {/* 関連ツール */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF結合</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">PDF分割</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF to JPG</div>
          </Link>
          <Link href="/image-to-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">Image to PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
