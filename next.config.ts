import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Mr-Rashed-Khan",
  assetPrefix: "/Mr-Rashed-Khan/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
