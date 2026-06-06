import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo hacer OCR a un PDF escaneado gratis online (2026)',
  description: 'Aprenda cómo convertir un PDF escaneado en texto editable y buscable con OCR gratis online. Guía paso a paso sin registro.',
  keywords: ['OCR PDF escaneado gratis', 'convertir PDF escaneado a texto', 'OCR PDF online gratis', 'extraer texto de PDF escaneado', 'PDF imagen OCR'],
  openGraph: {
    title: 'Cómo hacer OCR a un PDF escaneado gratis online (2026)',
    description: 'Guía práctica para extraer texto de un PDF escaneado usando OCR online.',
    type: 'article',
  },
};

export default function OcrPdfScannedDocumentsEsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/es">Home</Link> / <Link href="/blog">Blog</Link> / <span>OCR para PDF escaneado</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo hacer OCR a un PDF escaneado gratis online (2026)
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>6 de junio de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.430 palabras</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Si Usted abre un PDF escaneado y no puede seleccionar, copiar ni buscar texto, ese archivo probablemente no contiene texto real. Lo que contiene son imágenes de cada página dentro de un contenedor PDF. Por eso hace falta OCR. OCR significa reconocimiento óptico de caracteres y sirve para identificar letras dentro de una imagen y convertirlas en texto utilizable.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Después del OCR, un contrato escaneado, una factura, un informe o unos apuntes impresos pasan a ser mucho más útiles. Usted puede buscar palabras, copiar fragmentos, archivar mejor sus documentos y, en muchos casos, seguir editando el contenido en otro formato. En esta guía verá cómo hacer OCR a un PDF escaneado online gratis, cómo mejorar la precisión y qué hacer cuando el resultado no queda perfecto.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rápida: cómo hacer OCR a un PDF escaneado</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>Compruebe si el archivo es realmente escaneado.</strong> Si el texto no se puede seleccionar, necesita OCR.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>Prepare el PDF antes del OCR.</strong> Corrija páginas giradas con <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> y reduzca archivos excesivos con <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>Ejecute el OCR y exporte según su objetivo.</strong> Para búsqueda basta un PDF con capa de texto; para edición conviene Word o texto plano.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué hace el OCR en un PDF escaneado</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un PDF escaneado suele estar compuesto por imágenes y no por caracteres reales. El OCR analiza esas imágenes, detecta letras, números, signos y bloques de texto, y luego reconstruye el contenido como texto legible por una máquina. Algunas herramientas añaden una capa de texto oculta detrás de la imagen original. Otras exportan el resultado directamente a un formato editable.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Esa diferencia importa. Si Usted necesita conservar el aspecto visual del documento, lo mejor suele ser un PDF buscable con capa de texto. Si necesita modificar párrafos o reutilizar el contenido, normalmente es mejor exportar a Word o texto. Si solo algunas páginas están mal, conviene separarlas antes con <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> y tratarlas por separado.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Situaciones comunes donde el OCR ayuda</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Extraer texto de facturas, recibos y formularios escaneados</li>
            <li>Buscar palabras en contratos antiguos y archivos históricos</li>
            <li>Copiar contenido de apuntes, guías y material impreso</li>
            <li>Preparar PDFs de imagen para traducción o resumen</li>
            <li>Mejorar la accesibilidad y el orden en archivos documentales</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso a paso para hacer OCR gratis online</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Verifique que el PDF necesite OCR</h3>
              <p className="text-gray-700 leading-relaxed">Intente seleccionar una frase del documento. Si no puede marcar palabras individuales y la página se comporta como una imagen, el archivo es candidato claro para OCR. Esta comprobación evita trabajo innecesario con PDFs ya digitales.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Mejore el archivo antes de reconocer texto</h3>
              <p className="text-gray-700 leading-relaxed">La precisión del OCR depende mucho de la calidad de entrada. Si las páginas están torcidas, corríjalas con <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link>. Si el archivo pesa demasiado por imágenes enormes, reduzca el tamaño con <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> sin sacrificar demasiado la legibilidad. Para revisar página por página, puede convertir con <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link>.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Seleccione bien el idioma del documento</h3>
              <p className="text-gray-700 leading-relaxed">Si la herramienta OCR permite elegir idioma, hágalo correctamente. Esto mejora el reconocimiento de acentos, signos especiales, nombres propios y vocabulario técnico. Es especialmente importante cuando el documento no está en inglés o mezcla varios idiomas.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Revise el resultado con cuidado</h3>
              <p className="text-gray-700 leading-relaxed">Cuando termine el OCR, compare el texto obtenido con el original, sobre todo en nombres, importes, fechas, referencias y cláusulas. El OCR acelera mucho el trabajo, pero no sustituye la revisión humana en los puntos críticos.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Exporte en el formato adecuado</h3>
              <p className="text-gray-700 leading-relaxed">Si solo necesita buscar o copiar, un PDF buscable suele bastar. Si va a editar el contenido, Word o texto son más prácticos. Si luego necesita unir el resultado con otros archivos, puede terminar el proceso con <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo mejorar la precisión del OCR</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          El mejor OCR empieza con páginas limpias. Un escaneo recto, con buen contraste y alrededor de 300 DPI suele rendir mucho mejor que una foto de móvil tomada en diagonal o con sombras. El tamaño grande del archivo no garantiza mejor resultado. Lo importante es que las letras se vean claras.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Problema</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Qué ocurre</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mejor solución</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Páginas giradas</td>
                <td className="border border-gray-300 px-4 py-3">El OCR entiende mal los bloques</td>
                <td className="border border-gray-300 px-4 py-3">Corregir la rotación antes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Poco contraste</td>
                <td className="border border-gray-300 px-4 py-3">Desaparecen o se mezclan letras</td>
                <td className="border border-gray-300 px-4 py-3">Usar un escaneo más nítido</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Sombras de cámara</td>
                <td className="border border-gray-300 px-4 py-3">Aparecen caracteres falsos</td>
                <td className="border border-gray-300 px-4 py-3">Volver a capturar o recortar mejor</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Texto demasiado pequeño</td>
                <td className="border border-gray-300 px-4 py-3">Se pierden detalles</td>
                <td className="border border-gray-300 px-4 py-3">Aumentar resolución</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Si Usted trabaja a menudo con archivos escaneados, conviene adoptar una rutina: enderezar páginas, eliminar hojas vacías, separar bloques problemáticos y solo después ejecutar OCR. Ahorrará mucho tiempo en correcciones.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cuándo el OCR no basta por sí solo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          El OCR resuelve el problema del texto, pero no siempre conserva bien formularios, tablas estrechas, sellos, firmas o notas manuscritas. En esos casos funciona mejor un flujo mixto: usar OCR para capturar texto y luego apoyarse en otras herramientas PDF para limpiar o reconstruir el documento final.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Use <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> para aislar páginas difíciles</li>
          <li>Use <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link> si necesita revisar las páginas como imágenes</li>
          <li>Use <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link> para reconstruir páginas ya corregidas</li>
          <li>Consulte nuestra guía sobre <Link href="/blog/edit-scanned-pdf" className="text-blue-600 hover:underline font-medium">cómo editar un PDF escaneado</Link> si necesita cambios visuales</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Dicho de forma simple: el OCR arregla el problema de lectura del texto. No arregla automáticamente todos los problemas del documento.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Casos de uso más útiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Administración y empresa</h3>
            <p className="text-gray-700 text-sm">Buscar rápido en facturas, expedientes, contratos e informes.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Estudios e investigación</h3>
            <p className="text-gray-700 text-sm">Copiar citas y localizar conceptos en material escaneado.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Ámbito legal y cumplimiento</h3>
            <p className="text-gray-700 text-sm">Encontrar cláusulas, fechas y nombres en archivos antiguos.</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Documentos personales</h3>
            <p className="text-gray-700 text-sm">Organizar pólizas, recibos, manuales y papeles importantes.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Se puede hacer OCR a un PDF escaneado gratis online?</summary>
            <p className="mt-3 text-gray-700">Sí. Para muchos documentos estándar, un flujo online gratuito es suficiente. Lo más importante es preparar bien el archivo antes del reconocimiento.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿El PDF queda totalmente editable después?</summary>
            <p className="mt-3 text-gray-700">El texto puede quedar editable, pero el diseño no siempre. Tablas, formularios y elementos visuales a menudo requieren correcciones manuales.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Qué calidad de escaneo conviene para OCR?</summary>
            <p className="mt-3 text-gray-700">Un escaneo recto, claro y con unos 300 DPI es una base muy buena para obtener resultados fiables.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿El OCR reconoce escritura a mano?</summary>
            <p className="mt-3 text-gray-700">A veces, pero con mucha menos precisión que el texto impreso. La escritura a mano sigue siendo un caso difícil.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Quiere preparar su PDF antes del OCR?</h2>
        <p className="mb-6 text-blue-100">Corrija la rotación, reduzca tamaño, separe páginas o conviértalas en imágenes antes de reconocer texto.</p>
        <Link
          href="/pdf-to-jpg"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Empezar con PDF to JPG
        </Link>
      </section>
    </article>
  );
}
