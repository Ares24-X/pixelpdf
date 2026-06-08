import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF in PDF/A umwandeln für die Archivierung (Kostenlose Online-Anleitung)',
  description: 'Erfahren Sie, wie Sie eine normale PDF in das PDF/A-Format für die Langzeitarchivierung umwandeln. Mit Praxisanleitung, Versionen und typischen Fehlern.',
  keywords: ['PDF in PDF/A umwandeln online', 'PDF/A Konverter kostenlos', 'PDF Archivierung', 'PDF/A ISO Standard', 'Langzeitarchiv PDF'],
  openGraph: {
    title: 'PDF in PDF/A umwandeln für die Archivierung (Kostenlose Online-Anleitung)',
    description: 'Erfahren Sie, wie Sie eine normale PDF in das PDF/A-Format für die Langzeitarchivierung umwandeln.',
    type: 'article',
  },
};

export default function PdfToPdfAConverterDePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>PDF in PDF/A umwandeln</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDF in PDF/A umwandeln für die Archivierung (Kostenlose Online-Anleitung)
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>8. Juni 2026</span>
        <span className="mx-2">•</span>
        <span>8 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>ca. 1.500 Wörter</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Wenn Sie Verträge, Rechnungen, Steuerunterlagen, Forschungsberichte oder Compliance-Dokumente viele Jahre aufbewahren müssen, reicht eine normale PDF oft nicht aus. Eine Standard-PDF kann externe Schriften, JavaScript, Verschlüsselung oder andere Elemente enthalten, die in Zukunft zu Darstellungsproblemen führen. Genau dafür gibt es PDF/A. Dieses Format ist für die Langzeitarchivierung gedacht und soll sicherstellen, dass ein Dokument auch in vielen Jahren noch zuverlässig lesbar bleibt.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          In diesem Leitfaden erfahren Sie, wie Sie eine PDF online in PDF/A umwandeln, was sich dabei technisch ändert, welche PDF/A-Version sinnvoll ist und welche Vorarbeiten Sie besser vorher erledigen sollten. Gerade in Unternehmen, Behörden, Kanzleien, Schulen und im Gesundheitswesen ist dieses Wissen sehr nützlich.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Kurze Antwort: So wandeln Sie eine PDF in PDF/A um</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>Bereiten Sie die Originaldatei vor</strong> und korrigieren Sie Reihenfolge, Drehung oder unnötige Dateigröße mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF teilen</Link>, <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">PDF drehen</Link> oder <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF komprimieren</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>Führen Sie die PDF/A-Konvertierung aus</strong>, damit Schriften eingebettet und nicht archivierungstaugliche Funktionen entfernt oder angepasst werden.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>Prüfen Sie das Ergebnis</strong> und bewahren Sie die Archivkopie getrennt von Ihrer bearbeitbaren Arbeitsversion auf.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Was PDF/A eigentlich ist</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDF/A ist eine ISO-Norm für archivierungsfähige PDF-Dokumente. Das Ziel ist nicht mehr Komfort oder mehr Interaktivität. Das Ziel ist Stabilität. Eine PDF/A-Datei soll auch nach vielen Jahren noch so angezeigt werden können, wie sie ursprünglich gedacht war.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Deshalb verlangt PDF/A unter anderem eingebettete Schriften. Gleichzeitig werden problematische Funktionen wie JavaScript, Audio, Video oder bestimmte Verschlüsselungsarten eingeschränkt oder ausgeschlossen. Für die tägliche Bearbeitung ist eine normale PDF oft flexibler. Für die Aufbewahrung ist PDF/A jedoch meist die bessere Wahl.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">PDF/A ist sinnvoll für:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Verträge, Nachweise und juristische Unterlagen</li>
            <li>Rechnungen, Steuerdokumente und Prüfungsunterlagen</li>
            <li>Thesen, Berichte und wissenschaftliche Ergebnisse</li>
            <li>Medizinische, HR- und Compliance-Dokumente</li>
            <li>Unterlagen mit langer Aufbewahrungspflicht</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF im Vergleich zu PDF/A</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eine normale PDF einfach in PDF/A umzubenennen, funktioniert natürlich nicht. Bei der Umwandlung muss das Dokument technisch überprüft und an die Archivregeln angepasst werden. Dabei werden häufig fehlende Schriften eingebettet, Farben vereinheitlicht und nicht erlaubte Funktionen entfernt.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Merkmal</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Normale PDF</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PDF/A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Schriften</td>
                <td className="border border-gray-300 px-4 py-3">Können vom System abhängen</td>
                <td className="border border-gray-300 px-4 py-3">Sollen eingebettet sein</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">JavaScript</td>
                <td className="border border-gray-300 px-4 py-3">Kann vorhanden sein</td>
                <td className="border border-gray-300 px-4 py-3">Für Archive nicht zulässig</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Verschlüsselung</td>
                <td className="border border-gray-300 px-4 py-3">Oft genutzt</td>
                <td className="border border-gray-300 px-4 py-3">Meist ungeeignet</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Externe Abhängigkeiten</td>
                <td className="border border-gray-300 px-4 py-3">Möglich</td>
                <td className="border border-gray-300 px-4 py-3">Soll vermieden werden</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Langzeitarchivierung</td>
                <td className="border border-gray-300 px-4 py-3">Nicht garantiert</td>
                <td className="border border-gray-300 px-4 py-3">Dafür gedacht</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Deshalb klappt die Umwandlung bei einfachen Dateien oft sofort, bei komplexen PDFs mit Formularen, Scripts oder problematischen Schriften jedoch nicht immer ohne Nacharbeit.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schritt für Schritt: PDF online in PDF/A umwandeln</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Datei vorab prüfen</h3>
              <p className="text-gray-700 leading-relaxed">Kontrollieren Sie, ob die PDF schon Fehler hat: falsche Seitenreihenfolge, verdrehte Seiten oder beschädigte Inhalte. Wenn die Datei bereits seltsam reagiert, hilft oft zuerst <Link href="/blog/pdf-not-opening-fix" className="text-blue-600 hover:underline font-medium">unsere Anleitung zu nicht öffnenden PDFs</Link>.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Vermeidbare Probleme zuerst beseitigen</h3>
              <p className="text-gray-700 leading-relaxed">Große Bilddateien können Sie mit <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF komprimieren</Link> verkleinern. Wenn nur bestimmte Seiten archiviert werden sollen, trennen Sie sie mit <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF teilen</Link>. Bildbasierte Dokumente lassen sich bei Bedarf mit <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Bild zu PDF</Link> sauber neu aufbauen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">PDF/A-Konvertierung durchführen</h3>
              <p className="text-gray-700 leading-relaxed">Verwenden Sie ein Tool, das PDF/A-Ausgabe ausdrücklich unterstützt. Dabei werden Schriften eingebettet und nicht normgerechte Funktionen entfernt oder angepasst. Wenn Sie freie Wahl haben, ist PDF/A-2 häufig ein guter Standard für moderne Archivierungsprozesse.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Ergebnis kontrollieren</h3>
              <p className="text-gray-700 leading-relaxed">Prüfen Sie Seitenfolge, Textdarstellung, Lesezeichen und Tabellen. Für Compliance-Archive sollte nicht nur der Eindruck stimmen, sondern möglichst auch eine Validierung erfolgen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Archivkopie getrennt speichern</h3>
              <p className="text-gray-700 leading-relaxed">Bewahren Sie die PDF/A-Datei als unveränderliche Archivversion auf und behalten Sie eine bearbeitbare Ausgangsdatei separat, falls später Änderungen nötig werden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welche PDF/A-Version ist sinnvoll?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Viele Nutzer verlieren hier unnötig Zeit. In der Praxis ist die Auswahl meist einfacher: Entscheidend ist, ob eine Behörde, ein Kunde oder ein internes Archivsystem eine bestimmte Version verlangt.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-1</h3>
            <p className="text-gray-700">Eine strengere ältere Basis. Sinnvoll, wenn sie ausdrücklich gefordert wird.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-2</h3>
            <p className="text-gray-700">Für viele aktuelle Workflows die beste Balance aus Kompatibilität und Archivstabilität.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-3</h3>
            <p className="text-gray-700">Erlaubt eingebettete Anhänge. Das ist in Spezialfällen praktisch, erhöht aber auch die Komplexität.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          Wenn keine klare Vorgabe existiert, ist PDF/A-2 oft die vernünftigste Wahl. Wenn eine Vorgabe existiert, folgen Sie dieser statt zu raten.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige Probleme bei der Umwandlung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Fehlende Schriften</h3>
            <p className="text-gray-700 text-sm">Wenn die Ursprungsdatei schlecht exportiert wurde, kann die Konvertierung daran scheitern oder das Layout verändern.</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Verschlüsselte PDFs</h3>
            <p className="text-gray-700 text-sm">Passwortgeschützte Dateien müssen oft zuerst berechtigt entschlüsselt werden, bevor sie sauber archiviert werden können.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Zu große Scans</h3>
            <p className="text-gray-700 text-sm">Sehr große Scan-PDFs lassen sich leichter archivieren, wenn Sie sie vorher sinnvoll komprimieren.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Interaktive Inhalte verschwinden</h3>
            <p className="text-gray-700 text-sm">Das ist normal. PDF/A priorisiert Stabilität, nicht Interaktivität.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Wenn Ihr Dokument aus gescannten Seiten besteht, lesen Sie zusätzlich <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">unseren OCR-Leitfaden für gescannte PDFs</Link>. OCR und PDF/A sind unterschiedliche Aufgaben, tauchen aber oft in derselben Archivierungskette auf.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Ist PDF/A dasselbe wie eine normale PDF?</summary>
            <p className="mt-3 text-gray-700">Nein. PDF/A ist eine archivierungsorientierte Form von PDF mit zusätzlichen Regeln für langfristige Lesbarkeit.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich eine PDF/A-Datei später noch bearbeiten?</summary>
            <p className="mt-3 text-gray-700">Teilweise ja, aber die Archivkopie sollte nicht Ihre Arbeitsdatei sein. Bewahren Sie eine bearbeitbare Quelle getrennt auf.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Wird die Datei durch PDF/A kleiner?</summary>
            <p className="mt-3 text-gray-700">Nicht unbedingt. Durch eingebettete Schriften und zusätzliche Anforderungen kann die Datei auch größer werden.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Brauche ich PDF/A für jede PDF-Datei?</summary>
            <p className="mt-3 text-gray-700">Nein. Nutzen Sie PDF/A gezielt für Langzeitaufbewahrung, Compliance und offizielle Archive. Für Alltag und Zusammenarbeit reicht oft eine normale PDF.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Möchten Sie Ihre PDF vor der Archivierung bereinigen?</h2>
        <p className="mb-6 text-blue-100">Komprimieren, teilen, drehen oder bauen Sie die Datei mit PixelPDF-Werkzeugen neu auf, bevor Sie die endgültige Archivversion erstellen.</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Mit PDF komprimieren starten
        </Link>
      </section>
    </article>
  );
}
