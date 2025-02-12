import { ArrowDownIcon, SunIcon, MoonIcon, LanguagesIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import Typewriter from 'typewriter-effect';

const Hero = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const { isEnglish, toggleLanguage } = useLanguage();


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-theme');
  };


  const content = {
    english: {
      role: "Data Science Enthusiast",
      title: "Turning Data into Insights",
      description: "I am a highly motivated Master's student in Digital Engineering at Otto von Guericke University, with a passion for solving real-world problems through data science, machine learning, and software development.",
      exploreButton: "Explore my projects",
      downloadButton: "Download CV"
    },
    german: {
      role: "Data Science Enthusiast",
      title: "Daten in Erkenntnisse umwandeln",
      description: "Ich bin ein hochmotivierter Masterstudent im Studiengang Digital Engineering an der Otto-von-Guericke-Universität mit einer Leidenschaft für die Lösung realer Probleme durch Data Science, maschinelles Lernen und Softwareentwicklung.",
      exploreButton: "Projekte erkunden",
      downloadButton: "Lebenslauf herunterladen"
    }
  };

  const currentContent = isEnglish ? content.english : content.german;

  const cvUrl = "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/Aakash%20Ajay%20Shelke_CV.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL0Fha2FzaCBBamF5IFNoZWxrZV9DVi5wZGYiLCJpYXQiOjE3MzkzMTc0NTgsImV4cCI6MTc3MDg1MzQ1OH0.0lDJnTQ_R4qnfVxKGK4mlSFFEsyfueRuZIvMStMWBlY";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center section-padding animate-fade-in">
      <div className="absolute top-24 right-8 flex flex-col gap-4">
        <div className="flex items-center gap-2 glass-card p-2 rounded-full">
          <SunIcon className="w-4 h-4" />
          <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          <MoonIcon className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 glass-card p-2 rounded-full">
          <span className="text-sm">EN</span>
          <Switch checked={!isEnglish} onCheckedChange={toggleLanguage} />
          <span className="text-sm">DE</span>
        </div>
      </div>

      <div className="max-w-3xl text-center space-y-6">
        <div className="inline-block px-3 py-1 mb-6 rounded-full glass-card text-sm font-medium">
          {currentContent.role}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          {currentContent.title}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          <Typewriter
            options={{
              strings: [currentContent.description],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="hover-scale" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
            {currentContent.exploreButton}
          </Button>
          <a href={cvUrl} download="Aakash_Ajay_Shelke_CV.pdf">
            <Button variant="outline" className="hover-scale">
              {currentContent.downloadButton}
            </Button>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
