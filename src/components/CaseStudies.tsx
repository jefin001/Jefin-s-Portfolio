import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Lightbulb, Compass, FileCheck2 } from 'lucide-react';
import { CASE_STUDIES, CONCEPTUAL_PROJECTS } from '../data/portfolioData';
import { CaseStudy } from '../types/portfolio';
import { CampaignVisualAsset } from './CampaignVisualAsset';

interface CaseStudiesProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<'verified' | 'conceptual'>('verified');

  return (
    <section id="case-studies" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 06 / Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            Case Studies & Proof of Work
          </h2>
        </div>

        {/* Tab Switcher: Verified Work vs Conceptual Frameworks */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('verified')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'verified'
                ? 'bg-white text-[#0F172A] shadow-xs border border-[#CBD5E1]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Verified Client Work ({CASE_STUDIES.length})
          </button>
          <button
            onClick={() => setActiveTab('conceptual')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'conceptual'
                ? 'bg-white text-[#0F172A] shadow-xs border border-[#CBD5E1]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            1-Week Sprints (Conceptual) ({CONCEPTUAL_PROJECTS.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Verified Client Work Showcase */}
      {activeTab === 'verified' && (
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="group rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#047857]/50 p-6 md:p-10 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Case Narrative & Strategy (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
                    <span className="text-[#047857] font-bold">CASE 0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#0F172A] font-semibold">{study.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.timeframe}</span>
                  </div>

                  {/* Title & Challenge */}
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] font-['Manrope'] group-hover:text-[#047857] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Strategy Snippet */}
                  <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                    <p className="text-xs font-mono uppercase text-[#64748B] font-semibold">Core Approach:</p>
                    <ul className="space-y-1.5 text-xs text-[#475569]">
                      {study.strategy.slice(0, 2).map((st, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-[#047857] font-bold">·</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E2E8F0]">
                    {study.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <p className="text-xl md:text-2xl font-bold text-[#047857] font-mono tabular-nums">
                          {res.metric}
                        </p>
                        <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">{res.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Read Complete 8-Point Breakdown</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Preview Asset (5 cols) */}
                <div className="lg:col-span-5">
                  <CampaignVisualAsset caseStudyId={study.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: 1-Week Self-Initiated Conceptual Sprints */}
      {activeTab === 'conceptual' && (
        <div className="space-y-8">
          <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-xs text-[#475569] flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0F172A] font-mono uppercase">
                Self-Initiated 1-Week Strategic Sprints
              </p>
              <p className="mt-1 leading-relaxed">
                These playbooks demonstrate my strategic framework for fast validation in new verticals. They are explicitly conceptual blueprints executed within a 7-day turnaround to exhibit rapid campaign architecture, creative messaging angles, and tracking design.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONCEPTUAL_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#047857]/50 p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#047857] font-bold">CONCEPT 0{idx + 1}</span>
                    <span>1-WEEK SPRINT</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-['Manrope'] leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-[#047857] font-semibold mt-1">{proj.clientConcept}</p>
                    <p className="text-xs text-[#475569] mt-3 leading-relaxed">
                      {proj.strategicObjective}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] space-y-2">
                    <p className="text-[11px] font-mono uppercase text-[#64748B] font-semibold">Syllabus & Deliverables:</p>
                    <p className="text-xs text-[#0F172A] font-mono leading-relaxed bg-[#F8FAFC] p-2.5 rounded border border-[#E2E8F0]">
                      {proj.oneWeekSyllabus}
                    </p>
                    <div className="space-y-1 pt-1">
                      {proj.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#475569]">
                          <span className="text-[#047857] font-bold">✓</span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                  <span>Ready for Execution</span>
                  <span className="text-[#047857] font-bold">Full Deck Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
