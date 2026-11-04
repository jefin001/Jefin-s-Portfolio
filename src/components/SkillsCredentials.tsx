import React from 'react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, ArrowUpRight, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const SkillsCredentials: React.FC = () => {
  return (
    <section id="skills-credentials" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background warm light leak */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF6D29]/10 rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6D29] font-semibold">
            Section 09 / Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2 font-['Manrope']">
            Skills, Modern Tools & Certified Knowledge
          </h2>
        </div>
        <p className="text-sm text-[#BABABA] max-w-md font-sans">
          Curated marketing stack balanced between technical advertising platforms, developer AI infrastructure, and commercial business education.
        </p>
      </div>

      {/* Two Balanced Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        {/* Column 1: Grouped Practical Skills (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-white">
              Operational Competencies & Stack
            </h3>
            <span className="text-xs font-mono text-[#FF6D29] font-bold">PRACTICAL APPLICATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-3xl glass-card glass-card-hover p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-['Manrope'] flex items-center gap-2">
                    {cat.name.includes('Tech') && <Cpu className="w-4 h-4 text-white" />}
                    <span>{cat.name}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-[#BABABA]">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="text-xs flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
                    >
                      <span className="text-white font-medium">
                        {skill}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-white/70 tracking-wider">
                        PROFICIENT
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Credentials & Academic Foundation (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-white">
              Verified Certifications & Degree
            </h3>
            <span className="text-xs font-mono text-[#FF6D29] font-bold">AUTHENTICATED</span>
          </div>

          {/* Certifications List */}
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-3xl glass-card glass-card-hover p-6 space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white font-['Manrope'] leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#FF6D29] font-medium">
                      {cert.issuer} · Issued {cert.year}
                    </p>
                  </div>
                  <Award className="w-5 h-5 text-[#FF6D29] shrink-0 mt-0.5" />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-[#BABABA] font-mono">
                  {cert.skills.map((sk, skIdx) => (
                    <span key={skIdx}>
                      {sk}{skIdx < cert.skills.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Academic Foundation Box with Warm Ambient Hue */}
            <div className="rounded-3xl bg-gradient-to-br from-[#453027]/50 via-[#1F171A] to-[#120F12] border border-white/15 p-7 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#FF6D29] font-bold uppercase">Academic Foundation</span>
                <GraduationCap className="w-5 h-5 text-[#FF6D29]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-['Manrope']">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs font-semibold text-[#BABABA] mt-0.5">
                  {EDUCATION.institution} · {EDUCATION.location}
                </p>
                <p className="text-xs text-[#BABABA] mt-2 leading-relaxed">
                  {EDUCATION.focus}. Provides analytical grounding in business viability, margin analysis, and customer acquisition payback periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
