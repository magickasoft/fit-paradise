'use client'

import React, { ChangeEvent, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Locale, useLocale, useTranslations } from 'next-intl'

export const LocaleSelect = React.memo(function LocaleSelect() {
  const t = useTranslations('localeSelect')
  const currentLocale = useLocale()
  const router = useRouter()
  const [disabled, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <label>
      <p>{t('label')}</p>
      <select value={currentLocale} disabled={disabled} onChange={onChange}>
        {routing.locales.map(value => (
          <option key={value} value={value}>
            {t(`locale.${value}`)}
          </option>
        ))}
      </select>
    </label>
  )
})
