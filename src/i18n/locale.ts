// Поддерживаемые локали
export const defaultLocale = 'ru'
export const locales = [defaultLocale, 'en'] as const
export type SupportedLocale = (typeof locales)[number]

// Проверка является ли строка поддерживаемой локалью
const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return locales.includes(locale as SupportedLocale)
}

// Получение локали по умолчанию с проверкой
export const getDefaultLocale = (): SupportedLocale => {
  // 1. Проверяем сохранённые настройки пользователя
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('user-locale')
    if (savedLocale && isSupportedLocale(savedLocale)) {
      return savedLocale
    }
  }

  // 2. Определяем язык браузера
  if (typeof navigator !== 'undefined') {
    const browserLanguage = navigator.language.split('-')[0]
    if (isSupportedLocale(browserLanguage)) {
      return browserLanguage
    }

    // Проверяем все языки браузера
    for (const lang of navigator.languages) {
      const code = lang.split('-')[0]
      if (isSupportedLocale(code)) {
        return code
      }
    }
  }

  // 3. Параметры URL (для SSR/SSG)
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    const urlLocale = urlParams.get('lang')
    if (urlLocale && isSupportedLocale(urlLocale)) {
      return urlLocale
    }
  }

  // 4. Возвращаем русский как fallback
  return defaultLocale
}
