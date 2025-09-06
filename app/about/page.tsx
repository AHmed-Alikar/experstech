'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, Shield, Target, Star } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Client NPS', value: '92' },
    { label: 'Avg. Uptime', value: '99.9%' },
  ];

  const values = [
    { icon: <Target className="w-5 h-5" />, title: 'Outcome-Driven', text: 'We measure success by business impact, not just features shipped.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Security First', text: 'We follow best practices from architecture to deployment.' },
    { icon: <Star className="w-5 h-5" />, title: 'Craft & Care', text: 'Design and code that are reliable, accessible, and delightful.' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFAF0] to-white">
      {/* Hero */}
      <section className="pt-24 px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#2774AE]"
          >
            Building Reliable Software, Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[#2774AE]/80 max-w-3xl"
          >
            ExpersTech is a product engineering team focused on quality, speed, and security.
            We partner with founders and enterprises to launch and scale high-impact software.
          </motion.p>
        </div>
      </section>

      {/* Credibility */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-[#F7E7CE] rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold text-[#2774AE]">{s.value}</div>
              <div className="text-[#2774AE]/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[#FF8C00]" />
            <h2 className="text-2xl font-bold text-[#2774AE]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-[#F7E7CE] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/10 text-[#FF8C00] flex items-center justify-center">{v.icon}</div>
                <div className="mt-3 text-lg font-semibold text-[#2774AE]">{v.title}</div>
                <div className="mt-1 text-[#2774AE]/80">{v.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-white border border-[#F7E7CE] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-2xl md:text-3xl font-extrabold text-[#2774AE]">Let’s build something exceptional</div>
            <div className="text-[#2774AE]/80 mt-2">Schedule a quick call to explore how we can help.</div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <a href="/contact" className="px-6 py-3 rounded-xl text-white bg-[#FF8C00] hover:bg-[#FF6B35] font-semibold text-center w-full md:w-auto">Schedule a meeting</a>
            <a href="/portfolio" className="px-6 py-3 rounded-xl text-[#2774AE] border border-[#F7E7CE] font-semibold text-center w-full md:w-auto">See our work</a>
          </div>
        </div>
      </section>
    </main>
  );
}


