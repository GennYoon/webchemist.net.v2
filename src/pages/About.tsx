const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "Full", label: "Stack ownership" },
];

const META = [
  { label: "Role", value: "Full-Stack Engineer" },
  { label: "Focus", value: "AI-driven dev tools, devist" },
  { label: "Stack", value: "React · TypeScript · Supabase · Tauri" },
  { label: "Base", value: "Seoul, Korea" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      {/* 섹션 레이블 */}
      <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
        <span className="font-mono text-[11px] tracking-[0.25em] text-white/30 uppercase">About</span>
      </div>

      {/* 핵심 포지셔닝 문장 */}
      <blockquote className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-semibold leading-[1.35] tracking-tight text-white/80 max-w-3xl mb-20">
        "아이디어를 스스로 구현하는 엔지니어.
        <br />
        <span className="text-white/40">
          기획부터 배포까지 한 사람이 맡을 때 제품은 더 빠르게, 더 일관되게 만들어집니다.
        </span>
        "
      </blockquote>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 좌: 본문 */}
        <div className="space-y-5 text-[15px] leading-[1.75] text-white/50 font-light">
          <p>
            풀스택 개발자로서 프론트엔드·백엔드·인프라를 직접 설계하고 개발합니다.
            여러 사람이 나눠 하던 작업을 혼자서 완결하기 때문에, 소통 오버헤드 없이
            빠른 의사결정과 일관된 품질이 가능합니다.
          </p>
          <p>
            현재는 <span className="text-white/70 font-medium">devist</span>를 직접 만들고 사용하며
            AI 에이전트 오케스트레이션과 개발 자동화를 탐구합니다.
            이 사이트 역시 devist 워크플로우로 설계·개발했습니다.
          </p>
        </div>

        {/* 우: 메타 정보 */}
        <div className="space-y-0">
          {META.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline gap-6 border-t border-white/8 py-4 first:border-t-0"
            >
              <span className="font-mono text-[11px] tracking-widest text-white/25 uppercase w-16 shrink-0">
                {item.label}
              </span>
              <span className="text-[14px] text-white/65">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 수치 바 */}
      <div className="mt-20 grid grid-cols-3 gap-0 border border-white/8">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-8 py-6 flex flex-col gap-2 ${i < STATS.length - 1 ? "border-r border-white/8" : ""}`}
          >
            <span className="text-[2.5rem] font-black tracking-tight text-white leading-none">
              {s.value}
            </span>
            <span className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
