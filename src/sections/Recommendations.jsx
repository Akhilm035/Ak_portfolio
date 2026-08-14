import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Play, X, Volume2, VolumeX, RotateCcw } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    type: 'text',
    quote: "Akhil was a phenomenal collaborator during our time at Crenovates. He brings a unique blend of user-centered product thinking and clean, precise visual layout execution to every design challenge.",
    name: "Ashfaq",
    role: "Co-founder & Lead Dev at Crenovates",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    type: 'video',
    name: "Pru Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-cafe-43152-large.mp4" // High quality aesthetic video loop
  },
  {
    id: 3,
    type: 'text',
    quote: "Working with Akhil at Livetronics has been a masterclass in collaboration. He spearheaded the design of Wocul, transforming complex AI workflows into an intuitive and seamless work-management experience.",
    name: "Vijesh",
    role: "Co-founder & CTO at Livetronics.AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    type: 'text',
    quote: "Akhil's ability to bridge design and code is outstanding. He delivered high-fidelity prototypes that worked flawlessly, speeding up our design-to-code workflow and saving us weeks of development time.",
    name: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Recommendations() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 45, stiffness: 180 });

  useEffect(() => {
    const updateConstraints = () => {
      if (!containerRef.current || !sliderRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const sliderWidth = sliderRef.current.scrollWidth;
      const maxDrag = sliderWidth - containerWidth;
      
      // Padding bounds
      setDragConstraints({
        left: -maxDrag - 40,
        right: 40
      });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    
    // Initial delay to ensure correct rendering calculations
    const timer = setTimeout(updateConstraints, 500);

    return () => {
      window.removeEventListener('resize', updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  const handleWheel = useCallback((e) => {
    if (!containerRef.current) return;
    
    // Check if mouse is hovering over the slider before intercepting scroll
    const rect = containerRef.current.getBoundingClientRect();
    const isHovering = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );

    if (isHovering) {
      e.preventDefault();
      const scrollSensitivity = 1.2;
      const targetX = x.get() - (e.deltaY * scrollSensitivity);
      
      // Clamp bounds
      const minX = dragConstraints.left;
      const maxX = dragConstraints.right;
      x.set(Math.max(minX, Math.min(maxX, targetX)));
    }
  }, [dragConstraints, x]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <section id="recommendations" className="py-20 sm:py-28 bg-[#f8f9fa] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center space-x-2 text-blue-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase justify-center mb-4">
          <span className="text-blue-600 text-sm">✦</span>
          <span>RECOMMENDATIONS</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4 lowercase">
          what people say about me
        </h2>

        {/* Subtext */}
        <p className="max-w-xl mx-auto text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
          A few words from people I've designed with, shipped alongside, and problem-solved next to.
        </p>
      </div>

      {/* Horizontal Slider Area */}
      <div 
        ref={containerRef}
        className="w-full cursor-grab active:cursor-grabbing select-none px-6 sm:px-12"
      >
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.15}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
          style={{ x: springX }}
          className="flex space-x-6 w-max py-4 pr-12"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 origin-center transition-all duration-500"
            >
              {t.type === 'video' ? (
                /* --- FULL BLEED VIDEO CARD --- */
                <div 
                  className="w-[280px] sm:w-[350px] h-[360px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-[0_12px_32px_rgba(0,0,0,0.03)] border border-slate-100 group cursor-pointer"
                  onClick={() => !isDragging && setActiveVideo(t)}
                >
                  {/* Card Cover Photo */}
                  <img 
                    src={t.coverImage} 
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300"
                    >
                      <Play className="w-5 h-5 text-slate-800 ml-1 group-hover:text-white fill-current transition-colors" />
                    </motion.div>
                  </div>

                  {/* Top-Left Avatar Bubble */}
                  <div className="absolute top-5 left-5 w-9 h-9 rounded-full border-2 border-white/80 overflow-hidden shadow-md">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Bottom details block */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-signature text-3xl sm:text-4xl leading-none text-white/95 drop-shadow">
                      {t.name}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-wider mt-1.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              ) : (
                /* --- MINIMALIST QUOTE CARD --- */
                <div className="w-[280px] sm:w-[350px] h-[360px] sm:h-[400px] bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500 relative">
                  {/* Top Quote Avatar */}
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Quote Body */}
                  <div className="flex-1 flex items-center my-4">
                    <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Bottom signature and role */}
                  <div className="border-t border-slate-50 pt-4">
                    <p className="font-signature text-3xl sm:text-4xl text-slate-800 leading-none">
                      {t.name}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Premium Video Testimonial Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Header info */}
            <div className="absolute top-4 left-4 z-10 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={activeVideo.avatar} alt={activeVideo.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-black">{activeVideo.name}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video Player */}
            <div className="aspect-[3/4] bg-neutral-900 flex items-center justify-center relative">
              <video
                src={activeVideo.videoUrl}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
                id="testimonial-video"
              />
              
              {/* Media Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    const vid = document.getElementById('testimonial-video');
                    if (vid) vid.currentTime = 0;
                  }}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Replay"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
