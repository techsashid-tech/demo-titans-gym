import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Phone } from 'lucide-react';
import {
  GYM_ADDRESS,
  GYM_MAPS_URL,
  GYM_PHONE,
  GYM_TIMINGS_SUNDAY,
  GYM_TIMINGS_WEEKDAY
} from '../data/gymData';
import { soundManager } from '../utils/audio';

export const LocationMaps: React.FC = () => {
  return (
    <section id="location" className="py-24 relative overflow-hidden bg-neutral-950 text-white">
      {/* Background Red Radiance */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            STRATEGIC LOCATION
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            FIND TITANS GYM
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Located conveniently in the prime fitness hub. Ample dedicated vehicle parking, bike bays, and seamless transit access.
          </p>
        </div>

        {/* Map & Card Container */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/80 bg-neutral-900">
          {/* Responsive Embedded Google Map */}
          <div className="w-full h-[450px] sm:h-[520px] relative">
            <iframe
              title="Titans Gym Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.291772428135!2d88.358245!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjUiTiA4OMKwMjEnMjkuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter contrast-125 brightness-90 invert-[0.9] hue-rotate-180"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Location Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-6 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-red-600/40 shadow-2xl shadow-black">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/50 p-1 flex items-center justify-center shrink-0">
                  <img
                    src="/titans-logo.svg"
                    alt="Titans Gym"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-black font-['Orbitron',sans-serif] text-white">
                    TITANS GYM
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold">
                    Unisex Fitness Arena
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="mt-4 flex items-start gap-2.5 text-xs text-neutral-300">
                <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span>{GYM_ADDRESS}</span>
              </div>

              {/* Hours */}
              <div className="mt-3 flex items-start gap-2.5 text-xs text-neutral-300">
                <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>
                    <span className="text-neutral-400">Mon – Sat:</span>{' '}
                    <span className="font-mono font-bold text-white">{GYM_TIMINGS_WEEKDAY}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">Sunday:</span>{' '}
                    <span className="font-mono font-bold text-white">{GYM_TIMINGS_SUNDAY}</span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-3 flex items-center gap-2.5 text-xs text-neutral-300">
                <Phone size={16} className="text-red-500 shrink-0" />
                <span className="font-mono text-white font-bold">{GYM_PHONE}</span>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex gap-2">
                <a
                  href={GYM_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,29,36,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation size={14} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={GYM_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer flex items-center justify-center"
                  title="Open in Google Maps"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
