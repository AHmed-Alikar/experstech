'use client'

import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="relative z-40 px-6 py-3 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2774AE] text-white rounded-full px-6 py-3 flex items-center justify-center space-x-3 shadow-lg max-w-md mx-auto relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2774AE] via-[#2774AE]/90 to-[#2774AE] opacity-80" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center space-x-3">
            <span className="text-sm font-medium">New version is out! Read more</span>
            <motion.div
              whileHover={{ x: 3 }}
              className="w-6 h-6 bg-[#FF8C00] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FF8C00]/90 transition-colors duration-300"
            >
              <ArrowRight className="w-3 h-3 text-white" />
            </motion.div>
          </div>

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <X size={16} />
          </motion.button>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: '50%',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
