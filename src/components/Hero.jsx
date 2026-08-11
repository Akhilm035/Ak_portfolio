import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, PenTool, Layout, CheckSquare, Cpu } from 'lucide-react';
import CloudLayer from './CloudLayer';

export default function Hero({ isLoaded, scrollY }) {
  // Parallax offsets calculation (subtle, GPU-accelerated)
  const typographyParallax = scrollY * 0.18;

  // Staggered reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-screen h-[100vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#389deb] via-[#60a8f8] to-[#d6ebfc] text-slate-900 select-none">
      {/* Motion-Animated Cloud Layers & Sun Flare */}
      <CloudLayer />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-32 lg:pt-36 flex-1 flex flex-col justify-center">
        <div className="flex flex-col justify-center h-full max-w-4xl">
          
          {/* Main Editorial Typography & Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            style={{ transform: `translate3d(0, ${typographyParallax}px, 0)` }}
            className="flex flex-col justify-center z-20 space-y-4 md:space-y-6"
          >
            {/* Small Introduction (Matching Reference Screenshot) */}
            <motion.div variants={itemVariants} className="flex items-center space-x-2 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-slate-900">
              <motion.span 
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 1.5, ease: 'easeInOut' }}
                className="inline-block origin-bottom-right text-xl sm:text-2xl select-none"
                role="img"
                aria-label="Waving hand"
              >
                👋
              </motion.span>
              <span>
                Hey, I'm{' '}
                <span className="font-extrabold text-blue-600">
                  Akhil
                </span>
              </span>
            </motion.div>

            {/* Oversized Editorial Headline (Recreating exact visual relationship) */}
            <motion.div variants={itemVariants} className="relative leading-none select-none">
              {/* First Line: "product" in deep navy sans-serif */}
              <div className="hero-title-product text-[#1e293b] font-extrabold tracking-tight">
                product
              </div>

              {/* Second Line: "designer" in electric blue script font */}
              <div className="relative -mt-4 sm:-mt-6 md:-mt-10 lg:-mt-12 pl-2 sm:pl-6 md:pl-10">
                <span className="hero-title-designer font-script text-blue-600 drop-shadow-xs inline-block animate-float transform-gpu">
                  designer
                </span>
              </div>
            </motion.div>

            {/* Supporting Text & Specialty Tags */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2 max-w-2xl">
              <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-slate-800 leading-snug">
                Designing products. Building the web. Testing experiences{' '}
                <a 
                  href="https://livetronics.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline font-bold transition-all duration-200"
                >
                  @Livetronics
                </a>
              </p>
              
              {/* Specialty Tag Pills (Matching Reference Screenshot) */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <span className="glass-pill px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-xs">
                  <PenTool size={13} className="text-blue-600" />
                  <span>Product Design</span>
                </span>
                <span className="text-slate-400 font-bold">•</span>
                <span className="glass-pill px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-xs">
                  <Layout size={13} className="text-blue-600" />
                  <span>UI/UX</span>
                </span>
                <span className="text-slate-400 font-bold">•</span>
                <span className="glass-pill px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-xs">
                  <CheckSquare size={13} className="text-blue-600" />
                  <span>UX Testing</span>
                </span>
                <span className="text-slate-400 font-bold">•</span>
                <span className="glass-pill px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-xs">
                  <Cpu size={13} className="text-blue-600" />
                  <span>AI-Assisted Development</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Metadata Bar (Matching Reference Screenshot) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-6 md:pb-8 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider uppercase"
      >
        {/* Left Location Badge */}
        <div className="flex items-center space-x-2 glass-pill px-4 py-2 rounded-full backdrop-blur-md shadow-xs text-slate-800">
          <MapPin size={15} className="text-blue-600 animate-bounce" />
          <span className="text-slate-500 font-extrabold text-[10px] sm:text-xs">BASED IN</span>
          <span className="text-slate-900 font-extrabold">KANNUR, KERALA</span>
        </div>

        {/* Right Role Button */}
        <div className="hidden sm:flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all cursor-default">
          <Sparkles size={15} className="text-amber-300" />
          <span className="font-extrabold tracking-wider">PRODUCT DESIGNER</span>
        </div>
      </motion.div>

      {/* Soft Bottom Transition Gradient to off-white section */}
      <div className="w-full h-16 bg-gradient-to-b from-transparent to-[#f8f9fa] pointer-events-none z-10"></div>
    </section>
  );
}
