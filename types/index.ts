// Types de base pour l'application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  category: 'n8n-automation' | 'web-development' | 'mobile' | 'ecommerce' | 'dashboard';
  year: string;
  duration: string;
  team: string;
  technologies: string[];
  image: string;
  gallery: string[];
  results: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  links: {
    website?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process?: {
    step: string;
    title: string;
    description: string;
  }[];
  pricing?: {
    starter: PricingPlan;
    professional: PricingPlan;
    enterprise: PricingPlan;
  };
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  published: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
  newsletter: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Locale {
  code: string;
  name: string;
  flag: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
}

export interface Config {
  site: {
    name: string;
    url: string;
    description: string;
    logo: string;
    favicon: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  analytics: {
    googleAnalytics?: string;
    googleTagManager?: string;
    hotjar?: string;
  };
  features: {
    chatbot: boolean;
    blog: boolean;
    portfolio: boolean;
    pricing: boolean;
    contact: boolean;
  };
}
