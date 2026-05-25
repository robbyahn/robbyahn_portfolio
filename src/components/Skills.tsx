"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  {
    tag: "Core",
    name: "React & Next.js",
    desc: "App Router, SSR/SSG, RSC, performance optimization, large-scale SPAs.",
    width: "95%",
  },
  {
    tag: "Styling",
    name: "TypeScript & CSS",
    desc: "Strict TypeScript, Tailwind CSS, CSS Modules, design systems, component libraries.",
    width: "90%",
  },
  {
    tag: "Backend",
    name: "Node & APIs",
    desc: "REST & GraphQL APIs, Node.js, Prisma, PostgreSQL, serverless functions.",
    width: "78%",
  },
  {
    tag: "DevOps",
    name: "Deploy & CI/CD",
    desc: "Vercel, AWS, Docker, GitHub Actions — from code to production.",
    width: "72%",
  },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="skill-item bg-surface px-10 py-9 transition-colors duration-300 hover:bg-card-hover"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="skill-tag inline-block text-[0.62rem] tracking-[0.16em] uppercase text-accent-dim border border-border-lg px-2.5 py-1 mb-4">
        {skill.tag}
      </span>
      <div className="skill-name font-serif text-[1.45rem] font-light mb-2.5 text-content">
        {skill.name}
      </div>
      <div className="skill-desc text-sm text-muted leading-relaxed">{skill.desc}</div>
      <div className="skill-bar-wrap mt-5 h-px bg-white/4">
        <div
          className="skill-bar h-px bg-accent-dim"
          style={{ width: skill.width }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollAnimation();

  return (
    <section className="bg-surface px-12 py-28" id="skills">
      <div ref={headerRef} className="section-header mb-16 fade-in">
        <p className="section-num text-[0.65rem] tracking-[0.22em] uppercase text-muted mb-4">
          01 — Expertise
        </p>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-tight">
          Technical <em className="gradient-text not-italic">Stack</em>
        </h2>
      </div>
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {skills.map((skill, i) => (
          <SkillCard key={skill.tag} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
