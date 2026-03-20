"use client";

import { useState } from "react";
import { trackEvent } from "../components/GoogleAnalytics";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const endpoint = formspreeId
      ? `https://formspree.io/f/${formspreeId}`
      : "https://formspree.io/f/YOUR_FORM_ID";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage("Er is iets misgegaan bij het verzenden.");
        return;
      }

      setStatus("success");
      trackEvent("generate_lead", "contact", data.subject);
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMessage("Kan geen verbinding maken met de server.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Bericht verzonden!</h3>
        <p className="text-green-700">
          Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-accent hover:text-accent-light underline"
        >
          Nog een bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Naam *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrijf
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
            placeholder="Uw bedrijf"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
          placeholder="uw@email.nl"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Onderwerp *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
        >
          <option value="">Selecteer een onderwerp</option>
          <option value="ai">AI & Machine Learning</option>
          <option value="development">Software Development</option>
          <option value="cloud">Cloud & Infrastructure</option>
          <option value="transformatie">Digitale Transformatie</option>
          <option value="anders">Anders</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow resize-y"
          placeholder="Vertel ons meer over uw project of vraag..."
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gdpr"
          name="gdpr"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
        />
        <label htmlFor="gdpr" className="text-sm text-muted">
          Ik ga akkoord met de verwerking van mijn persoonsgegevens conform de
          GDPR. VIBO IT Consulting gebruikt deze gegevens uitsluitend om mijn
          vraag te beantwoorden. *
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Verzenden..." : "Verstuur bericht"}
      </button>
    </form>
  );
}
