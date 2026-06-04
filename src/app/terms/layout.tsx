import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms of Service - PixelPDF | Free PDF Tools',
  description: 'PixelPDF terms of service. Free online PDF tools for personal and commercial use. Read our terms before using our services.',
  openGraph: { title: 'Terms of Service - PixelPDF', description: 'Read the PixelPDF terms of service.', url: 'https://pixelpdf.win/terms/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
