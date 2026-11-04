import React, { useState } from 'react';
import { ArrowUpRight, Building2, Briefcase, Sparkles, ExternalLink, Globe2 } from 'lucide-react';
import { CLIENTS } from '../data/portfolioData';
import { Client } from '../types/portfolio';

interface ClientsShowcaseProps {
  onOpenCaseStudy: (caseStudyId: string) => void;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Clients' },
    { id: 'study-abroad', label: 'Study Abroad & EdTech' },
    { id: 'dining-lifestyle', label: 'Restaurants & Skincare' },
  ];

  const filteredClients = CLIENTS.filter((client) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'study-abroad') {
      return (
        client.id === 'vidya-portal' ||
        client.id === 'heilerco' ||
        client.id === 'placementor'
      );
    }
    if (selectedFilter === 'dining-lifestyle') {
      return (
        client.id === 'cellupro' ||
        client.id === 'gazania' ||
        client.id === 'coalspark'
      );
    }
    return true;
  });

  const getAssociatedCaseStudyId = (clientId: string): string | null => {
    if (clientId === 'vidya-portal') return 'cs-vidya';
    if (clientId === 'gazania') return 'cs-gazania';
    if (clientId === 'cellupro') return 'cs-cellupro';
    if (clientId === 'placementor') return 'cs-placementor';
    return null;
  };

  return (
    <section id="clients" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background warm light leak */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF6D29]/10 rounded-full blur-[120px] pointer-events-none -z-10" 
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6D29] font-semibold">
            Section 05 / Client Roster
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2 font-['Manrope']">
            Selected Brands & Collaborations
          </h2>
        </div>
        
        {/* Interactive Segmented Filter Controls with Glass Styling */}
        <div className="flex items-center gap-2 p-1.5 glass-card rounded-full self-start md:self-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === filter.id
                  ? 'glass-btn-accent text-white'
                  : 'text-[#BABABA] hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Clean Client Cards in Glass Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => {
          const caseStudyId = getAssociatedCaseStudyId(client.id);

          return (
            <div
              key={client.id}
              className="group rounded-3xl glass-card glass-card-hover p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Unboxed metadata */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#BABABA]">
                  <span className="text-white/60">{client.year}</span>
                  <span aria-hidden="true" className="text-white/30">·</span>
                  <span className="text-[#FF6D29] font-semibold truncate max-w-[170px]">{client.industry}</span>
                </div>

                {/* Client Name & Scope */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-2xl font-bold text-white font-['Manrope'] group-hover:text-[#FF6D29] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs font-mono text-[#FF6D29] font-medium">
                    {client.scope}
                  </p>
                  <p className="text-sm text-[#BABABA] pt-2 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Clear Role Attribution & Link */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#BABABA]/80">
                  {client.highlight}
                </span>

                {caseStudyId ? (
                  <button
                    onClick={() => onOpenCaseStudy(caseStudyId)}
                    className="glass-btn px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#FF6D29] transition-all cursor-pointer"
                  >
                    <span>View Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6D29]" />
                  </button>
                ) : (
                  <span className="text-xs font-mono text-[#BABABA]/50">
                    Client Partnership
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparency Note */}
      <div className="mt-12 p-4 rounded-2xl glass-card flex items-center gap-3 text-xs text-[#BABABA] border-white/15">
        <span className="font-mono text-[#FF6D29] font-bold uppercase">Integrity Note:</span>
        <p>
          Client engagements represent direct end-to-end execution of ad campaigns, content planning, and performance funnels conducted across agency, in-house, and freelance roles.
        </p>
      </div>
    </section>
  );
};
