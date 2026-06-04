// Compress PDF for Outlook - French Translation
// Path: /src/app/blog/compress-pdf-for-outlook/fr/page.tsx
// Date: 2026-06-04

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment Compresser un PDF pour la Limite de 20 Mo d\'Outlook (Etape par Etape)',
  description: 'Apprenez a compresser un PDF pour la limite de 20 Mo d\'Outlook. Guide etape par etape pour reduire la taille des fichiers PDF, diviser les grands documents et contourner les restrictions de pieces jointes d\'Outlook.',
  keywords: ['compresser PDF pour limite 20Mo Outlook', 'PDF trop gros pour Outlook', 'reduire taille PDF pour email Outlook', 'limite pieces jointes Outlook', 'compresser PDF en ligne'],
  openGraph: {
    title: 'Comment Compresser un PDF pour la Limite de 20 Mo d\'Outlook (Etape par Etape)',
    description: 'Apprenez a compresser un PDF pour la limite de 20 Mo d\'Outlook. Guide etape par etape pour reduire la taille des fichiers PDF, diviser les grands documents et contourner les restrictions de pieces jointes d\'Outlook.',
    type: 'article',
  },
};

export default function CompressPdfForOutlookFR() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Accueil</Link> / <Link href="/blog">Blog</Link> / <span>Compresser PDF pour Outlook</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Comment Compresser un PDF pour la Limite de 20 Mo d&apos;Outlook (Etape par Etape)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>4 juin 2026</span>
        <span className="mx-2">&bull;</span>
        <span>8 min de lecture</span>
        <span className="mx-2">&bull;</span>
        <span>~1 350 mots</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Vous venez de terminer un rapport trimestriel detaille, vous l&apos;avez enregistre en PDF et vous l&apos;avez joint a votre e-mail Outlook. Vous appuyez sur &quot;Envoyer&quot;, et quelques secondes plus tard, Outlook affiche une erreur : &quot;La taille du fichier depasse la limite autorisee.&quot; Si cela vous est familier, vous faites face a l&apos;une des frustrations les plus courantes des utilisateurs d&apos;Outlook. Microsoft Outlook impose une limite stricte de 20 Mo pour les pieces jointes sur la plupart des comptes, une limite encore plus restrictive que celle de 25 Mo de Gmail. La bonne nouvelle, c&apos;est que compresser votre PDF est une solution rapide et fiable. Dans ce guide, vous apprendrez exactement comment compresser un PDF pour la limite de 20 Mo d&apos;Outlook en utilisant trois methodes eprouvees, ainsi que des conseils pratiques pour eviter ce probleme a l&apos;avenir.
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Reponse rapide : Comment compresser un PDF pour Outlook en 3 etapes</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Telechargez votre PDF</strong> sur l&apos;<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">outil Compresser PDF de PixelPDF</Link>—glissez-deposez ou cliquez pour parcourir vos fichiers</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Selectionnez la compression &quot;Moyenne&quot;</strong> pour le meilleur equilibre entre reduction de taille et preservation de la qualite</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Telechargez le PDF compresse</strong> et joignez-le a votre e-mail Outlook—verifiez qu&apos;il fait moins de 20 Mo avant de l&apos;envoyer</p>
          </div>
        </div>
      </section>

      {/* Understanding Outlook Attachment Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre les limites de pieces jointes d&apos;Outlook</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quelle est la taille maximale des pieces jointes Outlook ?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La limite de pieces jointes d&apos;Outlook varie selon votre fournisseur de messagerie et votre forfait d&apos;abonnement. La plupart des comptes standard Outlook.com et Microsoft 365 personnel sont limites a 20 Mo par e-mail. Certains plans entreprise Office 365 permettent jusqu&apos;à 25 Mo, et les comptes Exchange Online geres par des administrateurs IT peuvent avoir des limites personnalisees allant jusqu&apos;à 35 Mo ou 150 Mo. Cependant, pour la grande majorite des utilisateurs, la limite de 20 Mo est le plafond avec lequel vous devez travailler.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparaison des limites de pieces jointes par fournisseur</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fournisseur de messagerie</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Limite de pieces jointes</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Remarques</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook.com</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Comptes gratuits standard</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Microsoft 365 Personnel</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Certains plans permettent 25 Mo</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Google Workspace, meme limite</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Pieces jointes via l&apos;app Yahoo</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Identique a la limite Outlook</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Ce qui compte dans la limite de 20 Mo</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Voici un detail crucial qui surprend de nombreux utilisateurs d&apos;Outlook : la limite de 20 Mo s&apos;applique a la taille <strong>encodee</strong> de vos pieces jointes, et non a la taille reelle du fichier. Les protocoles de messagerie utilisent l&apos;encodage Base64 pour transmettre les fichiers binaires sous forme de texte, ce qui augmente la taille d&apos;environ 33 %. Cela signifie qu&apos;un PDF affichant 15 Mo dans votre explorateur de fichiers consommera environ 20 Mo du quota de pieces jointes d&apos;Outlook. En pratique, vous devriez viser a maintenir vos fichiers PDF a <strong>15 Mo</strong> ou moins pour rester en toute securite dans la limite de 20 Mo d&apos;Outlook.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
          <p className="text-gray-700"><strong>Astuce de pro :</strong> Compressez toujours votre PDF a 15 Mo ou moins avant de le joindre a Outlook. Cela tient compte du surcout de ~33 % de l&apos;encodage Base64 et garantit que votre e-mail partira sans erreur.</p>
        </div>
      </section>

      {/* Method 1 - Compress PDF Online */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 1 : Compresser un PDF en ligne (Recommande)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le moyen le plus rapide de reduire votre PDF en dessous de la limite de 20 Mo d&apos;Outlook est d&apos;utiliser un outil de compression en ligne. L&apos;outil <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compresser PDF</Link> de PixelPDF traite tout directement dans votre navigateur, vos fichiers ne quittent donc jamais votre appareil. Pas de logiciel a installer, pas de compte a creer et pas de file d&apos;attente.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Guide etape par etape</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Ouvrez l&apos;outil Compresser PDF</h4>
              <p className="text-gray-700">Accedez a la page Compresser PDF de PixelPDF dans n&apos;importe quel navigateur moderne. L&apos;outil se charge instantanement et est pret a l&apos;emploi immediatement.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Telechargez votre fichier PDF</h4>
              <p className="text-gray-700">Glissez-deposez votre PDF dans la zone de telechargement, ou cliquez sur &quot;Parcourir&quot; pour le selectionner sur votre ordinateur. L&apos;outil prend en charge des fichiers allant jusqu&apos;à 50 Mo, ce qui couvre la grande majorite des pieces jointes volumineuses.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Choisissez votre niveau de compression</h4>
              <p className="text-gray-700">Pour les pieces jointes Outlook, selectionnez la compression &quot;Moyenne&quot;. Cela permet generalement une reduction de taille de 40 a 60 % tout en gardant le texte net et les images claires. Si votre PDF depasse largement les 20 Mo, choisissez la compression &quot;Elevee&quot; pour obtenir jusqu&apos;à 80 % de reduction.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Telechargez et verifiez le resultat</h4>
              <p className="text-gray-700">Cliquez sur &quot;Telecharger&quot; pour enregistrer le PDF compresse. L&apos;outil affiche les tailles du fichier original et compresse cote a cote, pour que vous puissiez confirmer que le fichier est bien en dessous de 15 Mo avant de le joindre a Outlook.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparaison des tailles avant et apres</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type de document</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Taille originale</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Taille compressee</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Reduction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Proposition client avec graphiques (30 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71 %</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Manuel employe scanne (80 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">45 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">69 %</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Support marketing avec photos</td>
                <td className="border border-gray-300 px-4 py-3 text-center">29 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">72 %</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Contrat juridique avec signatures</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 - Split PDF */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 2 : Diviser le PDF en parties plus petites</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La compression fonctionne pour la plupart des documents, mais vous rencontrerez parfois un PDF qui reste au-dessus de 20 Mo meme apres une compression maximale. C&apos;est courant avec des documents contenant des centaines de pages scannees en haute resolution, comme des plans d&apos;ingenierie, des dossiers medicaux ou des catalogues de produits riches en photos. Quand la compression seule ne suffit pas, diviser le PDF en plusieurs fichiers plus petits est la meilleure approche.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quand diviser au lieu de compresser</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Documents avec plus de 100 pages de contenu scanne ou la compression donne des resultats minimaux</li>
          <li>Rapports en plusieurs sections ou chaque chapitre ou annexe peut etre envoye independamment</li>
          <li>Fichiers qui restent au-dessus de 20 Mo meme apres avoir utilise la compression &quot;Elevee&quot;</li>
          <li>Situations ou vous devez partager uniquement certaines pages avec des destinataires specifiques</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comment diviser et envoyer dans Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Utilisez l&apos;outil <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Diviser PDF</Link> de PixelPDF pour separer votre document en sections logiques</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Verifiez que chaque fichier divise fait moins de 15 Mo (en tenant compte du surcout d&apos;encodage Base64)</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Envoyez des e-mails separes avec des objets clairs : &quot;Rapport Financier T3 - Partie 1 sur 3&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Incluez une breve note dans le premier e-mail expliquant que les parties supplementaires suivront</p>
          </div>
        </div>
      </section>

      {/* Method 3 - OneDrive/SharePoint */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 3 : Utiliser OneDrive ou SharePoint pour partager un lien</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si vous etes deja dans l&apos;ecosysteme Microsoft, OneDrive et SharePoint offrent une solution naturelle a la limite de pieces jointes d&apos;Outlook. Au lieu de joindre le fichier directement, telechargez-le sur OneDrive ou SharePoint et partagez un lien dans votre e-mail. Cette approche est particulierement pratique pour les utilisateurs Office 365 car OneDrive est integre directement dans la fenetre de composition d&apos;Outlook.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comment partager via OneDrive dans Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Cliquez sur l&apos;icone de piece jointe dans Outlook et selectionnez &quot;Parcourir les emplacements cloud&quot; au lieu de vos fichiers locaux</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Choisissez OneDrive ou SharePoint, telechargez votre PDF, et Outlook inserera automatiquement un lien de partage</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Definissez l&apos;autorisation de partage sur &quot;Les destinataires peuvent afficher&quot; ou &quot;Personnes specifiques&quot; selon la sensibilite</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Avantages</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Aucune restriction de taille de fichier</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Les destinataires peuvent previsualiser le PDF dans le navigateur</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Vous pouvez mettre a jour le fichier sans le renvoyer</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Integre directement dans Outlook pour les utilisateurs Office 365</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Limites</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Les destinataires doivent avoir un acces internet pour voir</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Certaines organisations bloquent les liens cloud externes</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Les liens peuvent se casser si les autorisations changent</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Pas adapte aux documents confidentiels ou reglementes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips for Outlook Users */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 conseils pour les utilisateurs d&apos;Outlook confrontes aux gros PDF</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Visez toujours 15 Mo, pas 20 Mo</h4>
              <p className="text-gray-700">Parce que l&apos;encodage Base64 ajoute ~33 % de surcout, un fichier de 15 Mo sur le disque devient environ 20 Mo une fois joint. Gardez votre objectif a 15 Mo pour eviter les mauvaises surprises.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Compressez avant de rediger</h4>
              <p className="text-gray-700">N&apos;attendez pas qu&apos;Outlook rejette votre piece jointe. Compressez votre PDF d&apos;abord, puis ouvrez Outlook et redigez votre e-mail. Cela fait gagner du temps et evite les frustrations.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Utilisez &quot;Enregistrer avec taille reduite&quot; dans les applications Office</h4>
              <p className="text-gray-700">Si vous exportez un PDF depuis Word, Excel ou PowerPoint, utilisez l&apos;option integree &quot;Reduire la taille du fichier&quot; avant d&apos;enregistrer. Cela peut reduire la taille du fichier de 30 a 50 % avant meme que vous n&apos;ayez besoin d&apos;un outil de compression.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Supprimez les images et polices inutiles</h4>
              <p className="text-gray-700">Revisez votre PDF avant de l&apos;envoyer. Supprimez les images non utilisees, les polices incorporees et les metadonnees qui gonflent le fichier. Des outils comme PixelPDF gerent cela automatiquement lors de la compression.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Consultez votre service IT pour les limites personnalisees</h4>
              <p className="text-gray-700">Si vous utilisez un compte Exchange via votre employeur, votre equipe IT a peut-etre configure une limite de pieces jointes plus elevee. Consultez la politique de messagerie de votre organisation avant de diviser ou compresser inutilement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions frequentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Pourquoi Outlook dit-il que ma piece jointe est trop volumineuse alors que le fichier fait moins de 20 Mo ?</summary>
            <p className="mt-3 text-gray-700">
              Cela se produit en raison de l&apos;encodage Base64. Quand Outlook joint votre fichier, il convertit les donnees binaires en texte pour la transmission par e-mail, ce qui augmente la taille d&apos;environ 33 %. Un PDF de 16 Mo sur votre ordinateur devient environ 21 Mo une fois encode—depassant la limite de 20 Mo d&apos;Outlook. Compressez votre PDF a 15 Mo ou moins pour eviter completement ce probleme.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Puis-je augmenter ma limite de pieces jointes Outlook ?</summary>
            <p className="mt-3 text-gray-700">
              Pour les comptes personnels Outlook.com, la limite de 20 Mo est fixe et ne peut pas etre modifiee. Cependant, si vous utilisez Microsoft 365 via votre employeur, votre administrateur Exchange a peut-etre defini une limite superieure (jusqu&apos;à 150 Mo dans certaines configurations). Contactez votre service IT pour confirmer la limite specifique de votre organisation.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Est-il sur de compresser des PDF contenant des informations confidentielles ?</summary>
            <p className="mt-3 text-gray-700">
              Avec PixelPDF, oui. Notre outil de compression traite les fichiers entierement dans votre navigateur en utilisant une technologie cote client. Votre PDF n&apos;est jamais telecharge sur un serveur, ce qui signifie que les documents confidentiels tels que les contrats, les etats financiers et les dossiers medicaux restent completement prives sur votre appareil tout au long du processus.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Que faire si mon PDF depasse toujours 20 Mo apres compression ?</summary>
            <p className="mt-3 text-gray-700">
              Si la compression maximale ne parvient pas a reduire votre PDF en dessous de la limite, divisez le document en parties plus petites a l&apos;aide de notre <Link href="/split-pdf" className="text-blue-600 hover:underline">outil Diviser PDF</Link>. Alternativement, telechargez le fichier sur OneDrive ou SharePoint et partagez un lien dans votre e-mail Outlook au lieu de le joindre directement.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Outlook pour Mac a-t-il la meme limite de 20 Mo ?</summary>
            <p className="mt-3 text-gray-700">
              Oui, la limite de pieces jointes de 20 Mo s&apos;applique a toutes les versions d&apos;Outlook, y compris Outlook pour Mac, Outlook pour Windows et l&apos;application web Outlook. La limite est determinee par le serveur de messagerie, et non par l&apos;application cliente, elle est donc identique sur toutes les plateformes.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Pret a compresser votre PDF pour Outlook ?</h2>
        <p className="mb-6 text-blue-100">Reduisez votre PDF a moins de 15 Mo en quelques secondes—gratuit, securise et sans inscription requise</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Compresser PDF Gratuitement
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Outils associes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#9986;</div>
            <div className="font-medium">Diviser PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128196;</div>
            <div className="font-medium">Fusionner PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128295;</div>
            <div className="font-medium">Compresser PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128444;</div>
            <div className="font-medium">PDF en JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
