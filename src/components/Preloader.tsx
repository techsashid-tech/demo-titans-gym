import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        // progressive increment
        const step = Math.max(1, Math.floor((100 - prev) * 0.15));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none overflow-hidden"
        >
          {/* Subtle Ambient Red Glow in Background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none" />

          {/* Rotating Red Energy Rings */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-red-600/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border-t-2 border-red-500/60 border-r-transparent border-b-transparent border-l-transparent shadow-[0_0_25px_rgba(229,29,36,0.4)]"
            />
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-red-500/15"
            />

            {/* Central Spartan Logo with Scale & 3D Parallax */}
            <motion.div
              initial={{ scale: 0.82, opacity: 0, rotateY: -15 }}
              animate={{
                scale: progress === 100 ? 1.15 : 1,
                opacity: 1,
                rotateY: 0
              }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 p-2 flex items-center justify-center"
            >
              <img
                src="/titans-logo.svg"
                alt="Titans Gym Spartan Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(229,29,36,0.65)]"
              />
            </motion.div>
          </div>

          {/* Typography Reveal */}
          <div className="text-center z-10 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 12, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-black font-['Orbitron',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-white"
            >
              TITANS GYM
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-red-500/90 mt-2 font-['Inter',sans-serif]"
            >
              Fight for Fitness • Unisex Arena
            </motion.p>
          </div>

          {/* Progress Bar & Numerical Counter */}
          <div className="w-56 sm:w-64 mt-8 flex flex-col items-center gap-2 z-10">
            <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_12px_#E51D24]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between w-full text-[11px] font-mono text-neutral-400">
              <span>FORGING ARENA</span>
              <span className="text-red-400 font-bold">{progress}%</span>
            </div>
          </div>

          {/* Skip Button for impatient users */}
          <button
            onClick={onComplete}
            className="absolute bottom-6 text-[10px] tracking-widest uppercase text-neutral-500 hover:text-white transition-colors cursor-pointer py-1 px-3 border border-neutral-800/80 rounded"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
