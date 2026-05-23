// PDF Seiten Extrahieren - Vollständige Anleitung
// Pfad: /src/app/blog/extract-pages-from-pdf/de/page.tsx
// Datum: 2026-05-23

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF Seiten Extrahieren: Vollständige Anleitung (2026)',
  description: 'Erfahren Sie, wie Sie bestimmte Seiten aus PDF-Dateien online kostenlos extrahieren. Schritt-für-Schritt-Anleitung mit Anwendungsfällen, Vergleichstabelle und FAQs zur PDF-Seitenextraktion.',
  keywords: ['PDF Seiten extrahieren', 'Seiten aus PDF extrahieren', 'PDF Extraktor', 'PDF Seiten herausziehen', 'PDF Extraktion'],
  openGraph: {
    title: 'PDF Seiten Extrahieren: Vollständige Anleitung (2026)',
    description: 'Erfahren Sie, wie Sie bestimmte Seiten aus PDF-Dateien online kostenlos extrahieren. Schritt-für-Schritt-Anleitung mit Anwendungsfällen, Vergleichstabelle und FAQs.',
    type: 'article',
  },
};

export default function ExtractPagesFromPdfGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>PDF Seiten Extrahieren</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDF Seiten Extrahieren: Vollständige Anleitung (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>23. Mai 2026</span>
        <span className="mx-2">•</span>
        <span>9 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>ca. 1.920 Wörter</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Benötigen Sie nur wenige Seiten aus einem riesigen PDF-Dokument? Sie sind nicht allein. Ob Sie eine bestimmte Rechnung aus einem Monatsauszug ziehen, einen Vertragsabschnitt zur Überprüfung extrahieren oder ein Kapitel aus einem Forschungsbericht entnehmen – zu wissen, wie man Seiten aus einem PDF extrahiert, ist eine wichtige digitale Fähigkeit. Dieser umfassende Leitfaden führt Sie durch alles, was Sie 2026 über PDF-Seitenextraktion wissen müssen – von den Grundlagen bis hin zu Schritt-für-Schritt-Anleitungen und einem detaillierten Vergleich der besten verfügbaren Tools.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">Inhaltsverzeichnis</h2>
        <ul className="space-y-2">
          <li><a href="#what-is-pdf-extraction" className="text-blue-600 hover:underline">Was ist PDF-Seitenextraktion?</a></li>
          <li><a href="#why-extract-pages" className="text-blue-600 hover:underline">Warum PDF-Seiten extrahieren? (Anwendungsfälle)</a></li>
          <li><a href="#how-to-extract" className="text-blue-600 hover:underline">Seiten extrahieren: Schritt-für-Schritt</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">Methoden im Vergleich</a></li>
          <li><a href="#tips" className="text-blue-600 hover:underline">Profis für PDF-Seitenextraktion</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">Häufig gestellte Fragen</a></li>
        </ul>
      </section>

      {/* What is PDF Page Extraction */}
      <section id="what-is-pdf-extraction" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Was ist PDF-Seitenextraktion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDF-Seitenextraktion ist der Prozess der Auswahl und Herausnahme bestimmter Seiten aus einem größeren PDF-Dokument, um eine neue, kleinere Datei zu erstellen. Im Gegensatz zum einfachen Kopieren von Text oder Erstellen von Screenshots (wobei Formatierung und Qualität verloren gehen), bewahrt die korrekte Seitenextraktion den exakten Inhalt, das Layout, die Schriftarten, Bilder und Hyperlinks der Originalseiten. Das Ergebnis ist eine voll funktionsfähige, eigenständige PDF-Datei, die nur die von Ihnen benötigten Seiten enthält.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Seitenextraktion wird oft mit dem PDF-Splitting verwechselt, und obwohl sie verwandt sind, dienen sie etwas unterschiedlichen Zwecken. Splitting teilt typischerweise ein ganzes Dokument in mehrere Teile – entweder nach festen Seitenbereichen oder durch Trennen jeder einzelnen Seite. Extraktion konzentriert sich hingegen auf die Auswahl bestimmter Seiten, die nicht aufeinanderfolgend sein können. Sie möchten beispielsweise die Seiten 3, 7 und 12 aus einem 20-seitigen Dokument extrahieren und den Rest zurücklassen.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Moderne Tools wie PixelPDF verarbeiten die Seitenextraktion über eine browserbasierte Oberfläche und verarbeiten alles lokal auf Ihrem Gerät. Dieser clientseitige Ansatz bedeutet, dass Ihre Dokumente niemals Ihren Computer verlassen und bietet Unternehmensniveau-Sicherheit ohne Software-Installation oder Kontoregistrierung.
        </p>
      </section>

      {/* Why Extract PDF Pages */}
      <section id="why-extract-pages" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum PDF-Seiten extrahieren? (Häufige Anwendungsfälle)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          PDF-Seitenextraktion ist in vielen beruflichen und persönlichen Szenarien wertvoll. Hier sind die häufigsten Anwendungsfälle:
        </p>

        {/* Use Case Cards */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-2">Rechnungsextraktion</h3>
            <p className="text-gray-700">
              Monatliche Bankauszüge und Lieferantenberichte enthalten oft Dutzende von Rechnungen in einer einzigen PDF-Datei. Wenn Sie eine bestimmte Rechnung zur Erstattung oder für Steuerzwecke einreichen müssen, spart das Extrahieren nur dieser Seite Zeit und beseitigt Verwirrung. Anstatt einen 50-seitigen Auszug zu senden, senden Sie genau das, was benötigt wird – eine einzelne, klare Rechnungsseite.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-900 mb-2">Vertragsabschnitte</h3>
            <p className="text-gray-700">
              Rechtsverträge können Hunderte von Seiten umfassen. Bei der Überprüfung bestimmter Klauseln mit Interessenvertretern oder beim Teilen relevanter Abschnitte mit externen Parteien schützt das Extrahieren nur der notwendigen Seiten vertrauliche Informationen und hält Diskussionen fokussiert. Sie können Unterschriftenseiten, bestimmte Bedingungen oder Änderungsabschnitte extrahieren, ohne die gesamte Vereinbarung offenzulegen.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-2">Berichtskapitel</h3>
            <p className="text-gray-700">
              Jahresberichte, Forschungsarbeiten und technische Dokumentation werden oft als einzelne große PDFs verteilt. Das Extrahieren bestimmter Kapitel oder Abschnitte ermöglicht Teammitgliedern den Zugriff nur auf das, was für ihre Arbeit relevant ist. Ein Marketingteam könnte das Marktanalyse-Kapitel extrahieren, während das Finanzteam die Finanzberichte zieht – alles aus demselben Quelldokument.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-semibold text-gray-900 mb-2">Lehrmaterialien</h3>
            <p className="text-gray-700">
              Lehrer und Schüler müssen häufig bestimmte Seiten aus Lehrbüchern, Arbeitsblättern oder Prüfungsunterlagen extrahieren. Ein Professor könnte eine Fallstudie für die Klassendiskussion extrahieren, oder ein Student könnte relevante Seiten für einen Literaturüberblick ziehen. Dieser zielgerichtete Ansatz ist effizienter als mit ganzen Lehrbüchern zu arbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="how-to-extract" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF-Seiten extrahieren: Schritt-für-Schritt-Anleitung</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Das Split PDF-Tool von PixelPDF bietet eine einfache, aber leistungsstarke Oberfläche zum Extrahieren von Seiten. So geht es in vier einfachen Schritten:
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Split PDF-Tool öffnen</h3>
              <p className="text-gray-700 mb-3">
                Navigieren Sie zur <Link href="/split-pdf" className="text-blue-600 hover:underline">Split PDF</Link>-Seite von PixelPDF. Dieses vielseitige Tool verarbeitet sowohl Splitting als auch Seitenextraktion mit derselben intuitiven Oberfläche. Keine Registrierung, keine Downloads und keine Plugins erforderlich – öffnen Sie einfach die Seite in einem modernen Browser.
              </p>
              <p className="text-gray-700">
                Das Tool funktioniert auf Desktop-Computern, Laptops, Tablets und Smartphones, sodass Sie von überall Seiten extrahieren können.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">PDF-Datei hochladen</h3>
              <p className="text-gray-700 mb-3">
                Klicken Sie auf den Upload-Bereich oder ziehen Sie Ihre PDF-Datei per Drag & Drop auf die Oberfläche. PixelPDF unterstützt Dateien bis zu 50 MB. Da die gesamte Verarbeitung lokal in Ihrem Browser mit clientseitigem JavaScript erfolgt, verlässt Ihre Datei niemals Ihr Gerät.
              </p>
              <p className="text-gray-700">
                Diese clientseitige Verarbeitung ist besonders wichtig für sensible Dokumente wie Verträge, Finanzberichte oder vertrauliche Reports. Ihre Daten bleiben während des gesamten Extraktionsprozesses privat.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Gewünschte Seiten auswählen</h3>
              <p className="text-gray-700 mb-3">
                Nach dem Upload sehen Sie Miniaturvorschauen aller Seiten in Ihrem PDF. Geben Sie die Seitenzahlen ein, die Sie extrahieren möchten, mit der flexiblen Seitenbereich-Syntax:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li><strong>Einzelne Seite:</strong> Geben Sie <code className="bg-gray-100 px-2 py-1 rounded">5</code> ein, um nur Seite 5 zu extrahieren</li>
                <li><strong>Seitenbereich:</strong> Geben Sie <code className="bg-gray-100 px-2 py-1 rounded">1-5</code> ein, um die Seiten 1 bis 5 zu extrahieren</li>
                <li><strong>Mehrere Auswahlen:</strong> Geben Sie <code className="bg-gray-100 px-2 py-1 rounded">1-3, 7, 10-12</code> ein, um die Seiten 1-3, Seite 7 und die Seiten 10-12 zu extrahieren</li>
              </ul>
              <p className="text-gray-700">
                Die Miniaturvorschau hilft Ihnen zu überprüfen, ob Sie die richtigen Seiten ausgewählt haben, bevor Sie fortfahren – besonders nützlich, wenn die Seitenzahlen im Dokument nicht mit der tatsächlichen PDF-Seitenanzahl übereinstimmen (z. B. wenn ein Dokument ein Deckblatt oder Inhaltsverzeichnis hat).
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Extrahieren und Herunterladen</h3>
              <p className="text-gray-700 mb-3">
                Klicken Sie auf die Schaltfläche „Split PDF", um Ihre Auswahl zu verarbeiten. Das Tool extrahiert Ihre gewählten Seiten und erstellt eine neue PDF-Datei, die nur diese Seiten enthält. Die Verarbeitung ist für die meisten Dokumente nahezu augenblicklich, da alles lokal in Ihrem Browser läuft.
              </p>
              <p className="text-gray-700">
                Ihre extrahierten Seiten werden automatisch als neue PDF-Datei heruntergeladen. Das Originaldokument bleibt auf Ihrem Gerät vollständig unverändert, sodass Sie jederzeit zurückkehren und bei Bedarf andere Seiten extrahieren können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF-Seitenextraktionsmethoden im Vergleich (2026)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Mehrere Tools können Seiten aus PDFs extrahieren, unterscheiden sich aber erheblich in Funktionen, Preisen und Datenschutz. Hier ist der Vergleich von PixelPDF mit anderen beliebten Optionen:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Funktion</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">PixelPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Adobe Acrobat</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Smallpdf</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">iLovePDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Preis</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600 bg-blue-50">Kostenlos</td>
                <td className="border border-gray-300 px-4 py-3 text-center">12,99 €/Monat</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Registrierung erforderlich</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Nein</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja (für alle Funktionen)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja (für alle Funktionen)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Clientseitige Verarbeitung</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja (nur Desktop)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Nein</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Nein</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Benutzerdefinierte Seitenauswahl</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Ja (z. B. 1-3, 5, 7-10)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Dateigrößenlimit</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">50 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">100 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB (kostenlos)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB (kostenlos)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Tägliches Nutzungslimit</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Unbegrenzt</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Unbegrenzt</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2 Aufgaben/Tag (kostenlos)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">3 Aufgaben/Tag (kostenlos)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Seitenvorschau</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Mobilfreundlich</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Eingeschränkt</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          * Informationen Stand Mai 2026. Funktionen und Preise können sich ändern.
        </p>
      </section>

      {/* Pro Tips */}
      <section id="tips" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Profis für PDF-Seitenextraktion</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Extrahierte Seiten zu einem neuen Dokument zusammenfügen:</strong> Möchten Sie ein benutzerdefiniertes PDF aus Seiten verschiedener Dokumente erstellen? Extrahieren Sie Seiten aus jeder Quelldatei und verwenden Sie dann das <Link href="/merge-pdf" className="text-blue-600 hover:underline">Merge PDF</Link>-Tool von PixelPDF, um sie zu einem einzigen, organisierten Dokument zusammenzufügen.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Seitenbereich-Syntax für Effizienz nutzen:</strong> Anstatt Seiten einzeln zu extrahieren, verwenden Sie kommagetrennte Bereiche wie <code className="bg-white px-2 py-1 rounded">1-5, 8, 12-15</code>, um mehrere Auswahlen in einem einzigen Vorgang zu ziehen. Das ist viel schneller als wiederholte Extraktionen.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Seitenzahlen mit Dokumentennummerierung abgleichen:</strong> Einige PDFs haben Deckblätter oder Vorspann, der die tatsächliche Seitenanzahl verschiebt. Überprüfen Sie immer die Miniaturvorschau, um zu bestätigen, dass Sie die richtigen Seiten extrahieren – besonders bei Rechts- oder Finanzdokumenten, wo Genauigkeit entscheidend ist.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Originale als Backup behalten:</strong> Bewahren Sie immer Ihre ursprünglichen PDF-Dateien auf. So können Sie bei geänderten Anforderungen zurückkehren und andere Seiten extrahieren, ohne das Quelldokument erneut suchen zu müssen.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Was ist der Unterschied zwischen Seiten extrahieren und PDF aufteilen?</summary>
            <p className="mt-3 text-gray-700">Aufteilen teilt typischerweise ein ganzes PDF basierend auf festen Regeln in mehrere Teile (z. B. jede Seite oder an einer bestimmten Seitenzahl). Extraktion ist selektiver – Sie wählen genau aus, welche Seiten herausgezogen werden sollen, die nicht aufeinanderfolgend sein können. Das Split PDF-Tool von PixelPDF verarbeitet beide Operationen und bietet Flexibilität für jedes Szenario.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Beeinflusst das Extrahieren von Seiten die Qualität des Inhalts?</summary>
            <p className="mt-3 text-gray-700">Nein. Die Seitenextraktion erstellt exakte Kopien der Originalseiten ohne Neukomprimierung oder Formatkonvertierung. Text bleibt scharf und auswählbar, Bilder behalten ihre ursprüngliche Auflösung, und alle Formatierungen, Schriftarten und Hyperlinks bleiben erhalten. Die extrahierten Seiten sind identisch mit ihren Gegenstücken im Quelldokument.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich Seiten aus einem passwortgeschützten PDF extrahieren?</summary>
            <p className="mt-3 text-gray-700">Wenn das PDF ein Passwort zum Öffnen benötigt, müssen Sie es eingeben, bevor das Tool auf den Inhalt zugreifen kann. Bei PDFs mit Besitzer-Einschränkungen (die Bearbeitung, Kopieren oder Extraktion verhindern), verwenden Sie zuerst das <Link href="/pdf-decrypt" className="text-blue-600 hover:underline">PDF Decrypt</Link>-Tool von PixelPDF, um diese Einschränkungen zu entfernen, und fahren Sie dann mit der Seitenextraktion fort.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Sind meine Daten beim Online-Extrahieren von Seiten sicher?</summary>
            <p className="mt-3 text-gray-700">Mit PixelPDF absolut. Die gesamte Verarbeitung erfolgt vollständig in Ihrem Browser mit clientseitigem JavaScript. Ihre PDF-Datei verlässt niemals Ihr Gerät – es gibt keine Server-Uploads, keinen Cloud-Speicher und keinen Drittanbieter-Zugriff. Dies bietet dasselbe Sicherheitsniveau wie Desktop-Software mit dem Komfort eines webbasierten Tools.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Wie viele Seiten kann ich gleichzeitig extrahieren?</summary>
            <p className="mt-3 text-gray-700">Sie können in einem einzigen Vorgang beliebig viele Seiten aus Ihrem PDF extrahieren. Gebben Sie einfach alle benötigten Seitenzahlen und -bereiche mit der kommagetrennten Syntax ein. Zum Beispiel extrahiert <code className="bg-gray-100 px-2 py-1 rounded">1-10, 15, 20-25</code> 17 Seiten auf einmal. Die einzige Grenze ist die Gesamtdateigröße (maximal 50 MB).</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit, Seiten aus Ihrem PDF zu extrahieren?</h2>
        <p className="mb-6 text-blue-100">Kostenlos, schnell und 100% privat – extrahieren Sie genau die Seiten, die Sie brauchen, in Sekunden</p>
        <Link
          href="/split-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Jetzt Seiten extrahieren
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verwandte Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Merge PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">Compress PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF to JPG</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">Rotate PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
