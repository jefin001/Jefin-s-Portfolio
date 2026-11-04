import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6D29] font-semibold">
            Section 07 / Operating System
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2 font-['Manrope']">
            How I Run Campaigns
          </h2>
        </div>
        <p className="text-sm text-[#BABABA] max-w-md font-sans">
          A disciplined 5-stage framework designed to protect ad capital and systematically isolate profitable customer acquisition channels.
        </p>
      </div>

      {/* Process Steps with Glass Cards */}
      <div className="divide-y divide-white/10">
        {WORK_PROCESS.map((step) => (
          <div
            key={step.step}
            className="group py-10 transition-colors hover:bg-white/[0.03] px-4 md:px-6 rounded-3xl flex flex-col lg:flex-row lg:items-start justify-between gap-8"
          >
            {/* Step Number & Title */}
            <div className="lg:w-1/3 flex items-start gap-4">
              <span className="text-2xl md:text-3xl font-extrabold font-mono text-[#FF6D29]">
                {step.step}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-['Manrope'] group-hover:text-[#FF6D29] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-[#BABABA] mt-1">
                  Phase {step.step} of 05
                </p>
              </div>
            </div>

            {/* Step Narrative & Headline */}
            <div className="lg:w-2/3 space-y-2">
              <h4 className="text-base md:text-lg font-semibold text-white">
                {step.headline}
              </h4>
              <p className="text-sm text-[#BABABA] leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
