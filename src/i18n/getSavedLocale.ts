import type { SupportedLocale } from './constants'
import { isSupportedLocale } from './isSupportedLocale'

export const getSavedLocale = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null
  const savedLocale = localStorage.getItem('user-locale')
  return savedLocale && isSupportedLocale(savedLocale) ? savedLocale : null
}
