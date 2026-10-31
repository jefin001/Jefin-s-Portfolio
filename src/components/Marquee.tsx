import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full border-y border-[#E2E8F0] bg-white py-4 overflow-hidden select-none shadow-xs">
      {/* Edge gradient masks for smooth fade */}
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" 
      />

      <div className="animate-marquee flex items-center">
        {displayItems.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center shrink-0">
            <span className="text-sm md:text-base font-semibold tracking-wide text-[#0F172A] uppercase px-6 font-['Manrope']">
              {item}
            </span>
            <span className="text-[#047857] text-lg font-bold" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
