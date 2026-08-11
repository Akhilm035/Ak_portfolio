import React from 'react';

export default function CloudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Static Premium Sky Scene Background Image */}
      <img 
        src="/hero_sky_bg.png" 
        alt="Sky Background with Flight Path and Paper Airplane" 
        className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.01]"
        loading="eager"
      />

      {/* Soft Multi-Stage Bottom Transition Gradient to blend seamlessly into #f8f9fa section below */}
      <div className="absolute bottom-0 left-0 w-full h-36 md:h-48 bg-gradient-to-b from-transparent via-[#f8f9fa]/50 to-[#f8f9fa] z-10"></div>
    </div>
  );
}
