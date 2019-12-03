# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)

***

## 1. Prefácio

É o projeto proposto pela Laboratoria, no qual o programa vai validar o caminho, apresentar em tela, texto referente ao link e o Hiperlink.

***

## 4. Considerações gerais

* Este projeto deve ser feito individualmente.

* A biblioteca e script executável (ferramenta de linha de comando - CLI) devem
  ser implementados em JavaScript para serem executadas com Node.JS. **É permitido
  usar bibliotecas externas**.

* O seu módulo deve ser instalável via `npm install <github-user>/md-links`. O
  módulo deve incluir um _executável_ que pode ser chamado tanto por linha de
  comando, quanto importado com `require` para ser usado em seu código.

* Os testes unitários devem cobrir no mínimo 99,9% dos _statements_, _functions_,
  _lines_ e _branches_. Recomendamos que explore o [Jest](https://jestjs.io/)
  para as suas provas unitárias.

* Neste projeto não é permitido utilizar `async/await`.

## 5. Critérios de aceitação mínimos do projeto

Para começar este projeto você deverá fazer um _fork_ e _clonar_ este
repositório.


### Arquivos do projeto

* `README.md` com descrição do módulo, instruções de instalação e uso,
  documentação da API e exemplos. Tudo que for relevante para qualquer
  desenvolvedora saber como utilizar a sua biblioteca sem inconvenientes.
* `package.json` deve possuir o nome, versão, descrição, autor, licença,
  dependências e scripts (eslint e test).
* `package-lock.json` arquivo gerado pelo npm, para controle dos pacotes
  instalados
* `.eslintrc` com a configuração para o linter. Este arquivo não deve ser
  alterado.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não deve ser
  incluídas no controle de versão (`git`).
* `cli.js` este arquivo deve chamar a função `mdLinks` que será executada pela
  linha de comando.
* `lib/index.js` criação e exportação da função `mdLinks`.
* `lib/__test__/index.spec.js` deve conter os testes unitários para a função
  `mdLinks`.

### JavaScript API

O módulo deve poder ser importado em outros scripts Node.js e deve oferecer a
seguinte interface:

#### `mdLinks(path)`

##### Argumento

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada é
  relativa, deve resolver como sendo relativa ao diretório onde foi chamada -
  _current working directory_

##### Valor de retorno

A função deve retornar uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.

#### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interface de Linha de Comando)

O executável da nossa aplicação deve poder ser executado da seguinte maneira,
através do terminal:

`md-links <path-to-file> [options]`

Por exemplo:

```sh
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```

O comportamento padrão não deve validar se as URLs responde ok ou não, somente
deve identificar o arquivo markdown (a partir da rota que recebeu como
argumento), analisar o arquivo Markdown e imprimir os links que vão sendo
encontrados, junto com a rota do arquivo onde aparece e o texto que tem dentro
do link (truncado 50 caracteres).


#### Hacker Edition

##### Argumentos

Adicionar o argumento `option`, dentro da função `mdLinks(path, option)`

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada é
  relativa, deve resolver como sendo relativa ao diretório onde foi chamada -
  _current working directory_
* `option`: Um objeto com a seguinte propriedade:
  - `validate`: Um booleano que determina se deseja validar os links
    encontrados.

##### Valor de retorno

Você deve adicionar o _status_ da requisição dentro do objeto da resposta de
cada url encontrada.

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.
* `status`: Status da requisição.

##### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("/some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, status }]
  })
  .catch(console.error);
```

##### CLI `--validate`

Se passamos a opção `--validate`, o módulo deve fazer uma requisição HTTP para
verificar se o link funciona ou não. Se o link resultar em um redirecionamento a
uma URL que responde ok, então consideraremos o link como ok.

Por exemplo:

```sh
$ md-links ./some/example.md --validate
http://algo.com/2/3/ 200 Link de algo
https://outra-coisa-.net/algum-doc.html 404 algum doc
http://google.com/ 301 Google
```

## 6. Entregáveis

O módulo deve ser instalável via `npm install <github-user>/md-links`. Este
módulo deve incluir um executável que pode ser chamado tanto por linha de
comando, quanto importado com `require` para usá-lo no seu código.

## 7. Guias, dicas e leituras complementares

### FAQs

#### Como faço para que o meu módulo seja instalável pelo GitHub?

Para que o módulo seja instalável pelo GitHub você tem que:

* Deixar o seu repo público
* Ter um `package.json` válido

Com o comando `npm install <githubname>/<reponame>` podemos instalar diretamente
pelo GitHub. Ver [docs oficiais dp `npm install`
aqui](https://docs.npmjs.com/cli/install)

Por exemplo, o
[`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser) que é
usado para o currículo não está publicado nos registros públicos do NPM, com
isso temos que instalar diretamente desde o GitHub com o commando `npm install
Laboratoria/curriculum-parser`.

### Sugestões de implementação

A implementação deste projeto tem várias partes: ler do sistema de arquivos,
receber argumento através da linha de comando, analisar um teste, fazer
consultas HTTP, ... e tudo isso pode ser feito de muitas formas, tanto com
bibliotecas quanto com JS puro.

Para esse projeto recomendamos o uso de [expressões regulares
(`RegExp`)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

### Tutoriais / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

## 8. Checklist

### General

* [X] Poder instalar via `npm install -g <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog com as implementações da sua biblioteca
* [ ] Documentação técnica da sua biblioteca
* [ ] Guia de uso e instalação da biblioteca

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
