import Link from "next/link";

const services = [
  {
    title: "AI Readiness Assessment",
    description:
      "Wij analyseren uw huidige IT-landschap en bedrijfsprocessen om te bepalen waar AI de meeste impact kan maken. U krijgt een concreet actieplan met prioriteiten en ROI-schatting.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Custom AI Development",
    description:
      "Op maat gemaakte AI-oplossingen voor uw bedrijf. Van intelligente chatbots en documentverwerking tot predictive analytics en procesautomatisering.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Architectuur Review",
    description:
      "Een grondige doorlichting van uw bestaande IT-architectuur. Wij identificeren bottlenecks, security risico's en optimalisatiemogelijkheden voor schaalbaarheid.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Managed AI Support",
    description:
      "Doorlopende ondersteuning en optimalisatie van uw AI-systemen. Monitoring, updates, en continue verbetering zodat uw AI-investeringen rendabel blijven.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const trustItems = [
  { stat: "KBO 0662.548.503", label: "Geregistreerd in België" },
  { stat: "AI-First", label: "Aanpak sinds dag 1" },
  { stat: "KMO Focus", label: "Belgische bedrijven" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-light rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              AI-gedreven
              <br />
              <span className="text-accent">IT Consultancy</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-up animate-delay-200">
              Wij helpen Belgische KMO&apos;s hun bedrijfsprocessen te transformeren
              met slimme AI-oplossingen, bewezen expertise en een persoonlijke aanpak.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-dark font-semibold px-8 py-3 rounded-lg hover:bg-accent-light transition-colors"
              >
                Gratis AI Readiness Check
              </Link>
              <Link
                href="/#diensten"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Bekijk diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {trustItems.map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold text-primary">{item.stat}</div>
                <div className="text-sm text-muted mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section id="diensten" className="py-20 sm:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Onze Diensten
            </h2>
            <p className="mt-4 text-muted text-lg">
              Van AI-strategie tot implementatie en doorlopend beheer — wij bieden
              end-to-end AI consultancy voor Belgische KMO&apos;s.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Over Ons */}
      <section id="over-ons" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Over VIBO IT Consulting
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                VIBO IT Consulting BV is een AI-gedreven IT consultancy bureau
                gevestigd in België. Onder leiding van Vincent Bouillart
                combineren wij diepgaande technische expertise met strategisch
                inzicht om KMO&apos;s te helpen bij hun digitale transformatie.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Wij geloven dat AI niet voorbehouden is aan grote multinationals.
                Daarom maken wij slimme technologie toegankelijk voor Belgische
                bedrijven — met oplossingen die passen bij uw schaal en budget.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted mt-1">Jaar Ervaring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">AI-First</div>
                  <div className="text-sm text-muted mt-1">Aanpak</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted mt-1">Klant Focus</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Waarom VIBO?</h3>
              <ul className="space-y-4">
                {[
                  "Persoonlijke aanpak en korte lijnen",
                  "Bewezen expertise in AI & cloud",
                  "Focus op Belgische KMO's",
                  "Flexibele samenwerking op maat",
                  "Continue ondersteuning na oplevering",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Klaar om AI in te zetten voor uw bedrijf?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Plan een gratis kennismakingsgesprek. Wij reageren binnen 24 uur.
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
