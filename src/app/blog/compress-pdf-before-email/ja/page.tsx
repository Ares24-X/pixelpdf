// Compress PDF for Email - 日本語翻訳 (500-800字)
// 路径: /src/app/blog/compress-pdf-before-email/ja/page.tsx
// 日期: 2026-05-22

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'メール添付用PDFの圧縮方法（2026年）',
  description: 'メール用にPDFファイルサイズを縮小するクイックガイド。Gmail、Outlook、その他のメールプロバイダーに最適な圧縮設定を学びましょう。',
  keywords: ['メール用PDF圧縮', 'PDFサイズ縮小', 'メール添付ファイルサイズ制限', 'PDFファイルが大きすぎる'],
  openGraph: {
    title: 'メール添付用PDFの圧縮方法（2026年）',
    description: 'メール用にPDFファイルサイズを縮小するクイックガイド。Gmail、Outlook、その他のメールプロバイダーに最適な圧縮設定を学びましょう。',
    type: 'article',
  },
};

export default function CompressPdfForEmail() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>メール用PDF圧縮</span>
      </nav>

      {/* H1タイトル */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        メール添付用PDFの圧縮方法（2026年）
      </h1>

      {/* メタ情報 */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月22日</span>
        <span className="mx-2">•</span>
        <span>読了時間4分</span>
        <span className="mx-2">•</span>
        <span>約650字</span>
      </div>

      {/* イントロダクション */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          完璧なメールを書き上げ、PDFを添付して「送信」をクリックしたのに、ファイルが大きすぎるというエラーメッセージが返ってくるほどイライラすることはありません。メールプロバイダーは添付ファイルのサイズに厳しい制限を設けており、画像やグラフィックが詰まったPDFは簡単にその制限を超えてしまいます。朗報は、適切なツールを使えばPDFの圧縮はわずか数秒で完了し、読みやすさをほとんど損なうことなくファイルサイズを最大80%縮小できることです。
        </p>
      </section>

      {/* メールサイズ制限テーブル */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">メール添付ファイルサイズ制限（2026年）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          圧縮する前に、制限を知っておくと役立ちます。以下は、最も人気のあるメールプロバイダーの現在の添付ファイルサイズ上限です。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">メールプロバイダー</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">添付ファイル制限</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">大きなファイルはGoogle Driveリンク</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook / Hotmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">大きなファイルはOneDriveリンク</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Dropbox連携可能</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Apple Mail（iCloud）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Mail Dropで最大5 GB</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">ProtonMail（無料）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">エンドツーエンド暗号化</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          * 制限はファイルごとではなく、メール1通あたりの合計添付ファイルサイズを指します。
        </p>
      </section>

      {/* 3ステップクイックガイド */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">メール用PDFの圧縮方法（3ステップ）</h2>
        <div className="space-y-8">
          {/* ステップ1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">PDFをアップロード</h3>
              <p className="text-gray-700">
                PixelPDFの<Link href="/compress-pdf" className="text-blue-600 hover:underline">PDF圧縮</Link>ツールにアクセスし、ファイルをページにドラッグ＆ドロップします。または、アップロードエリアをクリックしてデバイスからファイルを選択します。このツールは50MBまでのPDFに対応し、すべての処理はブラウザ内でローカルに行われます。ファイルがサーバーにアップロードされることはありません。
              </p>
            </div>
          </div>

          {/* ステップ2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">圧縮レベルを選択</h3>
              <p className="text-gray-700">
                PixelPDFは通常、低・中・高の複数の圧縮レベルを提供しています。メール添付の場合、中圧縮が通常最適なバランスです。ファイルサイズを大幅に削減しながら、テキストはシャープに、画像は鮮明に保ちます。中圧縮でもファイルが大きすぎる場合は、高圧縮を試してください。PixelPDFは圧縮前後のファイルサイズを表示するため、ダウンロードする前にどれだけ容量を節約できたかを正確に確認できます。
              </p>
            </div>
          </div>

          {/* ステップ3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">ダウンロードして添付</h3>
              <p className="text-gray-700">
                「ダウンロード」をクリックして圧縮されたPDFをデバイスに保存します。メールに添付して、安心して送信できます。圧縮されたファイルはすべての元のコンテンツを保持しています。テキストは検索可能で選択可能なままで、レイアウトも維持されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 圧縮のヒント */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">圧縮のヒント</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>添付する前に圧縮：</strong>メールにPDFを追加する前に必ず圧縮してください。一部のメールクライアントは添付ファイルを自動的に再エンコードし、予期せずファイルサイズが大きくなることがあります。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>圧縮後に品質を確認：</strong>圧縮されたファイルを開いてスクロールし、テキストが読みやすく、画像が許容範囲内であることを確認してください。品質が低すぎる場合は、低い圧縮レベルを試してください。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>非常に大きなファイルは分割：</strong>圧縮だけでは不十分な場合は、PixelPDFの<Link href="/split-pdf" className="text-blue-600 hover:underline">PDF分割</Link>ツールを使用して文書を小さな部分に分割し、複数のメールで送信してください。</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">PDF圧縮でファイルサイズはどれくらい削減できますか？</summary>
            <p className="mt-3 text-gray-700">コンテンツによります。高解像度の画像が多いPDFは、多くの場合60〜80%削減できます。テキスト中心の文書では、通常20〜40%の削減にとどまります。PixelPDFは圧縮前後のサイズを正確に表示するため、ダウンロードする前に結果を確認できます。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFを圧縮するとテキストの品質に影響しますか？</summary>
            <p className="mt-3 text-gray-700">テキストコンテンツは通常、圧縮の影響を受けません。PDF圧縮は主に画像の最適化、冗長データの削除、ファイル構造の合理化によって機能します。テキストはどの圧縮レベルでもシャープで、選択可能で、検索可能なままです。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">オンラインでPDFを圧縮するのは安全ですか？</summary>
            <p className="mt-3 text-gray-700">PixelPDFなら、はい。すべての圧縮はブラウザ内で行われ、ファイルがサーバーにアップロードされることはありません。文書は処理全体を通じてデバイス上に完全にプライベートで安全に保たれます。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">圧縮後もPDFが大きすぎる場合はどうすればよいですか？</summary>
            <p className="mt-3 text-gray-700">圧縮されたファイルがメールプロバイダーの制限を超えている場合は、PixelPDFの<Link href="/split-pdf" className="text-blue-600 hover:underline">PDF分割</Link>ツールを使用して小さな部分に分割してみてください。または、クラウドストレージリンク（Google Drive、OneDrive、Dropbox）を使用して、直接添付する代わりにファイルを共有することも検討してください。</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">メール用にPDFを縮小する必要がありますか？</h2>
        <p className="mb-6 text-blue-100">数秒でPDFを圧縮—ブラウザ上で、完全に無料</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          無料でPDFを圧縮する
        </Link>
      </section>

      {/* 関連ツール */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <Link href="/pdf-encrypt" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="font-medium">PDF暗号化</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
