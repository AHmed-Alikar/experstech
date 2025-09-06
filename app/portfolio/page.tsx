'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce platform with AI-powered recommendations and advanced analytics.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      features: ['AI Recommendations', 'Real-time Analytics', 'Payment Integration'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 2,
      title: 'AI Chat Assistant',
      category: 'ai',
      description: 'Intelligent chatbot powered by machine learning for customer support automation.',
      image: '🤖',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      features: ['Natural Language Processing', 'Multi-language Support', 'Analytics Dashboard'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '🏦',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
      features: ['Biometric Auth', 'Real-time Transactions', 'Push Notifications'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 4,
      title: 'Inventory Management System',
      category: 'web',
      description: 'Comprehensive inventory management solution with barcode scanning and reporting.',
      image: '📦',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'WebSocket'],
      features: ['Barcode Scanning', 'Real-time Updates', 'Advanced Reporting'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      category: 'ai',
      description: 'AI-powered content generation tool for marketing and social media.',
      image: '✍️',
      tech: ['Python', 'OpenAI API', 'React', 'Django'],
      features: ['Content Generation', 'SEO Optimization', 'Multi-platform Support'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Food delivery application with real-time tracking and payment integration.',
      image: '🍕',
      tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
      features: ['Real-time Tracking', 'Payment Integration', 'Push Notifications'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2022'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFAF0] via-white to-[#F7E7CE] pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#FF8C00]/20 to-[#FF6B35]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-16 w-56 h-56 bg-gradient-to-l from-[#2774AE]/15 to-[#FF8C00]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-r from-[#FF8C00]/15 to-[#2774AE]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#2774AE] mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and innovative solutions that have transformed businesses across various industries.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#FF8C00] text-white shadow-lg'
                  : 'bg-white text-[#2774AE] hover:bg-[#FF8C00]/10 border border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{filter.name}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#2774AE]/10 to-[#FF8C00]/10 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#FF8C00] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#2774AE] mb-3 group-hover:text-[#FF8C00] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#2774AE] hover:bg-[#1E5F8A] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-[#2774AE] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF8C00] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="bg-white border-2 border-[#2774AE] text-[#2774AE] hover:bg-[#2774AE] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#2774AE] mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#2774AE] mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#2774AE]/10 text-[#2774AE] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#2774AE] mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Actions */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#2774AE] mb-4">Project Links</h3>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.liveUrl}
                        className="w-full bg-[#FF8C00] hover:bg-[#FF6B35] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Project</span>
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#2774AE]/5 rounded-xl p-6 border border-[#2774AE]/20">
                    <h3 className="text-lg font-semibold text-[#2774AE] mb-3">Interested in Similar Project?</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Let's discuss how we can create a similar solution for your business.
                    </p>
                    <button className="w-full bg-[#2774AE] hover:bg-[#1E5F8A] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300">
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
