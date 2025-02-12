import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { isEnglish } = useLanguage();

  const content = {
    english: {
      title: "Get In Touch",
      description: "I'm currently looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email"
    },
    german: {
      title: "Kontakt",
      description: "Ich bin derzeit auf der Suche nach neuen Möglichkeiten und würde mich freuen, von Ihnen zu hören. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, kontaktieren Sie mich gerne!",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-Mail"
    }
  };

  const currentContent = isEnglish ? content.english : content.german;

  return (
    <section id="contact" className="section-padding min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{currentContent.title}</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          {currentContent.description}
        </p>
        
        <div className="flex justify-center gap-6">
          <Button variant="outline" className="hover-scale" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5 mr-2" />
              {currentContent.github}
            </a>
          </Button>
          
          <Button variant="outline" className="hover-scale" asChild>
            <a href="https://linkedin.com/in/aakash-shelke" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5 mr-2" />
              {currentContent.linkedin}
            </a>
          </Button>
          
          <Button variant="outline" className="hover-scale" asChild>
            <a href="mailto:aakash.shelke@st.ovgu.de">
              <MailIcon className="w-5 h-5 mr-2" />
              {currentContent.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;