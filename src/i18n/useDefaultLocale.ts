'use client'

import { useState, useEffect } from 'react'
import type { SupportedLocale } from './constants'
import { defaultLocale } from './constants'
import { getDefaultLocale } from './locale'

export const useDefaultLocale = (): SupportedLocale => {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale)

  useEffect(() => {
    setLocale(getDefaultLocale())

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
