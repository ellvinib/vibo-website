# VIBO IT CONSULTING - Website Project

## Missie
Bouw een professionele bedrijfswebsite voor VIBO IT CONSULTING BV die:
- De AI-expertise van het bedrijf uitstraalt
- Leads genereert via contactformulieren
- SEO-geoptimaliseerd is voor "IT consultancy België", "AI consultancy", etc.
- Meertalig is (NL/FR/EN)
- Responsive werkt op alle devices

## Bedrijfsinformatie
- **Naam:** VIBO IT CONSULTING BV
- **KBO:** 0662.548.503
- **CEO:** Vincent Bouillart
- **Focus:** AI-gedreven IT consultancy voor Belgische KMOs
- **Brand kleur:** #1e40af (donkerblauw)
- **Website domein:** vibo-it.be (live), development op aidev.be
- **LinkedIn:** https://www.linkedin.com/in/vincentbouillart/
- **Facebook:** https://www.facebook.com/profile.php?id=61580253793249
- **Instagram:** Nog aan te maken

## Tech Stack
- **Framework:** Next.js 15 met App Router (static export voor FTP hosting)
- **Styling:** Tailwind CSS + shadcn/ui
- **Taal:** TypeScript strict mode
- **Hosting:** FTP server (static site deployment)
- **CMS:** MDX voor blog posts
- **Formulieren:** Formspree of Getform (geen server-side nodig)
- **Analytics:** Google Analytics 4
- **Email:** Formspree voor contactformulieren (geen server nodig)

## Pagina Structuur
1. **Home** - Hero, diensten overview, social proof, CTA
2. **Diensten** - AI Consultancy, Development, Audits, Managed Support
3. **Over Ons** - Vincent's verhaal, team (AI agents), missie
4. **Cases** - Klant cases en resultaten
5. **Insights/Blog** - Thought leadership content
6. **Contact** - Formulier, locatie, social links

## Conventies
- Communiceer in het Nederlands in comments en documentatie
- Gebruik TypeScript strict mode
- Volg Next.js App Router best practices
- Components in `src/components/`
- Pages in `src/app/`
- Internationalisatie via next-intl
- SEO meta tags op elke pagina

## Deployment (FTP)
De site wordt als static export gedeployed via FTP.

### Build
```bash
npm run build    # Next.js static export -> /out directory
```

### Deploy naar FTP
Gebruik de environment variabelen FTP_HOST, FTP_USER, FTP_PASS, FTP_WEBROOT:
```bash
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST -e "mirror --reverse --delete --verbose out/ $FTP_WEBROOT/; quit"
```

### Next.js Config voor Static Export
In `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

### BELANGRIJK
- De site MOET werken als static HTML (geen server-side rendering)
- Alle formulieren via externe dienst (Formspree/Getform)
- Afbeeldingen geoptimaliseerd opslaan (geen Next.js Image optimization)
- Na elke significante wijziging: build + deploy via FTP
- Test domein: aidev.be
- Productie domein: vibo-it.be
