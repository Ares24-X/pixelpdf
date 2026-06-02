// Make PDF Smaller for Email - French Translation
// Path: /src/app/blog/make-pdf-smaller-for-email/fr/page.tsx
// Date: 2026-06-02

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment Réduire la Taille d\'un PDF pour Pièce Jointe Email (2026)',
  description: 'Apprenez comment réduire la taille d\'un fichier PDF pour pièce jointe email avec 4 méthodes éprouvées. Réduisez la taille du PDF pour Gmail, Outlook, Yahoo et iCloud avec des guides étape par étape.',
  keywords: ['comment réduire la taille d\'un PDF pour email', 'réduire taille PDF pour email', 'compresser PDF pour email', 'PDF trop grand pour email', 'limite taille pièce jointe email'],
  openGraph: {
    title: 'Comment Réduire la Taille d\'un PDF pour Pièce Jointe Email (2026)',
    description: 'Apprenez comment réduire la taille d\'un fichier PDF pour pièce jointe email avec 4 méthodes éprouvées. Réduisez la taille du PDF pour Gmail, Outlook, Yahoo et iCloud.',
    type: 'article',
  },
};

export default function MakePdfSmallerForEmailFr() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Accueil</Link> / <Link href="/blog">Blog</Link> / <span>Réduire la Taille d&apos;un PDF pour Email</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Comment Réduire la Taille d&apos;un PDF pour Pièce Jointe Email (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2 juin 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lecture</span>
        <span className="mx-2">•</span>
        <span>~1 400 mots</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Vous venez de terminer un document important, vous cliquez sur &quot;Joindre&quot;, et votre fournisseur d&apos;email le rejette car le fichier est trop volumineux. C&apos;est l&apos;une des frustrations les plus courantes que les professionnels rencontrent chaque jour. Que vous utilisiez Gmail, Outlook, Yahoo ou iCloud, chaque fournisseur d&apos;email applique des limites de taille pour les pièces jointes, et les PDFs remplis d&apos;images, de scans ou de graphiques les dépassent régulièrement. La bonne nouvelle est qu&apos;apprendre à réduire la taille d&apos;un PDF pour pièce jointe email est simple une fois que vous connaissez les bonnes méthodes. Dans ce guide, nous vous présentons quatre techniques éprouvées pour réduire vos PDFs rapidement et de manière fiable, afin que vous puissiez envoyer vos documents sans délai.
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Réponse Rapide : Comment Réduire un PDF pour Email en 3 Étapes</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Téléchargez votre PDF</strong> sur l&apos;<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">outil Compresser PDF</Link> de PixelPDF: glissez-déposez ou cliquez pour parcourir vos fichiers</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Choisissez un niveau de compression</strong>: &quot;Moyen&quot; convient le mieux pour la plupart des pièces jointes email, réduisant la taille de 40 à 60%</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Téléchargez le PDF compressé</strong> et joignez-le à votre email: vérifiez qu&apos;il est en dessous de la limite de votre fournisseur avant l&apos;envoi</p>
          </div>
        </div>
      </section>

      {/* Email Attachment Size Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limites de Taille des Pièces Jointes Email à Connaître</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant de commencer à réduire votre PDF, il est utile de comprendre les limites exactes appliquées par chaque fournisseur d&apos;email principal. Gardez à l&apos;esprit que l&apos;encodage email ajoute environ 33% à la taille du fichier pendant la transmission (encodage Base64), donc un fichier de 19MB sur votre ordinateur peut dépasser une limite de 25MB une fois joint.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fournisseur d&apos;Email</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Limite de Pièce Jointe</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Taille Cible Sûre</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Remarques</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18-20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Suggère Google Drive pour les fichiers plus volumineux</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook / Hotmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14-15 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Limite la plus stricte des grands fournisseurs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18-20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Même limite que Gmail</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14-15 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">S&apos;applique aux adresses @icloud.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          La colonne &quot;Taille Cible Sûre&quot; tient compte du surplus lié à l&apos;encodage Base64. Si vous gardez votre PDF en dessous de cette taille, il sera joint avec succès quel que soit le fournisseur que vous utilisez.
        </p>
      </section>

      {/* Method 1 - Compress PDF Online */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Méthode 1 : Compresser le PDF en Ligne (La Plus Rapide)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La compression en ligne est le moyen le plus rapide de réduire un PDF pour email. L&apos;<Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">outil Compresser PDF</Link> de PixelPDF traite tout dans votre navigateur: votre fichier n&apos;est jamais envoyé sur un serveur, donc vos documents sensibles restent privés.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Guide Étape par Étape</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Ouvrez l&apos;Outil Compresser PDF</h4>
              <p className="text-gray-700">Accédez à la page Compresser PDF de PixelPDF dans n&apos;importe quel navigateur. Aucune inscription ni installation de logiciel n&apos;est nécessaire.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Téléchargez Votre PDF</h4>
              <p className="text-gray-700">Glissez-déposez votre fichier dans la zone de téléchargement, ou cliquez sur &quot;Parcourir&quot; pour le sélectionner depuis votre ordinateur. L&apos;outil prend en charge les fichiers jusqu&apos;à 50 Mo.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Sélectionnez le Niveau de Compression</h4>
              <p className="text-gray-700">Choisissez &quot;Moyen&quot; pour un équilibre entre qualité et réduction de taille (généralement 40 à 60% plus petit). Si votre fichier dépasse largement la limite, la compression &quot;Haute&quot; peut le réduire jusqu&apos;à 80%.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Téléchargez le Fichier Compressé</h4>
              <p className="text-gray-700">L&apos;outil affiche les tailles avant et après. Vérifiez que le nouveau fichier est en dessous de la limite de votre fournisseur d&apos;email, puis téléchargez-le et joignez-le.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparaison Avant et Après</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type de Document</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Taille Originale</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Taille Compressée</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Réduction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Proposition client avec photos (30 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Dossiers médicaux numérisés (80 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">52 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Brochure marketing (20 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">27 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Contrat juridique avec signatures (15 pages)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 - Reduce Image Quality Inside PDF */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Méthode 2 : Réduire la Qualité des Images dans le PDF</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si votre PDF contient des photographies ou des graphiques haute résolution, les images sont probablement la principale raison pour laquelle le fichier est si volumineux. La plupart des PDFs incluent des images enregistrées en qualité d&apos;impression (300 DPI), ce qui est inutile pour la visualisation à l&apos;écran ou le partage par email. Réduire la résolution des images à 150 DPI ou 72 DPI peut réduire considérablement la taille du fichier.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comment Réduire la Qualité des Images</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>Utilisez l&apos;outil Compresser PDF</strong> avec une compression &quot;Haute&quot;: cela réduit automatiquement la résolution des images intégrées à des résolutions adaptées à l&apos;écran</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>Compressez les images d&apos;abord</strong>: si vous créez le PDF vous-même, redimensionnez les images à 1200px de largeur (ou moins) avant de les insérer. Des outils comme TinyPNG ou Squoosh peuvent compresser des images individuelles de 60 à 80%</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700"><strong>Supprimez les images inutiles</strong>: révisez votre PDF et supprimez toute image décorative, logos en double ou arrière-plans de pleine page qui n&apos;apportent pas de valeur</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700"><strong>Enregistrez à nouveau en PDF</strong>: après avoir optimisé les images, réexportez ou réenregistrez le document pour vous assurer que les tailles réduites sont reflétées dans le fichier final</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Cette méthode est particulièrement efficace pour les PDFs créés avec des logiciels de conception comme Adobe Illustrator ou Canva, où les paramètres d&apos;exportation sont souvent réglés par défaut sur la qualité maximale. Pour les documents numérisés, l&apos;outil Compresser PDF gère la réduction de résolution automatiquement.
        </p>
      </section>

      {/* Method 3 - Split PDF into Smaller Parts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Méthode 3 : Diviser le PDF en Plus Petites Parties</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Parfois, un seul PDF est tout simplement trop volumineux pour être compressé en dessous de la limite email sans perte de qualité inacceptable. C&apos;est courant avec des rapports de plus de 200 pages, des catalogues en couleurs ou des documents contenant des dizaines de scans haute résolution. Dans ces cas, diviser le PDF en sections plus petites et logiquement organisées est la meilleure approche.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comment Diviser et Envoyer par Email</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Ouvrez l&apos;<Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">outil Diviser PDF</Link> de PixelPDF et téléchargez votre document volumineux</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Spécifiez les plages de pages pour chaque partie: par exemple, pages 1-50 comme Partie 1, pages 51-100 comme Partie 2, et ainsi de suite</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Compressez chaque partie individuellement avec l&apos;outil Compresser PDF si nécessaire</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Envoyez des emails séparés avec des objets clairs comme &quot;Rapport Financier T3 - Partie 1 sur 3&quot; pour que le destinataire connaisse l&apos;ordre</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Cette méthode fonctionne bien pour les documents multi-chapitres où chaque section est autonome. Elle offre également aux destinataires la flexibilité de télécharger uniquement les parties dont ils ont besoin.
        </p>
      </section>

      {/* Method 4 - Convert PDF to ZIP */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Méthode 4 : Convertir le PDF en ZIP</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compresser un PDF au format ZIP peut offrir des réductions de taille modestes, généralement de 10 à 30%, selon le contenu. Les PDFs contenant beaucoup de texte se compressent bien car les données textuelles sont répétitives et compressibles. Cependant, les PDFs déjà compressés en interne (ce qui est le cas de la plupart des PDFs modernes) bénéficieront peu de la compression ZIP.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quand Utiliser la Compression ZIP</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Votre PDF dépasse légèrement la limite email (par exemple, 22 Mo pour une limite de 25 Mo)</li>
          <li>Le PDF contient principalement du texte avec peu d&apos;images</li>
          <li>Vous devez joindre plusieurs fichiers et souhaitez les regrouper</li>
          <li>Le destinataire préfère recevoir une seule archive compressée</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comment Créer un ZIP à partir d&apos;un PDF</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>Sur Windows :</strong> Faites un clic droit sur le PDF, sélectionnez &quot;Envoyer vers&quot; puis &quot;Dossier compressé (zip)&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>Sur Mac :</strong> Faites un clic droit sur le PDF, choisissez &quot;Compresser [nom du fichier]&quot; dans le menu contextuel</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Joignez le fichier .zip résultant à votre email à la place du PDF original</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-700"><strong>Important :</strong> Certains fournisseurs d&apos;email et pare-feu d&apos;entreprise bloquent les pièces jointes .zip pour des raisons de sécurité. Si votre destinataire ne peut pas ouvrir le fichier ZIP, utilisez la Méthode 1 (compression en ligne) à la place.</p>
        </div>
      </section>

      {/* Email-Specific Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Conseils pour Envoyer des PDFs par Email</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Vérifiez toujours la taille encodée, pas la taille du fichier</h4>
              <p className="text-gray-700">L&apos;encodage email augmente la taille du fichier d&apos;environ 33%. Un PDF de 20 Mo devient environ 26,6 Mo une fois joint. Gardez votre PDF en dessous de la &quot;Taille Cible Sûre&quot; indiquée dans le tableau ci-dessus.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Compressez avant de joindre, pas après</h4>
              <p className="text-gray-700">Certaines personnes essaient de joindre un fichier volumineux et laissent le client email s&apos;en charger. Cela fait perdre du temps et échoue souvent. Compressez le PDF d&apos;abord, puis joignez la version plus petite.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Utilisez des noms de fichiers descriptifs</h4>
              <p className="text-gray-700">Nommez votre fichier compressé clairement (par exemple, &quot;Rapport-T3-FINAL-comprime.pdf&quot;) pour que le destinataire sache ce qu&apos;il reçoit et que le fichier a été optimisé.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Envisagez des liens cloud pour les fichiers très volumineux</h4>
              <p className="text-gray-700">Si votre PDF ne peut pas être compressé en dessous de la limite, utilisez Google Drive, Dropbox ou OneDrive pour partager un lien de téléchargement au lieu de joindre le fichier directement.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Aperçu avant envoi</h4>
              <p className="text-gray-700">Ouvrez toujours votre PDF compressé et parcourez-le pour vérifier que le texte est lisible et que les images sont suffisamment claires pour leur usage prévu avant de le joindre à un email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">De combien puis-je réduire la taille d&apos;un PDF pour email ?</summary>
            <p className="mt-3 text-gray-700">
              La plupart des PDFs peuvent être réduits de 40 à 80% grâce aux outils de compression en ligne. Les documents contenant beaucoup de texte voient généralement une réduction de 50 à 70%, tandis que les PDFs riches en images peuvent être réduits de 60 à 80% avec une compression élevée. La réduction exacte dépend du contenu original et du niveau de compression choisi.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">La compression de mon PDF le rendra-t-elle flou ou illisible ?</summary>
            <p className="mt-3 text-gray-700">
              Avec une compression &quot;Moyenne&quot;, le texte reste parfaitement net et les images conservent une bonne qualité pour la visualisation à l&apos;écran. La compression &quot;Haute&quot; peut introduire une légère perte de netteté dans les photos, mais le texte reste entièrement lisible. Prévisualisez toujours le fichier compressé avant de l&apos;envoyer pour vous assurer qu&apos;il répond à vos standards.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Pourquoi Gmail rejette-t-il mon PDF de 19 Mo ?</summary>
            <p className="mt-3 text-gray-700">
              La limite de 25 Mo de Gmail s&apos;applique à la taille encodée, pas à la taille du fichier brut. Les protocoles email utilisent l&apos;encodage Base64, qui augmente la taille du fichier d&apos;environ 33%. Un fichier de 19 Mo devient environ 25,3 Mo une fois encodé, ce qui dépasse la limite. Gardez votre PDF en dessous de 18 Mo pour être sûr.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Puis-je compresser un PDF sur mon téléphone avant de l&apos;envoyer par email ?</summary>
            <p className="mt-3 text-gray-700">
              Oui. L&apos;outil Compresser PDF de PixelPDF fonctionne sur tout appareil avec un navigateur. Ouvrez Safari ou Chrome sur votre téléphone, téléchargez le PDF, compressez-le, téléchargez le fichier plus petit, puis joignez-le depuis votre application email. L&apos;ensemble du processus prend moins d&apos;une minute.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Est-il sûr de compresser des PDFs contenant des informations sensibles ?</summary>
            <p className="mt-3 text-gray-700">
              PixelPDF traite toute la compression dans votre navigateur en utilisant une technologie côté client. Votre fichier n&apos;est jamais envoyé sur un serveur. Cela le rend sûr pour les contrats, les états financiers, les dossiers médicaux et tout autre document sensible.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à Réduire la Taille de Votre PDF pour Email ?</h2>
        <p className="mb-6 text-blue-100">Compressez votre PDF en quelques secondes: gratuit, privé et sans inscription</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Compresser PDF Gratuit
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Outils Associés</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="font-medium">Compresser PDF</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">Diviser PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Fusionner PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF en JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
