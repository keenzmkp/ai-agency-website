# Agence AI - Site Web Professionnel

Un site web moderne et professionnel pour une agence spécialisée dans l'automation IA et le développement web. Conçu avec Next.js 14, TypeScript, et Tailwind CSS.

## 🚀 Fonctionnalités

### Pages Principales
- **Accueil** - Présentation de l'agence avec sections clés
- **À propos** - Équipe, mission, valeurs et histoire
- **Services** - Automation IA, développement web, consulting, formation
- **Portfolio** - Projets réalisés avec filtres et recherche
- **Contact** - Formulaire de contact avec chatbot IA
- **Tarifs** - Plans et calculateur de coûts

### Fonctionnalités Techniques
- ✅ **Responsive Design** - Optimisé pour tous les appareils
- ✅ **Bilingue** - Français et Anglais
- ✅ **SEO Optimisé** - Meta tags, sitemap, structure sémantique
- ✅ **Performance** - Optimisations Next.js et images
- ✅ **Accessibilité** - Standards WCAG 2.1
- ✅ **Chatbot IA** - Assistant intelligent intégré
- ✅ **Animations** - Transitions fluides avec Framer Motion
- ✅ **Thème Sombre** - Support du mode sombre
- ✅ **PWA Ready** - Prêt pour l'installation

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **React Hook Form** - Gestion des formulaires

### Backend & Déploiement
- **Vercel** - Plateforme de déploiement recommandée
- **Node.js** - Runtime JavaScript
- **PostCSS** - Traitement CSS
- **ESLint** - Linting du code

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Git

### Installation Locale

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/agence-ai-website.git
cd agence-ai-website
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Configuration de base
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_SITE_NAME="Agence AI"

# API Keys (optionnel)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_MAPS_API_KEY

# Email (pour le formulaire de contact)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Base de données (optionnel)
DATABASE_URL=postgresql://username:password@localhost:5432/agence_ai
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Importez le repository

2. **Configuration automatique**
   - Vercel détecte automatiquement Next.js
   - Les variables d'environnement sont configurées
   - Le déploiement se fait automatiquement

3. **Domaine personnalisé**
   - Ajoutez votre domaine dans les paramètres
   - Configurez les DNS selon les instructions

### Autres Plateformes

#### Netlify
```bash
# Build command
npm run build

# Publish directory
out
```

#### AWS Amplify
```bash
# Build settings
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Couleur principale
    600: '#0284c7',
    // ...
  },
  secondary: {
    500: '#64748b',
    // ...
  }
}
```

### Contenu
- **Textes** : Modifiez les traductions dans chaque page
- **Images** : Remplacez les images dans `/public/images/`
- **Logo** : Modifiez le logo dans `components/Header.tsx`

### Composants
Tous les composants sont dans `/components/` et sont réutilisables :
- `Header.tsx` - Navigation principale
- `Footer.tsx` - Pied de page
- `Button.tsx` - Boutons personnalisés
- `Card.tsx` - Cartes de contenu
- `AIChatbot.tsx` - Chatbot intelligent

## 📱 Responsive Design

Le site est optimisé pour :
- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

### Breakpoints Tailwind
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🔍 SEO

### Optimisations Incluses
- Meta tags dynamiques
- Sitemap automatique
- Schema.org markup
- Open Graph tags
- Twitter Cards
- Images optimisées
- URLs propres

### Configuration
Modifiez les métadonnées dans `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: 'Agence AI - Solutions d\'Automation IA',
  description: 'Transformez votre entreprise avec nos solutions d\'automation IA...',
  // ...
}
```

## 🌐 Internationalisation

### Langues Supportées
- Français (par défaut)
- Anglais

### Ajouter une Langue
1. Ajoutez la langue dans `next.config.js`
2. Créez les traductions dans chaque page
3. Configurez le routage dans `middleware.ts`

## 🤖 Chatbot IA

### Configuration
Le chatbot est configuré dans `components/AIChatbot.tsx` :

```typescript
// Personnalisez les réponses
const generateBotResponse = (userMessage: string): string => {
  // Logique de réponse personnalisée
}
```

### Intégration API
Pour connecter une vraie API IA :

```typescript
const response = await fetch('/api/chatbot', {
  method: 'POST',
  body: JSON.stringify({ message: userMessage })
});
```

## 📊 Analytics

### Google Analytics
Ajoutez votre ID dans `.env.local` :

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Autres Outils
- **Hotjar** - Heatmaps et enregistrements
- **Mixpanel** - Analytics avancés
- **PostHog** - Analytics open source

## 🔒 Sécurité

### Mesures Implémentées
- Headers de sécurité
- Validation des formulaires
- Protection CSRF
- Sanitisation des données
- HTTPS obligatoire

### Headers de Sécurité
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ];
}
```

## 🧪 Tests

### Tests Unitaires
```bash
npm run test
```

### Tests E2E
```bash
npm run test:e2e
```

### Tests de Performance
```bash
npm run lighthouse
```

## 📈 Performance

### Optimisations
- Images WebP/AVIF
- Lazy loading
- Code splitting
- Tree shaking
- Compression gzip
- CDN intégré

### Métriques
- **LCP** : < 2.5s
- **FID** : < 100ms
- **CLS** : < 0.1
- **Score Lighthouse** : 90+

## 🐛 Débogage

### Mode Développement
```bash
npm run dev
```

### Logs
```bash
npm run build
npm run start
```

### Outils
- React Developer Tools
- Next.js DevTools
- Chrome DevTools
- Lighthouse

## 📝 Changelog

### Version 1.0.0
- ✅ Site web complet avec 6 pages
- ✅ Design responsive et moderne
- ✅ Système bilingue FR/EN
- ✅ Chatbot IA intégré
- ✅ Optimisations SEO
- ✅ Performance optimisée

## 🤝 Contribution

### Workflow
1. Fork le repository
2. Créez une branche feature
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

### Standards
- Code TypeScript strict
- Tests unitaires requis
- Documentation mise à jour
- Commits conventionnels

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

### Contact
- **Email** : contact@agence-ai.fr
- **Téléphone** : +33 1 23 45 67 89
- **Site** : https://agence-ai.fr

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🎯 Roadmap

### Version 1.1
- [ ] Blog intégré
- [ ] Système de réservation
- [ ] Intégration CRM
- [ ] Analytics avancés

### Version 1.2
- [ ] PWA complète
- [ ] Mode hors ligne
- [ ] Notifications push
- [ ] API REST

---

**Développé avec ❤️ par l'équipe Agence AI**
#   a i - a g e n c y - w e b s i t e  
 