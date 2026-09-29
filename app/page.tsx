"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CHULA_REGEX = /^[a-zA-Z0-9._%+\-]+@student\.chula\.ac\.th$/;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();

    if (!trimmed) {
      setError("กรุณากรอกอีเมลก่อน");
      return;
    }
    if (!CHULA_REGEX.test(trimmed)) {
      setError("อีเมลต้องลงท้ายด้วย @student.chula.ac.th เท่านั้น");
      return;
    }

    setLoading(true);
    // เก็บ email ไว้ใน sessionStorage เพื่อแสดงในหน้าเกม
    sessionStorage.setItem("player_email", trimmed);
    router.push("/game");
  }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      {/* Animated gem blobs in background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">⛏️</div>
            <h1 className="text-3xl font-bold text-yellow-400 tracking-tight">
              DIG & TREASURE
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              ขุดดิน · หาสมบัติ · อัพเกรดรถขุด
            </p>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                เข้าสู่ระบบด้วยอีเมล Chula
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="student@student.chula.ac.th"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                autoFocus
                autoComplete="email"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm flex items-center gap-2">
                <span>⚠</span> {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  กำลังเข้าสู่ระบบ...
                </>
              ) : (
                "▶  เริ่มเล่นเกม"
              )}
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-6">
            ต้องใช้อีเมล @student.chula.ac.th เท่านั้น
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-700 text-xs mt-4">
          Dig &amp; Treasure · Midterm Project · Chulalongkorn University
        </p>
      </div>
    </main>
  );
}
