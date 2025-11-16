'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import AIChatbot from '@/components/AIChatbot';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  User,
  Building,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ContactPage() {
  const [locale, setLocale] = useState('fr');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showFAQ, setShowFAQ] = useState<number | false>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false
  });

  // Traductions
  const translations = {
    fr: {
      hero: {
        title: 'Contactez-nous',
        subtitle: 'Prêt à transformer votre entreprise ? Discutons de votre projet d\'automation IA.',
        cta: 'Démarrer un projet'
      },
      contact: {
        title: 'Informations de Contact',
        subtitle: 'Plusieurs façons de nous joindre',
        info: {
          address: '123 Rue de l\'Innovation, 75001 Paris, France',
          phone: '+33 1 23 45 67 89',
          email: 'contact@vibranceonline.com',
          hours: 'Lun - Ven: 9h00 - 18h00'
        }
      },
      form: {
        title: 'Envoyez-nous un message',
        subtitle: 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24h.',
        fields: {
          name: 'Nom complet',
          email: 'Adresse email',
          company: 'Entreprise',
          phone: 'Téléphone',
          service: 'Service souhaité',
          budget: 'Budget estimé',
          message: 'Message',
          newsletter: 'Je souhaite recevoir la newsletter'
        },
        placeholders: {
          name: 'Votre nom complet',
          email: 'votre@email.com',
          company: 'Nom de votre entreprise',
          phone: '+33 1 23 45 67 89',
          message: 'Décrivez votre projet en détail...',
          budget: 'Sélectionnez votre budget'
        },
        services: [
          'Automation IA',
          'Développement Web',
          'Consulting Digital',
          'Formation',
          'Autre'
        ],
        budgets: [
          'Moins de 5 000€',
          '5 000€ - 15 000€',
          '15 000€ - 50 000€',
          'Plus de 50 000€',
          'À discuter'
        ],
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi du message.'
      },
      methods: {
        title: 'Méthodes de Contact',
        subtitle: 'Choisissez la méthode qui vous convient le mieux',
        items: [
          {
            icon: MessageCircle,
            title: 'Chat en direct',
            description: 'Discutez avec notre assistant IA ou notre équipe',
            action: 'Ouvrir le chat',
            onClick: () => setIsChatbotOpen(true)
          },
          {
            icon: Phone,
            title: 'Appel téléphonique',
            description: 'Appelez-nous directement pour un échange rapide',
            action: 'Appeler maintenant',
            href: 'tel:+33123456789'
          },
          {
            icon: Calendar,
            title: 'Rendez-vous',
            description: 'Planifiez un appel ou une réunion en ligne',
            action: 'Planifier',
            href: '/schedule'
          },
          {
            icon: Mail,
            title: 'Email',
            description: 'Envoyez-nous un email détaillé',
            action: 'Envoyer un email',
            href: 'mailto:contact@vibranceonline.com'
          }
        ]
      },
      faq: {
        title: 'Questions Fréquentes',
        subtitle: 'Trouvez des réponses aux questions les plus courantes',
        items: [
          {
            question: 'Combien de temps faut-il pour développer une solution d\'IA ?',
            answer: 'Le délai dépend de la complexité du projet. Pour une solution d\'automation basique, comptez 2-3 mois. Pour des projets plus complexes avec IA prédictive, cela peut prendre 4-6 mois.'
          },
          {
            question: 'Quels sont vos tarifs pour un projet d\'automation IA ?',
            answer: 'Nos tarifs varient selon la complexité du projet. Nous proposons des packages à partir de 2 500€/mois pour des solutions basiques, jusqu\'à des projets sur mesure pour les grandes entreprises.'
          },
          {
            question: 'Proposez-vous un support après la livraison ?',
            answer: 'Oui, nous offrons un support complet après la livraison, incluant la maintenance, les mises à jour, la formation des équipes et l\'optimisation continue de votre solution.'
          },
          {
            question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
            answer: 'Absolument ! Nous travaillons avec des startups, des PME et des grandes entreprises. Nos solutions s\'adaptent à vos besoins et à votre budget.'
          },
          {
            question: 'Comment garantissez-vous la sécurité des données ?',
            answer: 'Nous respectons les plus hauts standards de sécurité (RGPD, ISO 27001) et utilisons des protocoles de chiffrement avancés. Vos données sont protégées et restent sous votre contrôle.'
          },
          {
            question: 'Proposez-vous des formations pour nos équipes ?',
            answer: 'Oui, nous proposons des formations complètes pour vos équipes sur l\'utilisation des solutions IA, les bonnes pratiques et l\'optimisation des processus automatisés.'
          }
        ]
      },
      social: {
        title: 'Suivez-nous',
        subtitle: 'Restez informé de nos dernières actualités et innovations',
        platforms: [
          { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/vibrance-online', color: 'text-blue-600' },
          { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/vibranceonline', color: 'text-blue-400' },
          { name: 'GitHub', icon: Github, href: 'https://github.com/vibrance-online', color: 'text-gray-600' },
          { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/vibranceonline', color: 'text-pink-500' },
          { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/vibranceonline', color: 'text-blue-600' },
          { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/vibranceonline', color: 'text-red-600' }
        ]
      },
      cta: {
        title: 'Prêt à commencer ?',
        subtitle: 'Contactez-nous dès aujourd\'hui pour discuter de votre projet.',
        button: 'Démarrer un projet',
        buttonSecondary: 'Voir nos services'
      }
    },
    en: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Ready to transform your business? Let\'s discuss your AI automation project.',
        cta: 'Start a project'
      },
      contact: {
        title: 'Contact Information',
        subtitle: 'Multiple ways to reach us',
        info: {
          address: '123 Innovation Street, 75001 Paris, France',
          phone: '+33 1 23 45 67 89',
          email: 'contact@vibranceonline.com',
          hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
        }
      },
      form: {
        title: 'Send us a message',
        subtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
        fields: {
          name: 'Full name',
          email: 'Email address',
          company: 'Company',
          phone: 'Phone',
          service: 'Desired service',
          budget: 'Estimated budget',
          message: 'Message',
          newsletter: 'I want to receive the newsletter'
        },
        placeholders: {
          name: 'Your full name',
          email: 'your@email.com',
          company: 'Your company name',
          phone: '+33 1 23 45 67 89',
          message: 'Describe your project in detail...',
          budget: 'Select your budget'
        },
        services: [
          'AI Automation',
          'Web Development',
          'Digital Consulting',
          'Training',
          'Other'
        ],
        budgets: [
          'Less than €5,000',
          '€5,000 - €15,000',
          '€15,000 - €50,000',
          'More than €50,000',
          'To discuss'
        ],
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message.'
      },
      methods: {
        title: 'Contact Methods',
        subtitle: 'Choose the method that works best for you',
        items: [
          {
            icon: MessageCircle,
            title: 'Live chat',
            description: 'Chat with our AI assistant or our team',
            action: 'Open chat',
            onClick: () => setIsChatbotOpen(true)
          },
          {
            icon: Phone,
            title: 'Phone call',
            description: 'Call us directly for a quick exchange',
            action: 'Call now',
            href: 'tel:+33123456789'
          },
          {
            icon: Calendar,
            title: 'Appointment',
            description: 'Schedule a call or online meeting',
            action: 'Schedule',
            href: '/schedule'
          },
          {
            icon: Mail,
            title: 'Email',
            description: 'Send us a detailed email',
            action: 'Send email',
            href: 'mailto:contact@vibranceonline.com'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to the most common questions',
        items: [
          {
            question: 'How long does it take to develop an AI solution?',
            answer: 'The timeline depends on the project complexity. For a basic automation solution, expect 2-3 months. For more complex projects with predictive AI, it can take 4-6 months.'
          },
          {
            question: 'What are your rates for an AI automation project?',
            answer: 'Our rates vary depending on project complexity. We offer packages starting from €2,500/month for basic solutions, up to custom projects for large enterprises.'
          },
          {
            question: 'Do you offer support after delivery?',
            answer: 'Yes, we offer complete support after delivery, including maintenance, updates, team training and continuous optimization of your solution.'
          },
          {
            question: 'Do you work with companies of all sizes?',
            answer: 'Absolutely! We work with startups, SMEs and large enterprises. Our solutions adapt to your needs and budget.'
          },
          {
            question: 'How do you guarantee data security?',
            answer: 'We follow the highest security standards (GDPR, ISO 27001) and use advanced encryption protocols. Your data is protected and remains under your control.'
          },
          {
            question: 'Do you offer training for our teams?',
            answer: 'Yes, we offer comprehensive training for your teams on using AI solutions, best practices and optimizing automated processes.'
          }
        ]
      },
      social: {
        title: 'Follow us',
        subtitle: 'Stay informed about our latest news and innovations',
        platforms: [
          { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/agence-ai', color: 'text-blue-600' },
          { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/agence_ai', color: 'text-blue-400' },
          { name: 'GitHub', icon: Github, href: 'https://github.com/agence-ai', color: 'text-gray-600' },
          { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/agence-ai', color: 'text-pink-500' },
          { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/agence-ai', color: 'text-blue-600' },
          { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/agence-ai', color: 'text-red-600' }
        ]
      },
      cta: {
        title: 'Ready to get started?',
        subtitle: 'Contact us today to discuss your project.',
        button: 'Start a project',
        buttonSecondary: 'View our services'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

  // Gestion du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsFormSubmitted(false);
      // Ici vous pourriez ajouter la logique d'envoi réelle
    }, 2000);
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
            href="#contact-form"
            size="lg"
            className="animate-slide-up"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.methods.title}</h2>
            <p className="content-description">{t.methods.subtitle}</p>
          </div>
          
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {t.methods.items.map((method, index) => (
              <Card key={index} className="text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                {method.href ? (
                  <Button
                    href={method.href}
                    variant="outline"
                    size="sm"
                  >
                    {method.action}
                  </Button>
                ) : (
                  <Button
                    onClick={method.onClick}
                    variant="outline"
                    size="sm"
                  >
                    {method.action}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="section">
        <div className="container-custom">
          <div className="grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
                <p className="text-gray-600 mb-8">{t.contact.subtitle}</p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Adresse</h3>
                      <p className="text-gray-600">{t.contact.info.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Téléphone</h3>
                      <p className="text-gray-600">{t.contact.info.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{t.contact.info.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Horaires</h3>
                      <p className="text-gray-600">{t.contact.info.hours}</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">{t.social.title}</h3>
                  <div className="flex space-x-4">
                    {t.social.platforms.map((platform, index) => (
                      <a
                        key={index}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200 ${platform.color}`}
                        aria-label={platform.name}
                      >
                        <platform.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.form.title}</h2>
                  <p className="text-gray-600">{t.form.subtitle}</p>
                </div>
                
                {isFormSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.form.success}</h3>
                    <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label={t.form.fields.name}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.name}
                        required
                      />
                      <Input
                        label={t.form.fields.email}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.email}
                        required
                      />
                    </div>
                    
                    <div className="grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label={t.form.fields.company}
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.company}
                      />
                      <Input
                        label={t.form.fields.phone}
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.phone}
                      />
                    </div>
                    
                    <div className="grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.form.fields.service}
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Sélectionnez un service</option>
                          {t.form.services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.form.fields.budget}
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Sélectionnez un budget</option>
                          {t.form.budgets.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <Textarea
                      label={t.form.fields.message}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.form.placeholders.message}
                      rows={6}
                      required
                    />
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label className="ml-2 text-sm text-gray-600">
                        {t.form.fields.newsletter}
                      </label>
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isFormSubmitted}
                    >
                      {isFormSubmitted ? t.form.submitting : t.form.submit}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
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
      
      {/* AI Chatbot */}
      <AIChatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onMinimize={() => setIsChatbotMinimized(!isChatbotMinimized)}
        isMinimized={isChatbotMinimized}
      />
    </div>
  );
}
