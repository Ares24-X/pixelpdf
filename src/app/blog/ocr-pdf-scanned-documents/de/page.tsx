import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gescanntes PDF per OCR erkennen und bearbeitbar machen (kostenlos online 2026)',
  description: 'Erfahren Sie, wie Sie ein gescanntes PDF mit OCR online kostenlos in durchsuchbaren und bearbeitbaren Text umwandeln.',
  keywords: ['gescanntes PDF OCR kostenlos', 'PDF OCR online kostenlos', 'Text aus gescanntem PDF extrahieren', 'bearbeitbares PDF OCR', 'OCR für Scan PDF'],
  openGraph: {
    title: 'Gescanntes PDF per OCR erkennen und bearbeitbar machen (kostenlos online 2026)',
    description: 'Schritt-für-Schritt-Anleitung, um gescannte PDFs per OCR in nutzbaren Text umzuwandeln.',
    type: 'article',
  },
};

export default function OcrPdfScannedDocumentsDePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/de">Home</Link> / <Link href="/blog">Blog</Link> / <span>OCR für gescannte PDFs</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Gescanntes PDF per OCR erkennen und bearbeitbar machen (kostenlos online 2026)
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>6. Juni 2026</span>
        <span className="mx-2">•</span>
        <span>8 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>ca. 1.450 Wörter</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Wenn Sie ein gescanntes PDF öffnen und darin weder Text markieren noch suchen oder kopieren können, liegt das meist an der Struktur der Datei. Das Dokument besteht dann nicht aus echtem Text, sondern aus Bildern einzelner Seiten. Genau dafür ist OCR gedacht. OCR steht für Optical Character Recognition, also optische Zeichenerkennung. Dabei werden Buchstaben aus einem Bild erkannt und in maschinenlesbaren Text umgewandelt.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Mit OCR werden gescannte Verträge, Rechnungen, Protokolle oder Handouts deutlich nützlicher. Sie können Begriffe durchsuchen, Absätze kopieren, Inhalte weiterverarbeiten und Archive sauberer organisieren. In diesem Leitfaden erfahren Sie, wie Sie ein gescanntes PDF online kostenlos per OCR verarbeiten, wie Sie die Erkennungsrate verbessern und wann zusätzliche PDF-Werkzeuge sinnvoll sind.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Kurzantwort: So OCRen Sie ein gescanntes PDF</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>Prüfen Sie zuerst, ob das PDF wirklich gescannt ist.</strong> Wenn Text nicht markierbar ist, benötigen Sie OCR.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>Bereiten Sie die Datei vor.</strong> Korrigieren Sie schiefe Seiten mit <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> und verkleinern Sie übergroße Dateien bei Bedarf mit <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>Führen Sie OCR aus und exportieren Sie passend.</strong> Für reine Suche genügt ein durchsuchbares PDF, für Änderungen eher Word oder Text.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Was OCR bei einem Scan-PDF eigentlich macht</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ein gescanntes PDF speichert meistens nur Seitenbilder. OCR analysiert diese Bilder, erkennt Buchstaben, Zahlen und Satzzeichen und setzt daraus verwendbaren Text zusammen. Manche OCR-Workflows fügen einen unsichtbaren Textlayer hinter dem Originalbild ein. Andere exportieren den erkannten Inhalt direkt in ein bearbeitbares Format.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welche Variante besser ist, hängt von Ihrem Ziel ab. Möchten Sie das Erscheinungsbild der Datei behalten, ist ein durchsuchbares PDF ideal. Müssen Sie den Inhalt umschreiben, ist ein Export nach Word oder Text meist sinnvoller. Schwierige Seiten können Sie vorher mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> abtrennen und separat behandeln.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Typische Anwendungsfälle</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Text aus gescannten Rechnungen, Belegen und Formularen extrahieren</li>
            <li>Alte Verträge und Archivdokumente durchsuchbar machen</li>
            <li>Absätze aus Skripten oder Bibliotheksscans kopieren</li>
            <li>Bildbasierte PDFs für Übersetzung oder Zusammenfassung vorbereiten</li>
            <li>Dokumente zugänglicher für Suche und Barrierefreiheit machen</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schritt-für-Schritt: Gescanntes PDF kostenlos per OCR verarbeiten</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Erst prüfen, ob OCR überhaupt nötig ist</h3>
              <p className="text-gray-700 leading-relaxed">Versuchen Sie, einen Satz im PDF zu markieren. Wenn sich keine einzelnen Wörter auswählen lassen und die Seite wie ein Bild reagiert, ist OCR erforderlich. Diese Prüfung spart unnötige Arbeit bei bereits digitalen PDFs.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Die Vorlage vor der OCR verbessern</h3>
              <p className="text-gray-700 leading-relaxed">Die Qualität der Erkennung steht und fällt mit der Qualität des Scans. Drehen Sie schiefe Seiten mit <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link>. Wenn die Datei wegen übergroßer Bilder sehr schwer ist, verkleinern Sie sie vorsichtig mit <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>, ohne die Lesbarkeit zu zerstören. Für eine Seitenkontrolle eignet sich <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link>.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Die richtige Dokumentsprache auswählen</h3>
              <p className="text-gray-700 leading-relaxed">Wenn Ihr OCR-Tool eine Sprachwahl anbietet, sollten Sie diese unbedingt korrekt setzen. Dadurch werden Umlaute, Sonderzeichen, Wortabstände und fachspezifische Begriffe deutlich besser erkannt. Bei mehrsprachigen Dokumenten ist dieser Schritt besonders wichtig.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Das OCR-Ergebnis kontrollieren</h3>
              <p className="text-gray-700 leading-relaxed">Vergleichen Sie die Ausgabe mit dem Originalscan, vor allem bei Namen, Beträgen, Datumsangaben und Vertragsklauseln. OCR ist schnell, aber nicht unfehlbar. Schlechte Kontraste, Stempel, Handschrift und verblasste Ausdrucke führen oft genau dort zu Fehlern, wo Präzision nötig ist.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Im passenden Format exportieren</h3>
              <p className="text-gray-700 leading-relaxed">Benötigen Sie nur Suche und Kopieren, reicht ein durchsuchbares PDF. Müssen Sie den Text weiterbearbeiten, ist ein Export nach Word oder Text sinnvoller. Mehrere Ergebnisse können Sie später mit <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> wieder zusammenführen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">So verbessern Sie die OCR-Genauigkeit</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Die beste OCR beginnt mit einer sauberen Vorlage. Ein gerader, kontrastreicher Scan mit etwa 300 DPI liefert meist deutlich bessere Ergebnisse als ein schräg aufgenommenes Handyfoto mit Schatten. Große Dateien allein bedeuten keine gute Erkennung. Entscheidend ist, ob die Buchstaben klar sichtbar sind.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Problem</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Auswirkung</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Beste Maßnahme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Seite ist verdreht</td>
                <td className="border border-gray-300 px-4 py-3">Blöcke werden falsch erkannt</td>
                <td className="border border-gray-300 px-4 py-3">Vorher drehen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Schwacher Kontrast</td>
                <td className="border border-gray-300 px-4 py-3">Zeichen verschwinden oder verschmelzen</td>
                <td className="border border-gray-300 px-4 py-3">Besseren Scan verwenden</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Schatten vom Handyfoto</td>
                <td className="border border-gray-300 px-4 py-3">Falsche Zeichen werden erfunden</td>
                <td className="border border-gray-300 px-4 py-3">Neu fotografieren oder zuschneiden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Sehr kleine Schrift</td>
                <td className="border border-gray-300 px-4 py-3">Details gehen verloren</td>
                <td className="border border-gray-300 px-4 py-3">Höhere Auflösung nutzen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Wenn Sie regelmäßig Papierdokumente digitalisieren, lohnt sich eine feste Vorbereitungsroutine: ausrichten, leere Seiten entfernen, große Dateien sinnvoll aufteilen und erst dann OCR ausführen. Das spart Nacharbeit.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wann OCR allein nicht ausreicht</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          OCR löst das Textproblem, aber nicht jedes Layoutproblem. Formulare mit Kästchen, Stempel über Unterschriften, enge Tabellen oder handschriftliche Ergänzungen bleiben schwierig. In solchen Fällen ist ein kombinierter Workflow sinnvoll: erst OCR für die Texterkennung, dann zusätzliche PDF-Werkzeuge für die Bereinigung des Enddokuments.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> problematische Seiten trennen</li>
          <li>Mit <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link> Seitenbilder für die manuelle Prüfung erzeugen</li>
          <li>Mit <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link> bereinigte Seiten wieder als PDF zusammenbauen</li>
          <li>Unseren Beitrag zum <Link href="/blog/edit-scanned-pdf" className="text-blue-600 hover:underline font-medium">Bearbeiten gescannter PDFs</Link> lesen, wenn visuelle Korrekturen nötig sind</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Kurz gesagt: OCR macht Text nutzbar. Es ersetzt nicht automatisch jede manuelle Qualitätskontrolle oder Nachbearbeitung.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Besonders sinnvolle Einsatzgebiete</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Unterlagen im Unternehmen</h3>
            <p className="text-gray-700 text-sm">Rechnungen, Personalakten, Verträge und Berichte lassen sich deutlich schneller durchsuchen.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Studium und Forschung</h3>
            <p className="text-gray-700 text-sm">Zitate aus gescannten Quellen oder Vorlesungsskripten können einfacher übernommen werden.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Recht und Compliance</h3>
            <p className="text-gray-700 text-sm">Klauseln, Namen und Fristen in Altarchiven werden schneller auffindbar.</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Private Dokumentenablage</h3>
            <p className="text-gray-700 text-sm">Versicherungen, Belege und Anleitungen können später leichter gefunden werden.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich ein gescanntes PDF online kostenlos per OCR verarbeiten?</summary>
            <p className="mt-3 text-gray-700">Ja. Für viele Standarddokumente reicht ein kostenloser Online-Workflow aus. Entscheidend ist, dass die Vorlage sauber und gut lesbar ist.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Wird das PDF danach vollständig bearbeitbar?</summary>
            <p className="mt-3 text-gray-700">Der Text oft ja, das Layout nicht immer. Tabellen, Formulare und visuelle Elemente können Nacharbeit erfordern.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Welche Scanqualität ist für OCR ideal?</summary>
            <p className="mt-3 text-gray-700">Ein gerader, kontrastreicher Scan mit ungefähr 300 DPI ist ein sehr guter Ausgangspunkt.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann OCR auch Handschrift lesen?</summary>
            <p className="mt-3 text-gray-700">Teilweise, aber deutlich unzuverlässiger als bei gedrucktem Text. Handschrift bleibt einer der schwierigsten Fälle.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Möchten Sie Ihr Scan-PDF zuerst vorbereiten?</h2>
        <p className="mb-6 text-blue-100">Drehen, komprimieren, teilen oder als Bild prüfen, bevor Sie OCR starten.</p>
        <Link
          href="/pdf-to-jpg"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Mit PDF to JPG beginnen
        </Link>
      </section>
    </article>
  );
}
