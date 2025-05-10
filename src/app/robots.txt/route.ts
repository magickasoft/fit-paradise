import { isProduction } from '../../process.env/node'
import { domain } from '../../process.env/domain'

export const dynamic = 'force-static'

export async function GET() {
  const content = isProduction
    ? `
# *
User-agent: *
Allow: /
Disallow: /api/*
Disallow: /_next/*
Crawl-delay: 1

# Host
Host: ${domain}

# Sitemaps
Sitemap: https://${domain}/sitemap.xml`
    : `
# *
User-agent: *
Disallow: /`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
