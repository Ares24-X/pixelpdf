// Convert JPG to PDF on iPhone - 日本語翻訳
// 路径: /src/app/blog/convert-jpg-to-pdf-iphone/ja/page.tsx
// 日期: 2026-06-02

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'iPhoneでJPGをPDFに変換する方法（無料・アプリ不要）',
  description: 'アプリをインストールせずにiPhoneでJPGをPDFに変換する方法を解説。オンライン変換ツール、PDFとして印刷トリック、ファイルアプリの3つの無料方法を紹介。すべてのiOSバージョンに対応。',
  keywords: ['iPhone JPG PDF 変換', 'iPhone 写真 PDF', 'iPhone 画像 PDF 変換', 'iPhone スキャン PDF'],
  openGraph: {
    title: 'iPhoneでJPGをPDFに変換する方法（無料・アプリ不要）',
    description: 'アプリをインストールせずにiPhoneでJPGをPDFに変換する3つの無料方法を解説。Safari、ファイルアプリなどでそのまま使えます。',
    type: 'article',
  },
};

export default function ConvertJpgToPdfIphoneJa() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>iPhoneでJPGをPDFに変換</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        iPhoneでJPGをPDFに変換する方法（無料・アプリ不要）
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月2日</span>
        <span className="mx-2">•</span>
        <span>5分で読める</span>
        <span className="mx-2">•</span>
        <span>約900字</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          iPhoneは美しい写真を撮影し、鮮明な文書をスキャンできますが、それらの画像を個別のJPGファイルとして共有するのは実用的とは限りません。多くの職場、政府機関、オンラインフォームはPDF形式の文書を求めています。朗報は、iPhoneでJPGをPDFに変換するためにアプリを1つもダウンロードする必要がないということです。このガイドでは、内蔵機能やブラウザベースのツールを使用して、iPhone上で直接動作する3つの完全に無料の方法を紹介します。
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">3ステップでiPhoneのJPGをPDFに変換</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Safariを開く</strong> — PixelPDFの<Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">画像からPDFツール</Link>にアクセス</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>JPG写真をアップロード</strong> — 「ファイルを選択」をタップし、写真アプリまたはファイルアプリから画像を選択</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>PDFをダウンロード</strong> — ツールが画像を瞬時に変換し、PDFをiPhoneに保存</p>
          </div>
        </div>
      </section>

      {/* Why Convert Photos to PDF on iPhone? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">iPhoneで写真をPDFに変換する理由</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          iPhoneでJPG画像をPDFに変換すると、iPhoneユーザーが日常的に遭遇するいくつかの一般的な問題を解決できます。
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">メールで文書を送信</h4>
            <p className="text-gray-700 text-sm">ほとんどの企業は正式な文書をPDF添付ファイルとして求めており、バラバラの画像ファイルは受け付けません。複数ページのPDFはプロフェッショナルに見え、文書が真剣に受け取られます。</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">レシートをスキャン</h4>
            <p className="text-gray-700 text-sm">レシートの写真を1つのPDFにまとめて経費精算に使えます。複数のレシートを1つのファイルにまとめると、提出が簡単になり、記録も整理されます。</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">複数の写真を共有</h4>
            <p className="text-gray-700 text-sm">10個の別々のJPGファイルを送信する代わりに、1つのPDFにまとめましょう。受信者は散らかった受信箱ではなく、1つの整理された文書を受け取れます。</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">ファイルサイズを削減</h4>
            <p className="text-gray-700 text-sm">圧縮画像を含むPDFは、複数のフル解像度JPGファイルよりも小さくなることが多く、アップロードが速くなり、メッセージアプリでの共有も簡単になります。</p>
          </div>
        </div>
      </section>

      {/* Method 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法1：オンライン変換ツールを使う（おすすめ）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          iPhoneでJPGをPDFに変換する最も速い方法は、Safariで直接動作するオンラインツールです。PixelPDFの<Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">画像からPDF変換ツール</Link>は無料で、アプリのインストール不要、プライバシー保護のためすべてブラウザ内で処理されます。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">ステップバイステップガイド</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Safariを開いてツールにアクセス</h4>
              <p className="text-gray-700">Safariでpixelpdf.com/image-to-pdfと入力するか、上のリンクをタップします。ページは瞬時に読み込まれ、すべてのiOSバージョンで動作します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">JPG画像を選択</h4>
              <p className="text-gray-700">「ファイルを選択」またはアップロードエリアをタップします。iPhoneに写真、ファイル、カメラのオプションが表示されます。複数の画像を一度に選択できます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">並べ替えて変換</h4>
              <p className="text-gray-700">必要に応じてドラッグで画像の順序を変更できます。各画像がPDFの1ページになります。「変換」をタップしてPDFを瞬時に生成します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">ダウンロードまたは共有</h4>
              <p className="text-gray-700">「ダウンロード」をタップしてPDFをiPhoneのファイルアプリに保存するか、共有アイコンをタップしてメール、AirDrop、メッセージで直接送信できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Method 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法2：iPhoneの「PDFとして印刷」トリックを使う</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          iOSには共有シートに隠された「PDFとして印刷」機能が組み込まれています。この方法は印刷ダイアログを使用してPDFを生成しますが、実際には何も印刷しません。iPhoneで表示できる画像やドキュメントで動作します。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">ステップバイステップガイド</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>写真アプリ</strong>を開き、変換したいJPG画像を選択します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>共有ボタン</strong>（上向きの矢印が付いた四角いアイコン）をタップします</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">共有シートのオプションから下にスクロールして<strong>「印刷」</strong>をタップします</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">印刷プレビューを2本の指で外に広げると、<strong>PDFプレビュー付きの共有シートが再表示</strong>されます</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <p className="text-gray-700"><strong>「ファイルに保存」</strong>をタップしてPDFを保存するか、メール、AirDrop、その他の共有オプションで送信します</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-700"><strong>注意：</strong>このトリックはiOS 13以降で動作します。1回に1枚の画像を変換します。複数のJPGを1つの複数ページPDFにまとめる場合は、方法1を使用してください。</p>
        </div>
      </section>

      {/* Method 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法3：ファイルアプリのクイックアクションを使う</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          iOSのファイルアプリには、ファイルアプリやiCloud Driveに保存された画像で動作する「PDFを作成」アクションが組み込まれています。JPGがすでに写真アプリではなくファイルアプリに保存されている場合、これが最速の方法です。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">ステップバイステップガイド</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">iPhoneで<strong>ファイルアプリ</strong>を開き、JPG画像が含まれるフォルダに移動します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">右上の<strong>「選択」</strong>をタップし、PDFに含めたい各JPG画像をタップします</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">画面下部の<strong>三点メニュー</strong>（その他オプション）をタップします</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700"><strong>「PDFを作成」</strong>を選択 — iOSが選択した画像から複数ページのPDFを瞬時に生成します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <p className="text-gray-700">PDFは同じフォルダに保存されます。タップしてプレビュー、共有、または別の場所に移動できます</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3つの方法の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">機能</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">オンライン変換</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">PDFとして印刷</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">ファイルアプリ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">複数画像を1つのPDFに</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-600">非対応（1枚ずつ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">アプリ不要</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">ページの並べ替え</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-600">非対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-600">非対応</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">オフライン動作</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-600">非対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">画像圧縮オプション</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-600">非対応</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-red-600">非対応</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">おすすめ用途</td>
                <td className="border border-gray-300 px-4 py-3 text-center">一括変換・細かい調整</td>
                <td className="border border-gray-300 px-4 py-3 text-center">手軽な1枚変換</td>
                <td className="border border-gray-300 px-4 py-3 text-center">保存済みファイル</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">iPhoneで複数のJPGを1つのPDFに変換できますか？</summary>
            <p className="mt-3 text-gray-700">
              はい。オンライン変換ツール（方法1）では、複数の画像を選択して1つの複数ページPDFにまとめることができます。変換前にページの順序を変更することも可能です。ファイルアプリの方法（方法3）も複数画像に対応していますが、並べ替えはできません。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">iPhoneでJPGをPDFに変換するのにアプリは必要ですか？</summary>
            <p className="mt-3 text-gray-700">
              いいえ。このガイドの3つの方法はすべて、アプリのインストール不要で動作します。方法1はSafariを使用し、方法2は内蔵の印刷ダイアログを使用し、方法3は標準のファイルアプリを使用します。App Storeにアクセスする必要はありません。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">変換したPDFはiPhoneのどこに保存されますか？</summary>
            <p className="mt-3 text-gray-700">
              オンライン変換ツールを使用した場合、PDFはファイルアプリのダウンロードフォルダに保存されます。PDFとして印刷のトリックでは、保存先を選択できます。ファイルアプリの方法では、元の画像と同じフォルダにPDFが作成されます。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">iPhoneでJPGをPDFに変換すると画質は落ちますか？</summary>
            <p className="mt-3 text-gray-700">
              PDFとして印刷とファイルアプリの方法は元の画像品質を保持します。オンライン変換ツールには圧縮オプションがあり、フル品質を維持するか、共有しやすくするためにファイルサイズを削減するかを選択できます。中圧縮では通常40〜60%のサイズ削減で、目に見える品質低下は最小限です。
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">今すぐiPhoneの写真をPDFに変換</h2>
        <p className="mb-6 text-blue-100">無料・アプリ不要・Safariで直接動作 — 数秒でJPGをPDFに変換</p>
        <Link
          href="/image-to-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          画像からPDFへ（無料）
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/image-to-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="font-medium">画像からPDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="font-medium">PDF圧縮</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDFをJPGに変換</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF結合</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
