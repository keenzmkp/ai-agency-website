# Guide de Contribution - Agence AI

Merci de votre intérêt à contribuer au projet Agence AI ! Ce guide vous explique comment contribuer efficacement.

## 🤝 Comment Contribuer

### 1. Fork et Clone
```bash
# Fork le repository sur GitHub
# Puis clonez votre fork
git clone https://github.com/votre-username/agence-ai-website.git
cd agence-ai-website

# Ajoutez le repository original comme remote
git remote add upstream https://github.com/agence-ai/agence-ai-website.git
```

### 2. Configuration de l'Environnement
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Vérifier que tout fonctionne
npm run build
npm run test
```

### 3. Créer une Branche
```bash
# Créer une nouvelle branche pour votre feature
git checkout -b feature/nom-de-votre-feature

# Ou pour un bugfix
git checkout -b fix/description-du-bug
```

## 📝 Standards de Code

### TypeScript
- Utilisez TypeScript strict
- Définissez des types explicites
- Évitez `any` autant que possible
- Documentez les interfaces complexes

```typescript
// ✅ Bon
interface User {
  id: string;
  name: string;
  email: string;
}

// ❌ Éviter
const user: any = { ... };
```

### React
- Utilisez des composants fonctionnels
- Préférez les hooks aux classes
- Nommez les composants en PascalCase
- Utilisez des props typées

```typescript
// ✅ Bon
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### CSS / Tailwind
- Utilisez les classes Tailwind
- Créez des composants réutilisables
- Respectez la hiérarchie des couleurs
- Utilisez les variables CSS personnalisées

```tsx
// ✅ Bon
<div className="bg-primary-500 text-white p-4 rounded-lg hover:bg-primary-600 transition-colors duration-200">

// ❌ Éviter
<div style={{ backgroundColor: '#0ea5e9', color: 'white' }}>
```

## 🧪 Tests

### Tests Unitaires
```bash
# Lancer les tests
npm run test

# Tests en mode watch
npm run test:watch

# Couverture de code
npm run test:coverage
```

### Tests E2E
```bash
# Lancer les tests E2E
npm run test:e2e

# Tests E2E en mode UI
npm run test:e2e:ui
```

### Écrire des Tests
```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📚 Documentation

### JSDoc
Documentez vos fonctions et composants :

```typescript
/**
 * Calcule le prix total avec la TVA
 * @param price - Prix HT
 * @param vatRate - Taux de TVA (par défaut 20%)
 * @returns Prix TTC
 */
const calculateTotalPrice = (price: number, vatRate: number = 0.2): number => {
  return price * (1 + vatRate);
};
```

### README
- Mettez à jour le README si nécessaire
- Documentez les nouvelles fonctionnalités
- Ajoutez des exemples d'utilisation

### Commentaires
```typescript
// ✅ Bon - Explique le pourquoi
// Utiliser useCallback pour éviter les re-renders inutiles
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);

// ❌ Éviter - Redondant
// Incrémenter i de 1
i++;
```

## 🎨 Design System

### Couleurs
Utilisez les couleurs définies dans `tailwind.config.js` :

```typescript
// Couleurs primaires
bg-primary-500
text-primary-600
border-primary-400

// Couleurs secondaires
bg-secondary-100
text-secondary-700
```

### Typographie
```typescript
// Titres
text-4xl font-bold text-gray-900

// Sous-titres
text-xl text-gray-600

// Corps de texte
text-base text-gray-700
```

### Espacement
```typescript
// Padding
p-4 p-6 p-8

// Margin
mb-4 mb-6 mb-8

// Gap
gap-4 gap-6 gap-8
```

## 🔄 Workflow Git

### Commits
Utilisez des messages de commit conventionnels :

```bash
# Format
type(scope): description

# Types
feat: nouvelle fonctionnalité
fix: correction de bug
docs: documentation
style: formatage
refactor: refactoring
test: tests
chore: tâches de maintenance

# Exemples
feat(header): ajouter menu mobile
fix(contact): corriger validation email
docs(readme): mettre à jour installation
```

### Branches
```bash
# Naming convention
feature/nom-descriptif
fix/description-du-bug
docs/description
refactor/description

# Exemples
feature/ai-chatbot
fix/contact-form-validation
docs/deployment-guide
```

### Pull Request
1. **Titre clair** : Décrivez brièvement les changements
2. **Description détaillée** : Expliquez le contexte et les changements
3. **Tests** : Vérifiez que tous les tests passent
4. **Screenshots** : Ajoutez des captures d'écran si UI
5. **Checklist** : Cochez les éléments pertinents

```markdown
## Description
Ajoute un chatbot IA sur la page d'accueil pour améliorer l'engagement utilisateur.

