const fs = require('fs');

const mdLinks = () => {
  const links = /([^\[]+)\](\([^\)]*)/g;
  return new Promise((resolve, reject) => {
    fs.readFile('README.md', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const combined = data.match(links);
        const result = combined.map((e) => {
          const split = e.split('](');
          const text = split[0].replace(/\n /, '');
          const href = split[1];

          return { text, href }
        });
        resolve(result)
      }
    });
  })
}

module.exports = mdLinks;
