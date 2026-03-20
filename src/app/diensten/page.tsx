import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Ontdek onze AI consultancy diensten: van strategie en assessment tot custom AI development, architectuur review en managed support voor Belgische KMO's.",
};

const serviceCategories = [
  {
    category: "AI Advies & Strategie",
    description:
      "Begrijp waar AI waarde toevoegt aan uw bedrijf en hoe u daar komt.",
    services: [
      {
        title: "AI Readiness Assessment",
        description:
          "Een grondige analyse van uw organisatie, processen en data om te bepalen waar AI de meeste impact kan maken. U ontvangt een concreet rapport met prioriteiten, haalbaarheid en verwachte ROI.",
        features: [
          "Analyse van bedrijfsprocessen en data-maturiteit",
          "Identificatie van AI-kansen met hoogste ROI",
          "Concreet actieplan met prioriteiten",
          "Management presentatie met bevindingen",
        ],
        pricing: "Vanaf €2.500",
        duration: "2-3 weken",
      },
      {
        title: "AI Strategie Workshop",
        description:
          "Een interactieve workshop met uw management team om een AI-visie en roadmap te ontwikkelen die aansluit bij uw bedrijfsstrategie.",
        features: [
          "Halve of hele dag workshop op locatie",
          "AI use case identificatie en prioritering",
          "Quick wins en lange termijn strategie",
          "Hands-on demo's van relevante AI-technologieën",
        ],
        pricing: "Vanaf €1.500",
        duration: "1 dag",
      },
      {
        title: "AI Roadmap & Governance",
        description:
          "Een uitgewerkte roadmap voor uw AI-transformatie inclusief governance framework, data strategie en change management plan.",
        features: [
          "Gefaseerde implementatie roadmap",
          "AI governance en ethisch kader",
          "Data strategie en kwaliteitsplan",
          "Change management aanpak",
        ],
        pricing: "Vanaf €5.000",
        duration: "4-6 weken",
      },
    ],
  },
  {
    category: "Implementatie & Development",
    description:
      "Van proof-of-concept tot productie-klare AI-oplossingen.",
    services: [
      {
        title: "Proof of Concept (PoC)",
        description:
          "Snel valideren of een AI-oplossing werkt voor uw specifieke use case. Binnen 4-6 weken een werkend prototype met meetbare resultaten.",
        features: [
          "Snelle validatie van AI use cases",
          "Werkend prototype in 4-6 weken",
          "Meetbare KPI's en succescriteria",
          "Go/no-go advies voor productie",
        ],
        pricing: "Vanaf €5.000",
        duration: "4-6 weken",
      },
      {
        title: "Custom AI Development",
        description:
          "Op maat gemaakte AI-oplossingen voor uw bedrijf. Intelligente chatbots, documentverwerking, predictive analytics of procesautomatisering — gebouwd voor uw specifieke noden.",
        features: [
          "Maatwerkoplossingen voor uw bedrijf",
          "Integratie met bestaande systemen",
          "Schaalbare en onderhoudbare architectuur",
          "Training en kennisoverdracht",
        ],
        pricing: "Op maat",
        duration: "8-16 weken",
      },
      {
        title: "Systeem Integratie",
        description:
          "Naadloze integratie van AI-oplossingen met uw bestaande IT-landschap. ERP, CRM, datawarehouses en andere bedrijfssystemen.",
        features: [
          "API-first integratie aanpak",
          "Koppeling met ERP, CRM en andere systemen",
          "Data pipeline ontwikkeling",
          "Monitoring en alerting setup",
        ],
        pricing: "Op maat",
        duration: "4-12 weken",
      },
    ],
  },
  {
    category: "Audit & Ondersteuning",
    description:
      "Zorg dat uw IT-landschap en AI-systemen optimaal blijven presteren.",
    services: [
      {
        title: "Architectuur Review",
        description:
          "Een grondige doorlichting van uw bestaande IT-architectuur. Wij identificeren bottlenecks, security risico's en optimalisatiemogelijkheden.",
        features: [
          "Analyse van huidige architectuur",
          "Security en compliance check",
          "Schaalbaarheid en performance review",
          "Concrete aanbevelingen en prioriteiten",
        ],
        pricing: "Vanaf €3.000",
        duration: "2-3 weken",
      },
      {
        title: "Security & Compliance Audit",
        description:
          "Beoordeling van uw AI-systemen op security, privacy (GDPR) en ethische aspecten. Essentieel voor verantwoord AI-gebruik.",
        features: [
          "GDPR en AI Act compliance check",
          "Data privacy en security assessment",
          "Ethische AI evaluatie",
          "Remediatie plan met prioriteiten",
        ],
        pricing: "Vanaf €3.500",
        duration: "2-4 weken",
      },
      {
        title: "Managed AI Support",
        description:
          "Doorlopende ondersteuning en optimalisatie van uw AI-systemen. Monitoring, updates en continue verbetering zodat uw AI-investeringen rendabel blijven.",
        features: [
          "24/7 monitoring van AI-systemen",
          "Proactief onderhoud en updates",
          "Performance optimalisatie",
          "Maandelijkse rapportage en advies",
        ],
        pricing: "Vanaf €1.500/maand",
        duration: "Doorlopend",
      },
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-dark text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold animate-fade-in-up">
            Onze Diensten
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl animate-fade-in-up animate-delay-200">
            Van AI-strategie tot implementatie en doorlopend beheer. Wij bieden
            end-to-end AI consultancy op maat van Belgische KMO&apos;s.
          </p>
        </div>
      </section>

      {serviceCategories.map((category) => (
        <section
          key={category.category}
          className="py-16 sm:py-20 odd:bg-light even:bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                {category.category}
              </h2>
              <p className="mt-3 text-muted text-lg">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <svg
                          className="w-4 h-4 text-accent mt-0.5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-lg font-bold text-primary">
                        {service.pricing}
                      </span>
                      <span className="text-sm text-muted">
                        {service.duration}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-primary text-white font-medium px-6 py-2.5 rounded-lg hover:bg-primary-light transition-colors text-sm"
                    >
                      Meer informatie
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Niet zeker welke dienst u nodig heeft?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Plan een gratis kennismakingsgesprek. Wij helpen u de juiste aanpak
            te bepalen voor uw situatie.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-primary text-white font-semibold px-10 py-4 rounded-lg hover:bg-primary-light transition-colors"
          >
            Gratis gesprek plannen
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
