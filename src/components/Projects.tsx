"use client";

const projects = [
  {
    type: "Government CMS platform",
    title: "SilverStripe CMS",
    desc: "Accessible, high-traffic public-sector site built on SilverStripe with custom modules and strict performance budgets.",
    tags: ["SilverStripe", "PHP", "WCAG"],
  },
  {
    type: "React component library",
    title: "Headless Components",
    desc: "Reusable, fully keyboard-accessible search and autocomplete components with robust state handling.",
    tags: ["React", "TypeScript", "Headless UI"],
  },
  {
    type: "Developer tooling",
    title: "Link Checker",
    desc: "Node.js link-checking and site-audit utilities with a clean local dashboard and CSV export.",
    tags: ["Node.js", "CLI", "Testing"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-line py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-accent text-sm">02</span>
          <h2 className="text-3xl font-bold text-white">Selected work</h2>
        </div>
        <div className="space-y-px">
          {projects.map((project) => (
            <article key={project.title} className="group bg-coal hover:bg-slate1 border border-line p-8 flex flex-col md:flex-row md:items-center gap-6 transition-colors">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-ash mt-2 max-w-xl">{project.desc}</p>
              </div>
              <div className="font-mono text-xs text-ash flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-line px-2 py-1">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
