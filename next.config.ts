import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents / partialPrefetching hang requests on the Cloudflare Workers runtime
  images: {
    // Single allowed quality, so every photo is served at 90 instead of the default 75.
    qualities: [90],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
