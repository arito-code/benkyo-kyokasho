import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/electronics/01-led-resistor',
        destination: '/electronics/01-electricity',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
