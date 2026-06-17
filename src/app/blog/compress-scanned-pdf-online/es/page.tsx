import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo comprimir un PDF escaneado en línea sin que quede borroso',
  description:
    'Aprenda a comprimir un PDF escaneado en línea sin volver ilegibles las letras pequeñas, firmas, sellos o códigos QR.',
  keywords: [
    'comprimir PDF escaneado online gratis',
    'reducir tamaño PDF escaneado',
    'comprimir PDF sin perder calidad escaneado',
    'hacer PDF escaneado más pequeño',
    'PDF demasiado grande para email',
  ],
  openGraph: {
    title: 'Cómo comprimir un PDF escaneado en línea sin que quede borroso',
    description:
      'Aprenda a comprimir un PDF escaneado en línea sin volver ilegibles las letras pequeñas, firmas, sellos o códigos QR.',
    type: 'article',
  },
};

export default function CompressScannedPdfOnlineEsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Comprimir PDF escaneado</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo comprimir un PDF escaneado en línea sin que quede borroso
      </h1>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>17 de junio de 2026</span>
        <span className="mx-2">•</span>
        <span>8 min de lectura</span>
        <span className="mx-2">•</span>
        <span>~1.420 palabras</span>
      </div>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Los PDF escaneados son prácticos porque conservan exactamente el aspecto del documento en papel. El problema es que también suelen ser algunos de los PDF más pesados.
          Un contrato de 20 o 30 páginas escaneado con una configuración poco eficiente puede terminar con 40MB o más. Eso complica el envío por correo, la carga en portales y el archivo ordenado de documentos.
          El objetivo real no es solo reducir el tamaño. El objetivo es reducirlo sin arruinar la legibilidad.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          En esta guía verá cómo comprimir PDF escaneado online gratis, por qué estos archivos crecen tanto y qué hacer cuando comprimir no basta. Si quiere empezar ya,
          puede usar la herramienta <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> de PixelPDF y apoyarse después en <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> o <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> para reorganizar el archivo.
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rápida: la forma más segura de comprimir un PDF escaneado</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Suba el archivo</strong> a <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link>.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Empiece con compresión media</strong> para mantener texto legible y lograr una reducción útil.</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Revise detalles críticos</strong> como firmas, sellos, números pequeños y códigos antes de compartir.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Por qué los PDF escaneados pesan tanto</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un PDF digital normal suele contener texto, fuentes y vectores. Un PDF escaneado, en cambio, suele guardar cada página como una imagen. Esa diferencia explica casi todo.
          Si además el escaneo se hizo en color, con resolución alta y muchas páginas, el archivo se dispara de tamaño.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Se escaneó en color cuando bastaba con escala de grises</li>
          <li>Se usó una resolución demasiado alta para un documento común</li>
          <li>Se dejaron páginas en blanco o duplicadas dentro del PDF</li>
          <li>Se juntaron demasiadas páginas en un solo archivo</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Por eso un lote pequeño de facturas escaneadas puede pesar más que un informe de muchas páginas creado directamente desde Word.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo comprimir sin arruinar la legibilidad</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Defina para qué va a usar el archivo</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          No es lo mismo comprimir un PDF para una revisión rápida por correo que para archivar un expediente o presentar un formulario. Si el documento se va a imprimir,
          firmar, auditar o procesar por otra plataforma, conviene ser más conservador.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Empiece con compresión media</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Esta suele ser la mejor primera prueba para la mayoría de los documentos escaneados. Reduce mucho tamaño sin destruir de inmediato la lectura de letras pequeñas.
          Si el PDF sigue pesando demasiado, entonces puede probar un nivel más fuerte.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Revise páginas clave, no solo la portada</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Amplíe zonas con firmas, importes, direcciones, tablas, sellos, notas manuscritas, códigos de barras o QR. Si esas zonas se ven bien, el resultado suele ser suficiente para uso real.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Si el problema es la cantidad de páginas, divida el archivo</h3>
        <p className="text-gray-700 leading-relaxed">
          Cuando un PDF tiene demasiadas páginas, a veces el mejor remedio no es más compresión sino separación. Con <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> puede dividir el documento por bloques lógicos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recomendación según el tipo de documento</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipo de documento</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Enfoque recomendado</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Motivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Facturas y recibos</td>
                <td className="border border-gray-300 px-4 py-3">Compresión media</td>
                <td className="border border-gray-300 px-4 py-3">Suele conservar bien fechas, importes y nombres</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Contratos firmados</td>
                <td className="border border-gray-300 px-4 py-3">Compresión media y revisión manual</td>
                <td className="border border-gray-300 px-4 py-3">Protege firmas y letra pequeña</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Reportes con muchas imágenes</td>
                <td className="border border-gray-300 px-4 py-3">Compresión alta si solo se compartirá en pantalla</td>
                <td className="border border-gray-300 px-4 py-3">La mayor reducción suele venir de las imágenes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Copias para archivo</td>
                <td className="border border-gray-300 px-4 py-3">Compresión ligera o media</td>
                <td className="border border-gray-300 px-4 py-3">Conviene conservar más fidelidad al original</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Formularios con QR o código de barras</td>
                <td className="border border-gray-300 px-4 py-3">Primero compresión ligera</td>
                <td className="border border-gray-300 px-4 py-3">Las zonas legibles por máquina son más sensibles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué hacer si comprimir no es suficiente</h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Extraiga solo las páginas necesarias</h3>
            <p>Si la otra persona solo necesita unas páginas, no envíe todo el paquete completo. Menos páginas casi siempre significa menos peso.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Limpie el archivo antes de volver a comprimir</h3>
            <p>Quite páginas en blanco, duplicadas o mal orientadas. Si hace falta reorganizar, puede usar <Link href="/rotate-pdf" className="text-blue-600 hover:underline font-medium">Rotate PDF</Link> y <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link>.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Divida por bloques lógicos</h3>
            <p>Con <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> puede separar expedientes por mes, sección o caso.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Errores comunes</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Aplicar la máxima compresión desde el principio</li>
          <li>Revisar solo la primera página</li>
          <li>No comprobar QR, códigos o firmas</li>
          <li>Dejar páginas vacías o repetidas</li>
          <li>Intentar forzar un solo archivo cuando conviene dividirlo</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Puedo comprimir un PDF escaneado online gratis?</h3>
            <p className="text-gray-700 leading-relaxed">Sí. Puede usar <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> de PixelPDF sin instalar software.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿La compresión vuelve borroso el texto?</h3>
            <p className="text-gray-700 leading-relaxed">Puede ocurrir si la compresión es demasiado fuerte. Lo más seguro es empezar con nivel medio y revisar las zonas críticas.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Cuál es la mejor forma de reducir un PDF escaneado para correo?</h3>
            <p className="text-gray-700 leading-relaxed">Primero comprímalo. Si todavía pesa demasiado, divídalo. Eso suele conservar mejor la utilidad del documento.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Por qué un PDF escaneado pesa más que un PDF normal?</h3>
            <p className="text-gray-700 leading-relaxed">Porque normalmente guarda páginas como imágenes, y las imágenes necesitan mucho más espacio que el texto digital.</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reducir un PDF escaneado no consiste solo en bajar megabytes. Consiste en mantener el documento útil después de la compresión. Por eso funciona mejor un proceso simple:
          compresión media, revisión de detalles importantes y división del archivo si el exceso viene por cantidad de páginas.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Si quiere una ruta rápida, empiece con <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Compress PDF</Link> y complemente el flujo con <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Split PDF</Link> o <Link href="/merge-pdf" className="text-blue-600 hover:underline font-medium">Merge PDF</Link> cuando haga falta.
        </p>
      </section>
    </article>
  );
}
