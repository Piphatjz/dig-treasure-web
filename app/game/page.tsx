"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem("player_email");
    if (!email) {
      router.replace("/");
      return;
    }
    // Pygbag ต้องการ top-level document สำหรับ SharedArrayBuffer/WASM
    // redirect ตรงไปที่ static HTML ไฟล์
    window.location.replace("/game/index.html");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-4">
      <div className="w-8 h-8 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin" />
      <p className="text-gray-400 text-sm">กำลังโหลดเกม...</p>
    </div>
  );
}
