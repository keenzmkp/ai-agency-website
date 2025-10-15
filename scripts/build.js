#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️  Build du projet Agence AI...\n');

// Vérifier que nous sommes dans le bon répertoire
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json non trouvé. Assurez-vous d\'être dans le répertoire du projet.');
  process.exit(1);
}

// Nettoyer le cache Next.js
console.log('🧹 Nettoyage du cache...');
try {
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }
  console.log('✅ Cache nettoyé');
} catch (error) {
  console.warn('⚠️  Impossible de nettoyer le cache:', error.message);
}

// Vérifier TypeScript
console.log('\n🔍 Vérification TypeScript...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript valide');
} catch (error) {
  console.error('❌ Erreurs TypeScript détectées');
  process.exit(1);
}

// Vérifier ESLint
console.log('\n🔍 Vérification ESLint...');
try {
  execSync('npx eslint . --ext .ts,.tsx --max-warnings 0', { stdio: 'inherit' });
  console.log('✅ ESLint valide');
} catch (error) {
  console.warn('⚠️  Avertissements ESLint détectés');
}

// Build Next.js
console.log('\n🏗️  Build Next.js...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build réussi');
} catch (error) {
  console.error('❌ Erreur lors du build:', error.message);
  process.exit(1);
}

// Vérifier la taille du build
console.log('\n📊 Analyse de la taille...');
try {
  const buildDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(buildDir)) {
    const stats = fs.statSync(buildDir);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📁 Taille du build: ${sizeInMB} MB`);
  }
} catch (error) {
  console.warn('⚠️  Impossible d\'analyser la taille du build');
}

// Vérifier les fichiers de sortie
console.log('\n🔍 Vérification des fichiers de sortie...');
const requiredFiles = [
  '.next/static',
  '.next/server',
  '.next/standalone'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} créé`);
  } else {
    console.log(`⚠️  ${file} manquant`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('\n🎉 Build terminé avec succès !');
  console.log('\n📋 Fichiers générés :');
  console.log('- .next/ : Dossier de build Next.js');
  console.log('- .next/static/ : Assets statiques');
  console.log('- .next/server/ : Code serveur');
  console.log('- .next/standalone/ : Build standalone (si configuré)');
  
  console.log('\n🚀 Prochaines étapes :');
  console.log('1. Testez le build : npm run start');
  console.log('2. Déployez sur votre plateforme');
  console.log('3. Vérifiez les performances en production');
} else {
  console.log('\n⚠️  Build terminé avec des avertissements');
}

console.log('\n📚 Documentation :');
console.log('- DEPLOYMENT.md : Guide de déploiement');
console.log('- README.md : Guide d\'utilisation');
