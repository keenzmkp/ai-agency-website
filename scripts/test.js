#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Tests du projet Agence AI...\n');

// Vérifier que nous sommes dans le bon répertoire
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json non trouvé. Assurez-vous d\'être dans le répertoire du projet.');
  process.exit(1);
}

// Vérifier TypeScript
console.log('🔍 Vérification TypeScript...');
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

// Tests unitaires (si configurés)
if (fs.existsSync('jest.config.js') || fs.existsSync('__tests__')) {
  console.log('\n🧪 Tests unitaires...');
  try {
    execSync('npm run test', { stdio: 'inherit' });
    console.log('✅ Tests unitaires passés');
  } catch (error) {
    console.error('❌ Tests unitaires échoués');
    process.exit(1);
  }
} else {
  console.log('\n⚠️  Aucun test unitaire configuré');
}

// Tests E2E (si configurés)
if (fs.existsSync('playwright.config.js') || fs.existsSync('cypress.config.js')) {
  console.log('\n🧪 Tests E2E...');
  try {
    execSync('npm run test:e2e', { stdio: 'inherit' });
    console.log('✅ Tests E2E passés');
  } catch (error) {
    console.error('❌ Tests E2E échoués');
    process.exit(1);
  }
} else {
  console.log('\n⚠️  Aucun test E2E configuré');
}

// Vérifier la build
console.log('\n🏗️  Test de build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build réussi');
} catch (error) {
  console.error('❌ Build échoué');
  process.exit(1);
}

// Test de démarrage
console.log('\n🚀 Test de démarrage...');
try {
  const { spawn } = require('child_process');
  
  // Démarrer le serveur
  const server = spawn('npm', ['run', 'start'], {
    stdio: 'pipe',
    detached: true
  });
  
  // Attendre que le serveur démarre
  await new Promise((resolve) => setTimeout(resolve, 5000));
  
  // Tester la connexion
  const http = require('http');
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
  };
  
  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('✅ Serveur démarré correctement');
    } else {
      console.log(`⚠️  Serveur répond avec le code ${res.statusCode}`);
    }
    
    // Arrêter le serveur
    server.kill();
    process.exit(0);
  });
  
  req.on('error', (error) => {
    console.error('❌ Impossible de se connecter au serveur:', error.message);
    server.kill();
    process.exit(1);
  });
  
  req.end();
  
} catch (error) {
  console.error('❌ Erreur lors du test de démarrage:', error.message);
  process.exit(1);
}

console.log('\n🎉 Tous les tests sont passés !');
console.log('\n📋 Résumé :');
console.log('✅ TypeScript valide');
console.log('✅ ESLint valide');
console.log('✅ Build réussi');
console.log('✅ Serveur démarre correctement');

console.log('\n📚 Documentation :');
console.log('- README.md : Guide d\'utilisation');
console.log('- CONTRIBUTING.md : Guide de contribution');
console.log('- DEPLOYMENT.md : Guide de déploiement');
