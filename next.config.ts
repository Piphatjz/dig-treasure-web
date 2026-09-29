import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          // credentialless แทน require-corp:
          // - SharedArrayBuffer ยังใช้ได้ (WASM ทำงานได้)
          // - CDN ภายนอก (Pygbag pygame-web) โหลดได้โดยไม่ต้องมี CORP header
          { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
        ],
      },
    ];
  },
};

export default nextConfig;
