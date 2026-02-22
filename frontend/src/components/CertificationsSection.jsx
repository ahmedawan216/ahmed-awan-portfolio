import React from "react";
import { Award, Shield, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Cisco Certified - JavaScript",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description:
        "Comprehensive certification covering JavaScript fundamentals, ES6+ features, and modern web development practices",
      verified: true,
    },
    {
      icon: Shield,
      title: "Cisco Certified - C++",
      issuer: "Cisco Networking Academy",
      date: "2022",
      description:
        "Foundation in programming logic, data structures, and object-oriented programming principles",
      verified: true,
    },
    {
      icon: Shield,
      title: "Kamyaab Freelancer - UI/UX Design",
      issuer: "Ministry of IT & Telecommunication",
      date: "2025",
      description:
        "Mastered digital skills for design success, including user research, wireframing, and high-fidelity prototyping in Figma",
      verified: true,
    },
    {
      icon: Award,
      title: "Frontend Development Projects",
      issuer: "Self-Directed Learning",
      date: "2023 - Present",
      description:
        "Built portfolio of production-ready applications including game development, image editing tools, and interactive web apps",
      verified: true,
    },
  ];

  const achievements = [
    { icon: Star, number: "15+", label: "Projects Completed" },
    { icon: Award, number: "4", label: "Certifications" },
    { icon: Shield, number: "1+", label: "Years Experience" },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications &{" "}
            <span className="text-[#0ea5e9]">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Validated skills and recognized accomplishments in frontend
            development
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8 text-center hover:border-[#0ea5e9]/30 transition-all duration-300 group hover:shadow-xl hover:shadow-[#0ea5e9]/10"
              >
                <div className="inline-flex p-4 bg-[#0ea5e9]/10 rounded-full mb-4 group-hover:bg-[#0ea5e9]/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#0ea5e9]" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </Card>
            );
          })}
        </div>

{/* Certifications Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {certifications.map((cert, index) => {
    const Icon = cert.icon;

    const isLastOdd =
      certifications.length % 3 === 1 &&
      index === certifications.length - 1;

    return (
      <Card
        key={index}
        className={`
          w-full bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] 
          border-white/10 p-6 
          hover:border-[#0ea5e9]/30 transition-all duration-300 
          group hover:shadow-xl hover:shadow-[#0ea5e9]/10
          ${isLastOdd ? "lg:col-start-2" : ""}
        `}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-[#0ea5e9]/10 rounded-lg group-hover:bg-[#0ea5e9]/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#0ea5e9]" />
          </div>

          {cert.verified && (
            <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
              Verified
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors duration-300">
          {cert.title}
        </h3>

        <p className="text-gray-400 text-sm font-medium mb-1">
          {cert.issuer}
        </p>

        <p className="text-[#0ea5e9] text-xs font-semibold mb-4">
          {cert.date}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">
          {cert.description}
        </p>
      </Card>
    );
  })}
</div> 
      </div>
    </section>
  );
};

export default CertificationsSection;