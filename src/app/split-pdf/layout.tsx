import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Split PDF - Extract Pages from PDF Online Free | PixelPDF',
  description: 'Free online PDF splitter. Extract specific pages or split PDF into multiple files. No upload to server, 100% private.',
  openGraph: { title: 'Split PDF - Extract Pages Online', description: 'Split PDF files into multiple documents. Free, secure, no server upload.', url: 'https://pixelpdf.win/split-pdf/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Split PDF Pages and Extract Files Online"
        description="Separate a large PDF into smaller documents or extract only the pages you actually need, all inside your browser. This tool is useful for breaking apart reports, sharing selected chapters, sending just a signature page, or saving specific sections from a long file. Local browser processing keeps your documents private while making PDF page extraction fast, simple, and free from sign-up barriers."
        howToSteps={[
          'Upload the PDF file you want to split or trim.',
          'Choose the pages or ranges you want to extract into new files.',
          'Download the split PDF output that matches your selection.',
        ]}
        features={[
          'Extracts selected PDF pages without uploading your file to a server.',
          'Free and ready to use with no account creation or software install.',
          'Helpful for isolating chapters, forms, invoices, or signature pages.',
          'Browser-side processing adds privacy for personal and work documents.',
          'Creates smaller PDFs that are easier to email, store, and organize.',
        ]}
        faqs={[
          {
            question: 'Can I extract only certain pages instead of splitting the whole PDF?',
            answer:
              'Yes. You can select specific pages or ranges and create a new PDF from only those sections. That is useful when a long file contains just a few pages you need to send, print, archive, or review. It helps reduce clutter and avoids sharing unrelated information from the rest of the original document.',
          },
          {
            question: 'What is this tool good for in everyday document work?',
            answer:
              'A PDF splitter is handy when you want to pull out invoices from a statement, isolate a signed page from a contract, separate chapters from a manual, or share only one section of a report. Instead of editing the original file manually, you can create a smaller targeted PDF in a much faster and cleaner way.',
          },
          {
            question: 'Are my PDF files uploaded anywhere during the split process?',
            answer:
              'The tool is designed to process files locally in your browser, so your PDF content stays on your device during normal use. That makes it a strong option for people who want to handle sensitive material such as legal documents, internal reports, or personal records without depending on a remote upload-based workflow.',
          },
          {
            question: 'Will splitting a PDF change the content of the pages I keep?',
            answer:
              'The purpose of splitting is to preserve the selected pages while creating a smaller PDF around them. In most normal cases, the extracted pages remain the same content-wise, just packaged into a new file. This gives you a convenient way to reorganize documents without rebuilding or resaving each page one by one.',
          },
          {
            question: 'Do I have to sign up before I can split a PDF online?',
            answer:
              'No. You can start using the splitter immediately without registration, account setup, or paid access. That makes it practical when you need to handle a document quickly on short notice. Open the page, choose your PDF, select the pages you want, and download the new file when the split is complete.',
          },
        ]}
      />
    </>
  );
}
