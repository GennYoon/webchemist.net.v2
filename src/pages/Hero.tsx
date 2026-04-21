export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-16">
      <div className="space-y-6">
        <p className="font-mono text-[13px] tracking-[0.2em] text-[#f5f5f5]/40 uppercase">
          Full-Stack Engineer
        </p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter text-[#f5f5f5]">
          web
          <br />
          chemist
        </h1>
        <p className="max-w-md text-[16px] leading-relaxed text-[#f5f5f5]/50">
          코드로 제품을 만들고, 설계로 문제를 해결합니다.
          <br />
          아이디어에서 배포까지 — 직접.
        </p>
        <div className="flex items-center gap-6 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#f5f5f5] text-[#0f0f0f] px-5 py-2.5 text-[13px] font-semibold tracking-wide hover:bg-white transition-colors"
          >
            Projects →
          </a>
          <a
            href="#contact"
            className="text-[13px] text-[#f5f5f5]/50 hover:text-[#f5f5f5] transition-colors tracking-wide border-b border-[#f5f5f5]/20 pb-0.5"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#f5f5f5]" />
      </div>
    </section>
  );
}
