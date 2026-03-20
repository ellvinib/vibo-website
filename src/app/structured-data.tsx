export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VIBO IT Consulting BV",
    url: "https://vibo-it.nl",
    description:
      "AI-gedreven IT consultancy diensten. Software development, cloud oplossingen en digitale transformatie.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@vibo-it.nl",
      contactType: "customer service",
      availableLanguage: ["Dutch", "English"],
    },
  };

  // Static schema data only - no user input, safe for JSON-LD injection
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VIBO IT Consulting",
    url: "https://vibo-it.nl",
    description: "AI-gedreven IT consultancy diensten",
    publisher: {
      "@type": "Organization",
      name: "VIBO IT Consulting BV",
    },
  };

  // Static schema data only - no user input, safe for JSON-LD injection
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
