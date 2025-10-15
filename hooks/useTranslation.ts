import { useState, useEffect } from 'react';
import { translations, Locale, TranslationKey } from '@/lib/translations';

export type { Locale };

export function useTranslation(locale: Locale = 'fr') {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLocale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to French if key not found
        value = translations.fr;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if not found anywhere
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const changeLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  return {
    t,
    locale: currentLocale,
    changeLocale,
    isRTL: false // Add RTL support if needed
  };
}
