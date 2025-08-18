import { defaultLocale, locales } from './constants'
import type { SupportedLocale } from './constants'

const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return locales.includes(locale as SupportedLocale)
}

const getUrlLocale = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null
  const urlParams = new URLSearchParams(window.location.search)
  const urlLocale = urlParams.get('lang')
  return urlLocale && isSupportedLocale(urlLocale) ? urlLocale : null
}

export const getDefaultLocale = (): SupportedLocale => {
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('user-locale')
    if (savedLocale && isSupportedLocale(savedLocale)) {
      return savedLocale
    }
  }

  if (typeof navigator !== 'undefined') {
    for (const lang of navigator.languages) {
      const code = lang.split('-')[0]
      if (isSupportedLocale(code)) {
        return code
      }
    }
  }

  const urlLocale = getUrlLocale()
  if (urlLocale) {
    return urlLocale
  }

  return defaultLocale
}
