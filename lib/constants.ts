// Constantes de l'application

export const SITE_CONFIG = {
  name: 'Agence AI',
  url: 'https://agence-ai.fr',
  description: 'Transformez votre entreprise avec nos solutions d\'automation IA sur mesure',
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
} as const;

export const CONTACT_INFO = {
  email: 'contact@agence-ai.fr',
  phone: '+33 1 23 45 67 89',
  address: '123 Rue de l\'Innovation, 75001 Paris, France',
  hours: 'Lun - Ven: 9h00 - 18h00',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/agence-ai',
  twitter: 'https://twitter.com/agence_ai',
  github: 'https://github.com/agence-ai',
  instagram: 'https://instagram.com/agence_ai',
  facebook: 'https://facebook.com/agence-ai',
  youtube: 'https://youtube.com/agence-ai',
} as const;

export const SUPPORTED_LOCALES = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
] as const;

export const SERVICES = [
  {
    id: 'ai-automation',
    name: 'Automation IA',
    description: 'Solutions d\'intelligence artificielle pour automatiser vos processus',
    icon: 'Brain',
  },
  {
    id: 'web-development',
    name: 'Développement Web',
    description: 'Applications web modernes et performantes',
    icon: 'Code',
  },
  {
    id: 'digital-consulting',
    name: 'Consulting Digital',
    description: 'Accompagnement stratégique pour votre transformation',
    icon: 'Target',
  },
  {
    id: 'training',
    name: 'Formation',
    description: 'Formation de vos équipes aux nouvelles technologies',
    icon: 'BookOpen',
  },
] as const;

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'ai-automation', name: 'Automation IA' },
  { id: 'web-development', name: 'Développement Web' },
  { id: 'mobile', name: 'Applications Mobile' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'dashboard', name: 'Tableaux de bord' },
] as const;

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: '2,500€', yearly: '2,000€' },
    description: 'Parfait pour les petites entreprises',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: { monthly: '5,000€', yearly: '4,000€' },
    description: 'Idéal pour les entreprises en croissance',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { monthly: 'Sur mesure', yearly: 'Sur mesure' },
    description: 'Solution complète pour les grandes entreprises',
    popular: false,
  },
] as const;

export const TECHNOLOGIES = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'TensorFlow',
  'PyTorch',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Kubernetes',
  'Redis',
  'Elasticsearch',
] as const;

export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  float: 'animate-float',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
} as const;

export const FONTS = {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
} as const;

export const SHADOWS = {
  soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  hard: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.1)',
  glow: '0 0 20px rgba(59, 130, 246, 0.15)',
  glowLg: '0 0 40px rgba(59, 130, 246, 0.2)',
} as const;

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
  secondary: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
  accent: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
  hero: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
} as const;

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  chatbot: '/api/chatbot',
  projects: '/api/projects',
  blog: '/api/blog',
} as const;

export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
} as const;

export const ERROR_MESSAGES = {
  required: 'Ce champ est requis',
  email: 'Veuillez entrer une adresse email valide',
  phone: 'Veuillez entrer un numéro de téléphone valide',
  minLength: (min: number) => `Minimum ${min} caractères`,
  maxLength: (max: number) => `Maximum ${max} caractères`,
  pattern: 'Format invalide',
} as const;

export const SUCCESS_MESSAGES = {
  contact: 'Message envoyé avec succès !',
  newsletter: 'Inscription à la newsletter réussie !',
  form: 'Formulaire soumis avec succès !',
} as const;

export const LOADING_MESSAGES = [
  'Chargement...',
  'Traitement en cours...',
  'Veuillez patienter...',
  'Génération du contenu...',
] as const;

export const CHATBOT_RESPONSES = [
  'Je comprends votre demande. Laissez-moi vous aider avec cela.',
  'Excellente question ! Voici ce que je peux vous dire à ce sujet.',
  'Je vais analyser votre demande et vous fournir les meilleures solutions.',
  'C\'est un sujet très intéressant. Permettez-moi de vous expliquer.',
  'Je suis là pour vous accompagner dans votre projet. Que souhaitez-vous savoir ?',
  'Parfait ! Je vais vous guider étape par étape.',
  'C\'est exactement le type de projet que nous adorons réaliser !',
  'Je vais vous mettre en contact avec notre équipe d\'experts.',
] as const;

export const QUICK_SUGGESTIONS = [
  'Quels sont vos services ?',
  'Comment puis-je vous contacter ?',
  'Quels sont vos tarifs ?',
  'Avez-vous des exemples de projets ?',
] as const;
