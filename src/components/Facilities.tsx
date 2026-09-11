import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Activity, Shield, Zap, Target, Flame, Cpu, Award } from 'lucide-react';
import { FACILITIES_DATA } from '../data/gymData';
import { soundManager } from '../utils/audio';

interface FacilitiesProps {
  onOpenTrial: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={20} className="text-red-500" />,
  Activity: <Activity size={20} className="text-red-500" />,
  Shield: <Shield size={20} className="text-red-500" />,
  Zap: <Zap size={20} className="text-red-500" />,
  Target: <Target size={20} className="text-red-500" />,
  Flame: <Flame size={20} className="text-red-500" />,
  Cpu: <Cpu size={20} className="text-red-500" />,
  Award: <Award size={20} className="text-red-500" />,
};

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenTrial }) => {
  return (
    <section id="facilities" className="py-24 relative overflow-hidden bg-[#070707] text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            WORLD-CLASS ARENA
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            TITANS FACILITIES
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Engineered with zero cutting of corners. Every square foot of Titans Gym is designed for peak biomechanical output, safety, and focused athletic progression.
          </p>
        </div>

        {/* 8 Facility Cards Grid with 3D Hover & Red Light Sweep */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onMouseEnter={() => soundManager.playClick()}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-red-600/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom & Gradient */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-90 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {/* Red Light Sweep Line on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Highlight Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-[10px] font-mono text-neutral-300">
                  {fac.highlight}
                </div>

                {/* Icon Badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-red-600/40 flex items-center justify-center shadow-[0_0_15px_rgba(229,29,36,0.3)]">
                  {ICON_MAP[fac.iconName] || <Dumbbell size={20} className="text-red-500" />}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-red-500 font-mono">
                    {fac.subtitle}
                  </span>
                  <h3 className="text-lg font-black font-['Orbitron',sans-serif] text-white mt-1 group-hover:text-red-400 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed font-['Inter',sans-serif]">
                    {fac.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-neutral-400">
                    Unisex Standard
                  </span>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      onOpenTrial();
                    }}
                    className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tour</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
