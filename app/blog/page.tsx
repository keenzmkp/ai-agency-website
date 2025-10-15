'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Share2,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Zap
} from 'lucide-react';

// Types
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  views: number;
  tags: string[];
  category: string;
  featured: boolean;
  image: string;
}

interface BlogCategory {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
}

// Données des articles de blog
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'L\'Intelligence Artificielle au Service de l\'Automation Business',
    excerpt: 'Découvrez comment l\'IA transforme les processus métier et automatise les tâches répétitives pour améliorer l\'efficacité organisationnelle.',
    content: 'Contenu complet de l\'article...',
    author: {
      name: 'Marie Dubois',
      avatar: '/images/team/marie-dubois.jpg',
      role: 'Expert IA'
    },
    publishedAt: '2024-01-15',
    readTime: '8 min',
    views: 1250,
    tags: ['IA', 'Automation', 'Business'],
    category: 'Intelligence Artificielle',
    featured: true,
    image: '/images/blog/ai-automation.jpg'
  },
  {
    id: '2',
    title: 'Les 10 Tendances Web à Surveiller en 2024',
    excerpt: 'Explorez les innovations technologiques qui vont façonner le développement web cette année.',
    content: 'Contenu complet de l\'article...',
    author: {
      name: 'Thomas Martin',
      avatar: '/images/team/thomas-martin.jpg',
      role: 'Lead Developer'
    },
    publishedAt: '2024-01-12',
    readTime: '6 min',
    views: 980,
    tags: ['Web', 'Tendances', '2024'],
    category: 'Développement Web',
    featured: true,
    image: '/images/blog/web-trends-2024.jpg'
  },
  {
    id: '3',
    title: 'Comment Optimiser Votre Site Web pour le SEO',
    excerpt: 'Guide complet pour améliorer le référencement naturel de votre site web et augmenter votre visibilité en ligne.',
    content: 'Contenu complet de l\'article...',
    author: {
      name: 'Sophie Leroy',
      avatar: '/images/team/sophie-leroy.jpg',
      role: 'SEO Specialist'
    },
    publishedAt: '2024-01-10',
    readTime: '10 min',
    views: 2100,
    tags: ['SEO', 'Optimisation', 'Référencement'],
    category: 'Marketing Digital',
    featured: false,
    image: '/images/blog/seo-optimization.jpg'
  },
  {
    id: '4',
    title: 'Créer des Expériences Utilisateur Mémorables',
    excerpt: 'Les principes fondamentaux du design UX/UI pour créer des interfaces qui captivent et convertissent.',
    content: 'Contenu complet de l\'article...',
    author: {
      name: 'Alexandre Petit',
      avatar: '/images/team/alexandre-petit.jpg',
      role: 'UX Designer'
    },
    publishedAt: '2024-01-08',
    readTime: '7 min',
    views: 1450,
    tags: ['UX', 'UI', 'Design'],
    category: 'Design',
    featured: false,
    image: '/images/blog/ux-design.jpg'
  },
  {
    id: '5',
    title: 'L\'Avenir du E-commerce avec l\'IA',
    excerpt: 'Comment l\'intelligence artificielle révolutionne l\'expérience d\'achat en ligne et personnalise les recommandations.',
    content: 'Contenu complet de l\'article...',
    author: {
      name: 'Camille Rousseau',
      avatar: '/images/team/camille-rousseau.jpg',
      role: 'E-commerce Expert'
    },
    publishedAt: '2024-01-05',
    readTime: '9 min',
    views: 1680,
    tags: ['E-commerce', 'IA', 'Personnalisation'],
    category: 'Intelligence Artificielle',
    featured: false,
    image: '/images/blog/ecommerce-ai.jpg'
  },
  {
    id: '6',
    title: 'Sécurité Web : Protéger Votre Site des Cyberattaques',
    excerpt: 'Les meilleures pratiques pour sécuriser votre site web et protéger les données de vos utilisateurs.',
    content: 'Contenu complet de l\'article...',
    author: {
      name: 'Nicolas Moreau',
      avatar: '/images/team/nicolas-moreau.jpg',
      role: 'Security Expert'
    },
    publishedAt: '2024-01-03',
    readTime: '12 min',
    views: 3200,
    tags: ['Sécurité', 'Cybersécurité', 'Protection'],
    category: 'Sécurité',
    featured: false,
    image: '/images/blog/web-security.jpg'
  }
];

const categories: BlogCategory[] = [
  { id: 'all', name: 'Tous les articles', count: blogPosts.length, icon: <BookOpen className="w-4 h-4" /> },
  { id: 'ai', name: 'Intelligence Artificielle', count: blogPosts.filter(p => p.category === 'Intelligence Artificielle').length, icon: <Zap className="w-4 h-4" /> },
  { id: 'web', name: 'Développement Web', count: blogPosts.filter(p => p.category === 'Développement Web').length, icon: <Code className="w-4 h-4" /> },
  { id: 'marketing', name: 'Marketing Digital', count: blogPosts.filter(p => p.category === 'Marketing Digital').length, icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'design', name: 'Design', count: blogPosts.filter(p => p.category === 'Design').length, icon: <Lightbulb className="w-4 h-4" /> },
  { id: 'security', name: 'Sécurité', count: blogPosts.filter(p => p.category === 'Sécurité').length, icon: <Eye className="w-4 h-4" /> }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'trending'>('newest');

  // Filtrage des articles
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             post.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'popular':
          return b.views - a.views;
        case 'trending':
          return b.views - a.views; // Simplifié pour l'exemple
        default:
          return 0;
      }
    });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Blog & Actualités
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez les dernières tendances en développement web, intelligence artificielle 
              et automation business. Nos experts partagent leurs connaissances pour vous aider 
              à rester à la pointe de l'innovation.
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Catégories */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Tri */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trier par</h3>
                <div className="space-y-2">
                  {[
                    { value: 'newest', label: 'Plus récent' },
                    { value: 'popular', label: 'Plus populaire' },
                    { value: 'trending', label: 'Tendance' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value as any)}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        sortBy === option.value
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-primary-100 mb-4">
                  Recevez nos derniers articles directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="bg-white/20 border-white/30 text-white placeholder-white/70"
                  />
                  <Button variant="secondary" className="w-full">
                    S'abonner
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Articles en vedette */}
            {selectedCategory === 'all' && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles en vedette</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 relative">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-white/90 text-sm line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-primary-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{post.author.name}</p>
                              <p className="text-sm text-gray-500">{post.author.role}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Lire <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Liste des articles */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'Tous les articles' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-500">
                  {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20" />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors duration-200">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200">
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Eye className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Lire l'article <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-primary-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{post.author.name}</p>
                              <p className="text-xs text-gray-500">{post.author.role}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
                  <p className="text-gray-500 mb-6">
                    Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                  </p>
                  <Button onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}>
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Précédent
                </Button>
                <Button variant="primary" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  Suivant
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
