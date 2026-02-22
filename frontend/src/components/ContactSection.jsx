import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleMailto = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:ahmediqbalawan124@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] via-[#111111] to-[#0a0a0b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="text-[#0ea5e9]">Exceptional</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleMailto} className="space-y-6">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
              />
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

              <Button
                type="submit"
                className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/50"
              >
                <Send className="mr-2 w-5 h-5" /> Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Backup Box */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-[#1a1a1b] to-[#0a0a0b] border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0ea5e9]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white font-medium">
                      ahmediqbalawan124@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0ea5e9]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium">Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0ea5e9]/10 rounded-lg">
                    <Phone className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Availability</p>
                    <p className="text-white font-medium">Open to Opportunities</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Backup Email Box */}
            <Card className="bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 p-6 rounded-lg">
              <p className="text-white font-semibold mb-2">Having trouble sending a message?</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                If the form doesn’t work for any reason, feel free to email me directly at 
                <a 
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=ahmediqbalawan124@gmail.com&su=Message from Portfolio&body=Hello!`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-[#0ea5e9] ml-1 underline"
>
  ahmediqbalawan124@gmail.com
</a>

              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
