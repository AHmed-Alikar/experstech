'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const TechStack = () => {
  const techIcons = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '⚡', category: 'Frontend' },
    { name: 'TypeScript', icon: 'TS', category: 'Frontend' },
    { name: 'Angular', icon: '🛡️', category: 'Frontend' },
    { name: 'Vue.js', icon: '🟢', category: 'Frontend' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'Flutter', icon: '🦋', category: 'Mobile' },
    { name: 'Swift', icon: '🍎', category: 'Mobile' }
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#FFFAF0] via-[#F7E7CE] to-[#FFFAF0] overflow-hidden">
      {/* Glowing Blue Curves on Right */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-10 right-0 w-48 h-48 bg-[#2774AE]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-24 right-8 w-24 h-24 bg-[#2774AE]/30 rounded-full blur-2xl"></div>
        <div className="absolute top-36 right-16 w-20 h-20 bg-[#2774AE]/25 rounded-full blur-xl"></div>
        <div className="absolute top-48 right-4 w-32 h-32 bg-[#2774AE]/15 rounded-full blur-3xl"></div>
        
        {/* Curved Lines */}
        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 400 800" fill="none">
          <path 
            d="M400 0C350 100 300 200 350 300C400 400 380 500 320 600C260 700 200 800 100 800" 
            stroke="url(#glow1)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.6"
          />
          <path 
            d="M400 50C320 150 280 250 320 350C360 450 340 550 280 650C220 750 180 800 100 800" 
            stroke="url(#glow2)" 
            strokeWidth="1.5" 
            fill="none"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="glow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2774AE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2774AE" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="glow2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2774AE" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2774AE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#2774AE]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2774AE] leading-tight">
              Along with your favorite{' '}
              <span className="bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>

            {/* Descriptive Text */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-[#2774AE]/80 leading-relaxed">
                Clean code, ready to integrate with the tools you love.
              </p>
              <p className="text-base sm:text-lg text-[#2774AE]/80 leading-relaxed">
                No learning curve—just plug and play.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-[#2774AE] hover:border-[#FF8C00] bg-white/80 hover:bg-white text-[#2774AE] hover:text-[#FF8C00] font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,140,0,0.3)]"
            >
              <FileText className="w-4 h-4 group-hover:text-[#FF8C00] transition-colors" />
              <span>Read Docs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Right Side - Technology Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Grid Container */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group relative"
                >
                  {/* Icon Container */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white/90 border-2 border-[#2774AE]/30 rounded-xl flex items-center justify-center shadow-md hover:border-[#2774AE] hover:shadow-[0_0_20px_rgba(39,116,174,0.3)] transition-all duration-300">
                    {/* Icon */}
                    <div className="text-xl font-bold text-[#2774AE] group-hover:text-[#FF8C00] transition-colors">
                      {tech.icon === 'TS' ? (
                        <div className="text-xs font-bold">TS</div>
                      ) : tech.icon === 'JS' ? (
                        <div className="text-xs font-bold">JS</div>
                      ) : (
                        <span>{tech.icon}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Tech Name */}
                  <p className="text-center text-[10px] sm:text-xs text-[#2774AE] mt-2 font-medium group-hover:text-[#FF8C00] transition-colors">
                    {tech.name}
                  </p>
                  
                  {/* Category Badge */}
                  <div className="absolute -top-1 -left-1">
                    <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                      tech.category === 'Frontend' 
                        ? 'bg-[#FF8C00] text-white border border-[#FF8C00]' 
                        : 'bg-[#2774AE] text-white border border-[#2774AE]'
                    }`}>
                      {tech.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Glow Effects */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#2774AE]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
