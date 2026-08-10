import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './sections/SelectedWork';
import Footer from './sections/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to trigger navbar shrink morphing & subtle parallax
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* 1. Page Entry Loader */}
      <Loader onComplete={() => setIsLoaded(true)} />

      {/* 2. Top Navigation Bar (Morphs on Scroll) */}
      <Navbar isScrolled={isScrolled} isLoaded={isLoaded} />

      {/* 3. Hero Section (Atmospheric Sky + Floating Typography + Clouds + Profile Cutout) */}
      <main>
        <Hero isLoaded={isLoaded} scrollY={scrollY} />

        {/* 4. Selected Work Portfolio Grid */}
        <SelectedWork />
      </main>

      {/* 5. Minimal Footer */}
      <Footer />
    </div>
  );
}
