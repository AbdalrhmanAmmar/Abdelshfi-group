import { homeTranslations } from './home';
import { navbarTranslations } from './navbar';
import { footerTranslations } from './footer';
import { aboutTranslations } from './about';
import { servicesTranslations } from './services';
import { productsTranslations } from './products';
import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { de } from './de';
import { it } from './it';

export const translations = {
  ar: {
    home: homeTranslations.ar,
    navbar: navbarTranslations.ar,
    footer: footerTranslations.ar,
    about: aboutTranslations.ar,
    services: servicesTranslations.ar,
    products: productsTranslations.ar
  },
  en,
  fr,
  es,
  de,
  it
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.ar;