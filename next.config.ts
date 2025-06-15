import type { NextConfig } from 'next'
import { isDevelopment } from '@/process.env/NODE_ENV'

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
    reactRemoveProperties: { properties: ['^data-test$'] },
    styledComponents: {
      ssr: true,
      displayName: isDevelopment,
      minify: true,
    },
  },
}

export default nextConfig
