export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">About PixelPDF</h1>
          <p className="text-slate-600 mb-4">PixelPDF is a free online PDF tool suite designed to make working with PDF files simple and secure.</p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-4">We believe that working with PDFs should be easy and accessible to everyone.</p>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Why Choose PixelPDF?</h2>
          <ul className="space-y-2 text-slate-600">
            <li>100% Free</li>
            <li>Secure - Your files never leave your device</li>
            <li>Fast - No server uploads</li>
            <li>Private - We never store your files</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
