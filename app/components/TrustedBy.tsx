'use client'

import { motion } from 'framer-motion'
import { Star, Zap, Globe, Box } from 'lucide-react'

export default function TrustedBy() {
  const companies = [
    { 
      name: 'Amazon', 
      icon: Star, 
      color: '#FF9900',
      bgColor: 'bg-white',
      textColor: 'text-black'
    },
    { 
      name: 'Meta', 
      icon: Zap, 
      color: '#1877F2',
      bgColor: 'bg-white',
      textColor: 'text-gray-600'
    },
    { 
      name: 'Apple', 
      icon: Box, 
      color: '#000000',
      bgColor: 'bg-white',
      textColor: 'text-black'
    },
    { 
      name: 'Microsoft', 
      icon: Globe, 
      color: '#00A4EF',
      bgColor: 'bg-white',
      textColor: 'text-gray-600'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 1.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section className="relative z-20 px-4 sm:px-6 py-6 lg:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Trusted By Text */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-semibold text-[#2774AE] mb-6"
          >
            Trusted by 200+ companies
          </motion.h2>

          {/* Company Logos - Horizontal scroll on mobile, centered on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start lg:justify-center gap-8 sm:gap-10 lg:gap-16 mb-6 sm:mb-8 overflow-x-auto"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer flex flex-col items-center flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="relative">
                  {/* Company icon container - Clean and Professional */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${company.bgColor} rounded-2xl flex items-center justify-center shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300 group-hover:border-gray-300`}>
                    <company.icon 
                      size={28}
                      style={{ color: company.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Company name - Professional Typography */}
                  <div className="mt-3 text-center">
                    <span className={`text-sm sm:text-base lg:text-lg font-semibold ${company.textColor} transition-colors duration-300`}>
                      {company.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Trusted Companies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-12 relative"
          >
            {/* Animated dots */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-[#FF8C00] rounded-full"
                />
              ))}
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#2774AE]/20 to-[#F7E7CE] rounded-full blur-sm"
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#FF8C00]/20 to-[#2774AE]/20 rounded-full blur-sm"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
