import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { isEnglish } = useLanguage();

  const content = {
    english: {
      title: "Professional Experience",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Parentheses Systems Pvt. Ltd., Pune",
          period: "July 2022 - Aug 2023",
          points: [
            "Developed full-stack web applications using Java for backend services, improving data management and system scalability.",
            "Designed and deployed cloud-based solutions on AWS to support high-performance software systems.",
            "Collaborated with cross-functional agile teams to analyze technical requirements, ensuring accurate and timely delivery of software features.",
            "Built interactive dashboards using Power BI and Matplotlib to support business decision-making.",
            "Managed PostgreSQL databases with high accuracy, ensuring data integrity and security."
          ]
        },
        {
          title: "Project Intern",
          company: "Parentheses Systems Pvt. Ltd., Pune",
          period: "Jun 2021 - Dec 2021",
          points: [
            "Led front-end and back-end development of a mobile and smart glasses application using Flutter.",
            "Integrated TensorFlow Lite (ML) model for hand gesture recognition, enhancing user interaction features.",
            "Assisted in requirement analysis, coordinating with stakeholders to define project scope and objectives.",
            "Conducted testing and commissioning of the developed solution, ensuring proper functionality and user satisfaction."
          ]
        }
      ],
      education: {
        title: "Master of Science in Digital Engineering",
        institution: "Otto von Guericke University, Magdeburg",
        period: "Oct 2023 - Present",
        description: "Currently pursuing Masters with focus on Machine Learning, Visual Analytics, and Advanced Database Models"
      }
    },
    german: {
      title: "Berufserfahrung",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Parentheses Systems Pvt. Ltd., Pune",
          period: "Juli 2022 - Aug 2023",
          points: [
            "Entwicklung von Full-Stack-Webanwendungen mit Java für Backend-Services zur Verbesserung des Datenmanagements und der Systemskalierbarkeit.",
            "Entwurf und Bereitstellung cloudbasierter Lösungen auf AWS zur Unterstützung leistungsstarker Softwaresysteme.",
            "Zusammenarbeit mit funktionsübergreifenden agilen Teams zur Analyse technischer Anforderungen, um eine genaue und pünktliche Bereitstellung von Softwarefunktionen sicherzustellen.",
            "Erstellung interaktiver Dashboards mit Power BI und Matplotlib zur Unterstützung der Geschäftsentscheidungen.",
            "Verwaltung von PostgreSQL-Datenbanken mit hoher Genauigkeit zur Gewährleistung der Datenintegrität und -sicherheit."
          ]
        },
        {
          title: "Projekt-Praktikant",
          company: "Parentheses Systems Pvt. Ltd., Pune",
          period: "Juni 2021 - Dez 2021",
          points: [
            "Leitung der Frontend- und Backend-Entwicklung einer Mobil- und Smart-Glasses-Anwendung mit Flutter.",
            "Integration eines TensorFlow Lite (ML) Modells zur Handgestenerkennung zur Verbesserung der Benutzerinteraktionsfunktionen.",
            "Unterstützung bei der Anforderungsanalyse und Koordination mit Stakeholdern zur Definition von Projektumfang und -zielen.",
            "Durchführung von Tests und Inbetriebnahme der entwickelten Lösung zur Sicherstellung der ordnungsgemäßen Funktionalität und Benutzerzufriedenheit."
          ]
        }
      ],
      education: {
        title: "Master of Science in Digital Engineering",
        institution: "Otto-von-Guericke-Universität, Magdeburg",
        period: "Okt 2023 - Heute",
        description: "Aktuell Master-Studium mit Schwerpunkt auf maschinellem Lernen, visueller Analytik und fortgeschrittenen Datenbankmodellen"
      }
    }
  };

  const currentContent = isEnglish ? content.english : content.german;

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.title}</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {currentContent.experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="glass-card p-6 rounded-lg hover-scale w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <BriefcaseIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 hidden md:block" />
                <div className="w-full md:w-1/2" />
              </div>
            ))}

            {/* Education Timeline Point */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="glass-card p-6 rounded-lg hover-scale w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCapIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{currentContent.education.title}</h3>
                      <p className="text-muted-foreground">{currentContent.education.institution}</p>
                      <p className="text-sm text-muted-foreground">{currentContent.education.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {currentContent.education.description}
                  </p>
                </div>
              </div>
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 hidden md:block" />
              <div className="w-full md:w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
