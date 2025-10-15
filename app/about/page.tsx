'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield,
  CheckCircle,
  ArrowRight,
  Quote,
  Star,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Trophy,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  const [locale, setLocale] = useState('fr');

  // Traductions
  const translations = {
    fr: {
      hero: {
        title: 'À propos de l\'Agence AI',
        subtitle: 'Nous sommes une équipe passionnée d\'experts en intelligence artificielle et développement web, dédiée à transformer votre vision en réalité digitale.',
        cta: 'Découvrir notre équipe'
      },
      mission: {
        title: 'Notre Mission',
        subtitle: 'Révolutionner la façon dont les entreprises utilisent la technologie',
        description: 'Nous croyons que l\'intelligence artificielle et l\'automation peuvent transformer radicalement la productivité et l\'efficacité des entreprises. Notre mission est de démocratiser ces technologies en créant des solutions accessibles, performantes et adaptées à chaque besoin.',
        values: [
          {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Nous repoussons constamment les limites de la technologie pour créer des solutions avant-gardistes.'
          },
          {
            icon: Shield,
            title: 'Qualité',
            description: 'Chaque projet est réalisé avec le plus grand soin et selon les plus hauts standards de qualité.'
          },
          {
            icon: Heart,
            title: 'Passion',
            description: 'Notre passion pour la technologie se reflète dans chaque solution que nous créons.'
          },
          {
            icon: Target,
            title: 'Excellence',
            description: 'Nous visons l\'excellence dans chaque aspect de notre travail et de nos relations clients.'
          }
        ]
      },
      team: {
        title: 'Notre Équipe',
        subtitle: 'Des experts passionnés à votre service',
        members: [
          {
            name: 'Alexandre Dubois',
            role: 'CEO & Fondateur',
            description: 'Expert en IA avec 10 ans d\'expérience dans la transformation digitale des entreprises.',
            image: 'AD',
            social: {
              linkedin: 'https://linkedin.com/in/alexandre-dubois',
              twitter: 'https://twitter.com/alex_dubois',
              email: 'alexandre@agence-ai.fr'
            },
            skills: ['Leadership', 'IA Strategy', 'Business Development']
          },
          {
            name: 'Sophie Martin',
            role: 'CTO',
            description: 'Ingénieure en IA spécialisée dans le machine learning et l\'automation des processus.',
            image: 'SM',
            social: {
              linkedin: 'https://linkedin.com/in/sophie-martin',
              github: 'https://github.com/sophie-martin',
              email: 'sophie@agence-ai.fr'
            },
            skills: ['Machine Learning', 'Python', 'Architecture']
          },
          {
            name: 'Thomas Chen',
            role: 'Lead Developer',
            description: 'Développeur full-stack expert en React, Node.js et solutions cloud.',
            image: 'TC',
            social: {
              linkedin: 'https://linkedin.com/in/thomas-chen',
              github: 'https://github.com/thomas-chen',
              email: 'thomas@agence-ai.fr'
            },
            skills: ['React/Next.js', 'Node.js', 'Cloud']
          },
          {
            name: 'Marie Leroy',
            role: 'UX/UI Designer',
            description: 'Designer créative spécialisée dans l\'expérience utilisateur et l\'interface des applications IA.',
            image: 'ML',
            social: {
              linkedin: 'https://linkedin.com/in/marie-leroy',
              twitter: 'https://twitter.com/marie_leroy',
              email: 'marie@agence-ai.fr'
            },
            skills: ['UX Design', 'UI Design', 'Prototyping']
          },
          {
            name: 'David Rodriguez',
            role: 'Data Scientist',
            description: 'Expert en analyse de données et modèles prédictifs pour l\'optimisation des processus métier.',
            image: 'DR',
            social: {
              linkedin: 'https://linkedin.com/in/david-rodriguez',
              github: 'https://github.com/david-rodriguez',
              email: 'david@agence-ai.fr'
            },
            skills: ['Data Science', 'Python', 'Statistics']
          },
          {
            name: 'Emma Wilson',
            role: 'Project Manager',
            description: 'Gestionnaire de projet expérimentée dans la coordination d\'équipes techniques et la livraison de solutions complexes.',
            image: 'EW',
            social: {
              linkedin: 'https://linkedin.com/in/emma-wilson',
              email: 'emma@agence-ai.fr'
            },
            skills: ['Project Management', 'Agile', 'Communication']
          }
        ]
      },
      stats: {
        title: 'Nos Chiffres',
        subtitle: 'Une croissance constante et des résultats qui parlent',
        items: [
          {
            number: '200+',
            label: 'Clients satisfaits',
            icon: Users
          },
          {
            number: '500+',
            label: 'Projets réalisés',
            icon: Trophy
          },
          {
            number: '5+',
            label: 'Années d\'expérience',
            icon: Calendar
          },
          {
            number: '25+',
            label: 'Experts dans l\'équipe',
            icon: Award
          },
          {
            number: '99%',
            label: 'Taux de satisfaction',
            icon: Star
          },
          {
            number: '24/7',
            label: 'Support client',
            icon: Zap
          }
        ]
      },
      story: {
        title: 'Notre Histoire',
        subtitle: 'De l\'idée à la réalité',
        content: 'Fondée en 2019 par Alexandre Dubois, l\'Agence AI est née d\'une vision simple : démocratiser l\'intelligence artificielle pour les entreprises de toutes tailles. Ce qui a commencé comme une petite équipe de 3 personnes dans un bureau parisien est devenu une agence reconnue avec plus de 25 experts et des clients dans toute l\'Europe. Notre croissance s\'est construite sur la confiance de nos clients et notre engagement à fournir des solutions qui transforment réellement leur façon de travailler.',
        milestones: [
          {
            year: '2019',
            title: 'Fondation',
            description: 'Création de l\'Agence AI avec 3 co-fondateurs'
          },
          {
            year: '2020',
            title: 'Premier succès',
            description: '100 premiers clients et 50 projets réalisés'
          },
          {
            year: '2021',
            title: 'Expansion',
            description: 'Ouverture de bureaux à Lyon et recrutement de 10 experts'
          },
          {
            year: '2022',
            title: 'Reconnaissance',
            description: 'Prix de la meilleure agence IA de l\'année'
          },
          {
            year: '2023',
            title: 'Innovation',
            description: 'Lancement de notre plateforme d\'automation IA'
          },
          {
            year: '2024',
            title: 'Avenir',
            description: 'Expansion européenne et nouveaux services'
          }
        ]
      },
      cta: {
        title: 'Rejoignez-nous dans cette aventure',
        subtitle: 'Découvrez comment nous pouvons transformer votre entreprise avec l\'IA',
        button: 'Démarrer un projet',
        buttonSecondary: 'Voir nos offres d\'emploi'
      }
    },
    en: {
      hero: {
        title: 'About AI Agency',
        subtitle: 'We are a passionate team of AI and web development experts, dedicated to transforming your vision into digital reality.',
        cta: 'Discover our team'
      },
      mission: {
        title: 'Our Mission',
        subtitle: 'Revolutionizing how businesses use technology',
        description: 'We believe that artificial intelligence and automation can radically transform business productivity and efficiency. Our mission is to democratize these technologies by creating accessible, performant solutions tailored to each need.',
        values: [
          {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We constantly push the boundaries of technology to create cutting-edge solutions.'
          },
          {
            icon: Shield,
            title: 'Quality',
            description: 'Every project is carried out with the greatest care and according to the highest quality standards.'
          },
          {
            icon: Heart,
            title: 'Passion',
            description: 'Our passion for technology is reflected in every solution we create.'
          },
          {
            icon: Target,
            title: 'Excellence',
            description: 'We aim for excellence in every aspect of our work and client relationships.'
          }
        ]
      },
      team: {
        title: 'Our Team',
        subtitle: 'Passionate experts at your service',
        members: [
          {
            name: 'Alexandre Dubois',
            role: 'CEO & Founder',
            description: 'AI expert with 10 years of experience in digital transformation of businesses.',
            image: 'AD',
            social: {
              linkedin: 'https://linkedin.com/in/alexandre-dubois',
              twitter: 'https://twitter.com/alex_dubois',
              email: 'alexandre@agence-ai.fr'
            },
            skills: ['Leadership', 'AI Strategy', 'Business Development']
          },
          {
            name: 'Sophie Martin',
            role: 'CTO',
            description: 'AI engineer specialized in machine learning and process automation.',
            image: 'SM',
            social: {
              linkedin: 'https://linkedin.com/in/sophie-martin',
              github: 'https://github.com/sophie-martin',
              email: 'sophie@agence-ai.fr'
            },
            skills: ['Machine Learning', 'Python', 'Architecture']
          },
          {
            name: 'Thomas Chen',
            role: 'Lead Developer',
            description: 'Full-stack developer expert in React, Node.js and cloud solutions.',
            image: 'TC',
            social: {
              linkedin: 'https://linkedin.com/in/thomas-chen',
              github: 'https://github.com/thomas-chen',
              email: 'thomas@agence-ai.fr'
            },
            skills: ['React/Next.js', 'Node.js', 'Cloud']
          },
          {
            name: 'Marie Leroy',
            role: 'UX/UI Designer',
            description: 'Creative designer specialized in user experience and AI application interfaces.',
            image: 'ML',
            social: {
              linkedin: 'https://linkedin.com/in/marie-leroy',
              twitter: 'https://twitter.com/marie_leroy',
              email: 'marie@agence-ai.fr'
            },
            skills: ['UX Design', 'UI Design', 'Prototyping']
          },
          {
            name: 'David Rodriguez',
            role: 'Data Scientist',
            description: 'Expert in data analysis and predictive models for business process optimization.',
            image: 'DR',
            social: {
              linkedin: 'https://linkedin.com/in/david-rodriguez',
              github: 'https://github.com/david-rodriguez',
              email: 'david@agence-ai.fr'
            },
            skills: ['Data Science', 'Python', 'Statistics']
          },
          {
            name: 'Emma Wilson',
            role: 'Project Manager',
            description: 'Experienced project manager in coordinating technical teams and delivering complex solutions.',
            image: 'EW',
            social: {
              linkedin: 'https://linkedin.com/in/emma-wilson',
              email: 'emma@agence-ai.fr'
            },
            skills: ['Project Management', 'Agile', 'Communication']
          }
        ]
      },
      stats: {
        title: 'Our Numbers',
        subtitle: 'Constant growth and results that speak',
        items: [
          {
            number: '200+',
            label: 'Satisfied clients',
            icon: Users
          },
          {
            number: '500+',
            label: 'Projects completed',
            icon: Trophy
          },
          {
            number: '5+',
            label: 'Years of experience',
            icon: Calendar
          },
          {
            number: '25+',
            label: 'Team experts',
            icon: Award
          },
          {
            number: '99%',
            label: 'Satisfaction rate',
            icon: Star
          },
          {
            number: '24/7',
            label: 'Client support',
            icon: Zap
          }
        ]
      },
      story: {
        title: 'Our Story',
        subtitle: 'From idea to reality',
        content: 'Founded in 2019 by Alexandre Dubois, AI Agency was born from a simple vision: democratize artificial intelligence for businesses of all sizes. What started as a small team of 3 people in a Paris office has become a recognized agency with over 25 experts and clients across Europe. Our growth has been built on our clients\' trust and our commitment to providing solutions that truly transform their way of working.',
        milestones: [
          {
            year: '2019',
            title: 'Foundation',
            description: 'Creation of AI Agency with 3 co-founders'
          },
          {
            year: '2020',
            title: 'First success',
            description: '100 first clients and 50 projects completed'
          },
          {
            year: '2021',
            title: 'Expansion',
            description: 'Opening of offices in Lyon and recruitment of 10 experts'
          },
          {
            year: '2022',
            title: 'Recognition',
            description: 'Best AI agency of the year award'
          },
          {
            year: '2023',
            title: 'Innovation',
            description: 'Launch of our AI automation platform'
          },
          {
            year: '2024',
            title: 'Future',
            description: 'European expansion and new services'
          }
        ]
      },
      cta: {
        title: 'Join us in this adventure',
        subtitle: 'Discover how we can transform your business with AI',
        button: 'Start a project',
        buttonSecondary: 'View our job offers'
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
          <Button
            href="#team"
            size="lg"
            className="animate-slide-up"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.mission.title}</h2>
            <p className="content-description">{t.mission.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              {t.mission.description}
            </p>
          </div>
          
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {t.mission.values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.team.title}</h2>
            <p className="content-description">{t.team.subtitle}</p>
          </div>
          
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {t.team.members.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.stats.title}</h2>
            <p className="content-description">{t.stats.subtitle}</p>
          </div>
          
          <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="content-title">{t.story.title}</h2>
            <p className="content-description">{t.story.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              {t.story.content}
            </p>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              
              {t.story.milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-soft">
                      <div className="text-primary-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-medium"></div>
                </div>
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
              href="/careers"
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
