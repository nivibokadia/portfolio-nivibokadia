
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Responsibilities from "@/components/Responsibilities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Responsibilities />
      <Contact />
    </div>
  );
};

export default Index;
