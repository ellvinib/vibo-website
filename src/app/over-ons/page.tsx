import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Leer VIBO IT Consulting kennen. Onder leiding van Vincent Bouillart helpen wij Belgische KMO's met AI-gedreven IT consultancy.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-dark text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold animate-fade-in-up">
            Over VIBO IT Consulting
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl animate-fade-in-up animate-delay-200">
            AI-gedreven IT consultancy voor Belgische KMO&apos;s. Wij maken
            slimme technologie toegankelijk.
          </p>
        </div>
      </section>

      {/* Vincent & het verhaal */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                Het verhaal achter VIBO
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                VIBO IT Consulting BV is opgericht door Vincent Bouillart met
                een duidelijke missie: AI toegankelijk maken voor Belgische
                KMO&apos;s. Niet de hype, maar concrete resultaten.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Met jarenlange ervaring in IT consultancy en software development
                zag Vincent dat veel bedrijven de boot dreigden te missen op het
                vlak van AI. Niet door gebrek aan ambitie, maar door een tekort
                aan praktische begeleiding. Daar brengt VIBO verandering in.
              </p>
              <p className="text-muted leading-relaxed">
                Wij geloven dat elke KMO kan profiteren van slimme technologie —
                als het op de juiste manier wordt ingezet. Daarom combineren wij
                diepgaande technische expertise met een hands-on aanpak die past
                bij de realiteit van het Belgische bedrijfsleven.
              </p>
            </div>
            <div className="bg-light rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary">
                  Vincent Bouillart
                </h3>
                <p className="text-accent font-medium">CEO & Founder</p>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                AI-liefhebber, technologie-ondernemer en bridge builder tussen
                business en technologie. Vincent helpt bedrijven navigeren in het
                snel evoluerende AI-landschap met een pragmatische aanpak.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/vincentbouillart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61580253793249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missie & Waarden */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-12 text-center">
            Onze Missie & Waarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-First Aanpak",
                description:
                  "Wij geloven dat AI de sleutel is tot concurrentiekracht. Elk advies en elke oplossing begint met de vraag: hoe kan AI hier waarde toevoegen?",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                title: "Pragmatisch & Resultaatgericht",
                description:
                  "Geen eindeloze rapporten, maar concrete oplossingen. Wij focussen op meetbare resultaten en snelle time-to-value voor uw investering.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Persoonlijk & Transparant",
                description:
                  "Korte lijnen, eerlijk advies en een partner die meegaat in uw verhaal. Wij zeggen ook wanneer AI niet de juiste oplossing is.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bedrijfsinfo */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl font-bold mb-8">Bedrijfsinformatie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-300 mb-1">Bedrijfsnaam</div>
                <div className="font-semibold">VIBO IT CONSULTING BV</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">KBO-nummer</div>
                <div className="font-semibold">0662.548.503</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Vestiging</div>
                <div className="font-semibold">België</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">E-mail</div>
                <div className="font-semibold">info@vibo-it.be</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Laten we kennismaken
          </h2>
          <p className="mt-4 text-lg text-muted">
            Benieuwd wat AI kan betekenen voor uw bedrijf? Plan een vrijblijvend
            gesprek.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-primary text-white font-semibold px-10 py-4 rounded-lg hover:bg-primary-light transition-colors"
          >
            Neem contact op
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
