import { locales } from './constants'
import type { SupportedLocale } from './constants'

const supportedLocales = new Set<string>(locales)

export const isSupportedLocale = (locale: string | null): locale is SupportedLocale => {
  return locale !== null && supportedLocales.has(locale)
}
