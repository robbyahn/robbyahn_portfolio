"use client";

const links = [
  { label: "Skills", href: "skills" },
  { label: "Work", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-200 flex items-center justify-between px-12 py-5 bg-site/90 backdrop-blur-xl border-b border-border">
      <div className="font-serif text-[1.05rem] font-light tracking-widest text-accent">
        YourName.dev
      </div>
      <ul className="nav-links flex gap-10">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={`#${href}`}
              className="text-[0.73rem] tracking-[0.16em] uppercase text-muted no-underline transition-colors duration-250 hover:text-accent"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
