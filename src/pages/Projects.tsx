const PROJECTS = [
  {
    id: "devist",
    name: "devist",
    tagline: "AI-driven development platform",
    description:
      "개발 워크플로우 자동화 플랫폼. 이슈 트래킹, AI 에이전트 오케스트레이션, 워크플로우 디자인을 하나로.",
    tags: ["React", "TypeScript", "Tauri", "Supabase"],
    year: "2024—",
    href: "https://github.com/webchemist/devist",
  },
  {
    id: "webchemist-net",
    name: "webchemist.net",
    tagline: "Personal brand site",
    description:
      "직접 설계하고 개발한 개인 브랜드 사이트. React + Vite + Tailwind CSS v4.",
    tags: ["React", "Vite", "Tailwind CSS v4"],
    year: "2026",
    href: "#",
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
              <div className="flex items-baseline gap-4">
                <h3 className="text-[1.4rem] font-bold tracking-tight text-[#f5f5f5] group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <span className="text-[13px] text-[#f5f5f5]/40 font-mono">{project.tagline}</span>
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
            <div className="flex items-center gap-6 md:text-right">
              <span className="font-mono text-[12px] text-[#f5f5f5]/30">{project.year}</span>
              {project.href !== "#" && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors"
                >
                  →
                </a>
              )}
            </div>
          </article>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
