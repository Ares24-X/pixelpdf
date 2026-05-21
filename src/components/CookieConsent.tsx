"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Declare gtag on window
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const COOKIE_CONSENT_KEY = "pixelpdf_cookie_consent";

interface ConsentState {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (state: ConsentState) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
    setVisible(false);

    // Apply GA4 based on consent
    if (state.analytics) {
      // GA4 is already loaded in layout.tsx, consent is recorded
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: state.advertising ? "granted" : "denied",
      });
    } else {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  const acceptAll = () => {
    const state = { essential: true, analytics: true, advertising: true };
    setConsent(state);
    saveConsent(state);
  };

  const rejectNonEssential = () => {
    const state = { essential: true, analytics: false, advertising: false };
    setConsent(state);
    saveConsent(state);
  };

  const savePreferences = () => {
    saveConsent(consent);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start gap-3">
            <span className="text-2xl">🍪</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">We value your privacy</h3>
              <p className="text-sm text-slate-600 mt-1">
                We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                <Link href="/cookie-policy/" className="text-blue-600 hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          {/* Toggle Details */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-blue-600 hover:underline self-start min-h-[44px] flex items-center"
          >
            {showDetails ? "Hide options ▲" : "Manage options ▼"}
          </button>

          {/* Detailed Options */}
          {showDetails && (
            <div className="space-y-3 border-t border-slate-100 pt-3">
              {/* Essential */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Essential</p>
                  <p className="text-xs text-slate-500">Required for the website to function.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Always active</span>
                  <div className="h-6 w-11 rounded-full bg-blue-600 flex items-center px-0.5">
                    <div className="h-5 w-5 rounded-full bg-white shadow translate-x-5" />
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Analytics</p>
                  <p className="text-xs text-slate-500">Help us understand how you use our site.</p>
                </div>
                <button
                  onClick={() => setConsent({ ...consent, analytics: !consent.analytics })}
                  className={`relative h-6 w-11 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center ${
                    consent.analytics ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      consent.analytics ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Advertising */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Advertising</p>
                  <p className="text-xs text-slate-500">Used to deliver personalized ads.</p>
                </div>
                <button
                  onClick={() => setConsent({ ...consent, advertising: !consent.advertising })}
                  className={`relative h-6 w-11 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center ${
                    consent.advertising ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      consent.advertising ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            {showDetails && (
              <button
                onClick={savePreferences}
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors min-h-[44px]"
              >
                Save preferences
              </button>
            )}
            <button
              onClick={rejectNonEssential}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors min-h-[44px]"
            >
              Reject non-essential
            </button>
            <button
              onClick={acceptAll}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800 transition-colors min-h-[44px]"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
