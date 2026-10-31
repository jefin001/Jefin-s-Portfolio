import React from 'react';
import { ArrowUpRight, Check, Target, Share2, FileText, BarChart3, Globe } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Target className="w-5 h-5 text-[#047857]" />;
      case '02':
        return <Share2 className="w-5 h-5 text-[#047857]" />;
      case '03':
        return <FileText className="w-5 h-5 text-[#047857]" />;
      case '04':
        return <BarChart3 className="w-5 h-5 text-[#047857]" />;
      default:
        return <Globe className="w-5 h-5 text-[#047857]" />;
    }
  };

  return (
    <section id="what-i-do" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 04 / Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            What I Deliver for Brands & Businesses
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-sans">
          Strategic digital marketing services engineered for direct business impact, lead generation, and customer acquisition.
        </p>
      </div>

      {/* Primary Highlights: 01 Performance & 02 Social as wide focal priority cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {SERVICES.slice(0, 2).map((service) => (
          <div
            key={service.number}
            className="group relative rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#047857]/60 p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#047857] tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-xs font-mono uppercase text-[#64748B]">Core Focus</span>
                </div>
                <div className="p-2 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
                  {getIcon(service.number)}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-bold text-[#0F172A] font-['Manrope'] group-hover:text-[#047857] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-[#047857] font-mono">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#475569] leading-relaxed pt-2">
                  {service.description}
                </p>
              </div>

              {/* Service Features list */}
              <div className="mt-8 space-y-2.5 pt-6 border-t border-[#E2E8F0]">
                <p className="text-xs font-mono uppercase text-[#64748B] tracking-wider mb-3">
                  Execution Deliverables:
                </p>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                    <Check className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748B]">End-to-End Ownership</span>
              <button
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857] group-hover:text-[#065F46] transition-colors cursor-pointer"
              >
                <span>Inquire for Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Row: 03 Content, 04 Analytics, 05 Supporting Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.slice(2).map((service) => (
          <div
            key={service.number}
            className="group rounded-xl bg-white border border-[#E2E8F0] hover:border-[#047857]/40 p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <span className="text-xs font-mono font-bold text-[#64748B]">
                  {service.number}
                </span>
                <div className="p-1.5 rounded-md bg-[#ECFDF5]">
                  {getIcon(service.number)}
                </div>
              </div>

              <h4 className="text-lg font-bold text-[#0F172A] font-['Manrope'] mt-4">
                {service.title}
              </h4>
              <p className="text-xs font-mono text-[#047857] font-semibold mt-1">
                {service.tagline}
              </p>
              <p className="text-xs text-[#475569] mt-3 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 space-y-2 pt-4 border-t border-[#E2E8F0]">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#64748B]">
                    <span className="text-[#047857] font-bold">·</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
              <button
                onClick={() => onSelectService(service.title)}
                className="text-xs font-medium text-[#64748B] hover:text-[#047857] transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
