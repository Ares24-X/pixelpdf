// Compress PDF for Outlook - Spanish Translation
// Path: /src/app/blog/compress-pdf-for-outlook/es/page.tsx
// Date: 2026-06-04

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como Comprimir PDF para el Limite de 20MB de Outlook (Paso a Paso)',
  description: 'Aprende como comprimir PDF para el limite de 20MB de Outlook. Guia paso a paso para reducir el tamano de archivos PDF, dividir documentos grandes y evitar las restricciones de adjuntos de Outlook.',
  keywords: ['comprimir PDF para limite 20MB Outlook', 'PDF demasiado grande para Outlook', 'reducir tamano PDF para correo Outlook', 'limite adjuntos Outlook', 'comprimir PDF online'],
  openGraph: {
    title: 'Como Comprimir PDF para el Limite de 20MB de Outlook (Paso a Paso)',
    description: 'Aprende como comprimir PDF para el limite de 20MB de Outlook. Guia paso a paso para reducir el tamano de archivos PDF, dividir documentos grandes y evitar las restricciones de adjuntos de Outlook.',
    type: 'article',
  },
};

export default function CompressPdfForOutlookES() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Comprimir PDF para Outlook</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Como Comprimir PDF para el Limite de 20MB de Outlook (Paso a Paso)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>4 de junio de 2026</span>
        <span className="mx-2">&bull;</span>
        <span>8 min de lectura</span>
        <span className="mx-2">&bull;</span>
        <span>~1.350 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Acabas de terminar un informe trimestral detallado, lo guardaste como PDF y lo adjuntaste a tu correo de Outlook. Presionas &quot;Enviar&quot;, y segundos despues, Outlook muestra un error: &quot;El tamano del archivo supera el limite permitido.&quot; Si esto te suena familiar, estas lidiando con una de las frustraciones mas comunes de los usuarios de Outlook. Microsoft Outlook aplica un estricto limite de adjuntos de 20MB en la mayoria de las cuentas, un limite aun mas restrictivo que el de 25MB de Gmail. La buena noticia es que comprimir tu PDF es una solucion rapida y confiable. En esta guia, aprenderas exactamente como comprimir un PDF para el limite de 20MB de Outlook usando tres metodos comprobados, ademas de consejos practicos para evitar este problema en el futuro.
        </p>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Respuesta rapida: Como comprimir un PDF para Outlook en 3 pasos</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-gray-700"><strong>Sube tu PDF</strong> a la <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">herramienta Comprimir PDF de PixelPDF</Link>—arrastra y suelta o haz clic para buscar tus archivos</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-gray-700"><strong>Selecciona &quot;Media&quot; como nivel de compresion</strong> para el mejor equilibrio entre reduccion de tamano y preservacion de calidad</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-gray-700"><strong>Descarga el PDF comprimido</strong> y adjuntalo a tu correo de Outlook—verifica que tenga menos de 20MB antes de enviarlo</p>
          </div>
        </div>
      </section>

      {/* Understanding Outlook Attachment Limits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Entendiendo los limites de adjuntos de Outlook</h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cual es el tamano maximo de los adjuntos en Outlook?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          El limite de adjuntos de Outlook varia segun tu proveedor de correo y el nivel de suscripcion. La mayoria de las cuentas estandar de Outlook.com y Microsoft 365 personal tienen un limite de 20MB por correo. Algunos planes empresariales de Office 365 permiten hasta 25MB, y las cuentas de Exchange Online gestionadas por administradores de TI pueden tener limites personalizados de hasta 35MB o 150MB. Sin embargo, para la gran mayoria de los usuarios, el limite de 20MB es el tope con el que debes trabajar.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparacion de limites de adjuntos por proveedor de correo</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Proveedor de correo</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Limite de adjuntos</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Outlook.com</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Cuentas gratuitas estandar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Microsoft 365 Personal</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Algunos planes permiten 25 MB</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gmail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Google Workspace con el mismo limite</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Yahoo Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">25 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Adjuntos via la app de Yahoo</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">iCloud Mail</td>
                <td className="border border-gray-300 px-4 py-3 text-center">20 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Igual que el limite de Outlook</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Que se cuenta dentro del limite de 20MB?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Aqui hay un detalle critico que toma por sorpresa a muchos usuarios de Outlook: el limite de 20MB se aplica al tamano <strong>codificado</strong> de tus adjuntos, no al tamano real del archivo. Los protocolos de correo electronico usan codificacion Base64 para transmitir archivos binarios como texto, lo que infla el tamano aproximadamente un 33%. Esto significa que un PDF que muestra 15MB en tu explorador de archivos consumira alrededor de 20MB de la cuota de adjuntos de Outlook. En la practica, deberias mantener tus archivos PDF en o por debajo de <strong>15MB</strong> para estar seguro dentro del limite de 20MB de Outlook.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
          <p className="text-gray-700"><strong>Consejo profesional:</strong> Siempre comprime tu PDF a 15MB o menos antes de adjuntarlo a Outlook. Esto tiene en cuenta la sobrecarga de ~33% de la codificacion Base64 y asegura que tu correo se envie sin errores.</p>
        </div>
      </section>

      {/* Method 1 - Compress PDF Online */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodo 1: Comprimir PDF en linea (Recomendado)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La forma mas rapida de reducir tu PDF por debajo del limite de 20MB de Outlook es usar una herramienta de compresion en linea. La herramienta <Link href="/compress-pdf" className="text-blue-600 hover:underline font-medium">Comprimir PDF</Link> de PixelPDF procesa todo directamente en tu navegador, por lo que tus archivos nunca salen de tu dispositivo. No hay software que instalar, no hay cuenta que crear y no hay que esperar en fila.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Guia paso a paso</h3>
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Abre la herramienta Comprimir PDF</h4>
              <p className="text-gray-700">Navega a la pagina de Comprimir PDF de PixelPDF en cualquier navegador moderno. La herramienta se carga al instante y esta lista para usar inmediatamente.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Sube tu archivo PDF</h4>
              <p className="text-gray-700">Arrastra y suelta tu PDF en el area de carga, o haz clic en &quot;Examinar&quot; para seleccionarlo desde tu computadora. La herramienta admite archivos de hasta 50MB, lo que cubre la gran mayoria de adjuntos oversized.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Elige tu nivel de compresion</h4>
              <p className="text-gray-700">Para adjuntos de Outlook, selecciona la compresion &quot;Media&quot;. Esto generalmente logra una reduccion de tamano del 40-60% manteniendo el texto nitido y las imagenes claras. Si tu PDF supera ampliamente los 20MB, elige la compresion &quot;Alta&quot; para obtener hasta un 80% de reduccion.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Descarga y verifica el resultado</h4>
              <p className="text-gray-700">Haz clic en &quot;Descargar&quot; para guardar el PDF comprimido. La herramienta muestra los tamanos del archivo original y comprimido uno al lado del otro, para que puedas confirmar que el archivo esta seguro por debajo de 15MB antes de adjuntarlo a Outlook.</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparacion de tamano antes y despues</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipo de documento</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Tamano original</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Tamano comprimido</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Reduccion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Propuesta de cliente con graficos (30 paginas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">38 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">11 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">71%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Manual de empleado escaneado (80 paginas)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">45 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">14 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">69%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Presentacion de marketing con fotos</td>
                <td className="border border-gray-300 px-4 py-3 text-center">29 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">8 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">72%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Contrato legal con firmas</td>
                <td className="border border-gray-300 px-4 py-3 text-center">22 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium text-green-600">6 MB</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">73%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Method 2 - Split PDF */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodo 2: Dividir el PDF en partes mas pequenas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La compresion funciona para la mayoria de los documentos, pero ocasionalmente encontraras un PDF que sigue superando los 20MB incluso despues de la compresion maxima. Esto es comun con documentos que contienen cientos de paginas escaneadas de alta resolucion, como planos de ingenieria, expedientes medicos o catalogos de productos con muchas fotos. Cuando la compresion por si sola no es suficiente, dividir el PDF en varios archivos mas pequenos es la mejor opcion.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cuando dividir en lugar de comprimir</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Documentos con mas de 100 paginas de contenido escaneado donde la compresion produce resultados minimos</li>
          <li>Informes multiseccion donde cada capitulo o apendice puede enviarse de forma independiente</li>
          <li>Archivos que siguen por encima de 20MB incluso despues de usar compresion &quot;Alta&quot;</li>
          <li>Situaciones donde necesitas compartir solo paginas especificas con determinados destinatarios</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Como dividir y enviar en Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Usa la herramienta <Link href="/split-pdf" className="text-blue-600 hover:underline font-medium">Dividir PDF</Link> de PixelPDF para separar tu documento en secciones logicas</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Verifica que cada archivo dividido tenga menos de 15MB (teniendo en cuenta la sobrecarga de codificacion Base64)</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Envia correos separados con asuntos claros: &quot;Informe Financiero T3 - Parte 1 de 3&quot;</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <p className="text-gray-700">Incluye una breve nota en el primer correo explicando que las partes adicionales se envian a continuacion</p>
          </div>
        </div>
      </section>

      {/* Method 3 - OneDrive/SharePoint */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodo 3: Usar OneDrive o SharePoint para compartir enlaces</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si ya estas en el ecosistema de Microsoft, OneDrive y SharePoint ofrecen una solucion natural para el limite de adjuntos de Outlook. En lugar de adjuntar el archivo directamente, subelo a OneDrive o SharePoint y comparte un enlace en tu correo. Este enfoque es especialmente conveniente para los usuarios de Office 365 porque OneDrive esta integrado directamente en la ventana de redaccion de Outlook.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Como compartir via OneDrive en Outlook</h3>
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <p className="text-gray-700">Haz clic en el icono de adjuntos en Outlook y selecciona &quot;Examinar ubicaciones en la nube&quot; en lugar de tus archivos locales</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <p className="text-gray-700">Elige OneDrive o SharePoint, sube tu PDF, y Outlook insertara un enlace compartido automaticamente</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <p className="text-gray-700">Configura el permiso de comparticion en &quot;Los destinatarios pueden ver&quot; o &quot;Personas especificas&quot; segun la sensibilidad</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Ventajas</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Sin restricciones de tamano de archivo</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Los destinatarios pueden previsualizar el PDF en el navegador</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Puedes actualizar el archivo sin reenviarlo</li>
              <li className="flex gap-2"><span className="text-green-600">&#10003;</span> Integrado directamente en Outlook para usuarios de Office 365</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Limitaciones</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Los destinatarios necesitan acceso a internet para ver</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Algunas organizaciones bloquean enlaces externos a la nube</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> Los enlaces pueden romperse si los permisos cambian</li>
              <li className="flex gap-2"><span className="text-red-600">&#10007;</span> No es adecuado para documentos confidenciales o regulados</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips for Outlook Users */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 consejos para usuarios de Outlook que trabajan con PDF grandes</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Apunta siempre a 15MB, no a 20MB</h4>
              <p className="text-gray-700">Debido a que la codificacion Base64 anade ~33% de sobrecarga, un archivo de 15MB en disco se convierte en aproximadamente 20MB al adjuntarlo. Manten tu objetivo en 15MB para evitar sorpresas.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Comprime antes de redactar</h4>
              <p className="text-gray-700">No esperes a que Outlook rechace tu adjunto. Comprime tu PDF primero, luego abre Outlook y redacta tu correo. Esto ahorra tiempo y evita frustraciones.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Usa &quot;Guardar como tamano reducido&quot; en aplicaciones de Office</h4>
              <p className="text-gray-700">Si estas exportando un PDF desde Word, Excel o PowerPoint, usa la opcion integrada &quot;Reducir tamano de archivo&quot; antes de guardar. Esto puede reducir un 30-50% del tamano del archivo antes de que necesites una herramienta de compresion.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Elimina imagenes y fuentes innecesarias</h4>
              <p className="text-gray-700">Revisa tu PDF antes de enviarlo. Elimina imagenes no utilizadas, fuentes incrustadas y metadatos que inflan el archivo. Herramientas como PixelPDF manejan esto automaticamente durante la compresion.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Consulta con tu departamento de TI sobre limites personalizados</h4>
              <p className="text-gray-700">Si usas una cuenta de Exchange a traves de tu empleador, tu equipo de TI puede haber configurado un limite de adjuntos mas alto. Consulta la politica de correo electronico de tu organizacion antes de dividir o comprimir innecesariamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">Por que Outlook dice que mi adjunto es demasiado grande si el archivo tiene menos de 20MB?</summary>
            <p className="mt-3 text-gray-700">
              Esto ocurre debido a la codificacion Base64. Cuando Outlook adjunta tu archivo, convierte los datos binarios en texto para la transmision por correo electronico, lo que aumenta el tamano aproximadamente un 33%. Un PDF de 16MB en tu computadora se convierte en aproximadamente 21MB al codificarse—superando el limite de 20MB de Outlook. Comprime tu PDF a 15MB o menos para evitar este problema por completo.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Puedo aumentar mi limite de adjuntos de Outlook?</summary>
            <p className="mt-3 text-gray-700">
              Para cuentas personales de Outlook.com, el limite de 20MB es fijo y no se puede cambiar. Sin embargo, si usas Microsoft 365 a traves de tu empleador, tu administrador de Exchange puede haber establecido un limite superior (hasta 150MB en algunas configuraciones). Contacta a tu departamento de TI para confirmar el limite especifico de tu organizacion.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Es seguro comprimir PDFs que contienen informacion confidencial?</summary>
            <p className="mt-3 text-gray-700">
              Con PixelPDF, si. Nuestra herramienta de compresion procesa los archivos completamente en tu navegador usando tecnologia del lado del cliente. Tu PDF nunca se sube a ningun servidor, lo que significa que documentos confidenciales como contratos, estados financieros y expedientes medicos permanecen completamente privados en tu dispositivo durante todo el proceso.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Que pasa si mi PDF sigue teniendo mas de 20MB despues de la compresion?</summary>
            <p className="mt-3 text-gray-700">
              Si la compresion maxima no logra reducir tu PDF por debajo del limite, divide el documento en partes mas pequenas usando nuestra <Link href="/split-pdf" className="text-blue-600 hover:underline">herramienta Dividir PDF</Link>. Alternativamente, sube el archivo a OneDrive o SharePoint y comparte un enlace en tu correo de Outlook en lugar de adjuntarlo directamente.
            </p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Outlook para Mac tiene el mismo limite de 20MB?</summary>
            <p className="mt-3 text-gray-700">
              Si, el limite de adjuntos de 20MB se aplica a todas las versiones de Outlook, incluyendo Outlook para Mac, Outlook para Windows y la aplicacion web de Outlook. El limite esta determinado por el servidor de correo, no por la aplicacion cliente, por lo que es consistente en todas las plataformas.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Listo para comprimir tu PDF para Outlook?</h2>
        <p className="mb-6 text-blue-100">Reduce tu PDF a menos de 15MB en segundos—gratis, seguro y sin registro requerido</p>
        <Link
          href="/compress-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Comprimir PDF Gratis
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Herramientas relacionadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/split-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#9986;</div>
            <div className="font-medium">Dividir PDF</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128196;</div>
            <div className="font-medium">Unir PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128295;</div>
            <div className="font-medium">Comprimir PDF</div>
          </Link>
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">&#128444;</div>
            <div className="font-medium">PDF a JPG</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
