import { useState } from "react";

const LINKS = [
  { label: "GitHub", href: "https://github.com/GennYoon" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gennyoon" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", project: "", email: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[webchemist] ${form.project || "협업 문의"}`);
    const body = encodeURIComponent(
      `안녕하세요, ${form.name}입니다.\n\n${form.project}\n\n회신 이메일: ${form.email}`
    );
    window.open(`mailto:hello@webchemist.net?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="border-t border-white/10 pt-16">
        <p className="font-mono text-[12px] tracking-[0.2em] text-[#f5f5f5]/30 uppercase mb-8">
          Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* 왼쪽: 헤드라인 + 링크 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[2.5rem] font-bold leading-tight tracking-tight text-[#f5f5f5] mb-4">
                함께 만들 준비가
                <br />
                되어 있습니다
              </h2>
              <p className="text-[15px] leading-relaxed text-[#f5f5f5]/50">
                프로젝트 의뢰, 기술 자문, 또는 그냥 인사라도 — 편하게 연락주세요.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href="mailto:hello@webchemist.net"
                className="flex items-center justify-between border border-white/10 px-4 py-3.5 hover:border-white/40 hover:bg-white/5 transition-all group"
              >
                <span className="text-[13px] text-[#f5f5f5]/60 group-hover:text-[#f5f5f5] transition-colors">
                  hello@webchemist.net
                </span>
                <span className="text-[#f5f5f5]/30 group-hover:text-[#f5f5f5] transition-colors">→</span>
              </a>
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-white/10 px-4 py-3.5 hover:border-white/40 hover:bg-white/5 transition-all group"
                >
                  <span className="text-[13px] text-[#f5f5f5]/60 group-hover:text-[#f5f5f5] transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[#f5f5f5]/30 group-hover:text-[#f5f5f5] transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* 오른쪽: 커뮤니케이션 폼 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="font-mono text-[11px] tracking-widest text-[#f5f5f5]/30 uppercase">
                이름
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="홍길동"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-[#f5f5f5] placeholder:text-[#f5f5f5]/20 outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[11px] tracking-widest text-[#f5f5f5]/30 uppercase">
                이메일
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-[#f5f5f5] placeholder:text-[#f5f5f5]/20 outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[11px] tracking-widest text-[#f5f5f5]/30 uppercase">
                프로젝트 내용
              </label>
              <textarea
                required
                rows={4}
                value={form.project}
                onChange={(e) => setForm((f) => ({ ...f, project: e.target.value }))}
                placeholder="어떤 프로젝트인지 간단히 설명해주세요"
                className="w-full resize-none bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-[#f5f5f5] placeholder:text-[#f5f5f5]/20 outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f5f5f5] text-[#0f0f0f] py-3 text-[13px] font-semibold tracking-wide hover:bg-white transition-colors"
            >
              {sent ? "메일 앱이 열렸습니다 ✓" : "문의 보내기 →"}
            </button>
          </form>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="font-mono text-[11px] text-[#f5f5f5]/20">© 2026 webchemist</span>
          <span className="font-mono text-[11px] text-[#f5f5f5]/20">built with devist</span>
        </div>
      </div>
    </section>
  );
}
