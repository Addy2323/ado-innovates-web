import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const timeline = [
    {
      type: "work",
      title: "Practical Training",
      organization: "MLHHSD",
      period: "Recent",
      description: "Hands-on experience in web development, database management, and system administration. Worked on real-world projects and learned industry best practices.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Computer Science & IT",
      organization: "University",
      period: "Ongoing",
      description: "Specialized in Software Engineering, Data Science, and Cybersecurity. Active participation in coding competitions and tech communities.",
      icon: GraduationCap,
    },
    {
      type: "work",
      title: "Freelance Developer",
      organization: "Self-Employed",
      period: "Ongoing",
      description: "Building custom web applications, AI solutions, and secure systems for clients. Focus on Laravel, Python, and modern web technologies.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mb-12"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                      <item.icon className="text-background" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-foreground/70 font-medium mb-3">{item.organization}</p>
                    <p className="text-foreground/60">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
