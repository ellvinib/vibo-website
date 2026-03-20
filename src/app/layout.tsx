import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { CookieConsent } from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VIBO IT Consulting | AI-gedreven IT Consultancy",
    template: "%s | VIBO IT Consulting",
  },
  description:
    "VIBO IT Consulting biedt AI-gedreven IT consultancy diensten. Wij helpen bedrijven met digitale transformatie, software development, cloud oplossingen en AI integratie.",
  keywords: [
    "IT consultancy",
    "AI",
    "software development",
    "cloud",
    "digitale transformatie",
    "Nederland",
    "VIBO",
  ],
  authors: [{ name: "VIBO IT Consulting BV" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "VIBO IT Consulting",
    title: "VIBO IT Consulting | AI-gedreven IT Consultancy",
    description:
      "Wij helpen bedrijven met digitale transformatie, software development, cloud oplossingen en AI integratie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBO IT Consulting",
    description: "AI-gedreven IT Consultancy diensten",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          VIBO<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#diensten" className="text-sm text-muted hover:text-primary transition-colors">
            Diensten
          </Link>
          <Link href="/#over-ons" className="text-sm text-muted hover:text-primary transition-colors">
            Over Ons
          </Link>
          <Link href="/blog" className="text-sm text-muted hover:text-primary transition-colors">
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-light transition-colors"
          >
            Contact
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="cursor-pointer p-2 text-muted hover:text-primary"
        aria-label="Menu openen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <div className="peer-checked:flex hidden fixed inset-0 top-16 bg-white flex-col items-center gap-6 pt-12 z-40">
        <label htmlFor="mobile-menu" className="absolute top-4 right-6 cursor-pointer text-muted">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
        <Link href="/#diensten" className="text-lg text-muted hover:text-primary">Diensten</Link>
        <Link href="/#over-ons" className="text-lg text-muted hover:text-primary">Over Ons</Link>
        <Link href="/blog" className="text-lg text-muted hover:text-primary">Blog</Link>
        <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light">
          Contact
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              VIBO<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-gedreven IT consultancy diensten. Wij helpen bedrijven hun digitale ambities waar te maken.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#diensten" className="hover:text-white transition-colors">Diensten</Link></li>
              <li><Link href="/#over-ons" className="hover:text-white transition-colors">Over Ons</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@vibo-it.nl</li>
              <li>Nederland</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} VIBO IT Consulting BV. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
