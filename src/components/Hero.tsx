import React from 'react';
import { ArrowDown, ArrowUpRight, TrendingUp, Layers, CheckCircle2, ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Ambient warm orange glow aura from Image 1 */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6D29]/20 via-[#453027]/30 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-36 right-10 w-[350px] h-[350px] bg-[#FF6D29]/15 rounded-full blur-[100px] pointer-events-none -z-10" 
      />

      {/* Top Metadata Strip - Clean unboxed text with glass pill tags */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-[#BABABA] mb-8 font-mono">
        <span className="glass-pill px-3 py-1 rounded-full text-[#FF6D29] font-semibold tracking-wide border border-[#FF6D29]/30">
          2026 Edition
        </span>
        <span aria-hidden="true" className="text-white/30">·</span>
        <span>{PERSONAL_INFO.location}</span>
        <span aria-hidden="true" className="text-white/30">·</span>
        <span>{PERSONAL_INFO.experienceDuration}</span>
        <span aria-hidden="true" className="text-white/30">·</span>
        <span className="text-white font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29] animate-pulse" />
          {PERSONAL_INFO.availability}
        </span>
      </div>

      {/* Main Hero Core */}
      <div className="space-y-8 max-w-5xl">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF6D29] bg-[#453027]/40 border border-[#FF6D29]/25 px-3.5 py-1 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6D29]" />
            <span>Digital Marketer & Growth Strategist</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.08] text-balance font-['Plus_Jakarta_Sans',sans-serif]">
            Turning Marketing Intent <br className="hidden sm:inline" />
            Into{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF9359] to-[#FF6D29]">
                Measurable Demand.
              </span>
              {/* Creative modern sleek glowing precision beam */}
              <span 
                aria-hidden="true" 
                className="absolute -bottom-2.5 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#FF6D29] via-[#FF8C55]/80 to-transparent shadow-[0_0_14px_#FF6D29]" 
              />
              <span 
                aria-hidden="true" 
                className="absolute -bottom-[4px] left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#FF6D29]" 
              />
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-[#BABABA] max-w-3xl leading-relaxed">
          I bridge the gap between creative social storytelling and quantitative advertising. Specializing in{' '}
          <strong className="text-white font-semibold">Social Media Marketing</strong>,{' '}
          <strong className="text-white font-semibold">Performance Marketing</strong>, and modern growth stacks with{' '}
          <span className="text-white font-mono text-sm font-medium">AI Studio · Antigravity · GitHub · Vercel</span>.
        </p>

        {/* Action Buttons — Glass buttons directly inspired by Wojciech Zieliński (Image 2) */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {/* Glass Circular Button + Glass Pill Button Group */}
          <div className="flex items-center gap-3">
            <button
              onClick={onExploreWork}
              className="w-12 h-12 glass-circle text-white cursor-pointer group"
              aria-label="Scroll down to explore case studies"
              title="Explore Work"
            >
              <ArrowDown className="w-5 h-5 text-[#FF6D29] group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onExploreWork}
              className="glass-btn px-7 py-3 text-sm font-semibold tracking-wide text-white rounded-full transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Case Studies</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29]" />
            </button>
          </div>

          {/* Secondary Primary Accent Glass Button */}
          <button
            onClick={onContactClick}
            className="glass-btn-accent px-7 py-3 text-sm font-semibold tracking-wide text-white rounded-full transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Discuss Opportunities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Bottom Strip - Key Pillars Row with Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-white/10 mt-12 text-sm">
        <div className="flex items-start gap-3.5 p-5 rounded-2xl glass-card glass-card-hover">
          <div className="p-2.5 rounded-xl bg-white/[0.08] border border-white/20 text-[#FF6D29] shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Performance Media</h2>
            <p className="text-xs text-[#BABABA] mt-1 leading-relaxed">Meta & Google Ads, lead funnels, and rigorous conversion tracking.</p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-5 rounded-2xl glass-card glass-card-hover">
          <div className="p-2.5 rounded-xl bg-white/[0.08] border border-white/20 text-[#FF6D29] shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Content & Organic Growth</h2>
            <p className="text-xs text-[#BABABA] mt-1 leading-relaxed">Platform-native video hooks, brand tone, and community interaction.</p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-5 rounded-2xl glass-card glass-card-hover">
          <div className="p-2.5 rounded-xl bg-white/[0.08] border border-white/20 text-[#FF6D29] shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Modern Tech Stack</h2>
            <p className="text-xs text-[#BABABA] mt-1 leading-relaxed">Leveraging AI Studio, Antigravity, GitHub & Vercel for campaign speed.</p>
          </div>
        </div>
      </div>

      {/* Personality scroll cue */}
      <div className="flex items-center justify-between pt-8 text-xs text-[#BABABA]/70 font-mono">
        <span>Scroll to explore frameworks & verified deliverables</span>
        <span className="hidden sm:inline">Crafted with high-craft glass UI and transparent performance metrics</span>
      </div>
    </section>
  );
};
