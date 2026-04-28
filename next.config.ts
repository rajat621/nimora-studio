import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance & Optimization */
  reactCompiler: true,
  
  /* Image Optimization */
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow common quality settings used across the codebase
    qualities: [75, 85],
  },

  /* Output & Build */
  poweredByHeader: false,

  /* Compression */
  compress: true,

  /* Production optimizations */
  productionBrowserSourceMaps: false,

  /* Module Aliases */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },

  /* Experimental features for better performance */
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap"],
  },
  // Explicit empty turbopack config to avoid Turbopack vs webpack conflict
  turbopack: {},
};

export default nextConfig;
