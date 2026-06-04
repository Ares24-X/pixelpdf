import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Image to PDF - Convert JPG PNG to PDF Online Free | PixelPDF',
  description: 'Free online image to PDF converter. Convert JPG, PNG, WebP images to PDF format. No upload to server, 100% secure.',
  openGraph: { title: 'Image to PDF Converter Online', description: 'Convert images to PDF format. Free, secure, works in your browser.', url: 'https://pixelpdf.win/image-to-pdf/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
