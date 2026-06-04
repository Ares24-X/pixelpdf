import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Encrypt PDF - Password Protect PDF Files Online Free | PixelPDF',
  description: 'Free online PDF encryption tool. Protect PDF files with password encryption. No upload to server, completely secure.',
  openGraph: { title: 'Encrypt PDF - Password Protect Files', description: 'Password protect your PDF files. Free, secure, runs in your browser.', url: 'https://pixelpdf.win/pdf-encrypt/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
