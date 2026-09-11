export interface Program {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'transformation' | 'personal';
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
  highlight: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  priceMonthly: string;
  priceQuarterly: string;
  priceYearly: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  achievement: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}
