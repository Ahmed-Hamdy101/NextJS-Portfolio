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

    // react-icons ships CommonJS — tell webpack to transpile it so
    // named imports get tree-shaken down to only the icons actually used.
    // This alone cuts icon-related modules from ~900 to the handful you import.
    transpilePackages: ["react-icons"],
};

export default nextConfig;
