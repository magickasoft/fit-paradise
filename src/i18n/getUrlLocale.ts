import type { SupportedLocale } from './constants'
import { isSupportedLocale } from './isSupportedLocale'

export const getUrlLocale = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null

  const urlParams = new URLSearchParams(window.location.search)
  const urlLocale = urlParams.get('lang')

  return isSupportedLocale(urlLocale) ? urlLocale : null
}
