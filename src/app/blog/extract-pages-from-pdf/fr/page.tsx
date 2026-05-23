// Extract Pages from PDF - Tutoriel Complet (1500-2000 mots)
// Chemin: /src/app/blog/extract-pages-from-pdf/fr/page.tsx
// Date: 2026-05-23

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment Extraire des Pages d\'un PDF: Guide Complet (2026)',
  description: 'Apprenez à extraire des pages spécifiques de fichiers PDF en ligne gratuitement. Guide étape par étape avec cas d\'usage, tableau comparatif et FAQ sur l\'extraction de pages PDF.',
  keywords: ['extraire pages PDF', 'extraction pages PDF', 'extracteur pages PDF', 'séparer pages PDF', 'extraction PDF'],
  openGraph: {
    title: 'Comment Extraire des Pages d\'un PDF: Guide Complet (2026)',
    description: 'Apprenez à extraire des pages spécifiques de fichiers PDF en ligne gratuitement. Guide étape par étape avec cas d\'usage et tableau comparatif.',
    type: 'article',
  },
};

export default function ExtractPagesFromPdfGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Accueil</Link> / <Link href="/blog">Blog</Link> / <span>Extraire des Pages de PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Comment Extraire des Pages d&apos;un PDF: Guide Complet (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>23 mai 2026</span>
        <span className="mx-2">•</span>
        <span>9 min de lecture</span>
        <span className="mx-2">•</span>
        <span>1 920 mots</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Besoin de quelques pages d&apos;un document PDF volumineux? Vous n&apos;êtes pas seul. Que vous extrayiez une facture spécifique d&apos;un relevé mensuel, sépariez une section de contrat pour révision, ou sélectionniez un chapitre d&apos;un rapport de recherche, savoir comment extraire des pages d&apos;un PDF est une compétence numérique essentielle. Ce guide complet vous accompagne à travers tout ce que vous devez savoir sur l&apos;extraction de pages PDF en 2026, de la compréhension de ce que c&apos;est et pourquoi vous en avez besoin, aux instructions étape par étape et une comparaison détaillée des meilleurs outils disponibles.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">Table des Matières</h2>
        <ul className="space-y-2">
          <li><a href="#what-is-pdf-extraction" className="text-blue-600 hover:underline">Qu&apos;est-ce que l&apos;Extraction de Pages PDF?</a></li>
          <li><a href="#why-extract-pages" className="text-blue-600 hover:underline">Pourquoi Extraire des Pages PDF? (Cas d&apos;Usage)</a></li>
          <li><a href="#how-to-extract" className="text-blue-600 hover:underline">Comment Extraire des Pages Étape par Étape</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">Tableau Comparatif des Méthodes</a></li>
          <li><a href="#tips" className="text-blue-600 hover:underline">Conseils Pro pour l&apos;Extraction de Pages PDF</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">Questions Fréquentes</a></li>
        </ul>
      </section>

      {/* What is PDF Page Extraction */}
      <section id="what-is-pdf-extraction" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que l&apos;Extraction de Pages PDF?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;extraction de pages PDF est le processus de sélection et d&apos;extraction de pages spécifiques d&apos;un document PDF plus volumineux pour créer un nouveau fichier plus petit. Contrairement à la simple copie de texte ou aux captures d&apos;écran (qui perdent le formatage et la qualité), l&apos;extraction de pages appropriée préserve le contenu exact, la mise en page, les polices, les images et les hyperliens des pages originales. Le résultat est un PDF entièrement fonctionnel et autonome contenant uniquement les pages dont vous avez besoin.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;extraction de pages est souvent confondue avec le fractionnement de PDF, et bien qu&apos;elles soient liées, elles servent des objectifs légèrement différents. Le fractionnement divise généralement un document entier en plusieurs parties, soit par plages de pages fixes, soit en séparant chaque page. L&apos;extraction, en revanche, se concentre sur la sélection de pages spécifiques qui peuvent ne pas être consécutives. Par exemple, vous pourriez vouloir extraire les pages 3, 7 et 12 d&apos;un document de 20 pages tout en laissant le reste.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les outils modernes comme PixelPDF gèrent l&apos;extraction de pages via une interface basée sur navigateur, traitant tout localement sur votre appareil. Cette approche côté client signifie que vos documents ne quittent jamais votre ordinateur, offrant une sécurité de niveau entreprise sans nécessiter d&apos;installation de logiciel ni d&apos;inscription.
        </p>
      </section>

      {/* Why Extract PDF Pages */}
      <section id="why-extract-pages" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Extraire des Pages PDF? (Cas d&apos;Usage Courants)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&apos;extraction de pages PDF est précieuse dans de nombreux scénarios professionnels et personnels. Voici les cas d&apos;usage les plus courants:
        </p>

        {/* Use Case Cards */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-2">Extraction de Factures</h3>
            <p className="text-gray-700">
              Les relevés bancaires mensuels et les rapports fournisseurs contiennent souvent des dizaines de factures dans un seul PDF. Lorsque vous devez soumettre une facture spécifique pour remboursement ou à des fins fiscales, extraire uniquement cette page fait gagner du temps et élimine la confusion. Au lieu d&apos;envoyer un relevé de 50 pages, vous envoyez exactement ce qui est nécessaire: une seule page de facture claire.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-900 mb-2">Sections de Contrats</h3>
            <p className="text-gray-700">
              Les contrats juridiques peuvent s&apos;étendre sur des centaines de pages. Lors de la révision de clauses spécifiques avec les parties prenantes ou du partage de sections pertinentes avec des tiers, extraire uniquement les pages nécessaires protège les informations confidentielles et garde les discussions ciblées. Vous pourriez extraire les pages de signature, des termes spécifiques ou des sections d&apos;amendement sans révéler l&apos;accord complet.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-2">Chapitres de Rapports</h3>
            <p className="text-gray-700">
              Les rapports annuels, les travaux de recherche et la documentation technique sont souvent distribués sous forme de fichiers PDF volumineux uniques. Extraire des chapitres ou sections spécifiques permet aux membres de l&apos;équipe d&apos;accéder uniquement à ce qui est pertinent pour leur travail. Une équipe marketing pourrait extraire le chapitre d&apos;analyse de marché, tandis que l&apos;équipe financière extrait les états financiers, le tout à partir du même document source.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-semibold text-gray-900 mb-2">Matériel Éducatif</h3>
            <p className="text-gray-700">
              Les enseignants et les étudiants ont fréquemment besoin d&apos;extraire des pages spécifiques de manuels, de feuilles de travail ou d&apos;examens. Un professeur pourrait extraire une étude de cas pour une discussion en classe, ou un étudiant pourrait extraire des pages pertinentes pour une revue de littérature. Cette approche ciblée est plus efficace que de travailler avec des manuels complets.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="how-to-extract" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Extraire des Pages de PDF: Guide Étape par Étape</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          L&apos;outil Fractionner PDF de PixelPDF fournit une interface simple mais puissante pour extraire des pages. Voici comment procéder en quatre étapes faciles:
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Ouvrez l&apos;Outil Fractionner PDF</h3>
              <p className="text-gray-700 mb-3">
                Accédez à la page <Link href="/split-pdf" className="text-blue-600 hover:underline">Fractionner PDF</Link> de PixelPDF. Cet outil polyvalent gère à la fois le fractionnement et l&apos;extraction de pages avec la même interface intuitive. Aucune inscription, aucun téléchargement et aucun plugin requis, ouvrez simplement la page dans n&apos;importe quel navigateur moderne.
              </p>
              <p className="text-gray-700">
                L&apos;outil fonctionne sur les ordinateurs de bureau, les ordinateurs portables, les tablettes et les smartphones, vous permettant d&apos;extraire des pages de n&apos;importe où.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Téléversez Votre Fichier PDF</h3>
              <p className="text-gray-700 mb-3">
                Cliquez sur la zone de téléversement ou glissez-déposez votre fichier PDF sur l&apos;interface. PixelPDF prend en charge les fichiers jusqu&apos;à 50 Mo. Comme tout le traitement se fait localement dans votre navigateur en utilisant JavaScript côté client, votre fichier ne quitte jamais votre appareil.
              </p>
              <p className="text-gray-700">
                Ce traitement côté client est particulièrement important pour les documents sensibles comme les contrats, les états financiers ou les rapports confidentiels. Vos données restent privées tout au long du processus d&apos;extraction.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Sélectionnez les Pages à Extraire</h3>
              <p className="text-gray-700 mb-3">
                Après le téléversement, vous verrez des aperçus miniatures de toutes les pages de votre PDF. Entrez les numéros de pages que vous souhaitez extraire en utilisant la syntaxe flexible des plages de pages:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li><strong>Page unique:</strong> Entrez <code className="bg-gray-100 px-2 py-1 rounded">5</code> pour extraire uniquement la page 5</li>
                <li><strong>Plage de pages:</strong> Entrez <code className="bg-gray-100 px-2 py-1 rounded">1-5</code> pour extraire les pages 1 à 5</li>
                <li><strong>Sélections multiples:</strong> Entrez <code className="bg-gray-100 px-2 py-1 rounded">1-3, 7, 10-12</code> pour extraire les pages 1-3, page 7 et pages 10-12</li>
              </ul>
              <p className="text-gray-700">
                L&apos;aperçu miniature vous aide à vérifier que vous avez sélectionné les bonnes pages avant de continuer, particulièrement utile lorsque les numéros de page dans le document ne correspondent pas au nombre réel de pages du PDF (comme lorsqu&apos;un document a une page de couverture ou une table des matières).
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Extrayez et Téléchargez</h3>
              <p className="text-gray-700 mb-3">
                Cliquez sur le bouton &quot;Fractionner PDF&quot; pour traiter votre sélection. L&apos;outil extrait vos pages choisies et crée un nouveau fichier PDF contenant uniquement ces pages. Le traitement est presque instantané pour la plupart des documents car tout s&apos;exécute localement dans votre navigateur.
              </p>
              <p className="text-gray-700">
                Vos pages extraites se téléchargent automatiquement sous forme de nouveau fichier PDF. Le document original reste complètement inchangé sur votre appareil, vous pouvez donc toujours revenir et extraire différentes pages si nécessaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparaison des Méthodes d&apos;Extraction de Pages PDF (2026)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Plusieurs outils peuvent extraire des pages de PDF, mais ils diffèrent significativement en fonctionnalités, tarification et confidentialité. Voici comment PixelPDF se compare aux autres options populaires:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fonctionnalité</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">PixelPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Adobe Acrobat</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Smallpdf</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">iLovePDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Prix</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600 bg-blue-50">Gratuit</td>
                <td className="border border-gray-300 px-4 py-3 text-center">12,99 $/mois</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Inscription Requise</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Non</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui (fonctions complètes)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui (fonctions complètes)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Traitement Côté Client</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui (Desktop uniquement)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Non</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Non</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Sélection Personnalisée de Pages</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Oui (ex., 1-3, 5, 7-10)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Limite de Taille de Fichier</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">50 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">100 Mo</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 Mo (gratuit)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 Mo (gratuit)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Limite d&apos;Utilisation Quotidienne</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Illimitée</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Illimitée</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2 tâches/jour (gratuit)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">3 tâches/jour (gratuit)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Aperçu des Pages</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Compatible Mobile</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Limité</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Oui</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          * Informations exactes à mai 2026. Les fonctionnalités et tarifs peuvent changer.
        </p>
      </section>

      {/* Pro Tips */}
      <section id="tips" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils Pro pour l&apos;Extraction de Pages PDF</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Combinez les pages extraites dans un nouveau document:</strong> Besoin de créer un PDF personnalisé avec des pages de plusieurs documents? Extrayez les pages de chaque fichier source, puis utilisez l&apos;outil <Link href="/merge-pdf" className="text-blue-600 hover:underline">Fusionner PDF</Link> de PixelPDF pour les combiner en un seul document organisé.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Utilisez la syntaxe de plage de pages pour l&apos;efficacité:</strong> Au lieu d&apos;extraire les pages une par une, utilisez des plages séparées par des virgules comme <code className="bg-white px-2 py-1 rounded">1-5, 8, 12-15</code> pour extraire plusieurs sélections en une seule opération. C&apos;est beaucoup plus rapide que des extractions répétées.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Vérifiez que les numéros de page correspondent à la numérotation du document:</strong> Certains PDF ont des pages de couverture ou des préliminaires qui décalent le nombre réel de pages. Vérifiez toujours l&apos;aperçu miniature pour confirmer que vous extrayez les bonnes pages, particulièrement pour les documents juridiques ou financiers où la précision est critique.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Conservez les originaux comme sauvegarde:</strong> Préservez toujours vos fichiers PDF originaux. Cela vous permet de revenir et d&apos;extraire différentes pages plus tard si vos besoins changent, sans avoir à localiser à nouveau le document source.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Quelle est la différence entre extraire des pages et fractionner un PDF?</summary>
            <p className="mt-3 text-gray-700">Le fractionnement divise généralement un PDF entier en plusieurs parties selon des règles fixes (comme chaque page, ou à un numéro de page spécifique). L&apos;extraction est plus sélective: vous choisissez exactement quelles pages extraire, qui peuvent ne pas être consécutives. L&apos;outil Fractionner PDF de PixelPDF gère les deux opérations, vous offrant une flexibilité pour tout scénario.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">L&apos;extraction de pages affecte-t-elle la qualité du contenu?</summary>
            <p className="mt-3 text-gray-700">Non. L&apos;extraction de pages crée des copies exactes des pages originales sans recompression ni conversion de format. Le texte reste net et sélectionnable, les images conservent leur résolution originale, et tout le formatage, les polices et les hyperliens sont préservés. Les pages extraites sont identiques à leurs équivalents dans le document source.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Puis-je extraire des pages d&apos;un PDF protégé par mot de passe?</summary>
            <p className="mt-3 text-gray-700">Si le PDF nécessite un mot de passe pour s&apos;ouvrir, vous devrez le saisir avant que l&apos;outil puisse accéder au contenu. Pour les PDF avec des restrictions au niveau propriétaire (qui empêchent l&apos;édition, la copie ou l&apos;extraction), utilisez l&apos;outil <Link href="/pdf-decrypt" className="text-blue-600 hover:underline">PDF Decrypt</Link> de PixelPDF pour supprimer ces restrictions d&apos;abord, puis procédez à l&apos;extraction des pages.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Mes données sont-elles sécurisées lors de l&apos;extraction de pages en ligne?</summary>
            <p className="mt-3 text-gray-700">Avec PixelPDF, absolument. Tout le traitement se fait entièrement dans votre navigateur en utilisant JavaScript côté client. Votre fichier PDF ne quitte jamais votre appareil, il n&apos;y a pas de téléversement sur serveur, pas de stockage cloud et pas d&apos;accès tiers. Cela offre le même niveau de sécurité qu&apos;un logiciel de bureau avec la commodité d&apos;un outil web.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Combien de pages puis-je extraire à la fois?</summary>
            <p className="mt-3 text-gray-700">Vous pouvez extraire n&apos;importe quel nombre de pages de votre PDF en une seule opération. Entrez simplement tous les numéros de page et plages dont vous avez besoin en utilisant la syntaxe séparée par des virgules. Par exemple, <code className="bg-gray-100 px-2 py-1 rounded">1-10, 15, 20-25</code> extrait 17 pages en une seule fois. La seule limite est la taille globale du fichier (maximum 50 Mo).</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à Extraire des Pages de Votre PDF?</h2>
        <p className="mb-6 text-blue-100">Gratuit, rapide et 100% privé, extrayez exactement les pages dont vous avez besoin en quelques secondes</p>
        <Link
          href="/split-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Extraire des Pages Maintenant
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Outils Connexes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Fusionner PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">Compresser PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF en JPG</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">Rotation PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
