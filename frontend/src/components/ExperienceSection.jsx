import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      period: '2025 - Present',
      title: 'Project-Based Frontend Development',
      organization: 'Independent Projects',
      achievements: [
        'Built multiple interactive React applications with focus on component reusability and state management',
        'Implemented pixel-perfect UI from Figma designs with responsive layouts across all devices',
        'Integrated RESTful APIs and handled asynchronous data flows with modern JavaScript patterns',
        'Maintained clean Git workflow with meaningful commits and proper branch management',
        'Optimized application performance through code splitting and lazy loading strategies'
      ]
    },
    {
      period: '2023 - Present',
      title: 'UX/UI Designer',
      organization: 'Freelance & Conceptual Design',
      achievements: [
        'Designed high-fidelity wireframes and interactive prototypes for web and mobile applications in Figma',
        'Applied design systems and style guides to maintain visual consistency across diverse digital products',
        'Conducted user research and accessibility audits to ensure inclusive and user-centric navigation',
        'Bridged the gap between design and development by delivering developer-friendly assets and documentation',
        'Iterated on UI designs based on user feedback loops and modern design trends'
      ]
    },
    {
      period: '2024 - 2025',
      title: 'Web Development Learning & Practice',
      organization: 'Self-Directed Learning',
      achievements: [
        'Mastered JavaScript ES6+ fundamentals including promises, async/await, and modern syntax',
        'Developed deep understanding of DOM manipulation and browser event handling',
        'Created logic-driven applications including game development and interactive tools',
        'Learned React ecosystem including hooks, context API, and component lifecycle',
        'Built strong foundation in HTML5 semantic markup and CSS3 advanced styling'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-[#111111] to-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-[#0ea5e9]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My path to becoming a Frontend Developer & UI/UX Designer, fueled by a passion for creative design, hands-on architecture, and a commitment to continuous learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0ea5e9] to-[#06b6d4]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0ea5e9] rounded-full border-4 border-[#0a0a0b] z-10"></div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <Card className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8 hover:border-[#0ea5e9]/30 transition-all duration-300 group hover:shadow-xl hover:shadow-[#0ea5e9]/10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#0ea5e9]/10 rounded-lg group-hover:bg-[#0ea5e9]/20 transition-colors duration-300">
                        <Briefcase className="w-6 h-6 text-[#0ea5e9]" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-full mb-3">
                          <span className="text-[#0ea5e9] text-sm font-semibold">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 font-medium">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;