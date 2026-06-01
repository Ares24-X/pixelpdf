// PDF Nach Bestimmten Seiten Teilen - Langformat (1200-1500 Wörter)
// Pfad: /src/app/blog/split-pdf-by-pages/de/page.tsx
// Datum: 2026-06-01
// Ziel-Keywords: PDF nach bestimmten Seiten teilen

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF Nach Bestimmten Seiten Teilen (Kostenlose Online-Anleitung)',
  description: 'Lernen Sie, wie Sie PDFs online nach bestimmten Seiten teilen. Extrahieren Sie einzelne Seiten, Seitenbereiche oder mehrere Abschnitte aus jedem PDF-Dokument – kostenlos, schnell und sicher.',
  keywords: ['PDF nach bestimmten Seiten teilen', 'Seiten aus PDF extrahieren', 'PDF nach Seitenbereich teilen', 'PDF-Seitenextraktor', 'Online-PDF-Splitter'],
  openGraph: {
    title: 'PDF Nach Bestimmten Seiten Teilen (Kostenlose Online-Anleitung)',
    description: 'Lernen Sie, wie Sie PDFs online nach bestimmten Seiten teilen. Extrahieren Sie einzelne Seiten, Seitenbereiche oder mehrere Abschnitte aus jedem PDF-Dokument – kostenlos, schnell und sicher.',
    type: 'article',
  },
};

