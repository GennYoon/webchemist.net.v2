export function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-[12px] tracking-[0.2em] text-[#f5f5f5]/30 uppercase mb-6">
            About
          </p>
          <h2 className="text-[2.5rem] font-bold leading-tight tracking-tight text-[#f5f5f5] mb-8">
            제품을 만드는
            <br />
            엔지니어
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#f5f5f5]/60">
            <p>
              풀스택 개발자로서 아이디어를 실제 제품으로 구현하는 것을 즐깁니다.
              프론트엔드부터 백엔드, 인프라까지 — 제품의 전 스택을 직접 설계하고 개발합니다.
            </p>
            <p>
              devist를 직접 만들고 사용하면서 개발 워크플로우를 자동화합니다.
              AI와 협업하여 더 빠르게, 더 정확하게 제품을 출시하는 방법을 탐구합니다.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-8 md:pt-16">
          {[
            { label: "현재 집중", value: "AI-driven dev tools, devist" },
            { label: "주요 스택", value: "React, TypeScript, Supabase, Tauri" },
            { label: "관심사", value: "Product design, workflow automation" },
            { label: "위치", value: "Seoul, Korea" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1 border-t border-white/10 pt-4">
              <span className="font-mono text-[11px] tracking-widest text-[#f5f5f5]/30 uppercase">
                {item.label}
              </span>
              <span className="text-[14px] text-[#f5f5f5]/80">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
