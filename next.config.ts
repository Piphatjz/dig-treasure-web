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
      {
        // ไฟล์ runtime ของ Pygbag (Python WASM ~20MB) โฮสต์เองบน Vercel แทน GitHub Pages ที่ช้า
        // เวอร์ชันอยู่ใน path แล้ว จึง cache ได้ถาวร — โหลดครั้งที่สองแทบไม่ต้องดาวน์โหลดใหม่
        source: "/pgcdn/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      // ไฟล์ CDN ที่ไม่ได้ copy มาไว้ใน public/pgcdn ให้ดึงจาก pygame-web ต้นทาง
      fallback: [
        {
          source: "/pgcdn/:path*",
          destination: "https://pygame-web.github.io/cdn/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
