# 🗒️ Contact List API
## 🚀 Descrição do Projeto
Está cansado de ter que lembrar todos os seus contatos de cabeça? Então temos a solução perfeita para você! Utilize a Contact List e anote os dados daquele amigo querido para que você nunca mais esquecer as informações na hora de mandar uma mensagem!!!


<br/>


## 🔍 Sobre
Na Contact List API você poderá adicionar, editar e deletar seus contatos, sem falar que você receberá a lista com todos eles de forma prática e organizada! Fácil, não é mesmo? Nessa API, podemos encontrar as seguintes funcionalidades:

### Features
- [x] [`Verificar se o server está funcionando`](#get-health)
- [x] [`Buscar lista de contatos`](#get-contacts)
- [x] [`Adicionar contato`](#post-contacts)
- [x] [`Editar dados de um contato`](#put-contactscontactid)
- [x] [`Remover contato`](#delete-contactscontactid)

<br/>


## ✔️ Tabela de conteúdo
<!--ts-->
- [🗒️ Contact List API](#️-contact-list-api)
	- [🚀 Descrição do Projeto](#-descrição-do-projeto)
	- [🔍 Sobre](#-sobre)
		- [Features](#features)
	- [✔️ Tabela de conteúdo](#️-tabela-de-conteúdo)
	- [🖥 Tecnologias](#-tecnologias)
	- [⚙ Como usar](#-como-usar)
		- [Instalando o app](#instalando-o-app)
		- [Instalando a API](#instalando-a-api)
		- [Preparando setup](#preparando-setup)
		- [Iniciando o servidor](#iniciando-o-servidor)
		- [Populando banco de dados](#populando-banco-de-dados)
		- [Inicializando a API](#inicializando-a-api)
	- [📜 Documentação](#-documentação)
		- [`GET /health`](#get-health)
		- [`GET /contacts`](#get-contacts)
		- [`POST /contacts`](#post-contacts)
		- [`PUT /contacts/:contactId`](#put-contactscontactid)
		- [`DELETE /contacts/:contactId`](#delete-contactscontactid)
	- [🤖 Testes](#-testes)
	- [👨🏼‍💻 Autora](#-autora)
<!--te-->

<br/>


## 🖥 Tecnologias
<p align="center">
  <img alt="mongodb" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
	<img alt="jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img alt="eslinter" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</p>

<br/>


## ⚙ Como usar

Para utilizar essa API, será necessário ter na sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/).
Além disso recomendo fortemente a utilização de um bom ter um editor de código, como o [VSCode](https://code.visualstudio.com/)!


### Instalando o app
Seguir os passos descritos na seção de [instalação do app](https://github.com/starunz/ContactList/blob/main/README.md).

### Instalando a API
```bash
# Clone este repositório
git clone https://github.com/starunz/contact-list-back
# Acesse a pasta do projeto no terminal/cmd
cd contact-list-back
# Instale as dependências
npm install
```


### Preparando setup
Na pasta principal da API, crie um arquivo `.env.dev` aos mesmos moldes do arquivo [`.env.example`](https://github.com/starunz/contact-list-back/blob/main/.env.example). Caso você queira ver nossos testes em ação, crie um arquivo `.env.test` também aos mesmos moldes do [`.env.example`](https://github.com/starunz/contact-list-back/blob/main/.env.example).


### Iniciando o servidor

```bash
# Enquanto estiver utilizando o MongoDB, seu servidor deve estar funcionando
mongod --dbpath ~/.mongo
# Esse comando deverá ser feito toda vez que quiser rodar o servidor do mongoDB
```
Agora, abra outro terminal e também deixe o mongo rodando em segundo plano com o seguinte comando:

```bash
# Enquanto estiver utilizando o MongoDB, o mongo deve estar ativo
mongo
# Esse comando também deverá ser feito toda vez que quiser rodar o servidor do mongoDB
```

### Populando banco de dados

```bash
# Popular sua database através de um script
npm run seed
```
Caso queira ver, a população do database será feita através [desse script](https://github.com/starunz/contact-list-back/blob/main/src/database/seed.ts). Além disso, a estrutura do nosso banco de dados pode ser vista através [desse arquivo](https://github.com/starunz/contact-list-back/blob/main/src/database/mock/contactsMock.ts)!


### Inicializando a API
```bash
# Execute a aplicação em modo de desenvolvimento
npm run start:dev
# O servidor iniciará na porta:PORT (escolhida no arquivo .env) - acesse http://localhost:PORT 
```

<br/>


## 📜 Documentação
Agora veremos quais os principais endpoints dessa aplicação

### `GET /health`

### `GET /contacts`

### `POST /contacts`

### `PUT /contacts/:contactId`

### `DELETE /contacts/:contactId`

<br/>


## 🤖 Testes
Para essa API foram implementados testes de integração e unitários! Segue a listinha de comando que temos para utilizar:

```bash
# Roda uma única vez os testes
npm run test
# Avalia a taxa de cobertura dos testes
npm run test:coverage
```

<br/>


## 👨🏼‍💻 Autora

<img border-radius='50%' style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87653713?v=4" width="100px;" alt="Foto de perfil Bruna Souza"/>

Feito com carinho por Bruna Souza. Entre em contato comigo!

[![Gmail Badge](https://img.shields.io/badge/-busouza01@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:busouza01@gmail.com)](mailto:busouza01@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Bruna-Souza?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/starunz)](https://www.linkedin.com/in/starunz) 

<br/><br/>
