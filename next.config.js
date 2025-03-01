/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  // Add this to help with troubleshooting
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Add source maps in development
      config.devtool = 'eval-source-map';
    }
    return config;
  },
}

module.exports = nextConfig 