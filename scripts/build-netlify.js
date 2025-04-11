// Build script for Netlify deployment
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Enable Netlify environment variable
process.env.NETLIFY = 'true';

// Build the site
console.log('Building site for Netlify...');
execSync('npx eleventy', { stdio: 'inherit' });

// Verify the CSS file exists
const cssFile = path.join('_site', 'assets', 'css', 'styles.css');
if (fs.existsSync(cssFile)) {
  console.log('✅ CSS file exists at:', cssFile);
} else {
  console.error('❌ CSS file NOT found at:', cssFile);
  
  // Check if the assets directory exists
  const assetsDir = path.join('_site', 'assets');
  if (fs.existsSync(assetsDir)) {
    console.log('Assets directory exists, listing contents:');
    execSync(`ls -la ${assetsDir}`, { stdio: 'inherit' });
    
    // Check if css directory exists
    const cssDir = path.join(assetsDir, 'css');
    if (fs.existsSync(cssDir)) {
      console.log('CSS directory exists, listing contents:');
      execSync(`ls -la ${cssDir}`, { stdio: 'inherit' });
    } else {
      console.log('CSS directory does not exist');
    }
  } else {
    console.log('Assets directory does not exist');
  }
}

// Log completion
console.log('Build for Netlify completed!'); 