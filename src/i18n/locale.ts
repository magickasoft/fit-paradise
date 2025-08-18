import { defaultLocale, locales } from './constants'
import type { SupportedLocale } from './constants'

const supportedLocales = new Set<string>(locales)

const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return supportedLocales.has(locale)
}

const getUrlLocale = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null
  const urlLocale = new URLSearchParams(window.location.search).get('lang')
  return urlLocale && isSupportedLocale(urlLocale) ? urlLocale : null
}

const getSavedLocale = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null
  const savedLocale = localStorage.getItem('user-locale')
  return savedLocale && isSupportedLocale(savedLocale) ? savedLocale : null
}

const getBrowserLocale = (): SupportedLocale | null => {
  if (typeof navigator === 'undefined') return null
  for (const lang of navigator.languages) {
    const code = lang.split('-', 1)[0]
    if (isSupportedLocale(code)) return code
  }
  return null
}

export const getDefaultLocale = (): SupportedLocale => {
  return getSavedLocale() ?? getBrowserLocale() ?? getUrlLocale() ?? defaultLocale
}
