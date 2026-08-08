// src/app/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import genericEs from '@/locales/es.json';
import genericEn from '@/locales/en.json';
import authEs from '@/features/auth/locales/es.json';
import authEn from '@/features/auth/locales/en.json';
import dashboardEs from '@/features/dashboard/locales/es.json';
import dashboardEn from '@/features/dashboard/locales/en.json';

const resources = {
  es: {
    generic: genericEs,
    auth: authEs,
    dashboard: dashboardEs,

  },
  en: {
    generic: genericEn,
    auth: authEn,
    dashboard: dashboardEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;