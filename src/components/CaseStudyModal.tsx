import React, { useEffect } from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles, BookOpen, Layers, BarChart2 } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';
import { CampaignVisualAsset } from './CampaignVisualAsset';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E2E8F0] p-6 md:p-10 shadow-2xl text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Close Button */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B] mb-2">
              <span className="text-[#047857] font-bold">{caseStudy.client}</span>
              <span aria-hidden="true">·</span>
              <span>{caseStudy.industry}</span>
              <span aria-hidden="true">·</span>
              <span>{caseStudy.timeframe}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold font-['Manrope'] leading-tight text-[#0F172A]">
              {caseStudy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Overview & Role */}
        <div className="py-6 border-b border-[#E2E8F0] grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <span className="text-xs font-mono uppercase text-[#64748B]">Role & Attribution:</span>
            <p className="font-semibold text-[#0F172A] mt-1">{caseStudy.role}</p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#64748B]">Ad & Distribution Channels:</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {caseStudy.adChannels.map((ch, idx) => (
                <span key={idx} className="text-xs font-mono text-[#047857] font-semibold">
                  {ch}{idx < caseStudy.adChannels.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2 & 3. Challenge & Objective */}
        <div className="py-6 border-b border-[#E2E8F0] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#64748B]">
              01 // The Marketing Challenge
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#047857]">
              02 // Targeted Objective
            </h3>
            <p className="text-sm text-[#0F172A] font-medium leading-relaxed">
              {caseStudy.objective}
            </p>
          </div>
        </div>

        {/* 4. Strategy & Reasoning */}
        <div className="py-6 border-b border-[#E2E8F0] space-y-4">
          <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A]">
            03 // Strategic Reasoning & Audience Psychology
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {caseStudy.strategy.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] flex items-start gap-2.5">
                <span className="font-mono text-[#047857] font-bold">{idx + 1}.</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Personal Execution */}
        <div className="py-6 border-b border-[#E2E8F0] space-y-4">
          <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A]">
            04 // Personal Hands-On Execution
          </h3>
          <div className="space-y-3">
            {caseStudy.execution.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-sm font-bold text-[#0F172A] font-['Manrope']">{item.title}</h4>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Visual Campaign Mockup Frame */}
        <div className="py-6 border-b border-[#E2E8F0] space-y-4">
          <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#047857]">
            05 // Campaign Artifact & Deliverable Preview
          </h3>
          <CampaignVisualAsset caseStudyId={caseStudy.id} />
        </div>

        {/* 7. Documented Results & Verification Context */}
        <div className="py-6 border-b border-[#E2E8F0] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A]">
              06 // Verified Outcomes & Attributed Benchmarks
            </h3>
            <span className="text-[11px] font-mono text-[#047857] font-bold">DOCUMENTED IN CAMPAIGN REPORT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <p className="text-2xl md:text-3xl font-extrabold text-[#047857] font-mono tabular-nums">
                  {res.metric}
                </p>
                <p className="text-xs font-semibold text-[#0F172A]">{res.label}</p>
                <p className="text-[11px] text-[#64748B] pt-1">{res.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Key Learnings: What Worked vs What Didn't */}
        <div className="pt-6 space-y-3">
          <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#64748B]">
            07 // Critical Learnings & Iterations
          </h3>
          <ul className="space-y-2">
            {caseStudy.keyLearnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
