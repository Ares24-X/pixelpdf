// Password Protect PDF Guide - Japanese Translation
// パス: /src/app/blog/password-protect-pdf-guide/ja/page.tsx
// 日付: 2026-05-26

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFにパスワード保護を追加する方法：完全セキュリティガイド（2026年）',
  description: 'AES-256暗号化でPDFファイルにパスワード保護を追加する方法を学びましょう。ステップバイステップガイド、セキュリティのベストプラクティス、比較表、PDFパスワード保護に関するFAQ。',
  keywords: ['PDF パスワード保護', 'PDF パスワード', 'PDF セキュリティ', 'PDF 暗号化', 'PDF ロック', 'PDF 保護'],
  openGraph: {
    title: 'PDFにパスワード保護を追加する方法：完全セキュリティガイド（2026年）',
    description: 'PDFファイルのパスワード保護に関する完全ガイド。PixelPDFで無料、高速、安全に。',
    type: 'article',
  },
};

export default function PasswordProtectPDFGuideJA() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>PDFパスワード保護ガイド</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFにパスワード保護を追加する方法：完全セキュリティガイド（2026年）
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月26日</span>
        <span className="mx-2">•</span>
        <span>10分で読める</span>
        <span className="mx-2">•</span>
        <span>約1,650文字</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          今日のデジタル環境において、機密文書の保護はもはやオプションではなく、必須となっています。機密性の高いビジネス契約書、財務諸表、個人識別文書を共有する際、PDFファイルにパスワードを追加することで、許可された人のみがコンテンツにアクセスできるようになります。この包括的なガイドでは、2026年にPDFファイルをパスワード保護するために知っておくべきすべてのこと、さまざまなセキュリティ方法の理解から最大限の保護を実現するためのベストプラクティスまでを解説します。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          PixelPDFの無料オンラインPDF暗号化ツールを使用すると、ブラウザ上で直接ドキュメントにパスワード保護を追加できます。すべての処理はお使いのデバイス上でローカルに行われるため、機密ファイルがコンピュータから離れることはありません。最高レベルのプライバシーとセキュリティを提供します。
        </p>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">目次</h2>
        <ul className="space-y-2">
          <li><a href="#why-protect" className="text-blue-600 hover:underline">なぜPDFにパスワード保護が必要なのか？</a></li>
          <li><a href="#security-types" className="text-blue-600 hover:underline">PDFセキュリティの種類</a></li>
          <li><a href="#how-to-protect" className="text-blue-600 hover:underline">PDFにパスワードを追加する方法（ステップバイステップ）</a></li>
          <li><a href="#best-practices" className="text-blue-600 hover:underline">セキュリティのベストプラクティス</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">PDFセキュリティ方法の比較</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">よくある質問</a></li>
        </ul>
      </section>

      {/* Why Password Protect PDFs */}
      <section id="why-protect" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">なぜPDFにパスワード保護が必要なのか？</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          PDFパスワード保護は、機密情報を含むドキュメントにとって重要なセキュリティ層となります。ファイルがメール、クラウドストレージ、メッセージングプラットフォームを通じて日常的に共有される時代において、暗号化は機密コンテンツがどのように送信されても保護されることを保証します。以下は、PDFファイルにパスワード保護を追加する主な使用例です：
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">ビジネス契約書および合意書</h3>
            <p className="text-gray-700">法的文書、合併契約書、ベンダー契約書、秘密保持契約書には、企業の機密情報が含まれていることが多いです。パスワード保護により、競合他社、退職した従業員、意図しない受信者による不正な閲覧を防ぎます。メールで契約書を共有する際、暗号化は組織の利益を守る重要なセキュリティ層を追加します。</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">財務文書</h3>
            <p className="text-gray-700">確定申告書、銀行取引明細書、投資ポートフォリオ、財務報告書には、非常に機密性の高い個人および企業データが含まれています。財務文書が1つ漏洩するだけで、個人情報の盗難、詐欺、競争上の不利につながる可能性があります。パスワード保護により、会計士、監査人、取締役役員など、許可された関係者のみがこれらの重要な記録にアクセスできるようになります。</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">個人識別文書</h3>
            <p className="text-gray-700">スキャンされたパスポート、運転免許証、社会保障カード、出生証明書は頻繁にPDFとして保存されます。これらの文書は個人情報盗難の主な標的です。パスワード保護を追加することで、不正アクセスに対する障壁を作り、個人情報が侵害されるリスクを大幅に低減できます。</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">医療および診療記録</h3>
            <p className="text-gray-700">患者記録、病歴、検査結果、保険文書はHIPAAなどの規制下で保護が必要です。パスワード暗号化は、医療提供者がコンプライアンス要件を満たしながら患者のプライバシーを確保するのに役立ちます。専門医と医療情報を共有する個々の患者も、健康記録のパスワード保護を検討すべきです。</p>
          </div>
        </div>
      </section>

      {/* Types of PDF Security */}
      <section id="security-types" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFセキュリティの種類</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFセキュリティは複数の保護層で構成され、それぞれが異なる目的を果たします。これらの種類を理解することで、特定のニーズに適したセキュリティアプローチを実装できます。
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">パスワード保護</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          パスワード保護は最もアクセスしやすく、広く使用されているPDFセキュリティ方法です。ドキュメントを開いて表示する前にパスワードの入力が必要です。最新のPDF暗号化はAES-256のような強力なアルゴリズムを使用し、軍事レベルのセキュリティを提供します。強力なパスワードで適切に実装すれば、この方法はドキュメントへの不正アクセスを効果的に防ぎます。
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">権限制限</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ドキュメントをロックするだけでなく、PDFセキュリティではユーザーがファイルを開いた後にできることを制御できます。権限設定で、印刷の禁止、テキストと画像のコピー防止、編集の無効化、フォーム入力のブロック、ページ抽出の禁止が可能です。これらの制限は多層防御セキュリティを提供し、許可された閲覧者であってもコンテンツを悪用できないようにします。例えば、請負業者に提案書を閲覧させるが、価格詳細をコピーしたり条件を変更したりすることは防ぐことができます。
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">暗号化規格</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          暗号化はパスワード保護を効果的にする基盤技術です。PDF仕様は複数の暗号化アルゴリズムをサポートしており、AES（Advanced Encryption Standard）が現代の標準です。AES-128は128ビットキーを使用し、ほとんどのアプリケーションで優れたセキュリティを提供します。AES-256は256ビットキーで、さらに強力なセキュリティマージンを提供し、厳格な規制標準への準拠に必要とされることが多いです。両方とも強力なパスワードと組み合わせれば、現在の技術では計算上解読不可能と考えられています。
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          RC4（40ビットおよび128ビット）のような古い暗号化方法は、一部のPDFリーダーで後方互換性のためにまだサポートされていますが、弱いと見なされ、新しいドキュメントでは避けるべきです。2026年にPDFを暗号化する際は、常にAES-256を選択して最大のセキュリティを確保してください。
        </p>
      </section>

      {/* How to Add Password */}
      <section id="how-to-protect" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFにパスワードを追加する方法：ステップバイステップガイド</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          PixelPDFは、ファイルを完全にお使いのデバイス上で処理する安全なブラウザベースのPDF暗号化ツールを提供しています。以下の4つの簡単なステップでPDFドキュメントにパスワード保護を追加できます：
        </p>
        
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">PixelPDFのPDF暗号化ツールにアクセス</h3>
              <p className="text-gray-700 mb-3">PixelPDFの<Link href="/pdf-encrypt" className="text-blue-600 hover:underline">PDF暗号化</Link>ページに移動します。このツールはブラウザ上で完全に動作し、サーバーへのアップロードがないため、機密文書がプロセス全体を通じて完全にプライベートに保たれます。</p>
              <p className="text-gray-700">暗号化インターフェースはクリーンで直感的で、すべての技術レベルのユーザー向けに設計されています。登録やアカウント作成は不要です。ページを開いてすぐに始められます。</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">PDFファイルをアップロード</h3>
              <p className="text-gray-700 mb-3">アップロードエリアをクリックするか、PDFファイルを直接インターフェースにドラッグ＆ドロップします。PixelPDFは最大50MBのファイルをサポートし、ほとんどのビジネスおよび個人用文書サイズに対応しています。</p>
              <p className="text-gray-700">アップロードプロセスは安全なブラウザ接続を使用し、ファイルは外部サーバーに送信されずにローカルで処理されます。このクライアントサイドアプローチは、機密文書に最大のセキュリティを提供します。</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">パスワードとオプションを設定</h3>
              <p className="text-gray-700 mb-3">PDFを開くために必要な強力なパスワードを入力します。最大のセキュリティのために、大文字、小文字、数字、特殊記号を組み合わせた12文字以上のパスワードを選択してください。</p>
              <p className="text-gray-700 mb-2">追加オプション：</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>暗号化強度：</strong> AES-256（推奨）またはAES-128</li>
                <li><strong>権限制御：</strong> 印刷、コピー、編集の制限</li>
                <li><strong>オーナーパスワード：</strong> 高度な制御のための管理用パスワード</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">暗号化してダウンロード</h3>
              <p className="text-gray-700 mb-3">「PDFを暗号化」ボタンをクリックして、ドキュメントにパスワード保護を適用します。暗号化プロセスはファイルサイズと選択した暗号化強度に応じて数秒で完了します。</p>
              <p className="text-gray-700">パスワード保護されたPDFは自動的にデバイスにダウンロードされます。共有する前に、暗号化されたファイルを開いてパスワードを入力し、すべてが正しく動作することを確認してください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section id="best-practices" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">セキュリティのベストプラクティス</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          効果的なPDFセキュリティには、単にパスワードを追加するだけでは不十分です。保護されたドキュメントのセキュリティを確保するために、以下のベストプラクティスに従ってください：
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">🔐</span>
              <div><strong>強力でユニークなパスワードを使用：</strong> 大文字、小文字、数字、記号を組み合わせた12文字以上のパスワードを作成してください。辞書にある単語、一般的なフレーズ、予測可能なパターンは避けてください。各保護ドキュメントには独自のパスワードを設定し、1つのパスワードが侵害された場合のシステム全体のリスクを防いでください。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">📁</span>
              <div><strong>暗号化されていないバックアップを安全に保管：</strong> 元の暗号化されていないドキュメントのコピーを安全な場所（暗号化された外付けドライブまたは安全なクラウドストレージ）に保管してください。これにより、パスワードを忘れた場合や後で元のコンテンツを変更する必要がある場合に、永久にデータを失うことを防げます。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🧠</span>
              <div><strong>パスワードマネージャーを使用：</strong> Bitwarden、1Password、LastPassなどのパスワード管理ソフトウェアは、PDFパスワードを安全に保存し、必要なときに自動入力できます。これにより、覚えやすい弱いパスワードを使用する誘惑を排除しながら、保護されたドキュメントへのアクセスを失うことを防ぎます。</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">📤</span>
              <div><strong>パスワードは別の方法で共有：</strong> 保護されたPDFをメールで送信する際は、パスワードを別のチャネル（電話、安全なメッセージングアプリ、別のメール）で共有してください。これにより、メールを傍受した人がドキュメントとパスワードの両方にアクセスすることを防ぎます。</div>
            </li>
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFセキュリティ方法の比較</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          PDFにパスワード保護を追加する方法を選択する際は、セキュリティ強度、利便性、コストを考慮してください。以下は、異なるアプローチの比較です：
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">方法</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">PixelPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Adobe Acrobat</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Microsoft Word</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">オンラインツール</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">費用</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600 bg-blue-50">無料</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$12.99/月</td>
                <td className="border border-gray-300 px-4 py-3 text-center">サブスクリプション</td>
                <td className="border border-gray-300 px-4 py-3 text-center">様々</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">暗号化規格</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">AES-256</td>
                <td className="border border-gray-300 px-4 py-3 text-center">AES-256</td>
                <td className="border border-gray-300 px-4 py-3 text-center">AES-128</td>
                <td className="border border-gray-300 px-4 py-3 text-center">様々</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">クライアントサイド処理</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">はい</td>
                <td className="border border-gray-300 px-4 py-3 text-center">はい（デスクトップ）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">はい</td>
                <td className="border border-gray-300 px-4 py-3 text-center">通常いいえ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">権限制御</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">完全</td>
                <td className="border border-gray-300 px-4 py-3 text-center">完全</td>
                <td className="border border-gray-300 px-4 py-3 text-center">制限あり</td>
                <td className="border border-gray-300 px-4 py-3 text-center">制限あり</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">登録不要</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">はい</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
                <td className="border border-gray-300 px-4 py-3 text-center">様々</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">使いやすさ</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">非常に簡単</td>
                <td className="border border-gray-300 px-4 py-3 text-center">普通</td>
                <td className="border border-gray-300 px-4 py-3 text-center">簡単</td>
                <td className="border border-gray-300 px-4 py-3 text-center">簡単</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-700 mt-4 text-sm">
          <strong>PixelPDFの利点：</strong> 当社のツールは、軍事レベルのAES-256暗号化とクライアントサイド処理を組み合わせ、最大のプライバシーを提供します。ほとんどのオンラインツールがファイルをサーバーにアップロードするのとは異なり、PixelPDFはすべてをブラウザ内で処理します。ドキュメントはデバイスから離れることはありません。
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">ユーザーパスワードとオーナーパスワードの違いは何ですか？</summary>
            <p className="mt-3 text-gray-700">ユーザーパスワード（「オープンパスワード」とも呼ばれる）は、PDFドキュメントを表示して開くために必要です。このパスワードを持っている人はファイルを読むことができますが、印刷やコピーなどの特定のアクションが制限される場合があります。オーナーパスワードは、権限の変更、暗号化の削除、セキュリティ設定の変更など、完全な管理権限を提供します。ほとんどのユーザーにとって、ユーザーパスワードのみを設定すれば十分な保護が得られます。オーナーパスワードは、ドキュメントを配布しながら管理権限を保持する必要がある場合に便利です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">パスワード保護されたPDFはハッキングされる可能性がありますか？</summary>
            <p className="mt-3 text-gray-700">AES-256を使用した最新のPDF暗号化は、ブルートフォース攻撃に対して計算上安全と見なされています。ただし、セキュリティは完全にパスワードの強度に依存します。弱いパスワード（短い、一般的な単語、予測可能なパターン）は、辞書攻撃やパスワード推測ツールを使用して解読される可能性があります。大文字と小文字、数字、記号を含む12文字以上の強力なパスワードを使用すれば、現在の技術では保護されたPDFは事実上解読不可能です。常に強力なパスワードを使用し、安全に保管してください。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFパスワードを忘れたらどうなりますか？</summary>
            <p className="mt-3 text-gray-700">残念ながら、適切に実装されたPDF暗号化にはバックドアや回復メカニズムがありません。これは意図的なもので、暗号化を安全にする要素です。パスワードを忘れた場合、暗号化されたコンテンツに永久にアクセスできなくなります。これは、PDFパスワードを安全に保存するためにパスワードマネージャーを使用することの重要性を強調しています。暗号化する前に、重要なドキュメントのバックアップコピーを（安全に）保管することを常に推奨します。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">パスワード保護はPDFの品質に影響しますか？</summary>
            <p className="mt-3 text-gray-700">いいえ、パスワード保護はドキュメントの品質、コンテンツ、または書式設定に影響しません。暗号化は、既存のPDFコンテンツを変更することなく、セキュリティ層として適用されます。正しいパスワードでPDFのロックを解除すると、すべてのテキスト、画像、書式設定、機能は暗号化前とまったく同じように表示されます。暗号化プロセスは、ドキュメントの視覚的品質と使いやすさに完全に透明です。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFからパスワード保護を削除できますか？</summary>
            <p className="mt-3 text-gray-700">はい、パスワードを知っていれば、PDFから暗号化を削除できます。PixelPDFは、自分のドキュメントからパスワード保護を削除できる<Link href="/pdf-decrypt" className="text-blue-600 hover:underline">PDF復号化</Link>ツールを提供しています。暗号化されたPDFをアップロードし、パスワードを入力して、保護されていないバージョンをダウンロードするだけです。正しいパスワードを知っている必要があります。正しいパスワードなしで暗号化を削除する方法はありません。</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">PDFファイルをパスワード保護する準備はできましたか？</h2>
        <p className="mb-6 text-blue-100">無料、安全、プライベート—数秒でAES-256でPDFを暗号化</p>
        <Link 
          href="/pdf-encrypt"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          今すぐPDFを暗号化
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">関連ツール</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/pdf-decrypt" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔓</div>
            <div className="font-medium">PDF復号化</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">PDF結合</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">PDF圧縮</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">PDF分割</div>
          </Link>
        </div>
      </section>
    </article>
  );
}