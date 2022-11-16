import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setLocale } from 'yup';
import * as Localization from 'expo-localization';

import en from 'assets/locales/en.json';
import fa from 'assets/locales/fa.json';

export const fallbackLang = 'en';
export const defaultNS = 'translation';
export const resources = {
  en: { translation: en },
  fa: { translation: fa },
} as const;

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      compatibilityJSON: 'v3',
      lng: 'en',
      fallbackLng: fallbackLang,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources,
      defaultNS,
    },
    (_: unknown, t: TFunction) => {
      setLocale({
        mixed: { required: t('errors.required') },
        string: {
          email: t('errors.email'),
          min: ({ min }) => t('errors.min', { min }),
          max: ({ max }) => t('errors.max', { max }),
          matches: t('errors.matches'),
        },
        number: {
          min: ({ min }) => t('errors.min', { min }),
          max: ({ max }) => t('errors.max', { max }),
        },
      });
    }
  );

export default i18n;
