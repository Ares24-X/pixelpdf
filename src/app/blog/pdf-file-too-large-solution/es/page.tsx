// PDF File Too Large Solution - Artículo Corto (500-800 palabras)
// Ruta: /src/app/blog/pdf-file-too-large-solution/es/page.tsx
// Fecha: 2026-05-23

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¿Archivo PDF Demasiado Grande? Aquí está la Solución (2026)',
  description: 'Soluciones rápidas para archivos PDF que son demasiado grandes para enviar por email o subir. Conoce los límites de tamaño para diferentes plataformas y cómo reducir el tamaño de archivos PDF.',
  keywords: ['PDF demasiado grande', 'reducir tamaño PDF', 'comprimir PDF', 'límite tamaño PDF', 'solución PDF grande'],
  openGraph: {
    title: '¿Archivo PDF Demasiado Grande? Aquí está la Solución (2026)',
    description: 'Soluciones rápidas para archivos PDF que son demasiado grandes para enviar por email o subir. Conoce los límites de tamaño y cómo reducir el tamaño de archivos PDF.',
    type: 'article',
  },
};

export default function PdfFileTooLargeSolution() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Solución PDF Demasiado Grande</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        ¿Archivo PDF Demasiado Grande? Aquí está la Solución (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>23 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>5 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~720 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Has creado el documento PDF perfecto, pero ahora no puedes subirlo, enviarlo por email o compartirlo porque el archivo es demasiado grande. Este frustrante escenario ocurre más a menudo de lo que podrías pensar. La buena noticia? Arreglar un PDF con tamaño excesivo es rápido y fácil cuando conoces el enfoque correcto. Esta guía te lleva a través de las soluciones más rápidas y te ayuda a entender los límites de tamaño en diferentes plataformas.
        </p>
      </section>

      {/* Quick 3-Step Solution */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Solución Rápida en 3 Pasos</h2>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Abre la Herramienta de Compresión de PixelPDF</h3>
              <p className="text-gray-700">
                Ve a la página de <Link href="/compress-pdf" className="text-blue-600 hover:underline">Comprimir PDF</Link> de PixelPDF. No se requiere registro, y todo el procesamiento ocurre en tu navegador para máxima privacidad.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Sube y Comprime</h3>
              <p className="text-gray-700">
                Arrastra y suelta tu archivo PDF en el área de carga. Selecciona tu nivel de compresión: Medio es usualmente el mejor equilibrio entre reducción de tamaño de archivo y preservación de calidad. La herramienta muestra los tamaños antes y después para que puedas ver exactamente cuánto has ahorrado.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Descarga y Comparte</h3>
              <p className="text-gray-700">
                Haz clic en descargar para guardar tu PDF comprimido. El nuevo archivo está listo para enviar por email, subir o compartir. El texto permanece buscable y seleccionable, y el diseño se preserva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Size Limits Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Límites de Tamaño por Plataforma (2026)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Diferentes plataformas tienen diferentes restricciones de tamaño de archivo. Aquí tienes una referencia rápida para ayudarte a apuntar al tamaño correcto:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Plataforma</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Límite de Tamaño</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Email (Gmail, Outlook)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Total por email</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">WhatsApp</td>
                <td className="border border-gray-300 px-4 py-3 text-center">100 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Compartir documentos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Slack</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 GB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Límite plan gratuito</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Google Drive</td>
                <td className="border border-gray-300 px-4 py-3 text-center">750 GB/día</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Por cuenta diariamente</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">WeTransfer (Gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2 GB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Por transferencia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Consejos Rápidos para Reducir el Tamaño de PDF</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Comprime imágenes:</strong> Las imágenes de alta resolución son la causa #1 de PDFs grandes. La compresión de PixelPDF optimiza las imágenes automáticamente mientras mantiene la legibilidad.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Elimina páginas innecesarias:</strong> Usa la herramienta <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> de PixelPDF para extraer solo las páginas que necesitas, descartando portadas, hojas en blanco o secciones irrelevantes.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Reduce la calidad de imagen:</strong> Para documentos donde la calidad perfecta de imagen no es esencial, elige mayor compresión. El texto permanece nítido incluso a máxima compresión.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Convierte a escala de grises:</strong> Si el color no es necesario, convertir las imágenes a escala de grises puede reducir significativamente el tamaño del archivo. Esto funciona bien para documentos de texto escaneados.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Divide documentos grandes:</strong> Para archivos de más de 50 MB, considera dividirlos en partes más pequeñas usando <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> y compartirlos por separado.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuánto puede reducir la compresión un PDF?</summary>
            <p className="mt-3 text-gray-700">Los PDFs con muchas imágenes pueden reducirse entre 60-80% con compresión. Los documentos con mucho texto típicamente ven una reducción de 20-40%. PixelPDF muestra los tamaños exactos antes y después para que conozcas el resultado antes de descargar.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿La compresión afectará la calidad del texto?</summary>
            <p className="mt-3 text-gray-700">No. La compresión de PDF principalmente optimiza imágenes y elimina datos redundantes. El texto permanece nítido, seleccionable y buscable en cualquier nivel de compresión.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Qué pasa si mi PDF sigue siendo demasiado grande después de comprimir?</summary>
            <p className="mt-3 text-gray-700">Intenta dividir el documento en partes más pequeñas usando <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link>, o usa un servicio de almacenamiento en la nube como Google Drive o Dropbox para compartir mediante enlace en lugar de adjuntar el archivo directamente.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Es segura la compresión de PDF en línea?</summary>
            <p className="mt-3 text-gray-700">Con PixelPDF, sí. Toda la compresión ocurre localmente en tu navegador, tu archivo nunca sale de tu dispositivo. Esto proporciona la misma seguridad que el software de escritorio sin instalación.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Necesitas Reducir Tu PDF?</h2>
        <p className="mb-6 text-blue-100">Comprime tu PDF en segundos: gratis, rápido y privado</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Comprimir PDF Gratis
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Herramientas Relacionadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">Dividir PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Fusionar PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF a JPG</div>
          </Link>
          <Link href="/rotate-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-medium">Rotar PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
