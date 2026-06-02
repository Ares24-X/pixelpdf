// Make PDF Smaller for Email - Deutsche Übersetzung
// Pfad: /src/app/blog/make-pdf-smaller-for-email/de/page.tsx
// Datum: 2026-06-02

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF für E-Mail-Anhang Verkleinern (2026)',
  description: 'Erfahren Sie, wie Sie PDF-Dateien für E-Mail-Anhänge mit 4 bewährten Methoden verkleinern. Reduzieren Sie die PDF-Größe für Gmail, Outlook, Yahoo und iCloud mit Schritt-für-Schritt-Anleitungen.',
  keywords: ['PDF verkleinern für E-Mail', 'PDF Größe reduzieren', 'PDF komprimieren für E-Mail', 'E-Mail Anhang Größenlimit', 'PDF zu groß für E-Mail'],
  openGraph: {
    title: 'PDF für E-Mail-Anhang Verkleinern (2026)',
    description: 'Erfahren Sie, wie Sie PDF-Dateien für E-Mail-Anhänge mit 4 bewährten Methoden verkleinern. Reduzieren Sie die PDF-Größe für Gmail, Outlook, Yahoo und iCloud.',
    type: 'article',
  },
};

export default function MakePdfSmallerForEmailDe() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>PDF für E-Mail verkleinern</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDF für E-Mail-Anhang Verkleinern (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2. Juni 2026</span>
        <span className="mx-2">•</span>
        <span>8 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>ca. 1.400 Wörter</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Sie haben ein wichtiges Dokument fertiggestellt, auf &quot;Anhängen&quot; geklickt und Ihr E-Mail-Anbieter lehnt es ab, weil die Datei zu groß ist. Das ist eine der häufigsten Frustrationen, mit denen Berufstätige jeden Tag konfrontiert werden. Ob Sie Gmail, Outlook, Yahoo oder iCloud verwenden, jeder E-Mail-Anbieter erzwingt Größenlimits für Anhänge — und PDFs mit Bildern, Scans oder Grafiken überschreiten diese regelmäßig. Die gute Nachricht ist, dass das Verkleinern von PDF-Dateien für E-Mail-Anhänge unkompliziert ist, sobald Sie die richtigen Methoden kennen. In diesem Leitfaden zeigen wir Ihnen vier bewährte Techniken, um Ihre PDFs schnell und zuverlässig zu verkleinern, damit Sie Ihre Dokumente ohne Verzögerung versenden können.
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Schnellantwort: PDF in 3 Schritten für E-Mail verkleinern</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Laden Sie Ihr PDF hoch</strong> auf das <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF-Komprimierungstool</Link> von PixelPDF — per Drag &amp; Drop oder per Klick auf &quot;Durchsuchen&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Wählen Sie eine Komprimierungsstufe</strong> — &quot;Mittel&quot; ist für die meisten E-Mail-Anhänge ideal und reduziert die Größe um 40-60%</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Laden Sie die komprimierte PDF herunter</strong> und hängen Sie sie an Ihre E-Mail an — prüfen Sie vor dem Senden, dass sie unter dem Limit Ihres Anbieters liegt</p>
          </div>
        </div>
      </section>

      {/* Email Attachment Size Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">E-Mail-Anhang-Größenlimits, die Sie kennen sollten</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bevor Sie mit dem Verkleinern beginnen, ist es hilfreich, die genauen Limits der einzelnen E-Mail-Anbieter zu kennen. Beachten Sie, dass die E-Mail-Kodierung die Dateigröße während der Übertragung um etwa 33% erhöht (Base64-Kodierung), sodass eine 19MB-Datei auf Ihrem Computer das 25MB-Limit beim Anhängen tatsächlich überschreiten kann.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">E-Mail-Anbieter</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Anhangslimit</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Sichere Zielgröße</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hinweise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18-20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Schlägt Google Drive für größere Dateien vor</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook / Hotmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14-15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Strengstes Limit der großen Anbieter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18-20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Gleiches Limit wie Gmail</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14-15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Gilt für @icloud.com-Adressen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Die Spalte &quot;Sichere Zielgröße&quot; berücksichtigt den Base64-Kodierungsaufwand. Wenn Sie Ihre PDF unter dieser Zielgröße halten, wird sie unabhängig vom Anbieter erfolgreich angehängt.
        </p>
      </section>

      {/* Method 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 1: PDF online komprimieren (Schnellste Methode)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Die Online-Komprimierung ist der schnellste Weg, um eine PDF für E-Mail zu verkleinern. Das <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF-Komprimierungstool</Link> von PixelPDF verarbeitet alles in Ihrem Browser — Ihre Datei wird nie auf einen Server hochgeladen, sodass vertrauliche Dokumente privat bleiben.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt-für-Schritt-Anleitung</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Öffnen Sie das PDF-Komprimierungstool</h4>
              <p className="text-gray-700">Navigieren Sie in einem beliebigen Browser zur PDF-Komprimierungsseite von PixelPDF. Keine Anmeldung oder Softwareinstallation erforderlich.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Laden Sie Ihr PDF hoch</h4>
              <p className="text-gray-700">Ziehen Sie Ihre Datei per Drag &amp; Drop in den Upload-Bereich oder klicken Sie auf &quot;Durchsuchen&quot;, um sie von Ihrem Computer auszuwählen. Das Tool unterstützt Dateien bis 50 MB.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Wählen Sie die Komprimierungsstufe</h4>
              <p className="text-gray-700">Wählen Sie &quot;Mittel&quot; für eine Balance zwischen Qualität und Größenreduzierung (typischerweise 40-60% kleiner). Wenn Ihre Datei deutlich über dem Limit liegt, kann &quot;Hoch&quot; sie um bis zu 80% reduzieren.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Laden Sie die komprimierte Datei herunter</h4>
              <p className="text-gray-700">Das Tool zeigt die Größen vor und nach der Komprimierung an. Bestätigen Sie, dass die neue Datei unter dem Limit Ihres E-Mail-Anbieters liegt, laden Sie sie herunter und hängen Sie sie an Ihre E-Mail an.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Vorher-Nachher-Vergleich</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dokumenttyp</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Originalgröße</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Komprimierte Größe</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Reduzierung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Kundenangebot mit Fotos (30 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Gescannte Krankenakten (80 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">52 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Marketingbroschüre (20 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">27 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Vertrag mit Unterschriften (15 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 2: Bildqualität innerhalb der PDF reduzieren</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wenn Ihre PDF hochauflösende Fotos oder Grafiken enthält, sind die Bilder wahrscheinlich der Hauptgrund für die große Dateigröße. Die meisten PDFs enthalten Bilder in Druckqualität (300 DPI), die für die Bildschirmanzeige oder E-Mail-Freigabe unnötig ist. Eine Reduzierung der Bildauflösung auf 150 DPI oder 72 DPI kann die Dateigröße drastisch verringern.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">So reduzieren Sie die Bildqualität</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>Verwenden Sie das PDF-Komprimierungstool</strong> mit &quot;Hoher&quot; Komprimierung — dies skaliert eingebettete Bilder automatisch auf bildschirmfreundliche Auflösungen herunter</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>Konvertieren Sie Bilder vorher</strong> — wenn Sie die PDF selbst erstellen, skalieren Sie Bilder vor dem Einfügen auf 1200px Breite oder weniger. Tools wie TinyPNG oder Squoosh können einzelne Bilder um 60-80% komprimieren</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700"><strong>Entfernen Sie unnötige Bilder</strong> — überprüfen Sie Ihre PDF und löschen Sie dekorative Bilder, doppelte Logos oder Ganzseitenhintergründe, die keinen Mehrwert bieten</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700"><strong>Speichern Sie erneut als PDF</strong> — nach der Optimierung der Bilder exportieren oder speichern Sie das Dokument erneut, um sicherzustellen, dass die reduzierten Bildgrößen in der endgültigen Datei berücksichtigt werden</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Diese Methode ist besonders effektiv für PDFs, die aus Designsoftware wie Adobe Illustrator oder Canva erstellt wurden, wo die Exporteinstellungen oft auf maximale Qualität voreingestellt sind. Bei gescannten Dokumenten übernimmt das PDF-Komprimierungstool die Bildherunterskalierung automatisch.
        </p>
      </section>

      {/* Method 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 3: Die PDF in kleinere Teile aufteilen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Manchmal ist eine einzelne PDF einfach zu groß, um ohne inakzeptablen Qualitätsverlust unter das E-Mail-Limit komprimiert zu werden. Das ist häufig bei Berichten mit über 200 Seiten, Vollfarbkatalogen oder Dokumenten mit Dutzenden hochauflösender Scans der Fall. In solchen Fällen ist das Aufteilen der PDF in kleinere, logisch organisierte Abschnitte der beste Ansatz.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">So teilen und senden Sie per E-Mail</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Öffnen Sie das <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF-Teilen-Tool</Link> von PixelPDF und laden Sie Ihr großes Dokument hoch</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Geben Sie Seitenbereiche für jeden Teil an — z. B. Seiten 1-50 als Teil 1, Seiten 51-100 als Teil 2 usw.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Komprimieren Sie jeden Teil bei Bedarf einzeln mit dem PDF-Komprimierungstool</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Senden Sie separate E-Mails mit klaren Betreffzeilen wie &quot;Quartalsbericht Q3 - Teil 1 von 3&quot;, damit der Empfänger die Reihenfolge kennt</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Diese Methode funktioniert gut für mehrkapitelige Dokumente, bei denen jeder Abschnitt in sich geschlossen ist. Sie gibt Empfängern auch die Flexibilität, nur die Teile herunterzuladen, die sie benötigen.
        </p>
      </section>

      {/* Method 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 4: PDF in ZIP-Datei umwandeln</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Das Zippen einer PDF kann je nach Inhalt eine bescheidene Größenreduzierung von typischerweise 10-30% bieten. Textlastige PDFs komprimieren gut, da die Textdaten repetitiv und komprimierbar sind. PDFs, die jedoch bereits intern komprimiert sind (wie die meisten modernen PDFs), profitieren kaum von der ZIP-Komprimierung.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Wann Sie ZIP-Komprimierung verwenden sollten</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Ihre PDF ist nur leicht über dem E-Mail-Limit (z. B. 22 MB bei einem 25-MB-Limit)</li>
          <li>Die PDF ist textlastig mit wenigen Bildern</li>
          <li>Sie müssen mehrere Dateien anhängen und diese bündeln möchten</li>
          <li>Der Empfänger bevorzugt den Erhalt eines einzelnen komprimierten Archivs</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">So zippen Sie eine PDF</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>Unter Windows:</strong> Klicken Sie mit der rechten Maustaste auf die PDF, wählen Sie &quot;Senden an&quot; und dann &quot;ZIP-komprimierter Ordner&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>Auf dem Mac:</strong> Klicken Sie mit der rechten Maustaste auf die PDF und wählen Sie &quot;[Dateiname] komprimieren&quot; im Kontextmenü</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Hängen Sie die resultierende .zip-Datei an Ihre E-Mail anstelle der ursprünglichen PDF an</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-700"><strong>Wichtig:</strong> Einige E-Mail-Anbieter und Unternehmensfirewalls blockieren .zip-Anhänge aus Sicherheitsgründen. Wenn Ihr Empfänger die ZIP-Datei nicht öffnen kann, verwenden Sie stattdessen Methode 1 (Online-Komprimierung).</p>
        </div>
      </section>

      {/* Email-Specific Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Tipps für den Versand von PDFs per E-Mail</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Prüfen Sie immer die kodierte Größe, nicht die Dateigröße</h4>
              <p className="text-gray-700">Die E-Mail-Kodierung erhöht die Dateigröße um etwa 33%. Eine 20-MB-PDF wird beim Anhängen ca. 26,6 MB groß. Halten Sie Ihre PDF unter der &quot;Sicheren Zielgröße&quot; in der obigen Tabelle.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Komprimieren Sie vor dem Anhängen, nicht danach</h4>
              <p className="text-gray-700">Manche versuchen, eine große Datei anzuhängen und den E-Mail-Client die Arbeit erledigen zu lassen. Das verschwendet Zeit und scheitert oft. Komprimieren Sie die PDF zuerst und hängen Sie dann die kleinere Version an.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Verwenden Sie aussagekräftige Dateinamen</h4>
              <p className="text-gray-700">Nennen Sie Ihre komprimierte Datei eindeutig (z. B. &quot;Q3-Report-ENDE-komprimiert.pdf&quot;), damit der Empfänger weiß, was er erhält und dass sie optimiert wurde.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Erwägen Sie Cloud-Links für sehr große Dateien</h4>
              <p className="text-gray-700">Wenn Ihre PDF nicht unter das Limit komprimiert werden kann, verwenden Sie Google Drive, Dropbox oder OneDrive, um einen Download-Link zu teilen, anstatt die Datei direkt anzuhängen.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Vorschau vor dem Senden</h4>
              <p className="text-gray-700">Öffnen Sie Ihre komprimierte PDF immer und blättern Sie durch sie, um zu überprüfen, dass der Text lesbar und die Bilder für ihren Zweck klar genug sind, bevor Sie sie per E-Mail anhängen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Wie viel kann ich die Größe einer PDF für E-Mail reduzieren?</summary>
            <p className="mt-3 text-gray-700">
              Die meisten PDFs können mit Online-Komprimierungstools um 40-80% reduziert werden. Textlastige Dokumente sehen typischerweise eine Reduzierung von 50-70%, während bildlastige PDFs mit hoher Komprimierung um 60-80% verkleinert werden können. Die genaue Reduzierung hängt vom ursprünglichen Inhalt und der gewählten Komprimierungsstufe ab.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Wird meine PDF durch Komprimierung unscharf oder unlesbar?</summary>
            <p className="mt-3 text-gray-700">
              Bei &quot;Mittlerer&quot; Komprimierung bleibt der Text perfekt scharf und die Bilder behalten eine gute Qualität für die Bildschirmanzeige. &quot;Hohe&quot; Komprimierung kann eine leichte Weichheit in Fotos einführen, aber der Text bleibt voll lesbar. Prüfen Sie die komprimierte Datei immer vor dem Senden.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Warum wird meine 19-MB-PDF von Gmail abgelehnt?</summary>
            <p className="mt-3 text-gray-700">
              Das 25-MB-Limit von Gmail gilt für die kodierte Größe, nicht für die Rohdateigröße. E-Mail-Protokolle verwenden Base64-Kodierung, die die Dateigröße um ca. 33% erhöht. Eine 19-MB-Datei wird beim Kodieren ca. 25,3 MB groß und überschreitet das Limit. Halten Sie Ihre PDF unter 18 MB, um auf der sicheren Seite zu sein.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich eine PDF auf dem Handy vor dem E-Mail-Versand komprimieren?</summary>
            <p className="mt-3 text-gray-700">
              Ja. Das PDF-Komprimierungstool von PixelPDF funktioniert auf jedem Gerät mit einem Browser. Öffnen Sie Safari oder Chrome auf Ihrem Handy, laden Sie die PDF hoch, komprimieren Sie sie, laden Sie die kleinere Datei herunter und hängen Sie sie aus Ihrer E-Mail-App an. Der gesamte Vorgang dauert weniger als eine Minute.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Ist es sicher, PDFs mit vertraulichen Informationen zu komprimieren?</summary>
            <p className="mt-3 text-gray-700">
              PixelPDF verarbeitet alle Komprimierungen in Ihrem Browser mittels Client-seitiger Technologie. Ihre Datei wird nie auf einen Server hochgeladen. Das macht es sicher für Verträge, Finanzberichte, Krankenakten und alle anderen vertraulichen Dokumente.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit, Ihre PDF für E-Mail zu verkleinern?</h2>
        <p className="mb-6 text-blue-100">Komprimieren Sie Ihre PDF in Sekunden — kostenlos, privat und ohne Registrierung</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDF kostenlos komprimieren
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verwandte Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="font-medium">PDF komprimieren</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">PDF teilen</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF zusammenfügen</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF in JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
