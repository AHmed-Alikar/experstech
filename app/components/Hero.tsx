'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, User, ArrowRight, CheckCircle, Loader2, MessageSquare } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  const handleScheduleMeeting = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
    
    // Show calendar after success
    setTimeout(() => {
      setShowCalendar(true);
      setIsSuccess(false);
    }, 1000);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-gradient-to-br from-[#FFFAF0] via-[#F7E7CE] to-[#FFFAF0] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/5 via-transparent to-[#2774AE]/5"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] rounded-2xl rotate-12 shadow-lg animate-float"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-gradient-to-r from-[#2774AE] to-[#1E5F8A] rounded-xl -rotate-12 shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 left-1/4 w-14 h-14 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] rounded-2xl rotate-45 shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FF8C00 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* WhatsApp floating inside hero to share space with chat bot */}
      <WhatsAppButton bottomOffsetClass="bottom-24 md:bottom-28" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2774AE] via-[#1E5F8A] to-[#FF8C00] mb-4 sm:mb-6 leading-tight"
        >
          Accelerate Your
          <br />
          <span className="text-4xl sm:text-6xl lg:text-8xl">Sales With AI</span>
        </motion.h1>
        
        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#2774AE]/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium"
        >
          Transform your sales process with cutting-edge AI technology. 
          <span className="text-[#FF8C00] font-semibold"> Boost conversions by 300%</span> and 
          <span className="text-[#FF8C00] font-semibold"> close deals 5x faster</span> with intelligent automation.
        </motion.p>
        
        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* WhatsApp CTA (opens new chat) */}
          {(() => {
            const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '');
            const message = encodeURIComponent(process.env.NEXT_PUBLIC_MESSAGE || 'Hi! I would like to know more about your services.');
            const href = number ? `https://wa.me/${number}?text=${message}` : '';
            return href ? (
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366] text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 min-w-[200px] sm:min-w-[220px]"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4" fill="currentColor">
                    <path d="M19.11 17.58c-.3-.15-1.78-.88-2.06-.98-.28-.09-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.5-.5-.68-.51-.18-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.19-.57-.34z"/>
                    <path d="M16.04 4C9.94 4 5 8.94 5 15.04c0 2.69.88 5.18 2.38 7.2L6 28l5.93-1.55c1.96 1.34 4.31 2.12 6.86 2.12 6.1 0 11.04-4.94 11.04-11.04S22.14 4 16.04 4zm6.45 17.49c-.27.76-1.55 1.46-2.22 1.55-.59.08-1.35.11-2.18-.13-.5-.16-1.14-.37-1.95-.72-3.42-1.47-5.63-4.91-5.8-5.13-.17-.22-1.38-1.84-1.38-3.52 0-1.68.88-2.5 1.19-2.84.3-.34.66-.42.88-.42.22 0 .44.01.63.02.2.01.47-.08.73.56.27.65.92 2.24 1 2.4.08.16.13.35.02.56-.11.22-.17.35-.34.55-.17.2-.35.44-.5.59-.17.17-.35.35-.15.69.2.34.86 1.42 1.84 2.3 1.27 1.13 2.35 1.48 2.7 1.63.34.15.55.13.75-.08.2-.22.86-1.01 1.1-1.36.24-.34.47-.29.79-.17.32.12 2.02.95 2.37 1.12.35.17.58.25.66.39.08.14.08.8-.19 1.56z"/>
                  </svg>
                </div>
                <span>Chat on WhatsApp</span>
              </motion.a>
            ) : null;
          })()}
          {/* Schedule Meeting with ExpersTech Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScheduleMeeting}
            disabled={isLoading}
            className="group bg-gradient-to-r from-[#2774AE] to-[#1E5F8A] hover:from-[#1E5F8A] hover:to-[#2774AE] text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex items-center gap-2 min-w-[220px] sm:min-w-[240px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Setting up...</span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Calendar Opening...</span>
              </>
            ) : (
              <>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span>Schedule Meeting with ExpersTech</span>
              </>
            )}
          </motion.button>

          {/* Get Free Quote Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 min-w-[160px] sm:min-w-[180px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          {/* Inline WhatsApp icon next to CTAs */}
          <WhatsAppButton variant="inline" phoneNumber={whatsAppNumber} />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12"
        >
          {[
            { number: '300%', label: 'Conversion Boost' },
            { number: '5x', label: 'Faster Deals' },
            { number: '24/7', label: 'AI Support' },
            { number: '99%', label: 'Accuracy Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2774AE] mb-0.5 sm:mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-[#2774AE]/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseCalendar}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2774AE] to-[#1E5F8A] rounded-full mx-auto flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Schedule with ExpersTech</h3>
                <p className="text-gray-600">Choose a time that works best for you</p>
              </div>

              {/* Calendar */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div
                      key={i}
                      className={`text-center py-2 rounded-lg cursor-pointer hover:bg-[#2774AE] hover:text-white transition-colors ${
                        i >= 15 && i <= 20 ? 'bg-[#2774AE] text-white' : 'text-gray-700'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#2774AE]/10 rounded-lg">
                    <span className="text-sm font-medium">Available Slots</span>
                    <span className="text-[#2774AE] font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCloseCalendar}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-[#FF8C00] transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] text-white font-medium rounded-xl hover:shadow-lg transition-all">
                  Confirm Meeting
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
