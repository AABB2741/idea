# 🧠 Idea – Notion Clone (Study Project)

**Idea** is a Notion-inspired productivity app built as a fullstack clone for learning purposes. It aims to replicate some of the core features of Notion, such as blocks, pages, nested structures, and rich content editing, across web and mobile platforms.

This project is not affiliated with Notion in any way.

## 📚 About the Project

This project was created as a way to learn and practice fullstack development using modern tools and technologies. It is **not** intended to be a production-ready alternative to Notion, and it **will not** be monetized or promoted commercially.

The core objective is to explore:

- **React** for building the web interface
- **React Native** for the mobile experience
- **Node.js** and **Fastify** for building a performant backend API
- **Turborepo** for managing the monorepo setup efficiently

## ⚠️ Disclaimer

> This project is for **educational and personal learning purposes only**.  
> It is not intended for public use, commercial distribution, or monetization.  
> All trademarks and copyrights are the property of their respective owners.

## 🚧 Current Stack

- **TypeScript**
- **Vitest** (for unit/e2e testing)
- **Zod v4** (for schema validation)

### Frontend Web

- **React** (Web)
- **Vite**
- **TailwindCSS v4** (with Shadcn UI)
- **TanStack Router** (for page routing)
- **TanStack Query** (for data fetching and caching)
- **TanStack Table**
- **TanStack Form**
- **Zustand** (for global state management)
- **Axios**

### Frontend Mobile
- **React Native**
- **NativeWind** (with React Native Reusables)
- **Expo** (for React Native development)
- **Expo Router** (for navigation)
- **TanStack Query** (for data fetching and caching)
- **TanStack Form**
- **Zustand** (for global state management)
- **Axios**

### Backend

- **Node.js**
- **Fastify**
- **Fastify Type Provider Zod** (for zod integration)
- **Fastify Swagger** (for API documentation)
- **Prisma** (ORM)
- **PostgreSQL**
- **JWT** (for authentication)

### Monorepo

- **Turborepo**
- **pnpm** (package manager)

## 📂 Project Structure

```
apps/
  web/         → React web app
  mobile/      → React Native app
  api/         → Fastify backend API
config/
  eslint/      → Eslint configuration
  prettier/    → Prettier configuration
  tsup/        → TypeScript bundler configuration
  typescript/  → TypeScript configuration
```

## 🚀 Getting Started

> Requirements:
> - Node.js >= 22
> - pnpm
> - PostgreSQL running locally (via docker)

1. Clone the repo:
```bash
git clone https://github.com/AABB2741/idea.git
cd idea
```

2. Install dependencies:
```bash
pnpm install
```

3. Setup environment variables (check each app's `.env.example`)

4. Run the services required:
```bash
docker compose up -d
```

5. Run the development servers:
```bash
pnpm dev
```

## ✨ Features (In Progress)

- [ ] Interface creation

## 🤝 Contributing

This is a personal study project, and contributions are not currently being accepted. However, feel free to fork the repository or use it as inspiration for your own learning!

## 📄 License

This project is open-source and licensed under the MIT License.

---

**Notion** is a trademark of Notion Labs, Inc.  
This project is not associated with or endorsed by Notion Labs, Inc.
