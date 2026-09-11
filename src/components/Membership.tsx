import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Zap, Shield, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { soundManager } from '../utils/audio';

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('quarterly');

  const getPrice = (plan: typeof MEMBERSHIP_PLANS[0]) => {
    if (billingCycle === 'monthly') return { price: plan.priceMonthly, period: '/ month' };
    if (billingCycle === 'quarterly') return { price: plan.priceQuarterly, period: '/ 3 months' };
    return { price: plan.priceYearly, period: '/ year' };
  };

  return (
    <section id="membership" className="py-24 relative overflow-hidden bg-[#070707] text-white">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            MEMBERSHIP TIERS
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            CHOOSE YOUR LEVEL
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Transparent pricing with zero hidden charges. Complete unisex access, competition equipment, and certified coaches.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
            <button
              onClick={() => {
                soundManager.playClick();
                setBillingCycle('monthly');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setBillingCycle('quarterly');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer relative ${
                billingCycle === 'quarterly'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>3 Months</span>
              <span className="ml-1.5 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-mono">
                Popular
              </span>
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setBillingCycle('yearly');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer relative ${
                billingCycle === 'yearly'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="ml-1.5 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const { price, period } = getPrice(plan);
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-neutral-900/90 border-2 border-red-500 shadow-[0_0_35px_rgba(229,29,36,0.35)] md:-translate-y-3'
                    : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-[11px] font-black font-['Orbitron',sans-serif] tracking-widest uppercase shadow-[0_0_15px_#E51D24] flex items-center gap-1.5">
                    <Star size={13} fill="currentColor" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black font-['Orbitron',sans-serif] text-white">
                      {plan.name}
                    </h3>
                    {isPopular ? (
                      <Zap className="text-red-500" size={24} />
                    ) : (
                      <Shield className="text-neutral-500" size={24} />
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 font-mono">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-['Orbitron',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                      {price}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{period}</span>
                  </div>

                  {/* Checklist */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-neutral-800">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-6 border-t border-neutral-800/80 space-y-3">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      onSelectPlan(`${plan.name} (${billingCycle})`);
                    }}
                    className={`w-full py-3.5 rounded-xl font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
                      isPopular
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(229,29,36,0.5)]'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => {
                      soundManager.playClick();
                      onSelectPlan(`Enquiry for ${plan.name}`);
                    }}
                    className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
                  >
                    Enquire Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
