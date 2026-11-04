import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Linkedin, Check, Copy, Send, Sparkles, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'Performance Marketing (Meta & Google Ads)',
    budgetRange: '₹30,000 - ₹1,00,000 / month',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background warm light leak */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#FF6D29]/15 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Closing Hero Panel with Glass Aesthetics */}
      <div className="rounded-3xl glass-card p-8 md:p-14 shadow-2xl space-y-12 border-white/20 relative overflow-hidden">
        {/* Subtle top specular line */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Headline, Details & Direct Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6D29] glass-pill px-3.5 py-1 rounded-full border border-[#FF6D29]/30">
                <span className="w-2 h-2 rounded-full bg-[#FF6D29] animate-pulse" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight leading-tight">
                Ready to Turn Marketing Into Measurable Revenue?
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#BABABA] leading-relaxed">
              Whether you need to scale Meta and Google ad campaigns, engineer an automated study abroad / e-commerce acquisition funnel, or hire a dedicated growth marketer, let's talk numbers and strategy.
            </p>

            {/* Direct Contact Cards with Glass Styling */}
            <div className="space-y-3 pt-4">
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl glass-card flex items-center justify-between gap-4 border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass-circle text-[#FF6D29]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-[#BABABA]">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-[#FF6D29] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="glass-btn px-3.5 py-1.5 rounded-full text-xs font-medium text-white transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FF6D29]" />
                      <span className="text-[#FF6D29] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#BABABA]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp / Phone with Updated Number +919207437904 */}
              <div className="p-4 rounded-2xl glass-card flex items-center justify-between gap-4 border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass-circle text-[#FF6D29]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-[#BABABA]">Phone & WhatsApp</p>
                    <a
                      href="https://wa.me/919207437904?text=Hi%20Jefin,%20I%20saw%20your%20portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#FF6D29] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/919207437904?text=Hi%20Jefin,%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn px-4 py-1.5 rounded-full text-xs font-semibold text-white hover:text-[#FF6D29] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6D29]" />
                </a>
              </div>

              {/* LinkedIn & GitHub Network Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl glass-card flex items-center justify-between gap-3 border-white/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 glass-circle text-[#FF6D29]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#BABABA]">LinkedIn</p>
                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:text-[#FF6D29] transition-colors"
                      >
                        jefin-k
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 glass-circle text-white hover:text-[#FF6D29]"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6D29]" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl glass-card flex items-center justify-between gap-3 border-white/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 glass-circle text-[#FF6D29]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#BABABA]">GitHub</p>
                      <a
                        href={PERSONAL_INFO.githubOrBehance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:text-[#FF6D29] transition-colors"
                      >
                        jefin001
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.githubOrBehance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 glass-circle text-white hover:text-[#FF6D29]"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6D29]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Project Inquiry Form in Glass Styling */}
          <div className="lg:col-span-6 glass-card p-6 md:p-8 rounded-3xl border-white/20 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 glass-circle mx-auto text-[#FF6D29]">
                  <Check className="w-7 h-7 text-[#FF6D29]" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Manrope']">
                  Message Prepared
                </h3>
                <p className="text-xs text-[#BABABA] max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'there'}. I have logged your project inquiry regarding{' '}
                  <span className="text-[#FF6D29] font-semibold">{formData.projectType}</span>. You can also send this directly via email:
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      `Inquiry: ${formData.projectType} from ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `Hi Jefin,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budgetRange}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="glass-btn-accent px-6 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Send via Default Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs text-[#BABABA] hover:underline pt-2 cursor-pointer"
                >
                  Reset inquiry form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#FF6D29] font-bold">
                    Project Inquiry & Collaboration
                  </span>
                  <span className="text-[11px] font-mono text-[#BABABA]">Response &lt; 24h</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#BABABA] mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex / Brand Co."
                      className="w-full px-4 py-2.5 text-xs glass-input rounded-xl text-white placeholder-[#BABABA]/40 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#BABABA] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 text-xs glass-input rounded-xl text-white placeholder-[#BABABA]/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#BABABA] mb-1">
                    Primary Service Requirement
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs glass-input rounded-xl text-white focus:outline-none"
                  >
                    <option value="Performance Marketing (Meta & Google Ads)" className="bg-[#161316] text-white">Performance Marketing (Meta & Google Ads)</option>
                    <option value="Study Abroad & Admissions Lead Generation" className="bg-[#161316] text-white">Study Abroad & Admissions Lead Generation</option>
                    <option value="Skincare & E-Commerce Acquisition" className="bg-[#161316] text-white">Skincare & E-Commerce Acquisition</option>
                    <option value="Social Media Strategy & Content Management" className="bg-[#161316] text-white">Social Media Strategy & Content Management</option>
                    <option value="AI Studio & Automation Workflows" className="bg-[#161316] text-white">AI Studio & Automation Workflows</option>
                    <option value="Full-Time Agency or In-House Marketer Role" className="bg-[#161316] text-white">Full-Time Agency or In-House Marketer Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#BABABA] mb-1">
                    Estimated Monthly Ad Spend / Project Scope
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs glass-input rounded-xl text-white focus:outline-none"
                  >
                    <option value="₹25,000 - ₹50,000 / month" className="bg-[#161316] text-white">₹25,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,50,000 / month" className="bg-[#161316] text-white">₹50,000 - ₹1,50,000 / month</option>
                    <option value="₹1,50,000+ / month" className="bg-[#161316] text-white">₹1,50,000+ / month</option>
                    <option value="Full-time Employment Discussion" className="bg-[#161316] text-white">Full-time Employment Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#BABABA] mb-1">
                    Brief Project Details or Role Overview
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, study abroad goals, restaurant footfall, or marketing bottlenecks..."
                    className="w-full px-4 py-2.5 text-xs glass-input rounded-xl text-white placeholder-[#BABABA]/40 focus:outline-none"
                  />
                </div>

                {/* Submit button matching Wojciech Zieliński glass style */}
                <button
                  type="submit"
                  className="w-full glass-btn-accent py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Minimal Footer with Glass Elements */}
      <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#BABABA]">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold font-['Manrope']">Jefin K.</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Digital Marketer & Growth Strategist</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>© 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#what-i-do" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#case-studies" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#clients" className="hover:text-white transition-colors">
            Clients
          </a>
          <a href="#" className="text-[#FF6D29] hover:underline font-semibold flex items-center gap-1">
            <span>Back to Top</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
