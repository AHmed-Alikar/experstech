'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  color: string;
  features: string[];
  techStack: string[];
  stats: {
    users: string;
    performance: string;
    uptime: string;
    development: string;
  };
  screenshots: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock project data - in real app, this would come from an API
  const projectData: ProjectDetail = {
    id: params.id,
    title: 'Port Management Platform',
    description: 'Revolutionary maritime operations system with AI-powered vessel tracking and predictive analytics.',
    longDescription: 'A comprehensive maritime port operations management system that revolutionizes how ports handle vessel traffic, cargo management, and operational efficiency. Built with cutting-edge AI technology, this platform provides real-time insights, predictive analytics, and automated decision-making capabilities that transform traditional port operations into a smart, connected ecosystem.',
    icon: '🚢',
    category: 'Enterprise',
    color: 'from-[#2774AE] to-[#1E5F8A]',
    features: [
      'AI-Powered Vessel Tracking & Prediction',
      'Smart Cargo Management & Optimization',
      'Real-time Port Analytics Dashboard',
      'Automated Scheduling & Route Optimization',
      'IoT Sensor Integration & Monitoring',
      'Advanced Security & Compliance Management'
    ],
    techStack: [
      'React 18', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'IoT Platform'
    ],
    stats: {
      users: '50K+',
      performance: '99.9%',
      uptime: '24/7',
      development: '8 months'
    },
    screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
    challenges: [
      'Complex maritime regulations and compliance requirements',
      'Real-time data processing from multiple IoT sources',
      'Integration with existing legacy port systems',
      'Ensuring 99.9% uptime in harsh marine environments'
    ],
    solutions: [
      'Built modular architecture with compliance-first design',
      'Implemented edge computing for real-time data processing',
      'Created robust API layer for seamless legacy integration',
      'Deployed redundant infrastructure with failover systems'
    ],
    results: [
      '40% reduction in vessel waiting times',
      '25% increase in cargo handling efficiency',
      '99.9% system uptime achieved',
      '$2M+ annual cost savings for port operators'
    ]
  };

  useEffect(() => {
    setProject(projectData);
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFFAF0] via-[#F7E7CE] to-[#FFFAF0] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#FF8C00] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'features', label: 'Features', icon: '✨' },
    { id: 'technology', label: 'Technology', icon: '⚡' },
    { id: 'challenges', label: 'Challenges', icon: '🎯' },
    { id: 'results', label: 'Results', icon: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFAF0] via-[#F7E7CE] to-[#FFFAF0] relative overflow-hidden">
      {/* Epic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, #2774AE 1px, transparent 1px), linear-gradient(0deg, #2774AE 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-40 h-40 border-2 border-[#2774AE] rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.7, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-40 w-32 h-32 border-2 border-[#FF8C00] rounded-full"
        />
        
        {/* Floating Particles */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-32 w-4 h-4 bg-[#FF8C00] rounded-full shadow-lg shadow-[#FF8C00]/50"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.6, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-32 w-3 h-3 bg-[#2774AE] rounded-full shadow-lg shadow-[#2774AE]/50"
        />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 28, repeat: Infinity }}
          className="absolute top-20 left-20 w-56 h-56 bg-gradient-to-r from-[#FF8C00]/30 to-[#FF6B35]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#2774AE]/30 to-[#1E5F8A]/30 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <Navigation />
      
      {/* Epic Project Header */}
      <div className="relative pt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => router.back()}
            className="group flex items-center gap-3 text-[#2774AE] hover:text-[#FF8C00] transition-all duration-300 mb-12 font-semibold"
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl"
            >
              ←
            </motion.div>
            Back to Portfolio
          </motion.button>

          {/* Project Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] text-white rounded-full text-lg font-bold mb-8 shadow-2xl shadow-[#FF8C00]/30"
            >
              {project.category}
            </motion.div>

            {/* Project Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <div className={`inline-block w-32 h-32 bg-gradient-to-br ${project.color} rounded-3xl flex items-center justify-center text-6xl shadow-2xl`}>
                {project.icon}
              </div>
            </motion.div>

            {/* Project Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2774AE] via-[#FF8C00] to-[#2774AE] mb-8 leading-tight"
            >
              {project.title}
            </motion.h1>
            
            {/* Project Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-2xl text-[#2774AE]/90 max-w-5xl mx-auto leading-relaxed font-medium mb-12"
            >
              {project.longDescription}
            </motion.p>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {Object.entries(project.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + (index * 0.1) }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#2774AE]/20 hover:border-[#FF8C00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/30"
                >
                  <div className="text-3xl font-black text-[#FF8C00] mb-2">{value}</div>
                  <div className="text-sm text-[#2774AE]/70 capitalize font-medium">{key}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] text-white shadow-2xl shadow-[#FF8C00]/30 scale-105'
                    : 'bg-white/90 text-[#2774AE] hover:bg-[#FF8C00]/10 hover:text-[#FF8C00] border-2 border-[#2774AE]/20 hover:border-[#FF8C00] hover:shadow-lg'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 border-2 border-[#2774AE]/20 mb-20"
          >
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-[#2774AE] mb-6">Project Overview</h3>
                <p className="text-xl text-[#2774AE]/80 leading-relaxed">{project.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h4 className="text-2xl font-bold text-[#FF8C00] mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center text-[#2774AE]/80"
                        >
                          <div className="w-3 h-3 bg-[#FF8C00] rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-[#2774AE] mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 6).map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="px-4 py-2 bg-[#F7E7CE] text-[#2774AE] rounded-full text-sm font-bold border border-[#FF8C00]/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-[#2774AE] mb-6">Detailed Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[#F7E7CE] to-white p-6 rounded-2xl border border-[#FF8C00]/20"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] rounded-xl flex items-center justify-center text-2xl">
                          ✨
                        </div>
                        <h4 className="text-xl font-bold text-[#2774AE]">{feature}</h4>
                      </div>
                      <p className="text-[#2774AE]/70">
                        Advanced implementation with cutting-edge technology to deliver exceptional performance and user experience.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-[#2774AE] mb-6">Technology Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/80 p-6 rounded-2xl border-2 border-[#2774AE]/20 hover:border-[#FF8C00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/30 text-center"
                    >
                      <div className="text-3xl mb-3">⚡</div>
                      <h4 className="text-lg font-bold text-[#2774AE] mb-2">{tech}</h4>
                      <p className="text-sm text-[#2774AE]/60">
                        Latest version with optimized performance
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-[#2774AE] mb-6">Challenges & Solutions</h3>
                <div className="space-y-8">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-[#F7E7CE] to-white p-8 rounded-2xl border border-[#FF8C00]/20"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-2xl font-bold text-[#FF8C00] mb-4 flex items-center gap-3">
                            🎯 Challenge
                          </h4>
                          <p className="text-[#2774AE]/80 text-lg">{challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-[#2774AE] mb-4 flex items-center gap-3">
                            💡 Solution
                          </h4>
                          <p className="text-[#2774AE]/80 text-lg">{project.solutions[index]}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-[#2774AE] mb-6">Project Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[#FF8C00]/10 to-[#2774AE]/10 p-8 rounded-2xl border-2 border-[#FF8C00]/30 text-center"
                    >
                      <div className="text-4xl mb-4">📊</div>
                      <h4 className="text-xl font-bold text-[#2774AE] mb-4">Achievement {index + 1}</h4>
                      <p className="text-[#2774AE]/80 text-lg">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/portfolio')}
              className="px-12 py-6 bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-[#FF8C00]/40 transition-all duration-500 transform"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
