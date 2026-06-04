import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress PDF - Reduce PDF File Size Online Free | PixelPDF',
  description: 'Free online PDF compressor. Reduce PDF file size while maintaining quality. No upload to server, 100% secure and private.',
  openGraph: { title: 'Compress PDF - Reduce File Size Online', description: 'Compress PDF files for free. Reduce size, keep quality, no server upload.', url: 'https://pixelpdf.win/compress-pdf/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
