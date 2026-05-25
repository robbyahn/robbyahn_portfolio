"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    type: "SaaS Dashboard",
    title: "Analytics Platform",
    desc: "Real-time data visualization dashboard for a B2B SaaS startup. Built with Next.js App Router, Recharts, and WebSocket integration.",
    tags: ["Next.js 14", "TypeScript", "Recharts", "Prisma"],
  },
  {
    type: "E-Commerce",
    title: "Korean Market Store",
    desc: "Bilingual (KO/EN) e-commerce platform with Shopify headless, custom checkout flow, and i18n routing via Next.js.",
    tags: ["Next.js", "Shopify", "i18n", "Tailwind"],
  },
  {
    type: "Web App",
    title: "Project Management Tool",
    desc: "Kanban-style project manager with real-time collaboration, drag-and-drop, and role-based access control.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="project-card bg-card px-10 py-10 flex flex-col transition-colors duration-300 cursor-pointer group hover:bg-card-hover"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="project-meta flex justify-between items-start mb-6">
        <span className="project-type text-[0.62rem] tracking-[0.18em] uppercase text-muted">
          {project.type}
        </span>
        <span className="project-arrow text-muted text-base transition-all duration-250 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
          ↗
        </span>
      </div>
      <div className="project-title font-serif text-[1.55rem] font-light mb-3 leading-tight text-content">
        {project.title}
      </div>
      <p className="project-desc text-sm text-muted flex-1 mb-8 leading-relaxed">
        {project.desc}
      </p>
      <div className="project-tags flex flex-wrap gap-[0.45rem]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tag text-[0.62rem] tracking-[0.1em] uppercase bg-white/3 border border-border px-3 py-1 text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollAnimation();

  return (
    <section className="px-12 py-28" id="projects">
      <div ref={headerRef} className="section-header mb-16 fade-in">
        <p className="section-num text-[0.65rem] tracking-[0.22em] uppercase text-muted mb-4">
          02 — Selected Work
        </p>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-tight">
          Recent <em className="gradient-text not-italic">Projects</em>
        </h2>
      </div>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
