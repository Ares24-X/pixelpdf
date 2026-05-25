// Cómo Combinar Varias Imágenes en Un Solo PDF - Artículo corto (500-800 palabras)
// Ruta: /src/app/blog/combine-images-into-pdf/es/page.tsx
// Fecha: 2026-05-25

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Combinar Varias Imágenes en Un Solo PDF (2026)',
  description: 'Guía rápida sobre cómo combinar múltiples imágenes en un solo archivo PDF. Herramienta en línea gratuita, sin registro requerido, 100% segura.',
  keywords: ['combinar imágenes a PDF', 'fusionar imágenes a PDF', 'múltiples imágenes a PDF', 'collage de fotos PDF', 'imagen a PDF'],
  openGraph: {
    title: 'Cómo Combinar Varias Imágenes en Un Solo PDF (2026)',
    description: 'Guía rápida sobre cómo combinar múltiples imágenes en un solo PDF. Gratis, rápido y seguro.',
    type: 'article',
  },
};

export default function CombineImagesIntoPDF() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <span>Combinar Imágenes a PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Combinar Varias Imágenes en Un Solo PDF (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>25 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>4 min de lectura</span>
        <span className="mx-2">•</span>
        <span>612 palabras</span>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          ¿Necesitas combinar múltiples fotos o imágenes en un solo documento PDF? Ya sea que estés creando un collage de fotos, organizando documentos escaneados o preparando una presentación, fusionar imágenes en un solo PDF facilita mucho el compartir y archivar. Aquí te mostramos cómo hacerlo rápidamente y gratis.
        </p>
      </section>

      {/* Quick 3-Step Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Combina Imágenes en PDF en 3 Pasos</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">Sube Todas tus Imágenes</h3>
              <p className="text-gray-700 mt-1">Ve a la herramienta <Link href="/image-to-pdf" className="text-blue-600 hover:underline">Imagen a PDF</Link> de PixelPDF y arrastra todas tus imágenes de una vez. Puedes seleccionar múltiples archivos usando Ctrl/Cmd + Clic.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">Reorganiza tus Imágenes</h3>
              <p className="text-gray-700 mt-1">Arrastra y suelta para organizar las imágenes en el orden deseado. Cada imagen se convertirá en una página separada en el PDF final.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">Descarga tu PDF Combinado</h3>
              <p className="text-gray-700 mt-1">Haz clic en "Convertir a PDF" y tu PDF multi-página se descargará instantáneamente. Todo el procesamiento ocurre en tu navegador—tus imágenes nunca salen de tu dispositivo.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Combinar Imágenes Ahora
          </Link>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Formatos de Imagen Soportados</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">JPG / JPEG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">PNG</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">WebP</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">GIF</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="font-medium">BMP</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-3">Puedes mezclar diferentes formatos en una sola conversión—PixelPDF los maneja todos automáticamente.</p>
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos Rápidos</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Collages de fotos:</strong> Combina fotos de vacaciones, imágenes familiares o fotos de eventos en un álbum PDF compartible.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Documentos escaneados:</strong> Fusiona múltiples páginas escaneadas en un documento organizado para enviar fácilmente por correo.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Presentaciones:</strong> Crea presentaciones visuales combinando gráficos, diagramas y capturas de pantalla.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">💡</span>
              <div><strong>Recibos y facturas:</strong> Mantén todos tus documentos de gastos juntos en un solo archivo PDF.</div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuántas imágenes puedo combinar a la vez?</summary>
            <p className="mt-3 text-gray-700">Puedes combinar hasta 20 imágenes en una sola conversión. Cada imagen se convierte en una página en el PDF resultante.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Este servicio es realmente gratis?</summary>
            <p className="mt-3 text-gray-700">¡Sí! PixelPDF es completamente gratis sin registro, sin marcas de agua y sin límites de archivos más allá de las 20 imágenes por conversión.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Mis imágenes se suben a un servidor?</summary>
            <p className="mt-3 text-gray-700">No. Todo el procesamiento ocurre localmente en tu navegador. Tus imágenes nunca salen de tu dispositivo, garantizando completa privacidad.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo cambiar el orden de las páginas después de crear el PDF?</summary>
            <p className="mt-3 text-gray-700">Si necesitas reordenar páginas después de crear el PDF, puedes usar nuestra herramienta <Link href="/split-pdf" className="text-blue-600 hover:underline">Dividir PDF</Link> para separar las páginas y luego fusionarlas en el orden deseado.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Comienza a Combinar tus Imágenes</h2>
        <p className="mb-6 text-blue-100">Crea un PDF multi-página a partir de tus imágenes en segundos—gratis y seguro</p>
        <Link 
          href="/image-to-pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Probar Imagen a PDF Gratis
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Herramientas Relacionadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/pdf-to-jpg" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">PDF a JPG</div>
          </Link>
          <Link href="/merge-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">Fusionar PDF</div>
          </Link>
          <Link href="/compress-pdf" className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition text-center">
            <div className="text-2xl mb-2">🗜️</div>
            <div className="font-medium">Comprimir PDF</div>
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
