const STATS = [
  { value: "5+", label: "years" },
  { value: "30+", label: "projects" },
  { value: "100%", label: "shipped" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden">
      {/* 오른쪽 상단 수직 텍스트 */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-white/10" />
        <span
          className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Full-Stack Engineer
        </span>
        <div className="w-px h-16 bg-white/10" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full pt-24 pb-16">
        {/* 상단 레이블 */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-px bg-white/30" />
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">
            webchemist.net
          </span>
        </div>

        {/* 메인 헤딩 */}
        <h1 className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.88] tracking-[-0.04em] text-white mb-10">
          web
          <span className="text-white/20">.</span>
          <br />
          <span className="text-white/80">chem</span>
          <span className="text-white/40">ist</span>
        </h1>

        {/* 서브 카피 + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10">
          <div className="space-y-6 max-w-sm">
            <p className="text-[15px] leading-[1.7] text-white/50 font-light">
              아이디어를 실제 제품으로.
              <br />
              프론트엔드부터 인프라까지 — 직접 설계하고 직접 만듭니다.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[13px] font-bold tracking-wide hover:bg-white/90 transition-colors"
              >
                작업물 보기
              </a>
              <a
                href="#contact"
                className="text-[13px] text-white/40 hover:text-white/80 transition-colors font-mono"
              >
                문의 →
              </a>
            </div>
          </div>

          {/* 통계 */}
          <div className="flex gap-10 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[2.2rem] font-black tracking-tight text-white leading-none">
                  {s.value}
                </span>
                <span className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 스크롤 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
