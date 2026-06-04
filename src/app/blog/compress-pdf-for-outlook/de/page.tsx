// Compress PDF for Outlook - Langtext (1200-1500 Wörter) - Deutsche Übersetzung
// Pfad: /src/app/blog/compress-pdf-for-outlook/de/page.tsx
// Datum: 2026-06-04

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF für Outlook 20MB Limit Komprimieren: Schritt-für-Schritt',
  description: 'Erfahren Sie, wie Sie PDF für das Outlook 20MB-Limit komprimieren. Schritt-für-Schritt-Anleitung zum Reduzieren der PDF-Dateigröße, Aufteilen großer Dokumente und Umgehen der Outlook-Anhangsbeschränkungen.',
  keywords: ['PDF für Outlook 20MB Limit komprimieren', 'PDF zu groß für Outlook', 'PDF-Größe für Outlook-E-Mail reduzieren', 'Outlook Anhangslimit', 'PDF online komprimieren'],
  openGraph: {
    title: 'PDF für Outlook 20MB Limit Komprimieren: Schritt-für-Schritt',
    description: 'Erfahren Sie, wie Sie PDF für das Outlook 20MB-Limit komprimieren. Schritt-für-Schritt-Anleitung zum Reduzieren der PDF-Dateigröße, Aufteilen großer Dokumente und Umgehen der Outlook-Anhangsbeschränkungen.',
    type: 'article',
  },
};

