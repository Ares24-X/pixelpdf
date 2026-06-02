// Make PDF Smaller for Email - 日本語翻訳
// 路径: /src/app/blog/make-pdf-smaller-for-email/ja/page.tsx
// 日期: 2026-06-02

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'メール添付用にPDFファイルを小さくする方法（2026年）',
  description: 'メール添付用にPDFファイルを小さくする4つの確実な方法を解説。Gmail、Outlook、Yahoo、iCloud向けに、ステップバイステップでPDFサイズを削減する方法をご紹介します。',
  keywords: ['メール添付 PDF サイズ縮小', 'PDF 圧縮 メール', 'PDF ファイルサイズ 小さくする', 'メール 添付ファイル サイズ制限'],
  openGraph: {
    title: 'メール添付用にPDFファイルを小さくする方法（2026年）',
    description: 'メール添付用にPDFファイルを小さくする4つの確実な方法を解説。Gmail、Outlook、Yahoo、iCloud向けにPDFサイズを削減。',
    type: 'article',
  },
};

export default function MakePdfSmallerForEmailJa() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>メール添付用にPDFを小さくする</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        メール添付用にPDFファイルを小さくする方法（2026年）
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月2日</span>
        <span className="mx-2">•</span>
        <span>8分で読める</span>
        <span className="mx-2">•</span>
        <span>約1,400字</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          重要な書類を完成させ、「添付」をクリックした瞬間に、ファイルが大きすぎてメールプロバイダーに拒否されたという経験はありませんか？これはビジネスパーソンが日常的に直面する最も一般的な悩みの一つです。Gmail、Outlook、Yahoo、iCloudのいずれを使用していても、すべてのメールプロバイダーは添付ファイルのサイズ制限を設けており、画像、スキャンデータ、グラフィックを含むPDFはその制限を超えがちです。朗報は、正しい方法を知っていれば、メール添付用にPDFファイルを小さくするのは簡単だということです。このガイドでは、PDFを迅速かつ確実に圧縮する4つの実証済みのテクニックをステップバイステップで解説します。
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">3ステップでPDFをメール添付用に小さくする方法</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>PDFをアップロード</strong> — PixelPDFの<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF圧縮ツール</Link>にドラッグ＆ドロップ、または「参照」をクリックしてファイルを選択</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>圧縮レベルを選択</strong> — ほとんどのメール添付には「中」が最適で、サイズを40〜60%削減できます</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>圧縮済みPDFをダウンロード</strong> — 送信前に、メールプロバイダーのサイズ制限内であることを確認してから添付</p>
          </div>
        </div>
      </section>

      {/* Email Attachment Size Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">知っておくべきメール添付ファイルのサイズ制限</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFの圧縮を始める前に、各メールプロバイダーの具体的なサイズ制限を理解しておくと役立ちます。メール送信時のエンコード（Base64）により、ファイルサイズは約33%増加するため、パソコン上で19MBのファイルは添付時に25MBの制限を超える可能性があります。
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">メールプロバイダー</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">添付制限</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">安全な目標サイズ</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18〜20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">大きなファイルにはGoogle Driveを推奨</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook / Hotmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14〜15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">主要プロバイダー中最も厳しい制限</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18〜20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Gmailと同じ制限</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14〜15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">@icloud.comアドレスに適用</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「安全な目標サイズ」はBase64エンコードのオーバーヘッドを考慮しています。このサイズを下回っていれば、どのプロバイダーでも添付に成功します。
        </p>
      </section>

      {/* Method 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法1：オンラインでPDFを圧縮する（最速）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          オンライン圧縮は、メール用にPDFを小さくする最も迅速な方法です。PixelPDFの<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF圧縮ツール</Link>はすべてブラウザ内で処理します。ファイルがサーバーにアップロードされることはないため、機密文書も安全に保護されます。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">ステップバイステップガイド</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">PDF圧縮ツールを開く</h4>
              <p className="text-gray-700">任意のブラウザでPixelPDFのPDF圧縮ページにアクセスします。登録やソフトウェアのインストールは不要です。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">PDFをアップロード</h4>
              <p className="text-gray-700">ファイルをアップロードエリアにドラッグ＆ドロップするか、「参照」をクリックしてパソコンから選択します。50MBまでのファイルに対応しています。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">圧縮レベルを選択</h4>
              <p className="text-gray-700">品質とサイズ削減のバランスを取るには「中」を選択します（通常40〜60%の削減）。制限を大幅に超えている場合は、「高」圧縮で最大80%まで削減できます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">圧縮済みファイルをダウンロード</h4>
              <p className="text-gray-700">ツールに圧縮前後のサイズが表示されます。新しいファイルがメールプロバイダーの制限内であることを確認してから、ダウンロードしてメールに添付します。</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">圧縮前後の比較</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">文書の種類</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">元のサイズ</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">圧縮後のサイズ</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">削減率</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">写真付きクライアント提案書（30ページ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">スキャンした医療記録（80ページ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">52 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">マーケティングパンフレット（20ページ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">27 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">署名付き契約書（15ページ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法2：PDF内の画像品質を下げる</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFに高解像度の写真やグラフィックが含まれている場合、画像がファイルサイズが大きい主な原因である可能性が高いです。ほとんどのPDFには印刷品質（300 DPI）で保存された画像が含まれていますが、画面表示やメール共有には不要です。画像の解像度を150 DPIまたは72 DPIに下げることで、ファイルサイズを大幅に削減できます。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">画像品質を下げる方法</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>PDF圧縮ツールを「高」圧縮で使用</strong> — 埋め込み画像を画面表示に適した解像度に自動的にダウンサンプリングします</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>事前に画像を変換</strong> — PDFを自分で作成する場合、画像を挿入する前に幅1200px以下にリサイズします。TinyPNGやSquooshなどのツールで個別の画像を60〜80%圧縮できます</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700"><strong>不要な画像を削除</strong> — PDFを確認し、装飾画像、重複したロゴ、価値を加えない全ページ背景などを削除します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700"><strong>PDFとして再保存</strong> — 画像を最適化した後、ドキュメントを再エクスポートまたは再保存して、削減された画像サイズが最終ファイルに反映されるようにします</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          この方法は、Adobe IllustratorやCanvaなどのデザインソフトウェアから作成されたPDFに特に効果的です。エクスポート設定が最大品質にデフォルト設定されていることが多いためです。スキャン文書の場合、PDF圧縮ツールが画像のダウンサンプリングを自動的に処理します。
        </p>
      </section>

      {/* Method 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法3：PDFを小さなパーツに分割する</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          場合によっては、許容できない品質の低下なしにメール制限以下に圧縮できないPDFがあります。これは200ページ以上のレポート、フルカラーのカタログ、多数の高解像度スキャンを含む文書でよく見られます。このような場合は、PDFを論理的に整理された小さなセクションに分割するのが最適なアプローチです。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">分割してメールで送信する方法</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">PixelPDFの<Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF分割ツール</Link>を開き、大きな文書をアップロードします</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">各パーツのページ範囲を指定します。例えば、1〜50ページをパート1、51〜100ページをパート2のように設定します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">必要に応じて、PDF圧縮ツールを使用して各パーツを個別に圧縮します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">「第3四半期財務レポート - 3部中1部」のように明確な件名で別々のメールを送信し、受信者が順序を把握できるようにします</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          この方法は、各セクションが独立している多章節の文書に適しています。また、受信者が必要な部分だけをダウンロードできるという柔軟性もあります。
        </p>
      </section>

      {/* Method 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法4：PDFをZIPに変換する</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFをZIP化すると、コンテンツに応じて通常10〜30%のサイズ削減が得られます。テキスト中心のPDFはテキストデータが反復的で圧縮可能なため、よく圧縮されます。ただし、すでに内部で圧縮されているPDF（ほとんどの最新PDFが該当）は、ZIP圧縮による恩恵は最小限です。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">ZIP圧縮を使うべき場面</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>PDFがメール制限をわずかに超えている場合（例：25MB制限に対して22MB）</li>
          <li>PDFがテキスト中心で画像が少ない場合</li>
          <li>複数のファイルを添付し、まとめてバンドルしたい場合</li>
          <li>受信者が圧縮アーカイブでの受信を希望している場合</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">PDFをZIP化する方法</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>Windowsの場合：</strong>PDFを右クリックし、「送る」から「圧縮（zip形式）フォルダー」を選択</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>Macの場合：</strong>PDFを右クリックし、コンテキストメニューから「[ファイル名]を圧縮」を選択</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">元のPDFの代わりに、作成された.zipファイルをメールに添付します</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-700"><strong>重要：</strong>一部のメールプロバイダーや企業のファイアウォールは、セキュリティ上の理由から.zip添付ファイルをブロックすることがあります。受信者がZIPファイルを開けない場合は、方法1（オンライン圧縮）を使用してください。</p>
        </div>
      </section>

      {/* Email-Specific Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">メールでPDFを送信する5つのヒント</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">ファイルサイズではなくエンコード後のサイズを確認する</h4>
              <p className="text-gray-700">メールエンコードによりファイルサイズは約33%増加します。20MBのPDFは添付時に約26.6MBになります。上の表の「安全な目標サイズ」を参考にしてください。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">添付してからではなく、添付する前に圧縮する</h4>
              <p className="text-gray-700">大きなファイルを添付してメールクライアントに処理させようとする人がいますが、時間の無駄になり、多くの場合失敗します。先にPDFを圧縮してから、小さくなったバージョンを添付してください。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">分かりやすいファイル名を使用する</h4>
              <p className="text-gray-700">圧縮済みファイルに明確な名前を付けます（例：「Q3-Report-FINAL-compressed.pdf」）。受信者が内容を把握し、最適化されていることが分かるようにします。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">非常に大きなファイルにはクラウドリンクを検討する</h4>
              <p className="text-gray-700">PDFを制限以下に圧縮できない場合は、Google Drive、Dropbox、OneDriveを使用してダウンロードリンクを共有してください。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">送信前にプレビューする</h4>
              <p className="text-gray-700">圧縮済みPDFを開いてスクロールし、テキストが読みやすく、画像が目的に十分な品質であることを確認してからメールに添付してください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">メール用にPDFのサイズをどれくらい削減できますか？</summary>
            <p className="mt-3 text-gray-700">
              オンライン圧縮ツールを使用すると、ほとんどのPDFを40〜80%削減できます。テキスト中心の文書は通常50〜70%、画像中心のPDFは高圧縮で60〜80%削減できます。実際の削減率は元のコンテンツと選択した圧縮レベルによって異なります。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFを圧縮するとぼやけたり読めなくなったりしますか？</summary>
            <p className="mt-3 text-gray-700">
              「中」圧縮では、テキストは完全にシャープで、画像は画面表示に十分な品質を保ちます。「高」圧縮では写真にわずかな柔らかさが生じる場合がありますが、テキストは完全に読み可能です。送信前に必ず圧縮ファイルをプレビューして、品質を確認してください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">なぜ19MBのPDFがGmailに拒否されるのですか？</summary>
            <p className="mt-3 text-gray-700">
              Gmailの25MB制限は生のファイルサイズではなくエンコード後のサイズに適用されます。メールプロトコルはBase64エンコードを使用し、ファイルサイズを約33%増加させます。19MBのファイルはエンコード時に約25.3MBになり、制限を超えます。安全のため18MB以下にしてください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">スマートフォンでメール送信前にPDFを圧縮できますか？</summary>
            <p className="mt-3 text-gray-700">
              はい。PixelPDFのPDF圧縮ツールはブラウザがある任意のデバイスで動作します。スマートフォンのSafariやChromeを開き、PDFをアップロードして圧縮し、小さくなったファイルをダウンロードしてからメールアプリで添付します。全プロセスは1分未満で完了します。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">機密情報を含むPDFを圧縮するのは安全ですか？</summary>
            <p className="mt-3 text-gray-700">
              PixelPDFはクライアントサイド技術を使用して、すべての圧縮処理をブラウザ内で行います。ファイルがサーバーにアップロードされることは一切ありません。そのため、契約書、財務諸表、医療記録などの機密文書でも安全に使用できます。
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">メール添付用にPDFを小さくしましょう</h2>
        <p className="mb-6 text-blue-100">数秒でPDFを圧縮 — 無料・安全・登録不要</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDFを無料で圧縮
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="font-medium">PDF圧縮</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">PDF分割</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF結合</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDFをJPGに変換</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
