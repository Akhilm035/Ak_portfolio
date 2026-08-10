import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ isScrolled, isLoaded }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'RESUME', href: '#resume' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 right-6 md:right-10 z-40"
    >
      <nav aria-label="Main Navigation">
        {/* Main Floating Glass Pill Bar */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="glass-pill flex items-center rounded-full px-3 py-2 md:px-4 md:py-2.5 transition-shadow duration-300"
        >
          {/* Avatar Profile Image */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
            aria-label="Akhil Menon Home"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white/80 shadow-xs flex-shrink-0 bg-sky-100">
              <img
                src="/profile.png"
                alt="Akhil Menon"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback avatar icon if image loading fails
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xs md:text-sm font-extrabold tracking-wider text-slate-900 uppercase pr-1 md:pr-2">
              AKHIL
            </span>
          </a>

          {/* Desktop Navigation Links (Visible when NOT scrolled & desktop screen) */}
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div
                key="expanded-links"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.25 }}
                className="hidden md:flex items-center space-x-6 pl-4 border-l border-slate-900/10"
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs font-bold tracking-widest text-slate-700 hover:text-sky-600 transition-colors duration-200 uppercase relative py-1 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Three-Dot Menu Button (Visible when scrolled OR on mobile) */}
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.button
                key="compact-dots"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="ml-2 pl-2 border-l border-slate-900/10 p-1.5 rounded-full hover:bg-white/60 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {mobileMenuOpen ? <X size={18} /> : <MoreHorizontal size={18} />}
              </motion.button>
            ) : (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="md:hidden ml-2 pl-2 border-l border-slate-900/10 p-1.5 rounded-full hover:bg-white/60 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {mobileMenuOpen ? <X size={18} /> : <MoreHorizontal size={18} />}
              </button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dropdown Menu Modal */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-14 w-60 glass-pill-dark rounded-2xl p-4 shadow-2xl text-white z-50 border border-white/20"
            >
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-3 py-1">
                  Navigation
                </span>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-semibold tracking-wider text-slate-100 hover:text-sky-300 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-3 text-xs text-slate-400">
                <span>Kannur, IN</span>
                <span className="flex items-center space-x-1 text-sky-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
