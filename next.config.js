/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: '.next/cache',
      buildDependencies: {
        config: [__filename],
      },
      // Optimize cache serialization for large strings
      managedPaths: isServer ? ['node_modules'] : undefined,
      hashAlgorithm: 'md4',
      name: `${isServer ? 'server' : 'client'}-${Date.now()}`,
      // Use Buffer instead of strings for large data
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      store: 'pack',
    }
    return config
  },
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig
