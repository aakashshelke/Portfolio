import { CodeIcon, DatabaseIcon, CloudIcon, GlobeIcon, BrainIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { isEnglish } = useLanguage();

  const content = {
    english: {
      title: "Skills & Technologies",
      categories: {
        programming: "Programming Languages",
        web: "Web Development",
        dataScience: "Data Science & ML",
        cloud: "Cloud & DevOps",
        databases: "Databases"
      }
    },
    german: {
      title: "Fähigkeiten & Technologien",
      categories: {
        programming: "Programmiersprachen",
        web: "Webentwicklung",
        dataScience: "Data Science & ML",
        cloud: "Cloud & DevOps",
        databases: "Datenbanken"
      }
    }
  };

  const currentContent = isEnglish ? content.english : content.german;

  const skillCategories = [
    {
      title: currentContent.categories.programming,
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "HTML", "CSS"]
    },
    {
      title: currentContent.categories.web,
      icon: <GlobeIcon className="w-6 h-6" />,
      skills: ["React", "Flask", "Node.js", "REST", "GraphQL", "FastAPI"]
    },
    {
      title: currentContent.categories.dataScience,
      icon: <BrainIcon className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face"]
    },
    {
      title: currentContent.categories.cloud,
      icon: <CloudIcon className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Git", "GitHub"]
    },
    {
      title: currentContent.categories.databases,
      icon: <DatabaseIcon className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{currentContent.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-lg hover-scale">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full glass-card">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;