import { defaultLocale } from './constants'
import type { SupportedLocale } from './constants'
import { getUrlLocale } from './getUrlLocale'
import { getSavedLocale } from './getSavedLocale'
import { getBrowserLocale } from './getBrowserLocale'

export const getDefaultLocale = (): SupportedLocale => {
  return getSavedLocale() ?? getBrowserLocale() ?? getUrlLocale() ?? defaultLocale
}
