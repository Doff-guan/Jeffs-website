const https = require('https');
const fs = require('fs');
const zlib = require('zlib');

function download(url, filename) {
  https.get(url, (res) => {
    let output;
    const encoding = res.headers['content-encoding'];
    if (encoding === 'br') {
      output = res.pipe(zlib.createBrotliDecompress());
    } else if (encoding === 'gzip') {
      output = res.pipe(zlib.createGunzip());
    } else {
      output = res;
    }
    
    const file = fs.createWriteStream(filename);
    output.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${url}: ${err.message}`);
  });
}

download('https://huyml.co/Images/Animate/1.json', '1.json');
download('https://huyml.co/Images/Animate/2.json', '2.json');
download('https://huyml.co/Images/Animate/3.json', '3.json');