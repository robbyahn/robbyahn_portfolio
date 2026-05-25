"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { num: "5+", label: "Years of experience" },
  { num: "30+", label: "Projects delivered" },
];

export default function Hero() {
  const textRef = useScrollAnimation();
  const statsRef = useScrollAnimation(0.2);

  return (
    <section className="hero-grid-cols relative min-h-screen grid grid-cols-[58%_42%] items-center px-12 py-36 pb-20 overflow-hidden">
      {/* <div className="hero-grid absolute inset-0 pointer-events-none z-0" /> */}
      <div ref={textRef} className="hero-text md:pr-20 z-10 fade-in">
        <p className="hero-eyebrow flex items-center gap-4 text-[0.68rem] tracking-[0.24em] uppercase text-accent-dim mb-7">
          Available for freelance
        </p>
        <h1 className="font-serif text-[clamp(3rem,5.5vw,5rem)] font-light leading-[1.05] tracking-tight mb-7 text-content">
          Frontend <em className="gradient-text not-italic">Engineer</em>
          <br />
          React &amp; Next.js
        </h1>
        <p className="text-[0.95rem] text-muted max-w-[400px] mb-12 leading-relaxed">
          Building performant, scalable web applications for global clients.
          Bilingual in English &amp; Korean — bridging East and West markets.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="btn-primary px-9 py-3.5 bg-accent text-site text-[0.75rem] font-medium tracking-[0.14em] uppercase no-underline inline-block transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-outline px-9 py-3.5 border border-border-lg text-muted text-[0.75rem] tracking-[0.14em] uppercase no-underline inline-block transition-all duration-250 hover:border-accent-dim hover:text-accent"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div ref={statsRef} className="hero-right-cols flex flex-col gap-px border border-border z-10 fade-in" style={{ transitionDelay: "0.2s" }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card bg-card px-11 py-10 flex flex-col justify-end border-b border-border last:border-b-none transition-colors duration-300 hover:bg-card-hover relative overflow-hidden"
          >
            <div className="font-serif text-[3.2rem] font-light leading-none text-accent mb-2">
              {stat.num}
            </div>
            <div className="text-[0.7rem] tracking-[0.16em] uppercase text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
