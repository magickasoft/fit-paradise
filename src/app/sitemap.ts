import type { MetadataRoute } from 'next'
import { DOMAIN } from '../process.env/domain'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${DOMAIN}`
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
