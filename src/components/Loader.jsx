import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep loader visible for ~1.5s, then initiate exit transition
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.98,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#fbfbfe] text-slate-900 select-none cursor-default"
        >
          <div className="flex items-center space-x-4 md:space-x-8 px-6 py-4">
            {/* Left Name */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[0.25em] text-slate-900 uppercase"
            >
              AKHIL
            </motion.span>

            {/* Three Blue Dots Separator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center space-x-1.5 md:space-x-2"
            >
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full bg-sky-500 animate-dot-1 shadow-sm shadow-sky-300"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full bg-sky-400 animate-dot-2 shadow-sm shadow-sky-300"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full bg-sky-500 animate-dot-3 shadow-sm shadow-sky-300"></span>
            </motion.div>

            {/* Right Surname */}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.25em] text-slate-500 uppercase"
            >
              MOHANAN
            </motion.span>
          </div>

          {/* Minimal subtitled role text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-12 text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-slate-400"
          >
            Product Design & Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
