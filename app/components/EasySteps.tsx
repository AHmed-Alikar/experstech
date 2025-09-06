'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const EasySteps = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const steps: StepItem[] = [
    {
      id: 'step-1',
      number: '01',
      title: 'Schedule your complimentary',
      description: 'Marketing Strategy Session',
      color: 'from-[#2774AE] to-[#1E5F8A]',
      delay: 0.1
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Get your Free',
      description: 'Marketing Strategy Plan',
      color: 'from-[#FF8C00] to-[#FF6B35]',
      delay: 0.2
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Work with us to grow your business',
      description: 'and get more customers',
      color: 'from-[#2774AE] via-[#FF8C00] to-[#2774AE]',
      delay: 0.3
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
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Steps List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredStep(step.id)}
                onHoverEnd={() => setHoveredStep(null)}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Glowing Number Badge */}
                  <motion.div
                    animate={{ 
                      scale: hoveredStep === step.id ? 1.1 : 1,
                      boxShadow: hoveredStep === step.id 
                        ? "0 0 30px rgba(255, 140, 0, 0.6)" 
                        : "0 0 20px rgba(39, 116, 174, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-white shadow-2xl group-hover:shadow-[#FF8C00]/50 transition-all duration-300 flex-shrink-0`}
                  >
                    {step.number}
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#2774AE] mb-1.5 sm:mb-2 group-hover:text-[#FF8C00] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#2774AE]/80 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Line Effect */}
                <motion.div
                  animate={{ 
                    scaleX: hoveredStep === step.id ? 1 : 0,
                    opacity: hoveredStep === step.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 h-1 bg-gradient-to-r from-[#FF8C00] to-[#2774AE] rounded-full origin-left"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Title and Branding */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-[#2774AE] mb-6 leading-tight">
                <span className="block">3 Easy steps</span>
                <span className="block">to grow your</span>
                <span className="block">business with</span>
                <span className="block bg-gradient-to-r from-[#FF8C00] via-[#2774AE] to-[#FF8C00] bg-clip-text text-transparent">
                  Vertica X
                </span>
              </h2>
              
              {/* Wavy Line Under "Easy" */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative mt-4 mb-8"
              >
                <div className="w-32 h-2 bg-gradient-to-r from-[#FF8C00] via-[#2774AE] to-[#FF8C00] rounded-full relative overflow-hidden">
                  {/* Animated Wave Effect */}
                  <motion.div
                    animate={{ 
                      x: ['-100%', '100%'],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] via-[#2774AE] to-[#FF8C00] rounded-full blur-lg opacity-30" />
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF8C00] rounded-2xl rotate-12 shadow-lg"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#2774AE] rounded-xl -rotate-12 shadow-lg"
            />
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
              Start Your Growth Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                🚀
              </motion.div>
            </span>
          </motion.button>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
            className="text-[#2774AE]/70 text-lg mt-6 font-medium"
          >
            Transform your business with our proven 3-step process ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EasySteps;
