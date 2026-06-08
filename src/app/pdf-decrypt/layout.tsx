import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Decrypt PDF - Remove Password from PDF Online Free | PixelPDF',
  description: 'Free online PDF decryption tool. Remove password protection from PDF files. No upload to server, 100% private and secure.',
  openGraph: { title: 'Decrypt PDF - Remove Password Protection', description: 'Remove password from your PDF files. Free, secure, browser-based.', url: 'https://pixelpdf.win/pdf-decrypt/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Remove PDF Password Protection Online"
        description="Unlock a password-protected PDF in your browser when you already have permission to access the file and want a version that opens more easily later. This tool is helpful for documents you use often, such as bills, reports, manuals, or archived files that no longer need repeated password entry. Local browser processing keeps the file on your device while password removal stays quick, free, and registration-free."
        howToSteps={[
          'Upload the protected PDF file that you are authorized to unlock.',
          'Enter the correct password so the browser can open the document.',
          'Download the unlocked PDF for easier future access and use.',
        ]}
        features={[
          'Removes PDF password protection locally in your browser for better privacy.',
          'Free to use with no sign-up, account creation, or software installation.',
          'Helpful for frequently used documents you are allowed to access already.',
          'Runs on modern browsers so you can unlock PDFs on desktop or mobile.',
          'Makes legitimate document reuse easier without repeated password prompts.',
        ]}
        faqs={[
          {
            question: 'When is it useful to remove a password from a PDF?',
            answer:
              'This is useful when a PDF belongs to you or you are authorized to use it, but entering the password every time has become inconvenient. Examples include monthly statements, internal manuals, archived records, or documents you need to open repeatedly. Creating an unlocked copy can simplify everyday access while preserving the original protected version if you want.',
          },
          {
            question: 'Do I need to know the password before removing PDF protection?',
            answer:
              'Yes. You must have the correct password and legitimate access to the document. The tool is meant for authorized unlocking, not bypassing security. Once the password is provided, the file can be opened in your browser and saved in a version that no longer asks for the password each time you use it.',
          },
          {
            question: 'Is it private to unlock a PDF with this browser-based tool?',
            answer:
              'The normal workflow is designed to run locally in your browser, which means your file does not need to be sent to a remote server just to remove the password. That local approach is especially helpful when handling sensitive bills, legal records, contracts, or company documents that you prefer to keep on your own device during processing.',
          },
          {
            question: 'Should I keep the unlocked copy after removing protection?',
            answer:
              'That depends on how sensitive the document is and how you plan to store it. An unlocked PDF is more convenient, but it should still be saved carefully because it no longer requires a password to open. Many people keep the protected original for backup and store the unlocked version only where device security and file access are well managed.',
          },
          {
            question: 'Do I have to register or pay to remove a PDF password?',
            answer:
              'No. The tool is free to use and does not require you to sign up before unlocking and downloading your file. That makes it practical when you need a quick, legitimate way to simplify access to a document you already own or have permission to manage, without installing extra software or creating an online account.',
          },
        ]}
      />
    </>
  );
}
