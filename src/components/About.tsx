import React from 'react';
import { Target, Zap, Activity, Compass, Award, GraduationCap, MapPin, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Background warm light leak */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF6D29]/10 rounded-full blur-[100px] pointer-events-none -z-10" 
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6D29] font-semibold">
            Section 03 / Identity
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2 font-['Manrope']">
            Strategic Mindset. Grounded Execution.
          </h2>
        </div>
        <p className="text-sm text-[#BABABA] max-w-md font-sans">
          How I approach growth: connecting audience psychology with quantitative paid media, AI tooling, and iterative testing.
        </p>
      </div>

      {/* Main Content Grid: Split Editorial Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        {/* Left Column: Glass Editorial Profile Showcase */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-3xl overflow-hidden glass-card p-7 shadow-2xl">
            {/* Visual Header Monogram & Status */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
              <span className="text-[#FF6D29] font-bold">MARKETER DOSSIER</span>
              <span className="text-[#BABABA]">REF // 2026-JK</span>
            </div>

            {/* Profile Visual Artboard */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-[#453027]/40 via-[#161316] to-[#0A080A] border border-white/15 flex flex-col justify-between p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
              {/* Background Geometric Graphic */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#FF6D29 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6D29] to-[#D9480F] text-white font-bold text-xl flex items-center justify-center font-['Manrope'] shadow-[0_4px_16px_rgba(255,109,41,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                  JK
                </div>
                <div className="text-right text-xs font-mono text-[#BABABA] leading-tight">
                  <p className="text-white font-semibold">Jefin K.</p>
                  <p className="text-[#FF6D29]">Performance & Social</p>
                </div>
              </div>

              {/* Central Abstract Focus Element */}
              <div className="relative z-10 space-y-3 my-auto py-6">
                <div className="w-12 h-1 bg-[#FF6D29] rounded-full shadow-[0_0_10px_#FF6D29]" />
                <blockquote className="text-lg md:text-xl font-semibold text-white leading-snug font-['Manrope']">
                  "Great marketing isn't about outspending competitors; it's about out-learning them through sharper creative hooks and tighter attribution."
                </blockquote>
              </div>

              {/* Bottom Card Strip */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#BABABA] font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6D29]" />
                  <span className="font-medium text-white">Kerala, India</span>
                </div>
                <span className="font-medium text-[#FF6D29]">Active 2026</span>
              </div>
            </div>

            {/* Credibility & Education Footer within Left Column */}
            <div className="pt-2 space-y-3.5 text-xs text-[#BABABA]">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#FF6D29] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">{EDUCATION.degree}</span>
                  <p className="text-[#BABABA]">{EDUCATION.institution} · Strong grounding in financial economics and business logic</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#FF6D29] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Google & Meta Blueprint Certified</span>
                  <p className="text-[#BABABA]">Direct-response advertising, GA4 event tracking, and media planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Philosophy & Confirmed Personal Traits */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-['Manrope'] leading-tight">
              Hello, I'm Jefin. A marketer driven by curiosity, clear numbers, and relentless campaign testing.
            </h3>
            <p className="text-[#BABABA] leading-relaxed text-base">
              With hands-on experience running ad spend and social channels across agency (Speakerbox Advertising), in-house education (Placementor Academy), and freelance projects, I treat every campaign as a system: <strong className="text-white">Hook the right prospect, validate the offer, and scale the economics.</strong>
            </p>
            <p className="text-[#BABABA] leading-relaxed text-base">
              I avoid vanity metrics that don't convert. Whether launching high-intent Meta Lead generation campaigns, restructuring Google Search keyword match types, or producing short-form video reels that build local brand equity, my focus stays anchored on lowering Customer Acquisition Cost (CAC) and driving genuine business inquiries.
            </p>
          </div>

          {/* Three Genuine Personality & Curiosity Drivers with Tech Tools */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF6D29] font-semibold">
              Beyond the Ad Manager // Authentic Drivers & Tech
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Trait 1: Modern Tech Stack (AI Studio, Antigravity, GitHub, Vercel) */}
              <div className="p-4 rounded-2xl glass-card glass-card-hover space-y-2">
                <div className="flex items-center gap-2 text-[#FF6D29]">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase text-white">Tech & AI Stack</span>
                </div>
                <p className="text-xs text-[#BABABA] leading-relaxed">
                  Power user of <strong className="text-white">AI Studio</strong>, <strong className="text-white">Antigravity</strong>, <strong className="text-white">GitHub</strong>, and <strong className="text-white">Vercel</strong> for accelerated campaign deployment, asset versioning, and prompt engineering.
                </p>
              </div>

              {/* Trait 2: Sports & Football */}
              <div className="p-4 rounded-2xl glass-card glass-card-hover space-y-2">
                <div className="flex items-center gap-2 text-[#FF6D29]">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase text-white">Sports & Football</span>
                </div>
                <p className="text-xs text-[#BABABA] leading-relaxed">
                  High-energy competitive drive and tactical discipline. The same focus required on the pitch translates to daily campaign pacing and relentless iteration.
                </p>
              </div>

              {/* Trait 3: Consumer Psychology */}
              <div className="p-4 rounded-xl glass-card glass-card-hover space-y-2">
                <div className="flex items-center gap-2 text-[#FF6D29]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase text-white">Psychology</span>
                </div>
                <p className="text-xs text-[#BABABA] leading-relaxed">
                  Deeply fascinated by why people click, hesitate, and commit. Analyzing customer friction points and micro-incentives to write persuasive copy that converts.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats / Approach Highlights */}
          <div className="p-6 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-white/15">
            <div>
              <p className="text-xs font-mono text-[#FF6D29] font-semibold uppercase">Professional Positioning</p>
              <h4 className="text-lg font-bold text-white font-['Manrope'] mt-0.5">
                Creative Strategy + Analytical Paid Media + AI Workflows
              </h4>
              <p className="text-xs text-[#BABABA] mt-1">
                Capable of writing the creative brief, engineering AI prompts, and configuring the pixel and bid strategy.
              </p>
            </div>
            <a
              href="#what-i-do"
              className="glass-btn px-5 py-2.5 rounded-full text-xs font-semibold text-white hover:text-[#FF6D29] whitespace-nowrap inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore My Services</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
