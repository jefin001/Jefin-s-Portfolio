import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full border-y border-white/10 bg-[#161316]/80 backdrop-blur-md py-4 overflow-hidden select-none">
      {/* Edge gradient masks for smooth fade */}
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#161316] to-transparent z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#161316] to-transparent z-10 pointer-events-none" 
      />

      <div className="animate-marquee flex items-center">
        {displayItems.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center shrink-0">
            <span className="text-sm md:text-base font-semibold tracking-wide uppercase px-6 text-white font-['Plus_Jakarta_Sans',sans-serif]">
              {item}
            </span>
            <span className="text-[#FF6D29] text-lg font-bold" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
