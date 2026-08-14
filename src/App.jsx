import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './sections/WhatIDo';
import SelectedWork from './sections/SelectedWork';
import WorkPage from './sections/WorkPage';
import AboutMe from './sections/AboutMe';
import MyJourney from './sections/MyJourney';
import Footer from './sections/Footer';
import Recommendations from './sections/Recommendations';


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'work'

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

  // Multi-page layout navigation handler (Scrolls to top immediately on transition)
  const handlePageChange = (page, scrollToSection = null) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-slate-900 font-sans antialiased overflow-x-clip">
      {/* 1. Page Entry Loader */}
      <Loader onComplete={() => setIsLoaded(true)} />

      {/* 2. Top Navigation Bar (Morphs on Scroll) */}
      <Navbar 
        isScrolled={isScrolled} 
        isLoaded={isLoaded} 
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* 3. Main Content Container (Conditionally Rendered Pages) */}
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero isLoaded={isLoaded} scrollY={scrollY} />
            
            {/* What I Do section (remains inline on home page) */}
            <WhatIDo />

            {/* Selected Work portfolio overlapping sticky cards */}
            <SelectedWork />

            {/* About Me profile section */}
            <AboutMe />

            {/* Premium horizontal interactive Journey timeline */}
            <MyJourney />

            {/* Premium horizontal interactive Recommendations slider */}
            <Recommendations />
          </>
        ) : (
          /* Workpage: Curated filterable portfolio page */
          <WorkPage onPageChange={handlePageChange} />
        )}
      </main>

      {/* 4. Minimal Footer */}
      <Footer />
    </div>
  );
}
