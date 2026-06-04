import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF to JPG - Convert PDF to High-Quality Images Free | PixelPDF',
  description: 'Free online PDF to JPG converter. Convert PDF pages to high-quality JPG or PNG images. No file upload to server, 100% secure. Fast and easy.',
  openGraph: {
    title: 'PDF to JPG Converter - Convert PDF to Images Online',
    description: 'Convert PDF to JPG or PNG images. Free, secure, no server upload.',
    url: 'https://pixelpdf.win/pdf-to-jpg/',
    type: 'website',
  },
};

export default function PdfToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
