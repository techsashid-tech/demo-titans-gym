import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { BmiCalculator } from './components/BmiCalculator';
import { RotatingGallery } from './components/RotatingGallery';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { LocationMaps } from './components/LocationMaps';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Free 1-Day VIP Trial');

  useEffect(() => {
    // Sync dark mode class on document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenTrial = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    } else {
      setSelectedPlan('Free 1-Day VIP Trial');
    }
    setTrialModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080808] text-white' : 'bg-neutral-50 text-neutral-900'} font-['Inter',sans-serif] selection:bg-red-600 selection:text-white transition-colors duration-300`}>
      {/* 1. Cinematic Preloader with Spartan Logo & Progress */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* 2. Glass Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenTrial={() => handleOpenTrial('Free 1-Day VIP Trial')}
      />

      {/* 3. Hero Section with 4K Video Background & 3D Typography */}
      <main>
        <Hero onOpenTrial={() => handleOpenTrial('Free 1-Day VIP Trial')} />

        {/* 4. About Titans Gym & Animated Statistics */}
        <About onOpenTrial={() => handleOpenTrial('Free 1-Day VIP Trial')} />

        {/* 5. 8 World-Class Facilities with 3D Light Sweep */}
        <Facilities onOpenTrial={() => handleOpenTrial('Facility Tour Pass')} />

        {/* 6. Training Protocols with Filter Tabs */}
        <Programs onOpenTrial={() => handleOpenTrial('Training Protocol Induction')} />

        {/* 7. Membership Pricing Tiers & Billing Switcher */}
        <Membership onSelectPlan={(plan) => handleOpenTrial(plan)} />

        {/* 8. Working Interactive BMI Calculator & Gauge */}
        <BmiCalculator onOpenTrial={() => handleOpenTrial('BMI Body Transformation Program')} />

        {/* 9. 3D Perspective Rotating Image Gallery & Lightbox */}
        <RotatingGallery />

        {/* 10. Verified Reviews & 4.9 Star Rating */}
        <Reviews />

        {/* 11. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 12. Strategic Location & Google Maps */}
        <LocationMaps />

        {/* 13. Direct Connect & Validated Contact Form */}
        <ContactSection />
      </main>

      {/* 14. Footer with Quick Links & S K DAS Designer Credit */}
      <Footer />

      {/* 15. Floating Action Buttons (WhatsApp, Call Now, Back to Top) */}
      <FloatingActions />

      {/* 16. Free Trial & Plan Reservation Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </div>
  );
}
