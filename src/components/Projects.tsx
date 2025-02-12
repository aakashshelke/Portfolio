import { Button } from "./ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import { SiGooglecolab } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {

  const { isEnglish } = useLanguage();

  const content = {
    english: {
      title: "Featured Projects",
      codeButton: "Code",
      demoButton: "Demo",
      projects: [
        {
          title: "Intelligent Tutoring System",
          description: "Full-stack web application using React and Google Colab, integrating Meta LLaMA LLM for personalized education.",
          timeline: "Oct 2024 - Feb 2025",
          tech: ["LLMs", "Chain-of-thought", "Evolutionary Computing", "React", "Python"],
          link: "https://github.com/luqman-skh/intelligent_tutoring_system",
          linkType: "github",
          image: "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/ITS2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL0lUUzIucG5nIiwiaWF0IjoxNzM5MzYwOTk5LCJleHAiOjE3NzA4OTY5OTl9.MTVOUwZCxFfOVytLl-Q3WSIx77LthTRtx7Q3U9GRZDg" 
        },
        {
          title: "Anomaly Detection in Image Data",
          description: "Backend APIs for image anomaly detection, developed with Flask and PostgreSQL.",
          timeline: "April - July 2024",
          tech: ["Flask", "PostgreSQL", "Python", "REST API"],
          link: "https://colab.research.google.com/drive/12IcnURp8MFwcWp9genUzrZTBUXgnK_qF",
          linkType: "colab",
          image: "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/image_anomaly.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2ltYWdlX2Fub21hbHkuYXZpZiIsImlhdCI6MTczOTM2MTc5NSwiZXhwIjoxNzcwODk3Nzk1fQ.PHbfcGgNkYTC2e_09fVk_nlW_-kdxKoP22mJuoNHBF0"
        },
        {
          title: "Search Engine Development",
          description: "Python-based Flask backend with a focus on indexing and searching documents.",
          timeline: "Oct 2023 - Mar 2024",
          tech: ["Python", "Flask", "PostgreSQL", "REST API"],
          link: "https://github.com/aakashshelke/Search-Engine",
          linkType: "github",
          image: "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/Search_Engine.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL1NlYXJjaF9FbmdpbmUuanBlZyIsImlhdCI6MTczOTM2MDg2NiwiZXhwIjoxNzcwODk2ODY2fQ.aVU3hl7NMX8p5CTKcnOo6hTVzAVmxs2mSIUpFq25isw"
        }
      ]
    },
    german: {
      title: "Ausgewählte Projekte",
      codeButton: "Code",
      demoButton: "Demo",
      projects: [
        {
          title: "Intelligentes Tutoring-System",
          description: "Full-Stack-Webanwendung mit React und Google Colab, Integration von Meta LLaMA LLM für personalisierte Bildung.",
          timeline: "Okt 2024 - Laufend",
          tech: ["React", "Python", "LLaMA", "Google Colab"],
          link: "https://github.com/luqman-skh/intelligent_tutoring_system",
          linkType: "github",
          image: "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/ITS2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL0lUUzIucG5nIiwiaWF0IjoxNzM5MzYwOTk5LCJleHAiOjE3NzA4OTY5OTl9.MTVOUwZCxFfOVytLl-Q3WSIx77LthTRtx7Q3U9GRZDg"
        },
        {
          title: "Anomalieerkennung in Bilddaten",
          description: "Backend-APIs für Bildanomalieerkennung, entwickelt mit Flask und PostgreSQL.",
          timeline: "April - Juli 2024",
          tech: ["Flask", "PostgreSQL", "Python", "REST API"],
          link: "https://colab.research.google.com/drive/12IcnURp8MFwcWp9genUzrZTBUXgnK_qF",
          linkType: "colab",
          image: "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/image_anomaly.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2ltYWdlX2Fub21hbHkuYXZpZiIsImlhdCI6MTczOTM2MTc5NSwiZXhwIjoxNzcwODk3Nzk1fQ.PHbfcGgNkYTC2e_09fVk_nlW_-kdxKoP22mJuoNHBF0"
        },
        {
          title: "Suchmaschinenentwicklung",
          description: "Python-basiertes Flask-Backend mit Fokus auf Indizierung und Durchsuchen von Dokumenten.",
          timeline: "Okt 2023 - März 2024",
          tech: ["Python", "Flask", "PostgreSQL", "REST API"],
          link: "https://github.com/aakashshelke/Search-Engine",
          linkType: "github",
          image: "https://yfkksecgztqwrnfxuqup.supabase.co/storage/v1/object/sign/data/Search_Engine.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL1NlYXJjaF9FbmdpbmUuanBlZyIsImlhdCI6MTczOTM2MDg2NiwiZXhwIjoxNzcwODk2ODY2fQ.aVU3hl7NMX8p5CTKcnOo6hTVzAVmxs2mSIUpFq25isw"
        }
      ]
    }
  };

  const currentContent = isEnglish ? content.english : content.german;


  return (
    <section id="projects" className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{currentContent.title}</h2>
        <div className="space-y-12">
        {currentContent.projects.map((project, index) => (
            <div key={index} className="glass-card p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.timeline}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full glass-card">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover-scale">
                      {project.linkType === "github" ? (
                        <GithubIcon className="w-4 h-4 mr-2" />
                      ) : (
                        <SiGooglecolab className="w-4 h-4 mr-2" />
                      )}
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
