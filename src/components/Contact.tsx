"use client";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-accent text-sm">04</span>
          <h2 className="text-3xl font-bold text-white">Contact</h2>
        </div>
        <div className="bg-coal border border-line p-10 md:p-14 max-w-3xl">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug">Available for freelance and contract work.</p>
          <p className="text-ash mt-4 max-w-xl">Have a project that needs a fast, accessible front end — or a full build? Let's talk.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:hello@robby.dev" className="bg-accent text-ink font-bold px-6 py-3 hover:bg-white transition-colors">Email me</a>
            <a href="https://github.com/robbyahn" className="border border-line text-white font-bold px-6 py-3 hover:border-accent transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
