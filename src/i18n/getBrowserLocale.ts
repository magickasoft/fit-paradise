import type { SupportedLocale } from './constants'
import { isSupportedLocale } from './isSupportedLocale'

export const getBrowserLocale = (): SupportedLocale | null => {
  if (typeof navigator === 'undefined') return null

  const languageCodes = navigator.languages.map(lang => lang.split('-', 1)[0])

  return languageCodes.find(isSupportedLocale) ?? null
}
