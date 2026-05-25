"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Developer",
    company: "Company Name · Full-time",
    bullets: [
      "Led migration of legacy React app to Next.js 14, reducing TTI by 40%",
      "Built reusable component library used across 3 product lines",
      "Mentored 2 junior developers and conducted weekly code reviews",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Previous Company · Full-time",
    bullets: [
      "Developed responsive SPA for 50k+ monthly active users",
      "Implemented A/B testing infrastructure, improving conversion by 18%",
      "Collaborated with designers and backend team in agile sprints",
    ],
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "Startup · Full-time",
    bullets: [
      "Built marketing landing pages with React and GSAP animations",
      "Integrated third-party APIs: Stripe, Twilio, SendGrid",
    ],
  },
];

function ExpItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="exp-item bg-surface grid grid-cols-1 md:grid-cols-[150px_1fr] gap-3 md:gap-12 px-10 py-10 transition-colors duration-300 hover:bg-card-hover"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="exp-period text-[0.72rem] tracking-[0.1em] text-accent-dim pt-1">
        {exp.period}
      </div>
      <div>
        <div className="exp-role font-serif text-[1.2rem] font-light mb-1 text-content">
          {exp.role}
        </div>
        <div className="exp-company text-[0.78rem] text-muted tracking-wide mb-4">
          {exp.company}
        </div>
        <ul className="exp-bullets flex flex-col gap-[0.45rem] list-none">
          {exp.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm text-muted pl-5 relative leading-relaxed before:content-['–'] before:absolute before:left-0 before:text-accent-dim"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollAnimation();

  return (
    <section className="bg-surface px-12 py-28" id="experience">
      <div ref={headerRef} className="section-header mb-16 fade-in">
        <p className="section-num text-[0.65rem] tracking-[0.22em] uppercase text-muted mb-4">
          03 — Background
        </p>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-tight">
          Work <em className="gradient-text not-italic">Experience</em>
        </h2>
      </div>
      <div className="exp-list flex flex-col gap-px bg-border border border-border">
        {experiences.map((exp, i) => (
          <ExpItem key={exp.period} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
