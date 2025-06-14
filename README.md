## Next.js Project Setup and Basics
> Next.js is a React framework for building fast, production-ready web applications with features like server-side rendering (SSR), static site generation (SSG), and API routes built in.

## Create a Next.js App

To get a local copy up and running follow these simple example steps.

### Prerequisites
```
  node js
  npm

```
### Setup
Run the command below and change directory to the my-app directory

``` 
  $ npx create-next-app@latest my-app

  $ cd my-app

```

### Install
Install all project dependencies by running the command below
 
``` 
  $ npm install
```
### Usage
Start the pplication server
``` 
  $ npm run dev
```

### Visit the deployment server
visit this link: 
[http://localhost](http://localhost:3000)

## Basics of NextJS
**Pages:** Files in the /pages directory automatically become routes.

 - /pages/index.tsx → /

 - /pages/about.tsx → /about

**Components:** Reusable UI pieces, typically stored in /components.

**Routing:** Built-in file-based routing system — no need for react-router.

**Styling:** Supports CSS Modules, Tailwind CSS, Sass, and more.

**Static Assets:** Place images or files in the /public folder and access via /filename.

**API Routes:** Create backend functions in /pages/api/*.js.

**Pre-rendering:** Pages can be server-side rendered (SSR) or statically generated (SSG).


