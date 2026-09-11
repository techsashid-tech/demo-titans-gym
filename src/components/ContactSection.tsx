import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  GYM_ADDRESS,
  GYM_EMAIL,
  GYM_PHONE,
  GYM_PHONE_RAW,
  GYM_WHATSAPP
} from '../data/gymData';
import { soundManager } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Strength & Hypertrophy',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }

    soundManager.playChime();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Titans Gym! My name is ${formData.name || 'a fitness enthusiast'}. I would like to inquire about membership and training programs at your unisex fitness arena.`
  );
  const whatsappUrl = `https://wa.me/${GYM_WHATSAPP}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070707] text-white">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            CONNECT WITH COACHES
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            CONTACT TITANS GYM
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Ready to fight for your fitness? Drop us a message, call directly, or chat on WhatsApp to schedule your trial workout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-6">
              <h3 className="text-xl font-black font-['Orbitron',sans-serif] text-white">
                DIRECT CHANNELS
              </h3>

              {/* Call Now */}
              <a
                href={`tel:${GYM_PHONE_RAW}`}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-800/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Call Directly</div>
                  <div className="text-base font-bold font-mono text-white group-hover:text-red-400">
                    {GYM_PHONE}
                  </div>
                </div>
              </a>

              {/* WhatsApp Now */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/60 hover:bg-neutral-800/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">WhatsApp Chat</div>
                  <div className="text-base font-bold font-mono text-white group-hover:text-emerald-400">
                    Instant Response Available
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${GYM_EMAIL}`}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-800/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Email Inquiries</div>
                  <div className="text-base font-bold text-white group-hover:text-red-400">
                    {GYM_EMAIL}
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 text-neutral-400 flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Arena Address</div>
                  <div className="text-sm font-medium text-neutral-300 mt-0.5">
                    {GYM_ADDRESS}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black font-['Orbitron',sans-serif] text-white mb-2">
                SEND A MESSAGE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-['Inter',sans-serif]">
                Fill out the form below. A senior floor coach will reach out to verify your slot and discuss your target milestones.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-600/50 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-600/20 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-black font-['Orbitron',sans-serif] text-white">
                    INQUIRY RECEIVED!
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-400">{formData.name}</strong>. Our head trainer has been alerted and will contact you at <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        program: 'Strength & Hypertrophy',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-600 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                        Preferred Program
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm"
                      >
                        <option value="Strength & Hypertrophy">Strength & Hypertrophy</option>
                        <option value="Cardio Fitness & HIIT">Cardio Fitness & HIIT</option>
                        <option value="Weight Loss & Transformation">Weight Loss & Transformation</option>
                        <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                        <option value="General Fitness & Aerobics">General Fitness & Aerobics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                      Your Goals or Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current fitness experience and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(229,29,36,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Transmit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
