'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { 
  Calendar, 
  User, 
  Clock,
  Eye,
  Share2,
  ArrowLeft,
  Tag,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Zap
} from 'lucide-react';

// Types
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  views: number;
  tags: string[];
  category: string;
  featured: boolean;
  image: string;
  relatedPosts: string[];
}

// Données de l'article (en réalité, cela viendrait d'une API)
const blogPost: BlogPost = {
  id: '1',
  slug: 'intelligence-artificielle-automation-business',
  title: 'L\'Intelligence Artificielle au Service de l\'Automation Business',
  excerpt: 'Découvrez comment l\'IA transforme les processus métier et automatise les tâches répétitives pour améliorer l\'efficacité organisationnelle.',
  content: `
    <h2>Introduction</h2>
    <p>L'intelligence artificielle (IA) révolutionne la façon dont les entreprises abordent l'automation de leurs processus métier. Dans un monde où l'efficacité et la rapidité sont des facteurs clés de succès, l'IA offre des solutions innovantes pour automatiser les tâches répétitives et optimiser les workflows complexes.</p>
    
    <h2>Les Fondamentaux de l'Automation IA</h2>
    <p>L'automation basée sur l'IA va bien au-delà des simples scripts automatisés. Elle implique l'utilisation d'algorithmes intelligents capables d'apprendre, de s'adapter et de prendre des décisions en temps réel.</p>
    
    <h3>Machine Learning et Processus Métier</h3>
    <p>Le machine learning permet aux systèmes d'analyser de vastes quantités de données pour identifier des patterns et optimiser automatiquement les processus. Cette capacité d'apprentissage continu fait de l'IA un outil particulièrement puissant pour l'automation business.</p>
    
    <h3>Robotic Process Automation (RPA) Intelligente</h3>
    <p>La RPA traditionnelle se contente de reproduire des actions humaines, tandis que la RPA intelligente utilise l'IA pour comprendre le contexte, gérer les exceptions et s'adapter aux changements.</p>
    
    <h2>Cas d'Usage Concrets</h2>
    <p>Voici quelques exemples concrets d'application de l'IA dans l'automation business :</p>
    
    <ul>
      <li><strong>Service client automatisé :</strong> Chatbots intelligents capables de résoudre 80% des requêtes sans intervention humaine</li>
      <li><strong>Analyse de documents :</strong> Extraction et traitement automatique d'informations à partir de documents non structurés</li>
      <li><strong>Prédiction de la demande :</strong> Algorithmes d'IA pour optimiser les stocks et la planification de production</li>
      <li><strong>Détection de fraudes :</strong> Systèmes capables d'identifier les transactions suspectes en temps réel</li>
    </ul>
    
    <h2>Bénéfices de l'Automation IA</h2>
    <p>L'implémentation de solutions d'automation basées sur l'IA apporte de nombreux avantages :</p>
    
    <h3>Efficacité Opérationnelle</h3>
    <p>L'automation IA permet de traiter les tâches 24/7 sans interruption, réduisant les délais de traitement de 60 à 80% dans la plupart des cas.</p>
    
    <h3>Réduction des Erreurs</h3>
    <p>Les systèmes IA sont capables de maintenir un niveau de précision élevé, réduisant considérablement les erreurs humaines dans les processus répétitifs.</p>
    
    <h3>Évolutivité</h3>
    <p>Contrairement aux solutions traditionnelles, l'IA peut s'adapter et évoluer avec les besoins changeants de l'entreprise.</p>
    
    <h2>Défis et Considérations</h2>
    <p>Malgré ses nombreux avantages, l'implémentation de l'automation IA présente certains défis :</p>
    
    <ul>
      <li><strong>Investissement initial :</strong> Les solutions IA nécessitent un investissement significatif en technologie et formation</li>
      <li><strong>Qualité des données :</strong> L'efficacité de l'IA dépend largement de la qualité et de la quantité des données disponibles</li>
      <li><strong>Changement organisationnel :</strong> L'adoption de l'IA nécessite une transformation culturelle et organisationnelle</li>
      <li><strong>Éthique et transparence :</strong> Les décisions prises par l'IA doivent être transparentes et éthiques</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>L'intelligence artificielle transforme fondamentalement l'approche de l'automation business. En combinant la puissance de l'apprentissage automatique avec les processus métier, les entreprises peuvent atteindre des niveaux d'efficacité et d'innovation sans précédent.</p>
    
    <p>Pour réussir cette transformation, il est essentiel de commencer par des cas d'usage simples, de s'assurer de la qualité des données, et de former les équipes aux nouvelles technologies. L'avenir appartient aux entreprises qui sauront intégrer l'IA dans leur stratégie d'automation.</p>
  `,
  author: {
    name: 'Marie Dubois',
    avatar: '/images/team/marie-dubois.jpg',
    role: 'Expert IA',
    bio: 'Marie est une experte en intelligence artificielle avec plus de 10 ans d\'expérience dans l\'automatisation des processus métier. Elle a accompagné plus de 50 entreprises dans leur transformation digitale.'
  },
  publishedAt: '2024-01-15',
  readTime: '8 min',
  views: 1250,
  tags: ['IA', 'Automation', 'Business', 'Machine Learning', 'RPA'],
  category: 'Intelligence Artificielle',
  featured: true,
  image: '/images/blog/ai-automation.jpg',
  relatedPosts: ['2', '3', '4']
};

