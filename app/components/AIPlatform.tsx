'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const TechStack = () => {
  const techIcons = [
    { name: 'React', icon: '⚛️', description: 'React' },
    { name: 'Next.js', icon: '⚡', description: 'Next.js' },
    { name: 'TypeScript', icon: 'TS', description: 'TypeScript' },
    { name: 'Angular', icon: '🛡️', description: 'Angular' },
    { name: 'Vue.js', icon: '🟢', description: 'Vue.js' },
    { name: 'JavaScript', icon: 'JS', description: 'JavaScript' },
    { name: 'Babel', icon: '🔷', description: 'Babel' },
    { name: 'Vite', icon: '⚡', description: 'Vite' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Glowing Blue Curves on Right */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-10 right-0 w-64 h-64 bg-[#2774AE]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-10 w-32 h-32 bg-[#2774AE]/30 rounded-full blur-2xl"></div>
        <div className="absolute top-48 right-20 w-24 h-24 bg-[#2774AE]/25 rounded-full blur-xl"></div>
        <div className="absolute top-64 right-5 w-40 h-40 bg-[#2774AE]/15 rounded-full blur-3xl"></div>
        
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
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#2774AE]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Along with your favorite{' '}
              <span className="bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>

            {/* Descriptive Text */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                Clean code, ready to integrate with the tools you love.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                No learning curve—just plug and play.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-[#2774AE] bg-white/5 hover:bg-[#2774AE]/10 backdrop-blur-sm rounded-2xl text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(39,116,174,0.3)]"
            >
              <FileText className="w-5 h-5 group-hover:text-[#2774AE] transition-colors" />
              <span>Read Docs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
            <div className="grid grid-cols-4 gap-8">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  {/* Icon Container */}
                  <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl flex items-center justify-center backdrop-blur-sm hover:border-[#2774AE]/50 hover:shadow-[0_0_30px_rgba(39,116,174,0.3)] transition-all duration-300">
                    {/* Icon */}
                    <div className="text-2xl font-bold text-white group-hover:text-[#2774AE] transition-colors">
                      {tech.icon === 'TS' ? (
                        <div className="text-sm font-bold">TS</div>
                      ) : tech.icon === 'JS' ? (
                        <div className="text-sm font-bold">JS</div>
                      ) : (
                        <span>{tech.icon}</span>
                      )}
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2774AE]/0 to-[#2774AE]/0 group-hover:from-[#2774AE]/10 group-hover:to-[#2774AE]/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                  
                  {/* Tech Name */}
                  <p className="text-center text-sm text-gray-400 mt-3 font-medium group-hover:text-[#2774AE] transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Glow Effects */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2774AE]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
