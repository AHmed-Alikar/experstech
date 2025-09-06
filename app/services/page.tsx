'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Cpu, Globe, Smartphone, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { title: 'Web Applications', icon: <Globe className="w-6 h-6" />, description: 'High-performance, SEO-friendly web apps with modern stacks that scale securely.', features: ['Next.js + React 18', 'TypeScript', 'CI/CD & Cloud', 'Performance-first'] },
    { title: 'Mobile Apps', icon: <Smartphone className="w-6 h-6" />, description: 'Fast, beautiful iOS and Android apps with native feel and robust APIs.', features: ['React Native / Flutter', 'Offline-first', 'Analytics', 'App Store Deploys'] },
    { title: 'AI Solutions', icon: <Cpu className="w-6 h-6" />, description: 'Automations, chatbots, and predictive systems that boost conversion and reduce cost.', features: ['LLMs & RAG', 'Computer Vision', 'MLOps', 'Data Pipelines'] },
  ];

  const valueProps = [
    { title: 'Faster Time-to-Value', detail: 'Launch in weeks, not months' },
    { title: 'Conversion Focused', detail: 'Design that speaks ROI' },
    { title: 'Enterprise-Grade', detail: 'Security, reliability, and scale' },
  ];

  const process = [
    { step: '01', title: 'Discovery', text: 'We identify goals, users, and measurable outcomes.' },
    { step: '02', title: 'Design', text: 'UX flows and UI that align to business impact.' },
    { step: '03', title: 'Build', text: 'Modular, tested, and secure implementation.' },
    { step: '04', title: 'Launch & Grow', text: 'Iterate with analytics and A/B testing.' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFAF0] to-white">
      {/* Hero */}
      <section className="pt-24 px-6 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#2774AE]"
          >
            Services that Ship Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[#2774AE]/80 max-w-2xl mx-auto"
          >
            We design and build modern web, mobile, and AI products focused on growth,
            performance, and security.
          </motion.p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF8C00] font-semibold shadow-lg transition"
            >
              Book a Free Consultation
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 rounded-xl text-[#2774AE] bg-white border border-[#F7E7CE] hover:shadow-sm font-semibold"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {valueProps.map((v) => (
            <div key={v.title} className="bg-white border border-[#F7E7CE] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#FF8C00] mt-1" />
                <div>
                  <div className="text-lg font-semibold text-[#2774AE]">{v.title}</div>
                  <div className="text-[#2774AE]/70">{v.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-[#F7E7CE] rounded-2xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 text-[#2774AE]">
                <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/10 text-[#FF8C00] flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
              <p className="mt-3 text-[#2774AE]/80">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#2774AE]">
                    <CheckCircle className="w-4 h-4 text-[#FF8C00]" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-lg text-white bg-[#FF8C00] hover:bg-[#FF6B35] font-semibold"
                >
                  Get Started
                </a>
                <a href="/contact" className="px-4 py-2 rounded-lg text-[#2774AE] border border-[#F7E7CE] font-semibold">
                  Talk to Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 pb-12 bg-[#FFFAF0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#FF8C00]" />
            <h2 className="text-2xl font-bold text-[#2774AE]">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {process.map((p) => (
              <div key={p.step} className="bg-white border border-[#F7E7CE] rounded-2xl p-5">
                <div className="text-sm font-bold text-[#FF8C00]">{p.step}</div>
                <div className="text-lg font-semibold text-[#2774AE] mt-1">{p.title}</div>
                <div className="text-[#2774AE]/70 mt-2">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] rounded-2xl p-6 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-2xl md:text-3xl font-extrabold">Ready to accelerate your roadmap?</div>
            <div className="opacity-90">Let’s scope your project and deliver business impact fast.</div>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-5 py-3 bg-white text-[#FF6B35] rounded-xl font-semibold flex items-center gap-2">
              Book a Call <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/contact" className="px-5 py-3 bg-transparent border border-white/60 rounded-xl font-semibold">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


