'use client';

import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import NotificationBanner from './components/NotificationBanner';
import TrustedBy from './components/TrustedBy';
import TechStack from './components/TechStack';
import EasySteps from './components/EasySteps';
import WhyChooseUs from './components/WhyChooseUs';
import ConsultationForm from './components/ConsultationForm';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { useState } from 'react';
import BookingCalendar from './components/BookingCalendar';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleGetStarted = () => {
    setIsBookingOpen(true);
  };

  const handleWatchDemo = () => {
    // Open demo video or redirect to demo page
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const handleContactUs = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const handleViewPortfolio = () => {
    // Navigate to portfolio page
    window.location.href = '/portfolio';
  };

  const handleLearnMore = () => {
    // Scroll to next section
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFFAF0] via-white to-[#F7E7CE] overflow-hidden relative">
      {/* Stunning animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/5 via-[#FFFAF0] to-[#F7E7CE]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/10 via-transparent to-[#2774AE]/5" />
        
        {/* Large gradient orbs for depth */}
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-[#FF8C00]/20 to-[#FF6B35]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-16 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-l from-[#2774AE]/15 to-[#FF8C00]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-[#FF8C00]/15 to-[#2774AE]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Additional gradient accents */}
        <div className="absolute top-1/4 right-1/3 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-br from-[#FF8C00]/10 to-[#F7E7CE]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-tl from-[#2774AE]/10 to-[#FFFAF0]/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Floating geometric shapes with enhanced colors */}
        <div className="absolute top-24 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-gradient-to-r from-[#2774AE] to-[#1E5F8A] rounded-full animate-bounce shadow-lg" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-56 left-1/5 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] rounded-full animate-bounce shadow-lg" style={{ animationDelay: '2.5s' }} />
        
        {/* Removed noisy patterns per user preference */}
      </div>

      {/* Main content with enhanced visual hierarchy */}
      <div className="relative z-10">
        {/* Header rendered globally in layout; keeping banner only */}
        <NotificationBanner />
        
        {/* Hero Section with enhanced design */}
        <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced floating elements around hero */}
            <div className="absolute top-16 left-4 md:top-20 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-2xl rotate-12 shadow-2xl animate-float" />
            <div className="absolute top-24 right-4 md:top-32 md:right-16 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2774AE] to-[#1E5F8A] rounded-xl -rotate-12 shadow-2xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-32 left-1/4 md:top-48 md:left-1/4 w-11 h-11 md:w-14 md:h-14 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-2xl rotate-45 shadow-2xl animate-float" style={{ animationDelay: '2s' }} />
            
            {/* Main headline with enhanced typography */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2774AE] via-[#1E5F8A] to-[#FF8C00] mb-4 md:mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Build, Launch, and Grow
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">With AI-Powered Software</span>
            </motion.h1>
            
            {/* Enhanced sub-headline */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-[#2774AE]/80 max-w-2xl md:max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed font-medium px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              We design and ship production software for web, mobile, and AI.
              <span className="text-[#FF8C00] font-semibold"> Launch in weeks</span> with a team that obsesses over
              <span className="text-[#FF8C00] font-semibold"> quality, performance, and security</span>.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 items-center">
              <button onClick={() => window.dispatchEvent(new Event('open-booking'))} className="px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">Book a free consultation</button>
              <a href="/portfolio" className="px-6 py-3 bg-white border border-[#F7E7CE] text-[#2774AE] font-semibold rounded-xl hover:shadow-sm">View portfolio</a>
              <WhatsAppButton variant="inline" />
            </div>
          </div>
        </section>
        
        <TrustedBy />
        
        {/* Top Core Technologies Section */}
        <section id="services" className="relative py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-[#FFFAF0] overflow-hidden">
          {/* Clean Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, #FF8C00 25%, transparent 25%, transparent 75%, #FF8C00 75%)`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          {/* Subtle Orange Dots */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FF8C00] rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2774AE] mb-3 md:mb-4">
                Top Core Technologies
              </h2>
              <p className="text-base md:text-lg text-[#2774AE]/80 max-w-2xl md:max-w-3xl mx-auto px-4">
                Cutting-edge tools and frameworks powering our solutions
              </p>
            </motion.div>

            {/* Horizontal Scrolling Technologies */}
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-4 md:gap-6 lg:gap-8 items-center"
                animate={{
                  x: [0, -1200, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Technology Items - Duplicated for seamless loop */}
                {[
                  { name: 'TypeScript', icon: '🔷', color: '#3178C6', bgColor: '#FFFAF0' },
                  { name: 'AWS', icon: '☁️', color: '#FF9900', bgColor: '#FFFAF0' },
                  { name: 'Docker', icon: '🐳', color: '#2496ED', bgColor: '#FFFAF0' },
                  { name: 'MongoDB', icon: '🍃', color: '#47A248', bgColor: '#FFFAF0' },
                  { name: 'PostgreSQL', icon: '🐘', color: '#336791', bgColor: '#FFFAF0' },
                  { name: 'Kubernetes', icon: '⚓', color: '#326CE5', bgColor: '#FFFAF0' },
                  { name: 'React', icon: '⚛️', color: '#61DAFB', bgColor: '#FFFAF0' },
                  { name: 'Node.js', icon: '🟢', color: '#339933', bgColor: '#FFFAF0' },
                  { name: 'Python', icon: '🐍', color: '#3776AB', bgColor: '#FFFAF0' },
                  { name: 'Next.js', icon: '⚡', color: '#000000', bgColor: '#FFFAF0' },
                  { name: 'Tailwind', icon: '🎨', color: '#06B6D4', bgColor: '#FFFAF0' },
                  { name: 'Framer', icon: '🎭', color: '#0055FF', bgColor: '#FFFAF0' },
                  { name: 'Redis', icon: '🔴', color: '#DC382D', bgColor: '#FFFAF0' },
                  { name: 'Elasticsearch', icon: '🔍', color: '#FED10A', bgColor: '#FFFAF0' },
                  { name: 'TypeScript', icon: '🔷', color: '#3178C6', bgColor: '#FFFAF0' },
                  { name: 'AWS', icon: '☁️', color: '#FF9900', bgColor: '#FFFAF0' },
                  { name: 'Docker', icon: '🐳', color: '#2496ED', bgColor: '#FFFAF0' },
                  { name: 'MongoDB', icon: '🍃', color: '#47A248', bgColor: '#FFFAF0' },
                  { name: 'PostgreSQL', icon: '🐘', color: '#336791', bgColor: '#FFFAF0' },
                  { name: 'Kubernetes', icon: '⚓', color: '#326CE5', bgColor: '#FFFAF0' },
                  { name: 'React', icon: '⚛️', color: '#61DAFB', bgColor: '#FFFAF0' },
                  { name: 'Node.js', icon: '🟢', color: '#339933', bgColor: '#FFFAF0' },
                  { name: 'Python', icon: '🐍', color: '#3776AB', bgColor: '#FFFAF0' },
                  { name: 'Next.js', icon: '⚡', color: '#000000', bgColor: '#FFFAF0' },
                  { name: 'Tailwind', icon: '🎨', color: '#06B6D4', bgColor: '#FFFAF0' },
                  { name: 'Framer', icon: '🎭', color: '#0055FF', bgColor: '#FFFAF0' },
                  { name: 'Redis', icon: '🔴', color: '#DC382D', bgColor: '#FFFAF0' },
                  { name: 'Elasticsearch', icon: '🔍', color: '#FED10A', bgColor: '#FFFAF0' },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center group min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-xl md:rounded-2xl shadow-md flex items-center justify-center border border-gray-100 hover:border-[#FF8C00] transition-all duration-300 mb-2 md:mb-3 group-hover:shadow-lg">
                      <span className="text-2xl md:text-3xl">{tech.icon}</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-[#2774AE] text-center group-hover:text-[#FF8C00] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8 md:mt-12"
            >
              <button 
                onClick={handleLearnMore}
                className="px-8 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF8C00] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More About Our Tech Stack
              </button>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack />
        
        {/* 3 Easy Steps Section */}
        <EasySteps />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Consultation Form */}
        <ConsultationForm />
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Testimonials Section */}
        <Testimonials />
        {/* Footer removed here; rendered globally in layout */}
      </div>

      {/* Booking Calendar Modal */}
      <BookingCalendar 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </main>
  )
}
