import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo convertir PDF a PDF/A para archivado (Guía gratis en línea)',
  description: 'Aprenda cómo convertir un PDF normal al formato PDF/A para archivado a largo plazo. Incluye pasos, versiones y errores comunes.',
  keywords: ['convertir PDF a PDF/A online', 'PDF/A gratis', 'archivar PDF', 'formato PDF/A', 'guardar PDF a largo plazo'],
  openGraph: {
    title: 'Cómo convertir PDF a PDF/A para archivado (Guía gratis en línea)',
    description: 'Aprenda cómo convertir un PDF normal al formato PDF/A para archivado a largo plazo.',
    type: 'article',
  },
};

export default function PdfToPdfAConverterEsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Convertir PDF a PDF/A</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo convertir PDF a PDF/A para archivado (Guía gratis en línea)
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>8 de junio de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.510 palabras</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Si Usted necesita guardar contratos, facturas, expedientes fiscales, trabajos académicos o documentos de cumplimiento durante muchos años, un PDF normal no siempre es suficiente. Un PDF estándar puede incluir fuentes externas, JavaScript, cifrado o elementos multimedia que podrían fallar en el futuro. Ahí es donde entra PDF/A. PDF/A es un estándar pensado para la preservación a largo plazo y busca que el documento siga siendo legible y autosuficiente con el paso del tiempo.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          En esta guía aprenderá cómo convertir PDF a PDF/A en línea, qué cambia exactamente durante la conversión, qué versión conviene elegir y qué preparación previa le ahorrará problemas. Si trabaja en administración, legal, educación, salud o finanzas, este formato puede evitarle dolores de cabeza más adelante.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rápida: cómo convertir un PDF a PDF/A</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>Prepare el PDF original</strong> corrigiendo orden de páginas, rotación y tamaño innecesario con <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Dividir PDF</Link>, <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotar PDF</Link> o <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Comprimir PDF</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>Ejecute la conversión a PDF/A</strong> con una herramienta que incruste fuentes y elimine funciones que no son aptas para archivado.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>Valide el resultado</strong> y guarde la copia de archivo por separado de la versión editable de trabajo.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué significa realmente PDF/A</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PDF/A es una versión normalizada por ISO del formato PDF, diseñada específicamente para preservación. La idea es sencilla: un documento archivado debe poder abrirse y verse correctamente dentro de muchos años, aunque cambien los programas, sistemas operativos o equipos.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Para lograrlo, PDF/A limita elementos problemáticos. Por ejemplo, suele exigir que las fuentes queden incrustadas dentro del archivo. También restringe JavaScript, audio, video y ciertos tipos de cifrado. En la práctica, un PDF/A suele ser menos “dinámico” que un PDF moderno, pero mucho más confiable para conservación.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">PDF/A es útil para archivar:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Contratos y documentos legales</li>
            <li>Facturas, comprobantes y registros fiscales</li>
            <li>Tesis, informes y documentos académicos</li>
            <li>Expedientes médicos, RR. HH. y cumplimiento</li>
            <li>Archivos que deben mantenerse legibles durante años</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Diferencias entre PDF normal y PDF/A</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Convertir un PDF a PDF/A no es solo cambiar el nombre del archivo. La herramienta debe revisar la estructura del documento y reescribir ciertos elementos para cumplir con las reglas de archivado. Eso puede incluir incrustar fuentes, normalizar colores, aplanar partes del contenido y quitar funciones no permitidas.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Característica</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PDF normal</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PDF/A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Fuentes</td>
                <td className="border border-gray-300 px-4 py-3">Pueden depender del sistema</td>
                <td className="border border-gray-300 px-4 py-3">Deben ir incrustadas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">JavaScript</td>
                <td className="border border-gray-300 px-4 py-3">Puede incluirse</td>
                <td className="border border-gray-300 px-4 py-3">No es apropiado para archivo</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Cifrado</td>
                <td className="border border-gray-300 px-4 py-3">Es común</td>
                <td className="border border-gray-300 px-4 py-3">Suele no permitirse</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Dependencias externas</td>
                <td className="border border-gray-300 px-4 py-3">Pueden existir</td>
                <td className="border border-gray-300 px-4 py-3">Debe ser autosuficiente</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Archivado a largo plazo</td>
                <td className="border border-gray-300 px-4 py-3">No garantizado</td>
                <td className="border border-gray-300 px-4 py-3">Diseñado para ello</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Por eso algunos archivos se convierten sin problema y otros fallan en la validación. Cuantas más funciones inusuales tenga el PDF original, más limpieza previa necesitará.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso a paso: convertir PDF a PDF/A en línea</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Revise el documento antes de convertir</h3>
              <p className="text-gray-700 leading-relaxed">Compruebe si el archivo tiene páginas giradas, páginas duplicadas o problemas visibles. Si el PDF ya se comporta de forma extraña, consulte primero <Link href="/blog/pdf-not-opening-fix" className="text-blue-600 hover:underline font-medium">nuestra guía para PDF que no abren</Link>. Archivar un archivo defectuoso solo conserva el defecto.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Reduzca los problemas evitables</h3>
              <p className="text-gray-700 leading-relaxed">Si el archivo tiene muchas imágenes, puede optimizarlo con <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Comprimir PDF</Link>. Si solo necesita una parte, use <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Dividir PDF</Link>. Si el documento proviene de imágenes, reconstruir páginas limpias con <Link href="/image-to-pdf" className="text-blue-600 hover:underline font-medium">Imagen a PDF</Link> puede mejorar el resultado final.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Ejecute la conversión a PDF/A</h3>
              <p className="text-gray-700 leading-relaxed">Utilice una herramienta que indique claramente soporte para salida PDF/A. Durante este paso se incrustan recursos necesarios y se adaptan partes del documento. Si no existe una norma interna específica, PDF/A-2 suele ser una elección razonable en muchos flujos actuales.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Valide e inspeccione el resultado</h3>
              <p className="text-gray-700 leading-relaxed">Abra el archivo convertido y verifique texto, orden de páginas, marcadores y diseño. En un entorno de cumplimiento, “parece correcto” no siempre es suficiente.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Guarde la copia de archivo por separado</h3>
              <p className="text-gray-700 leading-relaxed">Mantenga la versión PDF/A como copia archivada y deje la versión editable en otro lugar si el documento aún necesita cambios.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué versión de PDF/A conviene elegir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Muchas personas se frenan aquí, pero la decisión suele ser más simple de lo que parece. Lo importante es saber si una institución, un cliente o una norma interna exige una versión concreta.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-1</h3>
            <p className="text-gray-700">Es una base más estricta y antigua. Úsela si una política o entidad la exige expresamente.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-2</h3>
            <p className="text-gray-700">Suele ser un punto de equilibrio práctico para muchos procesos modernos de archivado.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF/A-3</h3>
            <p className="text-gray-700">Permite adjuntos incrustados. Puede ser útil en flujos empresariales específicos, pero añade complejidad.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          Si nadie le ha dado una instrucción distinta, PDF/A-2 suele ser una opción sensata. Si existe un requisito formal, siga ese requisito.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Problemas comunes al convertir a PDF/A</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Faltan fuentes</h3>
            <p className="text-gray-700 text-sm">Si el PDF original depende de fuentes no incrustadas, la conversión puede fallar o alterar el diseño.</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Archivos cifrados</h3>
            <p className="text-gray-700 text-sm">Los PDF protegidos suelen necesitar autorización y limpieza previa antes de archivarse correctamente.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Escaneos demasiado pesados</h3>
            <p className="text-gray-700 text-sm">Los escaneos enormes generan archivos difíciles de almacenar y compartir. Conviene optimizarlos primero.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Se pierden funciones interactivas</h3>
            <p className="text-gray-700 text-sm">Eso es normal. PDF/A prioriza estabilidad, no interactividad.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Si su archivo viene de un escaneo y necesita búsqueda de texto, revise también <Link href="/blog/ocr-pdf-scanned-documents" className="text-blue-600 hover:underline font-medium">nuestra guía de OCR para PDF escaneados</Link>. OCR y PDF/A no son lo mismo, pero suelen ir juntos en un mismo flujo documental.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿PDF/A es lo mismo que un PDF normal?</summary>
            <p className="mt-3 text-gray-700">No. PDF/A es una variante de PDF orientada a preservación a largo plazo y con reglas más estrictas.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo seguir editando un archivo PDF/A?</summary>
            <p className="mt-3 text-gray-700">A veces sí, pero no conviene tratar la copia archivada como si fuera el archivo maestro de trabajo. Lo mejor es guardar ambas versiones por separado.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿PDF/A reduce el tamaño del archivo?</summary>
            <p className="mt-3 text-gray-700">No necesariamente. En algunos casos el archivo puede crecer porque debe incrustar recursos para quedar autosuficiente.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Debo convertir todos mis PDF a PDF/A?</summary>
            <p className="mt-3 text-gray-700">No. Use PDF/A cuando importe la conservación a largo plazo, la normativa o el archivo institucional. Para trabajo diario, un PDF normal suele bastar.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Necesita limpiar el PDF antes de archivarlo?</h2>
        <p className="mb-6 text-blue-100">Comprima, divida, rote o reconstruya su documento con las herramientas de PixelPDF antes de crear la copia final de archivo.</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Empezar con Comprimir PDF
        </Link>
      </section>
    </article>
  );
}
