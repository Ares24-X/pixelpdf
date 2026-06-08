import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Image to PDF - Convert JPG PNG to PDF Online Free | PixelPDF',
  description: 'Free online image to PDF converter. Convert JPG, PNG, WebP images to PDF format. No upload to server, 100% secure.',
  openGraph: { title: 'Image to PDF Converter Online', description: 'Convert images to PDF format. Free, secure, works in your browser.', url: 'https://pixelpdf.win/image-to-pdf/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Convert Images to PDF Online for Free"
        description="Combine JPG, PNG, and other common image formats into a single polished PDF right from your browser. This is useful for turning scans, photos, receipts, homework, portfolios, or screenshots into a document that is easier to print, send, and archive. Everything runs locally on your device, so you can create PDFs quickly without registration, software downloads, or uploading your images to a remote server."
        howToSteps={[
          'Select the images you want to include in your PDF document.',
          'Arrange the image order and create the PDF in your browser.',
          'Download the finished PDF file and share or print it anywhere.',
        ]}
        features={[
          'Turns multiple images into one PDF without sending files to a server.',
          'Completely free with no registration, login, or hidden paywall.',
          'Supports common image formats for scans, photos, receipts, and screenshots.',
          'Browser-side processing helps protect personal and business documents.',
          'Works instantly on laptops, tablets, and phones with modern browsers.',
        ]}
        faqs={[
          {
            question: 'Can I combine multiple JPG or PNG files into one PDF?',
            answer:
              'Yes. You can add multiple images and convert them into a single PDF document in one session. This is especially useful for scanned pages, photo-based reports, receipts, and step-by-step screenshots. Instead of sharing many separate image files, you get one organized PDF that is easier to send, print, or archive.',
          },
          {
            question: 'Will my image files be uploaded during conversion?',
            answer:
              'No server upload is required for the main conversion flow. The tool processes your selected images directly in the browser, which helps keep sensitive content on your device. If you are working with ID scans, internal paperwork, or private forms, this local approach offers more control and less exposure than many cloud-only converters.',
          },
          {
            question: 'What kinds of images can I convert to PDF?',
            answer:
              'The tool is built for popular image formats such as JPG and PNG, and it is suitable for photos, scanned documents, artwork, receipts, and screenshots. If your goal is to package visual files into a format that looks more professional and is easier to print or email, converting them into a PDF is usually the simplest solution.',
          },
          {
            question: 'Is this useful for printing image collections as documents?',
            answer:
              'Definitely. PDFs are often easier to print consistently than a folder full of images because the pages stay in a predictable order and are packaged in one file. That makes this tool helpful for school assignments, business records, product sheets, travel documents, or any situation where you want a cleaner print-ready result.',
          },
          {
            question: 'Do I need an account or paid plan to convert images to PDF?',
            answer:
              'No. You can use the converter immediately without creating an account or subscribing to anything. There is no sign-up wall before download, so it works well for quick one-time jobs and regular document tasks alike. Just choose your images, create the PDF, and save the result when it is ready.',
          },
        ]}
      />
    </>
  );
}
