import type { MetadataRoute } from 'next'
import { DOMAIN } from '../process.env/domain'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${DOMAIN}`
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 0.8,
      images: [],
      videos: [],
    },
  ]
}
