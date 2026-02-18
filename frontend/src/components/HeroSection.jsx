import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.3)';
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const techStack = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Git',
    'Figma'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/50 to-[#0a0a0b] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6 animate-fadeIn">
          <div className="inline-block">
            <Badge variant="outline" className="border-[#0ea5e9]/30 text-[#0ea5e9] bg-[#0ea5e9]/5 px-4 py-2 text-sm font-medium">
              Available for Opportunities
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
            Hi, I'm <span className="text-[#0ea5e9]">Ahmed.</span>
          </h1>

          <p className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 max-w-4xl mx-auto leading-tight">
            I build logic-driven, high-performance web applications.
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Front-End Developer specializing in React, JavaScript (ES6+), and scalable UI systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/50"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Contact Me
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 text-lg transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
            <a 
              href="https://github.com/ahmedawan216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0ea5e9] transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmed-awan123/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0ea5e9] transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ahmediqbalawan124@gmail.com"
              className="text-gray-400 hover:text-[#0ea5e9] transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-16">
            <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-white/10 hover:border-[#0ea5e9]/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;