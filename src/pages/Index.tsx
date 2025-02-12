import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </LanguageProvider>
  );
};

export default Index;