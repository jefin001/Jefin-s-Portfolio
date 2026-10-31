import React from 'react';
import { Target, Zap, Activity, Compass, Award, GraduationCap, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[#E2E8F0]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 03 / Identity
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            Strategic Mindset. Grounded Execution.
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-sans">
          How I approach growth: connecting audience psychology with quantitative paid media and iterative testing.
        </p>
      </div>

      {/* Main Content Grid: Split Editorial Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        {/* Left Column: Bespoke Editorial Profile Showcase */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] p-6 shadow-sm">
            {/* Visual Header Monogram & Status */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0] text-xs font-mono">
              <span className="text-[#047857] font-bold">MARKETER DOSSIER</span>
              <span className="text-[#64748B]">REF // 2026-JK</span>
            </div>

            {/* Profile Visual Artboard */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden my-6 bg-gradient-to-br from-[#F1F5F9] via-[#E2E8F0] to-[#CBD5E1] border border-[#CBD5E1] flex flex-col justify-between p-6">
              {/* Background Geometric Graphic */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#047857 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-[#047857] text-white font-bold text-xl flex items-center justify-center font-['Manrope'] shadow-md">
                  JK
                </div>
                <div className="text-right text-xs font-mono text-[#64748B] leading-tight">
                  <p className="text-[#0F172A] font-semibold">Jefin K.</p>
                  <p>Performance & Social</p>
                </div>
              </div>

              {/* Central Abstract Focus Element */}
              <div className="relative z-10 space-y-3 my-auto py-6">
                <div className="w-14 h-1 bg-[#047857] rounded-full" />
                <blockquote className="text-lg md:text-xl font-semibold text-[#0F172A] leading-snug font-['Manrope']">
                  "Great marketing isn't about outspending competitors; it's about out-learning them through sharper creative hooks and tighter attribution."
                </blockquote>
              </div>

              {/* Bottom Card Strip */}
              <div className="relative z-10 pt-4 border-t border-[#CBD5E1] flex items-center justify-between text-xs text-[#475569] font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#047857]" />
                  <span className="font-medium">Kerala, India</span>
                </div>
                <span className="font-medium text-[#047857]">Active 2026</span>
              </div>
            </div>

            {/* Credibility & Education Footer within Left Column */}
            <div className="pt-2 space-y-3 text-xs text-[#64748B]">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A]">{EDUCATION.degree}</span>
                  <p className="text-[#64748B]">{EDUCATION.institution} · Strong grounding in financial economics and business logic</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A]">Google & Meta Blueprint Certified</span>
                  <p className="text-[#64748B]">Direct-response advertising, GA4 event tracking, and media planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Philosophy & Confirmed Personal Traits */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-['Manrope'] leading-tight">
              Hello, I'm Jefin. A marketer driven by curiosity, clear numbers, and relentless campaign testing.
            </h3>
            <p className="text-[#475569] leading-relaxed text-base">
              With hands-on experience running ad spend and social channels across agency (Speakerbox Advertising), in-house education (Placementor Academy), and freelance projects, I treat every campaign as a system: <strong className="text-[#0F172A]">Hook the right prospect, validate the offer, and scale the economics.</strong>
            </p>
            <p className="text-[#475569] leading-relaxed text-base">
              I avoid vanity metrics that don't convert. Whether launching high-intent Meta Lead generation campaigns, restructuring Google Search keyword match types, or producing short-form video reels that build local brand equity, my focus stays anchored on lowering Customer Acquisition Cost (CAC) and driving genuine business inquiries.
            </p>
          </div>

          {/* Three Genuine Personality & Curiosity Drivers */}
          <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
            <p className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
              Beyond the Ad Manager // Authentic Drivers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Trait 1: Football & Sports */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#047857]">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase text-[#0F172A]">Sports & Football</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  High-energy competitive drive and tactical discipline. The same focus required on the pitch translates to daily campaign pacing and relentless iteration.
                </p>
              </div>

              {/* Trait 2: AI & Workflow Velocity */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#047857]">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase text-[#0F172A]">AI & Automation</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Active exploration of modern AI tooling for rapid creative variations, ad copy angle testing, and data synthesis to deliver faster campaign turnarounds.
                </p>
              </div>

              {/* Trait 3: Consumer Psychology */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#047857]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase text-[#0F172A]">Consumer Psychology</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Deeply fascinated by why people click, hesitate, and commit. Analyzing customer friction points and micro-incentives to write persuasive copy that converts.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats / Approach Highlights */}
          <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono text-[#047857] font-semibold uppercase">Professional Positioning</p>
              <h4 className="text-lg font-bold text-[#0F172A] font-['Manrope'] mt-0.5">
                Creative Strategy + Analytical Paid Media
              </h4>
              <p className="text-xs text-[#64748B] mt-1">
                Capable of writing the creative brief and configuring the pixel and bid strategy.
              </p>
            </div>
            <a
              href="#what-i-do"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#047857] hover:text-[#065F46] whitespace-nowrap"
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
