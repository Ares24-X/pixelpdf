// Compress PDF for Gmail - Deutsch Version
// Pfad: /src/app/blog/compress-pdf-for-gmail/de/page.tsx
// Datum: 2026-05-29
// Ziel-Keywords: PDF für Gmail auf 25MB komprimieren

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF für Gmail auf 25MB komprimieren: Schritt-für-Schritt Anleitung',
  description: 'Lernen Sie, wie Sie PDFs für Gmail-Anhänge auf 25MB komprimieren. Schritt-für-Schritt Anleitung zur Reduzierung der PDF-Dateigröße und Behebung von "Anhang zu groß" Fehlern.',
  keywords: ['PDF für Gmail auf 25MB komprimieren', 'PDF zu groß für Gmail', 'PDF-Größe für E-Mail reduzieren', 'Gmail Anhangslimit', 'PDF online komprimieren'],
  openGraph: {
    title: 'PDF für Gmail auf 25MB komprimieren: Schritt-für-Schritt Anleitung',
    description: 'Lernen Sie, wie Sie PDFs für Gmail-Anhänge auf 25MB komprimieren. Schritt-für-Schritt Anleitung zur Reduzierung der PDF-Dateigröße und Behebung von "Anhang zu groß" Fehlern.',
    type: 'article',
  },
};

