"use client";

const skills = [
  {
    tag: "Frontend",
    name: "React / Next.js",
    desc: "Modern, performant web applications with App Router, server components, and streaming.",
  },
  {
    tag: "Languages",
    name: "TypeScript",
    desc: "Type-safe code at scale. Strict mode, generics, and advanced patterns.",
  },
  {
    tag: "Styling",
    name: "Tailwind CSS",
    desc: "Utility-first CSS with custom themes and responsive design systems.",
  },
  {
    tag: "Backend",
    name: "Node.js",
    desc: "Full-stack development with Express, async patterns, and API design.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-accent text-sm">01</span>
          <h2 className="text-3xl font-bold text-white">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {skills.map((skill) => (
            <div key={skill.tag} className="bg-coal p-8 hover:bg-slate1 transition-colors">
              <h3 className="text-white font-bold mb-4">{skill.name}</h3>
              <p className="text-ash text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
