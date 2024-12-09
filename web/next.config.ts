import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 120000,
  serverRuntimeConfig: {
    timeout: 120000,
  },
};

export default nextConfig;
