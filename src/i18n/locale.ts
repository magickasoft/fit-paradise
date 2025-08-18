import { defaultLocale, locales } from './constants'
import type { SupportedLocale } from './constants'

const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return locales.includes(locale as SupportedLocale)
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
  const lang = navigator.languages.find(l => isSupportedLocale(l.split('-')[0]))
  return lang ? (lang.split('-')[0] as SupportedLocale) : null
}

export const getDefaultLocale = (): SupportedLocale => {
  return getSavedLocale() ?? getBrowserLocale() ?? getUrlLocale() ?? defaultLocale
}
