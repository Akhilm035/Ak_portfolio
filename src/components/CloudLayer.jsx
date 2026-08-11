import React from 'react';

export default function CloudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* SVG Definitions for Realistic Volumetric Cloud Gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <radialGradient id="sun-cumulus-light" cx="35%" cy="20%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.92" />
            <stop offset="75%" stopColor="#e3f2fd" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#cde4f7" stopOpacity="0.4" />
          </radialGradient>

          <radialGradient id="soft-wispy-light" cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#f0f7ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d9ebfc" stopOpacity="0.1" />
          </radialGradient>

          <filter id="cloud-gaussian-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter id="horizon-gaussian-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
      </svg>

      {/* 1. Top-Left Radiant Sunlight Lens Flare */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-radial from-white via-amber-100/35 to-transparent blur-3xl opacity-95 pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* 2. Flying Birds Silhouette Accent (Matching Reference Screenshot) */}
      <div className="absolute top-[38%] right-[28%] z-10 opacity-70">
        <svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 12 Q 10 4 18 12 Q 26 4 34 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M 26 22 Q 32 16 38 22 Q 44 16 50 22" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3. Layer 1: Towering Right Cumulus Cloud Wall (Animated Layer) */}
      <div className="absolute -right-[6%] sm:-right-[3%] bottom-0 w-[550px] sm:w-[700px] lg:w-[880px] h-[85%] opacity-95 animate-cloud-float pointer-events-none z-10">
        <svg className="w-full h-full" viewBox="0 0 880 800" fill="none" preserveAspectRatio="none">
          <g filter="url(#cloud-gaussian-blur)" fill="url(#sun-cumulus-light)">
            {/* Towering Fluffy Cloud Billows */}
            <circle cx="680" cy="550" r="230" />
            <circle cx="600" cy="390" r="200" />
            <circle cx="700" cy="300" r="170" />
            <circle cx="760" cy="200" r="140" />
            <circle cx="480" cy="520" r="170" />
            <circle cx="370" cy="630" r="190" />
            <rect x="250" y="420" width="580" height="360" rx="110" />
          </g>
        </svg>
      </div>

      {/* 4. Layer 2: Horizon Soft Cloud Sea (Animated Layer) */}
      <div className="absolute bottom-0 left-0 w-[150%] h-[48%] opacity-90 animate-cloud-drift pointer-events-none z-10">
        <svg className="w-full h-full" viewBox="0 0 1500 480" fill="none" preserveAspectRatio="none">
          <g filter="url(#horizon-gaussian-blur)" fill="url(#sun-cumulus-light)">
            <ellipse cx="200" cy="380" rx="360" ry="150" />
            <ellipse cx="650" cy="410" rx="420" ry="140" />
            <ellipse cx="1150" cy="390" rx="450" ry="160" />
          </g>
        </svg>
      </div>

      {/* 5. Soft Bottom Transition Gradient to off-white section below */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-white/50 to-[#f8f9fa] pointer-events-none z-20"></div>
    </div>
  );
}
