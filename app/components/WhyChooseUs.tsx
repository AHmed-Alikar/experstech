'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ReasonItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const WhyChooseUs = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const reasons: ReasonItem[] = [
    {
      id: 'complete-team',
      icon: '👥',
      title: 'Complete Web Solutions Team',
      description: 'Expert developers, designers, and strategists working together to deliver exceptional results.',
      color: 'from-[#FF8C00] to-[#FF6B35]',
      delay: 0.1
    },
    {
      id: 'experience',
      icon: '⭐',
      title: '5+ Years of Experience',
      description: 'Proven track record of successful projects across diverse industries and technologies.',
      color: 'from-[#2774AE] to-[#1E5F8A]',
      delay: 0.2
    },
    {
      id: 'security',
      icon: '🛡️',
      title: 'Deliver Secured Systems',
      description: 'Enterprise-grade security with encryption, authentication, and compliance standards.',
      color: 'from-[#FF8C00] to-[#FF6B35]',
      delay: 0.3
    },
    {
      id: 'relationships',
      icon: '🤝',
      title: 'Best Relationships with Clients',
      description: 'Long-term partnerships built on trust, transparency, and exceptional service delivery.',
      color: 'from-[#2774AE] to-[#1E5F8A]',
      delay: 0.4
    },
    {
      id: 'quality',
      icon: '🏆',
      title: 'Quality Over Quantity',
      description: 'We focus on delivering excellence in every project, ensuring client satisfaction.',
      color: 'from-[#FF8C00] to-[#FF6B35]',
      delay: 0.5
    },
    {
      id: 'creative',
      icon: '💡',
      title: 'Creative and Innovative',
      description: 'Cutting-edge solutions that push boundaries and create competitive advantages.',
      color: 'from-[#2774AE] to-[#1E5F8A]',
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#FFFAF0] via-[#F7E7CE] to-[#FFFAF0] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-[#2774AE] rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-40 right-40 w-32 h-32 border border-[#FF8C00] rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-[#2774AE] rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        </div>
        
        {/* Floating Particles */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-32 w-4 h-4 bg-[#FF8C00] rounded-full shadow-lg shadow-[#FF8C00]/50"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-32 w-3 h-3 bg-[#2774AE] rounded-full shadow-lg shadow-[#2774AE]/50"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] text-white rounded-full text-sm font-semibold mb-8 shadow-lg shadow-[#FF8C00]/25"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
            🚀 Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2774AE] via-[#FF8C00] to-[#2774AE] mb-6 sm:mb-8 leading-tight"
          >
            WHY US
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-[#2774AE]/90 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Discover why leading companies choose <span className="text-[#FF8C00] font-bold">Vertica X</span> as their 
            <span className="text-[#2774AE] font-bold"> trusted partner for digital success</span>
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Large Question Mark */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Large Question Mark */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 flex items-center justify-center"
              >
                {/* Question Mark Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-full opacity-20 blur-3xl" />
                
                {/* Question Mark */}
                <div className="relative z-10 text-[#FF8C00] font-black text-[140px] sm:text-[180px] lg:text-[250px] leading-none">
                  ?
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-full blur-2xl opacity-30" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#2774AE] rounded-2xl rotate-12 shadow-lg"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FF8C00] rounded-xl -rotate-12 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Side - Reasons List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: reason.delay }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredItem(reason.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-[#2774AE]/20 hover:border-[#FF8C00] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#FF8C00]/30 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{ 
                      scale: hoveredItem === reason.id ? 1.1 : 1,
                      opacity: hoveredItem === reason.id ? 0.15 : 0.05
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-2xl`}
                  />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        scale: hoveredItem === reason.id ? 1.2 : 1,
                        rotate: hoveredItem === reason.id ? [0, 10, -10, 0] : 0
                      }}
                      transition={{ duration: 0.5, repeat: hoveredItem === reason.id ? Infinity : 0 }}
                      className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:shadow-[#FF8C00]/50 transition-all duration-300`}
                    >
                      {reason.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#2774AE] mb-2 group-hover:text-[#FF8C00] transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-[#2774AE]/80 text-base leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <motion.div
                      animate={{ 
                        x: hoveredItem === reason.id ? [0, 10, 0] : 0,
                        opacity: hoveredItem === reason.id ? 1 : 0.5
                      }}
                      transition={{ duration: 0.5, repeat: hoveredItem === reason.id ? Infinity : 0 }}
                      className="text-[#FF8C00] text-2xl font-bold group-hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      →
                    </motion.div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    animate={{ 
                      opacity: hoveredItem === reason.id ? 1 : 0,
                      scale: hoveredItem === reason.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/20 via-transparent to-transparent rounded-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(255, 140, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#FF8C00] via-[#FF6B35] to-[#FF8C00] text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-[#FF8C00]/40 transition-all duration-500 transform overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            
            <span className="relative flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-[#FF8C00] rounded-full" />
              </motion.div>
              Start Your Project Today
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                🚀
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



