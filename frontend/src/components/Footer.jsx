import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/ahmedawan216',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ahmed-awan123/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:ahmediqbalawan124@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-[#0ea5e9] transition-colors duration-300"
          >
            <span className="text-[#0ea5e9]">Ahmed</span>Awan
          </button>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-[#0ea5e9] hover:border-[#0ea5e9]/30 hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Ahmed Iqbal Awan. Built with
              <Heart className="w-4 h-4 text-[#0ea5e9] fill-[#0ea5e9]" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;