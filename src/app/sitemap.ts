import type { MetadataRoute } from 'next'
import { domain } from '../process.env/domain'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${domain}`
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
