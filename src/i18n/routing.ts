import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  pathnames: {
    '/': '/',
    '/categories': {
      en: '/categories',
    },
    '/categories/[name]': {
      en: '/categories/[name]',
    },
    '/recipe/[name]': {
      en: '/recipe/[name]',
    },
  },
})
