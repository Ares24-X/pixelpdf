// Mehrere Bilder in Ein PDF Kombinieren - Deutsche Version
// Pfad: /src/app/blog/combine-images-into-pdf/de/page.tsx
// Datum: 2026-05-25

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mehrere Bilder in Ein PDF Kombinieren (2026)',
  description: 'Kurzanleitung zum Kombinieren mehrerer Bilder in einer einzigen PDF-Datei. Kostenloses Online-Tool, keine Registrierung erforderlich, 100% sicher.',
  keywords: ['Bilder zu PDF kombinieren', 'Bilder in PDF zusammenfügen', 'mehrere Bilder zu PDF', 'Fotocollage PDF', 'Bild zu PDF'],
  openGraph: {
    title: 'Mehrere Bilder in Ein PDF Kombinieren (2026)',
    description: 'Kurzanleitung zum Kombinieren mehrerer Bilder in einem einzigen PDF. Kostenlos, schnell und sicher.',
    type: 'article',
  },
};

export default function CombineImagesIntoPDFDE() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Startseite</Link> / <Link href="/blog">Blog</Link> / <span>Bilder zu PDF kombinieren</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Mehrere Bilder in Ein PDF Kombinieren (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>25. Mai 2026</span>
        <span className="mx-2">•</span>
        <span>4 Min. Lesezeit</span>
        <span className="mx-2">•</span>
        <span>612 Wörter</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Müssen Sie mehrere Fotos oder Bilder in einem einzigen PDF-Dokument kombinieren? Ob Sie eine Fotocollage erstellen, gescannte Dokumente organisieren oder eine Präsentation vorbereiten – das Zusammenfügen von Bildern in einem PDF macht das Teilen und Archivieren viel einfacher. Hier erfahren Sie, wie Sie es schnell und kostenlos erledigen.
        </p>
      </section>

      {/* Quick 3-Step Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bilder in 3 Schritten zu PDF kombinieren</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">Alle Ihre Bilder hochladen</h3>
              <p className="text-gray-700 mt-1">Gehen Sie zu PixelPDFs <Link href="/image-to-pdf" className="text-blue-600 hover:underline">Bild zu PDF</Link> Tool und ziehen Sie alle Ihre Bilder gleichzeitig. Sie können mit Strg/Cmd + Klick mehrere Dateien auswählen.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">Bilder neu anordnen</h3>
              <p className="text-gray-700 mt-1">Ziehen Sie die Bilder, um sie in der gewünschten Reihenfolge anzuordnen. Jedes Bild wird zu einer separaten Seite im endgültigen PDF.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">Ihr kombiniertes PDF herunterladen</h3>
              <p className="text-gray-700 mt-1">Klicken Sie auf „In PDF konvertieren" und Ihr mehrseitiges PDF wird sofort heruntergeladen. Die gesamte Verarbeitung erfolgt in Ihrem Browser – Ihre Bilder verlassen niemals Ihr Gerät.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Jetzt Bilder kombinieren
          </Link>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Unterstützte Bildformate</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">JPG / JPEG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">PNG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">WebP</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">GIF</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">BMP</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-3">Sie können verschiedene Formate in einer einzigen Konvertierung mischen – PixelPDF verarbeitet sie alle automatisch.</p>
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schnelle Tipps</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Fotocollagen:</strong> Kombinieren Sie Urlaubsfotos, Familienbilder oder Eventbilder in einem teilbaren PDF-Album.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Gescannte Dokumente:</strong> Fügen Sie mehrere gescannte Seiten zu einem organisierten Dokument für einfaches E-Mail-Versenden zusammen.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Präsentationen:</strong> Erstellen Sie visuelle Präsentationen durch Kombinieren von Diagrammen, Schaubildern und Screenshots.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Quittungen und Rechnungen:</strong> Halten Sie alle Ihre Ausgabendokumente in einer PDF-Datei zusammen.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Wie viele Bilder kann ich gleichzeitig kombinieren?</summary>
            <p className="mt-3 text-gray-700">Sie können bis zu 20 Bilder in einer einzigen Konvertierung kombinieren. Jedes Bild wird zu einer Seite im resultierenden PDF.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Ist dieser Service wirklich kostenlos?</summary>
            <p className="mt-3 text-gray-700">Ja! PixelPDF ist völlig kostenlos ohne Registrierung, ohne Wasserzeichen und ohne Dateibeschränkungen außer den 20 Bildern pro Konvertierung.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Werden meine Bilder auf einen Server hochgeladen?</summary>
            <p className="mt-3 text-gray-700">Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Bilder verlassen niemals Ihr Gerät, was vollständige Privatsphäre gewährleistet.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Kann ich die Seitenreihenfolge nach dem Erstellen des PDF ändern?</summary>
            <p className="mt-3 text-gray-700">Wenn Sie die Seitenreihenfolge nach dem Erstellen des PDF ändern müssen, können Sie unser <Link href="/split-pdf" className="text-blue-600 hover:underline">PDF teilen</Link> Tool verwenden, um Seiten zu trennen und sie dann in der gewünschten Reihenfolge zusammenzuführen.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Beginnen Sie, Ihre Bilder zu kombinieren</h2>
        <p className="mb-6 text-blue-100">Erstellen Sie in Sekunden ein mehrseitiges PDF aus Ihren Bildern – kostenlos und sicher</p>
        <Link 
          href="/image-to-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Bild zu PDF kostenlos testen
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Verwandte Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF zu JPG</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">PDF zusammenführen</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">PDF komprimieren</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">PDF drehen</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
