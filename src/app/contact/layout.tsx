import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact PixelPDF - Get in Touch | PixelPDF',
  description: 'Contact PixelPDF for support, feedback, or business inquiries. We are happy to help with any questions about our free PDF tools.',
  openGraph: { title: 'Contact PixelPDF', description: 'Get in touch with the PixelPDF team.', url: 'https://pixelpdf.win/contact/', type: 'website' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
