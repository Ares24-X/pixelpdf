import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Rotate PDF - Rotate PDF Pages Online Free | PixelPDF',
  description: 'Free online PDF rotation tool. Rotate PDF pages clockwise or counterclockwise. No upload to server, fast and secure.',
  openGraph: { title: 'Rotate PDF - Rotate Pages Online', description: 'Rotate PDF pages for free. No server upload, works in your browser.', url: 'https://pixelpdf.win/rotate-pdf/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Rotate PDF Pages Online in Seconds"
        description="Fix sideways or upside-down PDF pages directly in your browser without installing editing software. This tool is useful for scanned documents, phone-captured pages, contracts, forms, and reports that need the correct reading orientation before sharing or printing. With local browser processing, your files stay private on your device while page rotation remains fast, free, and easy to use without registration."
        howToSteps={[
          'Upload the PDF that contains incorrectly oriented pages.',
          'Rotate the needed pages clockwise or counterclockwise as required.',
          'Download the corrected PDF with the new page orientation saved.',
        ]}
        features={[
          'Rotates PDF pages in the browser so your files stay on your device.',
          'Free to use with no account, login, or software download required.',
          'Perfect for scanned pages, camera captures, forms, and mixed-orientation files.',
          'Quickly corrects reading direction before printing, emailing, or archiving.',
          'Works across major browsers on desktop and mobile for easy access anywhere.',
        ]}
        faqs={[
          {
            question: 'When would I need to rotate pages in a PDF?',
            answer:
              'Rotation is useful when scanned pages appear sideways, phone photos were saved in the wrong orientation, or some pages in a document do not match the rest. Correcting page direction makes the file easier to read, print, review, and share. It is especially helpful for forms, receipts, contracts, and multi-page scans.',
          },
          {
            question: 'Can I rotate only specific pages instead of the whole PDF?',
            answer:
              'Yes. A good PDF rotation workflow focuses on the pages that need correction rather than changing everything. This is ideal for mixed documents where just a few scans are upside down or turned sideways. It saves time and helps keep the rest of the file exactly as it already appears.',
          },
          {
            question: 'Is the rotation process private for sensitive documents?',
            answer:
              'Yes, the tool is designed to work locally in your browser so the PDF can be processed on your own device during normal use. That makes it more suitable for documents such as internal reports, signed forms, or personal records, where sending files to a third-party server would be less desirable from a privacy standpoint.',
          },
          {
            question: 'Will rotating a PDF page change the page content itself?',
            answer:
              'The purpose of rotation is to adjust orientation, not rewrite the content. Text, images, and page elements stay the same, but the page is saved in a more readable direction. This makes the document look correct for viewing and printing without requiring you to recreate scans or manually copy content into a new file.',
          },
          {
            question: 'Do I need a login to rotate PDF pages online?',
            answer:
              'No. You can use the tool immediately without creating an account or subscribing to a service. That is helpful when you need a quick fix on a shared computer, a work laptop, or a mobile device. Upload the file, rotate the necessary pages, and download the corrected PDF without any registration delay.',
          },
        ]}
      />
    </>
  );
}
