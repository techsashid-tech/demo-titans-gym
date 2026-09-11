import { Facility, FaqItem, GalleryItem, MembershipPlan, Program, Review } from '../types';

export const GYM_PHONE = "+91 77989 77519";
export const GYM_PHONE_RAW = "+917798977519";
export const GYM_WHATSAPP = "917798977519";
export const GYM_EMAIL = "contact@titansgym.com";
export const GYM_MAPS_URL = "https://maps.google.com/?q=Titans+Gym+Unisex+Fitness+Arena";
export const GYM_ADDRESS = "Titans Gym, Main Boulevard, Unisex Fitness Arena, Sector 4";
export const GYM_TIMINGS_WEEKDAY = "5:30 AM – 10:00 PM";
export const GYM_TIMINGS_SUNDAY = "6:00 AM – 1:00 PM";

export const ROTATING_TAGLINES = [
  "BUILD YOUR STRENGTH",
  "FORGE YOUR BODY",
  "TRAIN LIKE A TITAN",
  "NO EXCUSES. ONLY RESULTS.",
  "POWER. DISCIPLINE. TRANSFORMATION."
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    subtitle: 'Olympic Standard Racks & Platforms',
    description: 'Heavy-duty power cages, deadlift platforms, and calibrated cast-iron & bumper plates built for serious lifters.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Dumbbell',
    highlight: 'Calibrated Competition Iron'
  },
  {
    id: 'cardio',
    title: 'Cardio Zone',
    subtitle: 'High-Performance Conditioning',
    description: 'Commercial treadmills, stairmasters, air bikes, and rowing ergometers with heart-rate and wattage tracking.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Activity',
    highlight: 'Advanced Biometric Metrics'
  },
  {
    id: 'freeweights',
    title: 'Free Weights Arena',
    subtitle: 'Extensive Dumbbell & Barbell Racks',
    description: 'Dumbbells ranging from 2.5 kg to 60 kg, pre-loaded EZ bars, flat, incline, and military adjustable benches.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Shield',
    highlight: 'Up to 60KG Pairs'
  },
  {
    id: 'functional',
    title: 'Functional Training',
    subtitle: 'Agility, Plyo & Turf Floor',
    description: 'Sled turf track, battle ropes, kettlebells, medicine balls, plyometric boxes, and suspension rings for athletic power.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Zap',
    highlight: '30m Sled & Sprint Turf'
  },
  {
    id: 'personal',
    title: 'Personal Training Zone',
    subtitle: '1-on-1 Dedicated Coaching',
    description: 'Customized periodization, biomechanics alignment, nutritional consulting, and direct coaching with elite trainers.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Target',
    highlight: 'Certified Masters Coaches'
  },
  {
    id: 'aerobic',
    title: 'Aerobics & Group Arena',
    subtitle: 'High-Energy Collective Rhythm',
    description: 'Spacious sprung-wood floor with immersive sound & lighting for HIIT, cardio kickboxing, and core endurance sessions.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Flame',
    highlight: 'Dynamic Studio Sound'
  },
  {
    id: 'equipment',
    title: 'Modern Biomechanical Machines',
    subtitle: 'Precision Pin & Plate-Loaded',
    description: 'Isolateral chest presses, hack squats, pendulum squats, and cable crossover systems engineered for muscle isolation.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Cpu',
    highlight: 'Natural Diverging Resistance'
  },
  {
    id: 'space',
    title: 'Recovery & Locker Lounge',
    subtitle: 'Unisex Premium Amenities',
    description: 'Private showers, hygienic keyless biometric lockers, hydration station, and dedicated mobility stretch area.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Award',
    highlight: 'Clean Climate Controlled'
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'prog-strength',
    title: 'Strength & Hypertrophy',
    category: 'strength',
    description: 'Progressive overload protocols focused on compound lifts, barbell mastery, and sculpting dense, functional muscle.',
    duration: '12 Weeks Protocol',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    features: ['Squat/Bench/Deadlift Focus', 'Periodized Rep Schemes', 'Strength Testing Milestones']
  },
  {
    id: 'prog-cardio',
    title: 'Cardio Engine & Conditioning',
    category: 'cardio',
    description: 'Aerobic threshold training, VO2 max elevation, and interval endurance to build an unstoppable cardio engine.',
    duration: '8 Weeks Cycle',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=800&auto=format&fit=crop',
    features: ['HIIT & Aerobic Pacing', 'Stamina Metric Tracking', 'Metabolic Boost']
  },
  {
    id: 'prog-weight',
    title: 'Weight Management & Fat Loss',
    category: 'transformation',
    description: 'Targeted caloric expenditure protocols paired with lean mass retention and sustainable lifestyle conditioning.',
    duration: '16 Weeks Program',
    difficulty: 'All Levels',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    features: ['Fat Oxidation Circuits', 'Body Composition Scans', 'Nutrition Guidance']
  },
  {
    id: 'prog-functional',
    title: 'Functional Athletic Performance',
    category: 'strength',
    description: 'Multi-planar movements, explosiveness, core stability, and rotational power designed for all-round athletic readiness.',
    duration: '10 Weeks Program',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop',
    features: ['Plyometrics & Turf Drills', 'Kettlebell & Sled Work', 'Joint Mobility']
  },
  {
    id: 'prog-personal',
    title: '1-on-1 Elite Personal Coaching',
    category: 'personal',
    description: 'Exclusive mentorship with our senior head coaches tailored precisely to your biomechanics, schedule, and goals.',
    duration: 'Custom Timeline',
    difficulty: 'All Levels',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    features: ['Direct Form Correction', 'Tailored Macro Breakdown', 'Weekly Accountability']
  },
  {
    id: 'prog-general',
    title: 'General Fitness & Longevity',
    category: 'transformation',
    description: 'Balanced posture, cardiovascular resilience, flexibility, and daily stamina to keep you feeling vibrant year-round.',
    duration: 'Ongoing Routine',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
    features: ['Low Impact Options', 'Mobility & Posture', 'Stress Relief & Energy']
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-basic',
    name: 'BASIC',
    tagline: 'Foundational entry for consistent lifters',
    priceMonthly: '₹ 1,499',
    priceQuarterly: '₹ 3,899',
    priceYearly: '₹ 12,999',
    features: [
      'Full Gym Floor & Equipment Access',
      'Locker & Shower Facility',
      'Free Fitness Induction & Form Audit',
      'Standard Mobile Access Pass',
      'Hydration & Stretch Station'
    ]
  },
  {
    id: 'plan-premium',
    name: 'PREMIUM',
    popular: true,
    tagline: 'The definitive complete fitness package',
    priceMonthly: '₹ 2,299',
    priceQuarterly: '₹ 5,799',
    priceYearly: '₹ 18,999',
    features: [
      'All Basic Plan Privileges',
      'Unisex Aerobics & HIIT Studio Access',
      'Monthly InBody Composition Scan',
      '2 Guest Passes per Month',
      'Customized Cardio & Workout Routine',
      'Priority Locker Selection'
    ]
  },
  {
    id: 'plan-titan',
    name: 'TITAN VIP',
    tagline: 'Uncompromising performance & mentorship',
    priceMonthly: '₹ 3,499',
    priceQuarterly: '₹ 8,999',
    priceYearly: '₹ 28,999',
    features: [
      'All Premium Tier Benefits',
      '4 Personal Training Sessions / Month',
      'Custom Bi-Weekly Nutrition Meal Plan',
      'Unlimited Guest Passes (Weekend)',
      'Titans Merchandise Athlete Kit',
      'VIP Recovery Lounge & Priority Towel Service'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Spartan Strength Platform',
    category: 'Heavy Lifting',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    caption: 'Olympic bumper plates and solid steel barbells forged for heavy deadlifts.'
  },
  {
    id: 'gal-2',
    title: 'High-Performance Cardio Fleet',
    category: 'Cardio Zone',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Spacious cardiovascular suite equipped with biometric telemetry.'
  },
  {
    id: 'gal-3',
    title: 'Dumbbell & Free Weight Rack',
    category: 'Free Weights',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    caption: 'Tiered precision dumbbells with custom knurled grips up to 60 kg.'
  },
  {
    id: 'gal-4',
    title: 'Functional Turf & Battle Ropes',
    category: 'Agility Turf',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    caption: 'High-intensity conditioning arena designed for functional stamina.'
  },
  {
    id: 'gal-5',
    title: 'Aerobic & Kinetic Group Studio',
    category: 'Studio Fitness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    caption: 'Pulsing rhythm sound and dynamic group fitness lighting.'
  },
  {
    id: 'gal-6',
    title: 'Biomechanic Machine Suite',
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Ergonomically tuned resistance machines for pure muscular hypertrophy.'
  },
  {
    id: 'gal-7',
    title: 'Unisex Arena Atmosphere',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    caption: 'Inspiring, clean, and disciplined environment where everyone strives together.'
  },
  {
    id: 'gal-8',
    title: 'Elite Coaching Mentorship',
    category: 'Personal Training',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Dedicated coaches focusing on posture, execution, and relentless drive.'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Vikram Sengupta',
    role: 'Member since 2023',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'Titans Gym is hands down the most disciplined fitness arena in the city. The Spartan atmosphere, state-of-the-art free weights, and motivating coaches made me lose 14kg while adding serious strength.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    achievement: 'Lost 14kg & Deadlift PR 180kg'
  },
  {
    id: 'rev-2',
    name: 'Ananya Roy',
    role: 'Unisex Fitness Member',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'As a woman looking for serious strength training without any uncomfortable gym culture, Titans Gym has been amazing. Welcoming, professional, spotless cleanliness, and incredible equipment.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    achievement: 'Body Fat Reduced by 9%'
  },
  {
    id: 'rev-3',
    name: 'Rahul K. Mukherjee',
    role: 'Powerlifting Athlete',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'The barbells, bumper plates, and heavy dumbbells are top grade. No waiting around for equipment, great music, and the coaches understand true biomechanics. Pure titan energy.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    achievement: 'Squat 210kg Official Record'
  },
  {
    id: 'rev-4',
    name: 'Pooja Sharma',
    role: 'Aerobics & HIIT Regular',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'The aerobics and functional conditioning batches have insane energy! The instructors push you past your perceived limits with high safety. Best decision for my physical and mental health.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
    achievement: 'Completed 6-Month Marathon Cycle'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What are the gym operating hours?',
    answer: 'Titans Gym is open Monday through Saturday from 5:30 AM to 10:00 PM, and on Sundays from 6:00 AM to 1:00 PM. We offer early bird hours so you can easily train before work or after hours.'
  },
  {
    id: 'faq-2',
    question: 'Is Titans Gym a unisex fitness arena?',
    answer: 'Yes, Titans Gym is a dedicated unisex fitness arena designed with equal focus, premium safety, and state-of-the-art facilities for both women and men. We have separate private locker rooms, showers, and dedicated personal coaches.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer personal training packages?',
    answer: 'Yes! We have certified master trainers specializing in powerlifting, fat loss transformation, muscle hypertrophy, and posture correction. Personal training can be bundled into your plan or booked separately.'
  },
  {
    id: 'faq-4',
    question: 'Are there programs for complete beginners?',
    answer: 'Every new member receives a complimentary fitness induction, movement screening, and machine walk-through with our floor trainers so you never feel lost or intimidated.'
  },
  {
    id: 'faq-5',
    question: 'Can I book a complimentary free trial session?',
    answer: 'Yes, we provide 1 complimentary trial session for local residents so you can experience the Titans equipment, coaches, and atmosphere firsthand before choosing a plan.'
  },
  {
    id: 'faq-6',
    question: 'What should I bring for my workout?',
    answer: 'Please bring clean indoor sports shoes (outdoor dirty shoes are strictly disallowed on workout turf), a workout towel, a personal water bottle, and comfortable athletic gym wear.'
  },
  {
    id: 'faq-7',
    question: 'What payment modes are accepted?',
    answer: 'We accept all major UPI apps (Google Pay, PhonePe, Paytm), Debit/Credit Cards, Net Banking, and flexible 0% interest EMI options on 6-month and 12-month packages.'
  }
];
