
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-card" : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Aakash Shelke</div>
        
        <div className="hidden sm:flex space-x-8">
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/aakashshelke" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/aakash-shelke-2883b8176" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <a href="mailto:aakash.shelke@st.ovgu.de">
            <MailIcon className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
