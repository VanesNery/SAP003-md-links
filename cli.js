#! /usr/bin/env node
const mdLinks = require('./lib/index.js');
const path = process.argv[2];
// const option = process.argv[3];

mdLinks(path)
  .then((result) => result.forEach(e => {
    if (e.text.length < 47){
      console.log(e.href,"-",e.text.substring(0,50))
    }else{
      console.log(e.href,"-",e.text.substring(0,47) +'...')
    }
  }))
  .catch(console.error);