import React from 'react';
import { ArrowUpRight, Check, Target, Share2, FileText, BarChart3, Globe, Cpu } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Target className="w-5 h-5 text-[#FF6D29]" />;
      case '02':
        return <Share2 className="w-5 h-5 text-[#FF6D29]" />;
      case '03':
        return <FileText className="w-5 h-5 text-[#FF6D29]" />;
      case '04':
        return <BarChart3 className="w-5 h-5 text-[#FF6D29]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#FF6D29]" />;
    }
  };

  return (
    <section id="what-i-do" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background warm light leak */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF6D29]/10 rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6D29] font-semibold">
            Section 04 / Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2 font-['Manrope']">
            What I Deliver for Brands & Businesses
          </h2>
        </div>
        <p className="text-sm text-[#BABABA] max-w-md font-sans">
          Strategic digital marketing services engineered for direct business impact, lead generation, and customer acquisition.
        </p>
      </div>

      {/* Primary Highlights: 01 Performance & 02 Social as wide focal priority glass cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {SERVICES.slice(0, 2).map((service) => (
          <div
            key={service.number}
            className="group relative rounded-3xl glass-card glass-card-hover p-8 md:p-10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#FF6D29] tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-xs font-mono uppercase text-[#BABABA]">Core Focus</span>
                </div>
                <div className="w-10 h-10 glass-circle text-[#FF6D29]">
                  {getIcon(service.number)}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-bold text-white font-['Manrope'] group-hover:text-[#FF6D29] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-[#FF6D29] font-mono">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#BABABA] leading-relaxed pt-2">
                  {service.description}
                </p>
              </div>

              {/* Service Features list */}
              <div className="mt-8 space-y-2.5 pt-6 border-t border-white/10">
                <p className="text-xs font-mono uppercase text-[#BABABA] tracking-wider mb-3">
                  Execution Deliverables:
                </p>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                    <Check className="w-4 h-4 text-[#FF6D29] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#BABABA]">End-to-End Ownership</span>
              <button
                onClick={() => onSelectService(service.title)}
                className="glass-btn px-4 py-2 rounded-full text-xs font-semibold text-white hover:text-[#FF6D29] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Inquire for Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6D29]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Row: 03 Content, 04 Analytics, 05 Modern Tech & Growth Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.slice(2).map((service) => (
          <div
            key={service.number}
            className="group rounded-2xl glass-card glass-card-hover p-6 md:p-7 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#BABABA]">
                  {service.number}
                </span>
                <div className="w-8 h-8 glass-circle text-[#FF6D29]">
                  {getIcon(service.number)}
                </div>
              </div>

              <h4 className="text-lg font-bold text-white font-['Manrope'] mt-4">
                {service.title}
              </h4>
              <p className={`text-xs font-mono font-semibold mt-1 ${service.number === '05' ? 'text-white' : 'text-[#FF6D29]'}`}>
                {service.tagline}
              </p>
              <p className="text-xs text-[#BABABA] mt-3 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 space-y-2 pt-4 border-t border-white/10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#BABABA]">
                    <span className="text-[#FF6D29] font-bold">·</span>
                    <span className={feature.includes('AI Studio') || feature.includes('Antigravity') || feature.includes('GitHub') || feature.includes('Vercel') ? 'text-white font-medium' : ''}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => onSelectService(service.title)}
                className="glass-btn px-4 py-1.5 rounded-full text-xs font-medium text-[#BABABA] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowUpRight className="w-3 h-3 text-[#FF6D29]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
