import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gescanntes PDF online komprimieren, ohne unscharfe Seiten zu erzeugen',
  description:
    'Erfahren Sie, wie Sie ein gescanntes PDF online komprimieren, ohne kleine Schrift, Unterschriften, Stempel oder QR-Codes unleserlich zu machen.',
  keywords: [
    'gescanntes PDF online komprimieren kostenlos',
    'gescanntes PDF verkleinern',
    'PDF komprimieren ohne Qualitätsverlust Scan',
    'großes Scan PDF reduzieren',
    'PDF für E-Mail verkleinern',
  ],
  openGraph: {
    title: 'Gescanntes PDF online komprimieren, ohne unscharfe Seiten zu erzeugen',
    description:
      'Erfahren Sie, wie Sie ein gescanntes PDF online komprimieren, ohne kleine Schrift, Unterschriften, Stempel oder QR-Codes unleserlich zu machen.',
    type: 'article',
  },
};

export default function CompressScannedPdfOnlineDePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Gescanntes PDF komprimieren</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Gescanntes PDF online komprimieren, ohne unscharfe Seiten zu erzeugen
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>17. Juni 2026</span>
        <span className="mx-2">•</span>
        <span>8 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>ca. 1.430 Wörter</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Gescannte PDFs sind praktisch, weil sie Papierdokumente originalgetreu abbilden. Gleichzeitig gehören sie zu den Dateien, die am schnellsten zu groß werden.
          Schon ein 25-seitiger Scan kann 30MB, 40MB oder mehr erreichen. Spätestens beim Versand per E-Mail, beim Upload in ein Portal oder bei der Archivierung vieler
          Dokumente wird das zum Problem. Die eigentliche Herausforderung ist dabei nicht nur, die Dateigröße zu reduzieren. Sie müssen die Datei verkleinern, ohne dass
          Unterschriften, Stempel, kleine Zahlen oder QR-Codes unbrauchbar werden.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          In diesem Leitfaden erfahren Sie, wie Sie ein gescanntes PDF online kostenlos komprimieren, mit welcher Einstellung Sie beginnen sollten und wann Aufteilen sinnvoller ist
          als noch stärkere Kompression. Wenn Sie direkt starten möchten, nutzen Sie PixelPDFs <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> und kombinieren Sie es bei Bedarf mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> oder <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Kurze Antwort: So komprimieren Sie ein gescanntes PDF am sichersten</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Laden Sie die Datei hoch</strong> in PixelPDFs <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Beginnen Sie mit mittlerer Kompression</strong>, damit Text lesbar bleibt und die Datei trotzdem deutlich schrumpft.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Prüfen Sie kritische Details</strong> wie Unterschriften, Stempel, feine Tabellen und Codes vor dem Versand.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum gescannte PDFs so groß werden</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ein digital erzeugtes PDF enthält oft Text, Schriften und Vektoren. Ein gescanntes PDF speichert dagegen viele oder alle Seiten als Bilder. Genau deshalb wächst die Datei so schnell.
          Wenn zusätzlich in Farbe und hoher Auflösung gescannt wurde, steigt die Größe noch stärker an.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Farbscan, obwohl Graustufen ausgereicht hätten</li>
          <li>Zu hohe DPI für normale Bürounterlagen</li>
          <li>Leerseiten und doppelte Seiten bleiben im Dokument</li>
          <li>Sehr viele Seiten werden in einer einzigen Datei gesammelt</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Deshalb kann ein kurzer Scan-Ordner größer sein als ein langes, aber digital erstelltes Vertragsdokument.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">So komprimieren Sie, ohne die Lesbarkeit zu zerstören</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Definieren Sie zuerst den Einsatzzweck</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Soll die Datei nur per E-Mail verschickt werden? Soll sie ausgedruckt, archiviert oder an eine Behörde weitergegeben werden? Davon hängt ab, wie stark Sie komprimieren dürfen.
          Für reine Sichtprüfung dürfen Sie oft aggressiver vorgehen. Für Verträge, Belege oder Formulare sollten Sie vorsichtiger sein.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Starten Sie mit mittlerer Kompression</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Das ist für die meisten gescannten PDFs der beste erste Schritt. Sie gewinnen meist viel Speicherplatz zurück, ohne dass die Seiten sofort matschig wirken.
          Wenn die Datei danach noch zu groß ist, können Sie immer noch eine stärkere Einstellung testen.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Prüfen Sie nicht nur die erste Seite</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Zoomen Sie in typische Problemstellen hinein: Unterschriften, kleine Beträge, Tabellen, Randnotizen, Barcodes und QR-Codes. Wenn diese Bereiche sauber bleiben,
          ist die Kompression meist praxistauglich.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Teilen statt überkomprimieren</h3>
        <p className="text-gray-700 leading-relaxed">
          Wenn die Größe vor allem durch die Seitenzahl entsteht, ist Aufteilen oft sinnvoller als noch mehr Qualitätsverlust. Mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> können Sie große Akten in logische Teile zerlegen.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Empfehlungen nach Dokumenttyp</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dokumenttyp</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Empfohlene Vorgehensweise</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Grund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Rechnungen und Belege</td>
                <td className="border border-gray-300 px-4 py-3">Mittlere Kompression</td>
                <td className="border border-gray-300 px-4 py-3">Beträge, Daten und Namen bleiben meist klar lesbar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Unterschriebene Verträge</td>
                <td className="border border-gray-300 px-4 py-3">Mittlere Kompression plus Sichtkontrolle</td>
                <td className="border border-gray-300 px-4 py-3">Schützt Unterschriften und Kleingedrucktes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Bildlastige Berichte</td>
                <td className="border border-gray-300 px-4 py-3">Für Webfreigabe auch stärkere Kompression möglich</td>
                <td className="border border-gray-300 px-4 py-3">Hier entstehen oft die größten Einsparungen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Archivkopien</td>
                <td className="border border-gray-300 px-4 py-3">Leichte bis mittlere Kompression</td>
                <td className="border border-gray-300 px-4 py-3">Die Kopie sollte möglichst nah am Ursprung bleiben</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Formulare mit QR-Code oder Barcode</td>
                <td className="border border-gray-300 px-4 py-3">Zuerst leichte Kompression</td>
                <td className="border border-gray-300 px-4 py-3">Maschinenlesbare Bereiche sind empfindlich</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wenn Kompression allein nicht reicht</h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nur benötigte Seiten extrahieren</h3>
            <p>Wenn der Empfänger nur wenige Seiten braucht, senden Sie nicht die gesamte Akte. Ein kleineres Dokument ist fast immer besser.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Leerseiten und Fehler vorab bereinigen</h3>
            <p>Entfernen oder ordnen Sie unnötige Seiten, bevor Sie erneut komprimieren. Bei Bedarf helfen <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> und <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Große Pakete logisch aufteilen</h3>
            <p>Mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> trennen Sie Monatsordner, Kapitel oder Teilakten sauber voneinander.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige Fehler</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Sofort die stärkste Kompression auswählen</li>
          <li>Nur die erste Seite prüfen</li>
          <li>QR-Codes oder Barcodes nicht testen</li>
          <li>Leerseiten und Dubletten im Dokument lassen</li>
          <li>Ein zu großes PDF erzwingen, obwohl Aufteilen besser wäre</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kann ich ein gescanntes PDF online kostenlos komprimieren?</h3>
            <p className="text-gray-700 leading-relaxed">Ja. Mit PixelPDFs <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> können Sie ohne Installation direkt im Browser starten.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Wird die Schrift durch Kompression unscharf?</h3>
            <p className="text-gray-700 leading-relaxed">Das kann passieren, wenn Sie zu aggressiv komprimieren. Beginnen Sie daher besser mit einer mittleren Einstellung.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Was ist für E-Mail am besten?</h3>
            <p className="text-gray-700 leading-relaxed">Erst komprimieren, danach falls nötig aufteilen. Das erhält die Nutzbarkeit meist besser als extreme Kompression.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Warum sind gescannte PDFs größer als normale PDFs?</h3>
            <p className="text-gray-700 leading-relaxed">Weil die Seiten oft als Bilder gespeichert werden und Bilder deutlich mehr Speicher benötigen als reiner Text.</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fazit</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sie sollten ein gescanntes PDF nicht nur kleiner machen, sondern weiterhin brauchbar halten. Genau darum ist eine abgestufte Vorgehensweise sinnvoll:
          mit mittlerer Kompression beginnen, kritische Stellen prüfen und bei Bedarf aufteilen.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Wenn Sie sofort loslegen möchten, starten Sie mit <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> und ergänzen Sie den Workflow bei Bedarf durch <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> oder <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>.
        </p>
      </section>
    </article>
  );
}
