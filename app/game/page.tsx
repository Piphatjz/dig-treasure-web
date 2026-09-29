"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("player_email");
    if (!stored) {
      router.replace("/");
      return;
    }
    setEmail(stored);
  }, [router]);

  function toggleFullscreen() {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  if (!email) return null;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 font-bold text-lg">⛏️ Dig &amp; Treasure</span>
          <span className="hidden sm:block text-gray-600 text-sm">|</span>
          <span className="hidden sm:block text-gray-400 text-sm">{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="text-gray-400 hover:text-white text-sm px-3 py-1 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
          >
            {isFullscreen ? "⊡ ออกจาก Fullscreen" : "⛶ Fullscreen"}
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("player_email");
              router.push("/");
            }}
            className="text-gray-500 hover:text-red-400 text-sm px-3 py-1 rounded-lg border border-gray-800 hover:border-red-900 transition-colors"
          >
            ออกจากระบบ
          </button>
        </div>
      </header>

      {/* Game container */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center bg-black relative"
      >
        <iframe
          src="/game/index.html"
          className="w-full h-full"
          style={{ minHeight: "calc(100vh - 48px)" }}
          allow="autoplay; fullscreen"
          title="Dig & Treasure Game"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
}
