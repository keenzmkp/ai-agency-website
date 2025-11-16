'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import AIChatbot from '@/components/AIChatbot';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap,
  Brain,
  Code,
  BarChart3,
  Shield,
  Clock,
  Target,
  ChevronRight,
  Play,
  Quote,
  Globe,
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

export default function HomePage() {
  const [locale, setLocale] = useState('fr');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(false);

  // Traductions
  const translations = {
    fr: {
      hero: {
        title: 'Simplifiez vos processus, amplifiez votre impact.',
        subtitle: 'Vibrance Online est votre partenaire pour le développement web et l\'automation avec n8n. Nous créons des solutions sur mesure qui transforment votre façon de travailler.',
        cta1: 'Découvrir nos services',
        cta2: 'Voir nos projets',
        stats: {
          clients: '200+',
          clientsLabel: 'Clients satisfaits',
          projects: '500+',
          projectsLabel: 'Projets réalisés',
          years: '5+',
          yearsLabel: 'Années d\'expérience',
          team: '25+',
          teamLabel: 'Experts IA',
        }
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Des solutions complètes pour votre transformation digitale',
        items: [
          {
            icon: Code,
            title: 'Développement Web',
            description: 'Sites web professionnels, e-commerce et applications web sur mesure pour votre entreprise.',
            features: ['Sites web business', 'E-commerce', 'Applications web personnalisées', 'Responsive design']
          },
          {
            icon: Zap,
            title: 'Automation avec n8n',
            description: 'Automatisez vos workflows et connectez vos outils avec n8n pour optimiser vos processus.',
            features: ['Workflows n8n', 'Intégrations populaires', 'Automatisation de tâches', 'Connecteurs API']
          },
          {
            icon: Target,
            title: 'Optimisation & Consulting',
            description: 'Optimisation de vos processus métier et conseil stratégique pour améliorer votre efficacité.',
            features: ['Audit de processus', 'Optimisation workflow', 'Conseil stratégique', 'Formation équipes']
          }
        ]
      },
      process: {
        title: 'Notre Processus de Travail',
        subtitle: 'Une approche méthodique et transparente pour garantir le succès de votre projet.',
        steps: [
          {
            number: '01',
            title: 'Analyse & Audit',
            description: 'Nous analysons vos processus actuels et identifions les opportunités d\'optimisation.',
            icon: Target
          },
          {
            number: '02',
            title: 'Conception & Stratégie',
            description: 'Nous concevons une solution sur mesure adaptée à vos besoins spécifiques.',
            icon: Brain
          },
          {
            number: '03',
            title: 'Développement & Test',
            description: 'Nous développons et testons rigoureusement votre solution d\'automation.',
            icon: Code
          },
          {
            number: '04',
            title: 'Déploiement & Formation',
            description: 'Nous déployons votre solution et formons vos équipes à son utilisation.',
            icon: Shield
          }
        ]
      },
      testimonials: {
        title: 'Ce que disent nos clients',
        subtitle: 'Découvrez les témoignages de nos clients qui ont transformé leur entreprise avec nos solutions.',
        items: [
          {
            name: 'Marie Dubois',
            role: 'Directrice Marketing',
            company: 'TechCorp',
            content: 'L\'automation avec n8n mise en place par Vibrance Online a révolutionné notre gestion des leads. Nous avons gagné 40% de temps sur nos processus marketing.',
            rating: 5,
            avatar: 'MD'
          },
          {
            name: 'Jean Martin',
            role: 'CEO',
            company: 'InnovateLab',
            content: 'Une équipe exceptionnelle qui a su comprendre nos besoins complexes. Leur solution d\'IA prédictive nous fait économiser des milliers d\'euros chaque mois.',
            rating: 5,
            avatar: 'JM'
          },
          {
            name: 'Sophie Chen',
            role: 'Directrice Opérations',
            company: 'DataFlow',
            content: 'L\'intégration de leur système d\'automation a été parfaite. Nos équipes sont plus productives et nos clients plus satisfaits.',
            rating: 5,
            avatar: 'SC'
          }
        ]
      },
      cta: {
        title: 'Prêt à transformer votre entreprise ?',
        subtitle: 'Contactez-nous dès aujourd\'hui pour discuter de votre projet d\'automation IA.',
        button: 'Démarrer un projet',
        buttonSecondary: 'Voir nos tarifs'
      }
    },
    en: {
      hero: {
        title: 'Automate. Connect. Grow.',
        subtitle: 'Vibrance Online is your partner for web development and automation with n8n. We create custom solutions that transform the way you work.',
        cta1: 'Explore Our Services',
        cta2: 'View our projects',
        stats: {
          clients: '200+',
          clientsLabel: 'Satisfied clients',
          projects: '500+',
          projectsLabel: 'Projects completed',
          years: '5+',
          yearsLabel: 'Years of experience',
          team: '25+',
          teamLabel: 'AI experts',
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Complete solutions for your digital transformation',
        items: [
          {
            icon: Code,
            title: 'Web Development',
            description: 'Professional websites, e-commerce, and custom web applications for your business.',
            features: ['Business websites', 'E-commerce', 'Custom web apps', 'Responsive design']
          },
          {
            icon: Zap,
            title: 'Automation with n8n',
            description: 'Automate your workflows and connect your tools with n8n to optimize your processes.',
            features: ['n8n workflows', 'Popular integrations', 'Task automation', 'API connectors']
          },
          {
            icon: Target,
            title: 'Process Optimization & Consulting',
            description: 'Optimize your business processes and strategic consulting to improve your efficiency.',
            features: ['Process audit', 'Workflow optimization', 'Strategic consulting', 'Team training']
          }
        ]
      },
      process: {
        title: 'Our Work Process',
        subtitle: 'A methodical and transparent approach to ensure the success of your project.',
        steps: [
          {
            number: '01',
            title: 'Analysis & Audit',
            description: 'We analyze your current processes and identify optimization opportunities.',
            icon: Target
          },
          {
            number: '02',
            title: 'Design & Strategy',
            description: 'We design a custom solution tailored to your specific needs.',
            icon: Brain
          },
          {
            number: '03',
            title: 'Development & Testing',
            description: 'We develop and rigorously test your automation solution.',
            icon: Code
          },
          {
            number: '04',
            title: 'Deployment & Training',
            description: 'We deploy your solution and train your teams to use it.',
            icon: Shield
          }
        ]
      },
      testimonials: {
        title: 'What our clients say',
        subtitle: 'Discover testimonials from our clients who have transformed their business with our solutions.',
        items: [
          {
            name: 'Marie Dubois',
            role: 'Marketing Director',
            company: 'TechCorp',
            content: 'The AI automation implemented by AI Agency has revolutionized our lead management. We gained 40% time on our marketing processes.',
            rating: 5,
            avatar: 'MD'
          },
          {
            name: 'Jean Martin',
            role: 'CEO',
            company: 'InnovateLab',
            content: 'An exceptional team that understood our complex needs. Their predictive AI solution saves us thousands of euros every month.',
            rating: 5,
            avatar: 'JM'
          },
          {
            name: 'Sophie Chen',
            role: 'Operations Director',
            company: 'DataFlow',
            content: 'The integration of their automation system was perfect. Our teams are more productive and our clients more satisfied.',
            rating: 5,
            avatar: 'SC'
          }
        ]
      },
      cta: {
        title: 'Ready to transform your business?',
        subtitle: 'Contact us today to discuss your AI automation project.',
        button: 'Start a project',
        buttonSecondary: 'View our pricing'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

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
          
          <div className="hero-buttons animate-slide-up">
            <Button
              href="/services"
              size="lg"
              className="mr-4"
            >
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="lg"
            >
              {t.hero.cta2}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats.clients}</div>
              <div className="text-primary-100">{t.hero.stats.clientsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats.projects}</div>
              <div className="text-primary-100">{t.hero.stats.projectsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats.years}</div>
              <div className="text-primary-100">{t.hero.stats.yearsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats.team}</div>
              <div className="text-primary-100">{t.hero.stats.teamLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.services.title}</h2>
            <p className="content-description">{t.services.subtitle}</p>
          </div>
          
          <div className="grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.process.title}</h2>
            <p className="content-description">{t.process.subtitle}</p>
          </div>
          
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.testimonials.title}</h2>
            <p className="content-description">{t.testimonials.subtitle}</p>
          </div>
          
          <div className="grid-cols-1 md:grid-cols-3">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
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
              href="/pricing"
              variant="outline"
              size="lg"
            >
              {t.cta.buttonSecondary}
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      
      {/* AI Chatbot */}
      <AIChatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onMinimize={() => setIsChatbotMinimized(!isChatbotMinimized)}
        isMinimized={isChatbotMinimized}
      />
      
      {/* Chatbot Trigger Button */}
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-primary-500 text-white rounded-full shadow-hard hover:shadow-glow transition-all duration-300 z-40"
        aria-label="Ouvrir le chatbot"
      >
        <Brain className="w-6 h-6 mx-auto" />
      </button>
    </div>
  );
}
