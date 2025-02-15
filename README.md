<h1 align="center">
  <a href="https://dhunanyan.com" alt="Official Website">
    <p>dhunanyan.com</p>
    <img alt="Logo" src="https://raw.githubusercontent.com/dhunanyan/portfolio/master/public/svg/i_logo-bg.svg" width="100" />
  </a>
</h1>

## 🌐 Davit Hunanyan - Portfolio [![Netlify Status](https://api.netlify.com/api/v1/badges/a77080ba-aa75-4807-ad50-b0e00c0c31da/deploy-status)](https://app.netlify.com/sites/dhunanyan/deploys)

Welcome to the source code for my personal portfolio website! Crafted with the latest in web technologies and built to showcase my skills, experience, and projects, this site represents both my journey as a software developer and my commitment to delivering high-quality, performant web applications.

<p align="center">
  <a href="https://app.netlify.com/sites/dhunanyan/deploys" alt="Netlify Deploys">
    <img alt="Netlify Status" src="https://raw.githubusercontent.com/dhunanyan/portfolio/master/docs/i_netlify.svg"  />
  </a>
</p>

## 📸 Screenshots

| Desktop                                                                                                         | Mobile                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Desktop Screenshot](https://raw.githubusercontent.com/dhunanyan/portfolio/master/docs/screenshot-desktop.png) | ![Mobile Screenshot](https://raw.githubusercontent.com/dhunanyan/portfolio/master/docs/screenshot-mobile.png) |

## 🎨 Overview

This portfolio site is built with Next.js, a powerful React framework for building fast and optimized static and dynamic web applications. With server-side rendering (SSR), dynamic routing, and custom API endpoints, Next.js powers a seamless and snappy user experience. Whether it’s showing off completed projects, highlighting key skills, or making it easy to connect, this site serves as a digital handshake with anyone interested in my work.

## ✨ Features

- **Fast & Responsive**: Built with modern web standards for a smooth and responsive experience across devices.
- **SEO Optimized**: Utilizing Next.js SEO features to ensure the portfolio stands out on search engines.
- **Dynamic Routing**: Each project and experience section dynamically routes to a detailed page.
- **API-Driven Content**: Project details, blogs, and experience info fetched using server-side rendered data fetching from [**Contentful**](https://www.contentful.com 'Contentful').
- **Styled Components**: Elegant UI, with styled-components providing a maintainable and component-based CSS structure.

## 🖥️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org 'Next.js') (React)
- **Styling** / **Animations**: [SASS](https://sass-lang.com 'SASS')
- **Content**: [Contentful](https://www.contentful.com 'Contentful')
- **TypeScript** ✔️
- **ESLint** ✔️
- **Prettier** ✔️
- **Husky** ✔️
- **App Router** ✔️
- **Deployment**: [Netlify](https://www.netlify.com, 'Netlify')

## 🎨 Colors

| Color                  | Hex                                                            |
| ---------------------- | -------------------------------------------------------------- |
| $primary-color         | ![](https://singlecolorimage.com/get/0a192f/20x20) `#0a192f`   |
| $secondary-color       | ![](https://singlecolorimage.com/get/ccd6f6/20x20) `#ccd6f6`   |
| $tertiary-color        | ![](https://singlecolorimage.com/get/232A39/20x20) `#1e293b80` |
| $alt-color             | ![](https://singlecolorimage.com/get/8892b0/20x20) `#8892b0`   |
| $alt-secondary-color   | ![](https://singlecolorimage.com/get/495670/20x20) `#495670`   |
| $tint-color            | ![](https://singlecolorimage.com/get/64ffda/20x20) `#64ffda`   |
| $tint-secondary-color  | ![](https://singlecolorimage.com/get/89d0c2/20x20) `#89d0c2`   |
| $tint-tertiary-color   | ![](https://singlecolorimage.com/get/386463/20x20) `#2dd4bf1a` |
| $tint-color-opacity    | ![](https://singlecolorimage.com/get/5ADDC1/20x20) `#64ffdb46` |
| $tint-color-opacity-v2 | ![](https://singlecolorimage.com/get/2F434A/20x20) `#64ffdb1e` |

## 🚧 Roadmap

Planned enhancements for future versions include:

- **Dark Mode**: Toggle for users to switch between light and dark themes.
- **CMS Integration**: Headless CMS integration to easily manage portfolio content.
- **Blog Section**: A blog for sharing insights and tutorials.

## ⚙️ Installation & Set Up

1. **Clone the repository**

```bash
git clone https://github.com/davithunanyan/portfolio.git
```

2. **Navigate to the project directory**

```bash
cd portfolio
```

3. **Set Node version to 20 using NVM**

```bash
# WARNING - this can be done manually by downloading the version from https://nodejs.org/en/download/package-manager
nvm use `cat .nvmrc` # Windows
nvm use # MacOS / Linux
```

3. **Install dependencies**

```bash
yarn install
```

4. **Start the development server**

```bash
yarn dev
```

This command starts the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠 Building and Running for Production

1. **Generate Static Build**

```bash
yarn build
```

This command optimizes the app for production, including compiling and minifying files.

2. **Run the Production Build**

```bash
yarn start
```

Your Next.js app will start on http://localhost:3000 and be ready for high-performance production use.

## 🚀 Deployment

1. **Deploy to Netlify**

Create PR to **`netlify`** branch and merge it or in order to force:

```bash
  git branch -m netlify
  git push -f origin netlify
```

There are not Git workflows are other automation created for extra testing layer before production build (such as unit tests, jest coverage etc...). So each time anything is being merged to **`netlify`** it triggers a deployment job on [**Netlify**](https://app.netlify.com/sites/dhunanyan/deploys) side.
