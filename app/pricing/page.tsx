'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Headphones,
  Clock,
  Users,
  Target,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Info,
  Calculator,
  MessageCircle
} from 'lucide-react';

export default function PricingPage() {
  const [locale, setLocale] = useState('fr');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showFAQ, setShowFAQ] = useState<number | false>(false);

  // Traductions
  const translations = {
    fr: {
      hero: {
        title: 'Tarifs & Plans',
        subtitle: 'Choisissez le plan qui correspond le mieux à vos besoins et à votre budget.',
        cta: 'Commencer maintenant'
      },
      billing: {
        monthly: 'Mensuel',
        yearly: 'Annuel',
        discount: 'Économisez 20%'
      },
      plans: {
        starter: {
          name: 'Starter',
          description: 'Parfait pour les petites entreprises qui débutent avec l\'IA',
          price: {
            monthly: '2,500€',
            yearly: '2,000€'
          },
          features: [
            'Audit des processus métier',
            'Solution d\'automation basique',
            'Support par email',
            'Formation de base (2h)',
            'Rapports mensuels',
            'Intégrations standard',
            'Maintenance incluse'
          ],
          limitations: [
            'Maximum 5 utilisateurs',
            'Support par email uniquement',
            'Fonctionnalités IA limitées'
          ],
          cta: 'Commencer avec Starter'
        },
        professional: {
          name: 'Professional',
          description: 'Idéal pour les entreprises en croissance',
          price: {
            monthly: '5,000€',
            yearly: '4,000€'
          },
          features: [
            'Tout du plan Starter',
            'IA prédictive avancée',
            'Support prioritaire (24h)',
            'Formation complète (8h)',
            'Rapports hebdomadaires',
            'Intégrations personnalisées',
            'Maintenance et mises à jour',
            'API personnalisée',
            'Tableaux de bord avancés'
          ],
          limitations: [
            'Maximum 25 utilisateurs',
            'Support téléphonique limité'
          ],
          popular: true,
          cta: 'Commencer avec Professional'
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Solution complète pour les grandes entreprises',
          price: {
            monthly: 'Sur mesure',
            yearly: 'Sur mesure'
          },
          features: [
            'Tout du plan Professional',
            'IA sur mesure et dédiée',
            'Support 24/7 avec dédié',
            'Formation avancée (illimitée)',
            'Rapports en temps réel',
            'Intégrations complexes',
            'Account manager dédié',
            'SLA personnalisé',
            'Déploiement sur site',
            'Formation des équipes IT',
            'Audit de sécurité complet'
          ],
          limitations: [],
          cta: 'Contacter les ventes'
        }
      },
      features: {
        title: 'Fonctionnalités Incluses',
        subtitle: 'Découvrez ce qui est inclus dans chaque plan',
        items: [
          {
            icon: Zap,
            title: 'Automation IA',
            description: 'Automatisation intelligente de vos processus métier',
            starter: true,
            professional: true,
            enterprise: true
          },
          {
            icon: Target,
            title: 'Analytics Prédictifs',
            description: 'Prédictions et recommandations basées sur l\'IA',
            starter: false,
            professional: true,
            enterprise: true
          },
          {
            icon: Shield,
            title: 'Sécurité Avancée',
            description: 'Protection des données et conformité RGPD',
            starter: true,
            professional: true,
            enterprise: true
          },
          {
            icon: Headphones,
            title: 'Support Client',
            description: 'Support technique et accompagnement',
            starter: 'Email',
            professional: 'Prioritaire',
            enterprise: '24/7 Dédié'
          },
          {
            icon: Users,
            title: 'Formation',
            description: 'Formation de vos équipes aux nouvelles technologies',
            starter: '2h',
            professional: '8h',
            enterprise: 'Illimitée'
          },
          {
            icon: TrendingUp,
            title: 'Rapports',
            description: 'Rapports détaillés sur les performances',
            starter: 'Mensuel',
            professional: 'Hebdomadaire',
            enterprise: 'Temps réel'
          }
        ]
      },
      calculator: {
        title: 'Calculateur de Coûts',
        subtitle: 'Estimez le coût de votre projet personnalisé',
        fields: {
          users: 'Nombre d\'utilisateurs',
          complexity: 'Complexité du projet',
          integrations: 'Nombre d\'intégrations',
          support: 'Niveau de support souhaité'
        },
        options: {
          complexity: [
            { value: 'simple', label: 'Simple', multiplier: 1 },
            { value: 'medium', label: 'Moyen', multiplier: 1.5 },
            { value: 'complex', label: 'Complexe', multiplier: 2 }
          ],
          support: [
            { value: 'basic', label: 'Basique', cost: 0 },
            { value: 'standard', label: 'Standard', cost: 500 },
            { value: 'premium', label: 'Premium', cost: 1000 }
          ]
        },
        result: 'Estimation :',
        cta: 'Obtenir un devis détaillé'
      },
      faq: {
        title: 'Questions Fréquentes',
        subtitle: 'Trouvez des réponses aux questions les plus courantes sur nos tarifs',
        items: [
          {
            question: 'Puis-je changer de plan à tout moment ?',
            answer: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet au début du prochain cycle de facturation.'
          },
          {
            question: 'Y a-t-il des frais de configuration ?',
            answer: 'Les plans Starter et Professional incluent la configuration dans le prix. Pour le plan Enterprise, la configuration est personnalisée selon vos besoins.'
          },
          {
            question: 'Que se passe-t-il si je dépasse mes limites ?',
            answer: 'Nous vous contacterons pour discuter d\'une mise à niveau. Nous ne suspendons jamais votre service sans préavis.'
          },
          {
            question: 'Proposez-vous des remises pour les contrats annuels ?',
            answer: 'Oui, nous offrons 20% de réduction sur tous les plans avec un engagement annuel.'
          },
          {
            question: 'Puis-je annuler mon abonnement ?',
            answer: 'Oui, vous pouvez annuler votre abonnement à tout moment. Aucun frais d\'annulation n\'est appliqué.'
          },
          {
            question: 'Incluez-vous la formation dans tous les plans ?',
            answer: 'Oui, tous nos plans incluent la formation de vos équipes. La durée et le niveau de formation varient selon le plan choisi.'
          }
        ]
      },
      cta: {
        title: 'Prêt à commencer ?',
        subtitle: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.',
        button: 'Démarrer un projet',
        buttonSecondary: 'Planifier un appel'
      }
    },
    en: {
      hero: {
        title: 'Pricing & Plans',
        subtitle: 'Choose the plan that best fits your needs and budget.',
        cta: 'Get started now'
      },
      billing: {
        monthly: 'Monthly',
        yearly: 'Yearly',
        discount: 'Save 20%'
      },
      plans: {
        starter: {
          name: 'Starter',
          description: 'Perfect for small businesses starting with AI',
          price: {
            monthly: '€2,500',
            yearly: '€2,000'
          },
          features: [
            'Business process audit',
            'Basic automation solution',
            'Email support',
            'Basic training (2h)',
            'Monthly reports',
            'Standard integrations',
            'Maintenance included'
          ],
          limitations: [
            'Maximum 5 users',
            'Email support only',
            'Limited AI features'
          ],
          cta: 'Start with Starter'
        },
        professional: {
          name: 'Professional',
          description: 'Ideal for growing businesses',
          price: {
            monthly: '€5,000',
            yearly: '€4,000'
          },
          features: [
            'Everything from Starter plan',
            'Advanced predictive AI',
            'Priority support (24h)',
            'Complete training (8h)',
            'Weekly reports',
            'Custom integrations',
            'Maintenance and updates',
            'Custom API',
            'Advanced dashboards'
          ],
          limitations: [
            'Maximum 25 users',
            'Limited phone support'
          ],
          popular: true,
          cta: 'Start with Professional'
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Complete solution for large enterprises',
          price: {
            monthly: 'Custom',
            yearly: 'Custom'
          },
          features: [
            'Everything from Professional plan',
            'Custom and dedicated AI',
            '24/7 support with dedicated',
            'Advanced training (unlimited)',
            'Real-time reports',
            'Complex integrations',
            'Dedicated account manager',
            'Custom SLA',
            'On-site deployment',
            'IT team training',
            'Complete security audit'
          ],
          limitations: [],
          cta: 'Contact sales'
        }
      },
      features: {
        title: 'Included Features',
        subtitle: 'Discover what\'s included in each plan',
        items: [
          {
            icon: Zap,
            title: 'AI Automation',
            description: 'Intelligent automation of your business processes',
            starter: true,
            professional: true,
            enterprise: true
          },
          {
            icon: Target,
            title: 'Predictive Analytics',
            description: 'AI-based predictions and recommendations',
            starter: false,
            professional: true,
            enterprise: true
          },
          {
            icon: Shield,
            title: 'Advanced Security',
            description: 'Data protection and GDPR compliance',
            starter: true,
            professional: true,
            enterprise: true
          },
          {
            icon: Headphones,
            title: 'Customer Support',
            description: 'Technical support and guidance',
            starter: 'Email',
            professional: 'Priority',
            enterprise: '24/7 Dedicated'
          },
          {
            icon: Users,
            title: 'Training',
            description: 'Training your teams on new technologies',
            starter: '2h',
            professional: '8h',
            enterprise: 'Unlimited'
          },
          {
            icon: TrendingUp,
            title: 'Reports',
            description: 'Detailed reports on performance',
            starter: 'Monthly',
            professional: 'Weekly',
            enterprise: 'Real-time'
          }
        ]
      },
      calculator: {
        title: 'Cost Calculator',
        subtitle: 'Estimate the cost of your custom project',
        fields: {
          users: 'Number of users',
          complexity: 'Project complexity',
          integrations: 'Number of integrations',
          support: 'Desired support level'
        },
        options: {
          complexity: [
            { value: 'simple', label: 'Simple', multiplier: 1 },
            { value: 'medium', label: 'Medium', multiplier: 1.5 },
            { value: 'complex', label: 'Complex', multiplier: 2 }
          ],
          support: [
            { value: 'basic', label: 'Basic', cost: 0 },
            { value: 'standard', label: 'Standard', cost: 500 },
            { value: 'premium', label: 'Premium', cost: 1000 }
          ]
        },
        result: 'Estimate:',
        cta: 'Get detailed quote'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to the most common questions about our pricing',
        items: [
          {
            question: 'Can I change plans at any time?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of the next billing cycle.'
          },
          {
            question: 'Are there setup fees?',
            answer: 'Starter and Professional plans include setup in the price. For the Enterprise plan, setup is customized according to your needs.'
          },
          {
            question: 'What happens if I exceed my limits?',
            answer: 'We will contact you to discuss an upgrade. We never suspend your service without notice.'
          },
          {
            question: 'Do you offer discounts for annual contracts?',
            answer: 'Yes, we offer 20% discount on all plans with annual commitment.'
          },
          {
            question: 'Can I cancel my subscription?',
            answer: 'Yes, you can cancel your subscription at any time. No cancellation fees are applied.'
          },
          {
            question: 'Do you include training in all plans?',
            answer: 'Yes, all our plans include training for your teams. The duration and level of training varies according to the chosen plan.'
          }
        ]
      },
      cta: {
        title: 'Ready to get started?',
        subtitle: 'Contact us to discuss your project and get a personalized quote.',
        button: 'Start a project',
        buttonSecondary: 'Schedule a call'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

  // Calculateur de coûts
  const [calculatorData, setCalculatorData] = useState({
    users: 10,
    complexity: 'medium',
    integrations: 3,
    support: 'standard'
  });

  const calculateEstimate = () => {
    const basePrice = 2500;
    const userMultiplier = Math.ceil(calculatorData.users / 5) * 0.2;
    const complexityMultiplier = t.calculator.options.complexity.find(
      opt => opt.value === calculatorData.complexity
    )?.multiplier || 1;
    const integrationCost = calculatorData.integrations * 500;
    const supportCost = t.calculator.options.support.find(
      opt => opt.value === calculatorData.support
    )?.cost || 0;
    
    const estimate = (basePrice + integrationCost + supportCost) * (1 + userMultiplier) * complexityMultiplier;
    return Math.round(estimate);
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
            href="#pricing"
            size="lg"
            className="animate-slide-up"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Billing Toggle */}
      <section id="pricing" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.billing.monthly}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.billing.yearly}
                <span className="ml-2 px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
                  {t.billing.discount}
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(t.plans).map(([key, plan]) => (
              <Card key={key} className={`relative ${'popular' in plan && plan.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {'popular' in plan && plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price[billingPeriod as keyof typeof plan.price]}
                    </div>
                    <div className="text-gray-600">
                      {billingPeriod === 'monthly' ? '/mois' : '/an'}
                    </div>
                  </div>
                  
                  <Button
                    href={key === 'enterprise' ? '/contact' : '/contact'}
                    variant={'popular' in plan && plan.popular ? 'primary' : 'outline'}
                    className="w-full mb-8"
                    onClick={() => setSelectedPlan(key)}
                  >
                    {plan.cta}
                  </Button>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Inclus :</h4>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Limitations :</h4>
                        <ul className="space-y-2 text-left">
                          {plan.limitations.map((limitation, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-500">
                              <X className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.features.title}</h2>
            <p className="content-description">{t.features.subtitle}</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Fonctionnalités</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {t.features.items.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <feature.icon className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="font-medium text-gray-900">{feature.title}</div>
                          <div className="text-sm text-gray-600">{feature.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <CheckCircle className="w-5 h-5 text-success-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.professional === 'boolean' ? (
                        feature.professional ? (
                          <CheckCircle className="w-5 h-5 text-success-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.professional}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <CheckCircle className="w-5 h-5 text-success-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.calculator.title}</h2>
            <p className="content-description">{t.calculator.subtitle}</p>
          </div>
          
          <Card className="max-w-2xl mx-auto p-8">
            <div className="grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.calculator.fields.users}
                </label>
                <input
                  type="number"
                  value={calculatorData.users}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, users: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.calculator.fields.complexity}
                </label>
                <select
                  value={calculatorData.complexity}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, complexity: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {t.calculator.options.complexity.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.calculator.fields.integrations}
                </label>
                <input
                  type="number"
                  value={calculatorData.integrations}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, integrations: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.calculator.fields.support}
                </label>
                <select
                  value={calculatorData.support}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, support: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {t.calculator.options.support.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                {t.calculator.result} {calculateEstimate().toLocaleString()}€
              </div>
              <p className="text-gray-600 mb-4">
                Estimation basée sur vos paramètres
              </p>
              <Button href="/contact" variant="outline">
                {t.calculator.cta}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.faq.title}</h2>
            <p className="content-description">{t.faq.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <Card key={index} className="p-6">
                  <button
                    onClick={() => setShowFAQ(showFAQ === index ? false : index)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    {showFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {showFAQ === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
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
