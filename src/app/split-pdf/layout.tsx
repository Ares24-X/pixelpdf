import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Split PDF - Extract Pages from PDF Online Free | PixelPDF',
  description: 'Free online PDF splitter. Extract specific pages or split PDF into multiple files. No upload to server, 100% private.',
  openGraph: { title: 'Split PDF - Extract Pages Online', description: 'Split PDF files into multiple documents. Free, secure, no server upload.', url: 'https://pixelpdf.win/split-pdf/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
