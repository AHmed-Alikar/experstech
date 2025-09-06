'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Users, TrendingUp, Eye } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleViewProject = (projectId: string) => {
    // Navigate to portfolio page with specific project
    window.location.href = `/portfolio#${projectId}`;
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  const handleGetQuote = () => {
    // This could open a modal or navigate to contact form
    window.location.href = '/contact';
  };

  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce platform with AI-powered recommendations and advanced analytics.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      features: ['AI Recommendations', 'Real-time Analytics', 'Payment Integration'],
      year: '2024'
    },
    {
      id: 'ai-chat-assistant',
      title: 'AI Chat Assistant',
      category: 'ai',
      description: 'Intelligent chatbot powered by machine learning for customer support automation.',
      image: '🤖',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      features: ['Natural Language Processing', 'Multi-language Support', 'Analytics Dashboard'],
      year: '2024'
    },
    {
      id: 'mobile-banking-app',
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '🏦',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
      features: ['Biometric Auth', 'Real-time Transactions', 'Push Notifications'],
      year: '2023'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className="px-3 md:px-4 py-1 md:py-2 bg-[#FF8C00]/10 text-[#FF8C00] text-xs md:text-sm font-semibold rounded-full">
              Featured Work
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2774AE] mb-3 md:mb-4">
            Our Latest Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                activeFilter === filter.id
                  ? 'bg-[#FF8C00] text-white shadow-lg'
                  : 'bg-gray-100 text-[#2774AE] hover:bg-[#FF8C00]/10 border border-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Project Image */}
              <div className="relative h-32 md:h-48 bg-gradient-to-br from-[#2774AE]/10 to-[#FF8C00]/10 flex items-center justify-center">
                <div className="text-4xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="text-xs md:text-sm text-[#FF8C00] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500">{project.year}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-[#2774AE] mb-2 md:mb-3 group-hover:text-[#FF8C00] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#2774AE]/10 text-[#2774AE] text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#FF8C00] rounded-full"></div>
                      <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleViewProject(project.id)}
                    className="flex-1 bg-[#2774AE] hover:bg-[#1E5F8A] text-white py-2 md:py-2.5 px-3 md:px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 text-sm md:text-base"
                  >
                    <Eye className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#FFFAF0] to-[#F7E7CE] rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#2774AE] mb-3 md:mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button 
              onClick={handleContactUs}
              className="bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF8C00] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </button>
            
            <button 
              onClick={handleGetQuote}
              className="bg-white border-2 border-[#2774AE] text-[#2774AE] hover:bg-[#2774AE] hover:text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300"
            >
              Get Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
