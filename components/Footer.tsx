'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  locale?: string;
}

const Footer: React.FC<FooterProps> = ({ locale = 'fr' }) => {
  // Traductions
  const translations = {
    fr: {
      description: 'Votre partenaire de confiance pour le développement web et l\'automation avec n8n. Nous simplifions vos processus et amplifions votre impact.',
      quickLinks: 'Liens rapides',
      services: 'Services',
      company: 'Entreprise',
      resources: 'Ressources',
      contact: 'Contact',
      address: '123 Rue de l\'Innovation, 75001 Paris, France',
      phone: '+33 1 23 45 67 89',
      email: 'contact@vibranceonline.com',
      followUs: 'Suivez-nous',
      newsletter: 'Newsletter',
      newsletterDescription: 'Recevez nos dernières actualités et conseils en développement web et automation n8n.',
      subscribe: 'S\'abonner',
      placeholder: 'Votre adresse email',
      copyright: '© 2024 Vibrance Online. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      cookies: 'Politique des cookies',
      sitemap: 'Plan du site',
      home: 'Accueil',
      about: 'À propos',
      portfolio: 'Portfolio',
      blog: 'Blog',
      webDev: 'Développement Web',
      aiAutomation: 'Automation avec n8n',
      digitalConsulting: 'Optimisation & Consulting',
      training: 'Formation',
    },
    en: {
      description: 'Your trusted partner for web development and automation with n8n. We simplify your processes and amplify your impact.',
      quickLinks: 'Quick Links',
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      contact: 'Contact',
      address: '123 Innovation Street, 75001 Paris, France',
      phone: '+33 1 23 45 67 89',
      email: 'contact@vibranceonline.com',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterDescription: 'Get our latest news and tips on web development and n8n automation.',
      subscribe: 'Subscribe',
      placeholder: 'Your email address',
      copyright: '© 2024 Vibrance Online. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      sitemap: 'Sitemap',
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      blog: 'Blog',
      webDev: 'Web Development',
      aiAutomation: 'Automation with n8n',
      digitalConsulting: 'Process Optimization & Consulting',
      training: 'Training',
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

  // Liens de navigation
  const quickLinks = [
    { name: t.home, href: '/', key: 'home' },
    { name: t.about, href: '/about', key: 'about' },
    { name: t.portfolio, href: '/portfolio', key: 'portfolio' },
    { name: t.blog, href: '/blog', key: 'blog' },
  ];

  const services = [
    { name: t.webDev, href: '/services/web-development', key: 'web-dev' },
    { name: t.aiAutomation, href: '/services/n8n-automation', key: 'n8n-automation' },
    { name: t.digitalConsulting, href: '/services/digital-consulting', key: 'digital-consulting' },
    { name: t.training, href: '/services/training', key: 'training' },
  ];

  const company = [
    { name: t.about, href: '/about', key: 'about' },
    { name: t.contact, href: '/contact', key: 'contact' },
    { name: 'FAQ', href: '/faq', key: 'faq' },
    { name: 'Tarifs', href: '/pricing', key: 'pricing' },
  ];

  const resources = [
    { name: t.blog, href: '/blog', key: 'blog' },
    { name: 'Documentation', href: '/docs', key: 'docs' },
    { name: 'Support', href: '/support', key: 'support' },
    { name: 'Tutoriels', href: '/tutorials', key: 'tutorials' },
  ];

  const legal = [
    { name: t.privacy, href: '/privacy', key: 'privacy' },
    { name: t.terms, href: '/terms', key: 'terms' },
    { name: t.cookies, href: '/cookies', key: 'cookies' },
    { name: t.sitemap, href: '/sitemap', key: 'sitemap' },
  ];

  // Réseaux sociaux
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/vibrance-online', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/vibranceonline', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/vibrance-online', icon: Github },
    { name: 'Instagram', href: 'https://instagram.com/vibranceonline', icon: Instagram },
  ];

  // Scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="footer-section">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">VO</span>
              </div>
              <span className="text-xl font-bold text-white">
                Vibrance Online
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.description}
            </p>
            
            {/* Informations de contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{t.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${t.phone}`} className="text-sm hover:text-white transition-colors duration-200">
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${t.email}`} className="text-sm hover:text-white transition-colors duration-200">
                  {t.email}
                </a>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="footer-section">
            <h3 className="footer-title">{t.quickLinks}</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">{t.services}</h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.key}>
                  <Link href={service.href} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="footer-section">
            <h3 className="footer-title">{t.company}</h3>
            <ul className="footer-links">
              {company.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">{t.newsletter}</h3>
            <p className="text-gray-300 mb-6">{t.newsletterDescription}</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.placeholder}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-300 text-sm">{t.followUs}</span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bouton scroll vers le haut */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Haut de page</span>
            </button>
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              {t.copyright}
            </p>
            
            <div className="flex flex-wrap items-center justify-center space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
