
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "Memories - Social Media Platform",
      description: "Developed a comprehensive social media platform using the MERN stack with features like media uploads, search, interactive comments, JWT authentication and role-based access control (RBAC).",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      date: "November 2023"
    },
    {
      title: "NIVI Programming Language",
      description: "Built a custom programming language with Antlr4 parser and lexer. Designed a VM specifically for NIVI language interpretation with type safety mechanisms and efficient data type handling.",
      tech: ["Python", "Java", "Antlr4", "Virtual Machine"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      date: "June 2024"
    },
    {
      title: "RAG Chatbot for DJ Sanghvi College",
      description: "Built a RAG-based chatbot optimizing retrieval and response time, reducing information lookup time by 60% compared to manual searches using Python and advanced NLP techniques.",
      tech: ["Python", "NLP", "RAG", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      date: "December 2024"
    },
    {
      title: "Techy Software - Visual Design Tool",
      description: "Created a visually engaging website using Figma, allowing users to find what they're looking for easily with intuitive UI/UX design principles.",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      date: "January 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/2">
                  <Card 
                    className="group bg-black/40 backdrop-blur-lg border-purple-800/30 hover:bg-black/50 transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in h-full"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-purple-400 text-sm">{project.date}</span>
                      </div>
                      <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-purple-800/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 flex-1"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 flex-1"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black/40 border-purple-800/30 text-white hover:bg-purple-600/20" />
            <CarouselNext className="bg-black/40 border-purple-800/30 text-white hover:bg-purple-600/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
