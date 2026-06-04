// Compress PDF for Outlook - 長文 (1200-1500字) - 日本語翻訳
// 路径: /src/app/blog/compress-pdf-for-outlook/ja/page.tsx
// 日付: 2026-06-04

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outlookの20MB制限に合わせてPDFを圧縮する方法（ステップバイステップ）',
  description: 'Outlookの20MB制限に合わせてPDFを圧縮する方法を学びましょう。PDFファイルサイズの縮小、大きな文書の分割、Outlookの添付ファイル制限を回避するためのステップバイステップガイド。',
  keywords: ['Outlook 20MB制限 PDF圧縮', 'Outlook 添付ファイル サイズオーバー', 'PDFサイズ縮小 Outlook', 'Outlook 添付ファイル制限', 'PDF圧縮 オンライン'],
  openGraph: {
    title: 'Outlookの20MB制限に合わせてPDFを圧縮する方法（ステップバイステップ）',
    description: 'Outlookの20MB制限に合わせてPDFを圧縮する方法を学びましょう。PDFファイルサイズの縮小、大きな文書の分割、Outlookの添付ファイル制限を回避するためのステップバイステップガイド。',
    type: 'article',
  },
};

export default function CompressPdfForOutlook() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>Outlook用PDF圧縮</span>
      </nav>

      {/* H1タイトル */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Outlookの20MB制限に合わせてPDFを圧縮する方法（ステップバイステップ）
      </h1>

      {/* メタ情報 */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月4日</span>
        <span className="mx-2">&bull;</span>
        <span>8分で読める</span>
        <span className="mx-2">&bull;</span>
        <span>約1,350文字</span>
      </div>

      {/* イントロダクション */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          詳細な四半期レポートを完成させ、PDFとして保存し、Outlookメールに添付しました。&quot;送信&quot;をクリックした数秒後、Outlookにエラーが表示されます：&quot;ファイルサイズが許容制限を超えています。&quot;これはOutlookユーザーにとって最も一般的な不満の一つです。Microsoft Outlookは、ほとんどのアカウントでGmailの25MB制限よりも厳しい20MBの添付ファイル制限を設けています。朗報は、PDFを圧縮することが迅速で確実な解決策になるということです。このガイドでは、3つの実証済みの方法でOutlookの20MB制限に合わせてPDFを圧縮する方法と、今後この問題を回避するための実用的なヒントを学びます。
        </p>
      </section>

      {/* クイックアンサーボックス - フィーチャードスニペットターゲット */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">クイックアンサー：Outlook用PDFを3ステップで圧縮する方法</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>PDFをアップロード</strong>して、PixelPDFの<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF圧縮ツール</Link>で処理します。ドラッグ＆ドロップまたはクリックしてファイルを選択できます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>&quot;中&quot;圧縮を選択</strong>します。ファイルサイズの削減と品質の保持の最適なバランスが得られます。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>圧縮されたPDFをダウンロード</strong>して、Outlookメールに添付します。送信前に20MB以下であることを確認してください。</p>
          </div>
        </div>
      </section>

      {/* Outlookの添付ファイル制限について */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Outlookの添付ファイル制限について</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Outlookの添付ファイルの最大サイズは？</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outlookの添付ファイル制限は、メールプロバイダーとサブスクリプションプランによって異なります。ほとんどの標準的なOutlook.comおよびMicrosoft 365個人アカウントは、1通のメールにつき20MBに制限されています。一部のOffice 365エンタープライズプランでは最大25MB、IT管理者が管理するExchange Onlineアカウントでは最大35MBまたは150MBのカスタム制限が設定されている場合があります。ただし、大多数のユーザーにとって、20MBの上限が守るべき厳格な制限です。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">メールプロバイダーの添付ファイル制限比較</h3>
        <div className="overflow-x-auto mb-4">
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
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook.com</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">標準の無料アカウント</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Microsoft 365 個人版</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">一部のプランは25MB対応</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Google Workspaceも同じ制限</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Yahooアプリ経由の添付</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Outlookと同じ制限</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">20MB制限に含まれるものは？</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          多くのOutlookユーザーが見落とす重要な詳細があります：20MBの制限は、ファイルの<strong>エンコード済み</strong>サイズに適用され、実際のファイルサイズではありません。メールプロトコルはバイナリファイルをテキストとして送信するためにBase64エンコードを使用し、これによりサイズが約33%増加します。つまり、エクスプローラーで15MBと表示されるPDFは、実際にはOutlookの添付ファイル割り当ての約20MBを消費します。実用的には、PDFファイルを<strong>15MB以下</strong>に保つことで、Outlookの20MB制限内に確実に収めることができます。
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
          <p className="text-gray-700"><strong>プロのヒント：</strong>Outlookに添付する前に、必ずPDFを15MB以下に圧縮してください。これにより、約33%のBase64エンコードのオーバーヘッドを考慮し、メールがエラーなく確実に送信されます。</p>
        </div>
      </section>

      {/* 方法1 - オンラインでPDFを圧縮 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法1：オンラインでPDFを圧縮する（おすすめ）</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outlookの20MB制限内にPDFを収める最も速い方法は、オンライン圧縮ツールを使用することです。PixelPDFの<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link>ツールは、すべての処理をブラウザ上で直接行うため、ファイルがデバイスから外部に出ることはありません。ソフトウェアのインストール、アカウント作成、待機時間は一切不要です。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">ステップバイステップガイド</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">PDF圧縮ツールを開く</h4>
              <p className="text-gray-700">任意の最新ブラウザでPixelPDFのPDF圧縮ページにアクセスします。ツールは即座に読み込まれ、すぐに使用できます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">PDFファイルをアップロード</h4>
              <p className="text-gray-700">PDFをアップロードエリアにドラッグ＆ドロップするか、&quot;参照&quot;をクリックしてコンピュータから選択します。ツールは最大50MBのファイルに対応しており、サイズオーバーの添付ファイルの大部分をカバーしています。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">圧縮レベルを選択</h4>
              <p className="text-gray-700">Outlookの添付ファイルには&quot;中&quot;圧縮を選択します。通常、40〜60%のサイズ削減を実現しながら、テキストを鮮明に、画像をクリアに保ちます。PDFが20MBを大幅に超える場合は、最大80%の削減が可能な&quot;高&quot;圧縮を選択してください。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">結果をダウンロードして確認</h4>
              <p className="text-gray-700">&quot;ダウンロード&quot;をクリックして圧縮されたPDFを保存します。ツールは元のサイズと圧縮後のサイズを並べて表示するため、Outlookに添付する前に15MB以下であることを確認できます。</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">圧縮前後のサイズ比較</h3>
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
                <td className="border border-gray-300 px-4 py-3">グラフ付きクライアント提案書（30ページ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">スキャン済み従業員ハンドブック（80ページ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">45 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">69%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">写真付きマーケティング資料</td>
                <td className="border border-gray-300 px-4 py-3 text-center">29 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">72%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">署名付きの法的契約書</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 方法2 - PDFを分割 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法2：PDFを小さなパーツに分割する</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          圧縮はほとんどの文書で機能しますが、最大圧縮を行っても20MBを超えるPDFに遭遇することがあります。これは、エンジニアリングの図面、医療記録、写真中心の製品カタログなど、数百ページの高解像度スキャン文書でよく見られます。圧縮だけでは不十分な場合、PDFを複数の小さなファイルに分割するのが最適な方法です。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">圧縮ではなく分割すべき場合</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>100ページ以上のスキャン内容を含む文書で、圧縮効果が最小限の場合</li>
          <li>各章や付録を個別に送信できるマルチセクションレポート</li>
          <li>&quot;高&quot;圧縮を使用しても20MBを超えるファイル</li>
          <li>特定のページのみを特定の受信者と共有する必要がある場合</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Outlookで分割して送信する方法</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">PixelPDFの<Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF分割ツール</Link>を使用して、文書を論理的なセクションに分割します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">各分割ファイルが15MB以下であることを確認します（Base64エンコードのオーバーヘッドを考慮）</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">件名を明確にして別々のメールを送信します：&quot;第3四半期財務レポート - 第1部（全3部）&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">最初のメールに、追加のパーツが続くことを説明する簡単なメモを含めます</p>
          </div>
        </div>
      </section>

      {/* 方法3 - OneDrive/SharePoint */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">方法3：OneDriveまたはSharePointのリンク共有を使用する</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          すでにMicrosoftエコシステムを使用している場合、OneDriveとSharePointはOutlookの添付ファイル制限に対する自然な回避策を提供します。ファイルを直接添付する代わりに、OneDriveまたはSharePointにアップロードし、メールでリンクを共有します。この方法は、Office 365ユーザーにとって特に便利です。OneDriveはOutlookの作成ウィンドウに直接統合されているからです。
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">OutlookでOneDrive経由で共有する方法</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Outlookで添付ファイルアイコンをクリックし、ローカルファイルの代わりに&quot;クラウドの場所を参照&quot;を選択します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">OneDriveまたはSharePointを選択し、PDFをアップロードすると、Outlookが自動的に共有リンクを挿入します</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">機密性に応じて、共有権限を&quot;受信者が表示可能&quot;または&quot;特定のユーザー&quot;に設定します</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">メリット</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> ファイルサイズの制限なし</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> 受信者はブラウザでPDFをプレビュー可能</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> 再送信せずにファイルを更新可能</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Office 365ユーザー向けにOutlookに直接統合</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">制限事項</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> 受信者は閲覧にインターネットアクセスが必要</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> 一部の組織は外部クラウドリンクをブロック</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> 権限が変更されるとリンクが切れる可能性</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> 機密文書や規制対象の文書には不適切</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outlookユーザー向けのヒント */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">大きなPDFを扱うOutlookユーザー向け5つのヒント</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">常に15MBを目指す（20MBではなく）</h4>
              <p className="text-gray-700">Base64エンコードにより約33%のオーバーヘッドが追加されるため、ディスク上の15MBファイルは添付時に約20MBになります。15MBを目標にして、予期せぬ問題を回避してください。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">メール作成前に圧縮する</h4>
              <p className="text-gray-700">Outlookが添付ファイルを拒否するまで待たないでください。まずPDFを圧縮してから、Outlookを開いてメールを作成してください。時間の節約になり、イライラを防ぎます。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Officeアプリで&quot;縮小サイズで保存&quot;を使用する</h4>
              <p className="text-gray-700">Word、Excel、PowerPointからPDFをエクスポートする場合、保存前に組み込みの&quot;ファイルサイズの縮小&quot;オプションを使用してください。これにより、圧縮ツールを使用する前に30〜50%のファイルサイズ削減が可能です。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">不要な画像とフォントを削除する</h4>
              <p className="text-gray-700">送信前にPDFを監査してください。未使用の画像、埋め込みフォント、メタデータを削除して、ファイルの肥大化を防ぎます。PixelPDFなどのツールは圧縮中にこれらを自動的に処理します。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">IT部門にカスタム制限を確認する</h4>
              <p className="text-gray-700">雇用主を通じてExchangeアカウントを使用している場合、ITチームがより高い添付ファイル制限を設定している可能性があります。不要な分割や圧縮を行う前に、組織のメールポリシーを確認してください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">ファイルが20MB以下なのにOutlookが添付ファイルが大きすぎると言うのはなぜですか？</summary>
            <p className="mt-3 text-gray-700">
              これはBase64エンコードが原因です。Outlookがファイルを添付する際、バイナリデータをメール送信用のテキストに変換し、サイズが約33%増加します。コンピュータ上で16MBのPDFは、エンコード時に約21MBになり、Outlookの20MB制限を超えます。この問題を完全に回避するには、PDFを15MB以下に圧縮してください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Outlookの添付ファイル制限を増やすことはできますか？</summary>
            <p className="mt-3 text-gray-700">
              個人用Outlook.comアカウントの場合、20MBの制限は固定されており変更できません。ただし、雇用主を通じてMicrosoft 365を使用している場合、Exchange管理者がより高い制限（一部の構成では最大150MB）を設定している可能性があります。組織の具体的な制限についてはIT部門に確認してください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">機密情報を含むPDFを圧縮するのは安全ですか？</summary>
            <p className="mt-3 text-gray-700">
              PixelPDFを使用する場合は安全です。当社の圧縮ツールは、クライアントサイド技術を使用してブラウザ上でファイルを完全に処理します。PDFがサーバーにアップロードされることはないため、契約書、財務諸表、医療記録などの機密文書は処理全体を通じてデバイス上で完全にプライベートに保たれます。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">圧縮後もPDFが20MBを超えている場合はどうすればよいですか？</summary>
            <p className="mt-3 text-gray-700">
              最大圧縮でも制限以下にならない場合は、<Link href="/split-pdf" className="text-blue-600 hover:underline">PDF分割ツール</Link>を使用して文書を小さなパーツに分割してください。または、ファイルをOneDriveまたはSharePointにアップロードし、Outlookメールに直接添付する代わりにリンクを共有してください。
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Outlook for Macも同じ20MB制限がありますか？</summary>
            <p className="mt-3 text-gray-700">
              はい、20MBの添付ファイル制限は、Outlook for Mac、Outlook for Windows、Outlook Webアプリなど、すべてのバージョンのOutlookに適用されます。制限はメールサーバーによって決定され、クライアントアプリケーションではないため、すべてのプラットフォームで一貫しています。
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Outlook用PDFを圧縮する準備はできましたか？</h2>
        <p className="mb-6 text-blue-100">数秒でPDFを15MB以下に縮小 - 無料、安全、登録不要</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          無料でPDFを圧縮
        </Link>
      </section>

      {/* 関連ツール */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#9986;</div>
            <div className="font-medium">PDF分割</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128196;</div>
            <div className="font-medium">PDF結合</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128295;</div>
            <div className="font-medium">PDF圧縮</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128444;</div>
            <div className="font-medium">PDF to JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
