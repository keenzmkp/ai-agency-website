# Guide de Déploiement - Agence AI

Ce guide vous accompagne dans le déploiement du site web Agence AI sur différentes plateformes.

## 🚀 Déploiement Rapide (Vercel)

### 1. Préparation
```bash
# Cloner le repository
git clone https://github.com/votre-username/agence-ai-website.git
cd agence-ai-website

# Installer les dépendances
npm install

# Tester en local
npm run dev
```

### 2. Déploiement Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Cliquez sur "New Project"
4. Importez le repository `agence-ai-website`
5. Vercel détecte automatiquement Next.js
6. Cliquez sur "Deploy"

### 3. Configuration
```bash
# Variables d'environnement dans Vercel Dashboard
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
NEXT_PUBLIC_SITE_NAME="Agence AI"
```

### 4. Domaine Personnalisé
1. Allez dans "Settings" > "Domains"
2. Ajoutez votre domaine
3. Configurez les DNS :
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 🌐 Déploiement Netlify

### 1. Build Settings
```yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Déploiement
```bash
# Build local
npm run build
npm run export

# Déployer
npx netlify deploy --prod --dir=out
```

## ☁️ Déploiement AWS

### 1. AWS Amplify
```bash
# Configuration amplify.yml
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

### 2. AWS S3 + CloudFront
```bash
# Build
npm run build
npm run export

# Upload vers S3
aws s3 sync out/ s3://votre-bucket --delete

# Invalider CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🐳 Déploiement Docker

### 1. Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 2. Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
    volumes:
      - ./.next:/app/.next
```

### 3. Déploiement
```bash
# Build et run
docker build -t agence-ai .
docker run -p 3000:3000 agence-ai

# Avec Docker Compose
docker-compose up -d
```

## 🔧 Configuration Avancée

### 1. Variables d'Environnement
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://agence-ai.fr
NEXT_PUBLIC_SITE_NAME="Agence AI"
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_MAPS_API_KEY

# Email SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@agence-ai.fr
SMTP_PASS=your-app-password

# Base de données (optionnel)
DATABASE_URL=postgresql://username:password@localhost:5432/agence_ai
```

### 2. Configuration Next.js
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Pour Docker
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
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
  },
};

module.exports = nextConfig;
```

## 📊 Monitoring et Analytics

### 1. Google Analytics
```javascript
// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

### 2. Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### 3. Uptime Monitoring
- **UptimeRobot** - Monitoring gratuit
- **Pingdom** - Monitoring avancé
- **StatusCake** - Monitoring simple

## 🔒 Sécurité

### 1. Headers de Sécurité
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
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ];
}
```

### 2. HTTPS
```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  if (process.env.NODE_ENV === 'production') {
    if (request.headers.get('x-forwarded-proto') !== 'https') {
      return NextResponse.redirect(
        `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
        301
      );
    }
  }
  return NextResponse.next();
}
```

### 3. Rate Limiting
```javascript
// lib/rate-limit.js
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});
```

## 🚀 CI/CD

### 1. GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm run test
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### 2. GitLab CI
```yaml
# .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour

test:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm run test

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - apk add --no-cache curl
    - curl -X POST $VERCEL_DEPLOY_HOOK
  only:
    - main
```

## 📈 Performance

### 1. Optimisations Build
```javascript
// next.config.js
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
```

### 2. Bundle Analyzer
```bash
npm install @next/bundle-analyzer
```

```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

### 3. Lighthouse CI
```yaml
# .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'npm start',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
};
```

## 🔧 Dépannage

### Problèmes Courants

#### 1. Build Failed
```bash
# Nettoyer le cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

#### 2. Images ne se chargent pas
```javascript
// next.config.js
images: {
  domains: ['images.unsplash.com', 'via.placeholder.com'],
  formats: ['image/webp', 'image/avif'],
}
```

#### 3. Erreurs de TypeScript
```bash
# Vérifier les types
npm run type-check

# Ignorer les erreurs temporairement
// @ts-ignore
```

#### 4. Problèmes de Performance
```bash
# Analyser le bundle
npm run analyze

# Vérifier les métriques
npm run lighthouse
```

### Logs et Debugging

#### 1. Logs Vercel
```bash
vercel logs https://votre-projet.vercel.app
```

#### 2. Logs Docker
```bash
docker logs container-name
```

#### 3. Debug Next.js
```bash
DEBUG=* npm run dev
```

## 📞 Support

### Ressources
- [Documentation Next.js](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Contact
- **Email** : dev@agence-ai.fr
- **GitHub Issues** : [Créer une issue](https://github.com/votre-username/agence-ai-website/issues)

---

**Guide maintenu par l'équipe Agence AI** 🚀
