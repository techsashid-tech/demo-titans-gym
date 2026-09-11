import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Award, Users, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface AboutProps {
  onOpenTrial: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenTrial }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-neutral-950/60 text-white">
      {/* Subtle Background Red Radiance */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/80 group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                alt="Titans Gym Arena Training Floor"
                className="w-full h-[450px] sm:h-[500px] object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Floating Spartan Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-red-600/40 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/20 border border-red-500/50 p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src="/titans-logo.svg"
                    alt="Titans Badge"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-['Orbitron',sans-serif] text-sm font-black text-white">
                    UNISEX FITNESS ARENA
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    Zero compromises. Olympic standard.
                  </p>
                </div>
              </div>
            </div>

            {/* Accent floating stats chip */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-red-500/50 shadow-[0_0_20px_rgba(229,29,36,0.3)]">
              <ShieldCheck className="text-red-500" size={20} />
              <span className="text-xs font-black font-['Orbitron',sans-serif] tracking-wider text-white">
                FIGHT FOR FITNESS
              </span>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
              <span className="w-8 h-[2px] bg-red-600" />
              ABOUT TITANS GYM
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wide text-white leading-tight mb-6">
              BUILT FOR THOSE WHO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400">
                REFUSE TO QUIT.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-['Inter',sans-serif]">
              Titans Gym was created with a single uncompromising mission: to provide an elite, unisex training arena where anyone who steps inside can unlock their absolute highest level of strength, endurance, and physical discipline.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 font-['Inter',sans-serif]">
              Whether your focus is heavy compound barbell progression, high-intensity aerobic fat burn, lean muscular hypertrophy, or sustainable cardiovascular conditioning, our arena pairs competition-grade equipment with world-class biomechanics coaching.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <Target className="text-red-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-white">Precision Conditioning</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Biomechanical alignments that protect joints while maximizing power.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <Users className="text-red-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-white">Unisex Fitness Arena</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Safe, disciplined, and motivating environment for both women & men.</p>
                </div>
              </div>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Orbitron',sans-serif] text-red-500">
                  500+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                  Active Members
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Orbitron',sans-serif] text-white">
                  10+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                  Training Programs
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Orbitron',sans-serif] text-red-500">
                  100%
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                  Commitment
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Orbitron',sans-serif] text-white">
                  1
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                  Titans Community
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div>
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenTrial();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(229,29,36,0.4)] cursor-pointer"
              >
                <span>Experience Titans Gym</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
