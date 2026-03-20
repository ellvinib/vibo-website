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
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Reactietijd
                </h3>
                <p className="text-muted text-sm">
                  Wij reageren binnen 24 uur op werkdagen. Voor urgente zaken
                  kunt u ons ook telefonisch bereiken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
