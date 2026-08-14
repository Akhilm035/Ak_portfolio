import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function ProjectCard({ project, idx, totalProjects, scrollYProgress }) {
  const container = useRef(null);

  // Generate proportional scaling thresholds dynamically based on card depth.
  const input = [];
  const outputScaleX = [];
  const outputScaleY = [];

  const steps = totalProjects - 1; // 2 transition steps for 3 projects
  for (let s = 0; s <= steps; s++) {
    const progressVal = s / steps; // e.g. 0, 0.5, 1.0
    input.push(progressVal);

    if (s < idx) {
      // The card hasn't stuck yet in this step
      outputScaleX.push(1.0);
      outputScaleY.push(1.0);
    } else {
      // Depth represents how many cards have stacked on top of this card
      const depth = s - idx; 
      // Proportional reduction per level:
      // Depth 0: Active topmost card -> scaleX = 1.0, scaleY = 1.0
      // Depth 1: 1 card on top -> scaleX = 0.88, scaleY = 0.95
      // Depth 2: 2 cards on top -> scaleX = 0.76, scaleY = 0.90
      const targetScaleX = 1.0 - depth * 0.12; 
      const targetScaleY = 1.0 - depth * 0.05;

      outputScaleX.push(Math.max(0.5, targetScaleX));
      outputScaleY.push(Math.max(0.5, targetScaleY));
    }
  }

  // Hook into the parent's scroll progress using the dynamically computed keyframes
  const scaleX = useTransform(scrollYProgress, input, outputScaleX);
  const scaleY = useTransform(scrollYProgress, input, outputScaleY);

  return (
    <div 
      ref={container}
      className="sticky w-full pb-[20vh] last:pb-[10vh]"
      style={{ top: `${112 + idx * 28}px`, zIndex: (idx + 1) * 10 }}
    >
      <motion.div 
        style={{ scaleX, scaleY }}
        className="w-full bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/80 transition-shadow duration-300 relative origin-top"
      >
        {/* Grid Card Layout with Sky Image and rounded overflow container */}
        <div className={`w-full min-h-[420px] md:min-h-[460px] lg:min-h-[480px] bg-gradient-to-br ${project.gradient} grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6 lg:p-8 items-center text-white relative rounded-[32px] overflow-hidden`}>
          
          {/* Sky Clouds Overlay Image */}
          <img 
            src="/hero_sky_bg.png" 
            alt="Sky background clouds" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay pointer-events-none z-0"
          />

          {/* Left Column: Glassmorphic Copy & Details */}
          <div className="lg:col-span-7 bg-[#2563eb]/20 backdrop-blur-xl border border-white/20 rounded-[24px] p-4 md:p-5 lg:p-6 flex flex-col justify-between h-full space-y-4 md:space-y-5 z-10 shadow-xl relative">
            {/* Top Row: Number & Year */}
            <div className="flex items-center justify-between w-full">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs font-bold bg-white/10">
                {project.number}
              </span>
              
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-white/80">
                {project.year}
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-none text-white max-w-xl">
              {project.title}
            </h3>

            {/* Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-white/20 my-1"></div>

            {/* Specialty tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description Paragraph */}
            <p className="text-white/85 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="inline-flex items-center space-x-3 bg-white text-slate-955 px-5 py-3 rounded-full font-bold shadow-lg shadow-black/5 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center">
                  <ArrowRight size={13} className="stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-slate-950">View Case Study</span>
              </button>
            </div>
          </div>

          {/* Right Column: Premium High-End Phone Mockup */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end overflow-visible pt-8 lg:pt-0 z-10">
            <div className="relative shadow-2xl rounded-[28px] bg-slate-900 border-[5px] border-slate-800 w-[190px] sm:w-[220px] h-[380px] sm:h-[440px] overflow-hidden flex flex-col justify-between p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500 pointer-events-none">
              
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-20 h-4.5 bg-black rounded-full z-30"></div>
              
              {/* Status bar */}
              <div className="flex items-center justify-between px-3 pt-1 text-[8px] font-bold text-slate-800 z-20">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Screen content based on mockupType */}
              <div className="flex-1 rounded-[20px] bg-white overflow-hidden flex flex-col justify-between p-2.5 mt-1 border border-slate-100 shadow-inner">
                
                {project.mockupType === 'payment' && (
                  <div className="flex-grow flex flex-col justify-between text-slate-900 h-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span>Pay Now</span>
                        <span>✕</span>
                      </div>
                      <div className="text-center py-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-semibold">Society Dues</span>
                        <div className="text-lg font-black text-slate-800 mt-0.5">₹ 9,500.00</div>
                        <div className="text-[8px] text-emerald-500 font-extrabold flex items-center justify-center mt-1">
                          🛡️ Secure Payment
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 flex-grow">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase">Saved Cards</span>
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white flex justify-between items-center shadow-md">
                        <div className="text-left">
                          <div className="text-[8px] font-bold uppercase tracking-wider">Axis Bank</div>
                          <div className="text-[10px] font-mono mt-0.5">•••• 6355</div>
                        </div>
                        <span className="text-[10px]">💳</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white flex justify-between items-center shadow-md opacity-90">
                        <div className="text-left">
                          <div className="text-[8px] font-bold uppercase tracking-wider">HSBC Credit</div>
                          <div className="text-[10px] font-mono mt-0.5">•••• 2120</div>
                        </div>
                        <span className="text-[10px]">💳</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-[8px] font-bold">
                        <span>CRED UPI</span>
                        <span className="w-3 h-3 rounded-full border border-slate-200"></span>
                      </div>
                      <div className="w-full bg-slate-900 text-white py-2 rounded-xl text-[9px] font-black text-center shadow-lg">
                        PAY NOW
                      </div>
                    </div>
                  </div>
                )}

                {project.mockupType === 'bills' && (
                  <div className="flex-grow flex flex-col justify-between text-slate-900 h-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span>Bills & Recharges</span>
                        <span>💡</span>
                      </div>
                      <p className="text-[9px] text-slate-500 leading-tight">
                        Pay all your utility dues instantly in one screen.
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 flex-grow">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase">Electricity Bills</span>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-1">
                        <div className="text-[8px] text-slate-400 font-semibold">Consumer No. 3601 2568</div>
                        <div className="text-[9px] font-bold text-slate-800">Flat A-503 Society Dues</div>
                        <div className="flex justify-between items-center pt-1 border-t border-slate-200/50 mt-1">
                          <span className="text-red-500 text-[9px] font-black">₹ 3,214.21</span>
                          <span className="bg-red-50 text-[7px] text-red-500 px-1.5 py-0.5 rounded-full font-bold">Overdue</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <div className="w-full bg-sky-600 text-white py-2 rounded-xl text-[9px] font-black text-center shadow-lg">
                        PAY DUE BILLS
                      </div>
                    </div>
                  </div>
                )}

                {project.mockupType === 'ai' && (
                  <div className="flex-grow flex flex-col justify-between text-slate-900 h-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span>Aura Workspace</span>
                        <span>⚡</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-violet-50 border border-violet-100 rounded-lg p-1.5">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
                        <span className="text-[8px] text-indigo-600 font-extrabold uppercase">Intent Canvas Active</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 flex-grow">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase font-mono">Friction Telemetry</span>
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                        <div className="flex justify-between items-center text-[7px] text-slate-400">
                          <span>Task Completion</span>
                          <span>94.8%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div className="w-[94%] h-full bg-indigo-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                        <div className="flex justify-between items-center text-[7px] text-slate-400">
                          <span>Friction Index</span>
                          <span>0.12 (Low)</span>
                        </div>
                        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div className="w-[12%] h-full bg-emerald-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <div className="w-full bg-slate-900 text-white py-2 rounded-xl text-[9px] font-black text-center shadow-lg">
                        VIEW ANALYTICS
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function SelectedWork() {
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      number: '01',
      year: '2025',
      title: 'The checkout, rebuilt for 5M+ homes',
      tags: ['Payments', 'iOS & Android'],
      description: 'A checkout redesign focused on reducing friction, improving payment adoption, and supporting over 1M+ monthly transactions.',
      gradient: 'from-[#1d4ed8] via-[#3b82f6] to-[#93c5fd]',
      mockupType: 'payment',
    },
    {
      id: 2,
      number: '02',
      year: '2026',
      title: 'Bills for the whole household, not just you.',
      tags: ['Payments', 'Bills & Recharges', 'iOS & Android'],
      description: 'Consolidating household utility bills under a single shared canvas, reducing payment delays, and streamlining family expenses.',
      gradient: 'from-[#0f766e] via-[#0d9488] to-[#2dd4bf]',
      mockupType: 'bills',
    },
    {
      id: 3,
      number: '03',
      year: '2026',
      title: 'Aura AI — Intelligent Workspace System',
      tags: ['Product Design', 'AI System', 'Web App'],
      description: 'Generative AI interface with real-time intent canvas, dynamic contextual widgets, and user friction telemetry.',
      gradient: 'from-[#5b21b6] via-[#7c3aed] to-[#c084fc]',
      mockupType: 'ai',
    },
  ];

  // Track the scroll progress of the entire stack container
  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply spring physics to smooth out viewport scroll transitions
  const scrollYProgress = useSpring(rawScrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="work" className="w-full bg-[#f8f9fa] py-24 text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center space-x-2 text-blue-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4">
            <Sparkles size={16} className="text-blue-600 fill-blue-600 animate-pulse" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-4xl md:text-[56px] font-black tracking-tight text-slate-900 leading-none">
            check out some of my work
          </h2>
          <p className="text-slate-500 max-w-xl text-base sm:text-lg font-medium leading-relaxed mt-4">
            A few products I've helped shape, and the thinking behind them.
          </p>
        </motion.div>

        {/* Overlapping Sticky Stack Container */}
        <div ref={containerRef} className="relative">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id}
              project={project}
              idx={idx}
              totalProjects={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
