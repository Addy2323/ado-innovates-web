import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Social Media Boost Platform",
      description: "A comprehensive platform for boosting social media engagement including followers, likes, comments, and other social media metrics with secure payment integration and analytics dashboard.",
      tech: ["Laravel", "React.js", "MySQL", "Tailwind CSS"],
      github: "#",
      demo: "https://addy-boosti.netlify.app/",
    },
    {
      title: "Karibuni Coffee Experience",
      description: "Karibuni means 'welcome' in Swahili, and that's exactly what we offer — a warm welcome to the rich, authentic flavors of Tanzania. A modern coffee website showcasing premium Tanzanian coffee with elegant design and seamless user experience.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "#",
      demo: "https://karibunicoffe.netlify.app",
    },
    {
      title: "LotusRise Investment Platform",
      description: "Secure investment platform with portfolio tracking, real-time market data, and advanced analytics for informed decision-making. (NO LINK AVAILABLE STILL ON PROGRESS)",
      tech: ["Laravel", "psgresql", "Chart.js", "Tailwind CSS","Next.js","TypeScript"],
      github: "#",
      demo: "NO LINK AVAILABLE STILL ON PROGRESS",
    },
    {
      title: "Babbler Tours - Tourism Platform",
      description: "A comprehensive tourism platform showcasing travel destinations, tour packages, and booking services. Features interactive galleries, destination guides, and seamless booking experience for travelers exploring amazing destinations.",
      tech: ["React", "MySQL", "Tailwind CSS"],
      github: "#",
      demo: "https://babblertours.netlify.app",
    },
    {
      title: "ICT Business Website",
      description: "Professional business website showcasing IT services, portfolio, and client testimonials with modern design and SEO optimization.",
      tech: ["React js", "tailwind CSS"],
      github: "#",
      demo: "https://ink-spire-support.netlify.app/",
    },
    {
      title: "Hotel & Restaurant Booking System",
      description: "Full-featured booking system for hotels and restaurants with real-time availability, payment integration, and booking management.",
      tech: ["Laravel", "next js", "tailwind CSS", "MySQL", "Payment Gateway"],
      github: "#",
      demo: "https://restaurantttm.netlify.app",
    },
    {
      title: "Gateway Hotel Menu System",
      description: "Digital menu system for Gateway Hotel with interactive menu display, category filtering, and modern responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "#",
      demo: "https://menu.gatewayhotel.co.tz",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-secondary border-border hover:border-primary transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-background text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 gradient-gold" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
