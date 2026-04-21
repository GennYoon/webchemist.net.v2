import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 backdrop-blur-xl bg-[#0a0a0a]/85"
          : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-[12px] tracking-[0.2em] text-white/50 hover:text-white/90 transition-colors"
        >
          wc
        </a>
        <ul className="flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-[11px] tracking-widest text-white/30 hover:text-white/70 transition-colors uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-mono text-[11px] tracking-widest bg-white text-black px-4 py-1.5 hover:bg-white/90 transition-colors uppercase"
            >
              Hire
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
