import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met VIBO IT Consulting. Wij reageren binnen 24 uur op uw bericht.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-dark text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold animate-fade-in-up">
            Contact
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl animate-fade-in-up animate-delay-200">
            Heeft u een vraag of wilt u samenwerken? Vul het formulier in en
            wij nemen zo snel mogelijk contact met u op.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
              <p className="mt-4 text-xs text-muted">
                Door dit formulier te verzenden gaat u akkoord met onze
                verwerking van uw persoonsgegevens conform de GDPR. Wij
                gebruiken uw gegevens uitsluitend om uw vraag te beantwoorden
                en verwijderen deze na afhandeling.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Contactgegevens
                </h3>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@vibo-it.be</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>België</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>KBO: 0662.548.503</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Volg ons
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/vincentbouillart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61580253793249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Reactietijd
                </h3>
                <p className="text-muted text-sm">
                  Wij reageren binnen 24 uur op werkdagen. Voor urgente zaken
                  kunt u ons ook via LinkedIn bereiken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
