import { setRequestLocale } from 'next-intl/server'
import type { Locale } from 'next-intl'

import { use } from 'react'
import { MainCategories } from '@/components/MainCategories'
import { PopularCategories } from '@/components/PopularCategories'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function IndexPage({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <>
      <MainCategories />
      <PopularCategories />
    </>
  )
}
