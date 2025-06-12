import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
    reactRemoveProperties: { properties: ['^data-test$'] },
    styledComponents: {
      ssr: true,
      displayName: true,
      minify: true,
    },
  },
}

export default nextConfig
