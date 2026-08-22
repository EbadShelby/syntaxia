# Syntaxia

**Your personal coding reference for the things you always look up.**

Syntaxia is a sleek, modern web application built with **Vue 3** and **Tailwind CSS**. It serves as a quick, centralized reference for various programming languages, libraries, databases, and frameworks.

## Features

- **Comprehensive Topics**: Quick reference guides for HTML, CSS, JavaScript, Vue, React, PHP, Laravel, Python, C++, Java, Node.js, Databases (MySQL, PostgreSQL, MongoDB), and many more.
- **Dynamic Syntax Highlighting**: Powered by [Shiki](https://shiki.style/), code snippets are highlighted accurately with VS Code themes (One Dark Pro), loaded lazily on demand for optimal performance.
- **Glassmorphic UI**: A beautiful, modern interface with smooth animations, dynamic theme colors, and a dark theme tailored for developers.
- **Interactive Filtering**: Easily sort through topics on the homepage using the scrollable category pills (Programming Languages, Frameworks, Databases, etc.).
- **Responsive Design**: Fully optimized for both desktop and mobile devices, featuring a mobile-friendly table of contents drawer.

## Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Vanilla CSS variables for theme customization)
- **Routing:** Vue Router (with route-level lazy loading)
- **Syntax Highlighting:** Shiki

## Project Setup

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with ESLint

```sh
npm run lint
```

## Adding New Topics

To add a new reference topic:
1. Create a new markdown/content definition.
2. Add the language metadata to the `languages` array in `src/views/HomeView.vue`.
3. Add the corresponding icon to the `public/` directory.

---
&copy; 2025 Ebad Yasser. All Rights Reserved.
