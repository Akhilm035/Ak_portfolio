import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function WhatIDo() {
  return (
    <section id="about" className="w-full bg-[#f8f9fa] py-24 md:py-32 px-6 md:px-12 lg:px-16 text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Badge */}
          <div className="lg:col-span-3 flex items-start">
            <div className="inline-flex items-center space-x-2 text-blue-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              {/* Blue Star / Diamond Icon */}
              <Sparkles size={16} className="text-blue-600 fill-blue-600" />
              <span>WHAT I DO</span>
            </div>
          </div>

          {/* Right Column: Statement & Sub-paragraph */}
          <div className="lg:col-span-9 flex flex-col justify-start">
            {/* Main Editorial Statement using Custom Copy */}
            <h3 className="text-3xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
              Product Designer turning complex problems into{' '}
              <span className="font-script text-blue-600 font-normal inline-block transform translate-y-1">
                simple
              </span>
              , meaningful digital experiences.{' '}
              <span className="text-slate-400/90 font-bold block sm:inline">
                I design web and mobile products end-to-end, combining product thinking, UX strategy, 
                and interaction design to create intuitive, impactful experiences.
              </span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
