import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo editar metadatos de PDF gratis online (título, autor y propiedades)',
  description: 'Aprenda a ver y editar los metadatos de un PDF, incluyendo título, autor, asunto y palabras clave, con un flujo online gratuito.',
  keywords: ['editar metadatos PDF online gratis', 'cambiar título PDF', 'cambiar autor PDF', 'propiedades PDF online', 'editar información PDF'],
  openGraph: {
    title: 'Cómo editar metadatos de PDF gratis online (título, autor y propiedades)',
    description: 'Guía paso a paso para revisar y corregir los metadatos de un PDF antes de compartirlo o publicarlo.',
    type: 'article',
  },
};

export default function PdfMetadataEditorEsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/es">Home</Link> / <Link href="/blog">Blog</Link> / <span>Editar metadatos PDF</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo editar metadatos de PDF gratis online (título, autor y propiedades)
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>7 de junio de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.500 palabras</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Muchas personas creen que un PDF solo contiene las páginas visibles que leen en pantalla. En realidad, un PDF también puede incluir una capa de información oculta llamada metadatos. Allí suelen guardarse el título, el autor, el asunto, las palabras clave, la aplicación con la que se creó el archivo y varias fechas internas. Si Usted comparte contratos, propuestas, manuales, currículums o documentos descargables, esos metadatos importan más de lo que parece.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Editar los metadatos de un PDF sirve para tres cosas muy concretas. Mejora el orden, porque los archivos se pueden encontrar y archivar mejor. Mejora la presentación, porque un documento público con información limpia se ve más profesional. Y mejora la privacidad, porque evita que queden nombres antiguos, etiquetas internas o rastros técnicos que no deberían salir de su entorno de trabajo. En esta guía verá cómo editar metadatos de PDF online gratis, qué campos conviene revisar y cuándo es mejor eliminarlos en lugar de corregirlos.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rápida: cómo editar metadatos de PDF online</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p><strong>Revise primero las propiedades actuales</strong> para ver título, autor, asunto y palabras clave.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p><strong>Sustituya la información incorrecta o antigua</strong> por datos claros, públicos y útiles.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p><strong>Guarde el PDF y verifique el resultado</strong> antes de enviarlo o publicarlo.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué incluyen realmente los metadatos de un PDF</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Los metadatos son datos descriptivos asociados al documento. Algunos se ven fácilmente en el panel de propiedades y otros quedan dentro de la estructura del archivo para que los lean programas, sistemas de búsqueda o plataformas documentales. No todos los PDFs traen exactamente los mismos campos, pero sí existe un grupo común que conviene revisar siempre.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Campos de metadatos más habituales</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Título:</strong> el nombre real del documento</li>
            <li><strong>Autor:</strong> la persona, empresa o equipo asociado al archivo</li>
            <li><strong>Asunto:</strong> una descripción corta del contenido</li>
            <li><strong>Palabras clave:</strong> términos útiles para búsqueda y clasificación</li>
            <li><strong>Creator / Producer:</strong> la aplicación o sistema que generó el PDF</li>
            <li><strong>Fechas de creación y modificación:</strong> marcas temporales internas</li>
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">
          El problema es que estos campos suelen quedar mal por descuido. Un PDF puede conservar el nombre de un empleado anterior, un título genérico como “Documento sin nombre” o palabras clave inexistentes aunque se vaya a publicar en una web. No rompe el archivo, pero sí baja la calidad del resultado final.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cuándo conviene editar los metadatos de un PDF</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          El mejor momento es justo antes de que el documento salga de su entorno interno. Si el PDF va a un cliente, a una web, a un portal de empleo o a un archivo oficial, merece una revisión rápida. Esto es especialmente importante en archivos exportados desde Word, Google Docs, software de diseño o procesos automáticos, porque muchas veces heredan datos del equipo que los creó.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Caso de uso</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Por qué importa</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Acción recomendada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Propuestas comerciales</td>
                <td className="border border-gray-300 px-4 py-3">Evita nombres internos y mejora la imagen profesional</td>
                <td className="border border-gray-300 px-4 py-3">Corregir título, autor y asunto</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">PDF publicados en la web</td>
                <td className="border border-gray-300 px-4 py-3">Facilita la identificación por usuarios y sistemas</td>
                <td className="border border-gray-300 px-4 py-3">Añadir título y palabras clave relevantes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Documentos legales o de RR. HH.</td>
                <td className="border border-gray-300 px-4 py-3">Puede revelar información sensible del creador</td>
                <td className="border border-gray-300 px-4 py-3">Eliminar o estandarizar el autor</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Informes técnicos o académicos</td>
                <td className="border border-gray-300 px-4 py-3">Mejora archivo, búsqueda y trazabilidad</td>
                <td className="border border-gray-300 px-4 py-3">Completar título, autor, asunto y fechas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Desde el punto de vista SEO, los metadatos no son un atajo mágico. Aun así, un título correcto y una descripción clara ayudan a que el documento se interprete mejor cuando se comparte o se indexa.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso a paso: editar metadatos de PDF online gratis</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Inspeccione primero el estado actual</h3>
              <p className="text-gray-700 leading-relaxed">Antes de cambiar nada, mire qué guarda el archivo. A veces ya hay título y autor, pero vienen de una plantilla o de la cuenta local que creó el PDF. Si encuentra textos como “Document1” o nombres antiguos, ya sabe que hace falta limpieza.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Defina un título real, no solo un nombre de archivo</h3>
              <p className="text-gray-700 leading-relaxed">El campo de título debe describir el documento como lo entendería una persona. “Guía de incorporación de proveedores Q2 2026” es mucho mejor que “final_v2_ok.pdf”. Así el archivo se identifica mejor en lectores, sistemas de archivo y resultados compartidos.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Corrija autor, asunto y palabras clave con intención</h3>
              <p className="text-gray-700 leading-relaxed">El autor debe ser una persona, un equipo o una empresa que tenga sentido mostrar. El asunto resume el contenido en una línea. Las palabras clave deben ayudar a clasificar y encontrar el documento, no parecer una lista inflada de términos repetidos.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Decida si conviene quitar ciertos metadatos</h3>
              <p className="text-gray-700 leading-relaxed">No todo debe conservarse. Si el PDF incluye códigos internos, referencias antiguas o rastros que no deberían compartirse, conviene eliminar esos campos. Si su prioridad es la privacidad, lea también <Link href="/blog/remove-pdf-metadata" className="text-blue-600 hover:underline font-medium">nuestra guía para eliminar metadatos de PDF</Link>.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Guarde y verifique el resultado final</h3>
              <p className="text-gray-700 leading-relaxed">Después de guardar, vuelva a abrir las propiedades. Algunos flujos de exportación reescriben parte de la información. Confirmarlo toma pocos segundos y evita publicar la versión equivocada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Buenas prácticas para metadatos limpios y útiles</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unos buenos metadatos no requieren complejidad, solo consistencia. Si su equipo publica muchos PDFs, conviene fijar una regla simple: cómo se escriben los títulos, qué nombre usar en el autor, cuándo poner asunto y qué palabras clave merecen aparecer. Eso convierte un detalle olvidado en un paso normal de calidad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Use títulos claros</h3>
            <p className="text-gray-700 text-sm">Escriba el título como encabezado de documento, no como un archivo lleno de versiones.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Estandarice el autor</h3>
            <p className="text-gray-700 text-sm">Elija una forma pública coherente: empresa, departamento o responsable.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">No sature palabras clave</h3>
            <p className="text-gray-700 text-sm">Pocas palabras correctas ayudan más que muchas repetidas sin criterio.</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Revise antes de compartir</h3>
            <p className="text-gray-700 text-sm">La revisión de metadatos debe ir junto con la corrección final y la exportación.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Si ya está preparando un PDF para entrega, puede combinar esta revisión con otras tareas. Reduzca tamaño con <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>, una archivos con <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> o proteja la versión final con <Link href="/pdf-encrypt" className="text-blue-600 hover:underline font-medium">PDF Encrypt</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Editar los metadatos o eliminarlos por completo?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La respuesta depende de su objetivo. Si quiere un documento bien presentado, organizado y publicable, lo correcto suele ser editar. Si lo más importante es la privacidad y no desea dejar rastros innecesarios, lo mejor puede ser eliminar. En muchos casos, la solución más inteligente es una mezcla de ambas cosas.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Edite</strong> cuando la prioridad sea organización, imagen y claridad pública</li>
          <li><strong>Elimine</strong> cuando la prioridad sea privacidad y minimización de exposición</li>
          <li><strong>Combine ambas acciones</strong> cuando quiera conservar un título limpio pero borrar información interna</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          En la práctica, casi nunca conviene “dejar todo” o “borrar todo”. Lo más útil es conservar lo que ayuda al lector y quitar lo que no aporta nada o genera riesgo.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo editar metadatos de PDF online gratis?</summary>
            <p className="mt-3 text-gray-700">Sí. Los campos básicos como título, autor, asunto y palabras clave se pueden revisar y ajustar online sin instalar software de escritorio.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuál es el campo de metadatos más importante?</summary>
            <p className="mt-3 text-gray-700">Normalmente el título, porque identifica el documento de forma directa para lectores, sistemas de archivo y resultados compartidos.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Los metadatos del PDF afectan al SEO?</summary>
            <p className="mt-3 text-gray-700">No como factor principal, pero sí ayudan a presentar el archivo de forma más clara y profesional cuando se comparte o se indexa.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Conviene borrar Creator y Producer?</summary>
            <p className="mt-3 text-gray-700">Si revelan herramientas internas o detalles técnicos innecesarios, sí puede tener sentido. Aun así, suele ser más urgente corregir título y autor.</p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">¿Está preparando un PDF para compartir?</h2>
        <p className="mb-6 text-blue-100">Después de revisar los metadatos, puede comprimir, unir, dividir o proteger el archivo con las herramientas de PixelPDF.</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Abrir herramientas de PixelPDF
        </Link>
      </section>
    </article>
  );
}