export default function CompressPdfForGmail() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>PDF für Gmail komprimieren</span>
      </nav>

      {/* H1 Titel */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDF für Gmail auf 25MB komprimieren: Schritt-für-Schritt Anleitung
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>29. Mai 2026</span>
        <span className="mx-2">•</span>
        <span>7 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>~1.350 Wörter</span>
      </div>

      {/* Einleitung */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Sie haben die perfekte E-Mail verfasst, Ihr wichtiges PDF-Dokument angehängt und auf "Senden" geklickt—nur um von dieser gefürchteten Fehlermeldung begrüßt zu werden: "Die Datei, die Sie senden möchten, überschreitet das 25MB-Anhangslimit." Wenn Sie jemals diesen frustrierenden Szenario erlebt haben, sind Sie nicht allein. Gmails 25MB-Anhangslimit ist eines der häufigsten Hindernisse, auf die Fachleute und Studenten stoßen, wenn sie Dokumente teilen. Egal, ob Sie ein hochauflösendes Portfolio, einen gescannten Vertrag oder einen detaillierten Bericht senden—zu lernen, wie man PDFs für Gmail auf 25MB komprimiert, ist eine wesentliche Fähigkeit, die Ihnen Zeit und Kopfschmerzen erspart.
        </p>
      </section>

      {/* Quick Answer Box - Featured Snippet Target */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Schnelle Antwort: PDF für Gmail in 3 Schritten komprimieren</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Laden Sie Ihr PDF hoch</strong> zu PixelPDFs <Link href="/de/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF-Komprimierungs-Tool</Link>—per Drag & Drop oder zum Durchsuchen klicken</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Komprimierungsstufe wählen</strong>—wählen Sie "Mittel" für E-Mail-Anhänge (beste Balance aus Größe und Qualität)</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Herunterladen und anhängen</strong>—speichern Sie die komprimierte Datei (unter 25MB) und hängen Sie sie an Ihre Gmail-Nachricht an</p>
          </div>
        </div>
      </section>

      {/* Gmail-Anhangslimits verstehen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gmails 25MB-Anhangslimit verstehen</h2>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Was ist das 25MB-Limit?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gmail erzwingt ein striktes 25MB-Limit für E-Mail-Anhänge. Dieses Limit gilt für die Gesamtgröße aller Anhänge in einer einzelnen E-Mail—nicht pro Datei. Wenn Sie beispielsweise drei PDFs mit jeweils 10MB anhängen, haben Sie das Limit bereits überschritten. Es ist wichtig zu beachten, dass dieses 25MB-Limit die kodierte Größe der Dateien einschließt, die aufgrund der Base64-Kodierung, die bei der E-Mail-Übertragung verwendet wird, typischerweise etwa 33% größer ist als die ursprüngliche Dateigröße. Das bedeutet, dass eine Datei, die auf Ihrem Computer 19MB groß erscheint, beim Anhängen möglicherweise Gmails Limit überschreitet.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Was zählt zum Limit?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Alle PDF-Anhänge kombiniert</li>
          <li>Bilddateien (JPG, PNG, TIFF)</li>
          <li>Microsoft Office-Dokumente (Word, Excel, PowerPoint)</li>
          <li>Komprimierte Archive (ZIP, RAR-Dateien)</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Die Fehlermeldung, die Sie sehen werden</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-gray-700 italic">"Die Datei, die Sie senden möchten, überschreitet das 25MB-Anhangslimit. Versuchen Sie, Google Drive zu verwenden, um größere Dateien zu senden."</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Wenn Sie auf diese Nachricht stoßen, haben Sie drei Optionen: Das PDF komprimieren, um seine Größe zu reduzieren, das Dokument in kleinere Teile aufzuteilen oder Google Drive als alternative Freigabemethode zu verwenden. In den folgenden Abschnitten werden wir jeden Ansatz im Detail untersuchen.
        </p>
      </section>

      {/* Methode 1 - PDF online komprimieren */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 1: PDF online komprimieren (Empfohlen)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Der schnellste und zuverlässigste Weg, Ihr PDF unter Gmails 25MB-Limit zu bringen, ist die Verwendung eines Online-PDF-Komprimierungstools. PixelPDFs <Link href="/de/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF-Komprimierung</Link>-Tool wurde speziell für diesen Zweck entwickelt und bietet clientseitige Verarbeitung, die Ihre Dokumente privat und sicher hält.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt-für-Schritt Komprimierungsprozess</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Zum PDF-Komprimierungs-Tool navigieren</h4>
              <p className="text-gray-700">Öffnen Sie PixelPDFs PDF-Komprimierungsseite. Das Tool lädt direkt in Ihrem Browser—keine Softwareinstallation oder Kontoregistrierung erforderlich.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Ihre PDF-Datei hochladen</h4>
              <p className="text-gray-700">Ziehen Sie Ihr PDF per Drag & Drop auf den Upload-Bereich oder klicken Sie zum Durchsuchen Ihres Geräts. Das Tool akzeptiert Dateien bis zu 50MB, was es selbst für große Dokumente geeignet macht, die eine erhebliche Komprimierung benötigen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Ihre Komprimierungsstufe wählen</h4>
              <p className="text-gray-700">Wählen Sie die entsprechende Komprimierungseinstellung. Für Gmail-Anhänge reduziert "Mittlere" Komprimierung typischerweise die Dateigröße um 40-60% bei gleichzeitig hervorragender Lesbarkeit. Wenn Ihre Datei deutlich über 25MB liegt, kann "Hohe" Komprimierung bis zu 80% Größenreduzierung erreichen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Herunterladen und überprüfen</h4>
              <p className="text-gray-700">Klicken Sie auf "Herunterladen", um Ihr komprimiertes PDF zu speichern. Das Tool zeigt Dateigrößen vor und nach der Komprimierung an, sodass Sie bestätigen können, dass die Datei unter 25MB liegt, bevor Sie sie an Ihre Gmail-Nachricht anhängen.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Vor- und Nach-Komprimierung Vergleich</h3>
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
                <td className="border border-gray-300 px-4 py-3">Hochaufgelöster gescannter Vertrag (50 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">42 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">12 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Design-Portfolio mit Bildern</td>
                <td className="border border-gray-300 px-4 py-3 text-center">35 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">9 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">74%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Wissenschaftliche Forschungsarbeit</td>
                <td className="border border-gray-300 px-4 py-3 text-center">28 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Steuerunterlagen (gescannte Belege)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">31 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">7 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">77%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Methode 2 - Großes PDF aufteilen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 2: Großes PDF in kleinere Teile aufteilen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Manchmal überschreitet Ihr PDF auch nach der Komprimierung immer noch Gmails 25MB-Limit. Dies geschieht häufig bei extrem großen Dokumenten wie 200-seitigen technischen Handbüchern, hochauflösenden Fotoalben oder detaillierten architektonischen Zeichnungen. In diesen Fällen ist das Aufteilen des PDFs in mehrere kleinere Dateien die praktischste Lösung.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Wann aufteilen statt komprimieren</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Dokumente mit Hunderten von hochauflösenden Bildern, die nicht weiter komprimiert werden können, ohne Qualitätsverlust</li>
          <li>Mehrkapitel-Berichte, bei denen jeder Abschnitt für sich allein stehen kann</li>
          <li>Dokumente, die mit verschiedenen Empfängern geteilt werden müssen (nur relevante Abschnitte senden)</li>
          <li>Dateien, die auch nach maximaler Komprimierung über 25MB bleiben</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Wie man aufteilt und mehrere E-Mails sendet</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Verwenden Sie PixelPDFs <Link href="/de/split-pdf" className="text-blue-600 hover:underline font-medium">PDF-Split</Link>-Tool, um Ihr Dokument in logische Abschnitte zu unterteilen (z.B. Teil 1, Teil 2)</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Komprimieren Sie jede aufgeteilte Datei bei Bedarf, um sicherzustellen, dass alle Teile unter 25MB liegen</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Senden Sie mehrere E-Mails mit klaren Betreffzeilen: "Projektbericht - Teil 1 von 3"</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Fügen Sie in der ersten E-Mail eine Notiz hinzu, die erklärt, dass weitere Teile folgen werden</p>
          </div>
        </div>
      </section>

      {/* Methode 3 - Google Drive verwenden */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 3: Stattdessen Google Drive verwenden</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wenn Komprimierung und Aufteilung keine gangbaren Optionen sind, bietet die Google Drive-Integration eine nahtlose Alternative. Gmail schlägt automatisch die Verwendung von Google Drive vor, wenn Sie versuchen, eine Datei über 25MB anzuhängen, aber Sie können diese Methode auch proaktiv wählen.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Vor- und Nachteile der Google Drive-Freigabe</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Vorteile</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Keine Dateigrößenlimits (bis zu Ihrer Drive-Speicherkapazität)</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Originalqualität erhalten—keine Komprimierung erforderlich</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Empfänger können vor dem Herunterladen eine Vorschau anzeigen</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Einfache Dateiaktualisierung ohne erneutes Senden</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Zugriffsberechtigungen können kontrolliert werden</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Nachteile</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-red-600">✗</span> Empfänger benötigen Internetzugang zum Herunterladen</li>
              <li className="flex gap-2"><span className="text-red-600">✗</span> Link kann ablaufen, wenn Freigabeeinstellungen geändert werden</li>
              <li className="flex gap-2"><span className="text-red-600">✗</span> Einige Organisationen blockieren externe Drive-Links</li>
              <li className="flex gap-2"><span className="text-red-600">✗</span> Erfordert ein Google-Konto zum Hochladen</li>
              <li className="flex gap-2"><span className="text-red-600">✗</span> Nicht ideal für vertrauliche Dokumente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Häufige Probleme & Lösungen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige Probleme & Lösungen (FAQ)</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Warum ist mein PDF nach der Komprimierung immer noch zu groß?</summary>
            <p className="mt-3 text-gray-700">
              Wenn Ihr PDF nach der Komprimierung immer noch über 25MB liegt, enthält es wahrscheinlich eine große Anzahl von hochauflösenden Bildern oder gescannten Seiten, die nicht weiter komprimiert werden können, ohne erheblichen Qualitätsverlust. Versuchen Sie diese Lösungen: (1) Verwenden Sie die "Hohe" Komprimierungseinstellung für maximale Größenreduzierung, (2) Teilen Sie das PDF mit unserem <Link href="/de/split-pdf" className="text-blue-600 hover:underline">PDF-Split-Tool</Link> in mehrere kleinere Dateien auf, oder (3) Verwenden Sie Google Drive, um die Datei direkt zu teilen, anstatt sie anzuhängen.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Reduziert Komprimierung die PDF-Qualität?</summary>
            <p className="mt-3 text-gray-700">
              PDF-Komprimierung zielt hauptsächlich auf Bilder und redundante Daten innerhalb der Datei ab. Die Textqualität bleibt im Allgemeinen unberührt. Bei "Mittlerer" Komprimierung werden die meisten Benutzer keinen Unterschied in der Bildqualität bemerken. "Hohe" Komprimierung kann in Fotos leichte sichtbare Komprimierungsartefakte verursachen, aber Text bleibt perfekt lesbar. Wir empfehlen, Ihr komprimiertes PDF vor dem Senden in einer Vorschau anzuzeigen, um sicherzustellen, dass es Ihren Qualitätsstandards entspricht.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich PDFs auf dem Handy für Gmail komprimieren?</summary>
            <p className="mt-3 text-gray-700">
              Ja, PixelPDFs PDF-Komprimierungs-Tool ist vollständig responsiv und funktioniert auf Smartphones und Tablets. Öffnen Sie einfach Ihren mobilen Browser, navigieren Sie zum Tool und laden Sie Ihr PDF direkt von Ihrem Gerät hoch. Der Komprimierungsprozess funktioniert genau wie auf dem Desktop, und Sie können dann die komprimierte Datei an Ihre Gmail-App anhängen.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Ist es sicher, PDFs online zu komprimieren?</summary>
            <p className="mt-3 text-gray-700">
              Mit PixelPDF absolut. Unser Komprimierungs-Tool verarbeitet Dateien vollständig in Ihrem Browser mit clientseitiger Technologie. Ihr PDF verlässt nie Ihr Gerät oder wird auf einen Server hochgeladen. Das bedeutet, dass Ihre sensiblen Dokumente—egal ob Verträge, Finanzunterlagen oder persönliche Informationen—während des gesamten Prozesses vollständig privat und sicher bleiben.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Was ist, wenn ich mehrere PDFs senden muss?</summary>
            <p className="mt-3 text-gray-700">
              Gmails 25MB-Limit gilt für die Gesamtgröße aller Anhänge kombiniert. Wenn Sie mehrere PDFs haben, komprimieren Sie jedes einzeln zuerst und überprüfen Sie dann die Gesamtgröße. Wenn die kombinierte Größe immer noch über 25MB liegt, erwägen Sie, unser <Link href="/de/merge-pdf" className="text-blue-600 hover:underline">PDF-Merge-Tool</Link> zu verwenden, um sie vor der Komprimierung zu einer Datei zu kombinieren, oder senden Sie sie über mehrere E-Mails.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit, Ihr PDF für Gmail zu komprimieren?</h2>
        <p className="mb-6 text-blue-100">Reduzieren Sie Ihr PDF in Sekunden auf unter 25MB—kostenlos, sicher und ohne Registrierung</p>
        <Link
          href="/de/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDF kostenlos komprimieren
        </Link>
      </section>

      {/* Verwandte Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verwandte Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/de/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">PDF teilen</div>
          </Link>
          <Link href="/de/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF zusammenführen</div>
          </Link>
          <Link href="/de/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF zu JPG</div>
          </Link>
          <Link href="/de/image-to-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="font-medium">Bild zu PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
