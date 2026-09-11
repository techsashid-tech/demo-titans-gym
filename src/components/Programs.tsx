import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/gymData';
import { soundManager } from '../utils/audio';

interface ProgramsProps {
  onOpenTrial: () => void;
}

const CATEGORIES = [
  { key: 'all', label: 'All Protocols' },
  { key: 'strength', label: 'Strength & Muscle' },
  { key: 'cardio', label: 'Cardio & HIIT' },
  { key: 'transformation', label: 'Weight Loss' },
  { key: 'personal', label: '1-on-1 Coaching' },
];

export const Programs: React.FC<ProgramsProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-neutral-950 text-white">
      {/* Red ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-red-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            DISCIPLINE CREATES RESULTS
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            TRAINING PROGRAMS
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Scientifically programmed protocols. Whether you aim to bench 150 kg or trim 15 kg of fat, our structured regimens will take you to your personal summit.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                soundManager.playClick();
                setActiveTab(cat.key);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat.key
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(229,29,36,0.5)] border border-red-500'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-neutral-900/70 border border-neutral-800 hover:border-red-600/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />

                  {/* Difficulty Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-600/50 text-[11px] font-mono text-red-400 flex items-center gap-1.5">
                    <Flame size={12} className="text-red-500" />
                    <span>{prog.difficulty}</span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700 text-[11px] font-mono text-neutral-300 flex items-center gap-1.5">
                    <Clock size={12} className="text-neutral-400" />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black font-['Orbitron',sans-serif] text-white group-hover:text-red-400 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed font-['Inter',sans-serif]">
                      {prog.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2 border-t border-neutral-800/80 pt-4">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 pt-4 border-t border-neutral-800">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        onOpenTrial();
                      }}
                      className="w-full py-3 rounded-xl font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider text-white bg-neutral-800 group-hover:bg-red-600 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Join This Protocol</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
