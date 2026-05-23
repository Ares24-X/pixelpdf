// Extract Pages from PDF - Tutorial Completo (1500-2000 palabras)
// Ruta: /src/app/blog/extract-pages-from-pdf/es/page.tsx
// Fecha: 2026-05-23

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Extraer Páginas de PDF: Guía Completa (2026)',
  description: 'Aprende a extraer páginas específicas de archivos PDF en línea gratis. Guía paso a paso con casos de uso, tabla comparativa y preguntas frecuentes sobre extracción de páginas PDF.',
  keywords: ['extraer páginas PDF', 'extraer páginas de PDF', 'extractor de páginas PDF', 'sacar páginas de PDF', 'extracción PDF'],
  openGraph: {
    title: 'Cómo Extraer Páginas de PDF: Guía Completa (2026)',
    description: 'Aprende a extraer páginas específicas de archivos PDF en línea gratis. Guía paso a paso con casos de uso, tabla comparativa y preguntas frecuentes.',
    type: 'article',
  },
};

export default function ExtractPagesFromPdfGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Extraer Páginas de PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Extraer Páginas de PDF: Guía Completa (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>23 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>9 min de lectura</span>
        <span className="mx-2">•</span>
        <span>1.920 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          ¿Necesitas solo algunas páginas de un documento PDF enorme? No estás solo. Ya sea que estés extrayendo una factura específica de un estado de cuenta mensual, separando una sección de un contrato para revisión, o seleccionando un capítulo de un informe de investigación, saber cómo extraer páginas de un PDF es una habilidad digital esencial. Esta guía completa te llevará a través de todo lo que necesitas saber sobre la extracción de páginas PDF en 2026, desde entender qué es y por qué la necesitas, hasta instrucciones paso a paso y una comparación detallada de las mejores herramientas disponibles.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">Tabla de Contenidos</h2>
        <ul className="space-y-2">
          <li><a href="#what-is-pdf-extraction" className="text-blue-600 hover:underline">¿Qué es la Extracción de Páginas PDF?</a></li>
          <li><a href="#why-extract-pages" className="text-blue-600 hover:underline">¿Por Qué Extraer Páginas PDF? (Casos de Uso)</a></li>
          <li><a href="#how-to-extract" className="text-blue-600 hover:underline">Cómo Extraer Páginas Paso a Paso</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">Tabla Comparativa de Métodos</a></li>
          <li><a href="#tips" className="text-blue-600 hover:underline">Consejos Pro para Extracción de Páginas PDF</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">Preguntas Frecuentes</a></li>
        </ul>
      </section>

      {/* What is PDF Page Extraction */}
      <section id="what-is-pdf-extraction" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es la Extracción de Páginas PDF?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La extracción de páginas PDF es el proceso de seleccionar y sacar páginas específicas de un documento PDF más grande para crear un archivo nuevo y más pequeño. A diferencia de simplemente copiar texto o tomar capturas de pantalla (que pierden formato y calidad), la extracción de páginas adecuada preserva el contenido exacto, el diseño, las fuentes, las imágenes y los hipervínculos de las páginas originales. El resultado es un PDF completamente funcional e independiente que contiene solo las páginas que necesitas.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La extracción de páginas a menudo se confunde con la división de PDF, y aunque están relacionadas, sirven propósitos ligeramente diferentes. La división típicamente divide un documento completo en múltiples partes, ya sea por rangos de páginas fijos o separando cada página. La extracción, por otro lado, se enfoca en seleccionar páginas específicas que pueden no ser consecutivas. Por ejemplo, podrías querer extraer las páginas 3, 7 y 12 de un documento de 20 páginas dejando el resto atrás.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Herramientas modernas como PixelPDF manejan la extracción de páginas a través de una interfaz basada en navegador, procesando todo localmente en tu dispositivo. Este enfoque del lado del cliente significa que tus documentos nunca salen de tu computadora, proporcionando seguridad de nivel empresarial sin requerir instalación de software ni registro de cuenta.
        </p>
      </section>

      {/* Why Extract PDF Pages */}
      <section id="why-extract-pages" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué Extraer Páginas PDF? (Casos de Uso Comunes)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La extracción de páginas PDF es valiosa en muchos escenarios profesionales y personales. Aquí están los casos de uso más comunes:
        </p>

        {/* Use Case Cards */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-2">Extracción de Facturas</h3>
            <p className="text-gray-700">
              Los estados de cuenta bancarios mensuales y los informes de proveedores a menudo contienen docenas de facturas en un solo PDF. Cuando necesitas enviar una factura específica para reembolso o propósitos fiscales, extraer solo esa página ahorra tiempo y elimina confusiones. En lugar de enviar un estado de cuenta de 50 páginas, envías exactamente lo que se necesita: una sola página de factura clara.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-900 mb-2">Secciones de Contratos</h3>
            <p className="text-gray-700">
              Los contratos legales pueden abarcar cientos de páginas. Al revisar cláusulas específicas con interesados o compartir secciones relevantes con partes externas, extraer solo las páginas necesarias protege información confidencial y mantiene las discusiones enfocadas. Podrías extraer páginas de firmas, términos específicos o secciones de enmiendas sin revelar el acuerdo completo.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-2">Capítulos de Informes</h3>
            <p className="text-gray-700">
              Los informes anuales, trabajos de investigación y documentación técnica a menudo se distribuyen como archivos PDF grandes y únicos. Extraer capítulos o secciones específicas permite a los miembros del equipo acceder solo a lo relevante para su trabajo. Un equipo de marketing podría extraer el capítulo de análisis de mercado, mientras el equipo de finanzas extrae los estados financieros, todo del mismo documento fuente.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-semibold text-gray-900 mb-2">Materiales Educativos</h3>
            <p className="text-gray-700">
              Profesores y estudiantes frecuentemente necesitan extraer páginas específicas de libros de texto, hojas de trabajo o exámenes. Un profesor podría extraer un caso de estudio para discusión en clase, o un estudiante podría extraer páginas relevantes para una revisión de literatura. Este enfoque dirigido es más eficiente que trabajar con libros de texto completos.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="how-to-extract" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo Extraer Páginas de PDF: Guía Paso a Paso</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          La herramienta Dividir PDF de PixelPDF proporciona una interfaz simple pero poderosa para extraer páginas. Aquí está cómo hacerlo en cuatro pasos fáciles:
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Abre la Herramienta Dividir PDF</h3>
              <p className="text-gray-700 mb-3">
                Navega a la página de <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> de PixelPDF. Esta herramienta versátil maneja tanto división como extracción de páginas con la misma interfaz intuitiva. Sin registro, sin descargas y sin plugins requeridos, solo abre la página en cualquier navegador moderno.
              </p>
              <p className="text-gray-700">
                La herramienta funciona en computadoras de escritorio, laptops, tablets y smartphones, para que puedas extraer páginas desde cualquier lugar.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Sube Tu Archivo PDF</h3>
              <p className="text-gray-700 mb-3">
                Haz clic en el área de carga o arrastra y suelta tu archivo PDF en la interfaz. PixelPDF soporta archivos de hasta 50 MB. Como todo el procesamiento ocurre localmente en tu navegador usando JavaScript del lado del cliente, tu archivo nunca sale de tu dispositivo.
              </p>
              <p className="text-gray-700">
                Este procesamiento del lado del cliente es especialmente importante para documentos sensibles como contratos, estados financieros o informes confidenciales. Tus datos permanecen privados durante todo el proceso de extracción.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Selecciona las Páginas que Deseas Extraer</h3>
              <p className="text-gray-700 mb-3">
                Después de subir, verás vistas previas en miniatura de todas las páginas en tu PDF. Ingresa los números de página que deseas extraer usando la sintaxis flexible de rangos de página:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li><strong>Página única:</strong> Ingresa <code className="bg-gray-100 px-2 py-1 rounded">5</code> para extraer solo la página 5</li>
                <li><strong>Rango de páginas:</strong> Ingresa <code className="bg-gray-100 px-2 py-1 rounded">1-5</code> para extraer las páginas 1 a 5</li>
                <li><strong>Selecciones múltiples:</strong> Ingresa <code className="bg-gray-100 px-2 py-1 rounded">1-3, 7, 10-12</code> para extraer las páginas 1-3, página 7 y páginas 10-12</li>
              </ul>
              <p className="text-gray-700">
                La vista previa en miniatura te ayuda a verificar que has seleccionado las páginas correctas antes de continuar, especialmente útil cuando los números de página en el documento no coinciden con el conteo real de páginas del PDF (como cuando un documento tiene una portada o tabla de contenidos).
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Extrae y Descarga</h3>
              <p className="text-gray-700 mb-3">
                Haz clic en el botón "Dividir PDF" para procesar tu selección. La herramienta extrae tus páginas elegidas y crea un nuevo archivo PDF conteniendo solo esas páginas. El procesamiento es casi instantáneo para la mayoría de documentos ya que todo se ejecuta localmente en tu navegador.
              </p>
              <p className="text-gray-700">
                Tus páginas extraídas se descargan automáticamente como un nuevo archivo PDF. El documento original permanece completamente sin cambios en tu dispositivo, para que siempre puedas volver y extraer diferentes páginas si es necesario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparación de Métodos de Extracción de Páginas PDF (2026)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Varias herramientas pueden extraer páginas de PDFs, pero difieren significativamente en características, precios y privacidad. Aquí está cómo se compara PixelPDF con otras opciones populares:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Característica</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">PixelPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Adobe Acrobat</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Smallpdf</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">iLovePDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Precio</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600 bg-blue-50">Gratis</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$12.99/mes</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Registro Requerido</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí (para funciones completas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí (para funciones completas)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Procesamiento del Lado del Cliente</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí (solo Desktop)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Selección Personalizada de Páginas</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí (ej., 1-3, 5, 7-10)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Límite de Tamaño de Archivo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">50 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">100 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB (gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB (gratis)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Límite de Uso Diario</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Ilimitado</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Ilimitado</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2 tareas/día (gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">3 tareas/día (gratis)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Vista Previa de Páginas</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Compatible con Móvil</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Limitado</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          * Información precisa a mayo de 2026. Las características y precios pueden cambiar.
        </p>
      </section>

      {/* Pro Tips */}
      <section id="tips" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos Pro para Extracción de Páginas PDF</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Combina páginas extraídas en un nuevo documento:</strong> ¿Necesitas crear un PDF personalizado con páginas de múltiples documentos? Extrae páginas de cada archivo fuente, luego usa la herramienta <Link href="/merge-pdf" className="text-blue-600 hover:underline">Fusionar PDF</Link> de PixelPDF para combinarlas en un solo documento organizado.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Usa la sintaxis de rango de páginas para eficiencia:</strong> En lugar de extraer páginas una por una, usa rangos separados por comas como <code className="bg-white px-2 py-1 rounded">1-5, 8, 12-15</code> para extraer múltiples selecciones en una sola operación. Esto es mucho más rápido que extracciones repetidas.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Verifica que los números de página coincidan con la numeración del documento:</strong> Algunos PDFs tienen portadas o preliminares que desplazan el conteo real de páginas. Siempre revisa la vista previa en miniatura para confirmar que estás extrayendo las páginas correctas, especialmente para documentos legales o financieros donde la precisión es crítica.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Conserva los originales como respaldo:</strong> Siempre preserva tus archivos PDF originales. Esto te permite volver y extraer diferentes páginas más tarde si tus necesidades cambian, sin tener que localizar el documento fuente nuevamente.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuál es la diferencia entre extraer páginas y dividir un PDF?</summary>
            <p className="mt-3 text-gray-700">Dividir típicamente divide un PDF completo en múltiples partes basándose en reglas fijas (como cada página, o en un número de página específico). La extracción es más selectiva: eliges exactamente qué páginas sacar, que pueden no ser consecutivas. La herramienta Dividir PDF de PixelPDF maneja ambas operaciones, dándote flexibilidad para cualquier escenario.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Extraer páginas afecta la calidad del contenido?</summary>
            <p className="mt-3 text-gray-700">No. La extracción de páginas crea copias exactas de las páginas originales sin ninguna recompresión o conversión de formato. El texto permanece nítido y seleccionable, las imágenes retienen su resolución original, y todo el formato, fuentes e hipervínculos se preservan. Las páginas extraídas son idénticas a sus contrapartes en el documento fuente.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo extraer páginas de un PDF protegido con contraseña?</summary>
            <p className="mt-3 text-gray-700">Si el PDF requiere contraseña para abrirse, necesitarás ingresarla antes de que la herramienta pueda acceder al contenido. Para PDFs con restricciones a nivel de propietario (que previenen edición, copia o extracción), usa la herramienta <Link href="/pdf-decrypt" className="text-blue-600 hover:underline">PDF Decrypt</Link> de PixelPDF para eliminar estas restricciones primero, luego procede con la extracción de páginas.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Mis datos están seguros al extraer páginas en línea?</summary>
            <p className="mt-3 text-gray-700">Con PixelPDF, absolutamente. Todo el procesamiento ocurre completamente en tu navegador usando JavaScript del lado del cliente. Tu archivo PDF nunca sale de tu dispositivo, no hay cargas al servidor, sin almacenamiento en la nube y sin acceso de terceros. Esto proporciona el mismo nivel de seguridad que el software de escritorio con la conveniencia de una herramienta basada en web.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuántas páginas puedo extraer a la vez?</summary>
            <p className="mt-3 text-gray-700">Puedes extraer cualquier número de páginas de tu PDF en una sola operación. Simplemente ingresa todos los números de página y rangos que necesitas usando la sintaxis separada por comas. Por ejemplo, <code className="bg-gray-100 px-2 py-1 rounded">1-10, 15, 20-25</code> extrae 17 páginas de una vez. El único límite es el tamaño general del archivo (máximo 50 MB).</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para Extraer Páginas de Tu PDF?</h2>
        <p className="mb-6 text-blue-100">Gratis, rápido y 100% privado, extrae exactamente las páginas que necesitas en segundos</p>
        <Link
          href="/split-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Extraer Páginas Ahora
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Herramientas Relacionadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Fusionar PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">Comprimir PDF</div>
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
