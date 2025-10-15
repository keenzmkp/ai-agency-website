import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  locale?: string;
}

export const generateMetadata = ({
  title = 'Agence AI - Solutions d\'Automation IA pour Entreprises',
  description = 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure. Développement web, intelligence artificielle, et consulting digital pour propulser votre croissance.',
  keywords = [
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
  image = '/images/og-image.jpg',
  url = 'https://agence-ai.fr',
  type = 'website',
  locale = 'fr_FR'
}: SEOProps = {}): Metadata => {
  const fullTitle = title.includes('Agence AI') ? title : `${title} | Agence AI`;
  const fullUrl = url.startsWith('http') ? url : `https://agence-ai.fr${url}`;
  const fullImage = image.startsWith('http') ? image : `https://agence-ai.fr${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
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
      canonical: fullUrl,
      languages: {
        'fr-FR': '/fr',
        'en-US': '/en',
      },
    },
    openGraph: {
      type,
      locale,
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: 'Agence AI',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
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
};

// Métadonnées par défaut pour les pages
export const defaultSEO = generateMetadata();

// Métadonnées spécifiques pour chaque page
export const pageSEO = {
  home: generateMetadata({
    title: 'Agence AI - Solutions d\'Automation IA pour Entreprises',
    description: 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure. Développement web, intelligence artificielle, et consulting digital.',
    keywords: ['agence web', 'automation IA', 'intelligence artificielle', 'développement web', 'consulting digital']
  }),
  
  about: generateMetadata({
    title: 'À propos - Agence AI',
    description: 'Découvrez notre équipe d\'experts en IA et notre mission de transformer les entreprises avec l\'intelligence artificielle.',
    keywords: ['équipe IA', 'experts intelligence artificielle', 'mission agence', 'valeurs entreprise']
  }),
  
  services: generateMetadata({
    title: 'Services - Automation IA et Développement Web',
    description: 'Nos services d\'automation IA, développement web, consulting digital et formation pour propulser votre entreprise.',
    keywords: ['services automation IA', 'développement web', 'consulting digital', 'formation IA', 'RPA']
  }),
  
  portfolio: generateMetadata({
    title: 'Portfolio - Nos Réalisations en Automation IA',
    description: 'Découvrez nos projets d\'automation IA et de développement web qui ont transformé nos clients.',
    keywords: ['projets IA', 'réalisations automation', 'cas d\'usage', 'clients satisfaits']
  }),
  
  contact: generateMetadata({
    title: 'Contact - Agence AI',
    description: 'Contactez-nous pour discuter de votre projet d\'automation IA. Devis gratuit et conseil personnalisé.',
    keywords: ['contact agence IA', 'devis gratuit', 'conseil automation', 'projet IA']
  }),
  
  pricing: generateMetadata({
    title: 'Tarifs - Plans Automation IA',
    description: 'Découvrez nos tarifs et plans pour l\'automation IA. Solutions adaptées à votre budget et vos besoins.',
    keywords: ['tarifs automation IA', 'plans agence', 'prix développement', 'coût projet IA']
  })
};

// Schema.org JSON-LD
export const generateSchemaOrg = ({
  title,
  description,
  url,
  type = 'WebSite',
  image,
  datePublished,
  dateModified,
  author
}: {
  title: string;
  description: string;
  url: string;
  type?: 'WebSite' | 'Article' | 'Organization' | 'Service';
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url,
    image: image || 'https://agence-ai.fr/images/og-image.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'Agence AI',
      url: 'https://agence-ai.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://agence-ai.fr/images/logo.png'
      }
    }
  };

  if (type === 'Article' && datePublished) {
    return {
      ...baseSchema,
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': 'Person',
        name: author || 'Agence AI'
      }
    };
  }

  if (type === 'Service') {
    return {
      ...baseSchema,
      provider: {
        '@type': 'Organization',
        name: 'Agence AI',
        url: 'https://agence-ai.fr'
      },
      serviceType: 'Automation IA et Développement Web',
      areaServed: 'France',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://agence-ai.fr/contact',
        serviceName: 'Contact Agence AI'
      }
    };
  }

  return baseSchema;
};

// Métadonnées pour les articles de blog
export const generateBlogMetadata = ({
  title,
  description,
  slug,
  date,
  author = 'Agence AI',
  tags = []
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author?: string;
  tags?: string[];
}) => {
  return generateMetadata({
    title,
    description,
    keywords: [...tags, 'blog', 'article', 'automation IA', 'intelligence artificielle'],
    url: `/blog/${slug}`,
    type: 'article',
    image: `/images/blog/${slug}.jpg`
  });
};
