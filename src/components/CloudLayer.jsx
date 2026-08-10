import React from 'react';

export default function CloudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Sunlight Top Highlight to Soft Ambient Underside */}
          <radialGradient id="natural-cloud-light" cx="45%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#e1f0fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cde4f7" stopOpacity="0.1" />
          </radialGradient>

          <radialGradient id="natural-cloud-light-2" cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#dbeffd" stopOpacity="0.15" />
          </radialGradient>

          {/* Realistic Feathered Blur Filter */}
          <filter id="natural-feather-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="24" />
          </filter>

          <filter id="natural-wispy-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="35" />
          </filter>
        </defs>
      </svg>

      {/* 
        Single Ultra-Natural Floating Cloud Layer
        Looping seamlessly with GPU hardware acceleration
      */}
      <div className="absolute top-[8%] left-0 w-[200%] h-full flex opacity-50 animate-cloud-slow">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            {/* Primary Natural Organic Cloud Formation */}
            <g filter="url(#natural-feather-blur)">
              {/* Organic Multi-lobe Bezier Silhouette */}
              <path
                d="M 620,180 
                   C 640,130 700,95 760,115 
                   C 800,70 880,60 940,100 
                   C 990,75 1060,90 1100,130 
                   C 1150,120 1210,145 1230,190 
                   C 1270,210 1290,260 1260,300 
                   C 1230,335 1160,345 1100,340 
                   C 1020,355 820,355 720,340 
                   C 650,335 600,295 610,250 
                   C 590,215 600,195 620,180 Z"
                fill="url(#natural-cloud-light)"
              />

              {/* Natural Wispy Trail Left */}
              <path
                d="M 520,230 C 560,200 610,210 640,240 C 620,270 560,280 510,260 Z"
                fill="url(#natural-cloud-light-2)"
              />

              {/* Natural Wispy Trail Right */}
              <path
                d="M 1210,240 C 1260,220 1320,235 1350,265 C 1330,290 1270,300 1210,280 Z"
                fill="url(#natural-cloud-light-2)"
              />
            </g>

            {/* Soft Ambient Soft Mist Overlay underneath cloud */}
            <g filter="url(#natural-wispy-blur)" opacity="0.6">
              <ellipse cx="920" cy="240" rx="340" ry="110" fill="url(#natural-cloud-light-2)" />
            </g>
          </svg>
        </div>

        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            {/* Seamless Clone */}
            <g filter="url(#natural-feather-blur)">
              <path
                d="M 620,180 
                   C 640,130 700,95 760,115 
                   C 800,70 880,60 940,100 
                   C 990,75 1060,90 1100,130 
                   C 1150,120 1210,145 1230,190 
                   C 1270,210 1290,260 1260,300 
                   C 1230,335 1160,345 1100,340 
                   C 1020,355 820,355 720,340 
                   C 650,335 600,295 610,250 
                   C 590,215 600,195 620,180 Z"
                fill="url(#natural-cloud-light)"
              />
              <path
                d="M 520,230 C 560,200 610,210 640,240 C 620,270 560,280 510,260 Z"
                fill="url(#natural-cloud-light-2)"
              />
              <path
                d="M 1210,240 C 1260,220 1320,235 1350,265 C 1330,290 1270,300 1210,280 Z"
                fill="url(#natural-cloud-light-2)"
              />
            </g>
            <g filter="url(#natural-wispy-blur)" opacity="0.6">
              <ellipse cx="920" cy="240" rx="340" ry="110" fill="url(#natural-cloud-light-2)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
