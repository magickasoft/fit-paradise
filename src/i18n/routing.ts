import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pfadnamen',
    },
  },
})
