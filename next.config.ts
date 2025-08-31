// next.config.ts
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com"],
  },
  ...(isDev
    ? {
        webpackDevMiddleware: (config: any) => {
          config.watchOptions = { poll: 1200, aggregateTimeout: 300 };
          return config;
        },
      }
    : {}),
};

export default nextConfig;