const relatedPosts = [
  {
    id: '2',
    title: 'Les 10 Tendances Web à Surveiller en 2024',
    excerpt: 'Explorez les innovations technologiques qui vont façonner le développement web cette année.',
    image: '/images/blog/web-trends-2024.jpg',
    readTime: '6 min',
    publishedAt: '2024-01-12'
  },
  {
    id: '3',
    title: 'Comment Optimiser Votre Site Web pour le SEO',
    excerpt: 'Guide complet pour améliorer le référencement naturel de votre site web.',
    image: '/images/blog/seo-optimization.jpg',
    readTime: '10 min',
    publishedAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Créer des Expériences Utilisateur Mémorables',
    excerpt: 'Les principes fondamentaux du design UX/UI pour créer des interfaces qui captivent.',
    image: '/images/blog/ux-design.jpg',
    readTime: '7 min',
    publishedAt: '2024-01-08'
  }
];

export default function BlogPostPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: blogPost.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erreur lors du partage:', err);
      }
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard.writeText(window.location.href);
      // Ici vous pourriez afficher une notification de succès
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" href="/blog" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {/* Header de l'article */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500 text-sm">
                  {new Date(blogPost.publishedAt).toLocaleDateString('fr-FR')}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>

              {/* Métadonnées */}
              <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{blogPost.views.toLocaleString()} vues</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isLiked 
                        ? 'bg-red-100 text-red-600' 
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isBookmarked 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
                    }`}
                  >
                    <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-colors duration-200"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image de l'article */}
            <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white text-2xl font-bold mb-2">Image de l'article</h2>
                <p className="text-white/90">Placeholder pour l'image principale de l'article</p>
              </div>
            </div>

            {/* Contenu de l'article */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                className="text-gray-700 leading-relaxed"
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Auteur */}
            <Card className="mt-12 p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {blogPost.author.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {blogPost.author.bio}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Suivre
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table des matières */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table des matières</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    Introduction
                  </a>
                  <a href="#fondamentaux" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    Les Fondamentaux de l'Automation IA
                  </a>
                  <a href="#cas-usage" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    Cas d'Usage Concrets
                  </a>
                  <a href="#benefices" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    Bénéfices de l'Automation IA
                  </a>
                  <a href="#defis" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    Défis et Considérations
                  </a>
                  <a href="#conclusion" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    Conclusion
                  </a>
                </nav>
              </Card>

              {/* Articles similaires */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles similaires</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-primary-100 mb-4 text-sm">
                  Recevez nos derniers articles directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button variant="secondary" className="w-full">
                    S'abonner
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
