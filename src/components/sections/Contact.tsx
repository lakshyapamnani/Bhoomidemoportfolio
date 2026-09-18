import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, CheckCircle, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import { TornPaper } from '../common/TornPaper';
import { Sticker } from '../common/Sticker';
import { Tape } from '../common/Tape';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Management',
    brand: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Please enter at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please provide a valid email format (e.g., name@domain.com)';
        }
        return '';
      case 'message':
        if (!value.trim()) return 'Please share a brief note about your project';
        if (value.trim().length < 10) return 'Please provide at least 10 characters so I can understand your vision';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    const newErrors: { [key: string]: string } = {};
    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (msgErr) newErrors.message = msgErr;

    setTouched({ name: true, email: true, message: true, brand: true, service: true });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Simulated robust submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative bg-[#173B5D] text-[#F5F1E8] pt-24 sm:pt-32 pb-20 sm:pb-24 overflow-hidden">
      {/* Top Torn Paper Transition */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <TornPaper position="top" fillColor="#173B5D" shadow={true} />
      </div>

      {/* Background paper texture */}
      <div className="absolute inset-0 bg-dark-paper-grain opacity-40 pointer-events-none" />

      {/* Decorative Postal Stamp */}
      <div className="absolute top-20 right-8 sm:right-16 hidden lg:block pointer-events-none">
        <Sticker type="postage" rotation={6} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Direct Channels (Col 6) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E9E2D5] px-2.5 py-0.5 bg-[#12395D] border border-[#315D7E]">
                  Start the Conversation
                </span>
                <span className="font-script text-2xl text-[#6F8DA5]">bookings open 2026</span>
              </div>

              {/* Exact Requested Headline */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F1E8] leading-[1.05]">
                Let's work together
              </h2>

              {/* Exact Requested Supporting Text */}
              <p className="font-display text-xl sm:text-2xl text-[#E9E2D5] font-light italic leading-relaxed pt-2">
                "Let's grow your brand with strategic, authentic, and evocative content."
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#E9E2D5]/80 leading-relaxed max-w-md">
              I welcome a curated roster of clients each quarter to guarantee meticulous art
              direction, bespoke attention, and continuous creative impact.
            </p>

            {/* Direct Channels List */}
            <div className="pt-4 space-y-3">
              <p className="font-body text-[11px] font-bold uppercase tracking-wider text-[#6F8DA5]">
                Direct Contact Channels:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/bhoomi.dunka"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 bg-[#12395D]/80 border border-[#315D7E] hover:border-[#6F8DA5] flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#173B5D] flex items-center justify-center text-[#E9E2D5] group-hover:text-[#FFFFFF]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[#6F8DA5] uppercase">
                      Instagram DM
                    </span>
                    <span className="block font-body text-xs font-semibold text-[#F5F1E8]">
                      @bhoomi.dunka
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/14165550192"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 bg-[#12395D]/80 border border-[#315D7E] hover:border-[#6F8DA5] flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#173B5D] flex items-center justify-center text-[#E9E2D5] group-hover:text-[#FFFFFF]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[#6F8DA5] uppercase">
                      WhatsApp Chat
                    </span>
                    <span className="block font-body text-xs font-semibold text-[#F5F1E8]">
                      +1 (416) 555-0192
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@bhoomidunka.com"
                  className="p-3.5 bg-[#12395D]/80 border border-[#315D7E] hover:border-[#6F8DA5] flex items-center gap-3 transition-colors group sm:col-span-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#173B5D] flex items-center justify-center text-[#E9E2D5] group-hover:text-[#FFFFFF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[#6F8DA5] uppercase">
                      Direct Email
                    </span>
                    <span className="block font-body text-xs font-semibold text-[#F5F1E8]">
                      hello@bhoomidunka.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Scrapbook Note */}
            <div className="p-4 bg-[#12395D] border border-dashed border-[#315D7E] relative">
              <Tape variant="cream" width="w-20" height="h-6" rotation={-2} className="-top-3 left-4" />
              <p className="font-script text-2xl text-[#E9E2D5]">
                Average response window: 24 to 48 business hours.
              </p>
              <p className="font-mono text-[10px] text-[#6F8DA5] uppercase tracking-wider mt-0.5">
                Timezone: Toronto / Ontario (EST)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Paper Form (Col 6) */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#F5F1E8] text-[#173A5D] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#E9E2D5]">
              {/* Taped top edge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                <Tape variant="navy" width="w-28" height="h-7" rotation={1} />
              </div>

              {/* Form Content */}
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#173B5D] text-[#F5F1E8] flex items-center justify-center shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-[#173B5D]">
                    Message Received!
                  </h3>
                  <p className="font-body text-sm text-[#315D7E] max-w-sm leading-relaxed">
                    Thank you for reaching out, <strong>{formData.name || 'friend'}</strong>.
                    I will review your brand's details and reply with availability shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-body text-xs font-semibold uppercase tracking-wider text-[#173B5D] underline underline-offset-4 pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="border-b border-[#315D7E]/20 pb-4 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F8DA5] block">
                      Inquiry Dossier
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#173B5D] font-medium">
                      Tell me about your vision
                    </h3>
                  </div>

                  {/* Submission Error Alert if any */}
                  {submitError && (
                    <div className="p-3.5 bg-[#FDF2F2] border border-[#A83232]/30 flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-[#A83232] mt-0.5 shrink-0" />
                      <div className="space-y-1 text-xs">
                        <p className="font-semibold text-[#A83232]">Transmission Encountered an Issue</p>
                        <p className="text-[#315D7E]">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="contact-name" className="block font-body text-xs font-semibold uppercase tracking-wider text-[#173B5D]">
                        Full Name *
                      </label>
                      {touched.name && errors.name && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#A83232]">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-3.5 py-2.5 font-body text-sm text-[#173A5D] placeholder:text-gray-400 focus:outline-hidden transition-colors ${
                        touched.name && errors.name
                          ? 'bg-[#FDF7F7] border border-[#A83232] focus:border-[#A83232] focus:ring-1 focus:ring-[#A83232]'
                          : 'bg-white border border-[#315D7E]/30 focus:border-[#173B5D] focus:ring-1 focus:ring-[#173B5D]'
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="contact-email" className="block font-body text-xs font-semibold uppercase tracking-wider text-[#173B5D]">
                        Email Address *
                      </label>
                      {touched.email && errors.email && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#A83232]">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="sarah@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-3.5 py-2.5 font-body text-sm text-[#173A5D] placeholder:text-gray-400 focus:outline-hidden transition-colors ${
                        touched.email && errors.email
                          ? 'bg-[#FDF7F7] border border-[#A83232] focus:border-[#A83232] focus:ring-1 focus:ring-[#A83232]'
                          : 'bg-white border border-[#315D7E]/30 focus:border-[#173B5D] focus:ring-1 focus:ring-[#173B5D]'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-brand" className="block font-body text-xs font-semibold uppercase tracking-wider text-[#173B5D] mb-1">
                        Your Brand / Instagram
                      </label>
                      <input
                        id="contact-brand"
                        type="text"
                        placeholder="@brand.studio"
                        value={formData.brand}
                        onChange={(e) => handleChange('brand', e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315D7E]/30 focus:border-[#173B5D] focus:ring-1 focus:ring-[#173B5D] font-body text-sm text-[#173A5D] placeholder:text-gray-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block font-body text-xs font-semibold uppercase tracking-wider text-[#173B5D] mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315D7E]/30 focus:border-[#173B5D] focus:ring-1 focus:ring-[#173B5D] font-body text-sm text-[#173A5D] focus:outline-hidden"
                      >
                        <option>Social Media Management</option>
                        <option>Graphic Design &amp; Branding</option>
                        <option>Content Strategy</option>
                        <option>Comprehensive Brand Direction</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="contact-message" className="block font-body text-xs font-semibold uppercase tracking-wider text-[#173B5D]">
                        What goals would you love to accomplish together? *
                      </label>
                      {touched.message && errors.message && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#A83232]">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </span>
                      )}
                    </div>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell me about your current milestones, ideal audience, or the aesthetic you envision..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`w-full px-3.5 py-2.5 font-body text-sm text-[#173A5D] placeholder:text-gray-400 focus:outline-hidden resize-none transition-colors ${
                        touched.message && errors.message
                          ? 'bg-[#FDF7F7] border border-[#A83232] focus:border-[#A83232] focus:ring-1 focus:ring-[#A83232]'
                          : 'bg-white border border-[#315D7E]/30 focus:border-[#173B5D] focus:ring-1 focus:ring-[#173B5D]'
                      }`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full mt-2"
                    icon={isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Transmitting Dossier...' : 'Send Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
