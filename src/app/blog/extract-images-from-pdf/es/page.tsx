import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo extraer imágenes de un PDF gratis online (guía 2026)',
  description: 'Aprenda cómo extraer imágenes de archivos PDF y guardarlas con buena calidad. Guía gratuita online para fotos, logos, gráficos y páginas escaneadas.',
  keywords: ['extraer imágenes de PDF gratis', 'guardar imágenes de PDF', 'extraer fotos de PDF online', 'exportar JPG desde PDF', 'imágenes dentro de PDF'],
  openGraph: {
    title: 'Cómo extraer imágenes de un PDF gratis online (guía 2026)',
    description: 'Aprenda cómo extraer imágenes de archivos PDF con un flujo claro desde el navegador.',
    type: 'article',
  },
};

export default function ExtractImagesFromPdfEsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Extraer imágenes de PDF</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo extraer imágenes de un PDF gratis online (guía 2026)
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>21 de junio de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.520 palabras</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Extraer imágenes de un PDF parece una tarea simple, pero en la práctica hay dos escenarios muy distintos. A veces el PDF contiene fotografías, logos o diagramas insertados como archivos independientes. En ese caso, usted puede exportarlos con buena calidad. Otras veces el PDF es solo un escaneo de páginas completas, y allí no existen imágenes separadas dentro del archivo. Lo que usted necesita entonces es convertir páginas a JPG o PNG y recortar la parte útil.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Entender esa diferencia le ahorra tiempo y evita el error clásico de usar capturas de pantalla borrosas. En esta guía verá cómo extraer imágenes de PDF online gratis, cuándo conviene la extracción directa, cuándo conviene la conversión de páginas y qué herramientas de PixelPDF le ayudan antes o después del proceso.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rápida: cómo extraer imágenes de un PDF</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>Revise el tipo de PDF.</strong> Si contiene imágenes incrustadas, la extracción directa es la mejor opción. Si es un PDF escaneado, piense en convertir páginas.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>Procese solo lo necesario.</strong> Limite el trabajo a las páginas que de verdad contienen las imágenes que usted quiere guardar.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>Prepare el siguiente paso.</strong> Después puede usar <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link>, <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link> o <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> según su objetivo.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">La diferencia entre extraer y convertir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mucha gente usa “extraer imágenes de PDF” para referirse a cualquier forma de sacar una imagen del documento. Pero no todo es extracción real. Extraer significa tomar los archivos visuales guardados dentro del PDF. Convertir significa transformar una página entera en una imagen nueva. Son dos cosas diferentes y el resultado no tiene la misma calidad.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si el PDF fue creado desde una presentación, un catálogo digital o un diseño profesional, suele contener imágenes incrustadas. Allí usted puede conservar bastante bien la calidad original. Si el archivo proviene de un escáner o de una foto tomada con móvil, lo más probable es que toda la página sea una sola imagen. En ese caso, la conversión de páginas es el camino lógico.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Caso</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Método recomendado</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Resultado esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Catálogo digital con fotos insertadas</td>
                <td className="border border-gray-300 px-4 py-3">Extracción directa</td>
                <td className="border border-gray-300 px-4 py-3">Archivos cercanos a la calidad original</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">PDF escaneado de folleto o informe</td>
                <td className="border border-gray-300 px-4 py-3">Conversión de páginas a imagen</td>
                <td className="border border-gray-300 px-4 py-3">Imágenes de página completa para recortar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">PDF con mezcla de fotos, iconos y gráficos</td>
                <td className="border border-gray-300 px-4 py-3">Revisión mixta</td>
                <td className="border border-gray-300 px-4 py-3">Algunas piezas se exportan, otras se convierten</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Una prueba rápida sirve mucho: acerque el zoom a una foto dentro del PDF. Si toda la página se comporta como una única imagen, trátela como un escaneo. Si el documento parece construido por capas, vale la pena intentar extracción directa.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso a paso para extraer imágenes de PDF online</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Aísle las páginas importantes</h3>
              <p className="text-gray-700 leading-relaxed">Si el documento es largo, use <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> para quedarse solo con las páginas que contienen fotos, diagramas o logos útiles. Así trabaja más rápido y evita exportaciones innecesarias.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Elija extracción directa o conversión de página</h3>
              <p className="text-gray-700 leading-relaxed">Para fotos incrustadas, logos o ilustraciones digitales, la extracción directa suele dar el mejor resultado. Para PDFs escaneados, use <Link href="/pdf-to-jpg" className="text-blue-600 hover:underline font-medium">PDF to JPG</Link> y luego recorte la parte exacta que necesita.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Revise formato y nitidez</h3>
              <p className="text-gray-700 leading-relaxed">Compruebe si las imágenes salen como JPG o PNG y si conservan suficiente detalle. Si su intención es reutilizarlas en una web, una presentación o un documento comercial, revise siempre la calidad a tamaño real.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Organice los nombres de archivo</h3>
              <p className="text-gray-700 leading-relaxed">Si exporta muchas imágenes, nómbrelas por página, sección o contenido. Eso evita perder tiempo después cuando tenga que montar un informe, un catálogo o una propuesta comercial.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Reconstruya un PDF solo si hace falta</h3>
              <p className="text-gray-700 leading-relaxed">Si quiere crear un nuevo PDF formado solo por imágenes, use <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Image to PDF</Link>. Si solo necesita las imágenes por separado, es mejor dejarlas así.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Casos comunes y mejor enfoque</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          El mejor método cambia según el uso final. No es lo mismo sacar fotos de un catálogo que rescatar gráficos de apuntes escaneados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Fotos de productos</h3>
            <p className="text-gray-700 text-sm">Pruebe primero la extracción directa. Si las fotos están incrustadas, usted puede obtener mejor calidad que con una captura.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Folletos o apuntes escaneados</h3>
            <p className="text-gray-700 text-sm">La conversión de página suele ser más honesta. Después usted recorta solo la figura o imagen necesaria.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Gráficos para presentaciones</h3>
            <p className="text-gray-700 text-sm">Si el gráfico forma parte de la maquetación de la página, convertir a PNG puede ser más práctico que forzar una extracción.</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Logos, firmas y sellos</h3>
            <p className="text-gray-700 text-sm">Aquí la nitidez importa mucho. Trabaje desde el PDF original y compare el resultado al 100% de zoom.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo evitar pérdida de calidad</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          El error más común es reducir la calidad antes de tiempo. Si comprime el PDF demasiado pronto y después intenta sacar imágenes, el daño ya está hecho. Si su prioridad es reutilizar fotos o gráficos, extraiga primero y haga copias ligeras después.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Guarde siempre una copia original sin tocar</li>
          <li>Evite capturas de pantalla salvo como último recurso</li>
          <li>Revise cada imagen exportada a tamaño completo</li>
          <li>Comprima después solo las copias para correo o mensajería</li>
          <li>Si el escaneo original es borroso, la extracción no inventará detalle nuevo</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Dicho de forma simple: primero conserve la mejor versión posible, luego piense en el tamaño del archivo. Ese orden le evita repetir el trabajo.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cuándo conviene usar otra herramienta antes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hay PDFs que no están listos para la extracción de imágenes. Algunos están dañados, otros son demasiado pesados, y otros incluyen muchas páginas inútiles. En esos casos conviene ordenar el archivo primero.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Use <Link href="/blog/repair-corrupted-pdf-online" className="text-blue-600 hover:underline font-medium">la guía de reparación</Link> si el PDF se abre mal</li>
          <li>Use <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> para quedarse solo con las páginas útiles</li>
          <li>Consulte <Link href="/blog/compress-scanned-pdf-online" className="text-blue-600 hover:underline font-medium">la guía de compresión para escaneos</Link> si el archivo es demasiado pesado</li>
          <li>Revise <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">la guía OCR</Link> si además necesita texto del mismo documento</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Un flujo limpio siempre gana. Si usted arregla primero el problema principal del PDF, la extracción de imágenes será más rápida y más fiable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo extraer imágenes de un PDF online gratis?</summary>
            <p className="mt-3 text-gray-700">Sí. En muchos PDFs digitales se puede hacer desde el navegador sin instalar software. Lo importante es elegir el método correcto según el tipo de archivo.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Las imágenes conservan la calidad original?</summary>
            <p className="mt-3 text-gray-700">Con frecuencia sí, cuando el PDF contiene imágenes incrustadas. En un PDF escaneado, la calidad queda limitada por el propio escaneo.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuál es la diferencia entre extraer y convertir?</summary>
            <p className="mt-3 text-gray-700">Extraer toma archivos visuales dentro del PDF. Convertir crea una imagen nueva a partir de la página completa. Si existen imágenes originales, extraer suele ser mejor.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo guardar solo una imagen?</summary>
            <p className="mt-3 text-gray-700">Sí. Si la extracción no permite elegir bien, primero separe la página o conviértala a imagen y recorte solo la zona que necesita.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Necesita páginas completas como imagen?</h2>
        <p className="mb-6 text-blue-100">Si su PDF es en realidad un escaneo de páginas enteras, convertir primero a JPG suele ser el camino más rápido.</p>
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
