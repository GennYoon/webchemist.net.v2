const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["React 18/19", "TypeScript", "Tailwind CSS", "Vite", "React Native"],
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
    label: "Tooling",
    items: ["Claude Code", "Remotion", "GitHub Actions", "Docker"],
  },
  {
    label: "Design",
    items: ["Pencil MCP", "Figma", "UI/UX design systems"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-[12px] tracking-[0.2em] text-[#f5f5f5]/30 uppercase mb-16">
        Skills
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="space-y-4">
            <h3 className="font-mono text-[11px] tracking-widest text-[#f5f5f5]/30 uppercase">
              {group.label}
            </h3>
            <ul className="space-y-2">
              {group.items.map((skill) => (
                <li key={skill} className="text-[13px] text-[#f5f5f5]/70">
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
