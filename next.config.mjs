import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**.**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**.**",
        port: "**",
      },
    ],
    domains: ["localhost"],
  },
};

export default nextConfig;
