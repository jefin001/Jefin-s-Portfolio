import React from 'react';
import { Briefcase, Building, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2E8F0]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 08 / Career History
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            Hands-On Experience & Roles
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-sans">
          Proven background managing paid client budgets, driving admissions funnels, and managing multi-channel content ecosystems.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pt-12">
        {/* Central/Left hairline spine */}
        <div 
          aria-hidden="true" 
          className="absolute top-16 bottom-0 left-4 md:left-8 w-px bg-[#CBD5E1]" 
        />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-12 md:pl-20">
              {/* Timeline Node */}
              <div 
                aria-hidden="true" 
                className="absolute left-2.5 md:left-6.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#047857] border-4 border-white shadow-xs" 
              />

              {/* Experience Card */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 md:p-8 space-y-6 shadow-xs hover:shadow-md transition-shadow">
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-xs font-mono text-[#047857] font-bold uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] font-['Manrope'] mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[#64748B] mt-0.5 flex items-center gap-2">
                      <span className="text-[#0F172A] font-semibold">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#047857]" />
                        {exp.location}
                      </span>
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#475569] bg-[#F1F5F9] px-3 py-1.5 rounded-lg border border-[#E2E8F0] self-start sm:self-auto font-medium">
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {exp.description}
                </p>

                {/* Core Responsibilities */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase text-[#64748B] font-semibold tracking-wider">
                    Core Execution & Ownership:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#475569]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#047857] font-bold">·</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="text-[#047857] font-bold uppercase">Documented Wins:</span>
                  {exp.achievements.map((ach, aIdx) => (
                    <span key={aIdx} className="text-[#0F172A] font-medium bg-[#F8FAFC] px-3 py-1 rounded-md border border-[#E2E8F0]">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
