export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateFormatted: string;
  category: string;
  author: string;
}

const posts: BlogPost[] = [
  {
    slug: "ai-integratie-bedrijfsprocessen",
    title: "Hoe AI uw bedrijfsprocessen kan transformeren",
    excerpt:
      "Ontdek hoe kunstmatige intelligentie uw dagelijkse bedrijfsprocessen kan automatiseren en optimaliseren voor betere resultaten.",
    content: `
## Introductie

Kunstmatige intelligentie is niet langer een toekomstvisie — het is een realiteit die bedrijven vandaag al inzetten om hun processen te verbeteren. Bij VIBO IT Consulting zien wij dagelijks hoe AI concrete resultaten oplevert.

## Waar begint u?

De sleutel tot succesvolle AI-integratie is starten met een duidelijk probleem. Identificeer processen die:

- **Repetitief** zijn en veel tijd kosten
- **Data-intensief** zijn met patronen die moeilijk handmatig te herkennen zijn
- **Foutgevoelig** zijn door menselijke factoren

## Praktijkvoorbeelden

### Klantenservice automatisering
Met AI-gestuurde chatbots kunt u 24/7 klantvragen beantwoorden. Moderne taalmodellen begrijpen context en kunnen complexe vragen afhandelen.

### Predictive maintenance
Door sensordata te analyseren kan AI voorspellen wanneer apparatuur onderhoud nodig heeft, voordat er problemen ontstaan.

### Document verwerking
AI kan facturen, contracten en andere documenten automatisch classificeren en verwerken, waardoor administratief werk drastisch afneemt.

## Conclusie

AI-integratie hoeft niet complex te zijn. Begin klein, meet resultaten, en schaal op. Wij helpen u graag bij elke stap.
    `.trim(),
    date: "2026-03-15",
    dateFormatted: "15 maart 2026",
    category: "AI",
    author: "VIBO IT Consulting",
  },
  {
    slug: "cloud-migratie-stappenplan",
    title: "Cloud migratie: een praktisch stappenplan",
    excerpt:
      "Een helder stappenplan voor het migreren van uw on-premise infrastructuur naar de cloud. Van assessment tot optimalisatie.",
    content: `
## Waarom naar de cloud?

Cloud computing biedt schaalbaarheid, flexibiliteit en kostenefficiëntie die on-premise oplossingen moeilijk kunnen evenaren. Maar een succesvolle migratie vereist een doordacht plan.

## Het stappenplan

### 1. Assessment
Breng uw huidige infrastructuur in kaart. Welke applicaties draaien waar? Welke afhankelijkheden bestaan er? Wat zijn de huidige kosten?

### 2. Strategie kiezen
Niet elke applicatie migreert op dezelfde manier:
- **Lift & Shift**: Verplaats zonder aanpassingen
- **Re-platform**: Kleine optimalisaties voor de cloud
- **Re-architect**: Herbouw als cloud-native applicatie

### 3. Pilot project
Start met een niet-kritische applicatie om ervaring op te doen en processen te verfijnen.

### 4. Migratie uitvoeren
Migreer in fasen. Test grondig na elke fase en documenteer alles.

### 5. Optimalisatie
Na migratie: monitor kosten, optimaliseer resources en implementeer cloud-native features.

## Veelgemaakte fouten

- Geen duidelijk migratieplan hebben
- Beveiligingsaspecten over het hoofd zien
- Kosten niet monitoren na migratie
- Training van het team vergeten

## Hulp nodig?

VIBO IT Consulting begeleidt u door elke fase van uw cloud migratie. Neem contact op voor een vrijblijvend gesprek.
    `.trim(),
    date: "2026-03-10",
    dateFormatted: "10 maart 2026",
    category: "Cloud",
    author: "VIBO IT Consulting",
  },
  {
    slug: "digitale-transformatie-mkb",
    title: "Digitale transformatie voor het MKB: waar te beginnen",
    excerpt:
      "Digitale transformatie is niet alleen voor grote bedrijven. Ontdek hoe het MKB slim kan digitaliseren zonder grote investeringen.",
    content: `
## Digitalisering is voor iedereen

Digitale transformatie klinkt als iets voor grote corporates met miljoenenbudgetten. Maar juist het MKB kan enorm profiteren van slimme digitalisering — vaak met relatief kleine investeringen.

## Quick wins voor het MKB

### Automatiseer uw facturatie
Handmatig facturen maken kost uren per week. Met moderne tools automatiseert u dit proces volledig.

### Digitaliseer uw klantencontact
Een CRM-systeem geeft u overzicht over al uw klantrelaties en zorgt dat er geen kansen gemist worden.

### Werk in de cloud
Documenten delen via e-mail is achterhaald. Cloud-oplossingen als Microsoft 365 of Google Workspace maken samenwerken eenvoudig en veilig.

### Optimaliseer uw website
Uw website is uw digitale visitekaartje. Zorg voor snelle laadtijden, mobile-first design en goede vindbaarheid in zoekmachines.

## ROI van digitalisering

De investering verdient zich vaak snel terug:
- **30-50%** minder tijd aan administratie
- **20-30%** meer leads via digitale kanalen
- **Betere** klanttevredenheid door snellere service

## Aan de slag

Begin met een assessment: waar zit de meeste pijn? Welke processen kosten onevenredig veel tijd? Daar ligt uw eerste digitaliseringskans.
    `.trim(),
    date: "2026-03-05",
    dateFormatted: "5 maart 2026",
    category: "Strategie",
    author: "VIBO IT Consulting",
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug);
}
