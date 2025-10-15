# Démonstration - Site Web Agence AI

Ce guide vous montre comment utiliser et personnaliser le site web Agence AI.

## 🚀 Démarrage Rapide

### 1. Installation
```bash
# Cloner le projet
git clone https://github.com/votre-username/agence-ai-website.git
cd agence-ai-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### 2. Accès au Site
Ouvrez votre navigateur sur `http://localhost:3000`

## 📱 Navigation du Site

### Page d'Accueil (`/`)
- **Section Héro** : Titre principal et CTA
- **Statistiques** : Chiffres clés de l'agence
- **Services** : 4 services principaux avec icônes
- **Processus** : 4 étapes de travail
- **Témoignages** : 3 témoignages clients
- **CTA Final** : Appel à l'action

### Page À Propos (`/about`)
- **Mission** : Valeurs et objectifs
- **Équipe** : 6 membres avec photos et réseaux sociaux
- **Chiffres** : Statistiques de l'agence
- **Histoire** : Timeline des étapes importantes

### Page Services (`/services`)
- **Onglets** : 4 catégories de services
- **Détails** : Fonctionnalités et bénéfices
- **Processus** : Étapes de réalisation
- **Tarifs** : 3 plans avec comparaison

### Page Portfolio (`/portfolio`)
- **Filtres** : Par catégorie et recherche
- **Projets** : 6 projets détaillés
- **Résultats** : Métriques de succès
- **Technologies** : Stack technique utilisée

### Page Contact (`/contact`)
- **Méthodes** : 4 façons de nous contacter
- **Formulaire** : Saisie complète avec validation
- **Informations** : Adresse, téléphone, email
- **FAQ** : Questions fréquentes
- **Chatbot** : Assistant IA intégré

### Page Tarifs (`/pricing`)
- **Plans** : 3 offres avec comparaison
- **Calculateur** : Estimation personnalisée
- **Fonctionnalités** : Tableau comparatif
- **FAQ** : Questions sur les tarifs

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Bleu principal
    600: '#0284c7', // Bleu foncé
  },
  secondary: {
    500: '#64748b', // Gris secondaire
  },
  accent: {
    500: '#eab308', // Jaune accent
  }
}
```

### Contenu
#### Textes
Modifiez les traductions dans chaque page :

```typescript
// Exemple dans app/page.tsx
const translations = {
  fr: {
    hero: {
      title: 'Votre nouveau titre',
      subtitle: 'Votre nouveau sous-titre',
    }
  }
}
```

#### Images
Remplacez les images dans `/public/images/` :
- `hero-bg.jpg` - Image de fond héro
- `projects/` - Images des projets
- `team/` - Photos de l'équipe

#### Logo
Modifiez le logo dans `components/Header.tsx` :

```tsx
<Link href="/" className="flex items-center space-x-2">
  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-xl">AI</span>
  </div>
  <span className="text-xl font-bold text-gray-900">
    Votre Nom d'Agence
  </span>
</Link>
```

### Informations de Contact
Modifiez dans `components/Footer.tsx` et `app/contact/page.tsx` :

```typescript
const contactInfo = {
  address: 'Votre adresse',
  phone: 'Votre téléphone',
  email: 'votre@email.com',
  hours: 'Vos horaires'
}
```

## 🤖 Chatbot IA

### Configuration
Le chatbot est configuré dans `components/AIChatbot.tsx` :

```typescript
// Personnalisez les réponses
const generateBotResponse = (userMessage: string): string => {
  const responses = [
    'Votre réponse personnalisée 1',
    'Votre réponse personnalisée 2',
    // ...
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};
```

### Intégration API
Pour connecter une vraie API IA :

```typescript
const handleSendMessage = async () => {
  const response = await fetch('/api/chatbot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: inputValue })
  });
  const data = await response.json();
  // Traiter la réponse
};
```

## 📊 Analytics

### Google Analytics
Ajoutez votre ID dans `.env.local` :

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Événements Personnalisés
```typescript
// Exemple de tracking d'événement
const trackEvent = (action: string, category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
    });
  }
};

// Utilisation
trackEvent('click', 'cta_button');
```

## 🌐 Internationalisation

### Ajouter une Langue
1. Ajoutez la langue dans `next.config.js` :

```javascript
i18n: {
  locales: ['fr', 'en', 'es'], // Ajoutez 'es'
  defaultLocale: 'fr',
}
```

2. Créez les traductions dans chaque page :

```typescript
const translations = {
  fr: { /* traductions françaises */ },
  en: { /* traductions anglaises */ },
  es: { /* traductions espagnoles */ },
}
```

## 📱 Responsive Design

### Breakpoints
Le site utilise les breakpoints Tailwind :
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

### Test Mobile
```bash
# Ouvrir les outils de développement
F12 > Toggle device toolbar
# Ou utiliser Chrome DevTools
```

## 🔍 SEO

### Meta Tags
Modifiez dans `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: 'Votre Titre SEO',
  description: 'Votre description SEO',
  keywords: ['mot-clé1', 'mot-clé2'],
}
```

### Sitemap
Le sitemap est généré automatiquement via `next.config.js`.

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub
2. Vercel détecte automatiquement Next.js
3. Configurez les variables d'environnement
4. Déployez !

### Autres Plateformes
Voir `DEPLOYMENT.md` pour les instructions détaillées.

## 🧪 Tests

### Tests Unitaires
```bash
npm run test
```

### Tests E2E
```bash
npm run test:e2e
```

### Build de Production
```bash
npm run build
npm run start
```

## 📈 Performance

### Optimisations Incluses
- Images WebP/AVIF
- Lazy loading
- Code splitting
- Compression gzip
- CDN intégré

### Métriques
- **Lighthouse Score** : 90+
- **Core Web Vitals** : Optimisés
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s

## 🛠️ Développement

### Structure des Composants
```
components/
├── Header.tsx          # Navigation principale
├── Footer.tsx          # Pied de page
├── Button.tsx          # Boutons réutilisables
├── Card.tsx            # Cartes de contenu
├── Input.tsx           # Champs de saisie
├── AIChatbot.tsx       # Chatbot IA
└── ...
```

### Ajouter un Nouveau Composant
```typescript
// components/NewComponent.tsx
interface NewComponentProps {
  title: string;
  children: React.ReactNode;
}

const NewComponent: React.FC<NewComponentProps> = ({ title, children }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default NewComponent;
```

### Ajouter une Nouvelle Page
```typescript
// app/nouvelle-page/page.tsx
export default function NouvellePage() {
  return (
    <div>
      <h1>Nouvelle Page</h1>
      {/* Contenu de la page */}
    </div>
  );
}
```

## 🔧 Configuration Avancée

### Variables d'Environnement
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_SITE_NAME="Votre Agence"
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre@email.com
SMTP_PASS=votre-mot-de-passe
```

### Configuration Next.js
```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  // Autres configurations...
};
```

## 📞 Support

### Ressources
- **Documentation** : [README.md](./README.md)
- **Déploiement** : [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Contribution** : [CONTRIBUTING.md](./CONTRIBUTING.md)

### Contact
- **Email** : dev@agence-ai.fr
- **GitHub** : [Issues](https://github.com/agence-ai/agence-ai-website/issues)

---

**Bon développement ! 🚀**
