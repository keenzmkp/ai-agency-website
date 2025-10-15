'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { 
  Brain, 
  Zap, 
  Code, 
  BarChart3, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Target,
  Lightbulb,
  Settings,
  Database,
  Smartphone,
  Laptop,
  Server,
  Globe,
  Lock,
  TrendingUp,
  Award,
  BookOpen,
  Headphones
} from 'lucide-react';

export default function ServicesPage() {
  const [locale, setLocale] = useState('fr');
  const [activeTab, setActiveTab] = useState('ai-automation');

  // Traductions
  const translations = {
    fr: {
      hero: {
        title: 'Nos Services d\'Automation IA',
        subtitle: 'Des solutions intelligentes pour automatiser vos processus métier et optimiser votre productivité.',
        cta: 'Découvrir nos services'
      },
      tabs: {
        'ai-automation': 'Automation IA',
        'web-development': 'Développement Web',
        'digital-consulting': 'Consulting Digital',
        'training': 'Formation'
      },
      services: {
        'ai-automation': {
          title: 'Automation Intelligence Artificielle',
          subtitle: 'Révolutionnez vos processus métier avec nos solutions d\'IA sur mesure',
          description: 'Nous développons des solutions d\'intelligence artificielle qui automatisent vos tâches répétitives, optimisent vos décisions et transforment votre façon de travailler.',
          features: [
            {
              icon: Brain,
              title: 'Machine Learning',
              description: 'Algorithmes d\'apprentissage automatique pour prédire et optimiser vos processus',
              benefits: ['Prédictions précises', 'Optimisation continue', 'Apprentissage adaptatif']
            },
            {
              icon: Zap,
              title: 'RPA (Robotic Process Automation)',
              description: 'Automatisation des tâches répétitives avec des robots logiciels intelligents',
              benefits: ['Gain de temps', 'Réduction d\'erreurs', 'Processus standardisés']
            },
            {
              icon: Database,
              title: 'Traitement de Données',
              description: 'Analyse et traitement intelligent de vos données pour extraire des insights',
              benefits: ['Insights actionnables', 'Traitement en temps réel', 'Visualisation claire']
            },
            {
              icon: Target,
              title: 'Optimisation Prédictive',
              description: 'Modèles prédictifs pour anticiper les tendances et optimiser vos ressources',
              benefits: ['Anticipation des besoins', 'Optimisation des coûts', 'Planification intelligente']
            }
          ],
          process: [
            {
              step: '01',
              title: 'Audit & Analyse',
              description: 'Nous analysons vos processus actuels pour identifier les opportunités d\'automation'
            },
            {
              step: '02',
              title: 'Conception IA',
              description: 'Nous concevons une solution d\'IA adaptée à vos besoins spécifiques'
            },
            {
              step: '03',
              title: 'Développement',
              description: 'Nous développons et testons votre solution d\'automation IA'
            },
            {
              step: '04',
              title: 'Déploiement',
              description: 'Nous déployons et formons vos équipes à l\'utilisation de la solution'
            }
          ],
          pricing: {
            starter: {
              name: 'Starter',
              price: '2,500€',
              period: '/mois',
              description: 'Parfait pour les petites entreprises',
              features: [
                'Audit des processus',
                'Solution d\'automation basique',
                'Support par email',
                'Formation de base',
                'Rapports mensuels'
              ]
            },
            professional: {
              name: 'Professional',
              price: '5,000€',
              period: '/mois',
              description: 'Idéal pour les entreprises en croissance',
              features: [
                'Tout du plan Starter',
                'IA prédictive avancée',
                'Support prioritaire',
                'Formation complète',
                'Rapports hebdomadaires',
                'Intégrations personnalisées'
              ],
              popular: true
            },
            enterprise: {
              name: 'Enterprise',
              price: 'Sur mesure',
              period: '',
              description: 'Solution complète pour les grandes entreprises',
              features: [
                'Tout du plan Professional',
                'IA sur mesure',
                'Support 24/7',
                'Formation avancée',
                'Rapports en temps réel',
                'Intégrations complexes',
                'Dédié account manager'
              ]
            }
          }
        },
        'web-development': {
          title: 'Développement Web',
          subtitle: 'Applications web modernes et performantes avec les dernières technologies',
          description: 'Nous créons des applications web sur mesure qui répondent à vos besoins spécifiques et offrent une expérience utilisateur exceptionnelle.',
          features: [
            {
              icon: Code,
              title: 'Applications React/Next.js',
              description: 'Développement d\'applications web modernes avec React et Next.js',
              benefits: ['Performance optimale', 'SEO friendly', 'Expérience utilisateur fluide']
            },
            {
              icon: Server,
              title: 'Backend & API',
              description: 'Développement d\'APIs robustes et de serveurs backend performants',
              benefits: ['Scalabilité', 'Sécurité renforcée', 'Intégrations faciles']
            },
            {
              icon: Cloud,
              title: 'Déploiement Cloud',
              description: 'Déploiement et hébergement sur les plateformes cloud les plus performantes',
              benefits: ['Disponibilité élevée', 'Scalabilité automatique', 'Coûts optimisés']
            },
            {
              icon: Smartphone,
              title: 'Responsive Design',
              description: 'Design adaptatif pour tous les appareils et tailles d\'écran',
              benefits: ['Compatible mobile', 'Expérience uniforme', 'Performance optimisée']
            }
          ]
        },
        'digital-consulting': {
          title: 'Consulting Digital',
          subtitle: 'Accompagnement stratégique pour votre transformation digitale',
          description: 'Nous vous accompagnons dans votre transformation digitale avec une expertise approfondie et des conseils personnalisés.',
          features: [
            {
              icon: Target,
              title: 'Stratégie Digitale',
              description: 'Définition de votre stratégie digitale et roadmap de transformation',
              benefits: ['Vision claire', 'Objectifs mesurables', 'Plan d\'action concret']
            },
            {
              icon: TrendingUp,
              title: 'Optimisation Performance',
              description: 'Amélioration de la performance de vos outils et processus digitaux',
              benefits: ['Gains de productivité', 'Réduction des coûts', 'ROI amélioré']
            },
            {
              icon: Shield,
              title: 'Sécurité & Conformité',
              description: 'Audit et amélioration de la sécurité de vos systèmes digitaux',
              benefits: ['Protection des données', 'Conformité RGPD', 'Sécurité renforcée']
            },
            {
              icon: Users,
              title: 'Formation Équipes',
              description: 'Formation de vos équipes aux nouvelles technologies et outils',
              benefits: ['Adoption facilitée', 'Productivité accrue', 'Autonomie renforcée']
            }
          ]
        },
        'training': {
          title: 'Formation & Accompagnement',
          subtitle: 'Formez vos équipes aux technologies d\'avenir',
          description: 'Nous proposons des formations personnalisées pour maîtriser les technologies d\'intelligence artificielle et d\'automation.',
          features: [
            {
              icon: BookOpen,
              title: 'Formation IA',
              description: 'Formation complète sur l\'intelligence artificielle et ses applications',
              benefits: ['Concepts fondamentaux', 'Cas d\'usage pratiques', 'Mise en œuvre']
            },
            {
              icon: Settings,
              title: 'Formation Outils',
              description: 'Formation sur les outils d\'automation et de développement',
              benefits: ['Maîtrise des outils', 'Bonnes pratiques', 'Optimisation']
            },
            {
              icon: Headphones,
              title: 'Support Continu',
              description: 'Accompagnement continu et support technique pour vos équipes',
              benefits: ['Support réactif', 'Résolution de problèmes', 'Évolution continue']
            },
            {
              icon: Award,
              title: 'Certification',
              description: 'Certification de vos équipes sur les technologies maîtrisées',
              benefits: ['Reconnaissance officielle', 'Valorisation des compétences', 'Crédibilité']
            }
          ]
        }
      },
      cta: {
        title: 'Prêt à transformer votre entreprise ?',
        subtitle: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.',
        button: 'Demander un devis',
        buttonSecondary: 'Planifier un appel'
      }
    },
    en: {
      hero: {
        title: 'Our AI Automation Services',
        subtitle: 'Intelligent solutions to automate your business processes and optimize your productivity.',
        cta: 'Discover our services'
      },
      tabs: {
        'ai-automation': 'AI Automation',
        'web-development': 'Web Development',
        'digital-consulting': 'Digital Consulting',
        'training': 'Training'
      },
      services: {
        'ai-automation': {
          title: 'Artificial Intelligence Automation',
          subtitle: 'Revolutionize your business processes with our custom AI solutions',
          description: 'We develop artificial intelligence solutions that automate your repetitive tasks, optimize your decisions and transform your way of working.',
          features: [
            {
              icon: Brain,
              title: 'Machine Learning',
              description: 'Machine learning algorithms to predict and optimize your processes',
              benefits: ['Accurate predictions', 'Continuous optimization', 'Adaptive learning']
            },
            {
              icon: Zap,
              title: 'RPA (Robotic Process Automation)',
              description: 'Automation of repetitive tasks with intelligent software robots',
              benefits: ['Time savings', 'Error reduction', 'Standardized processes']
            },
            {
              icon: Database,
              title: 'Data Processing',
              description: 'Intelligent analysis and processing of your data to extract insights',
              benefits: ['Actionable insights', 'Real-time processing', 'Clear visualization']
            },
            {
              icon: Target,
              title: 'Predictive Optimization',
              description: 'Predictive models to anticipate trends and optimize your resources',
              benefits: ['Anticipate needs', 'Cost optimization', 'Intelligent planning']
            }
          ],
          process: [
            {
              step: '01',
              title: 'Audit & Analysis',
              description: 'We analyze your current processes to identify automation opportunities'
            },
            {
              step: '02',
              title: 'AI Design',
              description: 'We design an AI solution tailored to your specific needs'
            },
            {
              step: '03',
              title: 'Development',
              description: 'We develop and test your AI automation solution'
            },
            {
              step: '04',
              title: 'Deployment',
              description: 'We deploy and train your teams to use the solution'
            }
          ],
          pricing: {
            starter: {
              name: 'Starter',
              price: '2,500€',
              period: '/month',
              description: 'Perfect for small businesses',
              features: [
                'Process audit',
                'Basic automation solution',
                'Email support',
                'Basic training',
                'Monthly reports'
              ]
            },
            professional: {
              name: 'Professional',
              price: '5,000€',
              period: '/month',
              description: 'Ideal for growing businesses',
              features: [
                'Everything from Starter plan',
                'Advanced predictive AI',
                'Priority support',
                'Complete training',
                'Weekly reports',
                'Custom integrations'
              ],
              popular: true
            },
            enterprise: {
              name: 'Enterprise',
              price: 'Custom',
              period: '',
              description: 'Complete solution for large enterprises',
              features: [
                'Everything from Professional plan',
                'Custom AI',
                '24/7 support',
                'Advanced training',
                'Real-time reports',
                'Complex integrations',
                'Dedicated account manager'
              ]
            }
          }
        },
        'web-development': {
          title: 'Web Development',
          subtitle: 'Modern and performant web applications with the latest technologies',
          description: 'We create custom web applications that meet your specific needs and offer an exceptional user experience.',
          features: [
            {
              icon: Code,
              title: 'React/Next.js Applications',
              description: 'Development of modern web applications with React and Next.js',
              benefits: ['Optimal performance', 'SEO friendly', 'Smooth user experience']
            },
            {
              icon: Server,
              title: 'Backend & API',
              description: 'Development of robust APIs and performant backend servers',
              benefits: ['Scalability', 'Enhanced security', 'Easy integrations']
            },
            {
              icon: Cloud,
              title: 'Cloud Deployment',
              description: 'Deployment and hosting on the most performant cloud platforms',
              benefits: ['High availability', 'Automatic scalability', 'Optimized costs']
            },
            {
              icon: Smartphone,
              title: 'Responsive Design',
              description: 'Adaptive design for all devices and screen sizes',
              benefits: ['Mobile compatible', 'Uniform experience', 'Optimized performance']
            }
          ]
        },
        'digital-consulting': {
          title: 'Digital Consulting',
          subtitle: 'Strategic support for your digital transformation',
          description: 'We support you in your digital transformation with deep expertise and personalized advice.',
          features: [
            {
              icon: Target,
              title: 'Digital Strategy',
              description: 'Definition of your digital strategy and transformation roadmap',
              benefits: ['Clear vision', 'Measurable objectives', 'Concrete action plan']
            },
            {
              icon: TrendingUp,
              title: 'Performance Optimization',
              description: 'Improvement of the performance of your digital tools and processes',
              benefits: ['Productivity gains', 'Cost reduction', 'Improved ROI']
            },
            {
              icon: Shield,
              title: 'Security & Compliance',
              description: 'Audit and improvement of the security of your digital systems',
              benefits: ['Data protection', 'GDPR compliance', 'Enhanced security']
            },
            {
              icon: Users,
              title: 'Team Training',
              description: 'Training your teams on new technologies and tools',
              benefits: ['Facilitated adoption', 'Increased productivity', 'Enhanced autonomy']
            }
          ]
        },
        'training': {
          title: 'Training & Support',
          subtitle: 'Train your teams in future technologies',
          description: 'We offer personalized training to master artificial intelligence and automation technologies.',
          features: [
            {
              icon: BookOpen,
              title: 'AI Training',
              description: 'Complete training on artificial intelligence and its applications',
              benefits: ['Fundamental concepts', 'Practical use cases', 'Implementation']
            },
            {
              icon: Settings,
              title: 'Tools Training',
              description: 'Training on automation and development tools',
              benefits: ['Tool mastery', 'Best practices', 'Optimization']
            },
            {
              icon: Headphones,
              title: 'Continuous Support',
              description: 'Continuous support and technical assistance for your teams',
              benefits: ['Reactive support', 'Problem solving', 'Continuous evolution']
            },
            {
              icon: Award,
              title: 'Certification',
              description: 'Certification of your teams on mastered technologies',
              benefits: ['Official recognition', 'Skills valorization', 'Credibility']
            }
          ]
        }
      },
      cta: {
        title: 'Ready to transform your business?',
        subtitle: 'Contact us to discuss your project and get a personalized quote.',
        button: 'Request a quote',
        buttonSecondary: 'Schedule a call'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

  const renderServiceContent = (serviceKey: string) => {
    const service = t.services[serviceKey as keyof typeof t.services];
    if (!service) return null;

    return (
      <div className="space-y-16">
        {/* Service Header */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{service.subtitle}</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">{service.description}</p>
        </div>

        {/* Features */}
        <div className="grid-cols-1 md:grid-cols-2">
          {service.features.map((feature, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process (only for AI Automation) */}
        {serviceKey === 'ai-automation' && 'process' in service && service.process && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Notre Processus</h3>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing (only for AI Automation) */}
        {serviceKey === 'ai-automation' && 'pricing' in service && service.pricing && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Nos Tarifs</h3>
            <div className="grid-cols-1 md:grid-cols-3">
              {Object.entries(service.pricing).map(([key, plan]: [string, any]) => (
                <Card key={key} className={`relative ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/contact"
                      className="w-full mt-6"
                      variant={plan.popular ? 'primary' : 'outline'}
                    >
                      Choisir ce plan
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

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
            href="#services"
            size="lg"
            className="animate-slide-up"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="section">
        <div className="container-custom">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.entries(t.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-primary-500 text-white shadow-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="animate-fade-in">
            {renderServiceContent(activeTab)}
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
              href="/contact"
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
