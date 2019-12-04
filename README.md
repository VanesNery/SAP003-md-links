# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Como Funciona](#2-como-funciona)
* [3. Como Utilizar](#3-como-utilizar)
* [4. CheckList](#4-CheckList)

***

## 1. Prefácio

Um dos projetos proposto pela Laboratoria, Biblioteca que lê e analisa arquivos no formato Markdown (.md), apresentar em tela, texto referente ao link e o Hiperlink.

***

## 2. Como Funciona

Esta biblioteca pode ser executado através do terminal da seguinte maneira:

Global:
md-links [endereço aonde está o seu arquivo]
```sh
$ md-links ./some/example.md
```
Local:
```sh
$ npx md-links ./some/example.md
```

**Como usar (Node.js)**

```js 
const mdLinks = require('sap003-md-links');

mdLinks("./README.md").then(links) => { console.log("links retornados");
console.log(links);
});
```

**Valor de retorno**
Retorna promessa com uma matriz de objetos, em que cada objeto representa um link e contém as seguintes propriedades:

**href**: URL encontrado.

**texto**: texto que apareceu dentro do link.
***

## 3. Como Utilizar

* Para usar esta biblioteca como requisito, você deve ter instalado os NodeJs e o NPM em seu computador.

* Então você deve executar o seguinte comando no terminal, para instalar global:

```sh 
npm install -g https://github.com/VanesNery/SAP003-md-links
``` 
ou para instalar local:
```sh 
npm install -S https://github.com/VanesNery/SAP003-md-links
```
***

## 4. Checklist

### API `mdLinks(path)`

* [X] O módulo exporta uma função com a interface (API) esperada
* [X] Implementa suporte para arquivo individual

### CLI

* [X] Possuir o executável `md-links` no path (configurado no `package.json`)
* [X] Executar sem erros e ter o resultado esperado

### Testes

* [X] Os testes unitários devem cobrir no mínimo 99,9% dos statements, functions,
  lines e branches.
* [X] Rodar os tests e linter (`npm test`).
***

**Feito por Vanessa Nery**
