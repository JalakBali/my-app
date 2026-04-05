import heroImg from "../assets/hero.jpg";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between w-full gap-12">

        <div className="flex flex-col gap-5 max-w-lg">
          <p className="text-orange-400 text-xs font-medium tracking-[0.3em] uppercase">
            Hello, I am
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
            Sugiharto<br />
            <span className="text-zinc-300">Budidarman</span>
          </h1>

          <div className="w-10 h-[2px] bg-orange-500 rounded-full" />

          <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
            Building clean web apps and sharing what I learn.
            Blog, Demo, Tools.
          </p>

          <div className="flex gap-3 mt-2">
            <a href="/blog" className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-semibold text-sm transition-all">
              Read Blog
            </a>
            <a href="/demo" className="px-6 py-2 rounded-lg border border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-white text-sm transition-all">
              See Demo
            </a>
          </div>
        </div>

        <div className="shrink-0 relative">
          <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-2xl scale-95" />
          <img src={heroImg} alt="Hero" className="relative w-72 h-72 rounded-2xl object-cover border border-orange-500/40 shadow-2xl" />
        </div>

      </div>
    </div>
  );
}
