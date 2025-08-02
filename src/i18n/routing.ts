import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  pathnames: {
    '/': '/',
    '/en': '/en',
    '/privacy-policy': {
      en: '/privacy-policy',
    },
    '/categories': {
      en: '/categories',
    },
    '/categories/[name]': {
      en: '/categories/[name]',
    },
    '/recipe/[name]': {
      en: '/recipe/[name]',
    },
    '/recipe/shashlyk-iz-svininy-na-kefire': {
      en: '/recipe/shashlyk-iz-svininy-na-kefire',
    },
    '/recipe/shashlyk-iz-kurinogo-bedra': {
      en: '/recipe/shashlyk-iz-kurinogo-bedra',
    },
    '/recipe/scrambled-eggs': {
      en: '/recipe/scrambled-eggs',
    },
    '/recipe/scrambled-eggs-with-broccoli': {
      en: '/recipe/scrambled-eggs-with-broccoli',
    },
    '/recipe/ovsjanaja-kasha-s-jablokami-i-koricej': {
      en: '/recipe/ovsjanaja-kasha-s-jablokami-i-koricej',
    },
    '/recipe/borshch-s-pampushkami': {
      en: '/recipe/borshch-s-pampushkami',
    },
    '/recipe/okroshka-na-kvase': {
      en: '/recipe/okroshka-na-kvase',
    },
    '/recipe/okroshka-na-kefire': {
      en: '/recipe/okroshka-na-kefire',
    },
    '/recipe/rublenye-kotlety-iz-grudki-na-skovorode': {
      en: '/recipe/rublenye-kotlety-iz-grudki-na-skovorode',
    },
    '/recipe/stejk-ribaj-na-elektrogrile': {
      en: '/recipe/stejk-ribaj-na-elektrogrile',
    },
    '/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom': {
      en: '/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom',
    },
    '/recipe/uzbekskij-plov-s-govyadinoj': {
      en: '/recipe/uzbekskij-plov-s-govyadinoj',
    },
    '/recipe/grecheskij-salat': {
      en: '/recipe/grecheskij-salat',
    },
    '/recipe/chizkeik': {
      en: '/recipe/chizkeik',
    },
    '/recipe/ragu-iz-kabachkov-v-smetane': {
      en: '/recipe/ragu-iz-kabachkov-v-smetane',
    },
    '/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom': {
      en: '/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom',
    },
    '/recipe/kartofelnye-chipsy-v-mikrovolnovke': {
      en: '/recipe/kartofelnye-chipsy-v-mikrovolnovke',
    },
  } as const,
});
