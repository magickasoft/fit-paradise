import type { SupportedLocale } from './constants'
import { isSupportedLocale } from './isSupportedLocale'

export const getUrlLocale = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null
  const urlLocale = new URLSearchParams(window.location.search).get('lang')
  return urlLocale && isSupportedLocale(urlLocale) ? urlLocale : null
}
