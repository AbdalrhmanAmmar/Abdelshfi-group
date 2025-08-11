import { homeTranslations } from './home';
import { navbarTranslations } from './navbar';
import { footerTranslations } from './footer';
import { aboutTranslations } from './about';
import { servicesTranslations } from './services';
import { productsTranslations } from './products';

export const translations = {
  ar: {
    home: homeTranslations.ar,
    navbar: navbarTranslations.ar,
    footer: footerTranslations.ar,
    about: aboutTranslations.ar,
    services: servicesTranslations.ar,
    products: productsTranslations.ar
  },
  en: {
    home: homeTranslations.en,
    navbar: navbarTranslations.en,
    footer: footerTranslations.en,
    about: aboutTranslations.en,
    services: servicesTranslations.en,
    products: productsTranslations.en
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.ar;