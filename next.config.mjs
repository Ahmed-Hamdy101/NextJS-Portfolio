/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60 * 60 * 24 * 7,
    },

    compress: true,

    // Reduce JS bundle sent to client
    experimental: {
        optimizePackageImports: ["framer-motion", "react-icons"],
    },
};

export default nextConfig;
