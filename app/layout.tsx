import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dig & Treasure — ขุดดินหาสมบัติ",
  description: "เกมขุดดินหาสมบัติ สำหรับนิสิตจุฬาลงกรณ์มหาวิทยาลัย",
  // ประกาศ icon เอง + ใส่ ?v=2 เพื่อบังคับ browser โหลดใหม่ (favicon cache แข็งมาก)
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="h-full">
      <body className={`${geist.variable} font-sans min-h-full bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
