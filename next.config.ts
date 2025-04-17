import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: {
    // This will run `next lint` on every build and show errors
    dirs: ["src"],
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
