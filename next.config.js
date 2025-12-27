/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove 'output: export' for Vercel - it handles Next.js natively
  // If you need static export for other platforms, use: output: process.env.NEXT_EXPORT ? 'export' : undefined,
  images: {
    unoptimized: false, // Vercel optimizes images automatically
  },
};

module.exports = nextConfig;

