import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Linkedin, Check, Copy, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'Performance Marketing (Paid Ads)',
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
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      {/* Closing Hero Panel */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] border border-[#E2E8F0] p-8 md:p-14 shadow-lg space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Headline, Details & Direct Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#047857] font-semibold bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
                <span className="w-2 h-2 rounded-full bg-[#047857]" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] font-['Manrope'] tracking-tight leading-tight">
                Ready to Turn Marketing Into Measurable Revenue?
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#475569] leading-relaxed">
              Whether you need to scale Meta and Google ad campaigns, engineer an automated lead acquisition funnel, or hire a dedicated growth marketer, let's talk numbers and strategy.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-4">
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#047857]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-[#64748B]">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#047857] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#047857]" />
                      <span className="text-[#047857] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp / Phone */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#047857]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-[#64748B]">Phone & WhatsApp</p>
                    <a
                      href={`https://wa.me/919048217355?text=Hi%20Jefin,%20I%20saw%20your%20portfolio`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#047857] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/919048217355?text=Hi%20Jefin,%20I%20saw%20your%20portfolio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#047857] border border-[#A7F3D0] rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#047857]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-[#64748B]">Professional Network</p>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#047857] transition-colors"
                    >
                      linkedin.com/in/jefin-k
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1] rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Project Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-2xl shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#047857] flex items-center justify-center mx-auto border border-[#A7F3D0]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-['Manrope']">
                  Message Prepared
                </h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'there'}. I have logged your project inquiry regarding{' '}
                  <span className="text-[#047857] font-semibold">{formData.projectType}</span>. You can also send this directly via email:
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      `Inquiry: ${formData.projectType} from ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `Hi Jefin,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budgetRange}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#047857] text-white rounded-lg hover:bg-[#065F46] transition-colors shadow-xs"
                  >
                    <span>Send via Default Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs text-[#64748B] hover:underline pt-2 cursor-pointer"
                >
                  Reset inquiry form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#047857] font-bold">
                    Project Inquiry & Collaboration
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B]">Response &lt; 24h</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex / Brand Co."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#047857] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#047857] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#64748B] mb-1">
                    Primary Service Requirement
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#047857] focus:bg-white"
                  >
                    <option value="Performance Marketing (Meta & Google Ads)">Performance Marketing (Meta & Google Ads)</option>
                    <option value="Social Media Strategy & Content Management">Social Media Strategy & Content Management</option>
                    <option value="Lead Generation Funnel Architecture">Lead Generation Funnel Architecture</option>
                    <option value="Full-Time Agency or In-House Marketer Role">Full-Time Agency or In-House Marketer Role</option>
                    <option value="Analytics, GA4 & Pixel Tracking Setup">Analytics, GA4 & Pixel Tracking Setup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#64748B] mb-1">
                    Estimated Monthly Ad Spend / Project Scope
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#047857] focus:bg-white"
                  >
                    <option value="₹25,000 - ₹50,000 / month">₹25,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,50,000 / month">₹50,000 - ₹1,50,000 / month</option>
                    <option value="₹1,50,000+ / month">₹1,50,000+ / month</option>
                    <option value="Full-time Employment Discussion">Full-time Employment Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#64748B] mb-1">
                    Brief Project Details or Role Overview
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, current marketing bottlenecks, or desired outcomes..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#047857] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="pt-12 mt-12 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
        <div className="flex items-center gap-3">
          <span className="text-[#0F172A] font-bold font-['Manrope']">Jefin K.</span>
          <span aria-hidden="true">·</span>
          <span>Digital Marketer & Performance Strategist</span>
          <span aria-hidden="true">·</span>
          <span>© 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#what-i-do" className="hover:text-[#0F172A] transition-colors">
            Capabilities
          </a>
          <a href="#case-studies" className="hover:text-[#0F172A] transition-colors">
            Case Studies
          </a>
          <a href="#clients" className="hover:text-[#0F172A] transition-colors">
            Clients
          </a>
          <a href="#" className="text-[#047857] hover:underline font-semibold">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
