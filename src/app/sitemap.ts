import type { MetadataRoute } from 'next'
import { DOMAIN } from '../process.env/domain'
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
  return [...getEntries('/'), ...getEntries('/pathnames')]
}
