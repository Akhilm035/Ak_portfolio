import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';
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
    <section className="relative w-full min-h-screen h-[100vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0c5eb9] via-[#2481e2] via-60% to-[#f8f9fa] text-white select-none">
      {/* Multi-layered Seamless Sky Cloud Animation */}
      <CloudLayer />

      {/* Atmospheric Soft Light Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-white/5 to-black/10 pointer-events-none z-0"></div>

      {/* Main Atmospheric Content Container */}
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
            {/* Small Introduction */}
            <motion.div variants={itemVariants} className="flex items-center space-x-2.5 text-base sm:text-lg md:text-xl font-medium tracking-wide text-white drop-shadow-xs">
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
                <span className="font-extrabold text-white">
                  Akhil
                </span>
              </span>
            </motion.div>

            {/* Oversized Editorial Headline */}
            <motion.div variants={itemVariants} className="relative leading-none select-none">
              {/* First Line: "product" */}
              <div className="hero-title-product text-white font-extrabold tracking-tight drop-shadow-sm">
                product
              </div>

              {/* Second Line: "designer" with gentle floating motion & slight script overlap */}
              <div className="relative -mt-4 sm:-mt-6 md:-mt-10 lg:-mt-12 pl-2 sm:pl-6 md:pl-10">
                <span className="hero-title-designer font-script text-white/95 drop-shadow-md inline-block animate-float transform-gpu">
                  designer
                </span>
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.div variants={itemVariants} className="space-y-2 pt-2 max-w-2xl">
              <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white/95 leading-snug drop-shadow-xs">
                Designing products. Testing experiences. Building the web.
              </p>
              <p className="text-xs sm:text-sm md:text-base font-normal tracking-wide text-white/80 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span>Product Design</span>
                <span className="w-1 h-1 rounded-full bg-white/60"></span>
                <span>UI/UX</span>
                <span className="w-1 h-1 rounded-full bg-white/60"></span>
                <span>UX Testing</span>
                <span className="w-1 h-1 rounded-full bg-white/60"></span>
                <span>AI-Assisted Development</span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Metadata Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-6 md:pb-8 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider text-slate-700/90 uppercase"
      >
        {/* Left Location */}
        <div className="flex items-center space-x-2 glass-pill px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <span className="text-slate-500 font-extrabold text-[10px] sm:text-xs">BASED IN</span>
          <MapPin size={14} className="text-sky-600 animate-bounce" />
          <span className="text-slate-900 font-bold">KANNUR, KERALA</span>
        </div>

        {/* Right Role Tag */}
        <div className="hidden sm:flex items-center space-x-2 glass-pill px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles size={14} className="text-amber-500" />
          <span className="text-slate-900 font-bold">PRODUCT DESIGNER</span>
        </div>
      </motion.div>

      {/* Soft Bottom Transition Gradient to off-white section */}
      <div className="w-full h-16 bg-gradient-to-b from-transparent to-[#f8f9fa] pointer-events-none z-10"></div>
    </section>
  );
}
