import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo reordenar páginas de un PDF gratis en línea (2026)',
  description: 'Aprenda cómo reordenar páginas de un PDF gratis en línea. Organice el documento correctamente antes de compartirlo, imprimirlo o firmarlo.',
  keywords: ['reordenar páginas PDF gratis', 'cambiar orden páginas PDF online', 'mover páginas PDF', 'organizar PDF online', 'ordenar páginas PDF'],
  openGraph: {
    title: 'Cómo reordenar páginas de un PDF gratis en línea (2026)',
    description: 'Guía práctica para reorganizar páginas PDF en línea sin reconstruir el archivo desde cero.',
    type: 'article',
  },
};

export default function PdfPageReorderEsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/es" className="hover:text-blue-600">Home</Link> / <Link href="/es/blog" className="hover:text-blue-600">Blog</Link> / <span>Reordenar páginas PDF</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cómo reordenar páginas de un PDF gratis en línea (2026)</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>19 de junio de 2026</span><span className="mx-2">•</span><span>10 min de lectura</span><span className="mx-2">•</span><span>~1.430 palabras</span>
        </div>
      </header>

      <section className="mb-10 text-gray-700 leading-relaxed space-y-4">
        <p>Cuando un PDF está en el orden incorrecto, el problema no siempre es el contenido. Muchas veces todas las páginas están ahí, pero el flujo de lectura se rompe. Un anexo aparece antes del resumen, las páginas escaneadas salen en el orden equivocado o un paquete de solicitud no sigue la secuencia exigida por el portal. En esos casos, no hace falta rehacer el documento. Hace falta reorganizarlo bien.</p>
        <p>La forma más segura es trabajar con una copia, mover las páginas desde la vista de miniaturas y revisar una vez más antes de exportar. En esta guía verá cómo reordenar páginas de un PDF gratis en línea, qué errores conviene evitar y cuándo tiene sentido combinar este trabajo con <Link href="/merge-pdf/" className="text-blue-600 hover:underline font-medium">Unir PDF</Link>, <Link href="/split-pdf/" className="text-blue-600 hover:underline font-medium">Dividir PDF</Link> o <Link href="/compress-pdf/" className="text-blue-600 hover:underline font-medium">Comprimir PDF</Link>.</p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rápida: cómo cambiar el orden de páginas PDF</h2>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>Haga primero una copia de trabajo del archivo.</li>
          <li>Revise las miniaturas para entender el flujo real del documento.</li>
          <li>Mueva páginas relacionadas como bloques lógicos, no al azar.</li>
          <li>Confirme números de página, referencias y orientación antes de guardar.</li>
        </ol>
      </section>

      <section className="mb-10 text-gray-700 leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cuándo conviene reordenar y no reconstruir</h2>
        <p>Si el contenido sigue siendo correcto y solo falla la secuencia, reordenar es la opción más eficiente. Usted conserva el diseño, los márgenes, las imágenes y la estructura visual, pero mejora la experiencia de lectura.</p>
        <p>Esto ocurre mucho con escaneos de varias páginas, informes mezclados entre departamentos, expedientes de visa, licitaciones, formularios y paquetes documentales donde el orden importa tanto como el contenido. Si además debe eliminar páginas, insertar material nuevo o corregir numeración impresa, entonces reordenar será solo una parte del trabajo.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso a paso para reorganizar páginas PDF sin errores</h2>
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Trabaje siempre sobre una copia</h3>
            <p>No conviene tocar el único original, sobre todo si se trata de contratos, expedientes o archivos ya aprobados. Una copia le permite comparar y volver atrás si algo no queda bien.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. Use miniaturas, no solo números</h3>
            <p>La vista de miniaturas ayuda a detectar cubiertas, anexos, páginas horizontales y hojas escaneadas más rápido que los números solos. Si encuentra páginas giradas, corríjalas antes con <Link href="/rotate-pdf/" className="text-blue-600 hover:underline font-medium">Rotar PDF</Link>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. Mueva secciones completas cuando tenga sentido</h3>
            <p>Es mejor pensar en bloques como portada, resumen, anexos o firmas. Así el documento mantiene lógica para quien lo va a leer, no solo para quien lo edita.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. Revise referencias internas antes de exportar</h3>
            <p>Si el documento dice “ver página 10” y la nueva página 10 ahora contiene otra cosa, el archivo sigue siendo problemático. Revise índices, referencias visibles y saltos de sección.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">5. Comprima o divida solo al final</h3>
            <p>Cuando el orden ya sea definitivo, puede reducir el tamaño con <Link href="/compress-pdf/" className="text-blue-600 hover:underline font-medium">Comprimir PDF</Link> para enviarlo por correo o subirlo a un portal. Si sigue siendo demasiado pesado, consulte <Link href="/blog/split-pdf-large-file-workflow" className="text-blue-600 hover:underline font-medium">esta guía para dividir PDFs grandes</Link>.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Errores frecuentes al reordenar páginas PDF</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong className="text-gray-900">Arrastrar demasiado rápido:</strong> una página queda una posición antes o después y la secuencia se rompe.</li>
          <li><strong className="text-gray-900">Ignorar la numeración visible:</strong> el orden parece correcto, pero el documento sigue diciendo otra cosa.</li>
          <li><strong className="text-gray-900">Modificar la versión firmada:</strong> lo correcto suele ser ordenar la copia de trabajo y firmar después.</li>
          <li><strong className="text-gray-900">Mezclar archivos sin plan:</strong> si va a unir varios documentos, primero defina la lógica y luego use <Link href="/merge-pdf/" className="text-blue-600 hover:underline font-medium">Unir PDF</Link>.</li>
        </ul>
      </section>

      <section className="mb-10 text-gray-700 leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejor flujo según el tipo de documento</h2>
        <p>En documentos escaneados conviene ordenar primero y aplicar OCR después, para que la capa de texto coincida con la secuencia final. Si necesita ese paso, revise <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">la guía de OCR para PDFs escaneados</Link>.</p>
        <p>En informes creados por varios equipos, suele funcionar mejor unir primero todos los archivos y ordenar luego según lógica de lectura: resumen, desarrollo, anexos. En paquetes formales, como solicitudes o expedientes regulatorios, el criterio correcto es el orden exigido por la institución, no el que parezca más cómodo.</p>
      </section>

      <section className="mb-10 text-gray-700 leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Impacto en numeración, marcadores y firmas</h2>
        <p>Reordenar páginas no cambia el texto o las imágenes dentro de cada hoja, pero sí puede afectar números impresos, índices, marcadores y ubicaciones lógicas de firma. Por eso la revisión final es obligatoria.</p>
        <p>Si después de reorganizar necesita renumerar el PDF, puede apoyarse en <Link href="/blog/add-page-numbers-to-pdf-online" className="text-blue-600 hover:underline font-medium">nuestra guía para agregar números de página</Link>. Antes de compartir el archivo, también conviene pasar por <Link href="/blog/pdf-final-review-workflow-guide" className="text-blue-600 hover:underline font-medium">el flujo de revisión final de PDF</Link>.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4 text-gray-700">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Se pueden reordenar páginas PDF gratis en línea?</summary>
            <p className="mt-3">Sí. En la mayoría de los casos basta con una herramienta web para mover páginas y exportar la nueva versión sin instalar software.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Reordenar cambia el contenido?</summary>
            <p className="mt-3">No cambia el contenido de cada página. Solo cambia la secuencia. Lo que sí debe revisar son números de página, referencias y marcadores.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Conviene unir primero o reordenar primero?</summary>
            <p className="mt-3">Si el documento final reúne varios archivos, normalmente conviene unir primero y reorganizar después en un solo flujo.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Funciona también con PDF escaneados?</summary>
            <p className="mt-3">Sí. La vista en miniaturas es muy útil con escaneos. Si además quiere texto buscable, aplique OCR cuando el orden final ya esté resuelto.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Quiere organizar su PDF ahora mismo?</h2>
        <p className="mb-6 text-blue-100">Primero ponga el documento en orden y después optimice tamaño, rotación o combinación si hace falta.</p>
        <Link href="/merge-pdf/" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Empezar a organizar el PDF</Link>
      </section>
    </article>
  );
}
