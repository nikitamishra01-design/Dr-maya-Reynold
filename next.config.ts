import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',       // static export mode
  trailingSlash: true,    // optional, Netlify friendly
}

export default nextConfig
