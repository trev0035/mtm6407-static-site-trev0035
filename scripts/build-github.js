// Build script for GitHub Pages deployment
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the site with the path prefix
console.log('Building site with GitHub Pages path prefix...');
execSync('npm run build:github', { stdio: 'inherit' });

// Ensure .nojekyll exists in the output directory
const nojekyllPath = path.join('_site', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(nojekyllPath, '');
}

// Log completion
console.log('Build for GitHub Pages completed successfully!'); 