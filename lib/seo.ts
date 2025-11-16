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
  title = 'Vibrance Online - Développement Web & Automation avec n8n',
  description = 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n.',
  keywords = [
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
  image = '/images/og-image.jpg',
  url = 'https://vibranceonline.com',
  type = 'website',
  locale = 'fr_FR'
}: SEOProps = {}): Metadata => {
  const fullTitle = title.includes('Vibrance Online') ? title : `${title} | Vibrance Online`;
  const fullUrl = url.startsWith('http') ? url : `https://vibranceonline.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://vibranceonline.com${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
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
      siteName: 'Vibrance Online',
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
};

// Métadonnées par défaut pour les pages
export const defaultSEO = generateMetadata();

// Métadonnées spécifiques pour chaque page
export const pageSEO = {
  home: generateMetadata({
    title: 'Vibrance Online - Développement Web & Automation avec n8n',
    description: 'Simplifiez vos processus, amplifiez votre impact. Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n.',
    keywords: ['vibrance online', 'développement web', 'automation n8n', 'n8n workflows', 'agence web']
  }),
  
  about: generateMetadata({
    title: 'À propos - Vibrance Online',
    description: 'Découvrez notre équipe d\'experts en développement web et automation avec n8n. Notre mission est de simplifier vos processus et amplifier votre impact.',
    keywords: ['équipe vibrance online', 'experts n8n', 'mission entreprise', 'valeurs accessibilité efficacité innovation']
  }),
  
  services: generateMetadata({
    title: 'Services - Développement Web & Automation avec n8n',
    description: 'Nos services de développement web, automation avec n8n, optimisation de processus et consulting pour propulser votre entreprise.',
    keywords: ['services n8n', 'développement web', 'automation workflows', 'optimisation processus', 'consulting digital']
  }),
  
  portfolio: generateMetadata({
    title: 'Portfolio - Nos Réalisations',
    description: 'Découvrez nos projets de développement web et d\'automation avec n8n qui ont transformé nos clients.',
    keywords: ['projets web', 'réalisations n8n', 'cas d\'usage', 'clients satisfaits']
  }),
  
  contact: generateMetadata({
    title: 'Contact - Vibrance Online',
    description: 'Contactez-nous pour discuter de votre projet de développement web ou d\'automation avec n8n. Devis gratuit et conseil personnalisé.',
    keywords: ['contact vibrance online', 'devis gratuit', 'conseil n8n', 'projet web']
  }),
  
  pricing: generateMetadata({
    title: 'Tarifs - Plans Services',
    description: 'Découvrez nos tarifs et plans pour le développement web et l\'automation avec n8n. Solutions adaptées à votre budget et vos besoins.',
    keywords: ['tarifs développement web', 'plans n8n', 'prix automation', 'coût projet']
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
    image: image || 'https://vibranceonline.com/images/og-image.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'Vibrance Online',
      url: 'https://vibranceonline.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vibranceonline.com/images/logo.png'
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
        name: author || 'Vibrance Online'
      }
    };
  }

  if (type === 'Service') {
    return {
      ...baseSchema,
      provider: {
        '@type': 'Organization',
        name: 'Vibrance Online',
        url: 'https://vibranceonline.com'
      },
      serviceType: 'Développement Web & Automation avec n8n',
      areaServed: 'France',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://vibranceonline.com/contact',
        serviceName: 'Contact Vibrance Online'
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
  author = 'Vibrance Online',
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
    keywords: [...tags, 'blog', 'article', 'automation n8n', 'développement web'],
    url: `/blog/${slug}`,
    type: 'article',
    image: `/images/blog/${slug}.jpg`
  });
};
