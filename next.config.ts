import type { NextConfig } from 'next'

const isDevelopment = typeof process !== 'undefined' && process.env.NODE_ENV === 'development'

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
