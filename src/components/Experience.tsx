
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Led frontend development for enterprise web applications, mentored junior developers, and implemented modern React patterns.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented design system used across 10+ projects"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL.",
      achievements: [
        "Built MVP that secured $2M funding",
        "Reduced server costs by 30%",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients using modern frontend technologies.",
      achievements: [
        "Delivered 20+ client projects",
        "Improved site speed by 50%",
        "Mentored 3 junior developers"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-purple-400" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title}
                  className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <span className="text-purple-400 font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-purple-300 mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-white font-medium">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-purple-400" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-lg text-purple-300 mb-2">{edu.school}</p>
                  <p className="text-purple-400 font-medium mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
