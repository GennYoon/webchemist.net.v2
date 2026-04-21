const LINKS = [
  { label: "GitHub", href: "https://github.com/webchemist" },
  { label: "Email", href: "mailto:hello@webchemist.net" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="border-t border-white/10 pt-16">
        <p className="font-mono text-[12px] tracking-[0.2em] text-[#f5f5f5]/30 uppercase mb-8">
          Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <h2 className="text-[2.5rem] font-bold leading-tight tracking-tight text-[#f5f5f5] mb-6">
              함께 만들 준비가
              <br />
              되어 있습니다
            </h2>
            <p className="text-[15px] leading-relaxed text-[#f5f5f5]/50 max-w-sm">
              프로젝트 협업, 기술 자문, 또는 그냥 인사라도 — 편하게 연락주세요.
            </p>
          </div>

          <div className="space-y-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-white/10 px-5 py-4 hover:border-white/40 hover:bg-white/5 transition-all group"
              >
                <span className="text-[14px] font-medium text-[#f5f5f5]/70 group-hover:text-[#f5f5f5] transition-colors">
                  {link.label}
                </span>
                <span className="text-[#f5f5f5]/30 group-hover:text-[#f5f5f5] transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="font-mono text-[11px] text-[#f5f5f5]/20">
            © 2026 webchemist
          </span>
          <span className="font-mono text-[11px] text-[#f5f5f5]/20">
            built with devist
          </span>
        </div>
      </div>
    </section>
  );
}
