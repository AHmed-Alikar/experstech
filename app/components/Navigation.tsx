'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Home, Layers, Mail, Calendar } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      setShowBottomBar(y > 160);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      // Handle anchor links
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle page navigation
      window.location.href = path;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${showBottomBar ? 'hidden lg:block' : ''}`}
      >
        <div className="px-3 md:px-5 lg:px-6">
          {/* Centered pill container */}
          <div className={`max-w-5xl mx-auto relative ${isScrolled ? 'mt-0.5' : 'mt-1'} transition-all`}>
            {/* thin red top line only over the pill */}
            <div className="absolute -top-2 left-4 right-4 h-[2px] bg-red-500 rounded-full" />
            <div className={`rounded-2xl ring-1 ${isScrolled ? 'ring-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' : 'ring-white/5'}
              bg-gradient-to-r from-[#0b0b0c]/95 via-[#121214]/95 to-[#0b0b0c]/95 backdrop-blur-md`}
            >
              {/* glossy highlight overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="absolute -top-8 left-1/3 w-1/2 h-16 bg-white/10 blur-2xl rounded-full opacity-25" />
              </div>
              <div className={`grid grid-cols-[1fr_auto_1fr] items-center px-3 md:px-5 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'} transition-all duration-300`}>
            {/* Logo (larger on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center col-start-1"
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                <img src="/images/logo.png" alt="ExpersTech Logo" className={`rounded-lg object-contain shadow-md ${isScrolled ? 'w-10 h-10 md:w-10 md:h-10' : 'w-14 h-14 md:w-14 md:h-14'}`} />
                <div className="hidden sm:block">
                  <div className="text-lg md:text-xl font-bold text-[#F7E7CE]">
                    ExpersTech
                  </div>
                  <div className="text-xs text-white/50">Innovation & Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center justify-center space-x-5 md:space-x-6 col-start-2"
            >
              <button 
                onClick={() => handleNavigation('/')}
                className="text-white/80 hover:text-[#FF8C00] font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="text-white/80 hover:text-[#FF8C00] font-medium transition-colors duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-white/80 hover:text-[#FF8C00] font-medium transition-colors duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-white/80 hover:text-[#FF8C00] font-medium transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => handleNavigation('/careers')}
                className="text-white/80 hover:text-[#FF8C00] font-medium transition-colors duration-300 relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>

            {/* Phone - right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex items-center justify-end col-start-3"
            >
              <button
                onClick={() => window.dispatchEvent(new Event('open-booking'))}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 transition"
              >
                <Phone className="w-4 h-4 text-[#FF8C00]" />
                <span className="text-sm md:text-base font-semibold text-[#F7E7CE]"></span>
              </button>
            </motion.div>

            {/* Mobile Menu Button on right */}
            <div className="lg:hidden col-start-3 flex justify-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#F7E7CE] hover:text-[#FF8C00] transition-colors p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0b0b0c]/95 border-t border-white/10 overflow-hidden backdrop-blur"
            >
              <div className="px-4 md:px-6 py-6 space-y-2">
                <button 
                  onClick={() => handleNavigation('/')}
                  className="block w-full text-left text-[#F7E7CE] hover:text-[#FF8C00] font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavigation('#services')}
                  className="block w-full text-left text-[#F7E7CE] hover:text-[#FF8C00] font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="block w-full text-left text-[#F7E7CE] hover:text-[#FF8C00] font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="block w-full text-left text-[#F7E7CE] hover:text-[#FF8C00] font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Contact
                </button>
                <button 
                  onClick={() => handleNavigation('/careers')}
                  className="block w-full text-left text-[#F7E7CE] hover:text-[#FF8C00] font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Careers
                </button>
                
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-white/80 py-2 px-4">
                    <Phone className="w-4 h-4 text-[#FF8C00]" />
                    <span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
      {/* Bottom nav bar for mobile after scroll */}
      {showBottomBar && (
        <div className="fixed bottom-2 left-0 right-0 z-50 lg:hidden px-3">
          <div className="mx-auto max-w-sm bg-[#0b0b0c]/95 text-white rounded-2xl border border-white/10 backdrop-blur flex items-center justify-between px-4 py-2 shadow-lg">
            <button onClick={() => handleNavigation('/')} className="flex flex-col items-center text-xs">
              <Home className="w-5 h-5 mb-1" />Home
            </button>
            <button onClick={() => handleNavigation('/services')} className="flex flex-col items-center text-xs">
              <Layers className="w-5 h-5 mb-1" />Services
            </button>
            <button onClick={() => window.dispatchEvent(new Event('open-booking'))} className="flex flex-col items-center text-xs">
              <Calendar className="w-5 h-5 mb-1 text-[#FF8C00]" />Book
            </button>
            <button onClick={() => handleNavigation('/contact')} className="flex flex-col items-center text-xs">
              <Mail className="w-5 h-5 mb-1" />Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
