import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { TranslationProvider } from '@/contexts/TranslationContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Agence AI - Solutions d\'Automation IA pour Entreprises',
    template: '%s | Agence AI'
  },
  description: 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure. Développement web, intelligence artificielle, et consulting digital pour propulser votre croissance.',
  keywords: [
    'agence web',
    'automation IA',
    'intelligence artificielle',
    'développement web',
    'consulting digital',
    'transformation digitale',
    'machine learning',
    'RPA',
    'B2B',
    'solutions IA'
  ],
  authors: [{ name: 'Agence AI' }],
  creator: 'Agence AI',
  publisher: 'Agence AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agence-ai.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://agence-ai.fr',
    title: 'Agence AI - Solutions d\'Automation IA pour Entreprises',
    description: 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure. Développement web, intelligence artificielle, et consulting digital.',
    siteName: 'Agence AI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agence AI - Solutions d\'Automation IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence AI - Solutions d\'Automation IA pour Entreprises',
    description: 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure.',
    images: ['/images/twitter-image.jpg'],
    creator: '@agence_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
