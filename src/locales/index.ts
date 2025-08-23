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
  },
  fr: {
    home: homeTranslations.fr,
    navbar: navbarTranslations.fr,
    footer: footerTranslations.fr,
    about: aboutTranslations.fr,
    services: servicesTranslations.fr,
    products: productsTranslations.fr
  },
  es: {
    home: homeTranslations.es,
    navbar: navbarTranslations.es,
    footer: footerTranslations.es,
    about: aboutTranslations.es,
    services: servicesTranslations.es,
    products: productsTranslations.es
  },
  de: {
    home: homeTranslations.de,
    navbar: navbarTranslations.de,
    footer: footerTranslations.de,
    about: aboutTranslations.de,
    services: servicesTranslations.de,
    products: productsTranslations.de
  },
  it: {
    home: homeTranslations.it,
    navbar: navbarTranslations.it,
    footer: footerTranslations.it,
    about: aboutTranslations.it,
    services: servicesTranslations.it,
    products: productsTranslations.it
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.ar;