import React, { useState } from 'react';
import { ArrowUpRight, Building2, Briefcase, Sparkles, ExternalLink } from 'lucide-react';
import { CLIENTS } from '../data/portfolioData';
import { Client } from '../types/portfolio';

interface ClientsShowcaseProps {
  onOpenCaseStudy: (caseStudyId: string) => void;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Clients' },
    { id: 'performance', label: 'Performance & Leads' },
    { id: 'social', label: 'Social & Brand' },
  ];

  const filteredClients = CLIENTS.filter((client) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'performance') {
      return (
        client.id === 'vidya-portal' ||
        client.id === 'cellupro' ||
        client.id === 'placementor'
      );
    }
    if (selectedFilter === 'social') {
      return (
        client.id === 'gazania' ||
        client.id === 'heilerco' ||
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
    <section id="clients" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#047857] font-semibold">
            Section 05 / Client Roster
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-2 font-['Manrope']">
            Selected Brands & Collaborations
          </h2>
        </div>
        
        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl self-start md:self-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === filter.id
                  ? 'bg-white text-[#0F172A] shadow-xs border border-[#CBD5E1]'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Clean Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => {
          const caseStudyId = getAssociatedCaseStudyId(client.id);

          return (
            <div
              key={client.id}
              className="group rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#047857]/50 p-6 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Card Top: Unboxed metadata */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] text-xs font-mono text-[#64748B]">
                  <span>{client.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate max-w-[150px]">{client.industry}</span>
                </div>

                {/* Client Name & Scope */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-2xl font-bold text-[#0F172A] font-['Manrope'] group-hover:text-[#047857] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs font-mono text-[#047857] font-semibold">
                    {client.scope}
                  </p>
                  <p className="text-sm text-[#475569] pt-2 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Clear Role Attribution & Link */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">
                  {client.highlight}
                </span>

                {caseStudyId ? (
                  <button
                    onClick={() => onOpenCaseStudy(caseStudyId)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#047857] hover:underline cursor-pointer"
                  >
                    <span>View Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs font-mono text-[#94A3B8]">
                    Client Partnership
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparency Note */}
      <div className="mt-12 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3 text-xs text-[#166534]">
        <span className="font-mono text-[#047857] font-bold uppercase">Integrity Note:</span>
        <p>
          Client work represents direct end-to-end execution of ad campaigns, content planning, and performance funnels conducted across agency, in-house, and freelance roles.
        </p>
      </div>
    </section>
  );
};
