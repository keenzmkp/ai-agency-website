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
    default: 'Vibrance Online - Développement Web & Automation avec n8n',
    template: '%s | Vibrance Online'
  },
  description: 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n. Solutions sur mesure pour votre entreprise.',
  keywords: [
    'vibrance online',
    'développement web',
    'automation n8n',
    'n8n workflows',
    'agence web',
    'e-commerce',
    'applications web',
    'optimisation processus',
    'consulting digital',
    'transformation digitale',
    'workflow automation',
    'B2B'
  ],
  authors: [{ name: 'Vibrance Online' }],
  creator: 'Vibrance Online',
  publisher: 'Vibrance Online',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vibranceonline.com'),
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
    url: 'https://vibranceonline.com',
    title: 'Vibrance Online - Développement Web & Automation avec n8n',
    description: 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n.',
    siteName: 'Vibrance Online',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vibrance Online - Développement Web & Automation avec n8n',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibrance Online - Développement Web & Automation avec n8n',
    description: 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n.',
    images: ['/images/twitter-image.jpg'],
    creator: '@vibranceonline',
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
