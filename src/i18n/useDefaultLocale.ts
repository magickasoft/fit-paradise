'use client'

import { useState, useEffect } from 'react'
import type { SupportedLocale } from './locale'
import { getDefaultLocale, defaultLocale } from './locale'

// Хук для использования в React компонентах
export const useDefaultLocale = (): SupportedLocale => {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale)

  useEffect(() => {
    setLocale(getDefaultLocale())

    // Сохраняем локаль при её изменении
    const handleLanguageChange = () => {
      const newLocale = getDefaultLocale()
      setLocale(newLocale)
      localStorage.setItem('user-locale', newLocale)
    }

    window.addEventListener('languagechange', handleLanguageChange)
    return () => window.removeEventListener('languagechange', handleLanguageChange)
  }, [])

  return locale
}
