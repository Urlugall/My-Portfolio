import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en/translation.json';
import ruTranslation from './ru/translation.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18nextLng',
      cookieMinutes: 10 * 24 * 60, // 10 days
      cookieDomain: 'illiagall.wuaze.com',
      caches: ['localStorage'],
    }
  });

export default i18next;
