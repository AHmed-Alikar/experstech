'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  const handleGetQuote = () => {
    // This could open a modal or navigate to contact form
    window.location.href = '/contact';
  };

  const handleScheduleMeeting = () => {
    // This could open the booking calendar
    window.location.href = '/contact';
  };

  const handleEmailUs = () => {
    window.location.href = 'mailto:xperstech@gmail.com?subject=Inquiry%20from%20Website&body=Hi%20ExpersTech,';
  };

  const handleSocialMedia = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF8C00]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2774AE]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FF8C00]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF8C00] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#2774AE] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-[#FF8C00] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          {/* Top Section - Brand & Description */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <img src="/images/logo.png" alt="ExpersTech Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain shadow-md" />
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-white">ExpersTech</span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Empowering businesses with cutting-edge technology solutions. We specialize in web development, 
              mobile apps, AI integration, and digital transformation.
            </p>
          </div>

          {/* Mid Section - Services & Solutions (two columns on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Brand Column */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-[#FF8C00] mb-2 md:mb-3">Brand</h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-300">
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">About Us</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Our Mission</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Team</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Careers</button></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-[#FF8C00] mb-2 md:mb-3">Services</h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-300">
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Web Development</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Mobile Apps</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">AI Solutions</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Cloud Services</button></li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-[#FF8C00] mb-2 md:mb-3">Solutions</h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-300">
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">E-commerce</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">CRM Systems</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Analytics</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Automation</button></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-[#FF8C00] mb-2 md:mb-3">Company</h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm text-gray-300">
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Contact</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Support</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={() => window.location.href = '/contact'} className="hover:text-[#FF8C00] transition-colors text-left">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF8C00]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#FF8C00]" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium text-sm md:text-base"></p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2774AE]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#2774AE]" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium text-sm md:text-base">xperstech@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-[#FF8C00] mb-3 md:mb-4">
              Ready to Transform Your Business?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button 
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF8C00] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Quote
              </button>
              
              <button 
                onClick={handleScheduleMeeting}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300"
              >
                Schedule Meeting
              </button>

              <button 
                onClick={handleEmailUs}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300"
              >
                Email Us
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            {[
              { name: 'facebook', icon: '📘' },
              { name: 'twitter', icon: '🐦' },
              { name: 'linkedin', icon: '💼' },
              { name: 'instagram', icon: '📷' },
              { name: 'youtube', icon: '📺' }
            ].map((social) => (
              <button
                key={social.name}
                onClick={() => handleSocialMedia(social.name)}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <span className="text-lg md:text-xl">{social.icon}</span>
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/10 pt-4 md:pt-6">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 ExpersTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
