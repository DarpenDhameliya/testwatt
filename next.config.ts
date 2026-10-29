import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the on-screen Next.js dev indicator (the floating "N" badge).
  devIndicators: false,
  // Let phones on the same Wi-Fi load the dev server by LAN IP.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
