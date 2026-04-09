const https = require('https');
const fs = require('fs');

https.get('https://huyml.co/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('temp.html', data);
    console.log('Saved to temp.html');
  });
}).on('error', (err) => console.log('Error:', err.message));