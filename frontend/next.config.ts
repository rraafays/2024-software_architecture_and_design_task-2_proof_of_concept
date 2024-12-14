import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "meet-the-myths.com",
      },
      {
        protocol: "https",
        hostname: "www.bandainamcostudios.com",
      },
      {
        protocol: "https",
        hostname: "cdn.arstechnica.net",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
