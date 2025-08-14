'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDefaultLocale } from '@/i18n/useDefaultLocale'

export default function LocaleRedirect() {
  const router = useRouter()
  const defaultLocale = useDefaultLocale()

  useEffect(() => {
    // Перенаправляем на дефолтную локаль
    router.replace(`/${defaultLocale}`)
  }, [defaultLocale, router])

  return null
}
