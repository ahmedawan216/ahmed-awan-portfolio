import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Interactive Snake Game',
      description: 'Logic-driven game built in Vanilla JavaScript demonstrating game loops, coordinate systems, and performance optimization with smooth gameplay mechanics.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      liveUrl: 'https://ahmedawan216.github.io/snake-game-JavaScript/',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop',
      featured: true
    },
    {
      title: 'React Image Editor',
      description: 'Real-time image editing tool with filter adjustments, Canvas API integration, and responsive controls for professional image manipulation.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Canvas API'],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
      featured: true
    },
    {
      title: 'Project Coming Soon',
      description: 'Working on an exciting new project that showcases advanced React patterns and modern frontend architecture.',
      tech: ['React', 'TypeScript', 'Next.js'],
      liveUrl: null,
      githubUrl: null,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
      featured: false,
      comingSoon: true
    },
    {
      title: 'Project Coming Soon',
      description: 'Another innovative web application in development, focusing on user experience and performance optimization.',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: null,
      githubUrl: null,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
      featured: false,
      comingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#0ea5e9]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work demonstrating technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 overflow-hidden hover:border-[#0ea5e9]/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-[#0ea5e9]/10 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.comingSoon && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-[#0ea5e9] text-white font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                )}
                {project.featured && !project.comingSoon && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-white/5 text-gray-300 border border-white/10 text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {!project.comingSoon && (
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/50"
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5 font-semibold transition-all duration-300"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>
                )}
                {project.comingSoon && (
                  <div className="pt-4">
                    <Button
                      disabled
                      className="w-full bg-white/5 text-gray-500 cursor-not-allowed"
                    >
                      <Code2 className="mr-2 w-4 h-4" />
                      In Development
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;