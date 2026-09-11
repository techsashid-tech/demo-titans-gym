import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sun, Moon, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenTrial: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'programs', label: 'Programs' },
  { id: 'membership', label: 'Membership' },
  { id: 'bmitool', label: 'BMI Tool' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.getSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scrollspy
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = soundManager.toggleSound();
    setSoundEnabled(nextState);
  };

  const scrollToSection = (id: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-red-950/40 shadow-xl shadow-black/60 py-3'
              : 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-lg shadow-neutral-300/40 py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/80 border border-red-600/40 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-red-500 shadow-[0_0_15px_rgba(229,29,36,0.3)]">
              <img
                src="/titans-logo.svg"
                alt="Titans Gym Spartan Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Orbitron',sans-serif] font-black text-base sm:text-lg tracking-wider text-red-500 group-hover:text-red-400 transition-colors">
                TITANS GYM
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-neutral-400 dark:text-neutral-400">
                Fight for Fitness
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'text-red-500 font-bold'
                      : darkMode
                        ? 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                        : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-red-600 rounded-full shadow-[0_0_8px_#E51D24]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                soundEnabled
                  ? 'border-red-600/50 bg-red-600/10 text-red-400'
                  : 'border-neutral-700/60 bg-neutral-800/40 text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={() => {
                soundManager.playClick();
                onToggleTheme();
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-full border border-neutral-700/60 bg-neutral-800/40 text-neutral-300 hover:text-yellow-400 hover:border-yellow-500/50 transition-all cursor-pointer"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Free Trial / Join CTA */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenTrial();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-[0_0_20px_rgba(229,29,36,0.4)] border border-red-500/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Join Titans</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:text-red-500 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#080808]/98 backdrop-blur-xl text-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <img
                src="/titans-logo.svg"
                alt="Titans Gym"
                className="w-9 h-9 object-contain"
              />
              <span className="font-['Orbitron',sans-serif] font-black text-red-500 text-lg tracking-wider">
                TITANS GYM
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-red-600/15 text-red-500 border-l-4 border-red-500'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#E51D24]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-black text-sm uppercase tracking-widest rounded-lg shadow-[0_0_20px_rgba(229,29,36,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book A Free Trial</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-center text-xs text-neutral-500 font-mono">
              Unisex Fitness Arena • Fight for Fitness
            </p>
          </div>
        </div>
      )}
    </>
  );
};
