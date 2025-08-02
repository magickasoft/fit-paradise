import { setRequestLocale } from 'next-intl/server';
import { Locale } from 'next-intl';

import { use } from 'react';
import { SeasonalCategories } from '@/components/SeasonalCategories';
import { PopularCategories } from '@/components/PopularCategories';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      {/* <Meta /> */}
      {/* <Intro /> */}

      <SeasonalCategories />
      <PopularCategories />
    </>
  );
}
