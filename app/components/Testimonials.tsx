'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  image: string;
}

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 'hamada',
      name: 'Hamada',
      role: 'Frontend Engineer',
      company: 'Vertica X',
      rating: 4.5,
      review: 'As a React dev, I was skeptical. But the code it generates is clean, readable, and instantly usable. I use it daily now.',
      image: '/images/hamada-profile.jpeg' // Using the second image for Hamada
    },
    {
      id: 'maria',
      name: 'Maria',
      role: 'UI Designer',
      company: 'GrowLoop',
      rating: 5,
      review: 'It feels like my designs go live instantly. There\'s no bottleneck. What I imagine is what users see.',
      image: '👩‍🎨'
    },
    {
      id: 'aziiz',
      name: 'Aziiz',
      role: 'Frontend Dev',
      company: 'Lightframe',
      rating: 5,
      review: 'This tool feels like having a frontend co-pilot. I shipped a working UI in under 20 minutes — with no rewrites.',
      image: '👨‍💻'
    },
    {
      id: 'muhanad',
      name: 'Muhanad',
      role: 'Backend Engineer',
      company: 'TechCorp',
      rating: 5,
      review: 'We finally found a system where design guidelines aren\'t just suggestions — they\'re embedded in output.',
      image: '👨‍💻'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentItem = testimonials[currentTestimonial];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FFFAF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-0"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#2774AE] leading-tight">
              Honest review from dev & designer
            </h2>
          </motion.div>

          {/* Right Side - Positive Feedback */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="text-6xl lg:text-7xl font-black text-[#FF8C00] leading-none">
              92%
            </div>
            <p className="text-lg text-[#2774AE] font-medium">
              Positive feedback after using Vertica X
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 border-2 border-[#FF8C00] hover:border-[#2774AE] transition-all duration-500 overflow-hidden relative shadow-xl">
              <div className="flex items-start gap-6">
                {/* Profile Image */}
                {currentItem.id === 'hamada' ? (
                  <div className="w-24 h-32 rounded-2xl shadow-lg overflow-hidden border-2 border-[#2774AE]">
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-32 bg-gradient-to-br from-[#2774AE] to-[#1E5F8A] rounded-2xl flex items-center justify-center text-4xl shadow-lg overflow-hidden border-2 border-[#2774AE]">
                    {currentItem.image}
                  </div>
                )}
                
                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            index < Math.floor(currentItem.rating) 
                              ? 'text-[#FF8C00] fill-current' 
                              : index === Math.floor(currentItem.rating) && currentItem.rating % 1 !== 0
                              ? 'text-[#FF8C00] fill-current opacity-50'
                              : 'text-[#F7E7CE]'
                          }`} 
                        />
                      </motion.div>
                    ))}
                    <span className="text-lg font-bold text-[#FF8C00] ml-2">
                      {currentItem.rating}
                    </span>
                  </div>

                  {/* Review Text */}
                  <motion.p
                    key={currentItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl text-[#2774AE] leading-relaxed mb-6 font-medium"
                  >
                    "{currentItem.review}"
                  </motion.p>

                  {/* Reviewer Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#2774AE] mb-1">
                      {currentItem.name}
                    </h3>
                    <p className="text-lg text-[#2774AE]/80 font-medium">
                      {currentItem.role} @{currentItem.company}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: '#2774AE' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-[#F7E7CE] hover:bg-[#2774AE] text-[#FF8C00] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border-2 border-[#FF8C00] hover:border-[#2774AE]"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: '#2774AE' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-[#F7E7CE] hover:bg-[#2774AE] text-[#FF8C00] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border-2 border-[#FF8C00] hover:border-[#2774AE]"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Three Smaller Testimonial Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 border-2 border-[#F7E7CE] hover:border-[#FF8C00] transition-all duration-300 hover:bg-[#F7E7CE] overflow-hidden shadow-lg">
                  {/* Review Text */}
                  <p className="text-base text-[#2774AE] leading-relaxed mb-4 font-medium group-hover:text-[#2774AE] transition-colors duration-300">
                    "{testimonial.review}"
                  </p>
                  
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-xl flex items-center justify-center text-lg shadow-lg border border-[#2774AE]">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2774AE] group-hover:text-[#FF8C00] transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#2774AE]/70">
                        {testimonial.role} @{testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
