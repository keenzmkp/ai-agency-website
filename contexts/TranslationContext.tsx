'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation, Locale } from '@/hooks/useTranslation';

interface TranslationContextType {
  t: (key: string) => string;
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: React.ReactNode;
  defaultLocale?: Locale;
}

export function TranslationProvider({ children, defaultLocale = 'fr' }: TranslationProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  
  // Load locale from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
        setLocale(savedLocale);
      }
    }
  }, []);

  const { t, changeLocale, isRTL } = useTranslation(locale);

  const handleChangeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    changeLocale(newLocale);
  };

  return (
    <TranslationContext.Provider value={{
      t,
      locale,
      changeLocale: handleChangeLocale,
      isRTL
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
}
