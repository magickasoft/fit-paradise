import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from './constants'

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/en': '/en',
    '/privacy-policy': {
      en: '/privacy-policy',
    },
    '/articles': {
      en: 'articles',
    },
    '/articles/[name]': {
      en: '/articles/[name]',
    },
    '/article/[name]': {
      en: '/article/[name]',
    },
  } as const,
})
