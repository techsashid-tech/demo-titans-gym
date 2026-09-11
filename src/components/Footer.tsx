import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import {
  GYM_ADDRESS,
  GYM_EMAIL,
  GYM_PHONE,
  GYM_PHONE_RAW,
  GYM_TIMINGS_SUNDAY,
  GYM_TIMINGS_WEEKDAY
} from '../data/gymData';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    soundManager.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-neutral-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-black border border-red-600/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(229,29,36,0.4)]">
                <img
                  src="/titans-logo.svg"
                  alt="Titans Gym Spartan Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-['Orbitron',sans-serif] font-black text-xl tracking-wider text-red-500">
                  TITANS GYM
                </span>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                  Fight for Fitness
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-['Inter',sans-serif]">
              Titans Gym is a premier unisex fitness arena committed to forging physical power, cardiovascular resilience, and disciplined lifestyle habits through Olympic-standard equipment and elite biomechanical coaching.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:text-red-400 text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:text-red-400 text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:text-red-400 text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:text-red-400 text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              Arena Directory
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Arena
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Titans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('facilities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Facilities & Gear
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Training Regimens
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('membership')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Membership Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bmitool')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  BMI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Schedule */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              Operating Hours
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Mon – Sat:</div>
                  <div className="font-mono text-neutral-300">{GYM_TIMINGS_WEEKDAY}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Sunday Session:</div>
                  <div className="font-mono text-neutral-300">{GYM_TIMINGS_SUNDAY}</div>
                </div>
              </div>
              <div className="pt-2 text-[11px] font-mono text-neutral-500">
                Early Bird & Night Lifter Access
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              Direct Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-red-500 shrink-0 mt-0.5" />
                <span>{GYM_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-red-500 shrink-0" />
                <a
                  href={`tel:${GYM_PHONE_RAW}`}
                  className="hover:text-white font-mono transition-colors"
                >
                  {GYM_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-red-500 shrink-0" />
                <a
                  href={`mailto:${GYM_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {GYM_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Designer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} <strong className="text-neutral-300">TITANS GYM</strong>. All Rights Reserved. Unisex Fitness Arena.
          </div>

          {/* Explicit Designer Credit Requested by User */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-[11px]">
            <span>Crafted & Designed by</span>
            <strong className="text-red-500 font-['Orbitron',sans-serif]">S K DAS</strong>
            <span>•</span>
            <a
              href="tel:07798977519"
              className="text-neutral-300 hover:text-white transition-colors underline decoration-red-500/50"
            >
              07798977519
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
