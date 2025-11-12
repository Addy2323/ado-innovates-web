import { Coffee, Code, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const FunFacts = () => {
  const facts = [
    {
      icon: Code,
      value: "100+",
      label: "Projects Completed",
      color: "text-primary",
    },
    {
      icon: Coffee,
      value: "∞",
      label: "Cups of Coffee",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "50+",
      label: "Happy Clients",
      color: "text-primary",
    },
    {
      icon: Zap,
      value: "365",
      label: "GitHub Commits",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Fun <span className="text-gradient">Facts</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <Card
                key={index}
                className="p-6 bg-secondary border-border text-center hover:border-primary transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                    <fact.icon className="text-background" size={28} />
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${fact.color}`}>{fact.value}</div>
                <p className="text-foreground/70 text-sm">{fact.label}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              <span className="text-primary font-semibold">"Building with logic, designing with passion."</span>
              <br />
              Every line of code is an opportunity to create something amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
