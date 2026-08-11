import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Smartphone, Sparkles } from 'lucide-react';

export default function SelectedWork({ onPageChange }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Aura AI — Intelligent Workspace System',
      category: 'Product Design',
      tag: 'UI/UX · AI System',
      description: 'Generative AI interface with real-time intent canvas, dynamic contextual widgets, and user friction telemetry.',
      metrics: '+42% Workflow Efficiency',
      color: 'from-sky-500/10 to-indigo-500/10',
      badge: 'Case Study',
      icon: Cpu,
    },
    {
      id: 2,
      title: 'FinFlow — Next-Gen Mobile Banking',
      category: 'UI/UX',
      tag: 'Mobile App · Design System',
      description: 'Micro-interaction rich mobile financial management tool with instant settlement analytics and biometric security flows.',
      metrics: '4.9 ★ iOS App Store Rating',
      color: 'from-emerald-500/10 to-teal-500/10',
      badge: 'Live Product',
      icon: Smartphone,
    },
    {
      id: 3,
      title: 'Enterprise SaaS Usability & Friction Audit',
      category: 'UX Testing',
      tag: 'UX Testing · Heuristic Evaluation',
      description: 'Comprehensive usability stress test and quantitative friction analysis across 120+ user journey scenarios.',
      metrics: '38% Reduction in Drop-offs',
      color: 'from-amber-500/10 to-orange-500/10',
      badge: 'Audit & Test',
      icon: CheckCircle2,
    },
    {
      id: 4,
      title: 'DevStudio — AI-Assisted Component Canvas',
      category: 'AI-Assisted Web',
      tag: 'React · Tailwind · Web App',
      description: 'High-speed component builder leveraging natural language synthesis and real-time visual code generation.',
      metrics: '10x Faster UI Scaffolding',
      color: 'from-purple-500/10 to-pink-500/10',
      badge: 'AI Web App',
      icon: Layers,
    },
  ];

  const filters = ['All', 'Product Design', 'UI/UX', 'UX Testing', 'AI-Assisted Web'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="w-full bg-[#f8f9fa] pt-32 md:pt-40 pb-24 text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Back Link Breadcrumb */}
        {onPageChange && (
          <div className="mb-8 flex justify-start">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onPageChange('home');
              }}
              className="text-xs font-bold text-slate-400 hover:text-sky-600 transition-colors uppercase tracking-widest flex items-center space-x-1.5 group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform duration-250">&larr;</span>
              <span>Back to home</span>
            </a>
          </div>
        )}
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-sky-600 text-xs font-extrabold tracking-widest uppercase mb-3">
              <Sparkles size={14} />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
              SELECTED WORK
            </h2>
          </div>
          
          <p className="text-slate-500 max-w-md text-sm sm:text-base font-normal leading-relaxed">
            Crafting scalable design systems, conducting rigorous user testing, and building modern web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {project.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-600 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start space-x-3 mb-3">
                    <IconComponent className="text-sky-600 mt-1 flex-shrink-0" size={24} />
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer Metric */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Impact: <strong className="text-slate-900 font-bold">{project.metrics}</strong></span>
                  <span className="text-sky-600 font-bold group-hover:underline">View Case Study &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