## Changements
- Nouveau composant AIChatbot
- Intégration dans la page d'accueil
- Configuration des réponses automatiques

## Tests
- [x] Tests unitaires passent
- [x] Tests E2E passent
- [x] Build réussit

## Screenshots
[Capture d'écran du chatbot]
```

## 🐛 Signaler un Bug

### Template de Bug Report
```markdown
## Description
Description claire du problème.

## Étapes pour Reproduire
1. Aller sur '...'
2. Cliquer sur '...'
3. Voir l'erreur

## Comportement Attendu
Ce qui devrait se passer.

## Comportement Actuel
Ce qui se passe réellement.

## Environnement
- OS: [ex: Windows 10]
- Navigateur: [ex: Chrome 91]
- Version: [ex: 1.0.0]

## Screenshots
[Si applicable]

## Logs
[Logs d'erreur si disponibles]
```

## ✨ Proposer une Feature

### Template de Feature Request
```markdown
## Description
Description claire de la fonctionnalité souhaitée.

## Problème
Quel problème cette feature résout-elle ?

## Solution Proposée
Description détaillée de la solution.

## Alternatives
Autres solutions considérées.

## Contexte Additionnel
Tout autre contexte pertinent.
```

## 🏗️ Architecture

### Structure des Dossiers
```
src/
├── app/                 # Pages Next.js
├── components/          # Composants réutilisables
├── lib/                # Utilitaires et configurations
├── styles/             # Styles globaux
├── types/              # Types TypeScript
└── utils/              # Fonctions utilitaires
```

### Composants
- Un composant par fichier
- Nom du fichier en PascalCase
- Props typées avec TypeScript
- Export par défaut

### Pages
- Utilisez l'App Router de Next.js
- Un fichier `page.tsx` par route
- Layouts partagés dans `layout.tsx`

## 🔍 Code Review

### Checklist pour les Reviewers
- [ ] Code respecte les standards
- [ ] Tests passent
- [ ] Documentation mise à jour
- [ ] Performance acceptable
- [ ] Accessibilité respectée
- [ ] Sécurité vérifiée

### Checklist pour les Auteurs
- [ ] Code testé localement
- [ ] Tests écrits/modifiés
- [ ] Documentation mise à jour
- [ ] Pas de console.log oubliés
- [ ] Types TypeScript corrects
- [ ] Responsive design vérifié

## 📋 Checklist de Contribution

### Avant de Soumettre
- [ ] Code formaté avec Prettier
- [ ] Linting sans erreurs
- [ ] Tests unitaires passent
- [ ] Tests E2E passent
- [ ] Build réussit
- [ ] Documentation mise à jour
- [ ] Commit messages conventionnels

### Pull Request
- [ ] Titre descriptif
- [ ] Description détaillée
- [ ] Screenshots si UI
- [ ] Tests ajoutés/modifiés
- [ ] Documentation mise à jour
- [ ] Checklist cochée

## 🎯 Types de Contributions

### 🐛 Bug Fixes
- Corrections de bugs existants
- Améliorations de performance
- Corrections de sécurité

### ✨ Nouvelles Fonctionnalités
- Composants UI
- Pages supplémentaires
- Intégrations API
- Améliorations UX

### 📚 Documentation
- Guides d'utilisation
- Documentation technique
- Exemples de code
- Traductions

### 🧪 Tests
- Tests unitaires
- Tests d'intégration
- Tests E2E
- Tests de performance

### 🎨 Design
- Améliorations UI/UX
- Nouveaux composants
- Responsive design
- Accessibilité

## 🚀 Processus de Release

### Versioning
Nous utilisons le [Semantic Versioning](https://semver.org/) :
- **MAJOR** : Changements incompatibles
- **MINOR** : Nouvelles fonctionnalités compatibles
- **PATCH** : Corrections de bugs

### Changelog
Tous les changements sont documentés dans `CHANGELOG.md` :
```markdown
## [1.1.0] - 2024-01-15
### Added
- Nouveau chatbot IA
- Page de tarifs interactive

### Changed
- Amélioration des performances
- Mise à jour des dépendances

### Fixed
- Correction du formulaire de contact
- Bug d'affichage mobile
```

## 📞 Support

### Questions
- **GitHub Discussions** : Pour les questions générales
- **Issues** : Pour les bugs et features
- **Email** : dev@agence-ai.fr

### Ressources
- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

**Merci de contribuer à Agence AI ! 🚀**
