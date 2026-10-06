const fs = require('fs');
const path = require('path');

const buildingsDir = path.join(__dirname, '../data/buildings');
const outputFile = path.join(__dirname, '../data/index.json');

const files = fs.readdirSync(buildingsDir).filter(f => f.endsWith('.json'));

const features = files.map(file => {
  const content = fs.readFileSync(path.join(buildingsDir, file), 'utf8');
  return JSON.parse(content);
});

const featureCollection = {
  type: 'FeatureCollection',
  features: features
};

fs.writeFileSync(outputFile, JSON.stringify(featureCollection, null, 2), 'utf8');
console.log(`Successfully generated index.json with ${features.length} features.`);
