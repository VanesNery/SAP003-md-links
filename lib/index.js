const fs = require('fs');

const mdLinks = (path) => {
  const regex = /([^\[]+)\](\([^\)]*)/g;
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const combined = data.match(regex);
        const result = combined.map((e) => {
          const split = e.split('](');
          const text = split[0].replace(/\n /, '');
          const href = split[1];
          return { text, href }
        });
        resolve(result);
      }
    });
  })
}

module.exports = mdLinks;
