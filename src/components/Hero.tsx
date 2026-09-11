import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Flame, MapPin, Dumbbell, ArrowRight } from 'lucide-react';
import { GYM_MAPS_URL, ROTATING_TAGLINES } from '../data/gymData';
import { soundManager } from '../utils/audio';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % ROTATING_TAGLINES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    soundManager.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* 1. Full-Viewport High Quality Gym Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0a0a0a]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-125"
        >
          {/* Primary High-Performance Workout Video Stream */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athletic-man-lifting-weights-in-a-gym-43343-large.mp4"
            type="video/mp4"
          />
          {/* Fallback Backup Gym Video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-crossfit-workout-5621/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* 2. Cinematic Layered Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#080808]" />

        {/* 3. Red Ambient Energy Halos */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* 4. Foreground Content with 3D Depth */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Floating 3D Spartan Logo */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateZ: [-1, 1, -1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative w-28 h-28 sm:w-36 sm:h-36 mb-4 filter drop-shadow-[0_0_35px_rgba(229,29,36,0.6)]"
        >
          <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl animate-pulse" />
          <img
            src="/titans-logo.svg"
            alt="Titans Gym Spartan Logo"
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>

        {/* Supporting Arena Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-600/40 text-red-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(229,29,36,0.3)] backdrop-blur-md"
        >
          <Flame size={14} className="text-red-500 animate-pulse" />
          <span>UNISEX FITNESS ARENA</span>
        </motion.div>

        {/* Main 3D Headline: TITANS GYM */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-['Orbitron',sans-serif] tracking-wider sm:tracking-widest uppercase text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
            TITANS
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 drop-shadow-[0_0_30px_rgba(229,29,36,0.7)]">
            GYM
          </span>
        </motion.h1>

        {/* Secondary Headline: FIGHT FOR FITNESS */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl md:text-3xl font-serif italic text-red-500 tracking-wide font-bold mt-2"
        >
          "Fight for Fitness"
        </motion.p>

        {/* Rotating Dynamic Tagline */}
        <div className="h-10 sm:h-12 mt-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={taglineIndex}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-base font-bold font-mono tracking-[0.3em] uppercase text-neutral-300 px-4 py-1 rounded bg-black/40 border border-neutral-800"
            >
              {ROTATING_TAGLINES[taglineIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Premium 3D Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-2xl"
        >
          {/* Button 1: JOIN TITANS */}
          <button
            onClick={() => {
              soundManager.playClick();
              scrollToSection('membership');
            }}
            className="group relative px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-['Orbitron',sans-serif] font-black text-xs sm:text-sm tracking-wider uppercase text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_25px_rgba(229,29,36,0.6)] border border-red-400/80 transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>JOIN TITANS</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: BOOK A FREE TRIAL */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenTrial();
            }}
            className="group px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-['Orbitron',sans-serif] font-black text-xs sm:text-sm tracking-wider uppercase text-white bg-black/80 hover:bg-neutral-900 border-2 border-red-600/70 hover:border-red-500 shadow-[0_0_20px_rgba(229,29,36,0.3)] transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Flame size={16} className="text-red-500" />
            <span>FREE TRIAL</span>
          </button>

          {/* Button 3: EXPLORE PROGRAMS */}
          <button
            onClick={() => {
              soundManager.playClick();
              scrollToSection('programs');
            }}
            className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-['Inter',sans-serif] font-bold text-xs sm:text-sm tracking-wider uppercase text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Dumbbell size={16} className="text-neutral-400" />
            <span>PROGRAMS</span>
          </button>

          {/* Button 4: GET DIRECTIONS */}
          <a
            href={GYM_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-['Inter',sans-serif] font-bold text-xs sm:text-sm tracking-wider uppercase text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <MapPin size={16} className="text-red-500" />
            <span>DIRECTIONS</span>
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl border-t border-neutral-800/80 pt-6 text-neutral-300">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-['Orbitron',sans-serif] text-red-500">500+</span>
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">Active Titans</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-['Orbitron',sans-serif] text-white">100%</span>
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">Unisex Fitness Arena</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-['Orbitron',sans-serif] text-red-500">10+</span>
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">Training Protocols</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black font-['Orbitron',sans-serif] text-white">5:30 AM</span>
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">Early Open Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};
