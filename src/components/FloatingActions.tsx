import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { GYM_PHONE_RAW, GYM_WHATSAPP } from '../data/gymData';
import { soundManager } from '../utils/audio';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${GYM_WHATSAPP}?text=${encodeURIComponent(
    'Hello Titans Gym, I would like to inquire about membership, timings, and personal training!'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 shadow-xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Call Now Floating Button */}
      <a
        href={`tel:${GYM_PHONE_RAW}`}
        onClick={() => soundManager.playClick()}
        title="Call Titans Gym"
        className="w-12 h-12 rounded-full bg-red-600 text-white shadow-[0_0_20px_rgba(229,29,36,0.6)] border border-red-400 hover:bg-red-500 transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp Chat Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => soundManager.playClick()}
        title="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400 hover:bg-emerald-500 transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer animate-bounce duration-1000"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};
