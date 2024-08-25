/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com", // Use "i.ibb.co" as the hostname for direct image links from ibb.co
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};
// next.config.js



module.exports = nextConfig;
