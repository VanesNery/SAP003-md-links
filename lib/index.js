const fs = require("fs");

const mdLinks = (path) => {
  const regex = /([^[]+)\](\([^)]*)/g;
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject("Arquivo invalido", err);
      } else {
        const combined = data.match(regex);
        if (combined == null) {
          reject("Links não encontrado");
        } else {
          const result = combined.map((e) => {
            const split = e.split("](");
            const text = split[0].replace(/\n /, "");
            const href = split[1];
            return { text, href };
          });
          resolve(result);
        }
      }
    });
  });
};

module.exports = mdLinks;
