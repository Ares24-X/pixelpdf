import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy - PixelPDF | Your Data Stays on Your Device',
  description: 'PixelPDF privacy policy. All PDF processing happens in your browser. No files are ever uploaded to our servers.',
  openGraph: { title: 'Privacy Policy - PixelPDF', description: 'Your PDFs never leave your device. Read our privacy policy.', url: 'https://pixelpdf.win/privacy/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
