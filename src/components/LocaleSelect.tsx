'use client'

import React, { useState, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Locale, useLocale } from 'next-intl'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const CurrentLocaleButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
`

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 6px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
`

const LocaleOption = styled.button`
  background: none;
  border: none;
  padding: 4px 8px;
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background: #f0f0f0;
  }
`

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
      router.replace(
        { pathname, params } as unknown as Parameters<typeof router.replace>[0],
        { locale: nextLocale } as ReplaceOptions,
      )
    })

    setOpen(false)
  }

  return (
    <Wrapper>
      <CurrentLocaleButton onClick={() => setOpen(prev => !prev)}>{currentLocale}</CurrentLocaleButton>

      {open && (
        <Dropdown>
          {routing.locales
            .filter(locale => locale !== currentLocale)
            .map(locale => (
              <LocaleOption key={locale} onClick={() => handleChange(locale as Locale)}>
                {locale}
              </LocaleOption>
            ))}
        </Dropdown>
      )}
    </Wrapper>
  )
})
