export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Hacker glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.08] blur-[140px]" />

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.025)_50%)] bg-[length:100%_4px]" />

      {/* Content */}
      <div className="relative z-10 text-center">

        {/* Terminal */}
        <div className="mb-10 font-mono text-sm">
          <span className="text-gray-600">root@portfolio:</span>
          <span className="text-green-400">~$</span>{" "}
          <span className="text-green-300">
            who_am_i<span className="animate-pulse">_</span>
          </span>
        </div>

        {/* Glitch title */}
        <div className="relative">

          {/* Red RGB layer */}
          <h1
            className="absolute left-1/2 top-0 -translate-x-[calc(50%+4px)] text-6xl font-black uppercase tracking-[-0.08em] text-red-500/60 md:text-8xl"
            aria-hidden="true"
          >
            YOU
            <br />
            FUCKING
            <br />
            LOSER.
          </h1>

          {/* Cyan RGB layer */}
          <h1
            className="absolute left-1/2 top-0 -translate-x-[calc(50%-4px)] text-6xl font-black uppercase tracking-[-0.08em] text-cyan-400/60 md:text-8xl"
            aria-hidden="true"
          >
            YOU
            <br />
            FUCKING
            <br />
            LOSER.
          </h1>

          {/* Main title */}
          <h1 className="glitch relative text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] text-white md:text-8xl">
            <span className="block">YOU</span>

            <span className="block text-green-400">
              FUCKING
            </span>

            <span className="block">
              LOSER<span className="text-red-500">.</span>
            </span>
          </h1>

        </div>

        {/* Terminal output */}
        <div className="mt-14 font-mono text-xs md:text-sm">

          <p className="text-gray-600">
            [SYSTEM] identity_scan.exe
          </p>

          <p className="mt-2 text-gray-500">
            [SYSTEM] scanning...
          </p>

          <p className="mt-2 text-red-400">
            [ERROR] skill_issue detected
          </p>

          <p className="mt-2 text-green-400">
            [STATUS] still_debugging_life
            <span className="ml-1 animate-pulse">█</span>
          </p>

        </div>

        {/* Bottom status */}
        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          SYSTEM ONLINE
        </div>

      </div>
    </main>
  );
}
