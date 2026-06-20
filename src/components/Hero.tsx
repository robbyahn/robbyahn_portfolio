"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const textRef = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 glow pointer-events-none"></div>

      {/* Animated SVG node network graphic */}
      <svg className="absolute right-0 top-0 h-full w-1/2 hidden lg:block pointer-events-none opacity-90" viewBox="0 0 500 600" fill="none" aria-hidden="true">
        <g stroke="#2a2a30" strokeWidth="1">
          <line x1="120" y1="120" x2="300" y2="90"/>
          <line x1="300" y1="90" x2="420" y2="200"/>
          <line x1="120" y1="120" x2="200" y2="300"/>
          <line x1="200" y1="300" x2="380" y2="350"/>
          <line x1="380" y1="350" x2="420" y2="200"/>
          <line x1="200" y1="300" x2="150" y2="480"/>
          <line x1="150" y1="480" x2="350" y2="500"/>
          <line x1="350" y1="500" x2="380" y2="350"/>
          <line x1="300" y1="90" x2="200" y2="300"/>
        </g>
        <g fill="#00d9ff">
          <circle className="node" style={{ animationDelay: "0s" }} cx="120" cy="120" r="5"/>
          <circle className="node" style={{ animationDelay: ".8s" }} cx="300" cy="90" r="6"/>
          <circle className="node" style={{ animationDelay: "1.6s" }} cx="420" cy="200" r="4"/>
          <circle className="node" style={{ animationDelay: "2.4s" }} cx="200" cy="300" r="7"/>
          <circle className="node" style={{ animationDelay: "3.2s" }} cx="380" cy="350" r="5"/>
          <circle className="node" style={{ animationDelay: "4s" }} cx="150" cy="480" r="4"/>
          <circle className="node" style={{ animationDelay: "4.8s" }} cx="350" cy="500" r="6"/>
        </g>
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 w-full z-10">
        <p ref={textRef} className="font-mono text-accent text-sm mb-6 flex items-center gap-2 fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
          Open to freelance &amp; contract
        </p>
        <h1 ref={textRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-3xl mb-8 fade-in" style={{ transitionDelay: "0.1s" }}>
          Web developer building<br/>fast, accessible<br/><span className="text-accent">products.</span>
        </h1>
        <p ref={textRef} className="mt-8 text-lg text-ash max-w-xl leading-relaxed fade-in" style={{ transitionDelay: "0.2s" }}>
          10+ years shipping production web applications. Frontend-leaning, full-stack capable. I turn complex requirements into clean, maintainable interfaces.
        </p>
        <div ref={textRef} className="mt-10 flex flex-wrap gap-4 fade-in" style={{ transitionDelay: "0.3s" }}>
          <a href="#work" className="bg-accent text-ink font-bold px-6 py-3 hover:bg-white transition-colors">View work</a>
          <a href="#contact" className="border border-line text-white font-bold px-6 py-3 hover:border-accent transition-colors">Get in touch</a>
        </div>
        <dl ref={textRef} className="mt-16 flex flex-wrap gap-x-12 gap-y-6 font-mono text-sm fade-in" style={{ transitionDelay: "0.4s" }}>
          <div><dt className="text-ash">Experience</dt><dd className="text-white text-2xl font-bold mt-1">10+ yrs</dd></div>
          <div><dt className="text-ash">Focus</dt><dd className="text-white text-2xl font-bold mt-1">Frontend</dd></div>
          <div><dt className="text-ash">Stack</dt><dd className="text-white text-2xl font-bold mt-1">Full</dd></div>
        </dl>
      </div>
    </section>
  );
}
