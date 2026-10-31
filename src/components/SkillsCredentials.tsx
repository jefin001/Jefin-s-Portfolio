import React from 'react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const SkillsCredentials: React.FC = () => {
  return (
    <section id="skills-credentials" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2E8F0]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 09 / Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            Skills, Tools & Certified Knowledge
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-sans">
          Curated marketing stack balanced between technical advertising platforms, analytics architecture, and commercial business education.
        </p>
      </div>

      {/* Two Balanced Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        {/* Column 1: Grouped Practical Skills (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A]">
              Operational Marketing Competencies
            </h3>
            <span className="text-xs font-mono text-[#047857] font-bold">PRACTICAL APPLICATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#E2E8F0] p-5 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#0F172A] font-['Manrope']">
                    {cat.name}
                  </h4>
                  <span className="text-[11px] font-mono text-[#64748B]">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0]">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="text-xs text-[#475569] flex items-center justify-between py-1 border-b border-[#E2E8F0]/50 last:border-0"
                    >
                      <span>{skill}</span>
                      <span className="text-[#047857] text-[10px] font-mono font-bold">PROFICIENT</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Credentials & Academic Foundation (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A]">
              Verified Certifications & Degree
            </h3>
            <span className="text-xs font-mono text-[#047857] font-bold">AUTHENTICATED</span>
          </div>

          {/* Certifications List */}
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#E2E8F0] p-5 space-y-2 hover:border-[#047857]/40 transition-colors shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#0F172A] font-['Manrope'] leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#047857] font-semibold">
                      {cert.issuer} · Issued {cert.year}
                    </p>
                  </div>
                  <Award className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-[#64748B] font-mono">
                  {cert.skills.map((sk, skIdx) => (
                    <span key={skIdx}>
                      {sk}{skIdx < cert.skills.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Academic Foundation Box */}
            <div className="rounded-xl bg-gradient-to-br from-white via-[#F0FDF4] to-[#ECFDF5] border border-emerald-200 p-6 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#047857] font-bold uppercase">Academic Foundation</span>
                <GraduationCap className="w-5 h-5 text-[#047857]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A] font-['Manrope']">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs font-semibold text-[#475569] mt-0.5">
                  {EDUCATION.institution} · {EDUCATION.location}
                </p>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
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
