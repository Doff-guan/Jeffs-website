const fs = require('fs');
const html = fs.readFileSync('temp.html', 'utf8');
const js = fs.readFileSync('index.js', 'utf8');

console.log('--- JSON in HTML ---');
const m1 = html.match(/[\w\.\/\-]+\.json/g);
console.log(m1);

console.log('--- lottie in JS ---');
const m2 = js.split('\n').filter(l => l.toLowerCase().includes('lottie'));
console.log(m2.map(l => l.trim()));
