import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA, GYM_MAPS_URL } from '../data/gymData';
import { soundManager } from '../utils/audio';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-neutral-950 text-white">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            ATHLETE EXPERIENCES
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            COMMUNITY VOICES
          </h2>

          {/* Rating Summary Pill */}
          <div className="mt-4 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="font-['Orbitron',sans-serif] font-black text-white text-base">4.9 / 5.0</span>
            <span className="text-neutral-500 text-xs">|</span>
            <span className="text-xs font-mono text-neutral-300">Over 350+ Verified Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 hover:border-red-600/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar & Verified Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-red-500/60"
                    />
                    <div>
                      <h4 className="font-['Orbitron',sans-serif] font-black text-base text-white">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-600/40 text-emerald-400 text-[10px] font-mono">
                    <CheckCircle size={12} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400 mt-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                  <span className="text-xs text-neutral-500 ml-2 font-mono">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-300 mt-4 leading-relaxed font-['Inter',sans-serif]">
                  "{rev.comment}"
                </p>
              </div>

              {/* Achievement Pill */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-red-400 font-semibold flex items-center gap-1.5">
                  <MessageSquare size={13} />
                  <span>{rev.achievement}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={GYM_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-red-500 transition-all shadow-lg cursor-pointer"
          >
            <span>Read All Reviews on Google Maps</span>
            <ExternalLink size={14} className="text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
