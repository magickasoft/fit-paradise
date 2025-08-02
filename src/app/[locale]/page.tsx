import { setRequestLocale } from 'next-intl/server'
import { Locale } from 'next-intl'

import { use } from 'react'
import { SeasonalCategories } from '@/components/SeasonalCategories'
import { PopularCategories } from '@/components/PopularCategories'
import { Header } from '@/components/header'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function IndexPage({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <>
      {/* <Header /> */}
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
