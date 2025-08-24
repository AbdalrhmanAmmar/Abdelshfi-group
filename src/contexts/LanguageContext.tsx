import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKeys } from '../locales';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    const validLanguages: Language[] = ['ar', 'en', 'fr', 'es', 'de', 'it', 'zh'];
    return validLanguages.includes(saved as Language) ? (saved as Language) : 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    const titles = {
      ar: 'مجموعة عبد الشافي - الاستثمار والتنمية الزراعية',
      en: 'Abdelshafi Group - Agricultural Investment & Development',
      fr: 'Groupe Abdelshafi - Investissement et Développement Agricole',
      es: 'Grupo Abdelshafi - Inversión y Desarrollo Agrícola',
      de: 'Abdelshafi Gruppe - Landwirtschaftliche Investitionen und Entwicklung',
      it: 'Gruppo Abdelshafi - Investimenti e Sviluppo Agricolo',
      zh: '阿卜杜勒沙菲集团 - 农业投资与发展' // الترجمة الصينية
    };
    document.title = titles[language];
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};