export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-600 mb-4">At PixelPDF, we take your privacy seriously.</p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Information We Don&apos;t Collect</h2>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>We do not upload or store your PDF files</li>
            <li>We do not collect the content of your documents</li>
            <li>We do not require user registration</li>
          </ul>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">How We Process Files</h2>
          <p className="text-slate-600 mb-6">All PDF processing happens locally in your web browser. Your files are never uploaded to our servers.</p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Cookies &amp; Tracking</h2>
          <p className="text-slate-600 mb-4">
            We use cookies and similar technologies to analyze website traffic and serve relevant advertisements.
            For more details, please visit our <a href="/cookie-policy/" className="text-blue-600 hover:underline">Cookie Policy</a>.
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li><strong>Google Analytics:</strong> Used to understand how visitors use our website</li>
            <li><strong>Google AdSense:</strong> Used to display advertisements</li>
            <li><strong>Cloudflare:</strong> Used for CDN and performance optimization</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-slate-600 mb-4">
            You have the right to access, correct, or delete any personal data we may hold about you.
            You can also opt out of cookies at any time through your browser settings or our cookie consent banner.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-600 mb-4">
            If you have questions about this privacy policy, please contact us at{" "}
            <a href="mailto:privacy@pixelpdf.win" className="text-blue-600 hover:underline">privacy@pixelpdf.win</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
