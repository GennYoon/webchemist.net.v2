const PROJECTS = [
  {
    id: "client-1",
    name: "기업 브랜드 사이트 리뉴얼",
    tagline: "B2B SaaS 기업 공식 사이트",
    description:
      "제품 소개, 팀 소개, 미팅 예약까지 원스톱으로 처리하는 마케팅 사이트. 기존 대비 전환율 2배 향상.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    href: null,
  },
  {
    id: "client-2",
    name: "물류 관리 대시보드",
    tagline: "실시간 배송 추적 & 재고 관리",
    description:
      "다수 창고의 재고·배송 현황을 실시간으로 시각화하는 웹 애플리케이션. 기존 엑셀 기반 운영 대체.",
    tags: ["React", "Supabase", "Recharts", "PostgreSQL"],
    year: "2024",
    href: null,
  },
  {
    id: "client-3",
    name: "커뮤니티 플랫폼",
    tagline: "멤버십 기반 학습 커뮤니티",
    description:
      "강의, 과제, 멤버 디렉토리, 실시간 알림을 포함한 풀스택 커뮤니티 플랫폼.",
    tags: ["React", "Supabase", "Edge Functions", "Stripe"],
    year: "2024",
    href: null,
  },
  {
    id: "devist",
    name: "devist",
    tagline: "AI-driven development platform",
    description:
      "개발 워크플로우 자동화 플랫폼. 이슈 트래킹, AI 에이전트 오케스트레이션, 워크플로우 디자인을 하나로.",
    tags: ["React", "TypeScript", "Tauri", "Supabase"],
    year: "2024—",
    href: "https://github.com/GennYoon/devist",
    isSelf: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-[12px] tracking-[0.2em] text-[#f5f5f5]/30 uppercase mb-16">
        Projects
      </p>

      <div className="space-y-0">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group border-t border-white/10 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start hover:border-white/30 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-[1.3rem] font-bold tracking-tight text-[#f5f5f5] group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                {project.isSelf && (
                  <span className="font-mono text-[10px] border border-white/20 text-[#f5f5f5]/40 px-1.5 py-0.5">
                    자체 제품
                  </span>
                )}
                <span className="text-[13px] text-[#f5f5f5]/40">{project.tagline}</span>
              </div>
              <p className="text-[14px] leading-relaxed text-[#f5f5f5]/50 max-w-lg">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#f5f5f5]/40 border border-white/10 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 md:flex-col md:items-end md:pt-1">
              <span className="font-mono text-[12px] text-[#f5f5f5]/30">{project.year}</span>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors"
                >
                  →
                </a>
              ) : (
                <span className="font-mono text-[10px] text-[#f5f5f5]/20">비공개</span>
              )}
            </div>
          </article>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
