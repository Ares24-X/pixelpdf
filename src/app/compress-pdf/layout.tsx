import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Compress PDF - Reduce PDF File Size Online Free | PixelPDF',
  description: 'Free online PDF compressor. Reduce PDF file size while maintaining quality. No upload to server, 100% secure and private.',
  openGraph: { title: 'Compress PDF - Reduce File Size Online', description: 'Compress PDF files for free. Reduce size, keep quality, no server upload.', url: 'https://pixelpdf.win/compress-pdf/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Compress PDF Files Online Without Losing Control"
        description="Reduce PDF file size in your browser so documents are easier to email, upload, store, and share. This tool is useful when a file is too large for an attachment limit or when you want lighter documents without the hassle of desktop software. Because compression runs locally on your device, your PDF stays private while you save space with a fast, free, and account-free workflow."
        howToSteps={[
          'Choose the PDF file that is too large to share or store easily.',
          'Run compression in your browser to reduce the document size.',
          'Download the smaller PDF and use it for upload, email, or backup.',
        ]}
        features={[
          'Shrinks PDF files locally in your browser for stronger privacy protection.',
          'Free compressor with no sign-up, subscription, or watermarked output.',
          'Useful for email attachments, online forms, cloud storage, and archiving.',
          'No software installation needed to reduce file size on any major platform.',
          'Designed to balance smaller output with practical reading quality.',
        ]}
        faqs={[
          {
            question: 'Why would I need to compress a PDF file?',
            answer:
              'Compression is helpful when your PDF is too large to send by email, upload to a website, or store efficiently in the cloud. Large scans, image-heavy reports, and exported presentations often produce oversized files. A smaller PDF is easier to share, quicker to transfer, and usually more convenient to manage across different devices and services.',
          },
          {
            question: 'Will compressing a PDF make it unreadable or blurry?',
            answer:
              'The goal is to reduce file size while keeping the document useful and readable for normal use. Some files may show slight quality changes, especially if they contain many large images, but the tool aims to preserve practical clarity. For everyday sharing, submissions, and storage, the result is typically much easier to work with than the original oversized file.',
          },
          {
            question: 'Is it safe to compress sensitive PDFs online?',
            answer:
              'This tool is built around browser-side processing, which means your document can be compressed directly on your device without depending on remote server handling in the normal workflow. That is valuable for confidential reports, internal forms, or personal records, because it reduces the need to send the file elsewhere just to make it smaller.',
          },
          {
            question: 'Can I use this before uploading documents to forms or job portals?',
            answer:
              'Yes. Many portals, application systems, and government forms limit PDF upload size. Compressing your file first can help it meet those limits without forcing you to recreate the document. It is especially useful for resumes, certificates, scanned paperwork, and supporting documents that need to fit within strict upload requirements.',
          },
          {
            question: 'Do I need to pay or register to reduce PDF size?',
            answer:
              'No. The compressor is free to use and does not require account creation before you can process and download your file. That makes it convenient for both urgent one-time fixes and regular document management. You can open the tool, compress your PDF, and save the smaller version without any sign-up friction.',
          },
        ]}
      />
    </>
  );
}
