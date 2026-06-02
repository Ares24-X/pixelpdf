// Make PDF Smaller for Email - Spanish Translation
// Path: /src/app/blog/make-pdf-smaller-for-email/es/page.tsx
// Date: 2026-06-02

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Hacer un PDF Más Pequeño para Enviar por Email (2026)',
  description: 'Aprende cómo hacer un archivo PDF más pequeño para enviarlo por email con 4 métodos probados. Reduce el tamaño del PDF para Gmail, Outlook, Yahoo e iCloud con guías paso a paso.',
  keywords: ['cómo hacer un PDF más pequeño para email', 'reducir tamaño PDF para email', 'comprimir PDF para email', 'PDF demasiado grande para email', 'límite de tamaño adjunto email'],
  openGraph: {
    title: 'Cómo Hacer un PDF Más Pequeño para Enviar por Email (2026)',
    description: 'Aprende cómo hacer un archivo PDF más pequeño para enviarlo por email con 4 métodos probados. Reduce el tamaño del PDF para Gmail, Outlook, Yahoo e iCloud.',
    type: 'article',
  },
};

export default function MakePdfSmallerForEmailEs() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Hacer PDF Más Pequeño para Email</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Hacer un PDF Más Pequeño para Enviar por Email (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>2 de junio de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.400 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Acabas de terminar un documento importante, le das a &quot;Adjuntar&quot;, y tu proveedor de email lo rechaza porque el archivo es demasiado grande. Esta es una de las frustraciones más comunes que enfrentan los profesionales todos los días. Ya sea que uses Gmail, Outlook, Yahoo o iCloud, cada proveedor de email aplica límites de tamaño de adjuntos, y los PDFs llenos de imágenes, escaneos o gráficos suelen superarlos. La buena noticia es que aprender cómo hacer un PDF más pequeño para enviarlo por email es sencillo una vez que conoces los métodos adecuados. En esta guía, te mostraremos cuatro técnicas probadas para reducir tus PDFs de forma rápida y fiable, para que puedas enviar tus documentos sin demoras.
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta Rápida: Cómo Hacer un PDF Más Pequeño para Email en 3 Pasos</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Sube tu PDF</strong> a la <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">herramienta Comprimir PDF</Link> de PixelPDF: arrastra y suelta o haz clic para buscar tus archivos</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Elige un nivel de compresión</strong>: &quot;Medio&quot; funciona mejor para la mayoría de los adjuntos de email, reduciendo el tamaño entre un 40-60%</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Descarga el PDF comprimido</strong> y adjúntalo a tu email: verifica que esté por debajo del límite de tu proveedor antes de enviarlo</p>
          </div>
        </div>
      </section>

      {/* Email Attachment Size Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Límites de Tamaño de Adjuntos por Email que Debes Conocer</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Antes de empezar a reducir tu PDF, es útil entender los límites exactos que aplica cada proveedor de email principal. Ten en cuenta que la codificación del email añade aproximadamente un 33% al tamaño del archivo durante la transmisión (codificación Base64), por lo que un archivo de 19MB en tu computadora puede superar un límite de 25MB una vez adjuntado.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Proveedor de Email</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Límite de Adjunto</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Tamaño Seguro Recomendado</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18-20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Sugiere Google Drive para archivos más grandes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook / Hotmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14-15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">El límite más estricto entre los principales proveedores</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">18-20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Mismo límite que Gmail</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-medium">14-15 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">Aplica a direcciones @icloud.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          La columna &quot;Tamaño Seguro Recomendado&quot; tiene en cuenta el sobrecosto de la codificación Base64. Si mantienes tu PDF por debajo de ese tamaño, se adjuntará correctamente sin importar qué proveedor uses.
        </p>
      </section>

      {/* Method 1 - Compress PDF Online */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Método 1: Comprimir PDF en Línea (El Más Rápido)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La compresión en línea es la forma más rápida de hacer un PDF más pequeño para email. La <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">herramienta Comprimir PDF</Link> de PixelPDF procesa todo en tu navegador: tu archivo nunca se sube a un servidor, por lo que los documentos sensibles permanecen privados.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Guía Paso a Paso</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Abre la Herramienta Comprimir PDF</h4>
              <p className="text-gray-700">Navega a la página Comprimir PDF de PixelPDF en cualquier navegador. No se requiere registro ni instalación de software.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Sube tu PDF</h4>
              <p className="text-gray-700">Arrastra y suelta tu archivo en el área de carga, o haz clic en &quot;Examinar&quot; para seleccionarlo desde tu computadora. La herramienta admite archivos de hasta 50MB.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Selecciona el Nivel de Compresión</h4>
              <p className="text-gray-700">Elige &quot;Medio&quot; para un equilibrio entre calidad y reducción de tamaño (típicamente 40-60% más pequeño). Si tu archivo supera ampliamente el límite, la compresión &quot;Alta&quot; puede reducirlo hasta un 80%.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Descarga el Archivo Comprimido</h4>
              <p className="text-gray-700">La herramienta muestra los tamaños antes y después. Confirma que el nuevo archivo está por debajo del límite de tu proveedor de email, luego descárgalo y adjúntalo.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparación Antes y Después</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipo de Documento</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Tamaño Original</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Tamaño Comprimido</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Reducción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Propuesta de cliente con fotos (30 páginas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Historial médico escaneado (80 páginas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">52 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Folleto de marketing (20 páginas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">27 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Contrato legal con firmas (15 páginas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 - Reduce Image Quality Inside PDF */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Método 2: Reducir la Calidad de Imágenes Dentro del PDF</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si tu PDF contiene fotografías o gráficos de alta resolución, las imágenes son probablemente la razón principal de que el archivo sea tan grande. La mayoría de los PDFs incluyen imágenes guardadas en calidad de impresión (300 DPI), lo cual es innecesario para visualización en pantalla o para compartir por email. Reducir la resolución de las imágenes a 150 DPI o 72 DPI puede reducir drásticamente el tamaño del archivo.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cómo Reducir la Calidad de las Imágenes</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>Usa la herramienta Comprimir PDF</strong> con compresión &quot;Alta&quot;: esto reduce automáticamente la resolución de las imágenes integradas a resoluciones aptas para pantalla</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>Comprime las imágenes primero</strong>: si estás creando el PDF tú mismo, redimensiona las imágenes a 1200px de ancho (o menos) antes de insertarlas. Herramientas como TinyPNG o Squoosh pueden comprimir imágenes individuales entre un 60-80%</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700"><strong>Elimina imágenes innecesarias</strong>: revisa tu PDF y elimina cualquier imagen decorativa, logos duplicados o fondos de página completa que no aporten valor</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700"><strong>Guarda de nuevo como PDF</strong>: después de optimizar las imágenes, vuelve a exportar o guardar el documento para asegurarte de que los tamaños reducidos se reflejen en el archivo final</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Este método es especialmente efectivo para PDFs creados con software de diseño como Adobe Illustrator o Canva, donde la configuración de exportación suele tener como predeterminada la calidad máxima. Para documentos escaneados, la herramienta Comprimir PDF maneja la reducción de resolución automáticamente.
        </p>
      </section>

      {/* Method 3 - Split PDF into Smaller Parts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Método 3: Dividir el PDF en Partes Más Pequeñas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A veces un solo PDF simplemente es demasiado grande para comprimirlo por debajo del límite de email sin una pérdida de calidad inaceptable. Esto es común con informes de más de 200 páginas, catálogos a todo color o documentos que contienen decenas de escaneos de alta resolución. En estos casos, dividir el PDF en secciones más pequeñas y organizadas lógicamente es la mejor opción.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cómo Dividir y Enviar por Email</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Abre la <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">herramienta Dividir PDF</Link> de PixelPDF y sube tu documento grande</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Especifica los rangos de páginas para cada parte: por ejemplo, páginas 1-50 como Parte 1, páginas 51-100 como Parte 2, y así sucesivamente</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Comprime cada parte individualmente usando la herramienta Comprimir PDF si es necesario</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Envía emails separados con asuntos claros como &quot;Informe Financiero Q3 - Parte 1 de 3&quot; para que el destinatario conozca el orden</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Este método funciona bien para documentos con múltiples capítulos donde cada sección es independiente. También le da a los destinatarios la flexibilidad de descargar solo las partes que necesitan.
        </p>
      </section>

      {/* Method 4 - Convert PDF to ZIP */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Método 4: Convertir PDF a ZIP</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Comprimir un PDF en formato ZIP puede ofrecer reducciones de tamaño modestas, típicamente del 10-30%, dependiendo del contenido. Los PDFs con mucho texto se comprimen bien porque los datos de texto son repetitivos y compresibles. Sin embargo, los PDFs que ya están comprimidos internamente (como la mayoría de los PDFs modernos) verán un beneficio mínimo con la compresión ZIP.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cuándo Usar la Compresión ZIP</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Tu PDF está solo ligeramente por encima del límite de email (por ejemplo, 22MB para un límite de 25MB)</li>
          <li>El PDF tiene principalmente texto con pocas imágenes</li>
          <li>Necesitas adjuntar múltiples archivos y quieres agruparlos</li>
          <li>El destinatario prefiere recibir un solo archivo comprimido</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cómo Crear un ZIP de un PDF</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700"><strong>En Windows:</strong> Haz clic derecho en el PDF, selecciona &quot;Enviar a&quot; y luego &quot;Carpeta comprimida (zip)&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700"><strong>En Mac:</strong> Haz clic derecho en el PDF, elige &quot;Comprimir [nombre del archivo]&quot; en el menú contextual</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Adjunta el archivo .zip resultante a tu email en lugar del PDF original</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-700"><strong>Importante:</strong> Algunos proveedores de email y firewalls corporativos bloquean los archivos .zip por razones de seguridad. Si tu destinatario no puede abrir el archivo ZIP, usa el Método 1 (compresión en línea) en su lugar.</p>
        </div>
      </section>

      {/* Email-Specific Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Consejos para Enviar PDFs por Email</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Siempre verifica el tamaño codificado, no el tamaño del archivo</h4>
              <p className="text-gray-700">La codificación del email aumenta el tamaño del archivo aproximadamente un 33%. Un PDF de 20MB se convierte en unos 26,6MB al adjuntarlo. Mantén tu PDF por debajo del &quot;Tamaño Seguro&quot; listado en la tabla anterior.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Comprime antes de adjuntar, no después</h4>
              <p className="text-gray-700">Algunas personas intentan adjuntar un archivo grande y dejar que el cliente de email lo maneje. Esto pierde tiempo y a menudo falla. Comprime el PDF primero, luego adjunta la versión más pequeña.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Usa nombres de archivo descriptivos</h4>
              <p className="text-gray-700">Nombra tu archivo comprimido claramente (por ejemplo, &quot;Informe-Q3-FINAL-comprimido.pdf&quot;) para que el destinatario sepa qué está recibiendo y que ha sido optimizado.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Considera enlaces en la nube para archivos muy grandes</h4>
              <p className="text-gray-700">Si tu PDF no se puede comprimir por debajo del límite, usa Google Drive, Dropbox o OneDrive para compartir un enlace de descarga en lugar de adjuntar el archivo directamente.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Vista previa antes de enviar</h4>
              <p className="text-gray-700">Siempre abre tu PDF comprimido y recórrelo para verificar que el texto sea legible y que las imágenes sean lo suficientemente claras para su propósito antes de adjuntarlo a un email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuánto puedo reducir el tamaño de un PDF para email?</summary>
            <p className="mt-3 text-gray-700">
              La mayoría de los PDFs se pueden reducir entre un 40-80% usando herramientas de compresión en línea. Los documentos con mucho texto suelen ver una reducción del 50-70%, mientras que los PDFs con muchas imágenes se pueden reducir entre un 60-80% con compresión alta. La reducción exacta depende del contenido original y del nivel de compresión que elijas.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Comprimir mi PDF lo hará borroso o ilegible?</summary>
            <p className="mt-3 text-gray-700">
              Con compresión &quot;Media&quot;, el texto se mantiene perfectamente nítido y las imágenes conservan buena calidad para visualización en pantalla. La compresión &quot;Alta&quot; puede introducir una ligera suavidad en las fotos, pero el texto sigue siendo completamente legible. Siempre previsualiza el archivo comprimido antes de enviarlo para asegurarte de que cumpla con tus estándares.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Por qué Gmail rechaza mi PDF de 19MB?</summary>
            <p className="mt-3 text-gray-700">
              El límite de 25MB de Gmail se aplica al tamaño codificado, no al tamaño del archivo original. Los protocolos de email usan codificación Base64, que aumenta el tamaño del archivo aproximadamente un 33%. Un archivo de 19MB se convierte en unos 25,3MB al codificarse, lo cual supera el límite. Mantén tu PDF por debajo de 18MB para estar seguro.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo comprimir un PDF en mi teléfono antes de enviarlo por email?</summary>
            <p className="mt-3 text-gray-700">
              Sí. La herramienta Comprimir PDF de PixelPDF funciona en cualquier dispositivo con navegador. Abre Safari o Chrome en tu teléfono, sube el PDF, comprímelo, descarga el archivo más pequeño y luego adjúntalo desde tu aplicación de email. Todo el proceso toma menos de un minuto.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Es seguro comprimir PDFs que contienen información confidencial?</summary>
            <p className="mt-3 text-gray-700">
              PixelPDF procesa toda la compresión en tu navegador usando tecnología del lado del cliente. Tu archivo nunca se sube a ningún servidor. Esto lo hace seguro para contratos, estados financieros, historiales médicos y cualquier otro documento confidencial.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para Hacer tu PDF Más Pequeño para Email?</h2>
        <p className="mb-6 text-blue-100">Comprime tu PDF en segundos: gratis, privado y sin registro</p>
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
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="font-medium">Comprimir PDF</div>
          </Link>
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">✂️</div>
            <div className="font-medium">Dividir PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">Unir PDF</div>
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
