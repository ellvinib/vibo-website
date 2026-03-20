"use client";

import { useSyncExternalStore } from "react";

let consentSnapshot: string | null = null;
const listeners = new Set<() => void>();

function getSnapshot() {
  return consentSnapshot;
}

function getServerSnapshot() {
  return null;
}

function subscribeFn(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  consentSnapshot = localStorage.getItem("cookie-consent");
  return () => listeners.delete(onStoreChange);
}

function setConsent(value: string) {
  localStorage.setItem("cookie-consent", value);
  consentSnapshot = value;
  listeners.forEach((l) => l());
  if (value === "accepted") {
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  }
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribeFn, getSnapshot, getServerSnapshot);

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            Wij gebruiken cookies om onze website te verbeteren en uw ervaring te
            optimaliseren. Analytische cookies helpen ons begrijpen hoe bezoekers
            onze site gebruiken.{" "}
            <a href="/privacy" className="text-accent underline hover:text-accent-light">
              Privacybeleid
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setConsent("declined")}
            className="px-5 py-2 text-sm border border-gray-500 rounded-lg hover:bg-white/10 transition-colors"
          >
            Weigeren
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="px-5 py-2 text-sm bg-accent text-dark font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
