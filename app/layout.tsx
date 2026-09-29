import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dig & Treasure — ขุดดินหาสมบัติ",
  description: "เกมขุดดินหาสมบัติ สำหรับนิสิตจุฬาลงกรณ์มหาวิทยาลัย",
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
