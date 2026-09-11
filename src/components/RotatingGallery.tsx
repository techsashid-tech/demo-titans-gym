import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { soundManager } from '../utils/audio';

export const RotatingGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const total = GALLERY_ITEMS.length;

  useEffect(() => {
    if (!isAutoPlay || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoPlay, lightboxIndex, total]);

  const handlePrev = () => {
    soundManager.playWhoosh();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    soundManager.playWhoosh();
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const openLightbox = (index: number) => {
    soundManager.playClick();
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    soundManager.playClick();
    setLightboxIndex(null);
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#070707] text-white select-none">
      {/* Red ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            3D PERSPECTIVE ARENA
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            TITANS 3D GALLERY
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Immerse yourself into the Titans Gym arena floor. Click any angle to inspect our high-caliber facilities in full-screen resolution.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div
          className="relative w-full max-w-4xl mx-auto h-[380px] sm:h-[480px] flex items-center justify-center [perspective:1200px]"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {GALLERY_ITEMS.map((item, idx) => {
            // Calculate relative offset from active index
            let offset = idx - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isNear = Math.abs(offset) <= 2;

            if (!isNear) return null;

            // 3D Math for cylinder curve
            const translateX = offset * 220; // horizontal spread
            const translateZ = -Math.abs(offset) * 140; // depth
            const rotateY = -offset * 25; // rotation in degrees
            const opacity = Math.max(0.2, 1 - Math.abs(offset) * 0.35);
            const scale = Math.max(0.75, 1 - Math.abs(offset) * 0.15);

            return (
              <motion.div
                key={item.id}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (isCenter) {
                    openLightbox(idx);
                  } else {
                    soundManager.playWhoosh();
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute w-[280px] sm:w-[380px] h-[320px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  isCenter
                    ? 'border-red-500 shadow-[0_0_35px_rgba(229,29,36,0.5)] z-30'
                    : 'border-neutral-800 shadow-xl z-10'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Card Title & Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black font-['Orbitron',sans-serif] text-white">
                    {item.title}
                  </h3>
                  {isCenter && (
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-xs text-neutral-300 line-clamp-1 font-['Inter',sans-serif]">
                        {item.caption}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(idx);
                        }}
                        className="p-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition-colors shrink-0"
                      >
                        <Maximize2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  soundManager.playWhoosh();
                  setActiveIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-7 bg-red-500 shadow-[0_0_10px_#E51D24]' : 'w-2 bg-neutral-700'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Full-Screen Lightbox Preview */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
              <button
                onClick={closeLightbox}
                className="p-3 rounded-full bg-neutral-900/90 border border-neutral-700 text-white hover:bg-red-600 hover:border-red-500 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Lightbox Content */}
            <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-neutral-800 shadow-2xl"
              />

              {/* Lightbox Caption */}
              <div className="mt-4 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  {GALLERY_ITEMS[lightboxIndex].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Orbitron',sans-serif] text-white mt-1">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1 max-w-xl mx-auto font-['Inter',sans-serif]">
                  {GALLERY_ITEMS[lightboxIndex].caption}
                </p>
              </div>

              {/* Prev / Next within Lightbox */}
              <button
                onClick={() => {
                  soundManager.playWhoosh();
                  setLightboxIndex((prev) => (prev! - 1 + total) % total);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 border border-neutral-700 text-white hover:bg-red-600 transition-colors cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  soundManager.playWhoosh();
                  setLightboxIndex((prev) => (prev! + 1) % total);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 border border-neutral-700 text-white hover:bg-red-600 transition-colors cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
