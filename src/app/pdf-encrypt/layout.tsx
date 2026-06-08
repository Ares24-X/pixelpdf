import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

export const metadata: Metadata = {
  title: 'Encrypt PDF - Password Protect PDF Files Online Free | PixelPDF',
  description: 'Free online PDF encryption tool. Protect PDF files with password encryption. No upload to server, completely secure.',
  openGraph: { title: 'Encrypt PDF - Password Protect Files', description: 'Password protect your PDF files. Free, secure, runs in your browser.', url: 'https://pixelpdf.win/pdf-encrypt/', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent
        title="Password Protect PDF Files Online"
        description="Add password protection to your PDF directly in the browser so only authorized people can open the file. This tool is useful for contracts, financial documents, HR files, school records, and any PDF that should not be freely accessible if forwarded or stored elsewhere. Since encryption runs on your device, your document stays private while you secure it quickly, for free, and without creating an account."
        howToSteps={[
          'Select the PDF file you want to protect with a password.',
          'Enter your chosen password and apply encryption in the browser.',
          'Download the protected PDF and share the password separately.',
        ]}
        features={[
          'Encrypts PDFs locally in your browser to keep sensitive files private.',
          'Free password protection tool with no registration or subscription needed.',
          'Useful for contracts, reports, statements, forms, and confidential records.',
          'No desktop app required to add an access password to a PDF file.',
          'Simple browser workflow for securing documents before storage or sharing.',
        ]}
        faqs={[
          {
            question: 'Why should I add a password to a PDF?',
            answer:
              'Password protection helps limit access to sensitive documents by requiring the recipient to enter a password before opening the file. This is useful for contracts, statements, personal records, internal reports, and other PDFs that should not be readable by anyone who receives or finds the document accidentally. It adds a practical extra layer of control before sharing.',
          },
          {
            question: 'Is this tool suitable for confidential business or personal documents?',
            answer:
              'Yes, especially because the encryption process is designed to run in your browser rather than relying on remote file uploads in the normal workflow. That means your PDF can stay on your device while protection is added. For many users, this is a better fit for confidential paperwork than tools that require sending the original document to an external server first.',
          },
          {
            question: 'How should I share the password after encrypting a PDF?',
            answer:
              'A good practice is to send the protected PDF and the password through different channels. For example, you might email the file but send the password in a separate message or phone call. This lowers the chance that one compromised channel gives access to both the document and the key needed to open it.',
          },
          {
            question: 'Will password protection stop people from seeing the PDF without permission?',
            answer:
              'It is intended to block casual access by requiring a password before the file opens. While no security measure is perfect in every context, password-protecting a PDF is a sensible step when you want better control over who can read the document. It is especially useful for routine business, administrative, and personal sharing scenarios.',
          },
          {
            question: 'Do I need to register before I can encrypt a PDF online?',
            answer:
              'No. You can protect a PDF immediately without account creation, sign-up forms, or paid activation. That makes the tool convenient when you need to secure a file quickly before sending it out. Choose the document, add a password, download the encrypted copy, and keep moving without any extra setup overhead.',
          },
        ]}
      />
    </>
  );
}
