import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - PixelPDF",
  description: "Learn how PixelPDF uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
          <p className="text-slate-500 mb-6">Last updated: May 19, 2026</p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">What Are Cookies?</h2>
          <p className="text-slate-600 mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">How PixelPDF Uses Cookies</h2>
          <p className="text-slate-600 mb-4">We use cookies for the following purposes:</p>
          <ul className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-2">
              <span className="font-semibold text-slate-900">Essential Cookies:</span>
              <span>Required for the website to function properly. These cannot be disabled.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-slate-900">Analytics Cookies:</span>
              <span>Help us understand how visitors interact with our website using Google Analytics. These cookies collect information such as pages visited, time spent on the site, and error messages.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-slate-900">Advertising Cookies:</span>
              <span>Used by Google AdSense to display relevant advertisements. These cookies track browsing activity across websites to serve personalized ads.</span>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Third-Party Cookies</h2>
          <p className="text-slate-600 mb-4">We use the following third-party services that may set cookies:</p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Service</th>
                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Purpose</th>
                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-sm">Google Analytics</td>
                  <td className="border border-slate-200 px-4 py-3 text-sm">Website analytics</td>
                  <td className="border border-slate-200 px-4 py-3 text-sm">
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-sm">Google AdSense</td>
                  <td className="border border-slate-200 px-4 py-3 text-sm">Advertising</td>
                  <td className="border border-slate-200 px-4 py-3 text-sm">
                    <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Policy</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-sm">Cloudflare</td>
                  <td className="border border-slate-200 px-4 py-3 text-sm">CDN &amp; performance</td>
                  <td className="border border-slate-200 px-4 py-3 text-sm">
                    <a href="https://www.cloudflare.com/privacypolicy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Managing Cookies</h2>
          <p className="text-slate-600 mb-4">
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>View and delete existing cookies</li>
            <li>Block cookies from specific or all websites</li>
            <li>Block third-party cookies</li>
            <li>Set preferences for certain websites</li>
          </ul>
          <p className="text-slate-600 mb-4">
            Please note that disabling cookies may affect the functionality of our website.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Your Choices</h2>
          <p className="text-slate-600 mb-4">
            When you first visit PixelPDF, you will see a cookie consent banner. You can choose to:
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li><strong>Accept all cookies:</strong> Enable essential, analytics, and advertising cookies</li>
            <li><strong>Reject non-essential cookies:</strong> Only enable essential cookies</li>
            <li><strong>Manage preferences:</strong> Choose which categories of cookies to accept</li>
          </ul>
          <p className="text-slate-600 mb-4">
            You can change your cookie preferences at any time by clearing cookies in your browser settings and revisiting our website.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-slate-600 mb-4">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-600 mb-4">
            If you have any questions about our use of cookies, please contact us at:
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>Email: privacy@pixelpdf.win</li>
            <li>
              <a href="/contact/" className="text-blue-600 hover:underline">Contact Page</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
