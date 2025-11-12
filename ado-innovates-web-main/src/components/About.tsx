import { Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern web applications with Laravel, PHP, and React",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-up">
              <p className="text-lg text-foreground/80 mb-6">
                I'm a passionate <span className="text-primary font-semibold">Tanzanian developer</span> who
                loves building solutions that make a difference. My journey in technology started with
                curiosity and has evolved into expertise across multiple domains.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                From creating <span className="text-primary font-semibold">AI-powered chatbots</span> to
                developing <span className="text-primary font-semibold">secure investment platforms</span>,
                I focus on crafting applications that are not just functional, but also secure, user-friendly,
                and scalable.
              </p>
              <p className="text-lg text-foreground/80">
                Every day, I commit to learning something new and contributing to the open-source community.
                My work is driven by a passion for <span className="text-primary font-semibold">innovation</span>,
                attention to <span className="text-primary font-semibold">security</span>, and dedication to
                creating <span className="text-primary font-semibold">exceptional user experiences</span>.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-secondary border-border hover:border-primary transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-gold">
                      <item.icon className="text-background" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
