import React from 'react';

export default function CloudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* SVG Definitions for Soft Minimal Lighting */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <radialGradient id="minimal-cloud-grad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e3f2fd" stopOpacity="0.2" />
          </radialGradient>

          <filter id="soft-minimal-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
      </svg>

      {/* Single Slow Elegant Cloud Layer (Reduced Count) */}
      <div className="absolute top-[6%] left-0 w-[200%] h-full flex opacity-40 animate-cloud-slow">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-minimal-blur)">
              {/* Only 1 Elegant Organic Cloud Formation */}
              <g fill="url(#minimal-cloud-grad)">
                <circle cx="750" cy="180" r="140" />
                <circle cx="870" cy="160" r="110" />
                <circle cx="650" cy="190" r="95" />
                <rect x="610" y="180" width="300" height="80" rx="40" />
              </g>
            </g>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-minimal-blur)">
              {/* Seamless Clone */}
              <g fill="url(#minimal-cloud-grad)">
                <circle cx="750" cy="180" r="140" />
                <circle cx="870" cy="160" r="110" />
                <circle cx="650" cy="190" r="95" />
                <rect x="610" y="180" width="300" height="80" rx="40" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
