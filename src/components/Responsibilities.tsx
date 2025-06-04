
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy } from "lucide-react";

const Responsibilities = () => {
  const positions = [
    {
      title: "Research Head",
      organization: "Antariksh (Space Technology Club)",
      period: "Current",
      description: "Leading research initiatives in space technology and coordinating with team members on various space-related projects and competitions.",
      responsibilities: [
        "Coordinating research projects in space technology",
        "Leading team initiatives and project planning",
        "Organizing workshops and technical sessions"
      ]
    },
    {
      title: "Creatives Head",
      organization: "DJCSI (Computer Society of India)",
      period: "Current",
      description: "Managing creative aspects of technical events, designing promotional materials, and enhancing the visual identity of the organization.",
      responsibilities: [
        "Designing promotional materials for events",
        "Managing visual identity and branding",
        "Coordinating creative teams for technical events"
      ]
    }
  ];

  return (
    <section id="responsibilities" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Positions of Responsibility
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leadership roles and extracurricular activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <Card 
              key={position.title}
              className="bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-purple-400 mr-3" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <p className="text-purple-300 font-medium">{position.organization}</p>
                  </div>
                  <span className="text-purple-400 text-sm font-medium">{position.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-medium flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-purple-400" />
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-1">
                    {position.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
