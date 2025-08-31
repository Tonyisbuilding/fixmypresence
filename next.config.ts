import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = { poll: 1200, aggregateTimeout: 300 }; 
    return config;
  },
};

export default nextConfig;
