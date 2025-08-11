import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/40 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
      title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm font-medium">
        {language === 'ar' ? 'English' : 'عربي'}
      </span>
    </button>
  );
};

export default LanguageToggle;