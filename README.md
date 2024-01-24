<!-- PROJECT LOGO -->

<p align="center">
  <img alt="nlw-IA" src=".github/logo.svg" width="60%">
</p>
   <h1 align="center"> upload.ai </h1>
 </p>
<br />
<p align="center"> 
   <img src="https://img.shields.io/github/languages/count/brunosduarte/nlw-ia" alt="Languages">
	<img src="https://img.shields.io/github/repo-size/brunosduarte/nlw-ia " alt="Repo Size"> 
  	<a href="https://github.com/brunosduarte/nlw-ia/commits/master"> 
   		<img src="https://img.shields.io/github/last-commit/brunosduarte/nlw-ia" alt="Last Commit"> 
 	</a> 
  	<a href="https://opensource.org/licenses/MIT"> 
   		<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT"> 
  	</a> 
</p>

<!-- TABLE OF CONTENTS -->

## 🗂 Contents


- 📋 [Project](#-project)
  - 🚀 [Technologies](#-technologies)
  - 📷 [Preview](#-preview)
- 📦 [Instalation](#-instalation)
- ⚖️ [License](#%EF%B8%8F-license)
- 📫 [Contact](#-contact)

<!-- ABOUT THE PROJECT -->

## 📋 Project

This innovative project, developed during the nlw-IA event led by Diego Fernandes from Rocketseat, aims to create a web application that leverages cutting-edge artificial intelligence to analyze and extract key data from videos in an automated manner.

### 🚀 Technologies

- [TypeScript][typescript]
- [VS Code][vc]
- [PNPm][PNPm]
- [Vite][ViteJS]
- [Shadcn/ui][shadcn/ui]
- [Lucide][Lucide]
- [ESlint][eslint]
<!-- -   [CORS][cors]
- [Expo][expo]
- [Express][express]
- [Insomnia][insomnia]
- [KNEX.JS][knexjs]
- [NodeJS][nodejs]
- [Nodemon][nodemon]
- [npm][npm]
- [Prettier][prettier]
- [React][react]
- [React Native][reactnative]
- [SQLite][sqlite]
- [Yarn][yarn] -->

## 📷 Preview

##### 💻 frontend:

<p align="center"> 
  <img alt="nlw-IA" src=".github/web.png" width="100%">
</p>

## 📦 Instalation

To clone and run this application, you will need [Git](https://git-scm.com), [NodeJS v18.17.1][nodejs] or higher + [npm v9.17.1][npm] or higher, and [PNPm 8.7.5][pnpm] installed on your computer. In your terminal, run:


```bash
# Cloning repo
$ git clone https://github.com/brunosduarte/nlw-ia.git nlw-ia
```

```bash
# Installing pnpm
$ npm install -g pnpm
```

```bash
# Backend

# Go to the repository
$ cd server

# Install the dependencies
$ pnpm i

# Create migrations
$ pnpm prisma migrate dev


# Note: After running the command above, you will be prompted to enter the migration name. You can use the following name: "create videos and prompts"

----------------------------------------------------------------------------------------------------------------------------------------
# Before running the API, change the .env.example to .env and add your OpenAI API key to the .env file
----------------------------------------------------------------------------------------------------------------------------------------

# Run the API
$ pnpm run dev

# Note: After running the command above, the API will be available at http://localhost:3333

```

```bash
# Frontend

# Got to the repository
$ cd web

# Install dependencies
$ pnpm i

# Execute
$ pnpm run dev
```

<!-- LICENSE -->

## ⚖️ License

This project is under license. [MIT](LICENSE).

<!-- CONTACT -->

## 📫 Contact

by [**Bruno Duarte**](https://www.linkedin.com/in/brunosduarte/) 🚀

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[PNPm]: https://pnpm.io/pt/
[npm]: https://www.npmjs.com/
[ViteJS]: https://vitejs.dev/
[shadcn/ui]: https://ui.shadcn.com/
[Lucide]: https://lucide.dev/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[html]: https://www.w3schools.com/html/
[express]: https://expressjs.com/
[nodemon]: https://www.postgresql.org
[expo]: https://expo.io
[react]: https://pt-br.reactjs.org
[reactnative]: https://reactnative.dev
[insomnia]: https://insomnia.rest
[sqlite]: https://www.sqlite.org
[knexjs]: http://knexjs.org
[cors]: https://www.npmjs.com/package/cors
[prettier]: https://prettier.io
[eslint]: https://eslint.org
[celebrate]: https://github.com/arb/celebrate
[typescript]: https://www.typescriptlang.org/
