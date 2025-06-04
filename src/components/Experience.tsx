
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Accelus Robotics",
      period: "June 2024 - August 2024",
      description: "Built an interpreter in C with virtual machine that is platform independent and is 70% faster than AST. Helped in developing a software for robotic arm at the assembly line in C++ that is expected to improve efficiency by 34%.",
      achievements: [
        "Built platform-independent C interpreter with VM",
        "Achieved 70% performance improvement over AST",
        "Developed robotic arm software improving efficiency by 34%"
      ]
    },
    {
      title: "UI/UX Intern",
      company: "ATG Globe",
      period: "June 2024 - August 2024",
      description: "Contributed to the website, especially the Jobs and Chats section, building multiple pages over 3 months. Engaged with diverse stakeholders and conducted numerous UX research initiatives to optimize user experience.",
      achievements: [
        "Built multiple web pages over 3 months",
        "Conducted UX research initiatives",
        "Optimized user experience through stakeholder engagement"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      school: "DJ Sanghvi College of Engineering affiliated with Mumbai University",
      period: "2022 - 2026",
      description: "Honours in Development and Operations with Average CGPA: 9.3/10"
    }
  ];

  const achievements = [
    {
      title: "International Rover Challenge Winner",
      description: "Won 3rd, 2nd in IRDC worldwide in 2024. Also placed 1st present onsite, 2nd in Asia and 1st in India in European Rover Challenge in 2024.",
      period: "2024"
    },
    {
      title: "Marketing Challenge Winner",
      description: "Developed a go-to-market strategy and B2B partnerships plan for a health snack brand, earning ₹15,000 in a business pitch competition.",
      period: "Inceptio 8.0"
    },
    {
      title: "BBB Frontend Hackathon Winner",
      description: "Built a full-featured fashion exchange web platform in 8 hours using frontend technologies to promote sustainable fashion.",
      period: "SPIT"
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
            My professional journey, educational background, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-purple-400" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title}
                  className="bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-300 animate-fade-in"
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
                className="bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-300 animate-fade-in mb-6"
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

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Award className="mr-3 h-6 w-6 text-purple-400" />
            Achievements & Awards
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-purple-400 font-medium mb-3">{achievement.period}</p>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
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
