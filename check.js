const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const script = fs.readFileSync('script.js', 'utf8');
const translationsMatch = script.match(/const translations = (\{[\s\S]+?\n    \}\n\};)/);
let translations = {};
try {
  const sandbox = {};
  require('vm').runInNewContext('translations = ' + translationsMatch[1], sandbox);
  translations = sandbox.translations;
} catch (e) {
  console.log('Error parsing translations:', e.message);
  process.exit(1);
}

const enKeys = Object.keys(translations.en);
const frKeys = Object.keys(translations.fr);
const keysInHtml = new Set();

htmlFiles.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const matches = html.matchAll(/data-i18n=['"]([^'"]+)['"]/g);
  for (const match of matches) {
    keysInHtml.add(match[1]);
  }
});

const missingInEn = [...keysInHtml].filter(k => !enKeys.includes(k));
console.log('Missing in EN:', missingInEn);

const missingInFr = [...keysInHtml].filter(k => !frKeys.includes(k));
console.log('Missing in FR:', missingInFr);

const redundantEn = enKeys.filter(k => !keysInHtml.has(k) && !k.startsWith('footer-area-') && !k.startsWith('sah-') && !k.startsWith('che-') && !k.startsWith('tng-') && !k.startsWith("rba-") && !k.startsWith("ess-") && !k.startsWith("aga-"));
console.log('Possibly unused in EN:', redundantEn.slice(0, 5), `... (${redundantEn.length} total)`);
