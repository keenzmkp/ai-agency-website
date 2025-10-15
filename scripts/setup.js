#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Configuration du projet Agence AI...\n');

// Vérifier Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js 18+ est requis. Version actuelle:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version:', nodeVersion);

// Créer le fichier .env.local s'il n'existe pas
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  const envContent = `# Configuration de base
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Agence AI"

# Google Analytics (optionnel)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=

# Google Maps (optionnel)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Email SMTP (optionnel)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Base de données (optionnel)
DATABASE_URL=
`;
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Fichier .env.local créé');
}

// Installer les dépendances
console.log('\n📦 Installation des dépendances...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dépendances installées');
} catch (error) {
  console.error('❌ Erreur lors de l\'installation des dépendances:', error.message);
  process.exit(1);
}

// Vérifier la configuration TypeScript
console.log('\n🔍 Vérification de la configuration TypeScript...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ Configuration TypeScript valide');
} catch (error) {
  console.warn('⚠️  Avertissements TypeScript détectés');
}

// Vérifier ESLint
console.log('\n🔍 Vérification ESLint...');
try {
  execSync('npx eslint . --ext .ts,.tsx --max-warnings 0', { stdio: 'inherit' });
  console.log('✅ Code conforme aux règles ESLint');
} catch (error) {
  console.warn('⚠️  Avertissements ESLint détectés');
}

// Créer le dossier images s'il n'existe pas
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('✅ Dossier images créé');
}

// Créer le dossier projects dans images
const projectsDir = path.join(imagesDir, 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
  console.log('✅ Dossier projects créé');
}

console.log('\n🎉 Configuration terminée !');
console.log('\n📋 Prochaines étapes :');
console.log('1. Modifiez le fichier .env.local avec vos informations');
console.log('2. Lancez le serveur de développement : npm run dev');
console.log('3. Ouvrez http://localhost:3000 dans votre navigateur');
console.log('\n📚 Documentation :');
console.log('- README.md : Guide d\'installation et utilisation');
console.log('- DEPLOYMENT.md : Guide de déploiement');
console.log('- CONTRIBUTING.md : Guide de contribution');
console.log('- DEMO.md : Démonstration du site');
console.log('\n🚀 Bon développement !');
