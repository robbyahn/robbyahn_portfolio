"use client";

const links = [
  { label: "Skills", href: "skills" },
  { label: "Work", href: "work" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Primary">
        <a href="#" className="font-mono text-sm tracking-tight text-white">robby<span className="text-accent">.</span>dev</a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={`#${href}`} className="text-ash hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="text-sm font-bold border border-line hover:border-accent hover:text-accent px-4 py-2 transition-colors">Available for work</a>
      </nav>
    </header>
  );
}
