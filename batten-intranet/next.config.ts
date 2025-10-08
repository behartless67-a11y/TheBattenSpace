import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    qualities: [75, 85, 90, 100],
  },
};

export default nextConfig;
