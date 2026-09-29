import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ให้ iframe โหลด Pygbag game (same-origin, public/game/)
  async headers() {
    return [
      {
        source: "/game/:path*",
        headers: [
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
