import { locales } from './constants'
import type { SupportedLocale } from './constants'

const supportedLocales = new Set<string>(locales)

export const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return supportedLocales.has(locale)
}
