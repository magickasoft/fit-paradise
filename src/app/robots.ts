import type { MetadataRoute } from 'next'
import { DOMAIN } from '../variables/domain'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
      },
    ],
    sitemap: [`https://${DOMAIN}/sitemap.xml`],
  }
}
