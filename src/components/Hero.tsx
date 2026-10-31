import React from 'react';
import { ArrowDown, ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Subtle background ambient mesh */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      {/* Top Metadata Strip - Clean unboxed text with separators */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-[#64748B] mb-8 font-mono">
        <span className="text-[#047857] font-semibold tracking-wide">2026 Edition</span>
        <span aria-hidden="true">·</span>
        <span>{PERSONAL_INFO.location}</span>
        <span aria-hidden="true">·</span>
        <span>{PERSONAL_INFO.experienceDuration}</span>
        <span aria-hidden="true">·</span>
        <span className="text-[#0F172A] font-medium">{PERSONAL_INFO.availability}</span>
      </div>

      {/* Main Hero Core */}
      <div className="space-y-8 max-w-5xl">
        <div className="space-y-3">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#047857]">
            Jefin K. — End-to-End Growth Operator
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08] text-balance font-['Manrope']">
            Turning Marketing Intent <br className="hidden sm:inline" />
            Into <span className="text-[#047857] underline decoration-[#A7F3D0] decoration-wavy underline-offset-8">Measurable Demand</span>.
          </h1>
        </div>

        <p className="text-lg md:text-xl text-[#475569] max-w-3xl leading-relaxed">
          I bridge the gap between creative social storytelling and quantitative advertising. Specializing in{' '}
          <strong className="text-[#0F172A] font-semibold">Social Media Marketing</strong> and{' '}
          <strong className="text-[#0F172A] font-semibold">Performance Marketing</strong> across Meta Ads, Google Ads, and full-funnel conversion optimization.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onExploreWork}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <span>Explore Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs rounded-lg transition-colors cursor-pointer"
          >
            <span>Discuss Opportunities</span>
            <ArrowUpRight className="w-4 h-4 text-[#047857]" />
          </button>
        </div>
      </div>

      {/* Hero Bottom Strip - Key Pillars Row with claim-to-proof integrity */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-[#E2E8F0] mt-12 text-sm">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
          <div className="p-2 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-semibold text-[#0F172A]">Performance Media</h2>
            <p className="text-xs text-[#64748B] mt-0.5">Meta & Google Ads, lead funnels, and rigorous conversion tracking.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
          <div className="p-2 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-semibold text-[#0F172A]">Content & Organic Growth</h2>
            <p className="text-xs text-[#64748B] mt-0.5">Platform-native video hooks, brand tone, and community interaction.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
          <div className="p-2 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-semibold text-[#0F172A]">Full-Cycle Ownership</h2>
            <p className="text-xs text-[#64748B] mt-0.5">From audience psychology and creative briefs to budget optimization.</p>
          </div>
        </div>
      </div>

      {/* Personality scroll cue */}
      <div className="flex items-center justify-between pt-8 text-xs text-[#64748B] font-mono">
        <span>Scroll to explore frameworks & verified deliverables</span>
        <span className="hidden sm:inline">Built with strategic focus and transparent metrics</span>
      </div>
    </section>
  );
};
