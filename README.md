# Projectly Landing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.13+-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5+-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Landing page for **Projectly** — a modern project management system for teams.

## 🌐 Live

[https://projectly.ru](https://projectly.ru)

## ✨ Features

- 🌍 **Multilingual** — Russian and English support (i18n)
- 🎨 **Modern Design** — Clean UI with Tailwind CSS
- 📱 **Responsive** — Mobile-first approach
- ⚡ **SSR Ready** — Server side rendering with Nuxt 3
- 🔍 **SEO Optimized** — Sitemap, robots.txt, meta tags
- 📊 **Analytics** — Yandex Metrika integration
- ♿ **Accessible** — Headless UI components

## 🛠️ Tech Stack

- **[Nuxt 3](https://nuxt.com/)** — Vue.js framework with SSR/SSG
- **[Vue.js 3](https://vuejs.org/)** — Progressive JavaScript framework
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Nuxt i18n](https://i18n.nuxtjs.org/)** — Internationalization
- **[Nuxt Icon](https://nuxt.com/modules/icon)** — Icon framework
- **[Headless UI](https://headlessui.com/)** — Unstyled accessible components
- **[Splide](https://splidejs.com/)** — Lightweight carousel/slider

## 🚀 Quick Start

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/neketli/projectly-landing.git
   cd projectly-landing
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   Create a `.env` file in the project root:

   ```bash
   cp .env.example .env
   ```

   Set your Yandex Metrika ID:

   ```env
   NUXT_YM_ID=your_yandex_metrika_id
   ```

4. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**

   ```bash
   npm run generate
   ```

   Static files will be generated in the `.output/public` directory.

6. **Preview Production Build**

   ```bash
   npm run preview
   ```


## 📁 Project Structure

```bash
projectly_landing
├─ app.vue              # App entry point
├─ assets/              # Static assets (images, fonts, etc.)
├─ components/          # Reusable Vue components
├─ i18n/                # Internationalization files
├─ layouts/             # Page layouts
├─ pages/               # App pages
├─ public/              # Public static files
├─ nuxt.config.ts       # Nuxt configuration
├─ tailwind.config.js   # Tailwind CSS configuration
├─ package.json         # Project dependencies
└─ Dockerfile           # Docker containerization
```

## 🐳 Docker

Build and run with Docker Compose:

```bash
docker compose up -d
```

The landing will be available at `http://localhost:3000`.

## 📞 Support

- 🐛 [Create an issue](https://github.com/neketli/projectly_landing/issues)
- 📧 Contact the [author](https://github.com/neketli)

---

⭐ If you find this project useful, please give it a star on GitHub!
