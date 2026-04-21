const PROJECTS = [
  {
    id: "client-1",
    num: "01",
    name: "기업 브랜드 사이트 리뉴얼",
    category: "Marketing Website",
    description:
      "B2B SaaS 기업의 공식 사이트 전면 재설계. 제품 소개·팀 소개·미팅 예약을 하나의 흐름으로 통합.",
    outcome: "전환율 2× 향상",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    href: null,
  },
  {
    id: "client-2",
    num: "02",
    name: "물류 관리 대시보드",
    category: "Web Application",
    description:
      "다수 창고의 재고·배송 현황을 실시간 시각화. 기존 엑셀 기반 운영을 단일 플랫폼으로 대체.",
    outcome: "운영 공수 60% 감소",
    tags: ["React", "Supabase", "Recharts", "PostgreSQL"],
    year: "2024",
    href: null,
  },
  {
    id: "client-3",
    num: "03",
    name: "멤버십 커뮤니티 플랫폼",
    category: "Full-stack Platform",
    description:
      "강의·과제·멤버 디렉토리·실시간 알림을 포함한 학습 커뮤니티. 결제부터 콘텐츠 관리까지 풀스택.",
    outcome: "런칭 1개월 만에 회원 500+",
    tags: ["React", "Supabase", "Edge Functions", "Stripe"],
    year: "2024",
    href: null,
  },
  {
    id: "devist",
    num: "—",
    name: "devist",
    category: "Self / Dev Tool",
    description:
      "AI 에이전트 오케스트레이션·이슈 트래킹·워크플로우 자동화를 하나로 묶은 개발 플랫폼. 현재도 사용 중.",
    outcome: "이 사이트도 devist로 만들었습니다",
    tags: ["React", "Tauri", "Supabase", "TypeScript"],
    year: "2024—",
    href: "https://github.com/GennYoon/devist",
    isSelf: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      {/* 섹션 헤더 */}
      <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/30 uppercase">
            Projects
          </span>
          <span className="font-mono text-[11px] text-white/20">
            ({PROJECTS.length})
          </span>
        </div>
        <span className="font-mono text-[11px] text-white/20 hidden sm:block">
          Selected works
        </span>
      </div>

      <div className="space-y-0">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group relative grid grid-cols-[auto_1fr] gap-8 py-10 border-b border-white/8 hover:border-white/20 transition-all duration-300"
          >
            {/* 번호 */}
            <span className="font-mono text-[12px] text-white/20 pt-1 w-8 shrink-0">
              {project.num}
            </span>

            <div className="space-y-4">
              {/* 제목 행 */}
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-[1.25rem] font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <span className="font-mono text-[11px] text-white/30 border border-white/10 px-2 py-0.5">
                  {project.category}
                </span>
                {project.isSelf && (
                  <span className="font-mono text-[10px] text-white/20 border border-white/8 px-2 py-0.5">
                    자체 제품
                  </span>
                )}
              </div>

              {/* 설명 */}
              <p className="text-[14px] leading-relaxed text-white/45 max-w-2xl">
                {project.description}
              </p>

              {/* 성과 하이라이트 */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                <span className="text-[12px] text-white/60 font-medium">
                  {project.outcome}
                </span>
              </div>

              {/* 하단 메타 */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-white/30 px-2 py-0.5 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 shrink-0 pl-4">
                  <span className="font-mono text-[11px] text-white/20">{project.year}</span>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-white/30 hover:text-white transition-colors font-mono"
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-white/15">비공개</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
