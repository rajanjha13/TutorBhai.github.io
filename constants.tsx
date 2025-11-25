import { 
  Smartphone, 
  Megaphone, 
  Youtube, 
  Mic2, 
  ShieldCheck, 
  CreditCard, 
  MonitorPlay,
  Layout,
  Palette,
  Server,
  Video
} from 'lucide-react';
import { NavItem, ServiceItem, PricingTier, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'LMS Features', href: '/#features' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'lms',
    title: 'White-Label LMS App',
    description: 'Launch your own branded academy app on Android, iOS, and Windows. Stop paying commissions and keep 100% of your earnings.',
    icon: Smartphone,
    features: ['Android + iOS + Web', '0% Commission', 'Live Classes via Zoom', 'Secure Payment Gateway'],
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'graphics',
    title: 'Graphic Designing',
    description: 'Premium visuals for your institute. From high-CTR YouTube thumbnails to marketing posters and social media kits.',
    icon: Palette,
    features: ['YouTube Thumbnails', 'Course Posters', 'Social Media Posts', 'Logo Design'],
    color: 'bg-pink-50 text-pink-600'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Scale your institute with targeted Facebook & Google Ads. We help you find students looking for your courses.',
    icon: Megaphone,
    features: ['Lead Generation', 'Social Media Management', 'Ad Campaign Setup', 'Brand Awareness'],
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 'youtube',
    title: 'YouTube Management',
    description: 'Grow your subscriber base with professional editing, SEO-optimized titles, and high-CTR thumbnails.',
    icon: Youtube,
    features: ['Video Editing', 'Thumbnail Design', 'Channel SEO', 'Content Strategy'],
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 'studio',
    title: 'Studio Setup',
    description: 'Transform your classroom into a high-tech hybrid studio. We handle soundproofing, lighting, and camera installation.',
    icon: Mic2,
    features: ['4K Camera Setup', 'Digital Boards', 'Professional Lighting', 'Acoustic Treatment'],
    color: 'bg-purple-50 text-purple-600'
  }
];

export const LMS_FEATURES = [
  {
    title: '0% Commission',
    description: 'You keep every rupee. We do not take a cut of your course sales.',
    icon: CreditCard
  },
  {
    title: 'Multi-Platform Support',
    description: 'Native Android App, Windows Desktop App, and iOS-ready Web Portal.',
    icon: Layout
  },
  {
    title: 'Top-Tier Security',
    description: 'Screenshot blocked, screen recording prevented, and single-device restriction.',
    icon: ShieldCheck
  },
  {
    title: 'Integrated Player',
    description: 'Seamless YouTube integrated player for cost-effective hosting.',
    icon: MonitorPlay
  }
];

export const PRICING: PricingTier[] = [
  {
    title: 'LMS One-Time Setup',
    price: '₹14,999',
    period: 'one-time',
    features: [
      'Branded Android App',
      'Windows PC Application',
      'Admin Dashboard',
      'Payment Gateway Integration',
      'Zoom Live Class Integration',
      '1 Year Server Cost Included'
    ],
    ctaText: 'Launch Now',
    highlight: true
  },
  {
    title: 'Annual Maintenance',
    price: '₹11,999',
    period: '/ year (from 2nd year)',
    features: [
      'Server Costs included',
      'Regular App Updates',
      'Technical Support',
      'Daily Backups',
      'Security Patches'
    ],
    ctaText: 'Contact Sales',
    highlight: false
  }
];

export const GRAPHIC_PRICING_TIERS: PricingTier[] = [
  {
    title: 'Thumbnail Pack',
    price: '₹2,999',
    period: '/ month',
    features: [
      '15 High CTR Thumbnails',
      'Unlimited Revisions',
      'Source Files Included',
      '24hr Delivery Turnaround'
    ],
    ctaText: 'Order Now',
    highlight: false
  },
  {
    title: 'Institute Branding',
    price: '₹4,999',
    period: 'one-time',
    features: [
      'Professional Logo Design',
      'Course Posters (5 Designs)',
      'Social Media Kit',
      'Letterhead & Visiting Card'
    ],
    ctaText: 'Get Branding',
    highlight: true
  }
];

export const VIDEO_HOSTING_TIER: PricingTier = {
  title: 'Premium Video Hosting',
  price: 'Custom',
  period: 'based on usage',
  features: [
    'Private Secure Hosting',
    'No YouTube Dependency',
    'Encrypted Streaming',
    'Offline Download Support',
    'Advanced Analytics'
  ],
  ctaText: 'Contact for Pricing',
  highlight: false
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Math Educator",
    content: "TutorBhai changed the game for me. I was paying 20% commission on other apps. Now I keep everything.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Priya Patel",
    role: "Yoga Instructor",
    content: "The studio setup team was professional and quick. My online classes look cinematic now!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Vikram Singh",
    role: "Competitive Exam Coach",
    content: "Their digital marketing team helped me get 500+ new leads in the first month. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];