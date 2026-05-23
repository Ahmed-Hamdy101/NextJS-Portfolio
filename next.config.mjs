/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable compiler-level optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  },

  // Compress responses
  compress: true,

  // Enable persistent webpack cache for faster rebuilds (do NOT disable cache)
  // webpack cache defaults to filesystem in Next.js 13+ — removed the override
};

export default nextConfig;
