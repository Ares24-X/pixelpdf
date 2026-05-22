// Comprimir PDF para Correo - Artículo Corto (500-800 palabras)
// Ruta: /src/app/blog/compress-pdf-before-email/es/page.tsx
// Fecha: 2026-05-22

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Comprimir PDF para Adjuntar por Correo (2026)',
  description: 'Guía rápida para reducir el tamaño de archivos PDF para correo electrónico. Aprende los mejores ajustes de compresión para Gmail, Outlook y otros proveedores.',
  keywords: ['comprimir PDF para correo', 'reducir tamaño PDF', 'PDF demasiado grande para correo', 'límite de tamaño adjunto correo'],
  openGraph: {
    title: 'Cómo Comprimir PDF para Adjuntar por Correo (2026)',
    description: 'Guía rápida para reducir el tamaño de archivos PDF para correo electrónico. Aprende los mejores ajustes de compresión para Gmail, Outlook y otros proveedores.',
    type: 'article',
  },
};

export default function CompressPdfForEmail() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Comprimir PDF para Correo</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Comprimir PDF para Adjuntar por Correo
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>22 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>4 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~650 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nada es más frustrante que redactar el correo electrónico perfecto, adjuntar tu PDF y pulsar "Enviar" solo para recibir un mensaje de error indicando que el archivo es demasiado grande. Los proveedores de correo electrónico aplican límites estrictos de tamaño de adjuntos, y los archivos PDF, especialmente aquellos llenos de imágenes y gráficos, pueden superarlos fácilmente. La buena noticia es que comprimir tu PDF toma solo unos segundos con la herramienta adecuada, y puede reducir el tamaño del archivo hasta en un 80% sin afectar notablemente la legibilidad.
        </p>
      </section>

      {/* Email Size Limits Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Límites de Tamaño de Adjuntos por Correo (2026)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Antes de comprimir, es útil conocer los límites. Estos son los topes actuales de tamaño de adjuntos para los proveedores de correo electrónico más populares:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Proveedor de Correo</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Límite de Adjunto</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Enlace de Google Drive para archivos más grandes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook / Hotmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Enlace de OneDrive para archivos más grandes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Integración con Dropbox disponible</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Apple Mail (iCloud)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Mail Drop hasta 5 GB</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">ProtonMail (Gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-500">Cifrado de extremo a extremo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          * Los límites se refieren al tamaño total de adjuntos por correo, no por archivo.
        </p>
      </section>

      {/* 3-Step Quick Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo Comprimir un PDF para Correo (3 Pasos)</h2>
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Sube tu PDF</h3>
              <p className="text-gray-700">
                Ve a la herramienta <Link href="/compress-pdf" className="text-blue-600 hover:underline">Comprimir PDF</Link> de PixelPDF y arrastra y suelta tu archivo en la página. Alternativamente, haz clic en el área de carga para buscar en tu dispositivo. La herramienta admite PDFs de hasta 50 MB, y todo el procesamiento ocurre localmente en tu navegador: tu archivo nunca se carga en ningún servidor.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Elige el Nivel de Compresión</h3>
              <p className="text-gray-700">
                PixelPDF generalmente ofrece múltiples niveles de compresión, como Baja, Media y Alta. Para adjuntos de correo electrónico, la compresión Media suele ser el mejor equilibrio: reduce significativamente el tamaño del archivo manteniendo el texto nítido y las imágenes claras. Si el archivo sigue siendo demasiado grande después de Media, prueba con Alta. PixelPDF muestra los tamaños antes y después para que puedas ver exactamente cuánto espacio has ahorrado antes de descargar.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Descarga y Adjunta</h3>
              <p className="text-gray-700">
                Haz clic en "Descargar" para guardar el PDF comprimido en tu dispositivo. Adjúntalo a tu correo electrónico y envíalo con confianza. El archivo comprimido conserva todo el contenido original: el texto sigue siendo seleccionable y buscable, y el diseño se mantiene intacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compression Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos de Compresión</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Comprime antes de adjuntar:</strong> Siempre comprime tu PDF antes de agregarlo a tu correo electrónico. Algunos clientes de correo vuelven a codificar automáticamente los adjuntos, lo que puede aumentar inesperadamente el tamaño del archivo.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Verifica la calidad después de comprimir:</strong> Abre el archivo comprimido y recórrelo para asegurarte de que el texto sea legible y las imágenes sean aceptables. Si la calidad es demasiado baja, prueba con un nivel de compresión menor.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Divide archivos muy grandes:</strong> Si la compresión por sí sola no es suficiente, usa la herramienta <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> de PixelPDF para dividir el documento en partes más pequeñas y enviarlas en varios correos.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuánto puede reducir la compresión el tamaño de un PDF?</summary>
            <p className="mt-3 text-gray-700">Depende del contenido. Los PDFs con muchas imágenes de alta resolución a menudo pueden reducirse entre un 60 y un 80%. Los documentos con mucho texto generalmente ven reducciones menores del 20 al 40%. PixelPDF te muestra los tamaños exactos antes y después para que conozcas el resultado antes de descargar.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Comprimir un PDF afectará la calidad del texto?</summary>
            <p className="mt-3 text-gray-700">El contenido de texto generalmente no se ve afectado por la compresión. La compresión de PDF funciona principalmente optimizando las imágenes, eliminando datos redundantes y simplificando la estructura del archivo. Tu texto se mantiene nítido, seleccionable y searchable en cualquier nivel de compresión.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Es seguro comprimir PDFs online?</summary>
            <p className="mt-3 text-gray-700">Con PixelPDF, sí. Toda la compresión ocurre en tu navegador: tu archivo nunca se carga en un servidor. Esto significa que tus documentos se mantienen completamente privados y seguros en tu dispositivo durante todo el proceso.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Qué pasa si mi PDF sigue siendo demasiado grande después de la compresión?</summary>
            <p className="mt-3 text-gray-700">Si el archivo comprimido aún supera el límite de tu proveedor de correo, intenta dividirlo en partes más pequeñas usando la herramienta <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> de PixelPDF. Alternativamente, considera usar un enlace de almacenamiento en la nube (Google Drive, OneDrive o Dropbox) para compartir el archivo en lugar de adjuntarlo directamente.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Necesitas Reducir un PDF para Correo?</h2>
        <p className="mb-6 text-blue-100">Comprime tu PDF en segundos, directamente en tu navegador, completamente gratis</p>
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
          <Link href="/pdf-encrypt" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="font-medium">Cifrar PDF</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
