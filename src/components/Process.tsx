import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2E8F0]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 07 / Operating System
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            How I Run Campaigns
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-sans">
          A disciplined 5-stage framework designed to protect ad capital and systematically isolate profitable customer acquisition channels.
        </p>
      </div>

      {/* Process Steps */}
      <div className="divide-y divide-[#E2E8F0]">
        {WORK_PROCESS.map((step) => (
          <div
            key={step.step}
            className="group py-10 transition-colors hover:bg-white px-4 md:px-6 rounded-2xl flex flex-col lg:flex-row lg:items-start justify-between gap-8 hover:shadow-xs"
          >
            {/* Step Number & Title */}
            <div className="lg:w-1/3 flex items-start gap-4">
              <span className="text-2xl md:text-3xl font-extrabold font-mono text-[#047857]">
                {step.step}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] font-['Manrope'] group-hover:text-[#047857] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-[#64748B] mt-1">
                  Phase {step.step} of 05
                </p>
              </div>
            </div>

            {/* Step Narrative & Headline */}
            <div className="lg:w-2/3 space-y-2">
              <h4 className="text-base md:text-lg font-semibold text-[#0F172A]">
                {step.headline}
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
