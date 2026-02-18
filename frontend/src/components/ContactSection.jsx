import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:ahmediqbalawan124@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmediqbalawan124@gmail.com',
      link: 'mailto:ahmediqbalawan124@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      link: null
    },
    {
      icon: Phone,
      label: 'Availability',
      value: 'Open to Opportunities',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/ahmedawan216',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-awan123/',
      color: 'hover:text-[#0077b5]'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:ahmediqbalawan124@gmail.com',
      color: 'hover:text-[#0ea5e9]'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] via-[#111111] to-[#0a0a0b] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 via-transparent to-[#06b6d4]/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="text-[#0ea5e9]">Exceptional</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently open to internships, freelance, and frontend developer roles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#0ea5e9] focus:ring-[#0ea5e9] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/50"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-[#0ea5e9]/10 rounded-lg group-hover:bg-[#0ea5e9]/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#0ea5e9]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-[#0ea5e9] transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:border-[#0ea5e9]/30 hover:bg-white/10`}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg">
                <p className="text-white font-semibold mb-2">Looking for a Developer?</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm currently seeking internships and frontend developer positions. Let's discuss how I can contribute to your team.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;