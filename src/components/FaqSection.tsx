import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/gymData';
import { soundManager } from '../utils/audio';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    soundManager.playClick();
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070707] text-white">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            FREQUENTLY ASKED QUESTIONS
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            COMMON INQUIRIES
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Everything you need to know about membership protocols, hours, trial workouts, and training amenities at Titans Gym.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900/80 border-red-600/60 shadow-[0_0_20px_rgba(229,29,36,0.15)]'
                    : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className={isOpen ? 'text-red-500' : 'text-neutral-500'} />
                    <span className="text-base sm:text-lg font-bold font-['Orbitron',sans-serif] text-white">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-neutral-400"
                  >
                    <ChevronDown size={20} className={isOpen ? 'text-red-500' : 'text-neutral-400'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed font-['Inter',sans-serif] border-t border-neutral-800/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
