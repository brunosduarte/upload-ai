 <h1 align="center">upload.ai</h1>
<br />
<p align="center"> 
   <img src="https://img.shields.io/github/languages/count/brunosduarte/upload-ai" alt="Languages">
	<img src="https://img.shields.io/github/repo-size/brunosduarte/upload-ai" alt="Repo Size"> 
  	<a href="https://github.com/brunosduarte/upload-ai/commits/master"> 
   		<img src="https://img.shields.io/github/last-commit/brunosduarte/upload-ai" alt="Last Commit"> 
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

[![React.js](https://img.shields.io/badge/React.js-gray?logo=React)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-gray?logo=Node.js)](https://nodejs.org)
[![OpenAI](https://img.shields.io/badge/OpenAI-gray?logo=OpenAI)](https://openai.com)
[![FFmpeg](https://img.shields.io/badge/FFmpeg-gray?logo=FFmpeg)](https://ffmpeg.org)
[![RadixUI](https://img.shields.io/badge/RadixUI-gray?logo=Radix+UI)](https://www.radix.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-gray?logo=TypeScript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-gray?logo=Tailwind+CSS)](https://www.tailwindcss.com)
[![Fastify](https://img.shields.io/badge/Fastify-gray?logo=Fastify)](https://www.fastify.dev)
[![Zod](https://img.shields.io/badge/Zod-gray?logo=Zod)](https://www.zod.dev)
[![Prisma](https://img.shields.io/badge/Prisma-gray?logo=Prisma)](https://www.prisma.io)
[![Axios](https://img.shields.io/badge/Axios-gray?logo=Axios)](https://www.axios-http.com)


## 📷 Preview

##### 💻 frontend:

<p align="center"> 
  <img alt="upload-ai" src=".github/cover.png" width="100%">
</p>

## 📦 Instalation

To clone and run this application, you will need [Git][git], [NodeJS v18.17.1][nodejs] or higher + [npm v9.17.1][npm] or higher, and [PNPm 8.7.5][pnpm] installed on your computer. In your terminal, run:


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
[git]: https://git-scm.com
