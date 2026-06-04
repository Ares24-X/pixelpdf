import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Merge PDF - Combine Multiple PDFs Online Free | PixelPDF',
  description: 'Free online PDF merger. Combine multiple PDF files into one document. No upload to server, secure and fast.',
  openGraph: { title: 'Merge PDF - Combine PDFs Online', description: 'Combine multiple PDF files into one document. Free and secure.', url: 'https://pixelpdf.win/merge-pdf/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
