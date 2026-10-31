import React from 'react';
import { Smartphone, MousePointer, Search, Share2, Heart, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface CampaignVisualAssetProps {
  caseStudyId: string;
}

export const CampaignVisualAsset: React.FC<CampaignVisualAssetProps> = ({ caseStudyId }) => {
  if (caseStudyId === 'cs-vidya') {
    return (
      <div className="rounded-xl overflow-hidden bg-white border border-[#E2E8F0] p-5 space-y-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] text-xs font-mono">
          <span className="text-[#047857] font-bold">META ADS PREVIEW // INSTAGRAM FEED</span>
          <span className="text-[#64748B]">SPONSORED DIRECT RESPONSE</span>
        </div>

        {/* Ad Mockup Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#047857] text-white font-bold text-xs flex items-center justify-center font-['Manrope']">
              VP
            </div>
            <div>
              <p className="text-xs font-bold text-[#0F172A] leading-tight">Vidya Portal</p>
              <p className="text-[10px] text-[#64748B]">Sponsored · South India</p>
            </div>
          </div>
          <span className="text-xs text-[#94A3B8] font-mono">•••</span>
        </div>

        {/* Ad Copy */}
        <p className="text-xs text-[#334155] leading-relaxed">
          Stuck between a degree and a career? Upgrade your skills with industry-verified certifications in Data, Tech & Finance. 100% placement support with corporate recruitment partners.
        </p>

        {/* Ad Creative Canvas (Stylized Ad Artboard) */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-[#ECFDF5] via-[#F0FDF4] to-[#E2E8F0] border border-[#A7F3D0] p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono bg-white text-[#047857] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold shadow-2xs">
              ADMISSIONS 2025-26
            </span>
            <span className="text-[10px] font-mono text-[#065F46] font-medium">LIMITED SEATS</span>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg md:text-xl font-extrabold text-[#0F172A] font-['Manrope']">
              Launch Your Career in 120 Days
            </h4>
            <p className="text-xs text-[#475569]">
              Live Weekend Sessions · Real Industry Projects · 1-on-1 Mentorship
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#CBD5E1] text-[10px] text-[#475569] font-mono">
            <span>QUALIFIED APPLICANTS ONLY</span>
            <span className="text-[#047857] font-bold">APPLY NOW</span>
          </div>
        </div>

        {/* Ad CTA Bar */}
        <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[#64748B] uppercase font-mono">vidyaportal.in</p>
            <p className="text-xs font-bold text-[#0F172A]">Check Eligibility & Syllabus</p>
          </div>
          <span className="px-3 py-1 bg-[#047857] text-white text-xs font-bold rounded shadow-2xs">
            Sign Up
          </span>
        </div>

        {/* Ad Metrics Footer */}
        <div className="flex items-center justify-between pt-2 text-[11px] text-[#64748B] font-mono border-t border-[#E2E8F0]">
          <span>CTR: 2.8%</span>
          <span>Lead Form Completion: 18.4%</span>
          <span className="text-[#047857] font-semibold">CPL: -32% vs Target</span>
        </div>
      </div>
    );
  }

  if (caseStudyId === 'cs-gazania') {
    return (
      <div className="rounded-xl overflow-hidden bg-white border border-[#E2E8F0] p-5 space-y-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] text-xs font-mono">
          <span className="text-[#047857] font-bold">INSTAGRAM REELS STORYTELLING</span>
          <span className="text-[#64748B]">RADIUS: 7KM TIME-PARTED</span>
        </div>

        {/* Reel Preview Card */}
        <div className="relative aspect-[9/10] rounded-lg overflow-hidden bg-gradient-to-t from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] border border-[#CBD5E1] p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-[#64748B]">
            <span className="bg-white px-2 py-0.5 rounded text-[#047857] font-bold shadow-2xs border border-[#E2E8F0]">
              THU-SAT 4PM-8:30PM
            </span>
            <span className="font-semibold text-[#0F172A]">GAZANIA BISTRO</span>
          </div>

          <div className="space-y-2 my-auto text-center py-6">
            <span className="text-3xl">🔥🥩🍽️</span>
            <h4 className="text-xl font-bold text-[#0F172A] font-['Manrope']">
              "The Sound of Weekend Evenings"
            </h4>
            <p className="text-xs text-[#475569] max-w-xs mx-auto">
              Sensory acoustic sizzles, artisanal spices, and ambient mood dining in Malappuram.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#CBD5E1] shadow-xs flex items-center justify-between">
            <div className="text-left">
              <p className="text-[10px] text-[#64748B] font-mono">Reserve for Tonight</p>
              <p className="text-xs font-bold text-[#0F172A]">Book a Table via Instagram DM</p>
            </div>
            <span className="px-2.5 py-1 text-xs font-bold bg-[#047857] text-white rounded">
              Send Message
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 text-[11px] text-[#64748B] font-mono">
          <span>Local Impressions: 35,000+</span>
          <span>CPM: ₹42</span>
          <span className="text-[#047857] font-semibold">DM Inquiries: 3.8x Lift</span>
        </div>
      </div>
    );
  }

  if (caseStudyId === 'cs-cellupro') {
    return (
      <div className="rounded-xl overflow-hidden bg-white border border-[#E2E8F0] p-5 space-y-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] text-xs font-mono">
          <span className="text-[#047857] font-bold">GOOGLE SEARCH B2B HARVESTING</span>
          <span className="text-[#64748B]">HIGH-INTENT COMMERCIAL</span>
        </div>

        {/* Google Search Mockup */}
        <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono">
            <Search className="w-3.5 h-3.5 text-[#047857]" />
            <span>Keyword: "biodegradable food containers wholesale kerala"</span>
          </div>
          <div className="pt-2 border-t border-[#E2E8F0]">
            <p className="text-[10px] text-[#047857] uppercase font-mono font-semibold">Sponsored · www.celluprogreen.com</p>
            <h4 className="text-sm font-bold text-[#1D4ED8] hover:underline cursor-pointer">
              Cellupro™ Bagasse Food Packaging | Request Free Commercial Sample Kit
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed pt-1">
              100% compostable sugarcane bagasse containers for restaurants & cloud kitchens. Microwave safe, oil resistant, certified food-grade. Fast bulk dispatch across South India.
            </p>
            <div className="flex gap-4 pt-2 text-[11px] text-[#047857] font-mono font-medium">
              <span className="underline decoration-[#047857]">Download Wholesale Catalog</span>
              <span>·</span>
              <span className="underline decoration-[#047857]">Calculate Price Per Unit</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 text-[11px] text-[#64748B] font-mono">
          <span>Search Imp Share: 74%</span>
          <span>Sample CPA: ₹140</span>
          <span className="text-[#047857] font-semibold">Commercial Samples: 45+/Qtr</span>
        </div>
      </div>
    );
  }

  // Default Placementor Mockup
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-[#E2E8F0] p-5 space-y-4 shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] text-xs font-mono">
        <span className="text-[#047857] font-bold">ADMISSIONS WORKSHOP FUNNEL</span>
        <span className="text-[#64748B]">PLACEMENTOR ACADEMY</span>
      </div>

      <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#0F172A]">Free 90-Min Career Masterclass</span>
          <span className="text-[10px] font-mono text-[#047857] font-bold">THIS SATURDAY</span>
        </div>
        <p className="text-xs text-[#475569]">
          Master Accounting, GST & Digital Systems with Certified Industry Professionals. Free live demo + placement pathway consultation.
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
          <div className="p-2 rounded bg-white border border-[#E2E8F0]">
            <p className="text-[10px] text-[#64748B]">Campus Location</p>
            <p className="font-semibold text-[#0F172A]">Malappuram Branch</p>
          </div>
          <div className="p-2 rounded bg-white border border-[#E2E8F0]">
            <p className="text-[10px] text-[#64748B]">Placement Track</p>
            <p className="font-semibold text-[#047857]">Verified Alumni Network</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 text-[11px] text-[#64748B] font-mono">
        <span>Batch Fill: 100%+</span>
        <span>Demo Attendees: 500+</span>
        <span className="text-[#047857] font-semibold">ROI Improvement: +30%</span>
      </div>
    </div>
  );
};
