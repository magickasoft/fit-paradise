'use client'

import React, { useState, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { locales } from '@/i18n/constants'
import { type Locale, useLocale } from 'next-intl'
import styled from 'styled-components'
import { FiGlobe } from 'react-icons/fi'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const CurrentLocaleButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 9999px;
  padding: 6px 10px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f8f8f8;
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 8px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  z-index: 20;
`

const LocaleOption = styled.button`
  background: none;
  border: none;
  padding: 8px 12px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;

  &:hover {
    background: #f5f5f5;
  }
`

const localeLabels: Record<Locale, { label: string; flag: string }> = {
  ru: { label: 'Руc', flag: '🇷🇺' },
  en: { label: 'Eng', flag: '🇬🇧' },
}

export const LocaleSelect = React.memo(function LocaleSelect() {
  const currentLocale = useLocale()
  const router = useRouter()
  const [disabled, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const [open, setOpen] = useState(false)

  type ReplaceOptions = Parameters<typeof router.replace>[1] & { locale?: string }

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale === currentLocale || disabled) return

    startTransition(() => {
      localStorage.setItem('user-locale', nextLocale)
      router.replace(
        { pathname, params } as unknown as Parameters<typeof router.replace>[0],
        { locale: nextLocale } as ReplaceOptions,
      )
    })

    setOpen(false)
  }

  return (
    <Wrapper>
      <CurrentLocaleButton onClick={() => setOpen(prev => !prev)}>
        <FiGlobe size={18} />
        {localeLabels[currentLocale as Locale]?.flag} {localeLabels[currentLocale as Locale]?.label}
      </CurrentLocaleButton>

      {open && (
        <Dropdown>
          {locales
            .filter(locale => locale !== currentLocale)
            .map(locale => (
              <LocaleOption key={locale} onClick={() => handleChange(locale as Locale)}>
                {localeLabels[locale as Locale]?.flag} {localeLabels[locale as Locale]?.label}
              </LocaleOption>
            ))}
        </Dropdown>
      )}
    </Wrapper>
  )
})
