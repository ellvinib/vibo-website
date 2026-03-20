"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const listeners = new Set<() => void>();
let consentAccepted = false;

function subscribeFn(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  consentAccepted = localStorage.getItem("cookie-consent") === "accepted";

  const handleConsent = () => {
    consentAccepted = true;
    listeners.forEach((l) => l());
  };
  window.addEventListener("cookie-consent-accepted", handleConsent);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("cookie-consent-accepted", handleConsent);
  };
}

function getSnapshot() {
  return consentAccepted;
}

function getServerSnapshot() {
  return false;
}

export function GoogleAnalytics() {
  const hasConsent = useSyncExternalStore(subscribeFn, getSnapshot, getServerSnapshot);

  if (!GA_MEASUREMENT_ID || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
