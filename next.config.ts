import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // ✅ Move environment variables here
  env: {
    // Replace only the one you need active
    PAYPAL_CLIENT_ID:
      "BAAQambvfgf8cMiIWoROWluTo5X08lvESisQno-RXyWIK7Mk8JzNL7UNonzp8h5g5ZGjd8HTp2vBHD_4zk", // vijay
  },

  // Optional: enable some stable Next.js 16 features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
