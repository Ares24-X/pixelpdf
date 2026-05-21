// 画像をPDFに変換する方法（2026年）
// 路径: /src/app/blog/image-to-pdf-quick-guide/ja/page.tsx
// 日期: 2026-05-21

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '画像をPDFに変換する方法（2026年）- JPG、PNGを無料変換',
  description: 'JPG、PNG、WebP、GIFなどの画像をPDFにオンラインで変換する方法。登録不要、サーバーアップロードなし、100%無料。',
  keywords: ['画像 PDF 変換', 'JPG PDF', 'PNG PDF', '画像からPDF', '写真をPDF'],
  openGraph: {
    title: '画像をPDFに変換する方法（2026年）',
    description: '画像をPDFに変換するクイックガイド。無料、快速、 安全.',
    type: 'article',
  },
};

export default function ImageToPdfGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12" lang="ja">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>画像からPDFへ</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        画像をPDFに変換する方法（2026年）
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-600 mb-6">
        JPG、PNG画像をPDFに変換する無料オンラインガイド
      </p>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月21日</span>
        <span className="mx-2">•</span>
        <span>4分</span>
        <span className="mx-2">•</span>
        <span>約650文字</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          写真やす画像をPDFドキュメントに変換する必要がありますか？フォトアルバムを作成したり、レシートをスキャンしたり、提出用のドキュメントを準備したりする場合、画像をPDFに変換するのは思っているより簡単です。このクイックガイドでは、1分以内に変換する方法をご紹介します。
        </p>
      </section>

      {/* Quick Steps */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3ステップで画像からPDFに変換</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">画像をアップロード</h3>
              <p className="text-gray-700 mt-1">PixelPDFの画像からPDFへのツールにアクセスし、画像をドラッグ＆ドロップするか、クリックしてデバイスからファイルを選択してください。</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">必要に応じて並べ替え</h3>
              <p className="text-gray-700 mt-1">ドラッグ＆ドロップで画像を希望の順序に並べ替えます。各画像が個別のページになります。</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">PDFをダウンロード</h3>
              <p className="text-gray-700 mt-1">「PDFに変換」をクリックすると、ドキュメントが即座にダウンロードされます。それだけで完了！</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            無料で画像からPDFへ
          </Link>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">対応画像フォーマット</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">JPG / JPEG</div>
            <div className="text-sm text-gray-500">最も一般的なフォーマット</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎨</div>
            <div className="font-medium">PNG</div>
            <div className="text-sm text-gray-500">透明な背景</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📸</div>
            <div className="font-medium">WebP</div>
            <div className="text-sm text-gray-500">モダンをформат</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">GIF</div>
            <div className="text-sm text-gray-500">アニメーション画像</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">画像からPDFへの変換は免费ですか？</summary>
            <p className="mt-3 text-gray-700">はい！PixelPDFの画像からPDFへのツールは完全に免费で使用できます。登録不要、制限なし透かしなし。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">一度に何枚の画像を変換できますか？</summary>
            <p className="mt-3 text-gray-700">1回の変換で最大20枚の画像をアップロードできます。各画像が結果のPDFの1ページになります。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">データは安全ですか？</summary>
            <p className="mt-3 text-gray-700">もちろんです。すべての処理はブラウザー内で実行されます。画像がデバイスから離れることはなく、完全なプライバシーが確保されます。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">ページサイズを変更できますか？</summary>
            <p className="mt-3 text-gray-700">はい！PixelPDFは各画像をページに 자동으로 맞춰줍니다。A4、レター、レガル、または自動맞춤オプションから選べます。</p>
          </details>
        </div>
      </section>

      {/* Related Tools */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/pdf-to-jpg" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>📄</span> PDFからJPG
          </Link>
          <Link href="/merge-pdf" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🔗</span> PDF結合
          </Link>
          <Link href="/compress-pdf" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🗜️</span> PDF圧縮
          </Link>
        </div>
      </section>
    </article>
  );
}