export default function SplitPdfByPages() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>PDF Nach Seiten Teilen</span>
      </nav>

      {/* H1 Titel */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDF Nach Bestimmten Seiten Teilen (Kostenlose Online-Anleitung)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>1. Juni 2026</span>
        <span className="mx-2">•</span>
        <span>8 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>~1.450 Wörter</span>
      </div>

      {/* Einleitung */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Haben Sie jemals ein 200-seitiges PDF erhalten, aber nur die Seiten 15, 32 und 78-85 benötigt? Oder müssen Sie bestimmte Kapitel aus einem umfangreichen Bericht extrahieren, um sie mit verschiedenen Teammitgliedern zu teilen? Das Erlernen, wie man PDFs nach bestimmten Seiten teilt, ist eine wesentliche Fähigkeit, die Ihnen stundenlange manuelle Arbeit ersparen kann. Ob Sie ein Student sind, der relevante Forschungsabschnitte extrahiert, ein Anwalt, der Falldokumente trennt, oder ein Geschäftsprofi, der bestimmte Vertragsseiten teilt – diese umfassende Anleitung zeigt Ihnen genau, wie Sie die genauen Seiten extrahieren, die Sie benötigen – schnell, präzise und völlig kostenlos.
        </p>
      </section>

      {/* Schnellantwort-Box - Featured Snippet Ziel */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Schnellantwort: PDF Nach Bestimmten Seiten Teilen in 3 Schritten</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Laden Sie Ihr PDF hoch</strong> zu PixelPDFs <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF-Teilen-Tool</Link> – per Drag & Drop oder Klick zum Durchsuchen</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Geben Sie Seitenzahlen an</strong> – einzelne Seiten (z.B. "5"), Bereiche (z.B. "10-20") oder Kombinationen (z.B. "1-3,7,15-18")</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Extrahierte Seiten herunterladen</strong> – als neues PDF mit nur Ihren ausgewählten Seiten speichern</p>
          </div>
        </div>
      </section>

      {/* Warum PDFs nach bestimmten Seiten teilen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum PDFs Nach Bestimmten Seiten Teilen?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bevor wir in den technischen Prozess eintauchen, verstehen wir die realen Szenarien, in denen das Teilen von PDFs nach bestimmten Seiten von unschätzbarem Wert ist. Hier sind vier häufige Anwendungsfälle, denen Fachleute täglich begegnen:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">📚 Kapitel Extrahieren</h4>
            <p className="text-gray-700 text-sm">Wissenschaftliche Forscher benötigen oft bestimmte Kapitel aus umfangreichen Lehrbüchern oder Dissertationen. Teilen Sie nicht ein 500-seitiges Dokument, sondern extrahieren Sie einfach die relevanten 30 Seiten, die Ihr Kollege benötigt.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">📄 Rechnungen Trennen</h4>
            <p className="text-gray-700 text-sm">Buchhalter erhalten häufig konsolidierte PDFs mit mehreren Rechnungen. Teilen Sie sie in einzelne Dateien für einfachere Organisation, Ablage und Zahlungsabwicklung.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">🗑️ Ungewollte Seiten Entfernen</h4>
            <p className="text-gray-700 text-sm">Gescannte Dokumente enthalten oft leere Seiten, Deckblätter oder vertrauliche Abschnitte, die nicht geteilt werden sollten. Extrahieren Sie nur die Seiten, die Sie behalten möchten.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">📤 Bestimmte Abschnitte Teilen</h4>
            <p className="text-gray-700 text-sm">Projektmanager müssen verschiedene Abschnitte eines Berichts an verschiedene Abteilungen verteilen. Teilen Sie nach bestimmten Seiten, um relevante Inhalte an jedes Teammitglied zu senden.</p>
          </div>
        </div>
      </section>

      {/* Seitenbereich-Syntax verstehen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Seitenbereich-Syntax Verstehen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beim Erlernen, wie man PDFs nach bestimmten Seiten teilt, ist das Verständnis der Seitenbereich-Syntax entscheidend. Die meisten PDF-Teilen-Tools unterstützen mehrere Formate zur Angabe, welche Seiten extrahiert werden sollen. Hier erfahren Sie, wie Sie jedes Format effektiv nutzen:
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">So Geben Sie Seiten An</h3>
        <div className="space-y-4 mb-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-24 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-mono text-center">5</div>
            <div>
              <h4 className="font-semibold text-gray-900">Einzelne Seite</h4>
              <p className="text-gray-700 text-sm">Geben Sie einfach die Seitenzahl ein, um eine bestimmte Seite zu extrahieren. Beispiel: "5" extrahiert nur Seite 5.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-24 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-mono text-center">10-20</div>
            <div>
              <h4 className="font-semibold text-gray-900">Seitenbereich</h4>
              <p className="text-gray-700 text-sm">Verwenden Sie einen Bindestrich, um einen kontinuierlichen Bereich anzugeben. Beispiel: "10-20" extrahiert die Seiten 10, 11, 12... bis 20.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-24 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-mono text-center">3,7,12</div>
            <div>
              <h4 className="font-semibold text-gray-900">Mehrere Einzelseiten</h4>
              <p className="text-gray-700 text-sm">Verwenden Sie Kommas, um nicht aufeinanderfolgende Seiten auszuwählen. Beispiel: "3,7,12" extrahiert nur die Seiten 3, 7 und 12.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-24 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-mono text-center">1-5,8,15-20</div>
            <div>
              <h4 className="font-semibold text-gray-900">Kombiniertes Format</h4>
              <p className="text-gray-700 text-sm">Mischen Sie Bereiche und einzelne Seiten. Beispiel: "1-5,8,15-20" extrahiert die Seiten 1-5, Seite 8 und die Seiten 15-20.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-700 text-sm">
            <strong>Wichtig:</strong> Seitenzahlen beziehen sich auf die tatsächlichen Seitenzahlen im Dokument, nicht auf die gedruckten Seitenzahlen. Die erste Seite ist immer "1", unabhängig davon, welche Nummer auf dieser Seite gedruckt erscheint.
          </p>
        </div>
      </section>

      {/* Schritt-für-Schritt-Anleitung */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schritt-für-Schritt-Anleitung: PDF Nach Bestimmten Seiten Teilen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lassen Sie uns nun den vollständigen Prozess mit PixelPDFs <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF-Teilen-Tool</Link> durchgehen. Diese Methode funktioniert vollständig in Ihrem Browser – keine Software-Installation, kein Konto erforderlich, und Ihre Dateien verlassen nie Ihr Gerät.
        </p>

        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Laden Sie Ihr PDF-Dokument Hoch</h4>
              <p className="text-gray-700">Navigieren Sie zum PDF-Teilen-Tool und laden Sie Ihre Datei hoch. Sie können das PDF per Drag & Drop in den Upload-Bereich ziehen oder klicken, um Ihr Gerät zu durchsuchen. Das Tool akzeptiert Dateien bis zu 100 MB, was es für große Dokumente geeignet macht.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Geben Sie Ihre Seitenauswahl Ein</h4>
              <p className="text-gray-700">Geben Sie im Seitenbereich-Eingabefeld die spezifischen Seiten ein, die Sie extrahieren möchten. Verwenden Sie die oben beschriebene Syntax: einzelne Zahlen für einzelne Seiten, Bindestriche für Bereiche und Kommas zur Trennung mehrerer Auswahlen. Das Tool validiert Ihre Eingabe, um sicherzustellen, dass die Seiten in Ihrem Dokument existieren.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Vorschau und Bestätigung</h4>
              <p className="text-gray-700">Viele Tools zeigen eine Miniaturansichtsvorschau der ausgewählten Seiten. Nehmen Sie sich einen Moment Zeit, um zu überprüfen, ob die richtigen Seiten hervorgehoben sind, bevor Sie fortfahren.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Laden Sie Ihr Extrahiertes PDF Herunter</h4>
              <p className="text-gray-700">Klicken Sie auf die Teilen- oder Extrahieren-Schaltfläche, und das Tool generiert ein neues PDF mit nur Ihren ausgewählten Seiten. Laden Sie die Datei auf Ihr Gerät herunter. Das Originaldokument bleibt unverändert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Häufige Teilen-Szenarien */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige PDF-Teilen-Szenarien</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Um Ihnen bei der Anwendung dieses Wissens zu helfen, hier reale Szenarien mit den genauen Seitenbereichen, die Sie verwenden würden:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ziel</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Seitenbereich</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ausgabe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Erstes Kapitel extrahieren (Seiten 1-15)</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-blue-700">1-15</td>
                <td className="border border-gray-300 px-4 py-3">15-seitiges PDF</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Nur Seiten 5, 12 und 20 erhalten</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-blue-700">5,12,20</td>
                <td className="border border-gray-300 px-4 py-3">3-seitiges PDF</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Deckblatt und Anhang entfernen</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-blue-700">2-45</td>
                <td className="border border-gray-300 px-4 py-3">44-seitiges PDF (Original war 50 Seiten)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Zusammenfassung und Schlussfolgerung extrahieren</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-blue-700">1-3,48-50</td>
                <td className="border border-gray-300 px-4 py-3">6-seitiges PDF</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Jede 10. Seite zur Überprüfung trennen</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-blue-700">10,20,30,40,50</td>
                <td className="border border-gray-300 px-4 py-3">5-seitiges Beispiel-PDF</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Was passiert mit Lesezeichen/Anmerkungen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Was Passiert Mit Lesezeichen Und Anmerkungen?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eine häufige Besorgnis beim Teilen von PDFs ist, ob wichtige Metadaten wie Lesezeichen, Anmerkungen und Formularfelder erhalten bleiben. Hier ist, was Sie wissen müssen:
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Umgang Mit Lesezeichen</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wenn Sie ein PDF nach bestimmten Seiten teilen, werden Lesezeichen (die Navigationsgliederung in der Seitenleiste), die auf extrahierte Seiten zeigen, normalerweise beibehalten. Lesezeichen, die auf Seiten zeigen, die nicht extrahiert wurden, werden jedoch entfernt, da diese Seiten im neuen Dokument nicht mehr existieren. Wenn die Beibehaltung der Lesezeichenstruktur kritisch ist, erwägen Sie, größere Abschnitte zu extrahieren, die alle mit Lesezeichen versehenen Seiten enthalten.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Anmerkungen Und Kommentare</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Texthervorhebungen, Haftnotizen und Zeichenanmerkungen werden in der Regel beibehalten, wenn Sie Seiten extrahieren. Wenn Seite 15 drei Kommentare hat und Sie nur diese Seite extrahieren, bleiben diese Kommentare in Ihrem neuen PDF erhalten. Einige erweiterte Tools bieten jedoch möglicherweise Optionen zum Entfernen von Anmerkungen, wenn Sie eine saubere Version benötigen.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Formularfelder</h3>
        <p className="text-gray-700 leading-relaxed">
          Interaktive Formularfelder (Textfelder, Kontrollkästchen, Dropdown-Menüs) auf extrahierten Seiten werden beibehalten und bleiben im neuen Dokument funktionsfähig. Die in diesen Feldern eingegebenen Daten werden ebenfalls beibehalten. Dies ist besonders nützlich, wenn Sie bestimmte ausgefüllte Formulare aus einem größeren Dokumentpaket extrahieren müssen.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig Gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich ein PDF auf einmal in mehrere separate Dateien teilen?</summary>
            <p className="mt-3 text-gray-700">
              Ja, viele erweiterte PDF-Teilen-Tools ermöglichen es Ihnen, in einem Vorgang mehrere Ausgabedateien zu erstellen. Sie können beispielsweise "1-10,11-20,21-30" angeben, um drei separate PDFs mit jeweils 10 Seiten zu erstellen. Alternativ können Sie den Teilen-Vorgang mehrmals mit verschiedenen Seitenbereichen ausführen, um einzelne Dateien zu erstellen.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Behalten die extrahierten Seiten ihre ursprüngliche Qualität bei?</summary>
            <p className="mt-3 text-gray-700">
              Absolut. Wenn Sie PDFs nach bestimmten Seiten teilen, extrahiert das Tool einfach die ausgewählten Seiten, ohne den Inhalt neu zu kodieren oder zu komprimieren. Text bleibt scharf, Bilder behalten ihre Auflösung, und die Gesamtqualität ist identisch mit dem Original. Während des Teilen-Prozesses tritt kein Qualitätsverlust auf.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Gibt es eine Begrenzung, wie viele Seiten ich extrahieren kann?</summary>
            <p className="mt-3 text-gray-700">
              Die meisten Online-Tools haben Dateigrößenbeschränkungen (typischerweise 50-100 MB) anstelle von Seitenzahlbeschränkungen. Sie können so viele Seiten extrahieren, wie die Dateigröße erlaubt. Für extrem große Dokumente müssen Sie sie möglicherweise in Batches verarbeiten oder Desktop-Software verwenden. PixelPDFs Tool verarbeitet Dateien bis zu 100 MB, was die meisten PDFs mit mehreren hundert Seiten abdeckt.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich Seiten in einer anderen Reihenfolge extrahieren, als sie erscheinen?</summary>
            <p className="mt-3 text-gray-700">
              Ja, die Reihenfolge, die Sie im Seitenbereich angeben, bestimmt die Ausgabereihenfolge. Wenn Sie beispielsweise "20,15,10" eingeben, wird ein PDF mit Seite 20 zuerst, gefolgt von Seite 15, dann Seite 10 erstellt. Dies ist nützlich, um Inhalte neu anzuordnen, ohne ein separates Sortier-Tool zu benötigen.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Ist mein Dokument sicher, wenn ich Online-PDF-Teilen-Tools verwende?</summary>
            <p className="mt-3 text-gray-700">
              Mit PixelPDF ist Ihre Sicherheit garantiert. Unser PDF-Teilen-Tool verarbeitet Dateien vollständig in Ihrem Browser mithilfe von Client-Seiten-Technologie. Ihr Dokument wird nie auf einen Server hochgeladen, was bedeutet, dass sensible Informationen – ob Finanzunterlagen, Rechtsdokumente oder persönliche Daten – vollständig privat und sicher bleiben.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit, Ihr PDF Nach Bestimmten Seiten Zu Teilen?</h2>
        <p className="mb-6 text-blue-100">Extrahieren Sie in Sekundenschnelle genau die Seiten, die Sie benötigen – kostenlos, sicher und ohne Registrierung</p>
        <Link
          href="/split-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Jetzt PDF Teilen
        </Link>
      </section>

      {/* Verwandte Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verwandte Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDFs Zusammenführen</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">PDF Komprimieren</div>
          </Link>
          <Link href="/extract-pages-from-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📃</div>
            <div className="font-medium">Seiten Extrahieren</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF Zu JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
