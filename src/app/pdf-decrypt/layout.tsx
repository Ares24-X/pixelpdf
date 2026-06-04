import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Decrypt PDF - Remove Password from PDF Online Free | PixelPDF',
  description: 'Free online PDF decryption tool. Remove password protection from PDF files. No upload to server, 100% private and secure.',
  openGraph: { title: 'Decrypt PDF - Remove Password Protection', description: 'Remove password from your PDF files. Free, secure, browser-based.', url: 'https://pixelpdf.win/pdf-decrypt/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
