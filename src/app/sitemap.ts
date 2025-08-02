import type { MetadataRoute } from 'next'
import { DOMAIN } from '../variables/domain'
import { Locale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'

type Href = Parameters<typeof getPathname>[0]['href']

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })
  return `https://${DOMAIN}` + pathname
}

function getEntries(href: Href) {
  return routing.locales.map(locale => ({
    url: getUrl(href, locale),
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.8,
    images: [],
    videos: [],
    alternates: {
      languages: Object.fromEntries(routing.locales.map(cur => [cur, getUrl(href, cur)])),
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getEntries('/'),
    ...getEntries('/categories'),
    ...getEntries('/privacy-policy'),
    ...getEntries('/recipe/shashlyk-iz-svininy-na-kefire'),
    ...getEntries('/recipe/shashlyk-iz-kurinogo-bedra'),
    ...getEntries('/recipe/scrambled-eggs'),
    ...getEntries('/recipe/scrambled-eggs-with-broccoli'),
    ...getEntries('/recipe/ovsjanaja-kasha-s-jablokami-i-koricej'),
    ...getEntries('/recipe/borshch-s-pampushkami'),
    ...getEntries('/recipe/okroshka-na-kvase'),
    ...getEntries('/recipe/okroshka-na-kefire'),
    ...getEntries('/recipe/rublenye-kotlety-iz-grudki-na-skovorode'),
    ...getEntries('/recipe/stejk-ribaj-na-elektrogrile'),
    ...getEntries('/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom'),
    ...getEntries('/recipe/uzbekskij-plov-s-govyadinoj'),
    ...getEntries('/recipe/grecheskij-salat'),
    ...getEntries('/recipe/chizkeik'),
    ...getEntries('/recipe/ragu-iz-kabachkov-v-smetane'),
    ...getEntries('/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom'),
    ...getEntries('/recipe/kartofelnye-chipsy-v-mikrovolnovke'),
  ]
}
