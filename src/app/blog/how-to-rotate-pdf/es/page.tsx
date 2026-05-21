// Cómo Girar PDF: Guía Completa - Guía en Español
// Ruta: /src/app/blog/how-to-rotate-pdf/es/page.tsx
// Fecha: 2026-05-21

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Girar PDF: Guía Completa para Girar Archivos PDF (2026)',
  description: 'Aprende cómo rotar páginas PDF en el sentido de las agujas del reloj o en sentido contrario. Guía paso a paso, consejos, preguntas frecuentes y las mejores herramientas gratuitas de rotación de PDF en 2026.',
  keywords: ['girar PDF', 'rotar PDF online', 'girar páginas PDF', 'rotación de PDF', 'cómo girar un PDF'],
  openGraph: {
    title: 'Cómo Girar PDF: Guía Completa para Girar Archivos PDF (2026)',
    description: 'Aprende cómo rotar páginas PDF con PixelPDF. Guía paso a paso y consejos.',
    type: 'article',
  },
};

export default function RotatePdfGuideES() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Inicio</Link> / <Link href="/blog" className="hover:text-blue-600">Blog</Link> / <span>Cómo Girar PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Girar PDF: Guía Completa para Girar Archivos PDF (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>21 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>1.652 palabras</span>
      </div>

      {/* Introducción */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Todos hemos estado ahí: descargas un PDF de internet, lo abres y la mitad de las páginas están giradas lateralmente o boca abajo. Imprimir se convierte en una pesadilla y leer en pantalla es frustrante. ¿La solución? Aprender a girar archivos PDF correctamente. En esta guía completa, te mostraremos exactamente cómo rotar páginas PDF usando la herramienta gratuita en línea de PixelPDF, junto con consejos, casos de uso comunes y respuestas a preguntas frecuentes.
        </p>
      </section>

      {/* Tabla de contenidos */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">Tabla de contenidos</h2>
        <ul className="space-y-2">
          <li><a href="#que-es-rotar-pdf" className="text-blue-600 hover:underline">¿Qué es la rotación de PDF?</a></li>
          <li><a href="#por-que-rotar" className="text-blue-600 hover:underline">Por qué necesitas girar archivos PDF</a></li>
          <li><a href="#como-rotar" className="text-blue-600 hover:underline">Cómo girar PDF: Paso a paso</a></li>
          <li><a href="#angulos" className="text-blue-600 hover:underline">Entendiendo los ángulos de rotación</a></li>
          <li><a href="#comparativa" className="text-blue-600 hover:underline">Comparativa de herramientas</a></li>
          <li><a href="#consejos" className="text-blue-600 hover:underline">Consejos profesionales</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">Preguntas frecuentes</a></li>
        </ul>
      </section>

      {/* Qué es la rotación de PDF */}
      <section id="que-es-rotar-pdf" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es la rotación de PDF?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La rotación de PDF es el proceso de cambiar la orientación de una o más páginas dentro de un documento PDF. No se trata de cambiar el tamaño o redistribuir el contenido: literalmente gira las páginas para que miren en la dirección correcta. Cuando un escáner alimenta páginas en ángulos impares, o cuando alguien guarda una presentación con orientaciones mixtas, esas páginas quedan desalineadas en el PDF final.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Las herramientas modernas de rotación de PDF como PixelPDF manejan este proceso completamente en tu navegador. Puedes rotar páginas individuales o todas las páginas a la vez, eligiendo entre rotaciones de 90 grados, 180 grados o 270 grados. ¿Lo mejor? Tus documentos nunca abandonan tu dispositivo, garantizando privacidad y seguridad completas.
        </p>
      </section>

      {/* Por qué rotar */}
      <section id="por-que-rotar" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Por qué necesitas girar archivos PDF</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">📄 Documentos escaneados</h3>
            <p className="text-gray-700 text-sm">Los escáneres planos a menudo alimentan páginas en ángulos ligeros, resultando en páginas torcidas. La rotación corrige estos problemas de alineación al instante.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">📱 Orientaciones mixtas</h3>
            <p className="text-gray-700 text-sm">Las presentaciones e informes pueden contener diapositivas tanto en vertical como en horizontal. La rotación asegura un flujo de lectura consistente.</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">🖨️ Preparación para impresión</h3>
            <p className="text-gray-700 text-sm">Algunos documentos están diseñados para impresión a doble cara con orientaciones alternadas. La rotación ayuda a prepararlos correctamente.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">📱 Visualización móvil</h3>
            <p className="text-gray-700 text-sm">Los PDFs creados en un dispositivo pueden mostrarse incorrectamente en el móvil. La rotación mejora la legibilidad en smartphones y tablets.</p>
          </div>
        </div>
      </section>

      {/* Guía paso a paso */}
      <section id="como-rotar" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo Girar PDF: Guía Paso a Paso</h2>
        
        <div className="space-y-8">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Abre la herramienta Girar PDF de PixelPDF</h3>
              <p className="text-gray-700 mb-3">Navega a la página Girar PDF de PixelPDF. Nuestra herramienta funciona completamente en tu navegador sin necesidad de registro.</p>
              <Link href="/rotate-pdf" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Abrir herramienta Girar PDF</Link>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Sube tu archivo PDF</h3>
              <p className="text-gray-700 mb-3">Haz clic en el área de subida o arrastra y suelta tu archivo PDF. Puedes subir archivos de hasta 50 MB.</p>
              <p className="text-gray-700">PixelPDF soporta:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>PDFs de una o varias páginas</li>
                <li>PDFs con orientaciones de página mixtas</li>
                <li>Documentos grandes de hasta 50 MB</li>
              </ul>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Elige las opciones de rotación</h3>
              <p className="text-gray-700 mb-3">Selecciona tu ángulo de rotación (90°, 180° o 270°) y elige qué páginas rotar:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li><strong>Todas las páginas:</strong> Rota cada página del documento</li>
                <li><strong>Páginas específicas:</strong> Rota solo las páginas seleccionadas (ej. "1, 3, 5-7")</li>
              </ul>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Haz clic en Rotar y Descargar</h3>
              <p className="text-gray-700 mb-3">Haz clic en el botón "Rotar PDF" para procesar tu archivo. En segundos, tu PDF rotado estará listo para descargar.</p>
              <p className="text-gray-700">El archivo rotado se guarda automáticamente en tu dispositivo. Tu archivo original permanece sin cambios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ángulos de rotación */}
      <section id="angulos" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Entendiendo los ángulos de rotación de PDF</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ángulo</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rotación</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Caso de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">90° en sentido horario</td>
                <td className="border border-gray-300 px-4 py-3">Cuarto de vuelta a la derecha</td>
                <td className="border border-gray-300 px-4 py-3">Páginas horizontales en documento vertical</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">90° en sentido antihorario</td>
                <td className="border border-gray-300 px-4 py-3">Cuarto de vuelta a la izquierda</td>
                <td className="border border-gray-300 px-4 py-3">Corrigiendo páginas rotadas demasiado a la derecha</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">180°</td>
                <td className="border border-gray-300 px-4 py-3">Media vuelta (boca abajo)</td>
                <td className="border border-gray-300 px-4 py-3">Volteando todo el documento boca abajo</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">270° en sentido horario</td>
                <td className="border border-gray-300 px-4 py-3">Tres cuartos de vuelta a la derecha</td>
                <td className="border border-gray-300 px-4 py-3">Igual que 90° en sentido antihorario</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparativa */}
      <section id="comparativa" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejores herramientas gratuitas de rotación de PDF (2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Función</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">PixelPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Smallpdf</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">iLovePDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Precio</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600 bg-blue-50">Gratis</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Rotar páginas específicas</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Premium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí (Gratis)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Todos los ángulos disponibles</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Procesamiento del lado del cliente</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Sin registro</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Consejos profesionales */}
      <section id="consejos" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos profesionales para rotación de PDF</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Rotación por lotes:</strong> Si tienes varios PDFs con el mismo problema de rotación, procésalos uno por uno. Mantén PixelPDF abierto en una pestaña para operaciones sucesivas rápidas.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Vista previa primero:</strong> Siempre previsualiza tu PDF antes de rotar para identificar exactamente qué páginas necesitan corrección. Anota los números de página.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Guarda originales:</strong> Después de la rotación, es posible que quieras combinar tu PDF rotado con otros archivos usando nuestra herramienta de <Link href="/merge-pdf" className="text-blue-600 hover:underline">Combinar PDF</Link>.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Prueba de impresión:</strong> Antes de imprimir un documento grande rotado, imprime solo las primeras páginas para asegurar que la rotación logró el resultado deseado.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Rotar un PDF reduce la calidad del archivo?</summary>
            <p className="mt-3 text-gray-700">No, la rotación de PDF es una operación sin pérdida. Rotar páginas no comprime ni altera la calidad del contenido: simplemente cambia la orientación de visualización. Tu texto, imágenes y formato permanecen exactamente como estaban.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo rotar solo páginas específicas en un PDF?</summary>
            <p className="mt-3 text-gray-700">¡Sí! PixelPDF te permite rotar todas las páginas a la vez o seleccionar páginas específicas. Puedes especificar páginas individuales (como "1, 3, 5") o rangos (como "1-3, 5-7") para rotación específica.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Se sube mi PDF a un servidor?</summary>
            <p className="mt-3 text-gray-700">No. PixelPDF procesa todos los PDFs completamente en tu navegador usando JavaScript del lado del cliente. Tus documentos nunca abandonan tu dispositivo, garantizando privacidad y seguridad completas para archivos sensibles.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuál es el tamaño máximo de archivo?</summary>
            <p className="mt-3 text-gray-700">PixelPDF soporta archivos PDF de hasta 50 MB. Para archivos más grandes, puede que necesites dividir el PDF usando nuestra herramienta de <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link>, rotar las partes individuales y luego combinarlas.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo deshacer una rotación?</summary>
            <p className="mt-3 text-gray-700">Si tienes el archivo original, simplemente súbelo de nuevo y rota en la dirección opuesta. Siempre guarda copias de seguridad de los archivos originales antes de hacer cambios, especialmente para documentos importantes.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para rotar tus archivos PDF?</h2>
        <p className="mb-6 text-blue-100">Gratis, rápido y seguro: rota PDFs en segundos</p>
        <Link 
          href="/rotate-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Prueba Rotar PDF Gratis
        </Link>
      </section>

      {/* Herramientas relacionadas */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Herramientas relacionadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">Combinar PDF</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">Dividir PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">Comprimir PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">PDF a JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
