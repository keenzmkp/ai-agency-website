'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { 
  ArrowRight,
  ExternalLink,
  Github,
  Eye,
  Filter,
  Search,
  Calendar,
  User,
  Tag,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function PortfolioPage() {
  const [locale, setLocale] = useState('fr');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Traductions
  const translations = {
    fr: {
      hero: {
        title: 'Notre Portfolio',
        subtitle: 'Découvrez nos réalisations et laissez-vous inspirer par nos solutions d\'automation IA.',
        cta: 'Voir nos projets'
      },
      filters: {
        all: 'Tous les projets',
        'n8n-automation': 'Automation avec n8n',
        'web-development': 'Développement Web',
        'mobile': 'Applications Mobile',
        'ecommerce': 'E-commerce',
        'dashboard': 'Tableaux de bord'
      },
      search: {
        placeholder: 'Rechercher un projet...',
        results: 'projets trouvés'
      },
      projects: [
        {
          id: 1,
          title: 'Système d\'Automation IA pour E-commerce',
          client: 'TechStore',
          category: 'n8n-automation',
          year: '2024',
          duration: '3 mois',
          team: '5 experts',
          description: 'Développement d\'un système d\'IA complet pour automatiser la gestion des stocks, la personnalisation des recommandations et l\'optimisation des prix en temps réel.',
          challenge: 'Optimiser les processus de gestion d\'un e-commerce avec plus de 50 000 produits et 10 000 commandes par jour.',
          solution: 'Création d\'un système d\'IA qui prédit la demande, optimise automatiquement les prix et personnalise les recommandations pour chaque client.',
          results: [
            '40% d\'augmentation des ventes',
            '60% de réduction du temps de gestion des stocks',
            '35% d\'amélioration de la satisfaction client'
          ],
          technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
          image: '/images/projects/techstore-ai.jpg',
          gallery: [
            '/images/projects/techstore-1.jpg',
            '/images/projects/techstore-2.jpg',
            '/images/projects/techstore-3.jpg'
          ],
          testimonial: {
            text: 'Vibrance Online a transformé notre e-commerce. Le système d\'automation avec n8n qu\'ils ont développé nous fait économiser des heures de travail chaque jour.',
            author: 'Marie Dubois',
            role: 'Directrice E-commerce',
            company: 'TechStore'
          },
          links: {
            website: 'https://techstore-ai.com',
            caseStudy: '/case-studies/techstore-ai'
          }
        },
        {
          id: 2,
          title: 'Plateforme de Gestion RH Intelligente',
          client: 'HR Solutions',
          category: 'n8n-automation',
          year: '2024',
          duration: '4 mois',
          team: '6 experts',
          description: 'Création d\'une plateforme RH complète avec IA pour automatiser le recrutement, l\'évaluation des performances et la planification des formations.',
          challenge: 'Automatiser les processus RH d\'une entreprise de 500 employés tout en maintenant la qualité du recrutement.',
          solution: 'Développement d\'un système d\'IA qui analyse les CV, prédit la compatibilité des candidats et optimise la planification des équipes.',
          results: [
            '50% de réduction du temps de recrutement',
            '30% d\'amélioration de la qualité des recrutements',
            '25% d\'augmentation de la satisfaction des employés'
          ],
          technologies: ['Python', 'Scikit-learn', 'Vue.js', 'Django', 'MongoDB', 'Docker'],
          image: '/images/projects/hr-platform.jpg',
          gallery: [
            '/images/projects/hr-1.jpg',
            '/images/projects/hr-2.jpg',
            '/images/projects/hr-3.jpg'
          ],
          testimonial: {
            text: 'Cette plateforme a révolutionné notre gestion RH. L\'IA nous aide à identifier les meilleurs candidats et à optimiser nos équipes.',
            author: 'Jean Martin',
            role: 'DRH',
            company: 'HR Solutions'
          },
          links: {
            website: 'https://hr-solutions-ai.com',
            caseStudy: '/case-studies/hr-platform'
          }
        },
        {
          id: 3,
          title: 'Application Mobile de Santé Connectée',
          client: 'HealthTech',
          category: 'mobile',
          year: '2023',
          duration: '6 mois',
          team: '8 experts',
          description: 'Développement d\'une application mobile avec IA pour le suivi médical personnalisé et la prédiction de risques santé.',
          challenge: 'Créer une application qui aide les patients à gérer leur santé de manière proactive avec des recommandations personnalisées.',
          solution: 'Application mobile avec IA qui analyse les données de santé, prédit les risques et fournit des recommandations personnalisées.',
          results: [
            '45% d\'amélioration de l\'adhésion au traitement',
            '30% de réduction des visites d\'urgence',
            '4.8/5 de satisfaction utilisateur'
          ],
          technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'Node.js', 'MongoDB'],
          image: '/images/projects/health-app.jpg',
          gallery: [
            '/images/projects/health-1.jpg',
            '/images/projects/health-2.jpg',
            '/images/projects/health-3.jpg'
          ],
          testimonial: {
            text: 'L\'application a transformé la façon dont nos patients gèrent leur santé. L\'IA fournit des insights précieux et personnalisés.',
            author: 'Dr. Sophie Chen',
            role: 'Directrice Médicale',
            company: 'HealthTech'
          },
          links: {
            appStore: 'https://apps.apple.com/health-app',
            playStore: 'https://play.google.com/health-app',
            caseStudy: '/case-studies/health-app'
          }
        },
        {
          id: 4,
          title: 'Tableau de Bord Analytics Avancé',
          client: 'DataCorp',
          category: 'dashboard',
          year: '2023',
          duration: '2 mois',
          team: '4 experts',
          description: 'Création d\'un tableau de bord interactif avec IA pour l\'analyse prédictive des données business et la visualisation en temps réel.',
          challenge: 'Centraliser et analyser des millions de points de données pour fournir des insights actionnables en temps réel.',
          solution: 'Tableau de bord avec IA qui analyse les données, identifie les tendances et fournit des recommandations automatiques.',
          results: [
            '70% de réduction du temps d\'analyse',
            '85% d\'amélioration de la précision des prévisions',
            '60% d\'augmentation de l\'utilisation des données'
          ],
          technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'ClickHouse', 'Redis'],
          image: '/images/projects/analytics-dashboard.jpg',
          gallery: [
            '/images/projects/analytics-1.jpg',
            '/images/projects/analytics-2.jpg',
            '/images/projects/analytics-3.jpg'
          ],
          testimonial: {
            text: 'Ce tableau de bord nous donne une vision claire de notre business. L\'IA nous aide à anticiper les tendances et à prendre de meilleures décisions.',
            author: 'Thomas Wilson',
            role: 'Directeur Analytics',
            company: 'DataCorp'
          },
          links: {
            website: 'https://analytics-datacorp.com',
            caseStudy: '/case-studies/analytics-dashboard'
          }
        },
        {
          id: 5,
          title: 'Plateforme E-commerce B2B',
          client: 'Industrial Supply',
          category: 'ecommerce',
          year: '2023',
          duration: '5 mois',
          team: '7 experts',
          description: 'Développement d\'une plateforme e-commerce B2B avec IA pour la gestion des catalogues, la tarification dynamique et l\'optimisation des commandes.',
          challenge: 'Créer une plateforme e-commerce complexe pour un distributeur industriel avec des milliers de produits et des clients B2B.',
          solution: 'Plateforme e-commerce avec IA qui gère les catalogues complexes, optimise les prix et automatise les processus de commande.',
          results: [
            '55% d\'augmentation des ventes en ligne',
            '40% de réduction des erreurs de commande',
            '50% d\'amélioration de l\'expérience client'
          ],
          technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
          image: '/images/projects/b2b-ecommerce.jpg',
          gallery: [
            '/images/projects/b2b-1.jpg',
            '/images/projects/b2b-2.jpg',
            '/images/projects/b2b-3.jpg'
          ],
          testimonial: {
            text: 'La plateforme a transformé notre business B2B. L\'IA nous aide à gérer la complexité de nos catalogues et à optimiser nos ventes.',
            author: 'David Rodriguez',
            role: 'Directeur Commercial',
            company: 'Industrial Supply'
          },
          links: {
            website: 'https://industrial-supply.com',
            caseStudy: '/case-studies/b2b-ecommerce'
          }
        },
        {
          id: 6,
          title: 'Système de Prédiction Financière',
          client: 'FinanceAI',
          category: 'n8n-automation',
          year: '2024',
          duration: '4 mois',
          team: '5 experts',
          description: 'Développement d\'un système d\'IA pour la prédiction des risques financiers et l\'optimisation des investissements.',
          challenge: 'Créer un système qui prédit les risques financiers avec une précision élevée pour optimiser les investissements.',
          solution: 'Système d\'IA qui analyse les données financières, prédit les risques et fournit des recommandations d\'investissement.',
          results: [
            '90% de précision dans la prédiction des risques',
            '35% d\'amélioration des rendements',
            '50% de réduction des pertes'
          ],
          technologies: ['Python', 'PyTorch', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
          image: '/images/projects/finance-ai.jpg',
          gallery: [
            '/images/projects/finance-1.jpg',
            '/images/projects/finance-2.jpg',
            '/images/projects/finance-3.jpg'
          ],
          testimonial: {
            text: 'Ce système d\'IA a révolutionné notre gestion des risques. Nous avons considérablement amélioré nos performances d\'investissement.',
            author: 'Emma Wilson',
            role: 'Directrice des Investissements',
            company: 'FinanceAI'
          },
          links: {
            website: 'https://finance-ai.com',
            caseStudy: '/case-studies/finance-ai'
          }
        }
      ],
      stats: {
        title: 'Nos Réalisations en Chiffres',
        items: [
          { number: '50+', label: 'Projets réalisés' },
          { number: '200+', label: 'Clients satisfaits' },
          { number: '99%', label: 'Taux de satisfaction' },
          { number: '5+', label: 'Années d\'expérience' }
        ]
      },
      cta: {
        title: 'Prêt à réaliser votre projet ?',
        subtitle: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.',
        button: 'Démarrer un projet',
        buttonSecondary: 'Voir nos services'
      }
    },
    en: {
      hero: {
        title: 'Our Portfolio',
        subtitle: 'Discover our achievements and get inspired by our AI automation solutions.',
        cta: 'View our projects'
      },
      filters: {
        all: 'All projects',
        'n8n-automation': 'Automation with n8n',
        'web-development': 'Web Development',
        'mobile': 'Mobile Apps',
        'ecommerce': 'E-commerce',
        'dashboard': 'Dashboards'
      },
      search: {
        placeholder: 'Search a project...',
        results: 'projects found'
      },
      projects: [
        {
          id: 1,
          title: 'AI Automation System for E-commerce',
          client: 'TechStore',
          category: 'n8n-automation',
          year: '2024',
          duration: '3 months',
          team: '5 experts',
          description: 'Development of a complete AI system to automate inventory management, recommendation personalization and real-time price optimization.',
          challenge: 'Optimize the management processes of an e-commerce with more than 50,000 products and 10,000 orders per day.',
          solution: 'Creation of an AI system that predicts demand, automatically optimizes prices and personalizes recommendations for each customer.',
          results: [
            '40% increase in sales',
            '60% reduction in inventory management time',
            '35% improvement in customer satisfaction'
          ],
          technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
          image: '/images/projects/techstore-ai.jpg',
          gallery: [
            '/images/projects/techstore-1.jpg',
            '/images/projects/techstore-2.jpg',
            '/images/projects/techstore-3.jpg'
          ],
          testimonial: {
            text: 'AI Agency has transformed our e-commerce. The AI system they developed saves us hours of work every day.',
            author: 'Marie Dubois',
            role: 'E-commerce Director',
            company: 'TechStore'
          },
          links: {
            website: 'https://techstore-ai.com',
            caseStudy: '/case-studies/techstore-ai'
          }
        },
        {
          id: 2,
          title: 'Intelligent HR Management Platform',
          client: 'HR Solutions',
          category: 'n8n-automation',
          year: '2024',
          duration: '4 months',
          team: '6 experts',
          description: 'Creation of a complete HR platform with AI to automate recruitment, performance evaluation and training planning.',
          challenge: 'Automate HR processes for a company of 500 employees while maintaining recruitment quality.',
          solution: 'Development of an AI system that analyzes CVs, predicts candidate compatibility and optimizes team planning.',
          results: [
            '50% reduction in recruitment time',
            '30% improvement in recruitment quality',
            '25% increase in employee satisfaction'
          ],
          technologies: ['Python', 'Scikit-learn', 'Vue.js', 'Django', 'MongoDB', 'Docker'],
          image: '/images/projects/hr-platform.jpg',
          gallery: [
            '/images/projects/hr-1.jpg',
            '/images/projects/hr-2.jpg',
            '/images/projects/hr-3.jpg'
          ],
          testimonial: {
            text: 'This platform has revolutionized our HR management. AI helps us identify the best candidates and optimize our teams.',
            author: 'Jean Martin',
            role: 'HR Director',
            company: 'HR Solutions'
          },
          links: {
            website: 'https://hr-solutions-ai.com',
            caseStudy: '/case-studies/hr-platform'
          }
        },
        {
          id: 3,
          title: 'Connected Health Mobile Application',
          client: 'HealthTech',
          category: 'mobile',
          year: '2023',
          duration: '6 months',
          team: '8 experts',
          description: 'Development of a mobile application with AI for personalized medical monitoring and health risk prediction.',
          challenge: 'Create an application that helps patients manage their health proactively with personalized recommendations.',
          solution: 'Mobile application with AI that analyzes health data, predicts risks and provides personalized recommendations.',
          results: [
            '45% improvement in treatment adherence',
            '30% reduction in emergency visits',
            '4.8/5 user satisfaction'
          ],
          technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'Node.js', 'MongoDB'],
          image: '/images/projects/health-app.jpg',
          gallery: [
            '/images/projects/health-1.jpg',
            '/images/projects/health-2.jpg',
            '/images/projects/health-3.jpg'
          ],
          testimonial: {
            text: 'The application has transformed how our patients manage their health. AI provides valuable and personalized insights.',
            author: 'Dr. Sophie Chen',
            role: 'Medical Director',
            company: 'HealthTech'
          },
          links: {
            appStore: 'https://apps.apple.com/health-app',
            playStore: 'https://play.google.com/health-app',
            caseStudy: '/case-studies/health-app'
          }
        },
        {
          id: 4,
          title: 'Advanced Analytics Dashboard',
          client: 'DataCorp',
          category: 'dashboard',
          year: '2023',
          duration: '2 months',
          team: '4 experts',
          description: 'Creation of an interactive dashboard with AI for predictive business data analysis and real-time visualization.',
          challenge: 'Centralize and analyze millions of data points to provide actionable insights in real-time.',
          solution: 'Dashboard with AI that analyzes data, identifies trends and provides automatic recommendations.',
          results: [
            '70% reduction in analysis time',
            '85% improvement in forecast accuracy',
            '60% increase in data usage'
          ],
          technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'ClickHouse', 'Redis'],
          image: '/images/projects/analytics-dashboard.jpg',
          gallery: [
            '/images/projects/analytics-1.jpg',
            '/images/projects/analytics-2.jpg',
            '/images/projects/analytics-3.jpg'
          ],
          testimonial: {
            text: 'This dashboard gives us a clear view of our business. AI helps us anticipate trends and make better decisions.',
            author: 'Thomas Wilson',
            role: 'Analytics Director',
            company: 'DataCorp'
          },
          links: {
            website: 'https://analytics-datacorp.com',
            caseStudy: '/case-studies/analytics-dashboard'
          }
        },
        {
          id: 5,
          title: 'B2B E-commerce Platform',
          client: 'Industrial Supply',
          category: 'ecommerce',
          year: '2023',
          duration: '5 months',
          team: '7 experts',
          description: 'Development of a B2B e-commerce platform with AI for catalog management, dynamic pricing and order optimization.',
          challenge: 'Create a complex e-commerce platform for an industrial distributor with thousands of products and B2B clients.',
          solution: 'E-commerce platform with AI that manages complex catalogs, optimizes prices and automates order processes.',
          results: [
            '55% increase in online sales',
            '40% reduction in order errors',
            '50% improvement in customer experience'
          ],
          technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
          image: '/images/projects/b2b-ecommerce.jpg',
          gallery: [
            '/images/projects/b2b-1.jpg',
            '/images/projects/b2b-2.jpg',
            '/images/projects/b2b-3.jpg'
          ],
          testimonial: {
            text: 'The platform has transformed our B2B business. AI helps us manage the complexity of our catalogs and optimize our sales.',
            author: 'David Rodriguez',
            role: 'Sales Director',
            company: 'Industrial Supply'
          },
          links: {
            website: 'https://industrial-supply.com',
            caseStudy: '/case-studies/b2b-ecommerce'
          }
        },
        {
          id: 6,
          title: 'Financial Prediction System',
          client: 'FinanceAI',
          category: 'n8n-automation',
          year: '2024',
          duration: '4 months',
          team: '5 experts',
          description: 'Development of an AI system for financial risk prediction and investment optimization.',
          challenge: 'Create a system that predicts financial risks with high accuracy to optimize investments.',
          solution: 'AI system that analyzes financial data, predicts risks and provides investment recommendations.',
          results: [
            '90% accuracy in risk prediction',
            '35% improvement in returns',
            '50% reduction in losses'
          ],
          technologies: ['Python', 'PyTorch', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
          image: '/images/projects/finance-ai.jpg',
          gallery: [
            '/images/projects/finance-1.jpg',
            '/images/projects/finance-2.jpg',
            '/images/projects/finance-3.jpg'
          ],
          testimonial: {
            text: 'This AI system has revolutionized our risk management. We have significantly improved our investment performance.',
            author: 'Emma Wilson',
            role: 'Investment Director',
            company: 'FinanceAI'
          },
          links: {
            website: 'https://finance-ai.com',
            caseStudy: '/case-studies/finance-ai'
          }
        }
      ],
      stats: {
        title: 'Our Achievements in Numbers',
        items: [
          { number: '50+', label: 'Projects completed' },
          { number: '200+', label: 'Satisfied clients' },
          { number: '99%', label: 'Satisfaction rate' },
          { number: '5+', label: 'Years of experience' }
        ]
      },
      cta: {
        title: 'Ready to realize your project?',
        subtitle: 'Contact us to discuss your project and get a personalized quote.',
        button: 'Start a project',
        buttonSecondary: 'View our services'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

  // Filtrage des projets
  const filteredProjects = t.projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} onLocaleChange={setLocale} />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="hero-description animate-slide-up">
            {t.hero.subtitle}
          </p>
          <Button
            href="#projects"
            size="lg"
            className="animate-slide-up"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.stats.title}</h2>
          </div>
          
          <div className="grid-cols-2 md:grid-cols-4">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container-custom">
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filtres</span>
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder={t.search.placeholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                {filteredProjects.length} {t.search.results}
              </div>
            </div>
            
            {/* Filter Buttons */}
            {showFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(t.filters).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeFilter === key
                        ? 'bg-primary-500 text-white shadow-medium'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-lift">
                {/* Project Image */}
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
                        {t.filters[project.category as keyof typeof t.filters]}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Résultats clés :</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-success-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Button
                      href={project.links.caseStudy}
                      variant="outline"
                      size="sm"
                    >
                      Voir le cas d'usage
                    </Button>
                    <div className="flex items-center space-x-2">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {'github' in project.links && project.links.github && typeof project.links.github === 'string' ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-description">{t.cta.subtitle}</p>
          <div className="cta-buttons">
            <Button
              href="/contact"
              size="lg"
              className="mr-4"
            >
              {t.cta.button}
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
            >
              {t.cta.buttonSecondary}
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
