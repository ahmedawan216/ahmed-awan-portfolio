import React from 'react';
import { Code2, Palette, GitBranch, Layers } from 'lucide-react';
import { Card } from './ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'JavaScript Expert',
      description: 'Deep understanding of ES6+, DOM manipulation, and modern web APIs'
    },
    {
      icon: Layers,
      title: 'Component Architecture',
      description: 'Building scalable, reusable React components with clean state management'
    },
    {
      icon: Palette,
      title: 'Figma to Code',
      description: 'Pixel-perfect UI implementation from design systems'
    },
    {
      icon: GitBranch,
      title: 'Clean Workflow',
      description: 'Professional Git workflow and collaborative development practices'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineer First. <span className="text-[#0ea5e9]">Designer Mindset.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-[#0ea5e9] font-semibold">logic-driven Frontend Developer</span> with a strong foundation in JavaScript fundamentals and modern React development. My approach combines engineering precision with a keen eye for user experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in transforming complex design systems into clean, performant code. Every component I build is architected for scalability, maintainability, and optimal performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing <span className="text-white font-semibold">BS Software Engineering</span> (2025–Present), I'm constantly expanding my technical knowledge while delivering production-ready applications.
            </p>
            <div className="pt-4">
              <div className="inline-block px-4 py-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg">
                <p className="text-[#0ea5e9] font-medium">Based in Pakistan • Open to Remote Opportunities</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 to-[#06b6d4]/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-400 text-sm">Experience</span>
                  <span className="text-white font-semibold">2+ Years</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-400 text-sm">Projects Completed</span>
                  <span className="text-white font-semibold">15+</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-400 text-sm">Certifications</span>
                  <span className="text-white font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400 text-sm">Code Quality</span>
                  <span className="text-[#0ea5e9] font-semibold">Production-Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-6 hover:border-[#0ea5e9]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/10 group cursor-default"
              >
                <div className="mb-4 inline-flex p-3 bg-[#0ea5e9]/10 rounded-lg group-hover:bg-[#0ea5e9]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;