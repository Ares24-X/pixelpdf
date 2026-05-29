// PDFセキュリティベストプラクティス - 詳細ガイド (1500-2000語)
// パス: /src/app/blog/pdf-security-tips/ja/page.tsx
// 日付: 2026-05-29

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFセキュリティのベストプラクティス：2026年のドキュメント保護方法',
  description: 'PDFセキュリティのベストプラクティスに関する包括的なガイド。暗号化、パスワード、アクセス権限を使用して機密文書を保護する方法を学びましょう。2026年最新版。',
  keywords: ['PDFセキュリティ', 'PDF保護', '文書セキュリティ', 'PDF暗号化', 'PDFパスワード保護', 'セキュリティベストプラクティス'],
  openGraph: {
    title: 'PDFセキュリティのベストプラクティス：2026年のドキュメント保護方法',
    description: 'PDFセキュリティのベストプラクティスに関する包括的なガイド。暗号化、パスワード、アクセス権限を使用して機密文書を保護する方法を学びましょう。',
    type: 'article',
  },
};

export default function PDFSecurityTipsGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>PDFセキュリティのヒント</span>
      </nav>

      {/* H1タイトル */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFセキュリティのベストプラクティス：2026年のドキュメント保護方法
      </h1>

      {/* メタ情報 */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年5月29日</span>
        <span className="mx-2">•</span>
        <span>11分で読める</span>
        <span className="mx-2">•</span>
        <span>約1,850語</span>
      </div>

      {/* 導入 */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          デジタル文書に個人識別情報から機密性の高いビジネス戦略まで、あらゆる情報が含まれている現代において、PDFセキュリティは情報管理の絶対に欠かすことのできない要素となっています。 患者記録を取り扱う医療専門家、事件ファイルを共有する法律専門家、または個人的な文書を保護する個人であっても、PDFセキュリティのベストプラクティスを理解することは、機密情報を保護するために不可欠です。 この包括的なガイドでは、進化するサイバー脅威からデータを保護するために、2026年にPDF文書を保護するための最も効果的な戦略をご案内します。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          サイバー攻撃は日益高度化しており、データ侵害は毎年生徒数百万に影響を与えています。そのため、基本的なパスワード保護だけに頼ることは、もはや十分ではありません。 最新のPDFセキュリティには、強固な暗号化、Intelligentなアクセス権限管理、慎重なセキュリティ習慣を組み合わせた多層的なアプローチが必要です。 このガイドで概説するベストプラクティスを実施することで、必要な利便性とアクセシビリティを維持しながら、機密文書への不正アクセスのリスクを大幅に軽減できます。
        </p>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">目次</h2>
        <ul className="space-y-2">
          <li><a href="#why-security" className="text-blue-600 hover:underline">なぜPDFセキュリティが重要なのか</a></li>
          <li><a href="#threats" className="text-blue-600 hover:underline">PDFセキュリティの脅威の種類</a></li>
          <li><a href="#best-practices" className="text-blue-600 hover:underline">10のセキュリティベストプラクティス</a></li>
          <li><a href="#password-protection" className="text-blue-600 hover:underline">パスワード保護の詳細</a></li>
          <li><a href="#encryption-vs-permissions" className="text-blue-600 hover:underline">暗号化とアクセス権限の使い分け</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">よくある質問</a></li>
        </ul>
      </section>

      {/* なぜPDFセキュリティが重要なのか */}
      <section id="why-security" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">なぜPDFセキュリティが重要なのか</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          ポータブルドキュメントフォーマット（PDF）は、世界中で文書共有の事実上の標準となり、その理由には十分な根拠があります。 PDFはすべてのデバイスでフォーマットを保持し、普遍的にアクセス可能で、ビジネスコミュニケーションにプロフェッショナルな外観を提供します。 しかし、PDFをとても有用にしているこれらの特性は、悪意のある攻撃者にとって魅力的なターゲットにもなっています。 1つの侵害されたPDFだけで、機微な個人情報、機密ビジネスデータ、または専有的知的財産が露呈する可能性があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          2026年におけるPDFセキュリティの重要性を示す以下の統計を考慮してください：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>世界中で2.5兆以上のPDF文書が存在しています</li>
          <li>機密文書を巻き込むデータ侵害の平均コストは400万美元を超えています</li>
          <li>67%の企業が機密文書への不正アクセスを経験しています</li>
          <li>過去1年間でPDFベースのフィッシング攻撃が340%増加しています</li>
          <li>医療・法律部門はPDF関連のセキュリティインシデントの45%を占めています</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          これらの数字は、強固なPDFセキュリティ対策の実施が必須であることを強調しています。個人の確定申告書を保護する場合でも、企業の知的財産を保護する場合でも、文書を保護しないままにしておくのはリスクが高すぎます。
        </p>
      </section>

      {/* PDFセキュリティの脅威の種類 */}
      <section id="threats" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFセキュリティの脅威の種類</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          脅威の状況を理解することが効果的な保護への第一歩です。 PDF文書を標的とする最も一般的なセキュリティ脅威を以下に示します：
        </p>

        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">不正アクセス</h3>
            <p className="text-gray-700">これは、个人が決して見ることを想定されていないPDF文書にアクセス发生在った場合に発生します。 これは、傍受されたメール、共有リンク、盗窃されたデバイス、またはネットワークドライブ上の偶発的なファイル露出を通じて発生する可能性があります。 適切な暗号化がない場合、ファイルを取得した人は誰でもその内容を読み取ることができます。</p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">データの抽出とコピー</h3>
            <p className="text-gray-700">PDFを変更せずとも、不正なユーザーは保護されていない文書からテキスト、画像、データをコピーできます。 これは、専有的情報、価格データ、または抽出されるべきでない個人情報が含まれた文書で特に問題となります。</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">文書の改ざん</h3>
            <p className="text-gray-700">アクセス権限の制限がなければ誰でもPDFの内容を修正し、ページの追加や削除、ページの回転、またはテキストの変更を行うことができます。 これにより、文書の偽造、欺瞞的な変更、または自分に起因する誤情報の拡散につながる可能性があります。</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">PDFベースのマルウェア</h3>
            <p className="text-gray-700">悪意のあるPDFには、埋め込まれたスクリプト、実行可能ファイル、またはフィッシングウェブサイトへのリンクが含まれている場合があります。 このようなファイルを開くと、システムが侵害され、認証情報が盗まれたり、攻撃者にデバイスやネットワークへのリモートアクセスが与えられたりする可能性があります。</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">フィッシングによる認証情報盗窃</h3>
            <p className="text-gray-700">攻撃者はますます信じられるようなPDF添付ファイルをフィッシングキャンペーンで使用しています。 これらのPDFは、銀行、政府機関、または同僚からの正当な文書を模倣し、ユーザーに認証情報を入力させたり、マルウェアをダウンロードさせたりする可能性があります。</p>
          </div>
        </div>
      </section>

      {/* 10のセキュリティベストプラクティス */}
      <section id="best-practices" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">10のセキュリティベストプラクティス</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          これら10のセキュリティベストプラクティスを実施することで、文書保護体制が大幅に改善されます：
        </p>

        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">1.</span> AES-256暗号化を使用
            </h3>
            <p className="text-gray-700">常に脆弱な代替案よりもAES-256暗号化を選択してください。 この軍事グレードの暗号化標準は、ブルートフォース攻撃に対する最高レベルの保護を提供します。 既知の脆弱性がある古いRC4暗号化は避けてください。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">2.</span> 強力で固有のパスワードを作成
            </h3>
            <p className="text-gray-700">PDFパスワードは12文字以上で、大文字与小文字、数字、特殊文字を組み合わせたものにしてください。 辞書の単語、個人情報、連続したパターンは絶対に使用しないでください。 各機密文書にはそれぞれ固有のパスワードが必要です。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">3.</span> アクセス権限の制限を実施
            </h3>
            <p className="text-gray-700">パスワード保護を超えて、印刷、コピー、編集、ページ抽出を制限するアクセス権限管理を使用してください。 多層防御とは、誰かが文書にアクセスした場合でも、その内容を悪用できないようにすることを意味します。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">4.</span> パスワードマネージャーを使用
            </h3>
            <p className="text-gray-700">パスワードを書いたり、文書間で再利用したりしないでください。 Bitwarden、1Password、LastPassなどの信頼できるパスワードマネージャーを 사용하여、各保護された文書に対して強力で固有のパスワードを生成して保存してください。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">5.</span> パスワードと文書の配信を分離
            </h3>
            <p className="text-gray-700">メールで保護されたPDFを共有する場合は常に、パスワードを別のチャネルで送信してください。 電話、セキュアメッセージングアプリ、または別のメールスレッドを使用して、一方を傍受しても両方が危険にさらされないようにしてください。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">6.</span> 安全なバックアップを維持
            </h3>
            <p className="text-gray-700">安全な場所に元の保護されていない文書の暗号化されたバックアップを保管してください。 これにより、パスワードを忘れた場合でもデータが完全に失われるのを防ぎながら、日常の使用ではセキュリティを維持できます。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">7.</span> 共有前に受信者を確認
            </h3>
            <p className="text-gray-700">機密文書を送信する前に、セカンダリチャネルで受信者のIDを確認してください。 メールアドレス、電話番号、またはその他の連絡先情報を確認して、誤ったまたは意図的な配送を防止してください。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">8.</span> 文書の有効期限を設定
            </h3>
            <p className="text-gray-700">時間的に敏感な文書については、アクセスに有効期限を設定することを検討してください。 一部のPDFセキュリティソリューションでは、指定された日付後に文書が自動的にアクセス不能になるよう設定できます。これにより、長期的な露出リスクが軽減されます。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">9.</span> クライアントサイド処理を使用
            </h3>
            <p className="text-gray-700">ファイルを完全にブラウザで処理するPDFセキュリティツールを選択してください。 クライアントサイド暗号化により、機密文書はデバイスを離れることがなくサーバー側のデータ侵害リスクが排除されます。</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-xl">10.</span> 文書アクセスを定期的に確認
            </h3>
            <p className="text-gray-700">共有文書へのアクセス権を持つ人を定期的に監査してください。 関係が終了したら、元従業員、フリーランサー、パートナーのアクセスを取り消してください。 配布リストを最新かつ最小限に保ってください。</p>
          </div>
        </div>
      </section>

      {/* パスワード保護の詳細 */}
      <section id="password-protection" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">パスワード保護の詳細</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          パスワード保護はPDFセキュリティの基盤ですが、そのニュアンスを理解することが効果的な実装に不可欠です。 PDFセキュリティには2種類のパスワードがあり、それぞれ異なる目的を果たします：
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">ユーザーパスワード（オープンパスワード）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ユーザーパスワードは、PDF文書を開くために必要です。 暗号化されたPDFを開こうとすると、このパスワードの入力を求められます。 なければ、文書はアクセス不能のままになり、壊れたデータとして表示されます。 これは不正な閲覧を防ぐための主要なセキュリティ屏障です。
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">所有者のパスワード（権限パスワード）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          所有者のパスワードは、文書に対する管理制御を提供します。 このパスワードにより、ユーザーは権限の変更、暗号化の解除、制限の変更、すべての文書機能へのアクセスを行うことができます。 これは、多くの人に表示アクセス権を付与しながら、制限を変更する権限を自分に保持したい場合に便利です。
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">効果的なPDFパスワードの作成</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          強力なPDFパスワードは次のガイドラインに従うべきです：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>最小長：</strong>12文字以上、できれば16文字以上</li>
          <li><strong>文字の多様性：</strong>大文字、小文字、数字、特殊文字を混合</li>
          <li><strong>予測の回避：</strong>個人情報、生年月日、一般的な単語は使用しない</li>
          <li><strong>文書ごとに固有：</strong>異なる文書でパスワードを再利用しない</li>
          <li><strong>パスフレーズを使用：</strong>覚えやすいフレーズ（例：「CrimsonTiger2026$Secure」）を検討</li>
        </ul>

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <p className="text-gray-700">
            <strong>強力なパスワード保護を実施する準備ができましたか？</strong> PixelPDFの<Link href="/pdf-encrypt" className="text-blue-600 hover:underline font-semibold">PDF暗号化</Link>ツールを使用して、数秒で文書にAES-256パスワード保護を追加できます。すべての処理はブラウザ内でローカルに行われます。
          </p>
        </div>
      </section>

      {/* 暗号化とアクセス権限の使い分け */}
      <section id="encryption-vs-permissions" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">暗号化とアクセス権限の使い分け</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          多くのユーザーは暗号化とアクセス権限制御を混同していますが、それぞれをいつ使用するかを理解することは適切な文書セキュリティにとって重要です：
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">シナリオ</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">暗号化</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">アクセス権限</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">不正な閲覧を防止</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">はい</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">印刷を防止</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">はい</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">テキストのコピーを防止</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">はい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">編集・変更を防止</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">はい</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">ページ抽出を制御</td>
                <td className="border border-gray-300 px-4 py-3 text-center">いいえ</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">はい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">機密性の高い内容を保護</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">はい（必須）</td>
                <td className="border border-gray-300 px-4 py-3 text-center">補足</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-6">
          <strong>ベストプラクティス：</strong>最大セキュリティのために、暗号化とアクセス権限の両方を一緒に使用してください。 暗号化は不正アクセスを防ぎ、アクセス権限は許可されたユーザーがコンテンツで何ができるかを制御します。 この多層的なアプローチは、不正アクセスと悪用の両方に対する包括的な保護を提供します。
        </p>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">2026年で利用可能な最強のPDF暗号化は何ですか？</summary>
            <p className="mt-3 text-gray-700">AES-256暗号化は現在利用可能な最強のPDF暗号化標準です。 256ビットキーを使用し、機密情報を保護するために政府やセキュリティ専門家によって承認されています。 PDFセキュリティツールを選択する場合は、最大保護のためにAES-256暗号化を必ずサポートしていることを確認してください。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFのアクセス権限はバイパス可能ですか？</summary>
            <p className="mt-3 text-gray-700">完全なセキュリティ対策はありませんありませんが、適切に実装されたPDFアクセス権限はバイパスするのが困難です。 一部のPDFリーダーは制限を厳密に適用しない場合があり、専門ツールを持つ決意した攻撃者はアクセス権限を回避する可能性があります。 ただし、アクセス権限は偶発的なコピーや不正使用には効果的なままです。 最大セキュリティには、AES-256を使用した強力なパスワード暗号化とアクセス権限を組み合わせてください。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">オンラインツールでPDF暗号化を使用することは安全ですか？</summary>
            <p className="mt-3 text-gray-700">ツールによります。 PixelPDFのようなクライアントサイド暗号化ツールは、ファイルを完全にブラウザで処理するため、文書はデバイスから離れることがありません。 ファイルをアップロードするサーバーサイドツールは、サーバーが侵害された場合にプライバシーリスクをもたらす可能性があります。 機密文書には常にクライアントサイド処理を提供するツールを選択し、使用前にツールのプライバシーポリシーを確認してください。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">PDFパスワードはどのくらいの頻度で変更すべきですか？</summary>
            <p className="mt-3 text-gray-700">明確なルールありませんが、次の場合にパスワードの変更を検討してください：文書に 시간이経つにつれて機密性が低下する時間的に敏感な機密情報が含まれている場合；パスワードが侵害された可能性があると思われる場合；特定の受信者と仕事をしなくなった場合；パスワードを安全でないチャネルで共有した場合。 機密性の高い文書には、四半期ごとのレビューをお勧めします。</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">パスワード保護とデジタル署名の違いは何ですか？</summary>
            <p className="mt-3 text-gray-700">パスワード保護は文書に誰がアクセスできるかを制御し、デジタル署名は文書の真正性と整合性を検証します。 デジタル署名は、文書が特定の人物によって作成され、署名以降に変更されていないことを確認します。 どちらも重要なセキュリティ目的を果たします：パスワードは不正アクセスを防ぎ、署名は改ざんを防止し真正性を確保します。</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">ミリタリーグレードのセキュリティでPDFを保護</h2>
        <p className="mb-6 text-blue-100">無料、高速、プライベート - ブラウザでAES-256暗号化を使用して文書を暗号化</p>
        <Link
          href="/pdf-encrypt"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          今すぐPDFを暗号化
        </Link>
      </section>

      {/* 関連ツール */}
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
