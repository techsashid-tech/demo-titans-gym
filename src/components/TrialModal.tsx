import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Flame, Calendar, Clock } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, initialPlan = '1-Day Free Trial Pass' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState('Morning (6:00 AM - 9:00 AM)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    soundManager.playChime();
    setSubmitted(true);
  };

  const handleClose = () => {
    soundManager.playClick();
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 text-white overflow-hidden"
          >
            {/* Ambient Red Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(229,29,36,0.4)]">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-black font-['Orbitron',sans-serif] text-white">
                  SLOT RESERVED!
                </h3>
                <p className="text-sm text-neutral-300">
                  Welcome to Titans Gym, <strong className="text-red-400">{name}</strong>. Your pass for <strong className="text-white">{initialPlan}</strong> ({slot}) has been flagged. Our team will SMS your access badge to <strong className="text-white">{phone}</strong>.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 font-['Orbitron',sans-serif] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  Return to Arena
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest font-bold mb-2">
                  <Flame size={14} />
                  <span>VIP PASS INVITATION</span>
                </div>
                <h3 className="text-2xl font-black font-['Orbitron',sans-serif] text-white">
                  CLAIM YOUR TITANS ACCESS
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-['Inter',sans-serif]">
                  Selected: <span className="text-red-400 font-bold">{initialPlan}</span>
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">
                      Preferred Training Slot
                    </label>
                    <div className="relative">
                      <select
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-700 focus:border-red-500 focus:outline-none text-white text-sm appearance-none"
                      >
                        <option value="Morning (5:30 AM - 9:00 AM)">Morning (5:30 AM - 9:00 AM)</option>
                        <option value="Mid-Day (10:00 AM - 2:00 PM)">Mid-Day (10:00 AM - 2:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                        <option value="Night (8:00 PM - 10:00 PM)">Night (8:00 PM - 10:00 PM)</option>
                      </select>
                      <Clock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl font-['Orbitron',sans-serif] font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(229,29,36,0.6)] transition-all cursor-pointer"
                  >
                    Confirm Access Pass
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
