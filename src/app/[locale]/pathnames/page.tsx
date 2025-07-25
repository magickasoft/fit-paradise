import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import Button from '@/components/Button'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function PathnamesPage({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('btn')

  return (
    <p>
      <Button>{t('default.label')}</Button>
      <Button primary>{t('primary.label')}</Button>
    </p>
  )
}
