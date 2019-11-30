#! /usr/bin/env node
const mdLinks = require('./lib/index.js');

mdLinks('./README.md')
  .then((result) => result.forEach(e => {
    if (e.text.length < 47){
      console.log(e.href,"-",e.text.substring(0,50))
    }else{
      console.log(e.href,"-",e.text.substring(0,47) +'...')
    }
  }))
  .catch((error) => console.log(error))