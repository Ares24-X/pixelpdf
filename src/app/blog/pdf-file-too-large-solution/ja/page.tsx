// PDFファイルが大きすぎる？解決方法
// パス: /src/app/blog/pdf-file-too-large-solution/ja/page.tsx
// 日付: 2026-05-23

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFファイルが大きすぎる？解決方法（2026年）',
  description: 'メールやアップロードに大きすぎるPDFファイルの簡単な解決策。各プラットフォームのサイズ制限とPDFファイルサイズを縮小する方法を学びましょう。',
  keywords: ['PDF 大きすぎる', 'PDF サイズ縮小', 'PDF 圧縮', 'PDF ファイルサイズ制限', '大きなPDF 解決策'],
  openGraph: {
    title: 'PDFファイルが大きすぎる？解決方法（2026年）',
    description: 'メールやアップロードに大きすぎるPDFファイルの簡単な解決策。サイズ制限とPDFファイルサイズを縮小する方法を学びましょう。',
    type: 'article',
  },
};

export default function PdfFileTooLargeSolution() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>PDFが大きすぎる解決策</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFファイルが大きすぎる？解決方法（2026年）
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月23日</span>
        <span className="mx-2">•</span>
        <span>5分で読める</span>
        <span className="mx-2">•</span>
        <span>約720文字</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          完璧なPDFドキュメントを作成したのに、ファイルが大きすぎてアップロード、メール送信、共有できないという状況に陥ったことはありませんか？このイライラするシナリオは、思ったよりも頻繁に発生します。良いニュースは？大きすぎるPDFを修正するのは、正しいアプローチを知っていれば迅速かつ簡単です。このガイドでは、最も速い解決策を紹介し、異なるプラットフォームでのサイズ制限を理解するお手伝いをします。
        </p>
      </section>

      {/* Quick 3-Step Solution */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">簡単3ステップの解決策</h2>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">PixelPDF圧縮ツールを開く</h3>
              <p className="text-gray-700">
                PixelPDFの<Link href="/compress-pdf" className="text-blue-600 hover:underline">Compress PDF</Link>ページに移動します。登録不要で、すべての処理は最大のプライバシーを確保するためにブラウザ内で行われます。
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">アップロードして圧縮</h3>
              <p className="text-gray-700">
                PDFファイルをアップロードエリアにドラッグアンドドロップします。圧縮レベルを選択します。「中」は通常、ファイルサイズの削減と品質保持のバランスが最も良いです。ツールは圧縮前後のファイルサイズを表示するので、どれだけ節約できたかを正確に確認できます。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">ダウンロードして共有</h3>
              <p className="text-gray-700">
                ダウンロードをクリックして圧縮されたPDFを保存します。新しいファイルはメール送信、アップロード、共有の準備ができています。テキストは検索可能で選択可能なまま、レイアウトも保持されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Size Limits Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">プラットフォーム別サイズ制限（2026年）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          プラットフォームによってファイルサイズの制限が異なります。適切なサイズをターゲットにするのに役立つクイックリファレンスをご覧ください：
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">プラットフォーム</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">サイズ制限</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">メール（Gmail、Outlook）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">メール1通あたりの合計</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">WhatsApp</td>
                <td className="border border-gray-300 px-4 py-3 text-center">100 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">ドキュメント共有</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Slack</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 GB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">無料プランの制限</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Google Driveアップロード</td>
                <td className="border border-gray-300 px-4 py-3 text-center">750 GB/日</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">アカウント1日あたり</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">WeTransfer（無料）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2 GB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">1回の転送あたり</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFサイズを縮小する5つのヒント</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>画像を圧縮：</strong> 高解像度の画像は大きなPDFの主な原因です。PixelPDFの圧縮は読みやすさを維持しながら画像を自動的に最適化します。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>不要なページを削除：</strong> PixelPDFの<Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link>ツールを使用して、必要なページだけを抽出し、表紙、空白ページ、無関係なセクションを破棄します。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>画像品質を下げる：</strong> 完璧な画像品質が不可欠でないドキュメントの場合、より高い圧縮を選択します。最大圧縮でもテキストはシャープなままです。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>グレースケールに変換：</strong> 色が必要ない場合、画像をグレースケールに変換するとファイルサイズを大幅に削減できます。これはスキャンされたテキストドキュメントに適しています。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>大きなドキュメントを分割：</strong> 50MBを超えるファイルの場合、<Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link>を使用して小さな部分に分割し、別々に共有することを検討してください。</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">圧縮でPDFはどれくらい小さくなりますか？</summary>
            <p className="mt-3 text-gray-700">画像が多いPDFは圧縮で60-80%縮小できます。テキスト中心のドキュメントは通常20-40%の削減が見られます。PixelPDFはダウンロード前に正確な圧縮前後のサイズを表示します。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">圧縮はテキスト品質に影響しますか？</summary>
            <p className="mt-3 text-gray-700">いいえ。PDF圧縮は主に画像を最適化し、冗長なデータを削除します。テキストはどの圧縮レベルでもシャープで、選択可能で、検索可能なままです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">圧縮後もPDFが大きすぎる場合はどうすればいいですか？</summary>
            <p className="mt-3 text-gray-700"><Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link>を使用してドキュメントを小さな部分に分割するか、Google DriveやDropboxなどのクラウドストレージサービスを使用してファイルを直接添付する代わりにリンクで共有してください。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">オンラインPDF圧縮は安全ですか？</summary>
            <p className="mt-3 text-gray-700">PixelPDFでは、安全です。すべての圧縮はブラウザ内でローカルに行われます。ファイルはデバイスから離れません。これにより、インストールなしでデスクトップソフトウェアと同じセキュリティを提供します。</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">PDFを縮小する必要がありますか？</h2>
        <p className="mb-6 text-blue-100">数秒でPDFを圧縮。無料、高速、プライベート</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          無料でPDFを圧縮
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">Split PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Merge PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF to JPG</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">Rotate PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
