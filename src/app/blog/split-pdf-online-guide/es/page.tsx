// Dividir PDF Guía Completa - Tutorial en Profundidad (1500-2000 palabras)
// Ruta: /src/app/blog/split-pdf-online-guide/es/page.tsx
// Fecha: 2026-05-22

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Dividir PDF Online Gratis: Guía Completa (2026)',
  description: 'Aprende a dividir archivos PDF por rango de páginas, extraer páginas específicas o separar un PDF grande en varios archivos con PixelPDF.',
  keywords: ['dividir PDF', 'extraer páginas PDF', 'separar PDF', 'divisor de PDF', 'dividir PDF online'],
  openGraph: {
    title: 'Cómo Dividir PDF Online Gratis: Guía Completa (2026)',
    description: 'Aprende a dividir archivos PDF por rango de páginas, extraer páginas específicas o separar un PDF grande en varios archivos con PixelPDF.',
    type: 'article',
  },
};

export default function SplitPdfGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Guía para Dividir PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Dividir PDF Online Gratis: Guía Completa (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>22 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.700 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Trabajar con archivos PDF grandes puede resultar frustrante, especialmente cuando solo necesitas unas pocas páginas de un documento de cien páginas. Ya sea que necesites extraer un solo capítulo de un libro de texto, separar facturas de un extracto mensual o dividir un informe masivo en secciones manejables, dividir PDFs es una habilidad esencial. Esta guía completa cubre todo lo que necesitas saber sobre cómo dividir archivos PDF online en 2026, incluyendo instrucciones paso a paso, métodos avanzados de división, una comparación detallada de herramientas y consejos expertos para ayudarte a trabajar de manera más eficiente.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">Tabla de Contenidos</h2>
        <ul className="space-y-2">
          <li><a href="#what-is-pdf-splitting" className="text-blue-600 hover:underline">¿Qué es la División de PDF?</a></li>
          <li><a href="#why-split-pdf" className="text-blue-600 hover:underline">¿Por Qué Dividir Archivos PDF?</a></li>
          <li><a href="#how-to-split" className="text-blue-600 hover:underline">Cómo Dividir Archivos PDF (Paso a Paso)</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">Comparación de las Mejores Herramientas para Dividir PDF</a></li>
          <li><a href="#tips" className="text-blue-600 hover:underline">Consejos Profesionales para Dividir PDFs</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">Preguntas Frecuentes</a></li>
        </ul>
      </section>

      {/* What is PDF Splitting */}
      <section id="what-is-pdf-splitting" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es la División de PDF?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La división de PDF es el proceso de descomponer un solo documento PDF en archivos más pequeños e independientes. A diferencia de simplemente copiar contenido (lo cual a menudo rompe el formato), un divisor de PDF adecuado extrae páginas exactas conservando todo el contenido original, incluyendo texto, imágenes, fuentes, hipervínculos y la integridad del diseño. Cada archivo resultante es un documento PDF completamente válido e independiente.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Existen varias formas de dividir un PDF. Puedes extraer una sola página, sacar un rango de páginas consecutivas, seleccionar páginas no consecutivas dispersas por todo el documento o dividir el archivo completo en partes iguales. El enfoque adecuado depende de tus necesidades específicas, y las herramientas modernas como PixelPDF ponen todas estas opciones a tu disposición a través de una sencilla interfaz en el navegador.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Lo que distingue a PixelPDF es que todo el procesamiento ocurre completamente en tu navegador utilizando JavaScript del lado del cliente. Tus archivos nunca salen de tu dispositivo: no hay cargas a servidores, no hay almacenamiento en la nube y no hay preocupaciones de privacidad. Este enfoque proporciona el mismo nivel de seguridad que el software de escritorio, pero con la comodidad de una herramienta online que funciona en cualquier dispositivo.
        </p>
      </section>

      {/* Why Split PDF */}
      <section id="why-split-pdf" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué Dividir Archivos PDF?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dividir PDFs es una tarea sorprendentemente común en muchas industrias y situaciones cotidianas. Estos son los casos de uso más frecuentes:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Extraer Páginas Específicas:</strong> Sacar páginas individuales de un documento grande, como un solo recibo de un extracto bancario o un capítulo de un libro de texto.</li>
          <li><strong>Cumplimiento de Tamaño de Correo:</strong> La mayoría de los proveedores de correo electrónico limitan el tamaño de los adjuntos a 20-25 MB. Dividir un PDF grande en partes más pequeñas te permite enviarlo en varios correos o compartir solo las secciones relevantes.</li>
          <li><strong>Colaboración:</strong> Compartir solo las secciones relevantes de un documento con los miembros del equipo en lugar de enviar el archivo completo, reduciendo confusiones y mejorando el enfoque.</li>
          <li><strong>Archivo y Organización:</strong> Dividir un PDF con múltiples temas en archivos específicos por tema para una mejor archivación digital y una recuperación más fácil más adelante.</li>
          <li><strong>Impresión de Secciones Específicas:</strong> Imprimir solo las páginas que necesitas en lugar de desperdiciar papel y tinta en un documento completo.</li>
          <li><strong>Asuntos Legales y Cumplimiento:</strong> Redactar o separar páginas sensibles de un documento más grande antes de compartirlo con terceros.</li>
          <li><strong>Preparación de Presentaciones:</strong> Extraer páginas específicas para usarlas como material de apoyo o de referencia durante reuniones y presentaciones.</li>
        </ul>
      </section>

      {/* Step-by-Step Guide */}
      <section id="how-to-split" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo Dividir Archivos PDF: Guía Paso a Paso</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          PixelPDF hace que dividir PDFs sea rápido e intuitivo. Así es como hacerlo en cuatro sencillos pasos:
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Sube tu Archivo PDF</h3>
              <p className="text-gray-700 mb-3">
                Navega a la herramienta <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> de PixelPDF. Haz clic en el área de carga o arrastra y suelta tu archivo PDF directamente en la interfaz. La herramienta admite archivos PDF de hasta 50 MB.
              </p>
              <p className="text-gray-700">
                Dado que todo el procesamiento ocurre en tu navegador, tu archivo nunca se carga en ningún servidor externo. Puedes usar esta herramienta con total confianza, incluso para documentos sensibles que contengan información personal o confidencial.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Elige tu Método de División</h3>
              <p className="text-gray-700 mb-3">
                PixelPDF ofrece opciones flexibles de división para adaptarse a tus necesidades:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li><strong>Rangos de Páginas Personalizados:</strong> Especifica páginas exactas usando una sintaxis como <code className="bg-gray-100 px-2 py-1 rounded">1-3, 5, 7-10</code> para extraer las páginas 1 a 3, la página 5 y las páginas 7 a 10 como archivos separados o un solo archivo combinado.</li>
                <li><strong>Atajos Rápidos:</strong> Usa botones de atajo con un solo clic para operaciones comunes:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li><em>Primera Mitad</em> — divide el documento en el punto medio</li>
                    <li><em>Segunda Mitad</em> — extrae todo después del punto medio</li>
                    <li><em>Cada Página</em> — crea un PDF separado por cada página individual</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700">
                Estos atajos son especialmente útiles cuando necesitas una división rápida sin especificar manualmente los números de página. La opción "Cada Página" es perfecta para extraer páginas individuales de documentos escaneados o hojas de trabajo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Vista Previa y Confirmación</h3>
              <p className="text-gray-700 mb-3">
                Antes de dividir, puedes previsualizar las miniaturas de las páginas para verificar tu selección. Este paso te ayuda a evitar errores, especialmente al trabajar con documentos grandes donde los números de página pueden ser difíciles de recordar.
              </p>
              <p className="text-gray-700">
                Verifica que los rangos de páginas y el método de división coincidan con tu intención. Si estás extrayendo páginas no consecutivas, la vista previa facilita confirmar que has seleccionado las correctas.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Divide y Descarga</h3>
              <p className="text-gray-700 mb-3">
                Haz clic en el botón "Dividir PDF" para procesar tu archivo. Dado que todo se ejecuta localmente en tu navegador, la división es casi instantánea para la mayoría de los documentos. Tus archivos divididos se descargarán automáticamente a tu dispositivo.
              </p>
              <p className="text-gray-700">
                Si divides en varios archivos, se empaquetarán en un archivo ZIP para facilitar la descarga. El PDF original permanece completamente intacto en tu dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparación de las Mejores Herramientas para Dividir PDF (2026)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          No todos los divisores de PDF son iguales. La siguiente tabla compara PixelPDF con otras herramientas online populares en función de las características clave que más importan a los usuarios.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Característica</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">PixelPDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Smallpdf</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">iLovePDF</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Adobe Acrobat Online</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Precio</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600 bg-blue-50">Gratis</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Freemium</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$12,99/mes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Registro Obligatorio</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí (para funciones completas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí (para funciones completas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Procesamiento del Lado del Cliente</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No (versión online)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Rangos de Páginas Personalizados</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí (ej., 1-3, 5, 7-10)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Atajos Rápidos (Primera/Segunda Mitad, Cada Página)</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Limitado</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Limitado</td>
                <td className="border border-gray-300 px-4 py-3 text-center">No</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Límite de Tamaño de Archivo</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium bg-blue-50">50 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB (gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB (gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">100 MB</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Límite de Uso Diario</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Ilimitado</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2 tareas/día (gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">3 tareas/día (gratis)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1 tarea (prueba gratuita)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Compatible con Móvil</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 bg-blue-50">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Sí</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Limitado</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          * Información actualizada a mayo de 2026. Las características y precios pueden cambiar.
        </p>
      </section>

      {/* Pro Tips */}
      <section id="tips" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos Profesionales para Dividir PDFs</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Combina división y fusión para un control máximo:</strong> ¿Necesitas las páginas 1-3, 7 y 12-15 de un documento? Divide el PDF para extraer esos rangos y luego usa la herramienta <Link href="/merge-pdf" className="text-blue-600 hover:underline">Fusionar PDF</Link> de PixelPDF para combinarlas en un solo archivo nuevo. Este flujo de trabajo de dos pasos te da un control granular sobre el resultado final.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Comprime antes de dividir para un procesamiento más rápido:</strong> Si estás trabajando con un PDF muy grande (cerca del límite de 50 MB), considera usar primero la herramienta <Link href="/compress-pdf" className="text-blue-600 hover:underline">Comprimir PDF</Link>. Los archivos más pequeños se procesan más rápido y son más fáciles de gestionar, especialmente en dispositivos móviles o conexiones lentas.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Conserva el original como respaldo:</strong> Siempre conserva el PDF original antes de dividirlo. De esta manera, si extraes accidentalmente las páginas equivocadas o necesitas páginas adicionales más adelante, puedes volver al archivo original sin pérdida de datos.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💡</span>
              <div><strong>Usa la sintaxis de rangos de páginas para extracciones complejas:</strong> PixelPDF admite una notación flexible de rangos de páginas. Puedes combinar páginas individuales y rangos en una sola expresión, por ejemplo, <code className="bg-white px-2 py-1 rounded">1-3, 5, 8-10, 15</code> extrae las páginas 1 a 3, la página 5, las páginas 8 a 10 y la página 15 de una sola vez. Esto ahorra tiempo en comparación con realizar múltiples divisiones por separado.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Hay un límite de tamaño de archivo para dividir PDFs?</summary>
            <p className="mt-3 text-gray-700">PixelPDF admite archivos PDF de hasta 50 MB. Dado que el procesamiento ocurre completamente en tu navegador, el límite práctico depende de la memoria disponible de tu dispositivo. La mayoría de los dispositivos modernos pueden manejar archivos de este tamaño sin problemas. Si tu PDF excede el límite, intenta comprimirlo primero usando nuestra herramienta <Link href="/compress-pdf" className="text-blue-600 hover:underline">Comprimir PDF</Link>.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Es seguro dividir PDFs online?</summary>
            <p className="mt-3 text-gray-700">Con PixelPDF, absolutamente. A diferencia de la mayoría de las herramientas online de PDF que cargan tus archivos en servidores remotos para su procesamiento, PixelPDF realiza todas las operaciones directamente en tu navegador utilizando JavaScript del lado del cliente. Tus documentos nunca salen de tu dispositivo, lo que significa que no existe riesgo de interceptación de datos, brechas de seguridad en servidores o acceso no autorizado. Esto hace que PixelPDF sea tan seguro como usar software de escritorio, pero sin la molestia de la instalación.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo dividir un PDF protegido con contraseña?</summary>
            <p className="mt-3 text-gray-700">Si el PDF está cifrado con una contraseña de propietario (que restringe operaciones como dividir, copiar o imprimir), primero necesitarás eliminar la contraseña. Puedes usar la herramienta <Link href="/pdf-decrypt" className="text-blue-600 hover:underline">Desencriptar PDF</Link> de PixelPDF para desbloquear el archivo y luego proceder con la división. Si el PDF tiene una contraseña de usuario (necesaria para abrir el archivo), deberás introducirla antes de que la herramienta pueda acceder al contenido.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo dividir un PDF en páginas individuales?</summary>
            <p className="mt-3 text-gray-700">Sí. PixelPDF ofrece un botón de atajo rápido llamado "Cada Página" que divide automáticamente cada página del PDF en su propio archivo independiente. Esto es especialmente útil para extraer páginas individuales de documentos escaneados, hojas de trabajo o formularios. Los archivos resultantes se empaquetan en un archivo ZIP para facilitar la descarga.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Dividir un PDF afecta la calidad del contenido?</summary>
            <p className="mt-3 text-gray-700">No. La división de PDF extrae copias exactas de las páginas originales sin ninguna recompresión, remuestreo o conversión de formato. El texto, las imágenes, las fuentes, los hipervínculos y el diseño de cada página extraída son idénticos al original. Los archivos divididos son copias exactas a nivel de bytes de las páginas correspondientes del documento fuente.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para Dividir tus Archivos PDF?</h2>
        <p className="mb-6 text-blue-100">Gratis, rápido y 100% privado: PixelPDF divide tus PDFs directamente en tu navegador</p>
        <Link
          href="/split-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Dividir PDF Gratis
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
