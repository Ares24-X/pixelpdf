import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About PixelPDF - Free Online PDF Tools | PixelPDF',
  description: 'Learn about PixelPDF — free online PDF tools. All processing happens in your browser. No upload, 100% private and secure.',
  openGraph: { title: 'About PixelPDF - Free Online PDF Tools', description: 'Free browser-based PDF tools. No upload needed.', url: 'https://pixelpdf.win/about/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
