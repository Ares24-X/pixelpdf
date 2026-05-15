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
        </div>
      </div>
    </div>
  );
}
