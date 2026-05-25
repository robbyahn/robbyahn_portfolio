import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="h-px bg-border" />
      <Skills />
      <div className="h-px bg-border" />
      <Projects />
      <div className="h-px bg-border" />
      <Experience />
      <div className="h-px bg-border" />
      <Contact />
      <Footer />
    </>
  );
}
