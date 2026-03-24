# 🚀 AutoPilot Social

> **AI-powered social media automation platform** — schedule, create, and manage your social media content on autopilot.

AutoPilot Social is a modern web application built with React, TypeScript, and Vite that helps users automate their social media workflows. From content scheduling to analytics dashboards, it provides a complete suite of tools to streamline your social media presence.

---

## ✨ Features

- **Smart Content Scheduling** — Plan and queue posts across multiple platforms with an intuitive calendar interface.
- **Analytics Dashboard** — Track engagement, reach, and growth with interactive charts powered by Recharts.
- **Responsive Design** — Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices.
- **Dark/Light Mode** — Theme switching support via `next-themes` for comfortable viewing in any environment.
- **Smooth Animations** — Polished micro-interactions and page transitions powered by Framer Motion.
- **Form Validation** — Robust form handling with React Hook Form and Zod schema validation.
- **Accessible Components** — Built on Radix UI primitives (shadcn/ui) ensuring full keyboard navigation and screen reader support.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 (SWC plugin) |
| **Styling** | Tailwind CSS 3 + `tailwindcss-animate` |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Routing** | React Router DOM v6 |
| **State / Data** | TanStack React Query v5 |
| **Charts** | Recharts |
| **Animations** | Framer Motion 11 |
| **Forms** | React Hook Form + Zod |
| **Notifications** | Sonner (toast notifications) |
| **Unit Testing** | Vitest + Testing Library |
| **E2E Testing** | Playwright |
| **Linting** | ESLint 9 + TypeScript ESLint |

---

## 📦 Prerequisites

- **Node.js** >= 18.x
- **npm**, **yarn**, or **bun** (lock files for both npm and bun are included)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/baidi4200/auto-pilot-social-70.git
cd auto-pilot-social-70
```

### 2. Install dependencies

```bash
# Using npm
npm install

# Using bun
bun install
```

### 3. Start the development server

```bash
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### 4. Build for production

```bash
npm run build
```

The optimized output will be in the `dist/` directory, ready to deploy.

### 5. Preview the production build

```bash
npm run preview
```

---

## 🧪 Testing

### Unit Tests

```bash
# Run once
npm run test

# Watch mode
npm run test:watch
```

### End-to-End Tests (Playwright)

```bash
npx playwright install   # first time only
npx playwright test
```

---

## 📁 Project Structure

```
auto-pilot-social-70/
├── public/                  # Static assets
├── src/                     # Application source code
│   ├── components/          # Reusable UI components (shadcn/ui + custom)
│   ├── pages/               # Route-level page components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, helpers, and configurations
│   └── ...
├── index.html               # Entry HTML file
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts           # Vite build configuration
├── vitest.config.ts         # Vitest test configuration
├── playwright.config.ts     # Playwright E2E test configuration
├── components.json          # shadcn/ui component registry config
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run build:dev` | Build with development mode settings |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run test` | Run unit tests once |
| `npm run test:watch` | Run unit tests in watch mode |

---

## 🚢 Deployment

This project outputs a static site and can be deployed to any static hosting provider:

- **Vercel** — `vercel deploy`
- **Netlify** — connect the repo and set build command to `npm run build`, publish directory to `dist`
- **GitHub Pages** — use a GitHub Action to build and deploy the `dist` folder
- **Cloudflare Pages** — connect the repo with `npm run build` and `dist` as output

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private. All rights reserved.

---

<p align="center">
  Built with ❤️ using React, TypeScript & Vite
</p>
