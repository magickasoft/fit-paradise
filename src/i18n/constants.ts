export const defaultLocale = 'ru'
export const locales = [defaultLocale, 'en'] as const

export type SupportedLocale = (typeof locales)[number]
