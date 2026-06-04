import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Rotate PDF - Rotate PDF Pages Online Free | PixelPDF',
  description: 'Free online PDF rotation tool. Rotate PDF pages clockwise or counterclockwise. No upload to server, fast and secure.',
  openGraph: { title: 'Rotate PDF - Rotate Pages Online', description: 'Rotate PDF pages for free. No server upload, works in your browser.', url: 'https://pixelpdf.win/rotate-pdf/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
