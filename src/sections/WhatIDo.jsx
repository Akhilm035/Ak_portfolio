import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Word component to animate color/opacity based on scroll progress
const Word = ({ children, progress, range, isAccent }) => {
  // Slate-400/Slate-300 to Slate-900 for normal text, and Light Blue to Deep Blue for the accent word
  const color = useTransform(
    progress,
    range,
    isAccent ? ['#93c5fd', '#2563eb'] : ['#94a3b8', '#0f172a']
  );

  return (
    <motion.span
      style={{ color }}
      className={`inline-block ${
        isAccent 
          ? 'font-script font-normal transform translate-y-1 mr-2.5 sm:mr-3.5' 
          : 'font-extrabold mr-2 sm:mr-3'
      }`}
    >
      {children}
    </motion.span>
  );
};

export default function WhatIDo() {
  const containerRef = useRef(null);

  // Track scroll progress of the container relative to viewport center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'start 40%']
  });

  const rawText = "Product Designer simplifying complex problems into intuitive digital experiences. I design web and mobile products using product thinking, UX strategy, and interaction design.";
  const words = rawText.split(' ');

  return (
    <section id="about" className="w-full bg-[#f8f9fa] py-24 md:py-32 text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Section Badge */}
          <div className="lg:col-span-3 flex items-start">
            <div className="inline-flex items-center space-x-2 text-blue-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              <Sparkles size={16} className="text-blue-600 fill-blue-600 animate-pulse" />
              <span>WHAT I DO</span>
            </div>
          </div>

          {/* Right Column: Scroll-Revealing Editorial Statement */}
          <div ref={containerRef} className="lg:col-span-9 flex flex-col justify-start overflow-visible">
            <h3 className="text-3xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight leading-[1.2] max-w-5xl select-none">
              {words.map((word, idx) => {
                // Strip punctuation for matching the accent word "intuitive"
                const normalizedWord = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                const isAccent = normalizedWord === 'intuitive';
                
                // Calculate scroll range per word to stagger the reveal
                const start = (idx / words.length) * 0.85;
                const end = ((idx + 1) / words.length) * 0.85 + 0.15;
                
                return (
                  <Word 
                    key={idx} 
                    progress={scrollYProgress} 
                    range={[start, end]} 
                    isAccent={isAccent}
                  >
                    {word}
                  </Word>
                );
              })}
            </h3>

            {/* Quantitative Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 md:mt-20 pt-12 md:pt-16 border-t border-slate-200/50">
              
              {/* Stat 1: Years Designing */}
              <div className="flex flex-col">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-blue-600 tracking-tight">
                  2+
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 mt-3 sm:mt-4">
                  Years designing
                </div>
                <div className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base mt-1.5">
                  consumer products, enterprise software & design systems
                </div>
              </div>

              {/* Stat 2: Users Reached */}
              <div className="flex flex-col">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-blue-600 tracking-tight">
                  5M+
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 mt-3 sm:mt-4">
                  Users
                </div>
                <div className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base mt-1.5">
                  reached by the products I've helped ship at Mygate.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
