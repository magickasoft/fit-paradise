import type { NextConfig } from 'next'

const isDevelopment = process.env.NODE_ENV === 'development'

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: isDevelopment ? false : { exclude: ['error', 'warn'] },
    reactRemoveProperties: { properties: ['^data-test$'] },
    styledComponents: {
      ssr: true,
      displayName: isDevelopment,
      minify: true,
    },
  },
}

export default nextConfig
