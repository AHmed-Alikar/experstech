'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', email: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGetStarted = () => {
    // Scroll to top or navigate to contact page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    // Navigate to services section or contact page
    window.location.href = '/contact';
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#FFFAF0] via-white to-[#F7E7CE] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FF8C00]/5 via-transparent to-[#2774AE]/5" />
        <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-[#FF8C00]/20 to-[#FF6B35]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-l from-[#2774AE]/15 to-[#FF8C00]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF8C00] via-[#FF6B35] to-[#FF8C00] rounded-3xl shadow-2xl overflow-hidden relative"
        >
          {/* Top Arrow Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ArrowUp className="w-6 h-6 text-[#FF8C00]" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-12 text-center text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            <div className="relative z-10">
              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm md:text-base font-medium mb-3 md:mb-4 opacity-90"
              >
                Free 30 Minute Consultation
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              >
                Digital Marketing
                <br />
                <span className="text-[#F7E7CE]">Consultation</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-base opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto"
              >
                Get expert advice on your digital marketing strategy. Our team will analyze your current approach and provide actionable insights to boost your online presence.
              </motion.p>

              {/* Form */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-[#F7E7CE] mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-sm md:text-base opacity-90">We'll get back to you within 24 hours to schedule your consultation.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="First Name"
                      className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#FF8C00] hover:bg-[#F7E7CE] font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-[#FF8C00] border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Request a Quote</span>
                      </div>
                    )}
                  </button>
                </motion.form>
              )}

              {/* Additional CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8"
              >
                <button
                  onClick={handleGetStarted}
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                </button>
                
                <button
                  onClick={handleLearnMore}
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationForm;
