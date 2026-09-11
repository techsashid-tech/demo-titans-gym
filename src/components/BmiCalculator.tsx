import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface BmiCalculatorProps {
  onOpenTrial: () => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onOpenTrial }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  // Metric values
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(72);

  // Imperial values
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);
  const [weightLb, setWeightLb] = useState<number>(160);

  // Calculate BMI
  const bmiResult = useMemo(() => {
    let bmiValue = 0;
    if (unit === 'metric') {
      const heightM = heightCm / 100;
      if (heightM > 0) {
        bmiValue = weightKg / (heightM * heightM);
      }
    } else {
      const totalInches = heightFt * 12 + heightIn;
      if (totalInches > 0) {
        bmiValue = (weightLb * 703) / (totalInches * totalInches);
      }
    }

    const roundedBmi = parseFloat(bmiValue.toFixed(1));

    let category = 'Normal';
    let color = '#22C55E'; // green
    let advice = 'You have a healthy body weight. Maintain your training balance with resistance and cardiovascular conditioning.';

    if (roundedBmi < 18.5) {
      category = 'Underweight';
      color = '#38BDF8'; // light blue
      advice = 'Focus on nutrient-dense calorie surplus, progressive resistance training, and protein intake to build lean muscle mass.';
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      category = 'Normal Weight';
      color = '#22C55E'; // green
      advice = 'Optimal range! Our Strength & Conditioning protocols will help you increase muscle density and athletic stamina.';
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      category = 'Overweight';
      color = '#F59E0B'; // amber
      advice = 'Focus on high-intensity metabolic conditioning, caloric moderation, and daily resistance routines to shed body fat.';
    } else {
      category = 'Obesity';
      color = '#EF4444'; // red
      advice = 'A structured, progressive fat oxidation protocol with supervised coaching will safely kickstart your transformation.';
    }

    return {
      bmi: isNaN(roundedBmi) ? 22.0 : roundedBmi,
      category,
      color,
      advice
    };
  }, [unit, heightCm, weightKg, heightFt, heightIn, weightLb]);

  // Calculate rotation angle for gauge (15 to 40 BMI mapped to -90 to +90 deg)
  const gaugePercent = Math.min(100, Math.max(0, ((bmiResult.bmi - 15) / 25) * 100));
  const strokeDashoffset = 283 - (283 * gaugePercent) / 100;

  return (
    <section id="bmitool" className="py-24 relative overflow-hidden bg-neutral-950 text-white">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 mb-3">
            <span className="w-8 h-[2px] bg-red-600" />
            DIAGNOSTIC TELEMETRY
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Orbitron',sans-serif] tracking-wider text-white uppercase">
            CALCULATE YOUR BMI
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base font-['Inter',sans-serif]">
            Your Fitness Journey Starts Here. Calculate your Body Mass Index instantly and get targeted recommendations for your training goals.
          </p>
        </div>

        {/* BMI Calculator Interface */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unit Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-bold font-['Orbitron',sans-serif] text-neutral-300">
                <Calculator size={18} className="text-red-500" />
                <span>SELECT UNIT SYSTEM</span>
              </div>
              <div className="inline-flex rounded-xl bg-black/60 p-1 border border-neutral-800">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setUnit('metric');
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                    unit === 'metric' ? 'bg-red-600 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Metric (CM/KG)
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setUnit('imperial');
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                    unit === 'imperial' ? 'bg-red-600 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Imperial (FT/LB)
                </button>
              </div>
            </div>

            {/* Inputs based on Unit */}
            {unit === 'metric' ? (
              <div className="space-y-6">
                {/* Height Slider & Input */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-neutral-300">Height</span>
                    <span className="font-mono text-red-400">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                    <span>120 cm</span>
                    <span>170 cm</span>
                    <span>220 cm</span>
                  </div>
                </div>

                {/* Weight Slider & Input */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-neutral-300">Weight</span>
                    <span className="font-mono text-red-400">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="160"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                    <span>35 kg</span>
                    <span>95 kg</span>
                    <span>160 kg</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Imperial Height: Feet + Inches */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-neutral-300">Height</span>
                    <span className="font-mono text-red-400">{heightFt} ft {heightIn} in</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Feet</label>
                      <input
                        type="number"
                        min="4"
                        max="7"
                        value={heightFt}
                        onChange={(e) => setHeightFt(Number(e.target.value))}
                        className="w-full bg-black/60 border border-neutral-700 rounded-xl px-4 py-2 text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Inches</label>
                      <input
                        type="number"
                        min="0"
                        max="11"
                        value={heightIn}
                        onChange={(e) => setHeightIn(Number(e.target.value))}
                        className="w-full bg-black/60 border border-neutral-700 rounded-xl px-4 py-2 text-white font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Imperial Weight */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-neutral-300">Weight</span>
                    <span className="font-mono text-red-400">{weightLb} lbs</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="350"
                    value={weightLb}
                    onChange={(e) => setWeightLb(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                    <span>80 lbs</span>
                    <span>215 lbs</span>
                    <span>350 lbs</span>
                  </div>
                </div>
              </div>
            )}

            {/* Metric Ranges Quick Guide */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-neutral-800 text-center">
              <div className="p-2 rounded-lg bg-black/40 border border-sky-900/40">
                <div className="text-[10px] text-sky-400 font-bold">&lt; 18.5</div>
                <div className="text-[9px] text-neutral-400 uppercase">Underweight</div>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-emerald-900/40">
                <div className="text-[10px] text-emerald-400 font-bold">18.5 – 24.9</div>
                <div className="text-[9px] text-neutral-400 uppercase">Normal</div>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-amber-900/40">
                <div className="text-[10px] text-amber-400 font-bold">25 – 29.9</div>
                <div className="text-[9px] text-neutral-400 uppercase">Overweight</div>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-rose-900/40">
                <div className="text-[10px] text-rose-400 font-bold">30+</div>
                <div className="text-[9px] text-neutral-400 uppercase">Obesity</div>
              </div>
            </div>
          </div>

          {/* Results Gauge Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-black/60 rounded-2xl border border-neutral-800/90 text-center">
            {/* Animated Circular Gauge */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#262626"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Animated Progress Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke={bmiResult.color}
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * gaugePercent) / 100}
                  strokeLinecap="round"
                  fill="none"
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </svg>

              {/* Central Value Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black font-['Orbitron',sans-serif] text-white">
                  {bmiResult.bmi}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                  BMI Score
                </span>
              </div>
            </div>

            {/* Category Tag */}
            <div
              className="mt-4 px-4 py-1.5 rounded-full text-xs font-black font-['Orbitron',sans-serif] uppercase tracking-wider"
              style={{
                backgroundColor: `${bmiResult.color}20`,
                color: bmiResult.color,
                border: `1px solid ${bmiResult.color}60`
              }}
            >
              {bmiResult.category}
            </div>

            {/* Advice Box */}
            <p className="text-xs text-neutral-300 mt-4 leading-relaxed px-2 font-['Inter',sans-serif]">
              {bmiResult.advice}
            </p>

            {/* CTA button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenTrial();
              }}
              className="mt-6 w-full py-3 bg-red-600 hover:bg-red-500 text-white font-['Orbitron',sans-serif] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(229,29,36,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Custom Transformation Plan</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
