import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const chapters = [
  {
    id: 'crenovates',
    label: 'Crenovates',
    type: 'primary',
    chapterNum: 'Chapter 01',
    title: 'Crenovates',
    role: 'Designer',
    location: 'Kozhikode, Kerala, India',
    duration: 'Jul 2012 - Dec 2014 · 2 yrs 6 mos',
    content: (
      <div className="space-y-4 text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1">
        <div>
          <h4 className="font-extrabold text-slate-800 text-[13px] uppercase tracking-wide">Sulaimaani.tv</h4>
          <p className="text-slate-400 font-bold text-[9px] uppercase tracking-wider -mt-0.5">Short Film Platform</p>
          <p className="mt-2 text-slate-500">
            Worked on the product concept and visual design, while reviewing and shortlisting Malayalam short films.
          </p>
          <a
            href="https://www.youtube.com/watch?v=gScQndKaQlg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-extrabold text-[11px] uppercase tracking-wider mt-2 group transition-colors duration-300 focus:outline-none"
          >
            <span>View Teaser</span>
            <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </div>
        <div className="pt-3 border-t border-slate-100/80 space-y-1">
          <div className="flex items-center space-x-1.5 text-slate-800 font-bold">
            <span className="text-blue-600">✦</span>
            <span>Skills</span>
          </div>
          <p className="text-slate-500 text-[11px] sm:text-xs font-semibold leading-relaxed">
            Graphic Design · Logo Design · Adobe Photoshop · Visual Design · Product Exploration · Creative Problem Solving
          </p>
        </div>
      </div>
    ),
    badge: 'CR',
    badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
    indicator: 'Jul 2012'
  },
  {
    id: 'l8n8labs',
    label: 'L8 N8 Labs',
    type: 'primary',
    chapterNum: 'Chapter 02',
    title: 'L8 N8 Labs',
    role: 'UI/UX Designer',
    location: 'Kozhikode, Kerala, India',
    duration: 'Jan 2015 - Apr 2017 · 2 yrs 4 mos',
    content: (
      <div className="space-y-4 text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1">
        <div>
          <h4 className="font-extrabold text-slate-800 text-[13px] uppercase tracking-wide">WorldRecharge</h4>
          <p className="text-slate-400 font-bold text-[9px] uppercase tracking-wider -mt-0.5">Product design for a connected recharge ecosystem</p>
          <p className="mt-2 text-slate-500">
            Contributed to the WorldRecharge product, working across product concepts, mobile solutions, and business-focused design for the Middle Eastern market.
          </p>
        </div>
        <div className="pt-3 border-t border-slate-100/80 space-y-1">
          <div className="flex items-center space-x-1.5 text-slate-800 font-bold">
            <span className="text-blue-600">✦</span>
            <span>Skills</span>
          </div>
          <p className="text-slate-500 text-[11px] sm:text-xs font-semibold leading-relaxed">
            Product Thinking · UX Design · UI Design · Design Language · Typography · Color Systems · Visual Design · Brainstorming · Concept Development · Mobile App Design
          </p>
        </div>
      </div>
    ),
    badge: 'L8',
    badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    indicator: 'Jan 2015'
  },
  {
    id: 'livetronics',
    label: 'Livetronics.AI',
    type: 'primary',
    chapterNum: 'Chapter 03',
    title: 'Livetronics.AI',
    role: 'Product Designer',
    location: 'Kannur, Kerala, India',
    duration: 'Jan 2018 - Present · 8 yrs 8 mos',
    content: (
      <div className="space-y-4 text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1">
        <div>
          <h4 className="font-extrabold text-slate-800 text-[13px] uppercase tracking-wide">Wocul</h4>
          <p className="text-slate-400 font-bold text-[9px] uppercase tracking-wider -mt-0.5">
            AI-Native Work Management Platform
          </p>
          <p className="mt-2 text-slate-500">
            Wocul is an AI-native work-management platform that unifies tasks, documents, and business systems, helping teams make faster, evidence-based decisions.
          </p>
          <a
            href="https://wocul.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-extrabold text-[11px] uppercase tracking-wider mt-2 group transition-colors duration-300 focus:outline-none"
          >
            <span>View Website</span>
            <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </div>
        <div className="pt-3 border-t border-slate-100/80 space-y-1">
          <div className="flex items-center space-x-1.5 text-slate-800 font-bold">
            <span className="text-blue-600">✦</span>
            <span>Skills</span>
          </div>
          <p className="text-slate-500 text-[11px] sm:text-xs font-semibold leading-relaxed">
            Figma · Stitch · ChatGPT · Claude · Antigravity IDE · AI Prototyping · Design-to-Code · AI Development
          </p>
        </div>
      </div>
    ),
    badge: 'LT',
    badgeBg: 'bg-sky-50 text-sky-600 border-sky-100',
    indicator: 'Jan 2018'
  }
];

