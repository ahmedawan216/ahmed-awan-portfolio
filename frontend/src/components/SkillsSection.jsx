import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Tailwind CSS', level: 90 }
      ],
      gradient: 'from-[#0ea5e9] to-[#06b6d4]'
    },
    {
      category: 'Concepts',
      skills: [
        { name: 'DOM Manipulation', level: 92 },
        { name: 'Event Handling', level: 90 },
        { name: 'Component Architecture', level: 87 },
        { name: 'API Integration', level: 85 },
        { name: 'State Management', level: 85 }
      ],
      gradient: 'from-[#06b6d4] to-[#0ea5e9]'
    },
    {
      category: 'Design & Tools',
      skills: [
        { name: 'Figma to Code', level: 88 },
        { name: 'Responsive Design', level: 93 },
        { name: 'Git & GitHub', level: 87 },
        { name: 'Performance Optimization', level: 82 },
        { name: 'Cross-Browser Testing', level: 85 }
      ],
      gradient: 'from-[#0ea5e9] to-[#0284c7]'
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] to-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#0ea5e9]">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive skill set focused on modern web development and scalable frontend architecture
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8 hover:border-[#0ea5e9]/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors duration-300">
                  {category.category}
                </h3>
                <div className={`h-1 w-16 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-[#0ea5e9] font-semibold text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Also proficient in</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'VS Code',
              'Chrome DevTools',
              'Webpack',
              'npm/yarn',
              'REST APIs',
              'Agile/Scrum',
              'Responsive Design',
              'Web Accessibility'
            ].map((tool, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 hover:text-[#0ea5e9] transition-all duration-300 cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;