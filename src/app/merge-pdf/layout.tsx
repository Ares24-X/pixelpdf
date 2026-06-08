import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Merge PDF - Combine Multiple PDFs Online Free | PixelPDF',
  description: 'Free online PDF merger. Combine multiple PDF files into one document. No upload to server, secure and fast.',
  openGraph: { title: 'Merge PDF - Combine PDFs Online', description: 'Combine multiple PDF files into one document. Free and secure.', url: 'https://pixelpdf.win/merge-pdf/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Merge PDF Files into One Document Online"
        description="Join multiple PDF files into a single document without installing desktop software or creating an account. This tool helps you organize contracts, reports, scanned pages, forms, or study materials into one clean file that is easier to store and share. Since processing happens in your browser, your PDFs remain private on your device while you combine them quickly and for free."
        howToSteps={[
          'Add the PDF files you want to combine into one document.',
          'Arrange them in the order you want before merging.',
          'Generate and download the merged PDF file instantly.',
        ]}
        features={[
          'Merges PDFs locally in your browser to help protect private documents.',
          'Free PDF combining tool with no account, subscription, or watermark.',
          'Simple drag-and-drop workflow for reports, forms, scans, and ebooks.',
          'Lets you control file order before creating the final combined document.',
          'No software installation needed on Windows, Mac, Linux, or mobile devices.',
        ]}
        faqs={[
          {
            question: 'Can I choose the order of files before merging PDFs?',
            answer:
              'Yes. Before creating the final document, you can arrange your PDF files in the sequence you want. This matters when combining chapters, receipts, signed pages, or scanned sections that need to appear in a precise order. Reordering first saves time and avoids having to fix the structure again after the merge is completed.',
          },
          {
            question: 'Is it safe to merge business or personal PDF files here?',
            answer:
              'The tool is designed to work in your browser, which means your files do not need to be processed on a remote server during normal use. That local approach is helpful when handling invoices, internal paperwork, or private records. It gives you more control over document privacy while still keeping the merge process quick and convenient.',
          },
          {
            question: 'Will the merged PDF keep the original pages from each file?',
            answer:
              'Yes. The goal of the merge tool is to preserve the pages from each source PDF and combine them into one continuous document. This is useful when you want to package separate documents together, such as contracts with attachments, reports with appendices, or multiple scans from the same project, without rebuilding the files from scratch.',
          },
          {
            question: 'Do I need to install Adobe Acrobat or other software to merge PDFs?',
            answer:
              'No. The merger runs directly in a modern browser, so you can combine files without installing extra applications. That makes it convenient on shared computers, work devices, school machines, or phones where software installation is restricted. You just open the page, add the files, and download the finished PDF when it is ready.',
          },
          {
            question: 'Is there a cost or registration requirement to combine PDF files?',
            answer:
              'No registration is required, and the tool is free to use. You can merge files immediately without creating an account, entering payment details, or waiting for a trial to activate. That makes it practical both for quick one-time tasks and for recurring document work when you need a straightforward way to combine PDFs online.',
          },
        ]}
      />
    </>
  );
}
