import React from 'react';

export default function CloudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Layer 1: High Altitude / Background Clouds (Slowest) */}
      <div className="absolute top-0 left-0 w-[200%] h-full flex opacity-35 animate-cloud-slow">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#blur-cloud-1)">
              <ellipse cx="250" cy="180" rx="320" ry="110" fill="white" fillOpacity="0.85" />
              <ellipse cx="680" cy="140" rx="410" ry="130" fill="white" fillOpacity="0.75" />
              <ellipse cx="1150" cy="220" rx="350" ry="120" fill="white" fillOpacity="0.8" />
              <ellipse cx="450" cy="240" rx="280" ry="90" fill="white" fillOpacity="0.9" />
            </g>
            <defs>
              <filter id="blur-cloud-1" x="-200" y="-100" width="1840" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="40" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#blur-cloud-1-clone)">
              <ellipse cx="250" cy="180" rx="320" ry="110" fill="white" fillOpacity="0.85" />
              <ellipse cx="680" cy="140" rx="410" ry="130" fill="white" fillOpacity="0.75" />
              <ellipse cx="1150" cy="220" rx="350" ry="120" fill="white" fillOpacity="0.8" />
              <ellipse cx="450" cy="240" rx="280" ry="90" fill="white" fillOpacity="0.9" />
            </g>
            <defs>
              <filter id="blur-cloud-1-clone" x="-200" y="-100" width="1840" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="40" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Layer 2: Mid-Level Clouds (Medium Speed) */}
      <div className="absolute top-[10%] left-0 w-[200%] h-full flex opacity-50 animate-cloud-medium">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#blur-cloud-2)">
              <ellipse cx="150" cy="280" rx="260" ry="95" fill="white" fillOpacity="0.9" />
              <ellipse cx="850" cy="260" rx="340" ry="115" fill="white" fillOpacity="0.85" />
              <ellipse cx="1300" cy="190" rx="290" ry="100" fill="white" fillOpacity="0.8" />
            </g>
            <defs>
              <filter id="blur-cloud-2" x="-200" y="-100" width="1840" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="30" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <g filter="url(#blur-cloud-2-clone)">
              <ellipse cx="150" cy="280" rx="260" ry="95" fill="white" fillOpacity="0.9" />
              <ellipse cx="850" cy="260" rx="340" ry="115" fill="white" fillOpacity="0.85" />
              <ellipse cx="1300" cy="190" rx="290" ry="100" fill="white" fillOpacity="0.8" />
            </g>
            <defs>
              <filter id="blur-cloud-2-clone" x="-200" y="-100" width="1840" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="30" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Layer 3: Lower Horizon Clouds & Mist (Faster Drift) */}
      <div className="absolute bottom-0 left-0 w-[200%] h-[70%] flex opacity-60 animate-cloud-fast">
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none">
            <g filter="url(#blur-cloud-3)">
              <ellipse cx="400" cy="350" rx="450" ry="120" fill="white" fillOpacity="0.95" />
              <ellipse cx="1050" cy="380" rx="420" ry="130" fill="white" fillOpacity="0.9" />
              <ellipse cx="100" cy="400" rx="300" ry="110" fill="white" fillOpacity="0.85" />
            </g>
            <defs>
              <filter id="blur-cloud-3" x="-200" y="-100" width="1840" height="700" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="w-1/2 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none">
            <g filter="url(#blur-cloud-3-clone)">
              <ellipse cx="400" cy="350" rx="450" ry="120" fill="white" fillOpacity="0.95" />
              <ellipse cx="1050" cy="380" rx="420" ry="130" fill="white" fillOpacity="0.9" />
              <ellipse cx="100" cy="400" rx="300" ry="110" fill="white" fillOpacity="0.85" />
            </g>
            <defs>
              <filter id="blur-cloud-3-clone" x="-200" y="-100" width="1840" height="700" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
