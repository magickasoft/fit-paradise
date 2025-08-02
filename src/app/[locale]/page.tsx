import { setRequestLocale } from 'next-intl/server'
import { Locale, useTranslations } from 'next-intl'

import { use } from 'react'
import { SeasonalCategories } from '@/components/SeasonalCategories'
import { PopularCategories } from '@/components/PopularCategories'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function IndexPage({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('btn')

  return (
    <>
      {/* <Meta /> */}
      {/* <Intro /> */}
      {/* <Services /> */}
      {/* <MainAdvertis /> */}
      <SeasonalCategories />
      <PopularCategories />
      {/* <WorkWithUs /> */}
      {/* {/* <Clients /> */}
    </>
  )
}
