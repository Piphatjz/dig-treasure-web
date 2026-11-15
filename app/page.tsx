// ไฟล์ใหญ่ที่เกมต้องใช้ — ให้เบราว์เซอร์เริ่มโหลดล่วงหน้าตั้งแต่หน้าแรก
const PREFETCH = [
  "/pgcdn/0.9.3/pythons.js",
  "/pgcdn/0.9.3/cpython312/main.js",
  "/pgcdn/0.9.3/cpython312/main.wasm",
  "/pgcdn/0.9.3/cpython312/main.data",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      {PREFETCH.map((href) => (
        <link key={href} rel="prefetch" href={href} />
      ))}

      {/* Animated gem blobs in background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
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

          {/* ใช้ <a> ธรรมดา: หน้าเกมเป็น static HTML ของ Pygbag ต้องโหลดเป็น top-level document */}
          <a
            href="/game/index.html"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            ▶  เริ่มเล่นเกม
          </a>

          <p className="text-center text-gray-600 text-xs mt-6">
            ครั้งแรกอาจใช้เวลาโหลดสักครู่ ครั้งถัดไปจะเร็วขึ้น
          </p>
        </div>

        <p className="text-center text-gray-700 text-xs mt-4">
          Dig &amp; Treasure · Midterm Project · Chulalongkorn University
        </p>
      </div>
    </main>
  );
}
