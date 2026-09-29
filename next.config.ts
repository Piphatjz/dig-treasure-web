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
      {
        // เกม build (index.html / .apk / .tar.gz) ห้าม cache
        // ป้องกัน browser/CDN เสิร์ฟ build เก่าค้างเวลาอัพเดตเกม
        source: "/game/:path*",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