export default function CompressPdfForOutlook() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>PDF für Outlook komprimieren</span>
      </nav>

      {/* H1-Titel */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        PDF für Outlook 20MB Limit Komprimieren: Schritt-für-Schritt
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>4. Juni 2026</span>
        <span className="mx-2">&bull;</span>
        <span>8 Min. Lesezeit</span>
        <span className="mx-2">&bull;</span>
        <span>ca. 1.350 Wörter</span>
      </div>

      {/* Einleitung */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Sie haben einen detaillierten Quartalsbericht fertiggestellt, als PDF gespeichert und an Ihre Outlook-E-Mail angehängt. Sie klicken auf &quot;Senden&quot;, und Sekunden später wirft Outlook einen Fehler aus: &quot;Die Dateigröße überschreitet das zulässige Limit.&quot; Wenn das bekannt vorkommt, kennen Sie eine der häufigsten Frustrationen von Outlook-Nutzern. Microsoft Outlook erzwingt ein striktes 20MB-Anhangslimit für die meisten Konten, das sogar strenger ist als GMAILs 25MB-Grenze. Die gute Nachricht ist, dass das Komprimieren Ihrer PDF eine schnelle und zuverlässige Lösung ist. In dieser Anleitung erfahren Sie genau, wie Sie PDF für das Outlook 20MB-Limit mit drei bewährten Methoden komprimieren können, plus praktische Tipps, um dieses Problem in Zukunft zu vermeiden.
        </p>
      </section>

      {/* Schnellantwort-Box - Featured Snippet Target */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Schnellantwort: PDF für Outlook in 3 Schritten komprimieren</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Laden Sie Ihr PDF hoch</strong> mit PixelPDFs <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF-Komprimierungstool</Link>—ziehen Sie es per Drag &amp; Drop oder klicken Sie zum Durchsuchen</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Wählen Sie &quot;Mittel&quot;-Komprimierung</strong> für das beste Gleichgewicht zwischen Größenreduzierung und Qualitätserhaltung</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Laden Sie die komprimierte PDF herunter</strong> und hängen Sie sie an Ihre Outlook-E-Mail an—überprüfen Sie, dass sie unter 20MB liegt, bevor Sie senden</p>
          </div>
        </div>
      </section>

      {/* Outlook-Anhangslimits verstehen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Outlook-Anhangslimits verstehen</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Wie groß dürfen Outlook-Anhänge sein?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Das Anhangslimit von Outlook variiert je nach E-Mail-Anbieter und Abonnementstufe. Die meisten Standard-Outlook.com- und Microsoft 365-Personalkonten sind auf 20MB pro E-Mail begrenzt. Einige Office 365 Enterprise-Pläne erlauben bis zu 25MB, und Exchange Online-Konten, die von IT-Administratoren verwaltet werden, können benutzerdefinierte Limits von bis zu 35MB oder 150MB haben. Für die überwiegende Mehrheit der Nutzer ist jedoch die 20MB-Grenze das strikte Limit, innerhalb dessen Sie arbeiten müssen.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Vergleich der Anhangslimits von E-Mail-Anbietern</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">E-Mail-Anbieter</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Anhangslimit</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Hinweise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook.com</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Standard-Kontingent</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Microsoft 365 Privat</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Einige Tarife erlauben 25 MB</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Google Workspace gleiches Limit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Anhänge über Yahoo-App</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Gleich wie Outlook-Limit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Was zählt zum 20MB-Limit?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hier ist ein wichtiges Detail, das viele Outlook-Nutzer überrascht: Das 20MB-Limit gilt für die <strong>codierte</strong> Größe Ihrer Anhänge, nicht für die tatsächliche Dateigröße. E-Mail-Protokolle verwenden Base64-Codierung, um Binärdateien als Text zu übertragen, was die Größe um etwa 33% erhöht. Das bedeutet, dass eine PDF, die in Ihrem Datei-Explorer als 15MB angezeigt wird, tatsächlich etwa 20MB des Outlook-Anhangskontingents verbraucht. Praktisch sollten Sie darauf abzielen, Ihre PDF-Dateien bei oder unter <strong>15MB</strong> zu halten, um sicher innerhalb des 20MB-Limits von Outlook zu bleiben.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
          <p className="text-gray-700"><strong>Profi-Tipp:</strong> Komprimieren Sie Ihre PDF immer auf 15MB oder weniger, bevor Sie sie an Outlook anhängen. Dadurch wird der ca. 33% Base64-Codierungs-Overhead berücksichtigt und sichergestellt, dass Ihre E-Mail ohne Fehler versendet wird.</p>
        </div>
      </section>

      {/* Methode 1 - PDF online komprimieren */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 1: PDF online komprimieren (Empfohlen)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Der schnellste Weg, Ihre PDF unter das 20MB-Limit von Outlook zu bringen, ist die Verwendung eines Online-Komprimierungstools. PixelPDFs <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">PDF-Komprimierungstool</Link> verarbeitet alles direkt in Ihrem Browser, sodass Ihre Dateien Ihr Gerät nie verlassen. Keine Softwareinstallation, keine Kontoerstellung, keine Wartezeit.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Schritt-für-Schritt-Anleitung</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">PDF-Komprimierungstool öffnen</h4>
              <p className="text-gray-700">Navigieren Sie zur PDF-Komprimierungsseite von PixelPDF in einem beliebigen modernen Browser. Das Tool lädt sofort und ist sofort einsatzbereit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">PDF-Datei hochladen</h4>
              <p className="text-gray-700">Ziehen Sie Ihre PDF per Drag &amp; Drop in den Upload-Bereich oder klicken Sie auf &quot;Durchsuchen&quot;, um sie von Ihrem Computer auszuwählen. Das Tool unterstützt Dateien bis zu 50MB, was die überwiegende Mehrheit der zu großen Anhänge abdeckt.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Komprimierungsstufe wählen</h4>
              <p className="text-gray-700">Wählen Sie für Outlook-Anhänge &quot;Mittel&quot;-Komprimierung. Dies erreicht typischerweise eine 40-60%ige Größenreduzierung, während Text scharf und Bilder klar bleiben. Wenn Ihre PDF deutlich über 20MB liegt, wählen Sie &quot;Hoch&quot;-Komprimierung für bis zu 80% Reduzierung.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Ergebnis herunterladen und überprüfen</h4>
              <p className="text-gray-700">Klicken Sie auf &quot;Herunterladen&quot;, um die komprimierte PDF zu speichern. Das Tool zeigt die ursprüngliche und die komprimierte Dateigröße nebeneinander an, sodass Sie bestätigen können, dass die Datei sicher unter 15MB liegt, bevor Sie sie an Outlook anhängen.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Vorher-Nachher-Größenvergleich</h3>
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
                <td className="border border-gray-300 px-4 py-3">Kundenangebot mit Diagrammen (30 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Gescanntes Mitarbeiterhandbuch (80 Seiten)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">45 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">69%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Marketing-Präsentation mit Fotos</td>
                <td className="border border-gray-300 px-4 py-3 text-center">29 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">72%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Vertragsdokument mit Unterschriften</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Methode 2 - PDF aufteilen */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 2: PDF in kleinere Teile aufteilen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Komprimierung funktioniert für die meisten Dokumente, aber gelegentlich stoßen Sie auf eine PDF, die selbst nach maximaler Komprimierung über 20MB bleibt. Dies ist häufig bei Dokumenten mit hunderten hochauflösenden gescannten Seiten der Fall, wie z.B. technischen Zeichnungen, Patientenakten oder fotoreichen Produktkatalogen. Wenn Komprimierung allein nicht ausreicht, ist das Aufteilen der PDF in mehrere kleinere Dateien der beste Ansatz.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Wann aufteilen statt komprimieren</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Dokumente mit 100+ gescannten Seiten, bei denen Komprimierung minimale Ergebnisse liefert</li>
          <li>Mehrteilige Berichte, bei denen jedes Kapitel oder jeder Anhang unabhängig versendet werden kann</li>
          <li>Dateien, die auch nach &quot;Hoch&quot;-Komprimierung über 20MB bleiben</li>
          <li>Situationen, in denen Sie nur bestimmte Seiten mit bestimmten Empfängern teilen müssen</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">So teilen und senden Sie in Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Verwenden Sie PixelPDFs <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">PDF-Splitt-Tool</Link>, um Ihr Dokument in logische Abschnitte zu unterteilen</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Überprüfen Sie, dass jede aufgeteilte Datei unter 15MB liegt (unter Berücksichtigung des Base64-Codierungs-Overheads)</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Senden Sie separate E-Mails mit klaren Betreffzeilen: &quot;Q3-Finanzbericht - Teil 1 von 3&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Fügen Sie in der ersten E-Mail einen kurzen Hinweis hinzu, dass weitere Teile folgen</p>
          </div>
        </div>
      </section>

      {/* Methode 3 - OneDrive/SharePoint */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methode 3: OneDrive oder SharePoint Linkfreigabe verwenden</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wenn Sie bereits im Microsoft-Ökosystem arbeiten, bieten OneDrive und SharePoint eine natürliche Lösung für das Outlook-Anhangslimit. Anstatt die Datei direkt anzuhängen, laden Sie sie auf OneDrive oder SharePoint hoch und teilen einen Link in Ihrer E-Mail. Dieser Ansatz ist besonders praktisch für Office 365-Nutzer, da OneDrive direkt in das Fenster zum Verfassen von Outlook integriert ist.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">So teilen Sie über OneDrive in Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Klicken Sie auf das Anhangssymbol in Outlook und wählen Sie &quot;Cloud-Speicher durchsuchen&quot; anstelle Ihrer lokalen Dateien</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Wählen Sie OneDrive oder SharePoint, laden Sie Ihre PDF hoch, und Outlook fügt automatisch einen Freigabelink ein</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Setzen Sie die Freigabeberechtigung auf &quot;Empfänger können anzeigen&quot; oder &quot;Bestimmte Personen&quot; je nach Vertraulichkeit</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Vorteile</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Keine Dateigrößenbeschränkung</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Empfänger können die PDF im Browser anzeigen</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Sie können die Datei aktualisieren, ohne erneut zu senden</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Direkt in Outlook für Office 365-Nutzer integriert</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Einschränkungen</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Empfänger benötigen Internetzugang zum Anzeigen</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Einige Organisationen blockieren externe Cloud-Links</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Links können bei Berechtigungsänderungen ungültig werden</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Nicht geeignet für vertrauliche oder regulierte Dokumente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tipps für Outlook-Nutzer */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Tipps für Outlook-Nutzer mit großen PDFs</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Streben Sie immer 15MB an, nicht 20MB</h4>
              <p className="text-gray-700">Da Base64-Codierung ca. 33% Overhead hinzufügt, wird eine 15MB-Datei auf der Festplatte beim Anhängen ca. 20MB groß. Halten Sie Ihr Ziel bei 15MB, um Überraschungen zu vermeiden.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Komprimieren Sie vor dem Verfassen</h4>
              <p className="text-gray-700">Warten Sie nicht, bis Outlook Ihren Anhang ablehnt. Komprimieren Sie zuerst Ihre PDF, öffnen Sie dann Outlook und verfassen Sie Ihre E-Mail. Das spart Zeit und verhindert Frustration.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Verwenden Sie &quot;Reduzierte Größe speichern&quot; in Office-Apps</h4>
              <p className="text-gray-700">Wenn Sie eine PDF aus Word, Excel oder PowerPoint exportieren, verwenden Sie die integrierte Option &quot;Dateigröße reduzieren&quot; vor dem Speichern. Das kann 30-50% der Dateigröße einsparen, bevor Sie überhaupt ein Komprimierungstool benötigen.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Entfernen Sie unnötige Bilder und Schriftarten</h4>
              <p className="text-gray-700">Überprüfen Sie Ihre PDF vor dem Senden. Entfernen Sie ungenutzte Bilder, eingebettete Schriftarten und Metadaten, die die Datei aufblähen. Tools wie PixelPDF erledigen dies automatisch während der Komprimierung.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Prüfen Sie bei Ihrer IT-Abteilung nach benutzerdefinierten Limits</h4>
              <p className="text-gray-700">Wenn Sie ein Exchange-Konto über Ihren Arbeitgeber nutzen, hat Ihr IT-Team möglicherweise ein höheres Anhangslimit konfiguriert. Prüfen Sie die E-Mail-Richtlinie Ihrer Organisation, bevor Sie unnötig aufteilen oder komprimieren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Warum sagt Outlook, mein Anhang sei zu groß, obwohl die Datei unter 20MB liegt?</summary>
            <p className="mt-3 text-gray-700">
              Das liegt an der Base64-Codierung. Wenn Outlook Ihre Datei anhängt, werden Binärdaten für die E-Mail-Übertragung in Text umgewandelt, was die Größe um ca. 33% erhöht. Eine 16MB-PDF auf Ihrem Computer wird beim Codieren ca. 21MB—und überschreitet damit das 20MB-Limit von Outlook. Komprimieren Sie Ihre PDF auf 15MB oder weniger, um dieses Problem vollständig zu vermeiden.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich mein Outlook-Anhangslimit erhöhen?</summary>
            <p className="mt-3 text-gray-700">
              Für persönliche Outlook.com-Konten ist das 20MB-Limit festgelegt und kann nicht geändert werden. Wenn Sie jedoch Microsoft 365 über Ihren Arbeitgeber nutzen, hat Ihr Exchange-Administrator möglicherweise ein höheres Limit festgelegt (bis zu 150MB in einigen Konfigurationen). Kontaktieren Sie Ihre IT-Abteilung, um das spezifische Limit Ihrer Organisation zu bestätigen.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Ist es sicher, PDFs mit sensiblen Informationen zu komprimieren?</summary>
            <p className="mt-3 text-gray-700">
              Mit PixelPDF ja. Unser Komprimierungstool verarbeitet Dateien vollständig in Ihrem Browser mittels Client-seitiger Technologie. Ihre PDF wird nie auf einen Server hochgeladen, was bedeutet, dass vertrauliche Dokumente wie Verträge, Finanzberichte und Patientenakten während des gesamten Prozesses vollständig privat auf Ihrem Gerät bleiben.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Was tun, wenn meine PDF nach der Komprimierung immer noch über 20MB liegt?</summary>
            <p className="mt-3 text-gray-700">
              Wenn die maximale Komprimierung Ihre PDF nicht unter das Limit bringt, teilen Sie das Dokument mit unserem <Link href="/split-pdf" className="text-blue-600 hover:underline">PDF-Splitt-Tool</Link> in kleinere Teile auf. Alternativ laden Sie die Datei auf OneDrive oder SharePoint hoch und teilen Sie einen Link in Ihrer Outlook-E-Mail, anstatt sie direkt anzuhängen.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Gilt das 20MB-Limit auch für Outlook für Mac?</summary>
            <p className="mt-3 text-gray-700">
              Ja, das 20MB-Anhangslimit gilt für alle Versionen von Outlook, einschließlich Outlook für Mac, Outlook für Windows und der Outlook-Web-App. Das Limit wird vom E-Mail-Server bestimmt, nicht von der Client-Anwendung, daher ist es auf allen Plattformen einheitlich.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit, Ihre PDF für Outlook zu komprimieren?</h2>
        <p className="mb-6 text-blue-100">Reduzieren Sie Ihre PDF in Sekunden auf unter 15MB—kostenlos, sicher, ohne Registrierung</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          PDF kostenlos komprimieren
        </Link>
      </section>

      {/* Verwandte Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verwandte Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#9986;</div>
            <div className="font-medium">PDF aufteilen</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128196;</div>
            <div className="font-medium">PDF zusammenfügen</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128295;</div>
            <div className="font-medium">PDF komprimieren</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128444;</div>
            <div className="font-medium">PDF zu JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
