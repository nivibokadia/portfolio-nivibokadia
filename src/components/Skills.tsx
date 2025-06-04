
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "React/Next.js", level: 90, color: "from-purple-500 to-purple-700" },
    { name: "TypeScript", level: 85, color: "from-purple-600 to-purple-800" },
    { name: "Node.js", level: 80, color: "from-purple-500 to-purple-700" },
    { name: "Python", level: 75, color: "from-purple-400 to-purple-600" },
    { name: "AWS/Cloud", level: 70, color: "from-purple-500 to-purple-700" },
    { name: "PostgreSQL", level: 85, color: "from-purple-600 to-purple-800" },
  ];

  const tools = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Git", "Figma", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-800"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-gradient-to-r from-purple-800/20 to-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium hover:scale-105 transition-transform duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
