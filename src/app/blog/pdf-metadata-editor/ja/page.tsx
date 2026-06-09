import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDFのメタデータをオンラインで無料編集する方法（タイトル・作成者・プロパティ）',
  description: 'PDFのタイトル、作成者、件名、キーワードなどのメタデータを確認・編集する方法を解説します。無料オンラインツールで簡単に対応できます。',
  keywords: ["PDF メタデータ 編集 オンライン 無料", "PDF タイトル 変更", "PDF 作成者 変更", "PDF プロパティ 編集", "PDF メタデータ 削除"],
  openGraph: {
    title: 'PDFのメタデータをオンラインで無料編集する方法（タイトル・作成者・プロパティ）',
    description: 'PDFのタイトル、作成者、件名、キーワードなどのメタデータを確認・編集する方法を解説します。無料オンラインツールで簡単に対応できます。',
    type: 'article',
  },
};

export default function PdfMetadataEditorJaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / <span>PDFメタデータ編集</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDFのメタデータをオンラインで無料編集する方法（タイトル・作成者・プロパティ）
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2026年6月9日</span>
        <span className="mx-2">•</span>
        <span>8分で読めます</span>
        <span className="mx-2">•</span>
        <span>約1,450語</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          PDFは見た目がきれいでも、内部には意外と多くの情報が残っています。タイトル、作成者、件名、キーワード、作成日時、利用したソフト名などが、そのまま埋め込まれていることがよくあります。社内保存では便利ですが、外部に共有するときには話が変わります。古い担当者名が残っていたり、社内用のプロジェクト名が見えたり、検索時に間違ったタイトルが表示されたりすると、地味ですが確実に困ります。PDFのメタデータをオンラインで無料編集できるようになると、共有前の整え作業がかなり楽になります。
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">結論: PDFメタデータ編集は3ステップです</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700">PixelPDFの<Link href="/pdf-metadata/" className="text-blue-600 hover:underline font-medium">PDFメタデータ編集ツール</Link>にPDFをアップロードします。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700">タイトル、作成者、件名、キーワードなど現在の情報を確認して、必要な項目だけ修正します。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700">保存したPDFを開き直して、プロパティが正しく更新されているか確認してから共有します。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDFメタデータが大事な理由</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          メタデータは、ページの表面には見えない「ファイルの裏ラベル」です。普段は気にされませんが、間違っていると一気に不便になります。たとえばファイル名は整っているのに、PDFビューアでは古いタイトルが表示されることがあります。作成者欄に退職した担当者の名前が残っていることもあります。外部に送った資料に、社内向けの案件コードや部署名が残っているケースもあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、メタデータは検索性にも影響します。文書管理システムや共有ドライブでは、タイトル、件名、作成者、キーワードを使って検索されることがよくあります。ここが雑だと、あとで自分のチームが困ります。つまりメタデータは飾りではなく、整理と共有の基礎です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          言い方を変えると、PDF本体が荷物なら、メタデータは送り状です。送り状がズレていると、中身が正しくても扱いにくくなります。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">編集できる主な項目</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFによって差はありますが、よくある項目はだいたい共通しています。タイトル、作成者、件名、キーワード、作成アプリ、生成アプリ、作成日時、更新日時あたりは特によく見ます。業務システムから出したPDFでは、独自のカスタム項目が入っていることもあります。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4"><li><strong>タイトル</strong>: PDFリーダーや検索結果で表示されやすい正式名称です。</li><li><strong>作成者</strong>: 個人名、部署名、会社名などです。</li><li><strong>件名</strong>: 文書の用途を短く説明する欄です。</li><li><strong>キーワード</strong>: 後から検索しやすくするための検索語です。</li><li><strong>Creator / Producer</strong>: どのソフトや仕組みで作られたかを示します。</li><li><strong>カスタム項目</strong>: 業務フロー固有の追加情報です。</li></ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          整理目的なら正しく書き直すのが有効ですし、プライバシー目的なら不要項目を減らす判断も必要です。目的を分けて考えるのがコツです。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PixelPDFでPDFメタデータを編集する手順</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一番ラクなのは、いきなり書き換えるのではなく、今入っている情報を見てから必要な部分だけ直すやり方です。PixelPDFならブラウザ上で完結するので、重いソフトを入れなくて済みます。
        </p>
        <div className="space-y-6 mb-6"><div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div><div><h3 className="font-semibold text-gray-900 mb-1">ツールを開く</h3><p className="text-gray-700">まずPDFメタデータ編集ツールを開きます。ファイルが重い場合は、先に<Link href="/compress-pdf/" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link>で軽くしておくと扱いやすいです。</p></div></div><div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div><div><h3 className="font-semibold text-gray-900 mb-1">現在の情報を確認する</h3><p className="text-gray-700">アップロードしたら、タイトルが空か、作成者が古いままか、社外に見せたくない項目が残っていないかを確認します。ここを見ずに一気に保存すると、余計な情報を残したままになりがちです。</p></div></div><div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div><div><h3 className="font-semibold text-gray-900 mb-1">必要な項目だけ編集する</h3><p className="text-gray-700">タイトル、作成者、件名、キーワードを用途に合わせて修正します。外部共有が目的なら、社内案件コードや旧担当者名のような不要情報は削るほうが安全です。</p></div></div><div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div><div><h3 className="font-semibold text-gray-900 mb-1">保存後に再確認する</h3><p className="text-gray-700">保存したPDFを開き直して、更新内容が反映されているか確認します。メール添付前なら<Link href="/compress-pdf/" className="text-blue-600 hover:underline font-medium">PDF圧縮</Link>、複数資料をまとめるなら<Link href="/merge-pdf/" className="text-blue-600 hover:underline font-medium">PDF結合</Link>も続けて使えます。</p></div></div></div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">編集するべき時と削除するべき時</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここは分けて考えると迷いません。整理や検索性が目的なら、正しいメタデータに編集するべきです。公開資料、マニュアル、営業資料、申請書テンプレートのように、後から探す前提のPDFは、きれいなメタデータがあるほうが助かります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          逆に、外部共有で情報漏れリスクを減らしたいなら、不要な項目を削る判断が必要です。過去の担当者名、社内システム名、案件番号、試作版のラベルなどは、受け手に価値がないのに余計な情報だけ増やします。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          目安はシンプルです。受け手に役立つ情報なら残して正確に整える。役に立たず、しかもリスクになる情報なら消す。この考え方で十分です。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">見栄えのいいPDFプロパティにするコツ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          きれいなメタデータは派手ではありません。検索しやすく、後で見ても迷わないことが大事です。そのためには、チームで軽いルールを作るのが一番効きます。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4"><li>タイトルは「final_v8」ではなく正式な文書名にする</li><li>作成者は個人名が不要なら会社名や部署名にそろえる</li><li>件名は1行で用途が分かる内容にする</li><li>キーワードは詰め込みすぎず、3〜6個に絞る</li><li>古い案件コードや一時的なラベルは残さない</li><li>公開前にページ内容と同じ感覚でプロパティも確認する</li></ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDFが少ないうちは雑でも回りますが、数が増えるほど雑さが効いてきます。早めに整えたほうが後でラクです。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">編集時によくあるトラブル</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          変更したのに反映されない場合、原因はだいたい4つです。1つ目はPDFビューアのキャッシュで、閉じて開き直すと直ることがあります。2つ目は標準メタデータとカスタム項目の両方があり、片方しか触っていないケースです。3つ目は編集制限やパスワード保護です。権限があるなら<Link href="/pdf-decrypt/" className="text-blue-600 hover:underline font-medium">PDFの保護解除</Link>を先に行います。4つ目は古いシステム由来のPDFで、ソフト情報が複雑に残っているケースです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          もう1つ多いのが、ファイル名変更とメタデータ変更を同じだと思っているケースです。デスクトップ上の名前を変えても、内部タイトルはそのままということが普通にあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          大量ファイルに同じ処理をかける前は、まず1件だけ試してください。ここを省くと、間違った設定を何百件にも広げることになります。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">この作業が役立つ人</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一見ニッチですが、実際にはかなり幅広い人に関係します。採用担当が応募書類を整えるとき、デザイナーが納品データを出すとき、営業が提案書を配るとき、法務が契約書をやり取りするとき、学校が配布資料を保存するとき、サポート部門がマニュアルを管理するとき。PDFを日常的に使う人は、どこかで必ずメタデータ問題に当たります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          特に、1つのシステムから出したPDFを別の相手や別のシステムへ渡す場面で効果が大きいです。そこでタイトルや作成者がズレていると、次の人が毎回判断に迷います。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          紙資料をスキャンして保存する流れなら、OCR、ページ整理、メタデータ整理の3点セットで考えると、かなり使いやすいアーカイブになります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
        <details className="border border-gray-200 rounded-lg p-4" open>
          <summary className="font-semibold text-gray-900 cursor-pointer">Adobe AcrobatなしでもPDFメタデータは編集できますか？</summary>
          <p className="mt-3 text-gray-700">
            はい、できます。タイトル、作成者、件名、キーワードなどの基本項目なら、ブラウザベースのツールで十分対応できます。
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold text-gray-900 cursor-pointer">メタデータを編集すると本文も変わりますか？</summary>
          <p className="mt-3 text-gray-700">
            変わりません。編集されるのはPDF内部のプロパティ情報で、ページ上の文字や画像はそのままです。
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold text-gray-900 cursor-pointer">PDFメタデータはプライバシーに関係しますか？</summary>
          <p className="mt-3 text-gray-700">
            関係します。担当者名、会社情報、利用ソフト、内部用の識別情報が残ることがあるため、外部共有前の確認が大事です。
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold text-gray-900 cursor-pointer">ファイル名とメタデータの違いは何ですか？</summary>
          <p className="mt-3 text-gray-700">
            ファイル名はフォルダや添付で見える名前です。メタデータはPDF内部に保存されるタイトル、作成者、件名、キーワードなどの情報です。片方を変えてももう片方は自動では変わりません。
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="font-semibold text-gray-900 cursor-pointer">全部のPDFからメタデータを消すべきですか？</summary>
          <p className="mt-3 text-gray-700">
            全部ではありません。検索や整理に役立つなら正しく残す価値があります。古い情報や外部共有に不要な情報だけを減らす考え方が実用的です。
          </p>
        </details>
        </div>
      </section>
    </article>
  );
}
