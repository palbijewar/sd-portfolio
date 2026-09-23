export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Green hacker glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[120px]" />

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px]" />

      <div className="relative z-10 text-center">

        {/* Terminal header */}
        <div className="mb-8 font-mono text-sm text-green-400">
          <span className="text-gray-500">root@portfolio:</span>
          <span className="text-green-400">~$</span>{" "}
          <span className="animate-pulse">who_am_i</span>
        </div>

        {/* Main glitch text */}
        <div className="relative">

          {/* Red glitch layer */}
          <h1
            className="absolute left-1/2 top-0 -translate-x-[calc(50%+3px)] text-6xl font-black uppercase tracking-[-0.08em] text-red-500/70 blur-[0.5px] md:text-8xl"
            aria-hidden="true"
          >
            YOU FUCKING LOSER.
          </h1>

          {/* Cyan glitch layer */}
          <h1
            className="absolute left-1/2 top-0 -translate-x-[calc(50%-3px)] text-6xl font-black uppercase tracking-[-0.08em] text-cyan-400/70 blur-[0.5px] md:text-8xl"
            aria-hidden="true"
          >
            YOU FUCKING LOSER.
          </h1>

          {/* Main text */}
          <h1 className="relative text-6xl font-black uppercase tracking-[-0.08em] text-white md:text-8xl">
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
        <div className="mt-10 font-mono text-sm">
          <p className="text-gray-500">
            [SYSTEM] identity scan complete...
          </p>

          <p className="mt-2 text-red-400">
            [ERROR] skill issue detected_
          </p>

          <p className="mt-2 text-green-400">
            [STATUS] still debugging life
            <span className="ml-1 animate-pulse">█</span>
          </p>
        </div>

      </div>
    </main>
  );
}
