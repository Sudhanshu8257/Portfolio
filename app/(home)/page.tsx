import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Thanks from "@/components/Thanks";
import { selectedProjects } from "@/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between scroll-smooth">
      <Hero />
      <AboutMe bg={true} />
      <Skills />
      <Projects project={selectedProjects} pathName="/" />
      <Contact />
      <Thanks />
    </main>
  );
}
