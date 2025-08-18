import type { SupportedLocale } from './constants'
import { isSupportedLocale } from './isSupportedLocale'

export const getBrowserLocale = (): SupportedLocale | null => {
  if (typeof navigator === 'undefined') return null
  for (const lang of navigator.languages) {
    const code = lang.split('-', 1)[0]
    if (isSupportedLocale(code)) return code
  }
  return null
}
