import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@asoftech/design-tokens", "@asoftech/validation"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