export default function MyJourney() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  // Premium soft inertia spring physics
  const springX = useSpring(x, { stiffness: 90, damping: 20 });

  // Update slider boundaries dynamically to center align every card
  const updateConstraints = () => {
    if (containerRef.current && sliderRef.current && cardRefs.current.length > 0) {
      const containerWidth = containerRef.current.offsetWidth;
      const firstCard = cardRefs.current[0];
      const lastCard = cardRefs.current[cardRefs.current.length - 1];
      
      if (firstCard && lastCard) {
        const firstCardWidth = firstCard.offsetWidth;
        const lastCardWidth = lastCard.offsetWidth;
        
        // Right constraint: Centers the first card in the viewport
        const right = containerWidth / 2 - (firstCard.offsetLeft + firstCardWidth / 2);
        
        // Left constraint: Centers the last card in the viewport
        const lastCardCenter = lastCard.offsetLeft + lastCardWidth / 2;
        const left = containerWidth / 2 - lastCardCenter;
        
        setDragConstraints({ left, right });
      }
    }
  };

  useEffect(() => {
    updateConstraints();
    // Add small delay to calculate correctly after fonts/images load
    const timer = setTimeout(updateConstraints, 500);
    window.addEventListener('resize', updateConstraints);
    return () => {
      window.removeEventListener('resize', updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  // Center the first card on initial load
  useEffect(() => {
    if (dragConstraints.right !== 0) {
      x.set(dragConstraints.right);
    }
  }, [dragConstraints.right, x]);

  // Sync scroll-wheel horizontal movement
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheelEvent = (e) => {
      // If user scrolls horizontally or vertically
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const currentX = x.get();
      let newX = currentX - delta * 0.85; // Speed multiplier for organic scroll speed
      
      if (newX > dragConstraints.right) newX = dragConstraints.right;
      if (newX < dragConstraints.left) newX = dragConstraints.left;

      // Allow natural scroll to bypass container only at boundaries
      const atStart = currentX === dragConstraints.right && delta <= 0;
      const atEnd = currentX === dragConstraints.left && delta >= 0;

      if (!atStart && !atEnd) {
        e.preventDefault();
        x.set(newX);
      }
    };

    el.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheelEvent);
    };
  }, [dragConstraints, x]);

  // Synchronously compute active card based on viewport center positioning
  const calculateActiveCard = () => {
    if (!containerRef.current || cardRefs.current.length === 0) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((cardEl, idx) => {
      if (!cardEl) return;
      const rect = cardEl.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Run calculation when spring position shifts
  useMotionValueEvent(springX, 'change', () => {
    calculateActiveCard();
  });

  // Center a specific card in the viewport
  const scrollToChapter = (idx) => {
    if (!containerRef.current || !cardRefs.current[idx]) return;
    const containerWidth = containerRef.current.offsetWidth;
    const cardEl = cardRefs.current[idx];
    const cardLeft = cardEl.offsetLeft;
    const cardWidth = cardEl.offsetWidth;

    let targetX = -(cardLeft + cardWidth / 2 - containerWidth / 2);
    if (targetX > dragConstraints.right) targetX = dragConstraints.right;
    if (targetX < dragConstraints.left) targetX = dragConstraints.left;

    x.set(targetX);
  };



  return (
    <section className="w-full bg-[#fafbfc] py-24 md:py-32 text-slate-900 border-t border-slate-200/40 relative overflow-hidden select-none">
      
      {/* 1. Header Details */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-16 flex flex-col items-center space-y-6">
        <div className="space-y-4 flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 text-blue-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase justify-center">
            <span className="text-blue-600 text-sm">✦</span>
            <span>MY JOURNEY</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-[50px] font-black tracking-tight text-slate-900 leading-none">
            the journey so far
          </h2>
          
          {/* Subtext */}
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
            A few chapters, a few wrong turns, and a lot of learning along the way.
          </p>
        </div>
      </div>

      {/* 2. Drag & Scroll Container */}
      <div 
        ref={containerRef}
        className="w-full relative cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={sliderRef}
          style={{ x: springX }}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.15}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => {
            setIsDragging(false);
            calculateActiveCard();
          }}
          className="flex items-center space-x-8 md:space-x-12 py-12 relative min-w-max"
        >
          {/* Dashed Timeline Connector Line */}
          <div className="absolute top-[50%] left-[220px] right-[220px] h-0 border-t-2 border-dashed border-slate-200/80 -z-10" />

          {/* Chapters Render */}
          {chapters.map((chap, idx) => {
            const isActive = activeIndex === idx;
            const isPrev = idx < activeIndex;
            const distance = Math.abs(activeIndex - idx);

            // Calculate responsive scale & offset shifts dynamically
            let scale = 1;
            let opacity = 1;
            let translateX = 0;

            if (isActive) {
              scale = 1.02;
              opacity = 1;
              translateX = 0;
            } else if (distance === 1) {
              scale = 0.96;
              opacity = 0.75;
              translateX = isPrev ? -12 : 12; // push adjacent cards outwards slightly
            } else {
              scale = 0.90;
              opacity = 0.35;
              translateX = isPrev ? -28 : 28;
            }

            return (
              <div
                key={chap.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                onClick={() => !isDragging && scrollToChapter(idx)}
                style={{
                  transform: `scale(${scale}) translateX(${translateX}px)`,
                  opacity: opacity,
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className={`flex-shrink-0 origin-center transition-all duration-500`}
              >
                {chap.type === 'primary' ? (
                  /* --- LARGE EXPERIENCE CARD --- */
                  <div className={`w-[290px] sm:w-[420px] h-[380px] sm:h-[420px] bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.02)] transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] relative`}>
                    


                    {/* Middle: Titles & Content */}
                    <div className="flex-1 flex flex-col justify-start space-y-4 pt-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {chap.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs sm:text-sm font-extrabold text-blue-600 tracking-wider uppercase">
                            {chap.role}
                          </span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span className="text-xs sm:text-sm font-bold text-slate-400">
                            {chap.location}
                          </span>
                        </div>
                        {chap.duration && (
                          <div className="text-[11px] sm:text-xs font-semibold text-slate-400 mt-1.5 tracking-wide">
                            {chap.duration}
                          </div>
                        )}
                      </div>

                      {chap.content && (
                        <div className="text-slate-500 text-xs sm:text-[15px] font-medium leading-relaxed">
                          {chap.content}
                        </div>
                      )}

                      {chap.outro && (
                        <p className="text-blue-600 font-extrabold text-xs sm:text-sm pt-1 leading-snug">
                          {chap.outro}
                        </p>
                      )}
                    </div>

                    {/* Footer indicator */}
                    <div className="border-t border-slate-50 pt-3 sm:pt-4 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>{chap.chapterNum}</span>
                      {idx === 0 && (
                        <span className="text-blue-500 flex items-center gap-1 normal-case font-bold">
                          <Sparkles size={11} /> First Chapter
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  /* --- SMALL EDITORIAL CARD --- */
                  <div className={`w-[220px] sm:w-[270px] h-[300px] sm:h-[340px] bg-slate-50/50 backdrop-blur-xs border border-slate-200/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.01)] relative overflow-hidden`}>
                    
                    <div>
                      {/* Chapter Label */}
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        {chap.chapterNum}
                      </span>
                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                        {chap.title}
                      </h4>
                    </div>

                    {/* Narrative copy */}
                    <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed font-medium">
                      {chap.content}
                    </p>

                    {/* Specific visual inserts per setback chapter */}
                    <div className="mt-auto pt-2 flex justify-center">
                      
                      {/* Doodling: Interactive drawing SVG */}
                      {chap.id === 'doodling' && (
                        <div className="w-full flex justify-center py-2 h-14 relative">
                          <svg className="w-20 h-12 text-blue-500" viewBox="0 0 100 50">
                            {/* Abstract creative escape wavy path */}
                            <motion.path
                              d="M10,25 C25,5 30,45 45,25 C60,5 65,45 80,25 C90,15 95,25 90,35 C85,45 75,35 80,25"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: activeIndex === 3 ? 1 : 0 }}
                              transition={{ duration: 1.6, ease: "easeInOut" }}
                            />
                            {/* Tiny drawing sparkles */}
                            <motion.circle
                              cx="80"
                              cy="25"
                              r="2"
                              fill="currentColor"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: activeIndex === 3 ? [0, 1, 0] : 0 }}
                              transition={{ duration: 1.2, repeat: Infinity, delay: 1 }}
                            />
                          </svg>
                        </div>
                      )}

                      {/* Food truck: Lineart Truck Illustration */}
                      {chap.id === 'foodtruck' && (
                        <div className="w-full flex justify-center py-2 h-14 opacity-80 text-blue-600/80">
                          <svg viewBox="0 0 100 60" className="w-16 h-11" stroke="currentColor" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            {/* Truck outline */}
                            <path d="M5,42 L5,18 C5,14 8,11 12,11 L68,11 C72,11 75,14 75,18 L75,32 L88,32 L95,37 L95,42 Z" />
                            {/* Service window */}
                            <rect x="22" y="18" width="22" height="11" rx="1.5" />
                            {/* Serving ledge shelf */}
                            <line x1="18" y1="29" x2="48" y2="29" />
                            {/* Wheels */}
                            <circle cx="24" cy="42" r="6" />
                            <circle cx="60" cy="42" r="6" />
                          </svg>
                        </div>
                      )}

                      {/* Sudden stop: A fractured vertical dividing marker line */}
                      {chap.id === 'setback' && (
                        <div className="w-full flex flex-col items-center py-1 h-14 relative opacity-60">
                          <div className="w-[1.5px] h-5 bg-slate-300"></div>
                          {/* Gap/Break representational spacing */}
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 my-1"></div>
                          <div className="w-[1.5px] h-5 bg-slate-300"></div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. Bottom Timeline Indicator Dots */}
      <div className="flex flex-col items-center mt-12 pb-4 max-w-full overflow-x-auto scrollbar-none px-6">
        {/* Row of Dots and Connecting Lines */}
        <div className="flex items-center">
          {chapters.map((chap, idx) => {
            const isActive = activeIndex === idx;
            return (
              <React.Fragment key={chap.id}>
                {idx > 0 && (
                  <div className={`h-[2px] w-6 sm:w-16 transition-colors duration-300 ${
                    idx <= activeIndex ? 'bg-blue-600' : 'bg-slate-200'
                  }`} />
                )}
                <button
                  onClick={() => scrollToChapter(idx)}
                  className="relative focus:outline-none flex-shrink-0 group py-2"
                  aria-label={`Scroll to ${chap.label}`}
                >
                  {/* Dot */}
                  <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isActive 
                      ? 'bg-blue-600 scale-125 ring-4 ring-blue-100' 
                      : idx < activeIndex
                        ? 'bg-blue-600'
                        : 'bg-slate-300 group-hover:bg-slate-400'
                  }`} />
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Center-aligned Title of the Active Chapter */}
        <div className="text-center mt-6 h-16 flex flex-col items-center justify-start">
          <span className="text-xs sm:text-sm font-extrabold text-blue-600 uppercase tracking-widest block transition-all duration-300">
            {chapters[activeIndex].chapterNum} — {chapters[activeIndex].title}
          </span>
          {chapters[activeIndex].role && (
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1 transition-all duration-300">
              {chapters[activeIndex].role} · {chapters[activeIndex].location}
            </span>
          )}
          {chapters[activeIndex].duration && (
            <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400/80 uppercase tracking-wider block mt-0.5 transition-all duration-300">
              {chapters[activeIndex].duration}
            </span>
          )}
        </div>
      </div>

    </section>
  );
}
