const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["React 18/19", "TypeScript", "Tailwind CSS v4", "Vite", "React Native (Expo)"],
  },
  {
    label: "Backend",
    items: ["Supabase", "PostgreSQL", "Edge Functions", "RLS", "Node.js"],
  },
  {
    label: "Desktop",
    items: ["Tauri", "Electron", "electron-vite"],
  },
  {
    label: "Tooling & AI",
    items: ["Claude Code", "Remotion", "GitHub Actions", "Docker"],
  },
];

const ALL_TAGS = [
  "React", "TypeScript", "Vite", "Tailwind CSS", "React Native",
  "Supabase", "PostgreSQL", "Edge Functions", "Node.js",
  "Tauri", "Electron",
  "Claude Code", "Remotion", "Docker", "GitHub Actions",
  "Figma", "UI/UX", "Design Systems",
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
        <span className="font-mono text-[11px] tracking-[0.25em] text-white/30 uppercase">Skills</span>
      </div>

      {/* 태그 클라우드 */}
      <div className="flex flex-wrap gap-2 mb-20">
        {ALL_TAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[12px] text-white/50 border border-white/10 px-3 py-1.5 hover:border-white/30 hover:text-white/80 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 카테고리별 상세 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/8">
        {SKILL_GROUPS.map((group, i) => (
          <div
            key={group.label}
            className={`p-6 space-y-4 ${i < SKILL_GROUPS.length - 1 ? "border-r border-white/8" : ""}`}
          >
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
              {group.label}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((skill) => (
                <li key={skill} className="text-[13px] text-white/55 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
