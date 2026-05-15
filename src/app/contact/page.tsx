export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-slate-600 mb-8">Have questions or feedback? We&apos;d love to hear from you.</p>
          <div className="p-6 bg-slate-50 rounded-xl">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Email</h2>
            <a href="mailto:support@pixelpdf.com" className="text-blue-600 hover:underline font-medium">support@pixelpdf.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
