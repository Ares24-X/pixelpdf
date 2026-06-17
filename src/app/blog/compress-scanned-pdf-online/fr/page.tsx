import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment compresser un PDF scanné en ligne sans rendre le texte flou',
  description:
    'Apprenez à compresser un PDF scanné en ligne sans rendre illisibles les petites écritures, signatures, tampons ou QR codes.',
  keywords: [
    'compresser PDF scanné en ligne gratuit',
    'réduire taille PDF scanné',
    'compresser PDF sans perte de qualité scan',
    'rendre PDF scanné plus petit',
    'PDF trop lourd pour email',
  ],
  openGraph: {
    title: 'Comment compresser un PDF scanné en ligne sans rendre le texte flou',
    description:
      'Apprenez à compresser un PDF scanné en ligne sans rendre illisibles les petites écritures, signatures, tampons ou QR codes.',
    type: 'article',
  },
};

export default function CompressScannedPdfOnlineFrPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Compresser un PDF scanné</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Comment compresser un PDF scanné en ligne sans rendre le texte flou
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>17 juin 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lecture</span>
        <span className="mx-2">•</span>
        <span>~1 440 mots</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Les PDF scannés sont utiles parce qu&apos;ils reproduisent fidèlement un document papier. Le problème, c&apos;est qu&apos;ils deviennent très vite lourds.
          Un dossier de 20 pages scanné avec des réglages trop élevés peut facilement dépasser 30 ou 40 Mo. Et dès qu&apos;il faut l&apos;envoyer par e-mail,
          le déposer dans un portail ou l&apos;archiver proprement, la taille devient un vrai souci. Le but n&apos;est donc pas seulement de réduire le poids du fichier,
          mais de le réduire sans perdre la lisibilité.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Dans ce guide, vous verrez comment compresser un PDF scanné en ligne gratuitement, quels réglages essayer en premier et quand il vaut mieux découper le fichier plutôt que forcer davantage la compression.
          Vous pouvez démarrer tout de suite avec l&apos;outil <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> de PixelPDF, puis utiliser <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> ou <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> si la structure du document doit être ajustée.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Réponse rapide : la meilleure méthode pour un PDF scanné</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Téléversez le fichier</strong> dans <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Commencez avec une compression moyenne</strong> pour garder le texte lisible tout en réduisant nettement le poids.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Vérifiez les détails importants</strong> comme les signatures, tampons, petits chiffres et QR codes avant de partager.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi les PDF scannés sont-ils si lourds ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un PDF créé numériquement contient souvent du texte, des polices et des vecteurs. Un PDF scanné, lui, stocke la page comme une image. C&apos;est pour cela qu&apos;il grossit si vite.
          Si le scan est en couleur, en haute résolution et avec beaucoup de pages, la taille augmente encore davantage.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Scan en couleur alors que le niveau de gris suffisait</li>
          <li>Résolution trop élevée pour un document standard</li>
          <li>Pages blanches ou doublons laissés dans le PDF</li>
          <li>Trop de pages regroupées dans un seul fichier</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          C&apos;est pourquoi un petit lot de reçus scannés peut peser plus lourd qu&apos;un long document texte exporté directement depuis Word.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compresser sans rendre le document illisible</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Définissez d&apos;abord l&apos;usage du fichier</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un PDF envoyé pour une relecture rapide ne se traite pas comme une copie d&apos;archive ou un formulaire à imprimer. Si le document doit être signé,
          contrôlé ou réutilisé dans un autre système, il faut rester plus prudent.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Commencez par une compression moyenne</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          C&apos;est souvent le meilleur point de départ. Vous gagnez beaucoup de place sans dégrader immédiatement les petites écritures.
          Si le fichier reste trop gros, vous pourrez tester un niveau plus fort ensuite.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Ne vérifiez pas seulement la première page</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Zoomez sur les zones sensibles : signatures, montants, notes manuscrites, tableaux, barres de codes, QR codes et tampons. Si ces éléments restent nets,
          la compression est généralement acceptable.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Si le problème vient du nombre de pages, découpez le PDF</h3>
        <p className="text-gray-700 leading-relaxed">
          Quand le poids vient surtout de la longueur du document, le plus intelligent n&apos;est pas toujours de compresser davantage. Avec <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link>, vous pouvez séparer le fichier en blocs plus faciles à gérer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils selon le type de document</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type de document</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Approche recommandée</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pourquoi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Factures et reçus</td>
                <td className="border border-gray-300 px-4 py-3">Compression moyenne</td>
                <td className="border border-gray-300 px-4 py-3">Les dates, montants et noms restent lisibles</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Contrats signés</td>
                <td className="border border-gray-300 px-4 py-3">Compression moyenne + contrôle visuel</td>
                <td className="border border-gray-300 px-4 py-3">Protège les signatures et le petit texte</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Rapports riches en images</td>
                <td className="border border-gray-300 px-4 py-3">Compression forte si usage écran seulement</td>
                <td className="border border-gray-300 px-4 py-3">Les images offrent le plus gros gain</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Copies d&apos;archives</td>
                <td className="border border-gray-300 px-4 py-3">Compression légère à moyenne</td>
                <td className="border border-gray-300 px-4 py-3">On garde plus de fidélité au fichier source</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Formulaires avec QR code</td>
                <td className="border border-gray-300 px-4 py-3">Compression légère d&apos;abord</td>
                <td className="border border-gray-300 px-4 py-3">Les zones lisibles par machine sont sensibles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quand la compression ne suffit pas</h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Extraire seulement les pages utiles</h3>
            <p>Si votre interlocuteur n&apos;a besoin que de quelques pages, n&apos;envoyez pas tout le dossier. Moins de pages signifie presque toujours moins de poids.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nettoyer avant de recomprimer</h3>
            <p>Supprimez les pages blanches, doublons ou pages mal orientées. Si nécessaire, utilisez <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> et <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Découper en blocs logiques</h3>
            <p>Avec <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link>, vous séparez facilement des dossiers par mois, section ou sujet.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Erreurs fréquentes</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Choisir immédiatement la compression maximale</li>
          <li>Vérifier seulement la première page</li>
          <li>Oublier de tester les QR codes, codes-barres ou signatures</li>
          <li>Conserver des pages inutiles dans le document</li>
          <li>Vouloir absolument garder un seul fichier alors qu&apos;il faudrait le diviser</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Puis-je compresser un PDF scanné gratuitement en ligne ?</h3>
            <p className="text-gray-700 leading-relaxed">Oui. L&apos;outil <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> de PixelPDF fonctionne directement dans le navigateur.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">La compression rend-elle le texte flou ?</h3>
            <p className="text-gray-700 leading-relaxed">Cela peut arriver si la compression est trop forte. Commencez plutôt par une compression moyenne et vérifiez les zones critiques.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quelle est la meilleure méthode pour un envoi par e-mail ?</h3>
            <p className="text-gray-700 leading-relaxed">Compressez d&apos;abord. Si le fichier reste trop lourd, découpez-le. C&apos;est souvent plus propre qu&apos;une compression extrême.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pourquoi un PDF scanné est-il plus lourd qu&apos;un PDF normal ?</h3>
            <p className="text-gray-700 leading-relaxed">Parce qu&apos;il stocke souvent les pages sous forme d&apos;images, et les images prennent bien plus de place que du texte numérique.</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Réduire un PDF scanné ne consiste pas seulement à faire baisser le nombre de mégaoctets. Il faut garder le document exploitable après compression.
          La meilleure méthode reste simple : compression moyenne, contrôle des éléments importants, puis découpage si le volume vient surtout du nombre de pages.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour aller vite, commencez avec <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>, puis ajoutez <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> ou <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> si besoin.
        </p>
      </section>
    </article>
  );
}
