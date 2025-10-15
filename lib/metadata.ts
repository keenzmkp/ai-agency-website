import { Metadata } from 'next';

// Métadonnées par défaut
export const defaultMetadata: Metadata = {
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

// Métadonnées spécifiques pour chaque page
export const pageMetadata = {
  home: {
    title: 'Agence AI - Solutions d\'Automation IA pour Entreprises',
    description: 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure. Développement web, intelligence artificielle, et consulting digital.',
    keywords: ['agence web', 'automation IA', 'intelligence artificielle', 'développement web', 'consulting digital']
  },
  
  about: {
    title: 'À propos - Agence AI',
    description: 'Découvrez notre équipe d\'experts en IA et notre mission de transformer les entreprises avec l\'intelligence artificielle.',
    keywords: ['équipe IA', 'experts intelligence artificielle', 'mission agence', 'valeurs entreprise']
  },
  
  services: {
    title: 'Services - Automation IA et Développement Web',
    description: 'Nos services d\'automation IA, développement web, consulting digital et formation pour propulser votre entreprise.',
    keywords: ['services automation IA', 'développement web', 'consulting digital', 'formation IA', 'RPA']
  },
  
  portfolio: {
    title: 'Portfolio - Nos Réalisations en Automation IA',
    description: 'Découvrez nos projets d\'automation IA et de développement web qui ont transformé nos clients.',
    keywords: ['projets IA', 'réalisations automation', 'cas d\'usage', 'clients satisfaits']
  },
  
  contact: {
    title: 'Contact - Agence AI',
    description: 'Contactez-nous pour discuter de votre projet d\'automation IA. Devis gratuit et conseil personnalisé.',
    keywords: ['contact agence IA', 'devis gratuit', 'conseil automation', 'projet IA']
  },
  
  pricing: {
    title: 'Tarifs - Plans Automation IA',
    description: 'Découvrez nos tarifs et plans pour l\'automation IA. Solutions adaptées à votre budget et vos besoins.',
    keywords: ['tarifs automation IA', 'plans agence', 'prix développement', 'coût projet IA']
  }
};

// Fonction pour générer les métadonnées d'une page
export function generatePageMetadata(page: keyof typeof pageMetadata): Metadata {
  const meta = pageMetadata[page];
  
  return {
    ...defaultMetadata,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: meta.title,
      description: meta.description,
    },
  };
}
