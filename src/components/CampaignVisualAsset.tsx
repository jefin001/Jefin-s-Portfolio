import React from 'react';
import { Smartphone, MousePointer, Search, Share2, Heart, MessageCircle, ExternalLink, ShieldCheck, GraduationCap, UtensilsCrossed, Sparkles } from 'lucide-react';

interface CampaignVisualAssetProps {
  caseStudyId: string;
}

export const CampaignVisualAsset: React.FC<CampaignVisualAssetProps> = ({ caseStudyId }) => {
  if (caseStudyId === 'cs-vidya') {
    return (
      <div className="rounded-2xl overflow-hidden glass-card p-5 space-y-4 border-white/15">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
          <span className="text-[#FF6D29] font-bold">META ADS // STUDY ABROAD ADMISSIONS</span>
          <span className="text-[#BABABA]">SPONSORED DIRECT RESPONSE</span>
        </div>

        {/* Ad Mockup Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6D29] to-[#D9480F] text-white font-bold text-xs flex items-center justify-center font-['Manrope'] shadow-md">
              VP
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Vidya Portal — Study Abroad</p>
              <p className="text-[10px] text-[#BABABA]">Sponsored · UK, Canada & Europe Admissions</p>
            </div>
          </div>
          <span className="text-xs text-[#BABABA] font-mono">•••</span>
        </div>

        {/* Ad Copy */}
        <p className="text-xs text-white/90 leading-relaxed">
          Planning to study in the UK, Europe, or Canada for the upcoming intake? Fast-track your application with 100% visa guidance, IELTS waivers & exclusive university scholarship seats.
        </p>

        {/* Ad Creative Canvas (Stylized Glass Ad Artboard) */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-[#453027]/70 via-[#1F191A] to-[#120F12] border border-white/20 p-4 flex flex-col justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono bg-white/10 backdrop-blur-md text-[#FF6D29] px-2.5 py-0.5 rounded-full border border-[#FF6D29]/40 font-bold">
              2026 GLOBAL INTAKE
            </span>
            <span className="text-[10px] font-mono text-white/80">SCHOLARSHIPS AVAILABLE</span>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg md:text-xl font-extrabold text-white font-['Manrope']">
              Study in Europe & UK with Visa Support
            </h4>
            <p className="text-xs text-[#BABABA]">
              Free 1-on-1 Profile Evaluation · Top 1% Ranked Universities
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-[#BABABA] font-mono">
            <span>QUALIFIED APPLICANTS ONLY</span>
            <span className="text-[#FF6D29] font-bold">APPLY NOW</span>
          </div>
        </div>

        {/* Ad CTA Bar */}
        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[#BABABA] uppercase font-mono">vidyaportal.in/study-abroad</p>
            <p className="text-xs font-bold text-white">Check University Eligibility</p>
          </div>
          <span className="px-3 py-1 bg-[#FF6D29] text-white text-xs font-bold rounded-full shadow-[0_2px_10px_rgba(255,109,41,0.4)]">
            Apply Now
          </span>
        </div>

        {/* Ad Metrics Footer */}
        <div className="flex items-center justify-between pt-2 text-[11px] text-[#BABABA] font-mono border-t border-white/10">
          <span>CTR: 2.8%</span>
          <span>Form Completion: 18.4%</span>
          <span className="text-[#FF6D29] font-semibold">CPL: -32% vs Target</span>
        </div>
      </div>
    );
  }

  if (caseStudyId === 'cs-gazania') {
    return (
      <div className="rounded-2xl overflow-hidden glass-card p-5 space-y-4 border-white/15">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
          <span className="text-[#FF6D29] font-bold">INDO-ARAB RESTAURANT REELS</span>
          <span className="text-[#BABABA]">RADIUS: 7KM TIME-PARTED</span>
        </div>

        {/* Reel Preview Card */}
        <div className="relative aspect-[9/10] rounded-xl overflow-hidden bg-gradient-to-t from-[#0F0C0F] via-[#35231C] to-[#1F171A] border border-white/20 p-5 flex flex-col justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
          <div className="flex justify-between items-center text-xs font-mono text-[#BABABA]">
            <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[#FF6D29] font-bold border border-[#FF6D29]/30">
              THU-SAT 4PM-8:30PM
            </span>
            <span className="font-semibold text-white">GAZANIA INDO-ARAB</span>
          </div>

          <div className="space-y-2 my-auto text-center py-6">
            <span className="text-3xl">🔥🍖🍚</span>
            <h4 className="text-xl font-bold text-white font-['Manrope']">
              "Authentic Mandi & Charcoal Sizzles"
            </h4>
            <p className="text-xs text-[#BABABA] max-w-xs mx-auto">
              Slow-cooked aromatic rice, tender charcoal grills, and rich Arabian spices in Malappuram.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-md flex items-center justify-between">
            <div className="text-left">
              <p className="text-[10px] text-[#BABABA] font-mono">Reserve Weekend Table</p>
              <p className="text-xs font-bold text-white">Book via Instagram DM / WhatsApp</p>
            </div>
            <span className="px-3 py-1 text-xs font-bold bg-[#FF6D29] text-white rounded-full shadow-[0_2px_10px_rgba(255,109,41,0.4)]">
              Send DM
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 text-[11px] text-[#BABABA] font-mono">
          <span>Local Impressions: 35,000+</span>
          <span>CPM: ₹42</span>
          <span className="text-[#FF6D29] font-semibold">DM Inquiries: 3.8x Lift</span>
        </div>
      </div>
    );
  }

  if (caseStudyId === 'cs-cellupro') {
    return (
      <div className="rounded-2xl overflow-hidden glass-card p-5 space-y-4 border-white/15">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
          <span className="text-[#FF6D29] font-bold">GOOGLE SEARCH & E-COMMERCE ACQUISITION</span>
          <span className="text-[#BABABA]">SKINCARE & SUSTAINABLE</span>
        </div>

        {/* Google Search Mockup */}
        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#BABABA] font-mono">
            <Search className="w-3.5 h-3.5 text-[#FF6D29]" />
            <span>Keyword: "sustainable clean barrier repair serum"</span>
          </div>
          <div className="pt-2 border-t border-white/10">
            <p className="text-[10px] text-[#FF6D29] uppercase font-mono font-semibold">Sponsored · www.cellupro.com/skincare</p>
            <h4 className="text-sm font-bold text-[#FF6D29] hover:underline cursor-pointer">
              Cellupro™ Clean Barrier Serum | 100% Sustainable Botanical Actives
            </h4>
            <p className="text-xs text-[#BABABA] leading-relaxed pt-1">
              Clinically formulated for sensitive skin. Eco-refillable glass bottles, cruelty-free, zero harsh chemicals. Experience 72hr locked hydration with botanical ceramides.
            </p>
            <div className="flex gap-4 pt-2 text-[11px] text-white font-mono font-medium">
              <span className="underline decoration-[#FF6D29]">Shop Daily Routine Bundles</span>
              <span>·</span>
              <span className="underline decoration-[#FF6D29]">Read Dermatologist Reviews</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 text-[11px] text-[#BABABA] font-mono">
          <span>Search Imp Share: 74%</span>
          <span>Sample CAC: ₹220</span>
          <span className="text-[#FF6D29] font-semibold">Blended ROAS: 3.4x</span>
        </div>
      </div>
    );
  }

  // Default Placementor Mockup
  return (
    <div className="rounded-2xl overflow-hidden glass-card p-5 space-y-4 border-white/15">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
        <span className="text-[#FF6D29] font-bold">CAREER TRAINING ADMISSIONS FUNNEL</span>
        <span className="text-[#BABABA]">PLACEMENTOR ACADEMY</span>
      </div>

      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white">Free 90-Min Professional Masterclass</span>
          <span className="text-[10px] font-mono text-[#FF6D29] font-bold bg-[#FF6D29]/15 px-2 py-0.5 rounded-full border border-[#FF6D29]/30">THIS SATURDAY</span>
        </div>
        <p className="text-xs text-[#BABABA]">
          Job-oriented Accounting, GST, IT & Digital Marketing Training with Guaranteed Placement Support. Demo class + 1-on-1 career mapping.
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <p className="text-[10px] text-[#BABABA]">Campus Location</p>
            <p className="font-semibold text-white">Malappuram Branch</p>
          </div>
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <p className="text-[10px] text-[#BABABA]">Placement Track</p>
            <p className="font-semibold text-[#FF6D29]">Verified Corporate Alumni</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 text-[11px] text-[#BABABA] font-mono">
        <span>Batch Fill: 100%+</span>
        <span>Demo Attendees: 500+</span>
        <span className="text-[#FF6D29] font-semibold">ROI Improvement: +30%</span>
      </div>
    </div>
  );
};
