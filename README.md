<p align="center">
  <img alt="nlw-IA" src=".github/logo.svg" width="15%">
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


## 🗂 Contents


- 📋 [Project](#-project)
  - 🚀 [Technologies](#-technologies)
  - 📷 [Preview](#-preview)
- 📦 [Instalation](#-instalation)
- ⚖️ [License](#%EF%B8%8F-license)
- 📫 [Contact](#-contact)


## 📋 Project

This innovative project, developed during the nlw-IA event led by Diego Fernandes from Rocketseat, aims to create a web application that leverages cutting-edge artificial intelligence to analyze and extract key data from videos in an automated manner.

### 🚀 Technologies

[![My Skills](https://skillicons.dev/icons?i=openai,ffmpeg,radixui,tailwindcss,fastify,react,nodejs,vite,ts,zod,prisma,axios)](https://skillicons.dev)

- [OpenAI][openai]
- [FFmpeg][ffmpeg]
- [Radix][radix]
- [TailwindCSS][tailwindcss]
- [TypeScript][typescript]
- [NodeJS][nodejs]
- [Fastify][Fastify]
- [Zod][zod]
- [Prisma][prisma]
- [Axios][axios]


## 📷 Preview

##### 💻 frontend:

<p align="center"> 
  <img alt="nlw-IA" src=".github/web.png" width="100%">
</p>

## 📦 Instalation

To clone and run this application, you will need [Git](gitlink), [NodeJS v18.17.1][nodejs] or higher + [npm v9.17.1][npm] or higher, and [PNPm 8.7.5][pnpm] installed on your computer. In your terminal, run:


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


## ⚖️ License

This project is under license. [MIT](LICENSE).


## 📫 Contact

by [**Bruno Duarte**](https://www.linkedin.com/in/brunosduarte/) 🚀


[nodejs]: https://nodejs.org/
[PNPm]: https://pnpm.io/pt/
[npm]: https://www.npmjs.com/
[typescript]: https://www.typescriptlang.org/
[openai]: https://www.openai.com/
[ffmpeg]: https://www.ffmpeg.com/
[radix]: https://www.radix.com/
[tailwindcss]: https://www.tailwindcss.com/
[fastify]: https://www.fastify.com/
[zod]: https://www.zod.com/
[prisma]: https://www.prisma.com/
[axios]: https://www.axios.com/
