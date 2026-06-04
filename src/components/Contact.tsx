"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const eyebrowRef = useScrollAnimation();
  const headingRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const linksRef = useScrollAnimation();

  return (
    <section className="contact text-center px-12 py-28 relative overflow-hidden" id="contact">
      <p
        ref={eyebrowRef}
        className="contact-eyebrow text-[0.65rem] tracking-[0.22em] uppercase text-muted mb-7 fade-in"
      >
        04 — Let&apos;s Work Together
      </p>
      <h2
        ref={headingRef}
        className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light mb-6 leading-tight fade-in"
      >
        Open to <em className="gradient-text not-italic">Freelance</em>
        <br />
        Opportunities
      </h2>
      <p
        ref={descRef}
        className="text-muted max-w-[440px] mx-auto mb-14 text-[0.93rem] fade-in"
      >
        Available for remote projects worldwide. Fluent in English and Korean —
        happy to work across time zones and markets.
      </p>
      <div ref={linksRef} className="contact-links flex justify-center gap-4 flex-wrap fade-in">
        <a
          href="mailto:your@email.com"
          className="btn-primary px-9 py-3.5 bg-accent text-site text-[0.75rem] font-medium tracking-[0.14em] uppercase no-underline inline-block transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline px-9 py-3.5 border border-border-lg text-muted text-[0.75rem] tracking-[0.14em] uppercase no-underline inline-block transition-all duration-250 hover:border-accent-dim hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline px-9 py-3.5 border border-border-lg text-muted text-[0.75rem] tracking-[0.14em] uppercase no-underline inline-block transition-all duration-250 hover:border-accent-dim hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
