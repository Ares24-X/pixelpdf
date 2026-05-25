// 複数の画像を1つのPDFにまとめる方法 - 日本語版
// パス: /src/app/blog/combine-images-into-pdf/ja/page.tsx
// 日付: 2026-05-25

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '複数の画像を1つのPDFにまとめる方法（2026年）',
  description: '複数の画像を1つのPDFファイルにまとめる方法のクイックガイド。無料のオンラインツール、登録不要、100%安全。',
  keywords: ['画像をPDFにまとめる', '画像を結合してPDFに', '複数画像をPDFに', 'フォトコラージュPDF', '画像のPDF変換'],
  openGraph: {
    title: '複数の画像を1つのPDFにまとめる方法（2026年）',
    description: '複数の画像を1つのPDFにまとめるクイックガイド。無料、高速、安全。',
    type: 'article',
  },
};

export default function CombineImagesIntoPDFJA() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>画像をPDFにまとめる</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        複数の画像を1つのPDFにまとめる方法（2026年）
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月25日</span>
        <span className="mx-2">•</span>
        <span>4分で読める</span>
        <span className="mx-2">•</span>
        <span>612語</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          複数の写真や画像を1つのPDFドキュメントにまとめる必要がありますか？フォトコラージュの作成、スキャンした書類の整理、プレゼンテーションの準備など、画像を1つのPDFにまとめると共有やアーカイブがはるかに簡単になります。無料で素早く行う方法をご紹介します。
        </p>
      </section>

      {/* Quick 3-Step Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3ステップで画像をPDFにまとめる</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">すべての画像をアップロード</h3>
              <p className="text-gray-700 mt-1">PixelPDFの<Link href="/image-to-pdf" className="text-blue-600 hover:underline">画像からPDF</Link>ツールに移動し、すべての画像を一度にドラッグします。Ctrl/Cmd + クリックで複数のファイルを選択できます。</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">画像の順序を変更</h3>
              <p className="text-gray-700 mt-1">ドラッグ＆ドロップで画像を希望の順序に並べ替えます。各画像は最終的なPDFで別々のページになります。</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">まとめたPDFをダウンロード</h3>
              <p className="text-gray-700 mt-1">「PDFに変換」をクリックすると、複数ページのPDFが即座にダウンロードされます。すべての処理はブラウザ上で行われ、画像はデバイスから離れません。</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            今すぐ画像をまとめる
          </Link>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">対応画像フォーマット</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">JPG / JPEG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">PNG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">WebP</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">GIF</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">BMP</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-3">1回の変換で異なるフォーマットを混在させることができます—PixelPDFがすべて自動的に処理します。</p>
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">クイックヒント</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>フォトコラージュ：</strong>旅行の写真、家族写真、イベント画像を共有可能なPDFアルバムにまとめましょう。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>スキャンした書類：</strong>複数のスキャンページを1つの整理されたドキュメントにまとめて、メール送信を簡単に。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>プレゼンテーション：</strong>チャート、図、スクリーンショットを組み合わせて視覚的なプレゼンテーションを作成。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>領収書と請求書：</strong>すべての経費書類を1つのPDFファイルにまとめて保管。</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">一度に何枚の画像をまとめられますか？</summary>
            <p className="mt-3 text-gray-700">1回の変換で最大20枚の画像をまとめることができます。各画像は結果のPDFで1ページになります。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">このサービスは本当に無料ですか？</summary>
            <p className="mt-3 text-gray-700">はい！PixelPDFは完全に無料で、登録不要、透かしなし、1回の変換で20枚までという制限以外にファイル制限はありません。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">画像はサーバーにアップロードされますか？</summary>
            <p className="mt-3 text-gray-700">いいえ。すべての処理はブラウザ上でローカルに行われます。画像はデバイスから離れないため、完全なプライバシーが確保されます。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDF作成後にページ順序を変更できますか？</summary>
            <p className="mt-3 text-gray-700">PDF作成後にページ順序を変更する必要がある場合は、<Link href="/split-pdf" className="text-blue-600 hover:underline">PDF分割</Link>ツールを使用してページを分離し、希望の順序で結合することができます。</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">画像をまとめ始めましょう</h2>
        <p className="mb-6 text-blue-100">数秒で画像から複数ページのPDFを作成—無料で安全</p>
        <Link 
          href="/image-to-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          無料で画像をPDFに変換
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF to JPG</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">PDF結合</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">PDF圧縮</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">PDF回転</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
