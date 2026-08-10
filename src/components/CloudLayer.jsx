import React from 'react';

export default function CloudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 
        SVG Definitions for Organic Volumetric Cloud Lighting & Shading
      */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Cloud Radial Shading: Top Highlight to Ambient Blue-White Underside */}
          <radialGradient id="cloud-grad-1" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e3f2fd" stopOpacity="0.6" />
          </radialGradient>

          <radialGradient id="cloud-grad-2" cx="40%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="70%" stopColor="#f0f7fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9ecfd" stopOpacity="0.7" />
          </radialGradient>

          <linearGradient id="mist-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          {/* Soft Fluffy Gaussian Blur Filters */}
          <filter id="soft-blur-bg" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>

          <filter id="soft-blur-mid" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>

          <filter id="soft-blur-fg" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
      </svg>

      {/* Layer 1: High Atmosphere Soft Fluffy Drifts (Slowest - 80s) */}
      <div className="absolute top-0 left-0 w-[200%] h-full flex opacity-60 animate-cloud-slow">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-blur-bg)">
              {/* Cloud Cluster A */}
              <g fill="url(#cloud-grad-1)">
                <circle cx="280" cy="160" r="140" />
                <circle cx="390" cy="140" r="110" />
                <circle cx="190" cy="180" r="100" />
                <circle cx="480" cy="180" r="90" />
                <rect x="150" y="160" width="380" height="90" rx="45" />
              </g>

              {/* Cloud Cluster B */}
              <g fill="url(#cloud-grad-2)">
                <circle cx="950" cy="150" r="160" />
                <circle cx="1090" cy="170" r="120" />
                <circle cx="820" cy="180" r="110" />
                <rect x="780" y="170" width="350" height="90" rx="45" />
              </g>
            </g>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-blur-bg)">
              {/* Seamless Clone Cluster A */}
              <g fill="url(#cloud-grad-1)">
                <circle cx="280" cy="160" r="140" />
                <circle cx="390" cy="140" r="110" />
                <circle cx="190" cy="180" r="100" />
                <circle cx="480" cy="180" r="90" />
                <rect x="150" y="160" width="380" height="90" rx="45" />
              </g>

              {/* Seamless Clone Cluster B */}
              <g fill="url(#cloud-grad-2)">
                <circle cx="950" cy="150" r="160" />
                <circle cx="1090" cy="170" r="120" />
                <circle cx="820" cy="180" r="110" />
                <rect x="780" y="170" width="350" height="90" rx="45" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Layer 2: Midground Realistic Cumulus Billows (Medium Speed - 55s) */}
      <div className="absolute top-[8%] left-0 w-[200%] h-full flex opacity-75 animate-cloud-medium">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-blur-mid)">
              {/* Rich Cumulus Formation Left */}
              <g fill="url(#cloud-grad-2)">
                <circle cx="550" cy="220" r="130" />
                <circle cx="660" cy="190" r="150" />
                <circle cx="780" cy="220" r="120" />
                <circle cx="440" cy="250" r="95" />
                <rect x="420" y="220" width="410" height="100" rx="50" />
              </g>

              {/* Rich Cumulus Formation Right */}
              <g fill="url(#cloud-grad-1)">
                <circle cx="1250" cy="260" r="140" />
                <circle cx="1370" cy="230" r="120" />
                <circle cx="1140" cy="280" r="100" />
                <rect x="1100" y="260" width="320" height="90" rx="45" />
              </g>
            </g>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-blur-mid)">
              {/* Seamless Clone Left */}
              <g fill="url(#cloud-grad-2)">
                <circle cx="550" cy="220" r="130" />
                <circle cx="660" cy="190" r="150" />
                <circle cx="780" cy="220" r="120" />
                <circle cx="440" cy="250" r="95" />
                <rect x="420" y="220" width="410" height="100" rx="50" />
              </g>

              {/* Seamless Clone Right */}
              <g fill="url(#cloud-grad-1)">
                <circle cx="1250" cy="260" r="140" />
                <circle cx="1370" cy="230" r="120" />
                <circle cx="1140" cy="280" r="100" />
                <rect x="1100" y="260" width="320" height="90" rx="45" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Layer 3: Foreground Soft Fluffy Cloud Ledge (Faster - 38s) */}
      <div className="absolute top-[20%] left-0 w-[200%] h-full flex opacity-85 animate-cloud-fast">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-blur-fg)">
              <g fill="url(#cloud-grad-2)">
                <circle cx="120" cy="340" r="110" />
                <circle cx="220" cy="310" r="135" />
                <circle cx="340" cy="330" r="115" />
                <rect x="80" y="330" width="300" height="80" rx="40" />
              </g>

              <g fill="url(#cloud-grad-1)">
                <circle cx="850" cy="360" r="120" />
                <circle cx="960" cy="330" r="140" />
                <circle cx="1070" cy="350" r="110" />
                <rect x="800" y="350" width="310" height="80" rx="40" />
              </g>
            </g>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#soft-blur-fg)">
              <g fill="url(#cloud-grad-2)">
                <circle cx="120" cy="340" r="110" />
                <circle cx="220" cy="310" r="135" />
                <circle cx="340" cy="330" r="115" />
                <rect x="80" y="330" width="300" height="80" rx="40" />
              </g>

              <g fill="url(#cloud-grad-1)">
                <circle cx="850" cy="360" r="120" />
                <circle cx="960" cy="330" r="140" />
                <circle cx="1070" cy="350" r="110" />
                <rect x="800" y="350" width="310" height="80" rx="40" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
