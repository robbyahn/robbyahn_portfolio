"use client";

const experiences = [
  {
    period: "2019 — Present",
    role: "Senior Web Developer",
    company: "Full-time",
    bullets: [
      "Lead frontend work on enterprise and government web platforms. SilverStripe CMS, React/Next.js, accessibility compliance, and performance.",
    ],
  },
  {
    period: "2015 — 2019",
    role: "Web Developer",
    company: "Full-time",
    bullets: [
      "Full-stack development across CMS platforms and custom PHP applications. Built responsive, standards-compliant interfaces.",
    ],
  },
  {
    period: "Earlier",
    role: "Frontend Developer",
    company: "Full-time",
    bullets: [
      "Foundations in HTML, CSS, JavaScript and the craft of clean, maintainable markup.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-accent text-sm">03</span>
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>
        <ol className="relative border-l border-line ml-2">
          {experiences.map((exp) => (
            <li key={exp.period} className="ml-8 pb-12 last:pb-0">
              <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-accent"></span>
              <p className="font-mono text-xs text-ash">{exp.period}</p>
              <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
              <p className="text-ash mt-2 max-w-2xl">{exp.bullets[0]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
