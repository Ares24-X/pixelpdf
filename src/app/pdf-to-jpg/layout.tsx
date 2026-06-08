import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'PDF to JPG - Convert PDF to High-Quality Images Free | PixelPDF',
  description: 'Free online PDF to JPG converter. Convert PDF pages to high-quality JPG or PNG images. No file upload to server, 100% secure. Fast and easy.',
  openGraph: {
    title: 'PDF to JPG Converter - Convert PDF to Images Online',
    description: 'Convert PDF to JPG or PNG images. Free, secure, no server upload.',
    url: 'https://pixelpdf.win/pdf-to-jpg/',
    type: 'website',
  },
};

export default function PdfToJpgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Convert PDF to JPG Images Online"
        description="Turn each page of your PDF into a clear JPG image directly in your browser with no installation and no account required. This tool is ideal for sharing document previews, extracting visual pages for presentations, or saving individual pages as image files you can use anywhere. Because processing happens locally on your device, your files stay private while conversion remains fast, simple, and free to use whenever you need it."
        howToSteps={[
          'Upload or drag in the PDF file you want to convert.',
          'Choose JPG output and let the tool render each page as an image.',
          'Download the converted images individually or as a complete set.',
        ]}
        features={[
          'Browser-based conversion keeps your PDF pages on your device for better privacy.',
          'Free to use with no sign-up, subscription, or watermark required.',
          'Fast page-by-page export for reports, slides, scanned documents, and manuals.',
          'Creates image files that are easy to share, preview, and insert into other apps.',
          'Works on modern desktop and mobile browsers without installing software.',
        ]}
        faqs={[
          {
            question: 'Will every page of my PDF become a separate JPG file?',
            answer:
              'Yes. The converter processes your PDF page by page and creates a separate JPG image for each one. That makes it easy to save only the pages you need, share previews with others, or reuse specific visuals in slides, documents, or social posts without editing the original PDF manually.',
          },
          {
            question: 'Is this PDF to JPG converter safe for confidential files?',
            answer:
              'It is designed for privacy-conscious use because the conversion happens inside your browser instead of relying on server-side uploads. That means your PDF content stays on your device during processing. For many users, this is a safer option for invoices, contracts, internal drafts, and other files that should not be sent elsewhere.',
          },
          {
            question: 'Can I use the converted JPG images in presentations or websites?',
            answer:
              'Absolutely. JPG output is useful when you need visual page snapshots for PowerPoint decks, design mockups, web previews, or quick document sharing. Once converted, the images behave like standard picture files, so you can insert them into slides, email attachments, websites, and messaging apps with no special tools required.',
          },
          {
            question: 'Does converting PDF to JPG reduce quality?',
            answer:
              'Some visual differences can happen because a PDF page is being rendered into an image format, but the goal is to preserve readable text and clear graphics. For most everyday needs such as previews, sharing, and archiving selected pages as images, the exported JPGs remain sharp and practical while being easier to use in image-based workflows.',
          },
          {
            question: 'Do I need to create an account to convert PDF pages to images?',
            answer:
              'No. You can open the tool, choose your PDF, and convert it immediately without registration. There is no account setup, email collection, or waiting period before you can download your images. This keeps the process quick for one-off tasks and convenient for repeat use whenever you need a simple PDF image export.',
          },
        ]}
      />
    </>
  );
}
