import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I build secure, smart, and beautiful web solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Ado</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Web Developer | System Developer
          </p>
          <div className="h-16 mb-8">
            <p className="text-lg md:text-xl text-primary font-mono min-h-[1.5em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="default" size="lg" className="gradient-gold">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="secondary" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Addy2323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:myambaado@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
