'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslationContext } from '@/contexts/TranslationContext';

interface HeaderProps {
  locale?: string;
  onLocaleChange?: (locale: string) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();
  const { t, locale, changeLocale } = useTranslationContext();

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermeture du menu mobile
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Navigation
  const navigation = [
    { name: t('nav.home'), href: '/', key: 'home' },
    { name: t('nav.about'), href: '/about', key: 'about' },
        { 
          name: t('nav.services'), 
          href: '/services', 
          key: 'services',
          children: [
            { name: t('services.webDev.title'), href: '/services/web-development', key: 'web-dev' },
            { name: t('services.n8nAutomation.title'), href: '/services/n8n-automation', key: 'n8n-automation' },
            { name: t('services.consulting.title'), href: '/services/digital-consulting', key: 'digital-consulting' },
            { name: t('services.training.title'), href: '/services/training', key: 'training' },
          ]
        },
    { name: t('nav.portfolio'), href: '/portfolio', key: 'portfolio' },
    { name: t('nav.blog'), href: '/blog', key: 'blog' },
    { name: t('nav.contact'), href: '/contact', key: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">VO</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Vibrance Online
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.key} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Services */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-hard border border-gray-100 transition-all duration-200 ${
                      isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => changeLocale(locale === 'fr' ? 'en' : 'fr')}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              {t('nav.startProject')}
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.key}>
                {item.children ? (
                  <div>
                    <button
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 flex items-center justify-between"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Actions Mobile */}
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Langue / Language</span>
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                  onClick={() => changeLocale(locale === 'fr' ? 'en' : 'fr')}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase">{locale}</span>
                </button>
              </div>
              <Link
                href="/contact"
                className="btn btn-primary w-full text-center"
                onClick={closeMenu}
              >
                {t('nav.startProject')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
