import { Metadata } from 'next';

// Métadonnées par défaut
export const defaultMetadata: Metadata = {
  title: {
    default: 'Vibrance Online - Développement Web & Automation avec n8n',
    template: '%s | Vibrance Online'
  },
  description: 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n.',
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

// Métadonnées spécifiques pour chaque page
export const pageMetadata = {
  home: {
    title: 'Vibrance Online - Développement Web & Automation avec n8n',
    description: 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n.',
    keywords: ['vibrance online', 'développement web', 'automation n8n', 'n8n workflows', 'agence web']
  },
  
  about: {
    title: 'À propos - Vibrance Online',
    description: 'Découvrez notre équipe d\'experts en développement web et automation avec n8n. Notre mission est de simplifier vos processus et amplifier votre impact.',
    keywords: ['équipe vibrance online', 'experts n8n', 'mission entreprise', 'valeurs accessibilité efficacité innovation']
  },
  
  services: {
    title: 'Services - Développement Web & Automation avec n8n',
    description: 'Nos services de développement web, automation avec n8n, optimisation de processus et consulting pour propulser votre entreprise.',
    keywords: ['services n8n', 'développement web', 'automation workflows', 'optimisation processus', 'consulting digital']
  },
  
  portfolio: {
    title: 'Portfolio - Nos Réalisations',
    description: 'Découvrez nos projets de développement web et d\'automation avec n8n qui ont transformé nos clients.',
    keywords: ['projets web', 'réalisations n8n', 'cas d\'usage', 'clients satisfaits']
  },
  
  contact: {
    title: 'Contact - Vibrance Online',
    description: 'Contactez-nous pour discuter de votre projet de développement web ou d\'automation avec n8n. Devis gratuit et conseil personnalisé.',
    keywords: ['contact vibrance online', 'devis gratuit', 'conseil n8n', 'projet web']
  },
  
  pricing: {
    title: 'Tarifs - Plans Services',
    description: 'Découvrez nos tarifs et plans pour le développement web et l\'automation avec n8n. Solutions adaptées à votre budget et vos besoins.',
    keywords: ['tarifs développement web', 'plans n8n', 'prix automation', 'coût projet']
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
