// Cómo Convertir Imágenes a PDF: Guía Rápida - Guía en Español
// Ruta: /src/app/blog/image-to-pdf-quick-guide/es/page.tsx
// Fecha: 2026-05-21

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Convertir Imágenes a PDF: Guía Rápida (2026)',
  description: 'Guía rápida sobre cómo convertir JPG, PNG y otras imágenes a PDF en línea. Sin registro, sin subir a servidores, 100% gratis.',
  keywords: ['imagen a PDF', 'JPG a PDF', 'PNG a PDF', 'convertir imagen a PDF', 'foto a PDF'],
  openGraph: {
    title: 'Cómo Convertir Imágenes a PDF: Guía Rápida (2026)',
    description: 'Guía rápida sobre cómo convertir imágenes a PDF. Gratis, rápido y seguro.',
    type: 'article',
  },
};

export default function ImageToPdfGuideES() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Inicio</Link> / <Link href="/blog" className="hover:text-blue-600">Blog</Link> / <span>Guía Imagen a PDF</span>
      </nav>

      {/* H1 Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Cómo Convertir Imágenes a PDF: Guía Rápida (2026)
      </h1>

      {/* Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>21 de mayo de 2026</span>
        <span className="mx-2">•</span>
        <span>4 min de lectura</span>
        <span className="mx-2">•</span>
        <span>687 palabras</span>
      </div>

      {/* Introducción */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          ¿Necesitas convertir tus fotos o imágenes en un documento PDF? Ya sea que estés creando un álbum de fotos, escaneando recibos o preparando documentos para presentar, convertir imágenes a PDF es más fácil de lo que piensas. En esta guía rápida, te mostraremos exactamente cómo hacerlo en menos de un minuto.
        </p>
      </section>

      {/* Pasos rápidos */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Convertir Imagen a PDF en 3 Pasos</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold text-gray-900">Sube tus imágenes</h3>
              <p className="text-gray-700 mt-1">Ve a la herramienta Imagen a PDF de PixelPDF y arrastra y suelta tus imágenes, o haz clic para seleccionar archivos de tu dispositivo.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold text-gray-900">Reordena si es necesario</h3>
              <p className="text-gray-700 mt-1">Arrastra y suelta para reorganizar las imágenes en el orden que prefieras. Cada imagen se convierte en una página separada.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold text-gray-900">Descarga tu PDF</h3>
              <p className="text-gray-700 mt-1">Haz clic en "Convertir a PDF" y tu documento se descarga instantáneamente. ¡Así de fácil!</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/image-to-pdf" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Probar Imagen a PDF Gratis
          </Link>
        </div>
      </section>

      {/* Formatos soportados */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Formatos de imagen compatibles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">JPG / JPEG</div>
            <div className="text-sm text-gray-500">Formato más común</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎨</div>
            <div className="font-medium">PNG</div>
            <div className="text-sm text-gray-500">Fondos transparentes</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📸</div>
            <div className="font-medium">WebP</div>
            <div className="text-sm text-gray-500">Formato moderno</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">GIF</div>
            <div className="text-sm text-gray-500">Imágenes animadas</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas comunes</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-4" open>
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Es gratis convertir imagen a PDF?</summary>
            <p className="mt-3 text-gray-700">¡Sí! La herramienta Imagen a PDF de PixelPDF es completamente gratis. Sin registro, sin límites, sin marcas de agua.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Cuántas imágenes puedo convertir a la vez?</summary>
            <p className="mt-3 text-gray-700">Puedes subir hasta 20 imágenes por conversión. Cada imagen se convierte en una página en el PDF resultante.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Mis datos están seguros?</summary>
            <p className="mt-3 text-gray-700">Absolutamente. Todo el procesamiento ocurre en tu navegador. Tus imágenes nunca abandonan tu dispositivo, garantizando total privacidad.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">¿Puedo cambiar el tamaño de página?</summary>
            <p className="mt-3 text-gray-700">¡Sí! PixelPDF ajusta automáticamente cada imagen a la página. Puedes elegir entre A4, Carta, Legal o ajuste automático.</p>
          </details>
        </div>
      </section>

      {/* Herramientas relacionadas */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Herramientas relacionadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/pdf-to-jpg" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>📄</span> PDF a JPG
          </Link>
          <Link href="/merge-pdf" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🔗</span> Combinar PDF
          </Link>
          <Link href="/compress-pdf" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🗜️</span> Comprimir PDF
          </Link>
        </div>
      </section>
    </article>
  );
}
