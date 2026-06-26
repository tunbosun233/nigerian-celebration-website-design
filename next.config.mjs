/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
  // This allows the network access
  allowedDevOrigins: ['192.168.43.87'],
}

export default nextConfig;